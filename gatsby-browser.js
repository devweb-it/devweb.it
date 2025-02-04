import config from './gatsby-config.js';

// disabled Loyout injection to display a simple image
// export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

const mamotoTracking = (location) => {
  const { _paq } = window;
  if (!_paq) {
    return;
  }

  const { title } = document;
  const url = location && location.pathname + location.search + location.hash;
  _paq.push(['setCustomUrl', url]);
  _paq.push(['setDocumentTitle', title]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
};

const gaTracking = () => {
  const { ga } = window;
  if (!ga) {
    return;
  }
  ga('send', 'pageview');
};

export const onRouteUpdate = ({ location }) => {
  const isProd = location.host === config.siteMetadata.hostname;
  if (isProd) {
    mamotoTracking(location);
    gaTracking();
  }
};
