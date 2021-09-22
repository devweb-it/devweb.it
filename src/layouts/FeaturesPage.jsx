import { useIntl } from 'gatsby-plugin-intl';
import * as React from 'react';
import { SEO } from '../components/SEO';

export const FeaturesPage = () => {
  const intl = useIntl();
  return (
    <>
      <SEO
        title={intl.formatMessage({ id: 'pages.features.title' })}
        description={intl.formatMessage({ id: 'pages.features.description' })}
        socialCard="abilitazione.jpg"
      />
      <div className="container" style={{ minHeight: '300px' }}>
        <h1>{intl.formatMessage({ id: 'pages.features.title' })}</h1>
      </div>
    </>
  );
};
