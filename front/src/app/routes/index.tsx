import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Layout } from '@/app/layout';
import { FavoritePage, MainPage } from '@/pages';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/favorite',
        element: <FavoritePage />,
      },
      {
        path: '/*',
        element: <div>404</div>,
      },
    ],
  },
]);

export default () => <RouterProvider router={router} />;
