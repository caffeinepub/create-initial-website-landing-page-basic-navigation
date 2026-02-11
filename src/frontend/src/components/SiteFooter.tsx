import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import { useSiteInfo } from '../hooks/useSiteInfo';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
  );
  const { siteInfo } = useSiteInfo();

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/generated/site-logo.dim_512x512.png"
                alt="Site Logo"
                className="h-10 w-10 rounded-lg"
              />
              <span className="font-display text-lg font-bold text-foreground">{siteInfo.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for unforgettable travel experiences around the world.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                About Us
              </Link>
              <Link to="/tour-guide" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Tour Guide
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Services
              </Link>
              <Link to="/tour-packages" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Tour Packages
              </Link>
              <Link to="/vehicles" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Vehicles
              </Link>
              <Link to="/honeymoon-offers" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Honeymoon Offers
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Attribution */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">About</h3>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {siteInfo.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Built with <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
