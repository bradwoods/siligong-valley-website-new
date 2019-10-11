import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import { gridSquaresSize } from "./util/grid";

export const DESKTOP_WIDTH = gridSquaresSize(12);

const colors = {
    black: [
        "hsla(0, 0%, 0%, 1)",
    ],
    blue: [
        "hsla(245, 100%, 50%, 1)",
    ],
    orange: [
        "hsla(15, 100%, 50%, 1)",
    ],
    white: [
        "hsla(0, 100%, 100%, 1)",
    ],
};

const theme = {
    color: {
        ...colors,
        active: colors.orange[0],
        background: {
            primary: colors.white[0],
        },
        focus: colors.blue[0],
        text: {
            primary: colors.black[0],
        },
    },
    fontFamily: {
        body: `Roboto, sans-serif`,
        heading: `Roboto, sans-serif`,
    },
    fontSize: [
        // https://type-scale.com/
        "12.8px",
        "16px",
        "20px",
        "25px",
        "31.25px",
        "39.06px",
        "48.83px",
    ],
    fontWeight: {
        bold: 700,
        normal: 400,
    },
    lineHeight: {
        m: 1.45,
    },
};

type Theme = Readonly<typeof theme>;

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export { styled, css, createGlobalStyle, keyframes, ThemeProvider, theme };
