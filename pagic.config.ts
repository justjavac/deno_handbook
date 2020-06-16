export default {
  srcDir: ".",
  ignore: [
    /\/codes\//,
    /\/public\//,
    /\/\.github\//,
    /\/\.vscode\//,
    /\/LICENSE/,
  ],
  theme: "docs",
  plugins: ["sidebar", "script", "ga"],
  title: "Deno 入门指南",
  sidebar: [
    "README.md",
    "docs/install-deno.md",
    "docs/setup-environment.md",
  ],
  nav: [
    {
      text: "GitHub",
      link: "https://github.com/justjavac/deno_handbook",
    },
    {
      text: "社区",
      link: "http://deno.js.cn",
    },
  ],
  ga: {
    id: "UA-123999279-3",
  },
};
