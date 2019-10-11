import React from "react";
import LinksList from "../../components/LinksList";
import Page from "../../components/Page";
import Seo from "../../components/Seo";

export default () => {
    const title = "Chapters";
    const links = [
        {
            children: "siligong.JS",
            to: "/chapters/js",
        },
        {
            children: "Can't find a chapter that matches your interests? Start your own...",
            to: "/chapters/start-a-chapter",
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
