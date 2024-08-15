import type { Literal, Node, Parent, Root, RootContent } from "mdast";

// Define a type for nodes that contain a `value` property
interface HtmlNode extends Literal {
  type: "html";
  value: string;
}

// 1. Logging specific nodes in the AST
// This function logs all nodes of a given type in the AST.
export function logSpecificNodes(tree: Root, nodeType: string): void {
  tree.children.forEach((node, index) => {
    if (node.type === nodeType) {
      console.log(`Node at index ${index}:`, JSON.stringify(node, null, 2));
    }
  });
}

// 2. Logging a limited number of nodes
// These functions log only the first or last `n` nodes of the AST.
export function logFirstNNodes(nodes: RootContent[], n: number): void {
  console.log(JSON.stringify(nodes.slice(0, n), null, 2));
}

export function logLastNNodes(tree: Root, n: number): void {
  console.log(JSON.stringify(tree.children.slice(-n), null, 2));
}

// 3. Logging specific IDs in HTML nodes
// This function searches for HTML nodes with a specific ID and logs them.
export function findNodesById(tree: RootContent[], targetId: string): void {
  const idRegex = new RegExp(`id=["']${targetId}["']`, "i");
  //   console.log(tree.children[1]);
  tree.forEach((node, index) => {
    if (node.type === "html" && idRegex.test((node as HtmlNode).value)) {
      console.log(
        `Found node with ID ${targetId} at index ${index}:`,
        JSON.stringify(node, null, 2),
      );
    }
  });
}

// 4. Exporting the AST to a file
// This function writes the entire AST or a portion of it to a file for easier inspection.
export function exportAstToFile(tree: Root, filename: string): void {
  Bun.write(filename, JSON.stringify(tree, null, 2));
}

// 5. Recursively logging the AST up to a certain depth
// This function logs the AST up to a specified depth, which is useful for large structures.
export function logAstAtDepth(
  node: Node,
  depth: number,
  maxDepth: number,
): void {
  if (depth > maxDepth) {
    return;
  }

  console.log(JSON.stringify(node, null, 2));

  if ("children" in node && Array.isArray((node as Parent).children)) {
    for (const child of (node as Parent).children) {
      logAstAtDepth(child, depth + 1, maxDepth);
    }
  }
}

// 6. Logging processed Markdown sections
// This function logs sections of the Markdown content before and after processing.
export function logProcessedMarkdown(section: string, content: string): void {
  console.log(`--- ${section} ---\n${content}\n`);
}

// 7. Logging the AST after each transformation
// This function logs the state of the AST after a transformation stage.
export function logAstAfterTransformation(stage: string, tree: Root): void {
  console.log(`--- AST after ${stage} ---`);
  console.log(JSON.stringify(tree, null, 2));
}

// Example usage (uncomment the relevant lines to use):

// logSpecificNodes(tree, "paragraph");
// logFirstNNodes(tree, 5);
// logLastNNodes(tree, 5);
// findNodesById(tree, "description");
// exportAstToFile(tree, 'ast-output.json');
// logAstAtDepth(tree, 0, 2);
// logProcessedMarkdown('Transformed Markdown', modifiedMarkdown);
// logAstAfterTransformation('description processing', tree);
