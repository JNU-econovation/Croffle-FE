import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { HomePage } from '../pages/home/Home.page';
import { CreateMemberPage } from '../pages/CreateMember.page.jsx';
import { CreateGuestPage } from '../pages/CreateGuest.page.jsx';
import { LoadingPage } from '../pages/Loading.page.jsx';
import { CreateEndPage } from '../pages/CreateEnd.page.jsx';

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
        path: '/*',
        element: <HomePage />,
      },
      {
        path: '/createMember',
        element: <CreateMemberPage />,
      },
      {
        path: '/createGuest',
        element: <CreateGuestPage />,
      },
      {
        path: '/loading',
        element: <LoadingPage />,
      },
      {
        path: '/createEnd',
        element: <CreateEndPage />,
      },
    ],
  },
]);

export default routes;
