export default {
    srcDir: ".",
    outDir: "public",
    include: ["README.md", "docs"],
    ignore: [
        "codes",
        "LICENSE",
    ],
    theme: "docs",
    plugins: ["sidebar", "script", "ga"],
    title: "Deno 入门指南",
    github: "justjavac/deno_handbook",
    sidebar: {
        "/": ["README.md", "docs/install-deno.md", "docs/setup-environment.md"],
    },
    nav: [
        {
            text: "社区",
            link: "https://deno.js.cn",
            target: '_blank',
        },
        {
            text: "安装",
            link: "https://x.deno.js.cn",
            target: '_blank',
        },
    ],
    ga: {
        id: "UA-123999279-3",
    },
    tools: {
        editOnGithub: true,
        backToTop: true,
    },
};
