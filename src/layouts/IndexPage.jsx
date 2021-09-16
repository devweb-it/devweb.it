import { useIntl } from 'gatsby-plugin-intl';
import * as React from 'react';

export const IndexPage = () => {
  const intl = useIntl();
return (
    <>
    <h1>Index</h1>
    <h2>{intl.formatMessage({id: 'test'})}</h2>
  </>
);
}
