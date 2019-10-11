import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";

export default () => {
    const title = "Start a Chapter";

    return (
        <Page>
            <Seo titleAddition={title} />
            {title}
        </Page>
    );
};
