import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, MapPin, Calendar, Star } from 'lucide-react';

export default function HoneymoonOffers() {
  const navigate = useNavigate();

  const offers = [
    {
      id: 1,
      title: 'Maldives Romance',
      location: 'Maldives',
      duration: '7 Days / 6 Nights',
      price: '$3,499',
      rating: 5.0,
      reviews: 89,
      description: 'Overwater villas, private beach dinners, and crystal-clear waters create the perfect romantic escape.',
      inclusions: ['Luxury Resort', 'Private Transfers', 'Spa Treatments', 'Romantic Dinners'],
      image: '/assets/generated/honeymoon-offer-1.realphoto.dim_800x600.png',
    },
    {
      id: 2,
      title: 'Paris & French Riviera',
      location: 'France',
      duration: '10 Days / 9 Nights',
      price: '$4,299',
      rating: 4.9,
      reviews: 124,
      description: 'Experience the city of love and the glamorous French Riviera with exclusive couple experiences.',
      inclusions: ['Luxury Hotels', 'Private Tours', 'Fine Dining', 'Seine River Cruise'],
      image: '/assets/generated/honeymoon-offer-2.realphoto.dim_800x600.png',
    },
    {
      id: 3,
      title: 'Santorini Sunset',
      location: 'Greece',
      duration: '6 Days / 5 Nights',
      price: '$2,899',
      rating: 5.0,
      reviews: 156,
      description: 'Whitewashed villages, stunning sunsets, and intimate cave hotels overlooking the Aegean Sea.',
      inclusions: ['Cave Hotel', 'Wine Tasting', 'Sunset Cruise', 'Couples Massage'],
      image: '/assets/generated/honeymoon-offer-3.realphoto.dim_800x600.png',
    },
    {
      id: 4,
      title: 'Bali Bliss',
      location: 'Indonesia',
      duration: '8 Days / 7 Nights',
      price: '$2,599',
      rating: 4.8,
      reviews: 98,
      description: 'Tropical paradise with private villas, rice terrace views, and traditional Balinese romance.',
      inclusions: ['Private Villa', 'Spa Package', 'Cultural Tours', 'Beach Activities'],
      image: '/assets/generated/honeymoon-offer-4.realphoto.dim_800x600.png',
    },
    {
      id: 5,
      title: 'Swiss Alps Retreat',
      location: 'Switzerland',
      duration: '7 Days / 6 Nights',
      price: '$3,899',
      rating: 4.9,
      reviews: 67,
      description: 'Mountain chalets, scenic train rides, and cozy evenings in the heart of the Swiss Alps.',
      inclusions: ['Mountain Chalet', 'Scenic Railways', 'Fondue Dinners', 'Ski Passes'],
      image: '/assets/generated/honeymoon-offer-5.realphoto.dim_800x600.png',
    },
    {
      id: 6,
      title: 'Caribbean Paradise',
      location: 'St. Lucia',
      duration: '7 Days / 6 Nights',
      price: '$3,199',
      rating: 5.0,
      reviews: 112,
      description: 'Pristine beaches, lush rainforests, and all-inclusive luxury resorts perfect for newlyweds.',
      inclusions: ['All-Inclusive Resort', 'Water Sports', 'Couples Spa', 'Island Tours'],
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&h=600&fit=crop',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="h-8 w-8 fill-primary text-primary" />
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Honeymoon Offers
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Celebrate your love with unforgettable romantic getaways
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-border/40 bg-background py-12">
        <div className="container">
          <img
            src="/assets/generated/honeymoon-hero-image.dim_1200x800.png"
            alt="Honeymoon Destinations"
            className="w-full rounded-2xl shadow-lg object-cover max-h-96"
            loading="lazy"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="border-b border-border/40 bg-muted/30 py-16">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Why Choose Our Honeymoon Packages
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Romantic Experiences</CardTitle>
                <CardDescription>
                  Specially curated activities and amenities designed for couples celebrating their love.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Luxury Accommodations</CardTitle>
                <CardDescription>
                  Stay in the finest hotels, resorts, and villas with exclusive honeymoon perks and upgrades.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Dream Destinations</CardTitle>
                <CardDescription>
                  Explore the world's most romantic locations, from tropical beaches to historic cities.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Honeymoon Packages
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Handpicked destinations for the perfect start to your married life
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <Card key={offer.id} className="border-border/50 transition-shadow hover:shadow-lg flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                </CardHeader>
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 fill-primary text-primary" />
                      <Badge className="bg-primary text-primary-foreground hover:bg-primary/90">
                        Honeymoon Special
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-semibold">{offer.rating}</span>
                      <span className="text-xs text-muted-foreground">({offer.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="mb-2">{offer.title}</CardTitle>
                  <CardDescription className="mb-4">{offer.description}</CardDescription>
                  
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{offer.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{offer.duration}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Includes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {offer.inclusions.map((item, idx) => (
                        <Badge key={idx} variant="outline">{item}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/40">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-foreground">{offer.price}</p>
                    </div>
                    <Button 
                      onClick={() => navigate({ to: '/booking', search: { offer: offer.title } })}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/40 bg-gradient-to-br from-primary/10 to-background py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <Heart className="mx-auto mb-6 h-16 w-16 fill-primary text-primary" />
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Ready to Start Your Journey Together?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let us help you create the perfect honeymoon experience. Contact our travel experts today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Us
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate({ to: '/booking' })}>
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
