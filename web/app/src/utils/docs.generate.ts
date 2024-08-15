import { type convertFile, convertMarkdownToMdx } from "./md-to-mdx";

const rootDir = "../..";
const docsDir = "src/content/docs/docs";
const assetsDir = "src/assets";

const filesToConvert: convertFile[] = [
  //   {
  //     input: `${rootDir}/local-remote-execution/README.md`,
  //     output: `${docsDir}/explanations/lre.mdx`,
  //     title: "Local Remote Execution architecture",
  //   },
  //   {
  //     input: `${rootDir}/CONTRIBUTING.md`,
  //     output: `${docsDir}/contribute/guidelines.mdx`,
  //     title: "NativeLink contribution guidelines",
  //   },
  //   {
  //     input: "README.md",
  //     output: `${docsDir}/contribute/docs.mdx`,
  //     title: "Working on documentation",
  //   },
  //   {
  //     input: `${rootDir}/nativelink-config/README.md`,
  //     output: `${docsDir}/config/configuration-intro.mdx`,
  //     title: "NativeLink configuration guide",
  //   },
  //   {
  //     input: `${rootDir}/deployment-examples/chromium/README.md`,
  //     output: `${docsDir}/deployment-examples/chromium.mdx`,
  //     title: "NativeLink deployment example for Chromium",
  //   },
  //   {
  //     input: `${rootDir}/deployment-examples/kubernetes/README.md`,
  //     output: `${docsDir}/deployment-examples/kubernetes.mdx`,
  //     title: "NativeLink deployment example for Kubernetes",
  //   },
  {
    input: `${rootDir}/CHANGELOG.md`,
    output: `${docsDir}/reference/changelog.mdx`,
    docs: {
      title: "Changelog",
      description: "NativeLink's Changelog",
      pagefind: false, // Set pagefind to false for changelog
    },
  },
  {
    input: `${rootDir}/README.md`,
    output: `${docsDir}/introduction/setup.mdx`,
    docs: {
      title: "Introduction",
      description: "Get started with NativeLink",
      pagefind: true,
      assets: [`${assetsDir}/logo-dark.svg`, `${assetsDir}/logo-light.svg`],
    },
  },
];

filesToConvert.map((file) => {
  convertMarkdownToMdx(file);
});
