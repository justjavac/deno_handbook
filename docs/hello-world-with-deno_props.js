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
    'pagePath': "docs/hello-world-with-deno.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/hello-world-with-deno.html",
    'title': "Hello World",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="hello-world">Hello World <a class="header-anchor" href="#hello-world">§</a></h1>\n'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/main.js", type: "module" })),
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
