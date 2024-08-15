import starlightUtils from "@lorenzo_lewis/starlight-utils";

const docs = "/docs";

export const starlightConfig = {
  title: "NativeLink Docs",
  components: {
    PageFrame: "./src/components/starlight/PageFrame.astro",
  },
  logo: {
    light: "/src/assets/logo-light.svg",
    dark: "/src/assets/logo-dark.svg",
    replacesTitle: true,
  },
  social: {
    github: "https://github.com/TraceMachina/nativelink",
    slack:
      "https://nativelink.slack.com/join/shared_invite/zt-281qk1ho0-krT7HfTUIYfQMdwflRuq7A",
  },
  customCss: [
    "src/styles/tailwind.css",
    "src/styles/landing.css",
    "src/styles/custom.css",
  ],
  plugins: [
    starlightUtils({
      navLinks: {
        leading: { useSidebarLabelled: "leadingNavLinks" },
      },
    }),
  ],
  sidebar: [
    // The documentation structure follows the Diátaxis framework.
    // See https://diataxis.fr/ for details.
    {
      label: "Getting Started",
      collapsed: true,
      items: [
        {
          label: "Introduction",
          link: `${docs}/introduction/setup`,
        },
        {
          label: "NativeLink On-Prem",
          link: `${docs}/introduction/on-prem`,
        },
        {
          label: "Other Build Systems",
          link: `${docs}/introduction/non-bre`,
        },
      ],
    },
    {
      // Corresponds to https://diataxis.fr/tutorials/. Learning-oriented
      // content without elaborate explanations. Tutorials should have a
      // clear goal and a straightforward "follow-these-commands" structure.
      label: "NativeLink Cloud",
      collapsed: true,
      items: [
        {
          label: "Bazel",
          link: `${docs}/nativelink-cloud/bazel`,
        },
        {
          label: "Reclient",
          link: `${docs}/nativelink-cloud/reclient`,
        },
        {
          label: "Pants",
          link: `${docs}/nativelink-cloud/pants`,
        },
        {
          label: "API Keys in CI",
          link: `${docs}/nativelink-cloud/api-key`,
        },
      ],
    },
    {
      // Corresponds to https://diataxis.fr/how-to-guides/. Guides don't
      // need to be "complete". They should provide practical guidance for
      // real-world use-cases.
      label: "Configuring NativeLink",
      collapsed: true,
      items: [
        {
          label: "Configuration Introduction",
          link: `${docs}/config/configuration-intro`,
        },
        {
          label: "Basic Configurations",
          link: `${docs}/config/basic-configs`,
        },
        {
          label: "Production Configurations",
          link: `${docs}/config/production-config`,
        },
      ],
    },
    {
      // Corresponds to https://diataxis.fr/how-to-guides/. Guides don't
      // need to be "complete". They should provide practical guidance for
      // real-world use-cases.
      label: "On-Prem Examples",
      collapsed: true,
      items: [
        {
          label: "On-Prem Overview",
          link: `${docs}/deployment-examples/on-prem-overview`,
        },
        {
          label: "Kubernetes",
          link: `${docs}/deployment-examples/kubernetes`,
        },
        {
          label: "Chromium",
          link: `${docs}/deployment-examples/chromium`,
        },
      ],
    },
    {
      // Corresponds to https://diataxis.fr/explanation/. Information on
      // internal functionality and design concepts. Explanations should
      // explain design decisions, constraints, etc.
      label: "Understanding NativeLink",
      collapsed: true,
      items: [
        {
          label: "Architecture",
          link: `${docs}/explanations/architecture`,
        },
        {
          label: "History",
          link: `${docs}/explanations/history`,
        },
        {
          label: "Local Remote Execution",
          link: `${docs}/explanations/lre`,
        },
      ],
    },
    {
      // Corresponds to https://diataxis.fr/explanation/. Addresses
      // common questions and confusions about esoteric tooling and
      // concepts. It aims to help new users feel more at ease and
      label: "FAQ",
      collapsed: true,
      items: [
        {
          label: "Is NativeLink Free?",
          link: `${docs}/faq/cost`,
        },
        {
          label: "What is Remote Caching?",
          link: `${docs}/faq/caching`,
        },
        {
          label: "What is Remote Execution?",
          link: `${docs}/faq/remote-execution`,
        },
        {
          label: "What is LRE?",
          link: `${docs}/faq/lre`,
        },
        {
          label: "What are Toolchains?",
          link: `${docs}/faq/toolchains`,
        },
        {
          label: "How do I make my Bazel setup hermetic?",
          link: `${docs}/faq/hermeticity`,
        },
        {
          label: "What is Nix?",
          link: `${docs}/faq/nix`,
        },
        {
          label: "Why Rust?",
          link: `${docs}/faq/rust`,
        },
      ],
    },
    {
      // Corresponds to https://diataxis.fr/how-to-guides/. Guides for
      // contributors. They should provide practical guidance for
      // real-world use-cases.
      label: "For Contributors",
      collapsed: true,
      items: [
        {
          label: "Contribution Guidelines",
          link: `${docs}/contribute/guidelines`,
        },
        {
          label: "Working on documentation",
          link: `${docs}/contribute/docs`,
        },
        {
          label: "Develop with Nix",
          link: `${docs}/contribute/nix`,
        },
        {
          label: "Develop with Bazel",
          link: `${docs}/contribute/bazel`,
        },
        {
          label: "Developing with Cargo",
          link: `${docs}/contribute/cargo`,
        },
      ],
    },
    {
      // Corresponds to https://diataxis.fr/reference/. Technical
      // descriptions with the intent to be used as consulting material.
      // Mostly autogenerated to stay in sync with the codebase.
      label: "Reference",
      collapsed: true,
      items: [
        {
          label: "Glossary",
          link: `${docs}/reference/glossary`,
        },
        {
          label: "Changelog",
          link: `${docs}/reference/changelog`,
        },
        {
          label: "Configuration Reference",
          link: `${docs}/reference/nativelink-config`,
        },
      ],
    },
    // Navigation.
    {
      label: "leadingNavLinks",
      items: [
        { label: "Docs", link: `${docs}/introduction/setup` },
        { label: "NativeLink Cloud", link: "https://app.nativelink.com/" },
      ],
    },
  ],
};
