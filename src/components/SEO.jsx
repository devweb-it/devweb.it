import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

export const SEO = ({ title, description, socialCard }) => {
  const intl = useIntl();
  const seoTitle = intl.formatMessage({ id: 'pages.homepage.title' });
  const seoDescription = intl.formatMessage({ id: 'pages.homepage.description' });
  const {
    site: {
      siteMetadata: { twitterAccount, siteUrl },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            twitterAccount
            siteUrl
          }
        }
      }
    `
  );
  const favicons = [
    {
      rel: 'icon',
      href: '/assets/favicons/favicon.ico',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      type: 'image/png',
      href: '/assets/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      sizes: '32x32',
      type: 'image/png',
      href: '/assets/favicons/favicon-32x32.png',
    },
    {
      rel: 'apple-touch-icon',
      href: '/assets/favicons/apple-touch-icon.png',
    },
  ];

  const socialCardContent = socialCard
    ? `${siteUrl}/assets/social-cards/${socialCard}`
    : `${siteUrl}/assets/social-cards/home.png`;

  const twitter = [
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title ?? seoTitle },
    { name: 'twitter:description', content: description ?? seoDescription },
    { name: 'twitter:site', content: twitterAccount },
    { name: 'twitter:image', content: socialCardContent },
  ];

  const facebook = [
    { name: 'og:title', content: title ?? seoTitle },
    { name: 'og:description', content: description ?? seoDescription },
    { name: 'og:type', content: 'website' },
    { name: 'og:locale', content: `${intl.locale}_${intl.locale.toUpperCase()}` },
    { name: 'og:image', content: socialCardContent },
    { name: 'og:site_name', content: title ?? seoTitle },
  ];

  return (
    <Helmet
      htmlAttributes={{
        lang: intl.locale.toUpperCase(),
      }}
      title={title ?? seoTitle}
      link={[...favicons]}
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
        { name: 'description', content: description ?? seoDescription },
        ...twitter,
        ...facebook,
      ]}
    />
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  socialCard: PropTypes.string,
};
