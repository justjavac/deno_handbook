import Ga from '/_ga.js';
import projectConfig from '/pagic.config.js';
export default {
    'ga': React.createElement(Ga, { id: "UA-123999279-3" }),
    'sidebar': [
        {
            "text": "Deno 入门教程",
            "link": "index.html",
            "pagePath": "README.md"
        },
        {
            "text": "安装 Deno",
            "link": "docs/install-deno.html",
            "pagePath": "docs/install-deno.md"
        },
        {
            "text": "配置 Deno 开发环境",
            "link": "docs/setup-environment.html",
            "pagePath": "docs/setup-environment.md"
        }
    ],
    config: { "root": "/", ...projectConfig },
    'pagePath': "docs/hello-world-with-deno.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "docs/hello-world-with-deno.html",
    'title': "Hello World",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Hello World</h1>'
        } }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { crossOrigin: "anonymous", src: "https://unpkg.com/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'toc': null
};
