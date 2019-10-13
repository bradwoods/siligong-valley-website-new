import { Link } from "gatsby";
import React from "react";
import { styled } from "../../theme";
import { gridGuttersSize } from "../../util/grid";

const Nav = styled.nav`
    width: 100%;
    padding: 0 ${gridGuttersSize(1)};

    display: flex;
    align-items: center;

    border-bottom: 1px solid black;
`;

const StyledLink = styled(Link)`
    padding: ${gridGuttersSize(1)};

    &.active {
        color: ${p => p.theme.color.active};
    }
`;

const RightLinksWrapper = styled.div`
    margin-left: auto;

    display: flex;
    align-items: center;
`;

const rightLinks = [
    {
        displayText: "Home",
        to: "/",
    },
    {
        displayText: "Chapters",
        to: "/chapters",
    },
    {
        displayText: "Careers",
        to: "/careers",
    },
];

export default () => (
    <Nav>
        <StyledLink to="/">
            Siligong Valley
        </StyledLink>

        <RightLinksWrapper>
            {rightLinks.map(link => (
                <StyledLink
                    key={link.to}
                    to={link.to}
                    activeClassName="active">
                    {link.displayText}
                </StyledLink>
            ))}
        </RightLinksWrapper>
    </Nav>
);
