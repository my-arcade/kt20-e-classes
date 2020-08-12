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

const loaderStyles = css`
 /* Make clicks pass-through */
 #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({theme}) => theme.colors.primary};
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
    opacity: 1.0;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
`

// Allow access font to settings but control how and where to load the font.
export const fontUrl =
  "https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap";

export const GlobalStyle = createGlobalStyle`
  @import url('${fontUrl}');
  
  
  body {
    ${bodyStyles}
  }

  ${loaderStyles}

  .react-loading-skeleton {
      background-color: ${({theme}) => theme.colors.skeleton.base};
      background-image: linear-gradient(
        90deg,
        ${({theme}) => theme.colors.skeleton.base},
        ${({theme}) => theme.colors.skeleton.highlight},
        ${({theme}) => theme.colors.skeleton.base}
      );
    }

  html, body, #app {
    height: 100%;
    min-height: 100%;
    width: 100%;
  }
`;
