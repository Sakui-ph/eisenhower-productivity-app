import { StrictMode } from 'react';
import './styles/base.css';
import { createRoot } from 'react-dom/client';
import Router from './routes/routes';
import { RouterProvider } from 'react-router-dom';

document.body.classList.add('dark-theme');

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router}></RouterProvider>
  </StrictMode>
);
