import '@mantine/core/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterPage from './pages/shared/MasterPage';
import PageNotFound from './pages/error/PageNotFound';
import HomePage from './pages/shared/HomePage';
import ErrorPermission from './pages/error/ErrorPermission';
import ErrorServer from './pages/error/ErrorServer';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <MasterPage />,
        errorElement: <PageNotFound />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: 'chyba-500',
            element: <ErrorServer />,
          },
          {
            path: 'permission',
            element: <ErrorPermission />,
          },
        ],
      },
    ],
    { basename: '' },
  );

  return <RouterProvider router={router} />;
}

export default App;
