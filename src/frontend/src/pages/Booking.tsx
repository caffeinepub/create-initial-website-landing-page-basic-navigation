import { useState, useEffect } from 'react';
import { useSearch } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { CheckCircle2, QrCode, Phone, Mail, MessageCircle } from 'lucide-react';

export default function Booking() {
  const search = useSearch({ strict: false });
  const packageName = (search as { package?: string; offer?: string }).package || (search as { package?: string; offer?: string }).offer;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    packageOrDestination: packageName || '',
    travelDates: '',
    groupSize: '',
    specialRequests: '',
  });

  useEffect(() => {
    if (packageName) {
      setFormData((prev) => ({ ...prev, packageOrDestination: packageName }));
    }
  }, [packageName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        packageOrDestination: '',
        travelDates: '',
        groupSize: '',
        specialRequests: '',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Generate WhatsApp link with prefilled message
  const whatsappMessage = packageName
    ? `Hi! I'm interested in booking the "${packageName}" package. Can you provide more details?`
    : `Hi! I'm interested in booking a travel package with Archiv Agency. Can you help me?`;
  const whatsappLink = `https://wa.me/15551234567?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-foreground">
            Book Your Journey
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Complete the form below to reserve your travel experience
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Booking Details</CardTitle>
                <CardDescription>
                  Please provide your information and travel preferences
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formSubmitted ? (
                  <div className="rounded-lg bg-primary/10 p-8 text-center">
                    <CheckCircle2 className="mx-auto mb-4 h-16 w-16 text-primary" />
                    <h3 className="mb-2 text-2xl font-semibold text-foreground">Booking Received!</h3>
                    <p className="text-muted-foreground">
                      Thank you for your booking request. We will contact you within 24 hours to confirm your reservation and discuss payment options.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
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
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="packageOrDestination">Package or Destination *</Label>
                      <Input
                        id="packageOrDestination"
                        name="packageOrDestination"
                        value={formData.packageOrDestination}
                        onChange={handleChange}
                        placeholder="e.g., European Adventure"
                        required
                      />
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="travelDates">Preferred Travel Dates *</Label>
                        <Input
                          id="travelDates"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleChange}
                          placeholder="e.g., June 15-25, 2026"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="groupSize">Number of Travelers *</Label>
                        <Input
                          id="groupSize"
                          name="groupSize"
                          type="number"
                          value={formData.groupSize}
                          onChange={handleChange}
                          placeholder="2"
                          min="1"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialRequests">Special Requests or Notes</Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="Any dietary restrictions, accessibility needs, or special occasions..."
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Booking Request
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Payment & Contact Information */}
          <div className="space-y-6">
            {/* Payment Methods - QR Code Only */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <QrCode className="h-5 w-5" />
                  Payment Method
                </CardTitle>
                <CardDescription>
                  Scan the QR code to make payment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <QrCode className="h-5 w-5 text-primary" />
                    <p className="font-medium text-foreground">Scan to Pay</p>
                  </div>
                  <img
                    src="/assets/generated/payment-qr.dim_800x800.png"
                    alt="Payment QR Code - Scan to pay using UPI"
                    className="w-full rounded-lg border border-border"
                    loading="lazy"
                  />
                  <p className="text-xs text-muted-foreground text-center">
                    Scan this QR code with any UPI app to make payment
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact the Owner */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription>
                  Prefer to book directly? Reach out to us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+15551234567" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground mb-2">WhatsApp</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full"
                    >
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="mr-2 h-4 w-4" />
                        Chat on WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:bookings@archivagency.com"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      bookings@archivagency.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
