import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Briefcase, Shield, Star } from 'lucide-react';

export default function Vehicles() {
  const vehicles = [
    {
      id: 1,
      name: 'Economy Sedan',
      capacity: '4 Passengers',
      luggage: '2 Large Bags',
      price: '$50/day',
      features: ['Air Conditioning', 'GPS Navigation', 'Insurance Included'],
    },
    {
      id: 2,
      name: 'Luxury SUV',
      capacity: '6 Passengers',
      luggage: '4 Large Bags',
      price: '$120/day',
      features: ['Premium Interior', 'Advanced Safety', 'Professional Driver'],
    },
    {
      id: 3,
      name: 'Executive Van',
      capacity: '8 Passengers',
      luggage: '6 Large Bags',
      price: '$150/day',
      features: ['Spacious Interior', 'Entertainment System', 'Wi-Fi Available'],
    },
    {
      id: 4,
      name: 'Minibus',
      capacity: '15 Passengers',
      luggage: '10 Large Bags',
      price: '$200/day',
      features: ['Group Travel', 'Comfortable Seating', 'Professional Driver'],
    },
    {
      id: 5,
      name: 'Luxury Coach',
      capacity: '30 Passengers',
      luggage: '20 Large Bags',
      price: '$350/day',
      features: ['Premium Comfort', 'Restroom', 'Entertainment System'],
    },
    {
      id: 6,
      name: 'Premium Sedan',
      capacity: '4 Passengers',
      luggage: '3 Large Bags',
      price: '$90/day',
      features: ['Luxury Interior', 'Chauffeur Service', 'VIP Treatment'],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Our Fleet
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Comfortable and reliable transportation for every journey
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="border-b border-border/40 bg-background py-12">
        <div className="container">
          <img
            src="/assets/generated/vehicles-hero-image.realphoto.dim_1200x800.png"
            alt="Our Vehicle Fleet"
            className="w-full rounded-2xl shadow-lg object-cover max-h-96"
          />
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Choose Your Vehicle
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From economy to luxury, we have the perfect vehicle for your needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="border-border/50 transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle>{vehicle.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <Star className="h-4 w-4 fill-primary text-primary" />
                    </div>
                  </div>
                  <CardDescription>Professional transportation service</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{vehicle.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        <span>{vehicle.luggage}</span>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                        Features:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/40">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting from</p>
                        <p className="text-2xl font-bold text-foreground">{vehicle.price}</p>
                      </div>
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
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
