import { useIntl } from 'gatsby-plugin-intl';
import * as React from 'react';
import { SEO } from '../components/SEO';

export const AboutPage = () => {
  const intl = useIntl();
  return (
    <>
      <SEO
        title={intl.formatMessage({ id: 'pages.about.title' })}
        description={intl.formatMessage({ id: 'pages.about.description' })}
        socialCard="abilitazione.jpg"
      />
      <div className="container" style={{ minHeight: '300px' }}>
        <h1>{intl.formatMessage({ id: 'pages.about.title' })}</h1>
      </div>
    </>
  );
};
