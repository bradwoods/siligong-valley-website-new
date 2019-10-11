module.exports = {
    siteMetadata: {
        title: 'gatsby-typescript-styled_components-storybook-starter',
        author: 'author placeholder',
        description: 'description placeholder',
        keywords: ['keyword1 placeholder'],
        siteUrl: 'https://site-url-placeholder/',
        url: 'https://url-placeholder/',
        twitterUsername: "@twitterUsernamePlaceholder",
        image: '/ogImg.png'
    },
    plugins: [
        `gatsby-plugin-netlify-cms`,
        `gatsby-plugin-layout`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-tslint`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/imgs`,
                name: 'imgs',
            },
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                background: '#212121',
                theme_color: '#212121',
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                //trackingId: `ADD YOUR TRACKING ID HERE`,
            },
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `hsla(14, 100%, 63%, 1)`,
                showSpinner: false,
            },
        }
    ],
}
