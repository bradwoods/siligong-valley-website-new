import { storiesOf } from "@storybook/react";
import React from "react";
import Nav from ".";

storiesOf("components/Nav", module)
    .add("index", () => (
        <Nav />
    ));
