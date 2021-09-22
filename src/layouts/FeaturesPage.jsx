import { useIntl } from 'gatsby-plugin-intl';
import * as React from 'react';

export const FeaturesPage = () => {
  const intl = useIntl();
  return (
    <div className="container" style={{ minHeight: '300px' }}>
      <h1>{intl.formatMessage({ id: 'pages.features.title' })}</h1>
    </div>
  );
};
