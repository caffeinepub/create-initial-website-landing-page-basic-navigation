import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, Palette, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useThemeColorContext } from './ThemeColorProvider';
import type { ThemeColorPreset } from '../hooks/useThemeColor';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/tour-guide', label: 'Tour Guide' },
  { to: '/services', label: 'Services' },
  { to: '/tour-packages', label: 'Tour Packages' },
  { to: '/vehicles', label: 'Vehicles' },
  { to: '/honeymoon-offers', label: 'Honeymoon Offers' },
  { to: '/booking', label: 'Booking' },
];

const themeColorLabels: Record<ThemeColorPreset, string> = {
  terracotta: 'Terracotta',
  ocean: 'Ocean Blue',
  forest: 'Forest Green',
  sunset: 'Sunset Orange',
  purple: 'Royal Purple',
};

export default function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { preset, changePreset, presets } = useThemeColorContext();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/assets/generated/site-logo.dim_512x512.png" alt="Logo" className="h-10 w-10" />
          <span className="font-display text-xl font-bold text-foreground">Archiv Agency</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: 'text-primary font-semibold' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Theme Controls */}
        <div className="hidden items-center gap-2 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Palette className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {presets.map((p) => (
                <DropdownMenuItem
                  key={p}
                  onClick={() => changePreset(p)}
                  className={preset === p ? 'bg-accent' : ''}
                >
                  {themeColorLabels[p]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  activeProps={{ className: 'text-primary font-semibold' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 border-t border-border pt-4">
                <p className="mb-2 text-sm font-semibold text-foreground">Theme Color</p>
                <div className="flex flex-col gap-2">
                  {presets.map((p) => (
                    <Button
                      key={p}
                      variant={preset === p ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => changePreset(p)}
                      className="justify-start"
                    >
                      {themeColorLabels[p]}
                    </Button>
                  ))}
                </div>
                <div className="mt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="w-full justify-start"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" />
                        Light Mode
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" />
                        Dark Mode
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
