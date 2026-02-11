import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Hotel, Car, MapPin, Calendar, Shield, Headphones, Globe, FileText } from 'lucide-react';

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Comprehensive travel solutions for every journey
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="border-b border-border/40 bg-background py-12">
        <div className="container">
          <img
            src="/assets/generated/services-hero-image.realphoto.dim_1200x800.png"
            alt="Our Travel Services"
            className="w-full rounded-2xl shadow-lg object-cover max-h-96"
          />
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="border-b border-border/40 bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Everything You Need for Your Perfect Trip
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From planning to execution, we handle every detail
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Plane className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Flight Booking</CardTitle>
                <CardDescription>
                  Access to competitive rates with major airlines worldwide. We find the best routes and prices for your
                  travel dates, whether you're flying economy or first class.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Hotel className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Hotel Reservations</CardTitle>
                <CardDescription>
                  From luxury resorts to budget-friendly accommodations, we partner with thousands of hotels globally to
                  offer you the best options for your stay.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Car className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Ground Transportation</CardTitle>
                <CardDescription>
                  Reliable and comfortable transportation services including airport transfers, car rentals, and private
                  chauffeurs for your entire journey.
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
                  Expert-led tours with knowledgeable local guides who bring destinations to life with their insights and
                  stories.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Itinerary Planning</CardTitle>
                <CardDescription>
                  Customized travel itineraries tailored to your interests, budget, and schedule. We handle all the details
                  so you can focus on enjoying your trip.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Travel Insurance</CardTitle>
                <CardDescription>
                  Comprehensive travel insurance options to protect you and your investment. Coverage for medical
                  emergencies, trip cancellations, and more.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Visa Assistance</CardTitle>
                <CardDescription>
                  Expert guidance on visa requirements and application processes. We help ensure you have all necessary
                  documentation for your destination.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Headphones className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>24/7 Support</CardTitle>
                <CardDescription>
                  Round-the-clock customer support for emergencies and assistance during your travels. We're always here
                  when you need us.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Specialized Services</CardTitle>
                <CardDescription>
                  Group travel coordination, corporate travel management, destination weddings, and other specialized
                  services tailored to your unique needs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
