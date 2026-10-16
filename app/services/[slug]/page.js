import { services, business } from '../../../lib/services';
import { serviceContent } from '../../../lib/content';
import Schema from '../../../components/Schema';

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const svc = services.find(s => s.slug === params.slug);
  if (!svc) return {};
  return {
    title: `${svc.name} Services`,
    description: `${svc.name} by Dirty Hands Plumbing. Licensed, insured, upfront pricing. 24/7 availability. Call ${business.phone}.`,
    alternates: { canonical: `https://dirtyhandsplumbing.pages.dev/services/${svc.slug}/` },
  };
}

export default function ServicePage({ params }) {
  const svc = services.find(s => s.slug === params.slug);
  if (!svc) return <div className="container"><h1>Not found</h1></div>;
  const c = serviceContent(svc);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.name,
    provider: { '@type': 'LocalBusiness', name: business.name, telephone: business.phoneRaw },
    areaServed: 'United States',
    description: c.intro,
  };
  return (
    <>
      <Schema data={schema} />
      <section className="hero">
        <div className="container">
          <div>
            <div className="breadcrumb"><a href="/">Home</a> / <a href="/services/">Services</a> / {svc.name}</div>
            <h1>{svc.name} Services</h1>
            <p>{c.intro}</p>
            <p><a href={business.tel} className="cta-btn">Call {business.phone}</a></p>
          </div>
          <div>
            <img src={`/images/hero-${(svc.slug.length % 10) + 1}.jpg`} alt={`${svc.name} by Dirty Hands Plumbing`} width="600" height="400" />
          </div>
        </div>
      </section>

      <section><div className="container">
        <h2>What Is {svc.name}?</h2>
        <p>{c.whatIs}</p>
        <h2>Problems We Solve</h2>
        <p>{c.problems}</p>
        <h2>Benefits</h2>
        <p>{c.benefits}</p>
        <h2>When You Need This Service</h2>
        <p>{c.when}</p>
      </div></section>

      <section className="alt"><div className="container">
        <h2>Our Process</h2>
        <p>{c.process}</p>
        <h2>What's Included</h2>
        <p>{c.included}</p>
        <h2>Service Options</h2>
        <p>{c.options}</p>
      </div></section>

      <section><div className="container">
        <h2>Common Issues</h2>
        <p>{c.common}</p>
        <h2>Pricing Considerations</h2>
        <p>{c.pricing}</p>
        <h2>Why Choose Dirty Hands Plumbing</h2>
        <p>{c.why}</p>
        <h2>Service Availability</h2>
        <p>{c.availability}</p>
      </div></section>

      <section className="alt"><div className="container">
        <h2>Service Area Map</h2>
        <p>We serve communities nationwide. Map shows our primary service region.</p>
        <div className="map-box">
          <iframe loading="lazy" title="Service area map" src="https://www.google.com/maps?q=Sadler,+TX&output=embed" allowFullScreen></iframe>
        </div>
      </div></section>

      <section><div className="container">
        <h2>Frequently Asked Questions</h2>
        {c.faqs.map((f, i) => (
          <div className="faq" key={i}><q>{f.q}</q><p>{f.a}</p></div>
        ))}
      </div></section>

      <section className="alt"><div className="container">
        <h2>Related Services</h2>
        <div className="grid grid-3">
          {services.filter(s => s.slug !== svc.slug).slice(0, 6).map(s => (
            <div className="card" key={s.slug}><h3>{s.name}</h3><a href={`/services/${s.slug}/`}>Learn more →</a></div>
          ))}
        </div>
        <p style={{marginTop:20}}><a href="/all-locations/">Browse all service locations →</a></p>
      </div></section>

      <section><div className="container">
        <h2>Ready to Schedule {svc.name}?</h2>
        <p className="phone-big"><a href={business.tel}>{business.phone}</a></p>
        <p><a href="/contact/" className="cta-btn">Contact Us</a></p>
      </div></section>
    </>
  );
}
