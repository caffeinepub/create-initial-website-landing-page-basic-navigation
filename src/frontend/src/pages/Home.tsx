import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Plane, MapPin, Users, Calendar, Car, Mail, ArrowRight, Star, Heart, Shield, Globe } from 'lucide-react';
import { useSiteInfo } from '../hooks/useSiteInfo';
import TestimonialsSlider from '../components/TestimonialsSlider';

export default function Home() {
  const { siteInfo } = useSiteInfo();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const featuredDestinations = [
    {
      id: 1,
      title: 'European Classics',
      location: 'Paris, Rome, Barcelona',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop',
      description: 'Explore iconic cities and timeless culture',
      price: 'From $2,499',
    },
    {
      id: 2,
      title: 'Asian Wonders',
      location: 'Tokyo, Bangkok, Singapore',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop',
      description: 'Discover ancient traditions and modern marvels',
      price: 'From $1,999',
    },
    {
      id: 3,
      title: 'Tropical Paradise',
      location: 'Maldives, Bali, Phuket',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      description: 'Relax on pristine beaches and crystal waters',
      price: 'From $1,799',
    },
    {
      id: 4,
      title: 'Safari Adventure',
      location: 'Kenya, Tanzania',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&h=600&fit=crop',
      description: 'Witness incredible wildlife in their habitat',
      price: 'From $3,299',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
        <div className="container grid gap-12 py-20 md:grid-cols-2 md:py-32">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Explore the World With <span className="text-primary">Archiv Agency</span>
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
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured Destinations Section */}
      <section id="featured-destinations" className="border-b border-border/40 bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Featured Destinations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Handpicked travel experiences to the world's most amazing places
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {featuredDestinations.map((destination) => (
              <Card key={destination.id} className="group overflow-hidden border-border/50 transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute bottom-3 left-3 bg-primary text-primary-foreground">
                      {destination.price}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardTitle className="mb-2 text-lg">{destination.title}</CardTitle>
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{destination.location}</span>
                  </div>
                  <CardDescription>{destination.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/tour-packages">
              <Button size="lg" variant="outline">
                View All Packages <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Offers Banner Section */}
      <section id="offers-banner" className="border-b border-border/40 bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <Badge className="mb-4 bg-primary text-primary-foreground">Limited Time Offer</Badge>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Special Honeymoon Packages
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Celebrate your love with exclusive romantic getaways. Save up to 20% on selected honeymoon destinations when you book before the end of the month.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <Heart className="mt-1 h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Luxury accommodations with honeymoon perks</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="mt-1 h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Romantic experiences and private dinners</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="mt-1 h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">Complimentary travel insurance included</span>
                </li>
              </ul>
              <Link to="/honeymoon-offers">
                <Button size="lg" className="mt-6">
                  Explore Honeymoon Offers <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=800&fit=crop"
                alt="Honeymoon Special Offers"
                className="w-full rounded-2xl shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-section" className="border-b border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                About Archiv Agency
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
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Travelers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Destinations</div>
                </div>
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
                loading="lazy"
              />
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
                  Best deals on domestic and international flights
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hotel Booking</CardTitle>
                <CardDescription>
                  Luxury to budget accommodations worldwide
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Tour Planning</CardTitle>
                <CardDescription>
                  Customized itineraries for unforgettable experiences
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Round-the-clock assistance for your peace of mind
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-12 text-center">
            <Link to="/services">
              <Button size="lg" variant="outline">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="border-b border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What Our Travelers Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Real experiences from real travelers
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <TestimonialsSlider />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to start your journey? Contact us today
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="rounded-lg bg-primary/10 p-8 text-center">
                    <Mail className="mx-auto mb-4 h-16 w-16 text-primary" />
                    <h3 className="mb-2 text-2xl font-semibold text-foreground">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. We'll respond to your inquiry shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your travel plans..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Google Map */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Visit Our Office</CardTitle>
                <CardDescription>
                  Find us at our location or reach out through any channel
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185368459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1644262070010!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Archiv Agency Location"
                  />
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">123 Travel Street, Suite 456<br />New York, NY 10001</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a href="tel:+15551234567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:info@archivagency.com" className="text-primary hover:underline">
                      info@archivagency.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Hours</p>
                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
