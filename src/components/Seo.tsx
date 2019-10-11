import {
    graphql, useStaticQuery,
} from "gatsby";
import React from "react";
import Helmet from "react-helmet";

interface Props {
    author?: string;
    image?: string;
    baseTitle?: string;
    titleAddition?: string;
    description?: string;
    lang?: string;
    meta?: any;
    url?: string;
    type?: string;
}

const Seo: React.FC<Props> = ({
    author = "author placeholder",
    baseTitle = "base title placeholder",
    titleAddition = null,
    image = null,
    description = "description placeholder",
    lang = "en",
    meta = [],
    url = "url palceholder",
    type = "website",
}) => {
    const data = useStaticQuery(graphql`
        query {
            ogImg: file(name: { eq: "ogImg"}) {
                publicURL
            }
        }
    `);

    const ogImg = image || data.ogImg.publicURL;
    const title = titleAddition ? `${baseTitle} | ${titleAddition}` : baseTitle;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}
            meta={[
                {
                    content: url,
                    name: "og:url",
                },
                {
                    content: description,
                    name: "description",
                },
                {
                    content: title,
                    property: "og:title",
                },
                {
                    content: description,
                    property: "og:description",
                },
                {
                    content: ogImg,
                    property: "og:image",
                },
                {
                    content: type,
                    property: "og:type",
                },
                {
                    content: "summary",
                    name: "twitter:card",
                },
                {
                    content: author,
                    name: "twitter:creator",
                },
                {
                    content: title,
                    name: "twitter:title",
                },
                {
                    content: description,
                    name: "twitter:description",
                },
                ...meta,
            ]}
        />
    );
};

export default Seo;
