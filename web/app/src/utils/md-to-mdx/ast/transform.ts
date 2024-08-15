import type {
  Blockquote,
  Code,
  Heading,
  Image,
  InlineCode,
  Link,
  Paragraph,
  Parent,
  Root,
  RootContent,
  Text,
} from "mdast";
import { visit } from "unist-util-visit";

import { findNodesById, logFirstNNodes } from "./debug";

const BLOCK_TYPES = ["caution", "note", "tip"];

export function extractTitle(tree: Root): {
  title: string;
  content: RootContent[];
} {
  const { title, index } = extractTitleFromTree(tree);
  const content = removeTitleFromTree(tree, index);
  return { title, content };
}

function extractTitleFromTree(tree: Root): {
  title: string;
  index: number;
} {
  let title = "Default Title";
  let titleIndex = -1;

  for (let i = 0; i < tree.children.length; i++) {
    const node = tree.children[i];
    if (node && node.type === "heading" && (node as Heading).depth === 1) {
      title = extractTextFromNode(node as Heading);
      titleIndex = i;
      break;
    }
  }

  return { title, index: titleIndex };
}

function removeTitleFromTree(tree: Root, index: number): RootContent[] {
  if (index >= 0) {
    return [
      ...tree.children.slice(0, index),
      ...tree.children.slice(index + 1),
    ];
  }
  return tree.children;
}

function extractTextFromNode(node: Heading | Paragraph): string {
  return (node.children as Text[]).map((child) => child.value).join("");
}

export function transformGitHubMarkdown(content: RootContent[]): RootContent[] {
  return content.flatMap((node) => {
    if (node.type === "blockquote") {
      const transformed = transformBlockquote(node as Blockquote);
      if (transformed) {
        return [transformed];
      }
    }
    return [node];
  });
}

function transformBlockquote(blockquote: Blockquote): RootContent | null {
  const firstParagraph = blockquote.children[0] as Paragraph;
  const firstText = extractTextFromNode(firstParagraph).trim();

  const blockType = extractBlockType(firstText);
  if (blockType) {
    const contentText = extractBlockquoteContent(blockquote);
    const cleanedContentText = cleanBlockTypeFromContent(
      contentText,
      blockType,
      firstText.match(/^\[\!(\w+)\]/)?.[1] || "",
    );

    return {
      type: "html",
      value: `:::${blockType}\n${cleanedContentText}\n:::`,
    };
  }
  return null;
}

function extractBlockType(firstText: string): string | null {
  const match = firstText.match(/^\[\!(\w+)\]/);
  if (match?.[1]) {
    let blockType = match[1];
    if (blockType.toUpperCase() === "WARNING") {
      blockType = "caution";
    }
    blockType = blockType.toLowerCase();
    if (BLOCK_TYPES.includes(blockType)) {
      return blockType;
    }
  }
  return null;
}

function extractBlockquoteContent(blockquote: Blockquote): string {
  return blockquote.children
    .map((paragraph) => {
      if (paragraph.type === "paragraph") {
        return (paragraph as Paragraph).children
          .map((child) => {
            if (child.type === "text") {
              return (child as Text).value;
            }
            if (child.type === "inlineCode") {
              return `\`${(child as InlineCode).value}\``;
            }
            return "";
          })
          .join("");
      }
      if (paragraph.type === "code") {
        return `\`${(paragraph as Code).value}\``;
      }
      return "";
    })
    .join("\n");
}

function cleanBlockTypeFromContent(
  contentText: string,
  blockType: string,
  originalBlockType: string,
): string {
  return contentText
    .replace(`[!${blockType.toUpperCase()}]`, "")
    .replace(`[!${originalBlockType.toUpperCase()}]`, "")
    .trim();
}

export function preserveInlineCode(content: RootContent[]): RootContent[] {
  visit({ type: "root", children: content } as Root, "text", (node: Text) => {
    node.value = node.value.replace(/\\/g, "");
  });
  return content;
}

export function wrapLinksInParagraphs(
  paragraphNode: RootContent,
): RootContent[] {
  if (paragraphNode.type !== "paragraph") {
    return [paragraphNode];
  }

  const paragraph = paragraphNode as Paragraph;
  const newParagraphs: Paragraph[] = [];

  const linksWithImages: Link[] = paragraph.children.filter(
    (child): child is Link =>
      child.type === "link" && child.children.some((c) => c.type === "image"),
  );

  if (linksWithImages.length > 0) {
    for (const link of linksWithImages) {
      const image = link.children.find((c) => c.type === "image") as Image;
      if (image) {
        // Ensure that alt, url, and link.url are treated as strings and escape them
        const altText = escapeHtml(image.alt || "");
        const imageUrl = escapeHtml(image.url || "");
        const linkUrl = escapeHtml(link.url || "");

        newParagraphs.push({
          type: "paragraph", // Ensuring the node is of type "paragraph"
          children: [
            {
              type: "html",
              value: `<p>\n[![${altText}](${imageUrl})](${linkUrl})\n</p>`,
            },
          ],
        });
      }
    }
  } else {
    newParagraphs.push(paragraph); // Keep the original paragraph if no links with images were found
  }

  return newParagraphs;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function extractAndReplaceAlignAndParagraph(
  tree: RootContent[],
  targetId: string,
): {
  id: string | null;
  paragraph: Paragraph | null;
  content: RootContent[];
} {
  let id: string | null = null;
  let paragraph: Paragraph | null = null;
  let foundAndProcessed = false;

  const idRegex = new RegExp(
    `<(?:div|p)\\s[^>]*id=["']${targetId}["'][^>]*>`,
    "i",
  );
  const alignRegex = /align=["'](center|left|right)["']/i;

  const updatedTree = tree.map((node, index, children) => {
    if (!foundAndProcessed) {
      id = findAndProcessTargetNode(node, targetId, alignRegex, idRegex);
      if (id) {
        replaceAlignAttributeInNode(node, alignRegex); // Modify node in place
        paragraph = processAndWrapNextParagraph(children, index);
        const replacedTree = replaceParagraphInTree(children, paragraph);
        foundAndProcessed = true;
      }
    }
    return node; // Always return the node, modified or not
  });

  // Return the result as expected by the type definition
  return { id, paragraph, content: updatedTree };
}

function findAndProcessTargetNode(
  node: RootContent,
  targetId: string,
  alignRegex: RegExp,
  idRegex: RegExp,
): string | null {
  if (node.type === "html" && typeof node.value === "string") {
    const match = node.value.match(idRegex);
    if (match) {
      return targetId; // Extract the ID (since it matches targetId)
    }
  }
  return null;
}

// Define the valid alignments
type Alignments = "center" | "left" | "right";

// Map for align attribute values to corresponding CSS classes
const alignToClassMap: Record<Alignments, string> = {
  center: "flex flex-wrap justify-center items-center gap-0.5",
  left: "flex justify-start items-center",
  right: "flex justify-end items-center",
};

function replaceAlignAttributeInNode(
  node: RootContent,
  alignRegex: RegExp,
): void {
  if (node.type === "html" && typeof node.value === "string") {
    // Apply the replacement
    const newValue = node.value.replace(alignRegex, (match, p1) => {
      const alignment = p1.toLowerCase() as keyof typeof alignToClassMap;
      const replacement = `class="${alignToClassMap[alignment]}"`;
      return replacement;
    });

    node.value = newValue;
  }
}

function processAndWrapNextParagraph(
  children: RootContent[],
  index: number,
): Paragraph | null {
  const nextNode = children[index + 1];
  if (nextNode && nextNode.type === "paragraph") {
    const wrappedParagraphs = wrapLinksInParagraphs(nextNode);

    if (wrappedParagraphs.length > 0) {
      children.splice(index + 1, 1, ...wrappedParagraphs);
      return wrappedParagraphs[0] as Paragraph;
    }
  }
  return null;
}

function replaceParagraphInTree(
  tree: RootContent[],
  targetParagraph: Paragraph | null,
): RootContent[] {
  const newTree: RootContent[] = [];

  for (const node of tree) {
    if (node === targetParagraph) {
      const newParagraphs = wrapLinksInParagraphs(targetParagraph);
      newTree.push(...newParagraphs);
    } else {
      newTree.push(node);
    }
  }

  return newTree;
}

export function generateAssetImports(assets: string[]): RootContent[] {
  return assets.map((asset) => {
    const assetName = trasformToPascalCase(asset);
    return {
      type: "html",
      value: `import ${assetName} from '${asset}';\n`,
    };
  });
}

function trasformToPascalCase(filePath: string): string {
  // Extract the file name without extension
  const fileName = filePath.split("/").pop()?.split(".")[0];

  if (!fileName) {
    throw new Error("Invalid file path");
  }

  // Split by non-alphanumeric characters and capitalize each part
  const pascalCaseName = fileName
    .split(/[^a-zA-Z0-9]/) // Split by anything that's not a letter or number
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()) // Capitalize each part
    .join(""); // Join them back together

  return pascalCaseName;
}
