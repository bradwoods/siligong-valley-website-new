import { Link } from "gatsby";
import React from "react";
import { styled } from "../../theme";
import { gridGuttersSize } from "../../util/grid";

const Nav = styled.nav`
    width: 100%;

    display: flex;

    border-bottom: 1px solid black;

    .link {
        padding: ${gridGuttersSize(1)};

        &.active {
            color: ${p => p.theme.color.active};
        }
    }
`;

const links = [
    {
        displayText: "Landing",
        to: "/",
    },
    {
        displayText: "Page 2",
        to: "/page2",
    },
];

export default () => (
    <Nav>
        {links.map(link => (
            <Link
                key={link.to}
                to={link.to}
                className="link"
                activeClassName="active">
                {link.displayText}
            </Link>
        ))}
    </Nav>
);
