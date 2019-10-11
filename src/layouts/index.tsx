import React, { FC } from "react";
import Nav from "../components/Nav";
import GlobalStyles from "../GlobalStyles";
import { theme, ThemeProvider } from "../theme";

interface Props {
    isNav?: boolean;
}

const Layout: FC<Props> = ({
    children,
    isNav = true,
}) => (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                {isNav && <Nav />}
                {children}
            </>
        </ThemeProvider>
    );

export default Layout;
