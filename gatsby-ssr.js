import React from 'react';
import { Layout } from './src/layouts/Layout';

export const wrapPageElement = ({ element, props }) => <Layout {...props}>{element}</Layout>;

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  const gaScript = `
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-96140462-9', 'auto');
  ga('set', 'anonymizeIp', true);
  `;

  setHeadComponents([
    <link rel="preconnect" href="https://www.google-analytics.com/analytics.js" key="preconnect-ga" />,
  ]);
  setPostBodyComponents([<script key="ga" dangerouslySetInnerHTML={{ __html: gaScript }} />]);
};
