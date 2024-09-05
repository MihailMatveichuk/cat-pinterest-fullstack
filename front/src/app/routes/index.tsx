import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { MainPage } from '../../pages/MainPage/component';
import { Layout } from '../layout/';

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
        element: <MainPage />,
      },
      {
        path: '/*',
        element: <div>404</div>,
      },
    ],
  },
]);

export default () => <RouterProvider router={router} />;
