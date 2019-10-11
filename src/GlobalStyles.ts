import { createGlobalStyle, theme } from "./theme";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;

        color: inherit;
        font-size: inherit;
        font-weight: inherit;
        font-family: inherit;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html,
    body,
    #root,
    #___gatsby,
    #___gatsby > * {
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    body {
        font-size: ${theme.fontSize[1]};
        font-family: ${theme.fontFamily.body};
        font-weight: ${theme.fontWeight.normal};
        line-height: ${theme.lineHeight.m};
        color: ${theme.color.text.primary};

        background: ${theme.color.background.primary};
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: ${theme.fontSize[2]};
        font-family: ${theme.fontFamily.heading};
        font-weight: ${theme.fontWeight.bold};
    }

    ul {
        list-style: none;
    }

    video,
    iframe {
        /* remove pixels below display: inline */
        display: block;
        /* so imgs will resize based on wrapper constraints */
        width: 100%;
        height: auto;
        /* prevent image from stretching due to 'align-self: default' value is stretch (in flexbox context) */
        align-self: flex-start;
    }

    img {
        /* remove pixels below display: inline */
        display: block;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;
    }

    a {
      text-decoration: none;
      cursor: pointer;
    }

    address,
    em {
        font-style: normal;
    }

    [disabled] {
        pointer-events: none;
    }

    :focus {
        outline: 1px solid ${theme.color.focus};
        outline-offset: 1px;
    }
`;

export default GlobalStyles;
