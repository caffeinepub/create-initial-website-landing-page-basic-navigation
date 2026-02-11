import { Outlet } from '@tanstack/react-router';
import SiteNavbar from './SiteNavbar';
import SiteFooter from './SiteFooter';
import ThemeColorProvider from './ThemeColorProvider';

export default function SiteLayout() {
  return (
    <ThemeColorProvider>
      <div className="flex min-h-screen flex-col">
        <SiteNavbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </ThemeColorProvider>
  );
}
