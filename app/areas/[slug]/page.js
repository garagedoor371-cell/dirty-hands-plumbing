import { business, services } from '../../../lib/services';
import { allZips, getZipBySlug, relatedZips } from '../../../lib/zips';
import { areaContent, stateName } from '../../../lib/content';
import Schema from '../../../components/Schema';

export async function generateStaticParams() {
  return allZips.map(z => ({ slug: z.slug }));
}

export async function generateMetadata({ params }) {
  const zip = getZipBySlug(params.slug);
  if (!zip) return {};
  return {
    title: `Plumber in ${zip.city}, ${zip.state} ${zip.zip}`,
    description: `Dirty Hands Plumbing provides 24/7 plumbing services in ${zip.city}, ${zip.state} ${zip.zip}. Licensed, insured, upfront pricing. Call ${business.phone}.`,
    alternates: { canonical: `https://dirtyhandsplumbing.pages.dev/areas/${zip.slug}/` },
  };
}

export default function AreaPage({ params }) {
  const zip = getZipBySlug(params.slug);
  if (!zip) return <div className="container"><h1>Not found</h1></div>;
  const c = areaContent(zip);
  const related = relatedZips(zip, 12);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    telephone: business.phoneRaw,
    url: `https://dirtyhandsplumbing.pages.dev/areas/${zip.slug}/`,
    address: { '@type': 'PostalAddress', addressLocality: zip.city, addressRegion: zip.state, postalCode: zip.zip, addressCountry: 'US' },
    areaServed: { '@type': 'City', name: zip.city },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: business.gmbRating, reviewCount: '33' },
  };
  return (
    <>
      <Schema data={schema} />
      <section className="hero">
        <div className="container">
          <div>
            <div className="breadcrumb"><a href="/">Home</a> / <a href="/areas/">Service Areas</a> / {zip.city}, {zip.state}</div>
            <h1>Plumbing Services in {zip.city}, {zip.state} {zip.zip}</h1>
            <p>{c.intro}</p>
            <p><a href={business.tel} className="cta-btn">Call {business.phone}</a></p>
            <div className="trust">
              <div className="badge">⭐ {business.yelpRating} Yelp ({business.yelpCount} reviews)</div>
              <div className="badge">⭐ {business.gmbRating} Google ({business.gmbCount} reviews)</div>
              <div className="badge">Licensed & Insured</div>
            </div>
          </div>
          <div>
            <img src={`/images/hero-${(zip.zip.charCodeAt(0) % 10) + 1}.jpg`} alt={`Plumbing in ${zip.city}, ${zip.state}`} width="600" height="400" />
          </div>
        </div>
      </section>

      <section><div className="container">
        <h2>Local Plumbing Needs in {zip.city}</h2>
        <p>{c.needs}</p>
        <h2>Services Available in {zip.city}</h2>
        <p>{c.services}</p>
        <h2>Common Plumbing Problems in {zip.city}</h2>
        <p>{c.problems}</p>
      </div></section>

      <section className="alt"><div className="container">
        <h2>Our Process</h2>
        <p>{c.process}</p>
        <h2>Why Choose Dirty Hands Plumbing</h2>
        <p>{c.why}</p>
        <h2>Service Availability</h2>
        <p>{c.availability}</p>
      </div></section>

      <section><div className="container">
        <h2>Service Area Map</h2>
        <p>Map showing {zip.city}, {stateName(zip.state)}.</p>
        <div className="map-box">
          <iframe loading="lazy" title={`Map of ${zip.city}`} src={`https://www.google.com/maps?q=${encodeURIComponent(zip.city + ', ' + zip.state)}&output=embed`} allowFullScreen></iframe>
        </div>
      </div></section>

      <section className="alt"><div className="container">
        <h2>Services We Offer in {zip.city}</h2>
        <div className="grid grid-3">
          {services.slice(0, 9).map(s => (
            <div className="card" key={s.slug}><h3>{s.name}</h3><a href={`/services/${s.slug}/`}>Learn more →</a></div>
          ))}
        </div>
      </div></section>

      <section><div className="container">
        <h2>Frequently Asked Questions</h2>
        {c.faqs.map((f, i) => (
          <div className="faq" key={i}><q>{f.q}</q><p>{f.a}</p></div>
        ))}
      </div></section>

      <section className="alt"><div className="container">
        <h2>Related Service Areas</h2>
        <p>Nearby communities we also serve.</p>
        <div className="related-links">
          {related.map(r => (
            <a key={r.slug} href={`/areas/${r.slug}/`}>Plumber in {r.city}, {r.state} {r.zip}</a>
          ))}
        </div>
      </div></section>

      <section><div className="container">
        <h2>Need a Plumber in {zip.city}?</h2>
        <p className="phone-big"><a href={business.tel}>{business.phone}</a></p>
        <p><a href="/contact/" className="cta-btn">Contact Us</a> <a href="/services/" className="cta-btn" style={{background:'#1e3a5f'}}>All Services</a></p>
      </div></section>
    </>
  );
}
