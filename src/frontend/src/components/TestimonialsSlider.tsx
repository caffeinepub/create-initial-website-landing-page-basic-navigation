import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  trip: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah & Michael Johnson',
    location: 'New York, USA',
    rating: 5,
    text: 'Our honeymoon in Maldives was absolutely perfect! Archiv Agency took care of every detail, from the overwater villa to the private beach dinners. It was truly a dream come true.',
    trip: 'Maldives Honeymoon Package',
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Singapore',
    rating: 5,
    text: 'The European Grand Tour exceeded all expectations. Our guide was knowledgeable, the hotels were luxurious, and the itinerary was perfectly paced. Highly recommend Archiv Agency!',
    trip: 'European Grand Tour',
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    location: 'Madrid, Spain',
    rating: 5,
    text: 'Amazing experience with the Asian Discovery package! Everything was seamlessly organized, and we got to experience the authentic culture of each destination. Will definitely book again.',
    trip: 'Asian Discovery Package',
  },
  {
    id: 4,
    name: 'James & Lisa Thompson',
    location: 'London, UK',
    rating: 5,
    text: 'The African Safari was the adventure of a lifetime! Seeing wildlife in their natural habitat was breathtaking. The guides were professional and the accommodations were top-notch.',
    trip: 'African Safari Adventure',
  },
  {
    id: 5,
    name: 'Priya Patel',
    location: 'Mumbai, India',
    rating: 5,
    text: 'Archiv Agency made our family vacation to Australia unforgettable. From the Great Barrier Reef to Sydney Opera House, every moment was magical. Excellent service throughout!',
    trip: 'Australian Wonders',
  },
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full">
      <Card className="border-border/50 shadow-lg">
        <CardContent className="p-8 md:p-12">
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 h-12 w-12 text-primary/20" />
            
            <div className="mb-6 flex items-center gap-1">
              {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>

            <blockquote className="mb-6 text-lg text-foreground md:text-xl">
              "{currentTestimonial.text}"
            </blockquote>

            <div className="mb-6">
              <p className="font-semibold text-foreground">{currentTestimonial.name}</p>
              <p className="text-sm text-muted-foreground">{currentTestimonial.location}</p>
              <p className="mt-1 text-sm text-primary">{currentTestimonial.trip}</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'w-8 bg-primary'
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
