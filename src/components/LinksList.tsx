import { Link } from "gatsby";
import React from "react";

interface Props {
    links?: any;
}

const LinksList: React.FC<Props> = ({
    links = [],
}) => {

    return (
        <ul>
        {links.map(link => (
            <li><Link
                key={link.to}
                to={link.to}
                className="link"
                activeClassName="active">
                {link.children}
            </Link></li>
        ))}
        </ul>
    );
};

export default LinksList;
