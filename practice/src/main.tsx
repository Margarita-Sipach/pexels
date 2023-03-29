import { CategoryPage } from './components/pages/CategoryPage';
import { MainPage } from './components/pages/MainPage';
import { EmptyPage } from './components/pages/EmptyPage';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.scss';
import { App } from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/not-found',
        element: <EmptyPage />,
      },
      {
        path: '/category/:id',
        element: <CategoryPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
