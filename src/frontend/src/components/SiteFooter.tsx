import { Link } from '@tanstack/react-router';
import { Heart } from 'lucide-react';
import { SiFacebook, SiInstagram, SiX, SiYoutube } from 'react-icons/si';
import { useSiteInfo } from '../hooks/useSiteInfo';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'unknown-app'
  );
  const { siteInfo } = useSiteInfo();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on home page, navigate to home then scroll
      window.location.href = '/#contact';
    }
  };

  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
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

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                About Us
              </Link>
              <Link to="/tour-guide" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Tour Guide
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Services
              </Link>
              <Link to="/tour-packages" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Tour Packages
              </Link>
            </nav>
          </div>

          {/* More Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">More</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/vehicles" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Vehicles
              </Link>
              <Link to="/honeymoon-offers" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Honeymoon Offers
              </Link>
              <Link to="/booking" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Booking
              </Link>
              <a 
                href="/#contact" 
                onClick={handleContactClick}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </a>
              <Link to="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Social & Attribution */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-foreground">Connect With Us</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="Facebook"
              >
                <SiFacebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="X (Twitter)"
              >
                <SiX className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background transition-colors hover:border-primary hover:bg-primary/10"
                aria-label="YouTube"
              >
                <SiYoutube className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                © {currentYear} {siteInfo.name}. All rights reserved.
              </p>
              <p className="flex items-center gap-1 text-sm text-muted-foreground">
                Built with <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline transition-colors"
                >
                  caffeine.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
