import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { business } from '../lib/services';

export const metadata = {
  metadataBase: new URL('https://dirtyhandsplumbing.pages.dev'),
  title: {
    default: 'Dirty Hands Plumbing | 24/7 Plumber Near You',
    template: '%s | Dirty Hands Plumbing',
  },
  description: 'Dirty Hands Plumbing provides 24/7 residential and commercial plumbing services nationwide. Licensed, insured, upfront pricing. Call +1 (607) 678-1346.',
  openGraph: {
    type: 'website',
    siteName: 'Dirty Hands Plumbing',
    title: 'Dirty Hands Plumbing',
    description: '24/7 plumbing services nationwide. Licensed & insured.',
  },
  twitter: { card: 'summary_large_image', title: 'Dirty Hands Plumbing' },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: business.name,
            telephone: business.phoneRaw,
            url: 'https://dirtyhandsplumbing.pages.dev',
            address: { '@type': 'PostalAddress', addressLocality: 'Sadler', addressRegion: 'TX', addressCountry: 'US' },
            openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'], opens: '00:00', closes: '23:59' }],
            aggregateRating: { '@type': 'AggregateRating', ratingValue: business.gmbRating, reviewCount: '33' },
            sameAs: [],
          }) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
