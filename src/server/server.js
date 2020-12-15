/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';
import helmet from 'helmet';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import serverRoutes from '../frontend/routes/serverRoutes';
import reducer from '../frontend/reducers';
import getInitialState from '../frontend/initialState';
import getManifest from './getManifest';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Development config');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const { publicPath } = webpackConfig.output;
  const serverConfig = { serverSideRender: true, publicPath };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) req.hashManifest = getManifest();
    next();
  });

  app.use(express.static(`${__dirname}/public`));
  app.use(helmet({
    contentSecurityPolicy: false,
  }));
  app.disable('x-powered-by');
}

const setResponse = (html, preloadedState, manifest, metaTagsCategories) => {
  const mainStyles = manifest ? manifest['vendors.css'] : '/assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : '/assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : '/assets/vendor.js';
  let keywords;

  // Dynamic keywords assignment
  metaTagsCategories.filters.forEach((d) => {
    keywords = `${keywords}, ${d.label},`;
  });

  return (`
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="description" content="Awesome Cocktails">
          <meta name="keywords" content="${keywords}">
          <meta name="author" content="Andres Ardila">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="${mainStyles}" type="text/css">
          <title>Cocktails Now</title>
        </head>
        <body>
          <div id="app">${html}</div>
          <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="${mainBuild}" type="text/javascript"></script>
          <script src="${vendorBuild}" type="text/javascript"></script>
        </body>
    </html>
  `);
};

const renderApp = async (req, res) => {

  getInitialState()
    .then((initialState) => {

      const store = createStore(reducer, initialState);
      const preloadedState = store.getState();
      const html = renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={{}}>
            {renderRoutes(serverRoutes)}
          </StaticRouter>
        </Provider>,
      );

      res.send(setResponse(html, preloadedState, req.hashManifest, initialState));
    })
    .catch((error) => console.log(error));

};

app.get('*', renderApp);

app.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Corriendo en ${PORT}`);
});
