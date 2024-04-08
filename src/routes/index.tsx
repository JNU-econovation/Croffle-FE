import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/home/Home.page';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);

export default routes;
