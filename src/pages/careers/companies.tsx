import React from "react";
import Page from "../../components/Page";
import Seo from "../../components/Seo";

export default () => {
    const title = "Companies";

    return (
        <Page>
            <Seo titleAddition={title} />
            {title}
        </Page>
    );
};
