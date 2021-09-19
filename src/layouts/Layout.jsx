import React from 'react';
import PropTypes from 'prop-types';
import '@fontsource/titillium-web/latin.css';
import '@fontsource/lora/latin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUseStyles } from 'react-jss';
import { FormattedMessage, IntlProvider } from 'gatsby-plugin-intl';
import { SEO } from '../components/SEO';
import { Header } from './Header';
import { Footer } from './Footer';

const useStyles = createUseStyles({
  '@global': {
    ':focus:not(:focus-visible)': {
      borderColor: 'initial',
      boxShadow: 'none',
    },
    // override text-primary color
    '.text-primary': {
      // eslint-disable-next-line sonarjs/no-duplicate-string
      color: ['var(--primary)', '!important'],
    },
    '.text-info': {
      color: ['#33485C', '!important'],
    },
    '.text-info-title': {
      color: ['#455A64', '!important'],
    },
    '.focus-a11y-contrast:focus': {
      border: '2px solid #ff9900', // This is used for a11y high contrast compliance
    },
  },
});

export const Layout = ({ children, pageContext }) => {
  useStyles();
  const intl = pageContext.intl;

  return (
    <IntlProvider locale={intl.language} defaultLocale={intl.defaultLocale} messages={intl.messages}>
      <SEO />
      <a className="visually-hidden-focusable" href="#content">
        <FormattedMessage id="common.goToMainContent" />
      </a>
      <a className="visually-hidden-focusable" href="#footer">
        <FormattedMessage id="common.goToFooter" />
      </a>
      <Header languages={intl.languages} />
      <main className="text-info text-break" id="content">
        {children}
      </main>
      <Footer />
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageContext: PropTypes.object.isRequired,
};
