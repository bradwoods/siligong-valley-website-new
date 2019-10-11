import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import StorybookWrapper from '../src/components/StorybookWrapper'
import Layout from '../src/layouts'

const req = require.context('../src', true, /\.stories\.tsx$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}

// Gatsby's Link overrides --------
// https://www.gatsbyjs.org/docs/visual-testing-with-storybook/
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
    enqueue: () => { },
    hovering: () => { },
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
    action("NavigateTo:")(pathname)
}
// ---------------------------------

/* 
    - layout is required for stories that contain a gatsby link (will throw error if a gatsby link is rendered without being wrapped by layout)
    - global styles is imported by layout
*/
addDecorator(story => (
    <StorybookWrapper>
        <Layout isNav={false}>
            {story()}
        </Layout>
    </StorybookWrapper>
))

configure(loadStories, module);