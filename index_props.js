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
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "Deno 入门教程",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1 id="deno-%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B">Deno 入门教程 <a class="header-anchor" href="#deno-%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B">§</a></h1>\n<blockquote>\n<p><strong>长期更新</strong>，面向新人的 Deno 入门指南，入门教程，初学者教程。</p>\n</blockquote>\n<h2 id="%E5%89%8D%E8%A8%80">前言 <a class="header-anchor" href="#%E5%89%8D%E8%A8%80">§</a></h2>\n<p>本教程采用的 Deno 版本为 <code>v1.1.0</code>，std modules 版本为 <code>v0.57.0</code>。</p>\n<p>本教程的目的是为 JavaScript/TypeScript 开发者提供一个 Deno 入门指南，虽然 Deno 是使用 Rust 和 V8 开发，但是本教程不会涉及到任何 Rust 与 V8 引擎相关知识。</p>\n<p>所有的代码均在 <a href="https://github.com/justjavac/deno_handbook/tree/master/codes">./codes/</a> 目录。代码 <code>xxx.ts</code> 对应的测试文件为 <code>xxx_test.ts</code>。</p>\n<h2 id="%E8%AF%B4%E6%98%8E">说明 <a class="header-anchor" href="#%E8%AF%B4%E6%98%8E">§</a></h2>\n<p>本教程不是一本参考手册，因此不会涉及到所有的 Deno API。如果想查看所有的 Deno API 文档，可以访问 https://deno.dev/typedoc/index.html 来查看简体中文版。</p>\n<h2 id="%E7%9B%AE%E5%BD%95">目录 <a class="header-anchor" href="#%E7%9B%AE%E5%BD%95">§</a></h2>\n<ol>\n<li><a href="./docs/install-deno.html">安装 Deno</a></li>\n<li><a href="./docs/setup-environment.html">配置 Deno 开发环境</a></li>\n<li><a href="./docs/hello-world-with-deno.html">Hello World</a></li>\n<li><a href="./docs/deno-cli-sub-commond.html">Deno 命令行</a>\n<ol>\n<li>打包 deno bundle</li>\n<li>缓存 deno cache</li>\n<li>Linux Shell 自动补全 deno completions</li>\n</ol>\n</li>\n</ol>\n<h2 id="%E6%8D%90%E8%B5%A0">捐赠 <a class="header-anchor" href="#%E6%8D%90%E8%B5%A0">§</a></h2>\n<p>如果这个教程对你有帮助，欢迎 star。如果这个仓库帮你提升了技能，可以请我喝杯咖啡：</p>\n<p align="center"><img src="https://cdn.devtips.cn/buy-me-a-coffee-wechat.png?imageView2/2/w/320/interlace/1" width="320" height="320" alt="" /></p>\n<h2 id="%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE">许可协议 <a class="header-anchor" href="#%E8%AE%B8%E5%8F%AF%E5%8D%8F%E8%AE%AE">§</a></h2>\n<p>本作品采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA(知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议)</a> 进行许可。</p>\n'
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
