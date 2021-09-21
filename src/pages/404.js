import * as React from 'react';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';

// styles
const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  const intl = useIntl();
  return (
    <main style={pageStyles}>
      <title>{intl.formatMessage({ id: 'pages.404.title' })}</title>
      <h1 style={headingStyles}>{intl.formatMessage({ id: 'pages.404.description' })}</h1>
      <p style={paragraphStyles}>
        {intl.formatMessage({ id: 'pages.404.text1' })}{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        {intl.formatMessage({ id: 'pages.404.text2' })}
        <br />
        {
          // eslint-disable-next-line no-undef
          process.env.NODE_ENV === 'development' ? (
            <>
              <br />
              {intl.formatMessage({ id: 'pages.404.text3' })} <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null
        }
        <br />
        <Link to="/">{intl.formatMessage({ id: 'pages.404.text4' })}</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
