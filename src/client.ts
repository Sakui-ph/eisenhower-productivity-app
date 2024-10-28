import entryClient from '@lomray/vite-ssr-boost/browser/entry';
import routes from './routes/routes';
import App from './App';

void entryClient(App, routes);
{
  init: async () => {};
}
