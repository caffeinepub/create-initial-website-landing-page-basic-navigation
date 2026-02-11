import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Users, Star } from 'lucide-react';

export default function TourPackages() {
  const navigate = useNavigate();

  const packages = [
    {
      id: 1,
      title: 'European Grand Tour',
      location: 'Paris, Rome, Barcelona',
      duration: '14 Days',
      groupSize: '2-12 People',
      price: '$2,499',
      rating: 4.9,
      reviews: 127,
      description: 'Experience the best of Europe with visits to iconic cities, world-class museums, and unforgettable cuisine.',
      inclusions: ['Flights', 'Hotels', 'Guided Tours', 'Some Meals'],
      image: '/assets/generated/tour-package-1-europe.realphoto.dim_800x600.png',
    },
    {
      id: 2,
      title: 'Asian Discovery',
      location: 'Tokyo, Bangkok, Singapore',
      duration: '12 Days',
      groupSize: '2-10 People',
      price: '$1,999',
      rating: 4.8,
      reviews: 98,
      description: 'Immerse yourself in the rich cultures and modern marvels of Asia\'s most vibrant cities.',
      inclusions: ['Flights', 'Hotels', 'Guided Tours', 'Breakfast'],
      image: '/assets/generated/tour-package-2-asia.realphoto.dim_800x600.png',
    },
    {
      id: 3,
      title: 'Tropical Paradise',
      location: 'Maldives, Bali, Phuket',
      duration: '10 Days',
      groupSize: '2-8 People',
      price: '$1,799',
      rating: 5.0,
      reviews: 156,
      description: 'Relax on pristine beaches, explore coral reefs, and enjoy luxury resorts in tropical paradise.',
      inclusions: ['Flights', 'Resorts', 'Water Activities', 'All Meals'],
      image: '/assets/generated/tour-package-3-tropical.realphoto.dim_800x600.png',
    },
    {
      id: 4,
      title: 'African Safari Adventure',
      location: 'Kenya, Tanzania',
      duration: '9 Days',
      groupSize: '4-12 People',
      price: '$3,299',
      rating: 4.9,
      reviews: 84,
      description: 'Witness the incredible wildlife of Africa on guided safaris through national parks and reserves.',
      inclusions: ['Flights', 'Lodges', 'Safari Tours', 'All Meals'],
      image: '/assets/generated/tour-package-4-safari.realphoto.dim_800x600.png',
    },
    {
      id: 5,
      title: 'South American Explorer',
      location: 'Peru, Chile, Argentina',
      duration: '16 Days',
      groupSize: '2-10 People',
      price: '$2,899',
      rating: 4.8,
      reviews: 72,
      description: 'Discover ancient ruins, stunning landscapes, and vibrant cultures across South America.',
      inclusions: ['Flights', 'Hotels', 'Guided Tours', 'Some Meals'],
      image: '/assets/generated/tour-package-5-south-america.realphoto.dim_800x600.png',
    },
    {
      id: 6,
      title: 'Australian Wonders',
      location: 'Sydney, Melbourne, Cairns',
      duration: '11 Days',
      groupSize: '2-8 People',
      price: '$2,599',
      rating: 4.7,
      reviews: 91,
      description: 'Experience Australia\'s iconic landmarks, Great Barrier Reef, and unique wildlife.',
      inclusions: ['Flights', 'Hotels', 'Tours', 'Breakfast'],
      image: '/assets/generated/tour-package-6-australia.realphoto.dim_800x600.png',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Tour Packages
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Curated experiences to the world's most amazing destinations
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="border-b border-border/40 bg-background py-12">
        <div className="container">
          <img
            src="/assets/generated/tour-packages-featured.realphoto.dim_1200x800.png"
            alt="Tour Packages"
            className="w-full rounded-2xl shadow-lg object-cover max-h-96"
          />
        </div>
      </section>

      {/* Packages Grid */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="border-border/50 transition-shadow hover:shadow-lg flex flex-col">
                <CardHeader className="p-0">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="pt-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{pkg.duration}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="text-sm font-semibold">{pkg.rating}</span>
                      <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="mb-2">{pkg.title}</CardTitle>
                  <CardDescription className="mb-4">{pkg.description}</CardDescription>
                  
                  <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Includes:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {pkg.inclusions.map((item, idx) => (
                        <Badge key={idx} variant="outline">{item}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/40">
                    <div>
                      <p className="text-xs text-muted-foreground">Starting from</p>
                      <p className="text-2xl font-bold text-foreground">{pkg.price}</p>
                    </div>
                    <Button onClick={() => navigate({ to: '/booking', search: { package: pkg.title } })}>
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
