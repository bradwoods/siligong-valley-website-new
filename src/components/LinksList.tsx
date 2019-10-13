import { Link } from "gatsby";
import React, { FC } from "react";

interface LinkType {
    to: string;
    children: string;
}

interface Props {
    links: LinkType[];
}

const LinksList: FC<Props> = ({ links }) => (
    <>
        {links.map(link => (
            <Link
                key={link.to}
                {...link} />
        ))}
    </>
);

export default LinksList;
