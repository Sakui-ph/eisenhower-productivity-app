import entryServer from '@lomray/vite-ssr-boost/node/entry';
import App from './App';
import routes from './routes/routes.tsx';

export default entryServer(App, routes, {
  abortDelay: 15000,
  init: () => ({
    /**
     * (optional). Called once after express server creation.
     * E.g. use for configure express middlewares
     */
  }),
});
