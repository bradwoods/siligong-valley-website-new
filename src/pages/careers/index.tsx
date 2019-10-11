import React from "react";
import LinksList from "../../components/LinksList";
import Page from "../../components/Page";
import Seo from "../../components/Seo";

export default () => {
    const title = "Careers";
    const links = [
        {
            children: "Looking for work",
            to: "/careers/companies",
        },
        {
            children: "Looking to hire",
            to: "/careers/people",
        },
    ];

    return (
        <Page>
            <Seo titleAddition={title} />
            {title}
            <LinksList links={links} />
        </Page>
    );
};
