module.exports = {
  // Please use intl translation for texts
  siteMetadata: {
    siteUrl: 'https://devweb.it',
    title: 'Devweb.it',
    twitterAccount: '@devweb-it',
  },
  plugins: [
    'gatsby-plugin-jss',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        // eslint-disable-next-line no-undef
        path: `${__dirname}/src/intl`,
        // supported language
        languages: ['it', 'en'],
        // language file path
        defaultLanguage: 'it',
        // option to redirect to `/it` when connecting `/`
        redirect: true,
      },
    },
  ],
};
