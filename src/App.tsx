import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from '@pages/Layout/Layout';
import Main from '@pages/Main/Main';
import Cart from '@pages/Cart/Cart';
import HomeSection9 from '@components/Main/HomeSection9/HomeSection9';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/test',
        element: <HomeSection9 />,
      },
    ],
    errorElement: <Navigate to={'/'} />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
