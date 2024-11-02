import { createBrowserRouter } from 'react-router-dom';
import Test from '../pages/testPage/Test';
import Filler from '../pages/fillerPage/Filler';
import Main from '../pages/mainPage/Main';
import Navbar from '../components/Navbar/Navbar';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: 'test',
        element: <Test />,
      },
      {
        index: true,
        path: '/',
        element: <Main />,
      },
    ],
  },
  {
    path: '/filler',
    element: <Filler />,
  },
]);

export default router;
