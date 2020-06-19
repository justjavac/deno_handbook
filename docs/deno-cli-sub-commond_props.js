import Ga from '/_ga.js';
export default {
    'config': {
        "srcDir": ".",
        "publicDir": "public",
        "ignore": [
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {},
            {}
        ],
        "base": "/",
        "theme": "docs",
        "plugins": [
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
        ],
        "watch": false,
        "serve": false,
        "port": 8000,
        "title": "Deno 入门指南",
        "sidebar": [
            "README.md",
            "docs/install-deno.md",
            "docs/setup-environment.md"
        ],
        "nav": [
            {
                "text": "GitHub",
                "link": "https://github.com/justjavac/deno_handbook"
            },
            {
                "text": "社区",
                "link": "http://deno.js.cn"
            }
        ],
        "ga": {
            "id": "UA-123999279-3"
        }
    },
    'pagePath': "docs/deno-cli-sub-commond.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/deno-cli-sub-commond.html",
    'title': "Deno 命令行",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Deno 命令行</h1>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
    'toc': React.createElement("aside", { dangerouslySetInnerHTML: {
            __html: '<nav class="toc"><ol></ol></nav>'
        } }),
    'sidebar': [
        {
            "text": "Deno 入门教程",
            "link": "index.html"
        },
        {
            "text": "安装 Deno",
            "link": "docs/install-deno.html"
        },
        {
            "text": "配置 Deno 开发环境",
            "link": "docs/setup-environment.html"
        }
    ],
    'ga': React.createElement(Ga, { id: "UA-123999279-3" })
};
