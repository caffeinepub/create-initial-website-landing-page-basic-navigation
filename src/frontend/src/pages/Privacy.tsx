import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacy() {
  return (
    <div className="container py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 font-display text-4xl font-bold tracking-tight text-foreground">
          Privacy Policy
        </h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                This Privacy Policy describes how we collect, use, and protect your personal information
                when you use our website. We are committed to ensuring that your privacy is protected.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>We may collect the following information:</p>
              <ul>
                <li>Name and contact information</li>
                <li>Demographic information</li>
                <li>Other information relevant to customer surveys and offers</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
              <ul>
                <li>Internal record keeping</li>
                <li>Improving our products and services</li>
                <li>Sending promotional emails about new products or special offers</li>
                <li>Contacting you for market research purposes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We are committed to ensuring that your information is secure. In order to prevent
                unauthorized access or disclosure, we have put in place suitable physical, electronic,
                and managerial procedures to safeguard and secure the information we collect online.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                A cookie is a small file which asks permission to be placed on your computer's hard drive.
                Once you agree, the file is added and the cookie helps analyze web traffic or lets you know
                when you visit a particular site. Cookies allow web applications to respond to you as an
                individual, tailoring operations to your needs, likes, and dislikes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Links to Other Websites</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Our website may contain links to other websites of interest. However, once you have used
                these links to leave our site, you should note that we do not have any control over that
                other website. Therefore, we cannot be responsible for the protection and privacy of any
                information which you provide whilst visiting such sites.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                If you have any questions about this Privacy Policy or our treatment of your personal
                information, please contact us through the contact form on our website.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
