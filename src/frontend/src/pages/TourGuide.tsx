import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Languages, MapPin, Star, Award } from 'lucide-react';

export default function TourGuide() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-muted/50 to-background">
        <div className="container py-20 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Expert Tour Guides
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
              Meet the passionate professionals who bring destinations to life
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="border-b border-border/40 bg-background py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground">
                Why Our Guides Make the Difference
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Our tour guides are more than just navigators—they are storytellers, cultural ambassadors, and your
                  personal connection to each destination. With extensive training and deep local knowledge, they transform
                  ordinary sightseeing into extraordinary experiences.
                </p>
                <p>
                  Each guide is carefully selected for their expertise, communication skills, and genuine passion for
                  sharing their knowledge. They are fluent in multiple languages and trained to handle any situation with
                  professionalism and care.
                </p>
                <p>
                  Whether you're exploring ancient ruins, navigating bustling markets, or discovering hidden gems off the
                  beaten path, our guides ensure you get the most authentic and enriching experience possible.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/assets/generated/tour-guide-section-image.realphoto.dim_1200x800.png"
                alt="Professional Tour Guides"
                className="w-full rounded-2xl shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border/40 bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              What Sets Our Guides Apart
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Languages className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Multilingual</CardTitle>
                <CardDescription>
                  Our guides speak multiple languages fluently, ensuring clear communication throughout your journey.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Local Experts</CardTitle>
                <CardDescription>
                  Deep knowledge of local culture, history, and hidden spots that only insiders know about.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Certified</CardTitle>
                <CardDescription>
                  All guides hold professional certifications and undergo continuous training programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Highly Rated</CardTitle>
                <CardDescription>
                  Consistently receive 5-star reviews from travelers for their knowledge and hospitality.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Guides Section */}
      <section className="bg-background py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Meet Some of Our Guides
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A few of the amazing professionals on our team
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Maria Rodriguez</CardTitle>
                <CardDescription>European History Specialist</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    15 years of experience guiding tours through Europe's most iconic cities and historical sites.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Spanish</Badge>
                    <Badge variant="secondary">English</Badge>
                    <Badge variant="secondary">French</Badge>
                    <Badge variant="secondary">Italian</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Kenji Tanaka</CardTitle>
                <CardDescription>Asian Culture Expert</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Specializes in cultural immersion experiences across Japan, China, and Southeast Asia.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Japanese</Badge>
                    <Badge variant="secondary">English</Badge>
                    <Badge variant="secondary">Mandarin</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Adventure Travel Guide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Expert in outdoor adventures, wildlife tours, and eco-tourism across multiple continents.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">English</Badge>
                    <Badge variant="secondary">Portuguese</Badge>
                    <Badge variant="secondary">Swahili</Badge>
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
