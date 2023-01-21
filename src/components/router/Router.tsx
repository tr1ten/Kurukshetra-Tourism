import { Dialog } from '@headlessui/react';
import { lazy, Suspense, useState } from 'react';
import { Outlet, RouteObject, useRoutes, BrowserRouter, Link } from 'react-router-dom';
import AccomodationsPage from '../screens/Accomodations';
import HeritagePage from '../screens/HeritagePage';
import PlacesPage from '../screens/PlacesPage';
import Footer from './Footer';
import NavBar from './NavBar';

const Loading = () => <p className="p-4 w-full h-full text-center">Loading...</p>;

const IndexScreen = lazy(() => import('~/components/screens/Index'));
const Page404Screen = lazy(() => import('~/components/screens/404'));

function Layout() {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  }
  return (
    <div data-theme={isDark ? "dark" : 'light'}>
      <NavBar  toggleDark={toggleDark} />
      <Outlet />
      <Footer />
    </div>
  );
}

export const Router = () => {
  return (
    <BrowserRouter>
      <InnerRouter />
    </BrowserRouter>
  );
};

const InnerRouter = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <IndexScreen />,
        },
        {
          path: '/places',
          element: <PlacesPage />
        },
        {
          path: '/accommodations',
          element: <AccomodationsPage />
        },
        {
          path: '/heritage',
          element: <HeritagePage />
        },
        
        
        {
          path: '*',
          element: <Page404Screen />,
        },
      ],
    },
  ];
  const element = useRoutes(routes);
  return (
    <div>
      <Suspense fallback={<Loading />}>{element}</Suspense>
    </div>
  );
};
