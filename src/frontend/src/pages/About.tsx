import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Globe, Heart, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              About Us
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Your trusted partner in creating unforgettable travel experiences
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-border/40 bg-background py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <img
                src="/assets/generated/about-section-image.realphoto.dim_1200x800.png"
                alt="About Our Travel Agency"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded with a passion for exploration and a commitment to excellence, we have been helping travelers
                  discover the world's most amazing destinations for years. Our journey began with a simple belief: that
                  travel should be accessible, enjoyable, and transformative.
                </p>
                <p>
                  Today, we are proud to be a leading travel agency, offering comprehensive services that cater to every
                  type of traveler. From solo adventurers to family vacations, from business trips to romantic getaways,
                  we have the expertise and resources to make your travel dreams come true.
                </p>
                <p>
                  Our team of dedicated travel professionals brings together decades of combined experience, intimate
                  knowledge of destinations worldwide, and a genuine passion for helping people explore our beautiful planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="border-b border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Passion</CardTitle>
                <CardDescription>
                  We love what we do and it shows in every journey we plan and every client we serve.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  We strive for perfection in every detail, ensuring the highest quality experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Customer First</CardTitle>
                <CardDescription>
                  Your satisfaction and happiness are at the heart of everything we do.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Global Reach</CardTitle>
                <CardDescription>
                  With partners worldwide, we bring you authentic experiences in every corner of the globe.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Destinations</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
