import { RouteObject } from 'react-router-dom';
import Test from '../pages/testPage/Test';
import Filler from '../pages/fillerPage/Filler';
import Main from '../pages/mainPage/Main';

const routes: RouteObject[] = [
  { index: true, element: <Main /> },
  { path: '/test', element: <Test /> },
  { path: '/filler', element: <Filler /> },
];

export default routes;
