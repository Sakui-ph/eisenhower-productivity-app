import { createBrowserRouter } from 'react-router-dom';
import Test from '../pages/testPage/Test';
import Filler from '../pages/fillerPage/Filler';
import Main from '../pages/mainPage/Main';

const router = createBrowserRouter([
  {
    path: '/home',
    element: <Main />,
    children: [
      {
        index: true,
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: '/filler',
    element: <Filler />,
  },
]);

export default router;
