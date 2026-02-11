import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plane, MapPin, Users, Calendar, Car, Mail, ArrowRight } from 'lucide-react';
import { useSiteInfo } from '../hooks/useSiteInfo';

export default function Home() {
  const { siteInfo } = useSiteInfo();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    travelDates: '',
    groupSize: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', destination: '', travelDates: '', groupSize: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
        <div className="container grid gap-12 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              {siteInfo.name}
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              {siteInfo.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Plan Your Trip
              </Button>
              <Link to="/tour-packages">
                <Button size="lg" variant="outline">
                  View Packages
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assets/generated/home-hero-banner.realphoto.dim_1600x900.png"
              alt="Travel Destinations"
              className="w-full max-w-lg rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="border-b border-border/40 bg-background py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                About Us
              </h2>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>
                  With years of experience in the travel industry, we are dedicated to creating unforgettable journeys
                  for our clients. Our passion for exploration and commitment to excellence sets us apart.
                </p>
                <p>
                  We believe that travel is more than just visiting new places—it's about creating memories, experiencing
                  different cultures, and discovering the beauty of our world. Let us help you craft your perfect adventure.
                </p>
              </div>
              <Link to="/about">
                <Button className="mt-6" variant="outline">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/assets/generated/home-about-section.realphoto.dim_1200x800.png"
                alt="About Our Travel Agency"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tour Guide Section */}
      <section id="tour-guide-section" className="border-b border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <img
                src="/assets/generated/home-tour-guide-section.realphoto.dim_1200x800.png"
                alt="Professional Tour Guides"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Expert Tour Guides
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Our professional guides bring destinations to life with their deep knowledge, passion, and storytelling
                abilities. Multilingual, certified, and dedicated to making your journey unforgettable.
              </p>
              <Link to="/tour-guide">
                <Button className="mt-6" variant="outline">
                  Meet Our Guides <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="border-b border-border/40 bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive travel solutions for every journey
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flight Booking</CardTitle>
                <CardDescription>
                  Competitive rates with major airlines worldwide
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Guided Tours</CardTitle>
                <CardDescription>
                  Expert-led experiences at top destinations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Transportation</CardTitle>
                <CardDescription>
                  Comfortable vehicles with professional drivers
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Custom Itineraries</CardTitle>
                <CardDescription>
                  Personalized travel plans tailored to you
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Tour Packages Section */}
      <section id="packages-section" className="border-b border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Popular Tour Packages
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Curated experiences to the world's most amazing destinations
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <img
                  src="/assets/generated/home-tour-package-europe.realphoto.dim_1200x800.png"
                  alt="European Adventure Tour Package"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="mb-2">European Adventure</CardTitle>
                <CardDescription className="mb-4">
                  Explore the historic cities and stunning landscapes of Europe
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">From $2,499</span>
                  <Button size="sm" onClick={() => navigate({ to: '/booking', search: { package: 'European Adventure' } })}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <img
                  src="/assets/generated/home-tour-package-asia.realphoto.dim_1200x800.png"
                  alt="Asian Discovery Tour Package"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="mb-2">Asian Discovery</CardTitle>
                <CardDescription className="mb-4">
                  Immerse yourself in the rich cultures of Asia
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">From $1,999</span>
                  <Button size="sm" onClick={() => navigate({ to: '/booking', search: { package: 'Asian Discovery' } })}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader className="p-0">
                <img
                  src="/assets/generated/home-tour-package-tropical.realphoto.dim_1200x800.png"
                  alt="Tropical Paradise Tour Package"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="mb-2">Tropical Paradise</CardTitle>
                <CardDescription className="mb-4">
                  Relax on pristine beaches and explore tropical wonders
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">From $1,799</span>
                  <Button size="sm" onClick={() => navigate({ to: '/booking', search: { package: 'Tropical Paradise' } })}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link to="/tour-packages">
              <Button size="lg" variant="outline">
                View All Packages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Vehicles Section */}
      <section id="vehicles-section" className="border-b border-border/40 bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Fleet
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comfortable and reliable transportation for every journey
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Economy Sedan</CardTitle>
                <CardDescription>
                  Perfect for couples or small groups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Up to 4 passengers</span>
                  </div>
                  <div className="font-semibold text-foreground">From $50/day</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>SUV</CardTitle>
                <CardDescription>
                  Spacious and comfortable for families
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Up to 7 passengers</span>
                  </div>
                  <div className="font-semibold text-foreground">From $80/day</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Luxury Coach</CardTitle>
                <CardDescription>
                  Premium comfort for large groups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>Up to 20 passengers</span>
                  </div>
                  <div className="font-semibold text-foreground">From $200/day</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link to="/vehicles">
              <Button size="lg" variant="outline">
                View All Vehicles <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="border-b border-border/40 bg-muted/30 py-20">
        <div className="container max-w-2xl">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Plan Your Journey
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us about your dream trip and we'll help make it a reality
            </p>
          </div>
          <Card>
            <CardContent className="pt-6">
              {formSubmitted ? (
                <div className="rounded-lg bg-primary/10 p-6 text-center">
                  <Mail className="mx-auto mb-4 h-12 w-12 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-foreground">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="destination">Preferred Destination</Label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      placeholder="e.g., Paris, Tokyo, Maldives"
                      required
                    />
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="travelDates">Travel Dates</Label>
                      <Input
                        id="travelDates"
                        name="travelDates"
                        value={formData.travelDates}
                        onChange={handleChange}
                        placeholder="e.g., June 2026"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="groupSize">Group Size</Label>
                      <Input
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        placeholder="e.g., 2 adults"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Details</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your travel preferences, interests, or any special requirements..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
