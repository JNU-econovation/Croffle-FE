import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/home/Home.page';
import { CreatePage } from '../pages/Create.page';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/create',
        element: <CreatePage />,
      },
    ],
  },
]);

export default routes;
