import React from "react"
import PropTypes from "prop-types"

function Script() {
  const raw = `
  window.dataLayer = window.dataLayer || [];
  function gtag() {dataLayer.push(arguments); }
    gtag("js", new Date());

    gtag("config", "UA-50700-3");
 `
  return React.createElement("script", { dangerouslySetInnerHTML: { __html: raw } });
}

function Style() {
  const raw = `
  * {
    font-family: "Roboto Mono", monospace;
    margin: 0;
    padding: 0;
  }
  
  body {
    background-color: #222222;
    color: #DDDDDD;
    height: calc(100vh - 4em);
    width: calc(100vw - 4em);
    padding: 2em;
  }
  
  #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
    width: 100%;
  }
  `
  return React.createElement("style", { dangerouslySetInnerHTML: { __html: raw } });
}

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-50700-3"></script>
        <Script />
        <title>Fumiaki Yoshimatsu</title>
        <meta name="description" content="A software engineer in NYC" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <Style />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
