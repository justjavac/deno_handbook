import ReactHelmet from 'https://dev.jspm.io/react-helmet@6.1.0';
const { Helmet } = ReactHelmet;
const Head = ({ config, title, ga, outputPath, isDark }) => {
    const scriptSetIsDark = `
    const shouldSetIsDark = document.cookie.includes('is_dark=1') ? true : document.cookie.includes('is_dark=0') ? false : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (shouldSetIsDark) {
      document.documentElement.classList.add('is_dark');
      document.getElementById('prismTheme').href = "${config.root}assets/prism_tomorrow.css";
    }
  `;
    return (React.createElement("head", null,
        ga,
        config.head,
        React.createElement(Helmet, null,
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { httpEquiv: "x-ua-compatible", content: "ie=edge" }),
            React.createElement("title", null, title ? (outputPath !== 'index.html' ? `${title} · ${config.title}` : title) : config.title),
            config.description && React.createElement("meta", { name: "description", content: config.description }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
            React.createElement("link", { id: "prismTheme", rel: "stylesheet", href: isDark ? `${config.root}assets/prism_tomorrow.css` : `${config.root}assets/prism.css` }),
            React.createElement("link", { rel: "stylesheet", href: `${config.root}assets/index.css` }),
            React.createElement("script", null, scriptSetIsDark))));
};
export default Head;
