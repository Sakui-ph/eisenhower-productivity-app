import { createBrowserRouter } from 'react-router-dom';
import App from '../pages/mainPage/App';
import Test from '../pages/testPage/Test';
import Filler from '../pages/fillerPage/Filler';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
  },
  {
    path: '/test',
    element: <Test></Test>,
  },
  {
    path: '/filler',
    element: <Filler></Filler>,
  },
]);

export default router;
