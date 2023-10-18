import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Contact from '../pages/Contact';
import Products from '../pages/Products';

export const ERoutes = {
  Dashboard: '/',
  Products: '/products',
  Contact: '/contact',
  Anything: '*',
};

export const router = createBrowserRouter([
  { path: ERoutes.Dashboard, element: <Dashboard /> },
  { path: ERoutes.Products, element: <Products /> },
  { path: ERoutes.Contact, element: <Contact /> },
  { path: ERoutes.Anything, element: <Dashboard /> },
]);
