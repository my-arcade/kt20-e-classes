import { createGlobalStyle, css } from "styled-components";
import { colors, typography } from "./styles";

export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  color: ${colors.darkest};

  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: ${typography.weight.regular};
    margin: 0;
    padding: 0;
  }

  button,
  input,
  textarea,
  select {
    outline: none;
    font-family: ${typography.type.primary};
  }

  sub,
  sup {
    font-size: 0.8em;
  }

  sub {
    bottom: -0.2em;
  }

  sup {
    top: -0.2em;
  }

  b,
  em {
    font-weight: ${typography.weight.bold};
  }

  hr {
    border: none;
    border-top: 1px solid ${colors.border};
    clear: both;
    margin-bottom: 1.25rem;
  }

  code,
  pre {
    font-family: ${typography.type.code};
    font-size: ${typography.size.s2 - 1}px;
  }

  code {
    display: inline-block;
    padding-left: 2px;
    padding-right: 2px;
    vertical-align: baseline;
    color: ${colors.secondary};
  }

  pre {
    line-height: 18px;
    padding: 11px 1rem;
    white-space: pre-wrap;
    background: rgba(0, 0, 0, 0.05);
    color: ${colors.darkest};
    border-radius: 3px;
    margin: 1rem 0;
  }
`;

// Allow access font to settings but control how and where to load the font.
export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";

export const GlobalStyle = createGlobalStyle`
  @import url('${fontUrl}');
  
  
  body {
    ${bodyStyles}
  }

  html, body, #app {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }
`;
