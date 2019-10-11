import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";

export default () => {
    const title = "Siligong.JS";

    return (
        <Page>
            <Seo titleAddition={title} />
            {title}
        </Page>
    );
};
