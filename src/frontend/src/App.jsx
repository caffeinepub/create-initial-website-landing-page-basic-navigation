import { createRouter, createHashHistory, createRootRoute, createRoute, RouterProvider } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import About from './pages/About';
import TourGuide from './pages/TourGuide';
import Services from './pages/Services';
import TourPackages from './pages/TourPackages';
import Vehicles from './pages/Vehicles';
import HoneymoonOffers from './pages/HoneymoonOffers';
import Booking from './pages/Booking';

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const tourGuideRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tour-guide',
  component: TourGuide,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: Services,
});

const tourPackagesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/tour-packages',
  component: TourPackages,
});

const vehiclesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/vehicles',
  component: Vehicles,
});

const honeymoonOffersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/honeymoon-offers',
  component: HoneymoonOffers,
});

const bookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/booking',
  component: Booking,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/privacy',
  component: Privacy,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  tourGuideRoute,
  servicesRoute,
  tourPackagesRoute,
  vehiclesRoute,
  honeymoonOffersRoute,
  bookingRoute,
  privacyRoute,
]);

const router = createRouter({
  routeTree,
  history: createHashHistory(),
});

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
