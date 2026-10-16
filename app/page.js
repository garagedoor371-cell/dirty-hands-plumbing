import { business, services } from '../lib/services';
import { allZips } from '../lib/zips';
import Link from 'next/link';

export const metadata = {
  title: 'Dirty Hands Plumbing | 24/7 Plumber Near You',
  description: 'Dirty Hands Plumbing offers 24/7 residential and commercial plumbing nationwide. Licensed, insured, upfront pricing. Call +1 (607) 678-1346.',
  alternates: { canonical: 'https://dirtyhandsplumbing.pages.dev/' },
  other: {
    'google-site-verification': 'UE7HgOqeNKlC56zuKMzJ4H43JAF4jEdW4LDLZSUPoKE',
  },
};

const latest = allZips.slice(0, 150);

export default function Home() {
  return (
    <>
      <section className="hero" style={{backgroundImage:"url('/images/hero-1.jpg')"}}>
        <div className="container">
          <h1>Trusted 24/7 Plumbing Services Near You</h1>
          <p>Dirty Hands Plumbing delivers fast, reliable, and affordable plumbing for homes and businesses nationwide. Licensed, bonded, and insured with upfront pricing and a satisfaction guarantee.</p>
          <div className="cta-row">
            <a href={business.tel} className="cta-btn">Call Now {business.phone}</a>
            <a href="/contact/" className="cta-btn" style={{background:'#fff',color:'#1e3a5f'}}>Request Service</a>
          </div>
          <div className="trust" style={{marginTop:24}}>
            <div className="badge">⭐ {business.yelpRating} on Yelp ({business.yelpCount} reviews)</div>
            <div className="badge">⭐ {business.gmbRating} on Google ({business.gmbCount} reviews)</div>
            <div className="badge">Licensed & Insured</div>
            <div className="badge">24/7 Emergency</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Our Plumbing Services</h2>
          <p>From emergency repairs to full installations, Dirty Hands Plumbing handles every plumbing need with skill and care.</p>
          <div className="grid grid-4">
            {services.map(s => (
              <div className="card" key={s.slug}>
                <h3>{s.icon} {s.name}</h3>
                <p>{s.short}</p>
                <a href={`/services/${s.slug}/`}>Learn more →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <h2>Service Areas</h2>
          <p>We proudly serve communities across the United States. Find plumbing services in your area.</p>
          <div className="grid grid-4">
            {allZips.slice(0, 12).map(z => (
              <div className="card" key={z.slug}>
                <h3>{z.city}, {z.state}</h3>
                <p>ZIP {z.zip}</p>
                <a href={`/areas/${z.slug}/`}>Local plumbing →</a>
              </div>
            ))}
          </div>
          <p style={{marginTop:20}}><a href="/all-locations/" className="cta-btn">View All Service Locations</a></p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Why Choose Dirty Hands Plumbing</h2>
          <div className="grid grid-3">
            <div className="card"><h3>Licensed & Insured</h3><p>Fully licensed, bonded, and insured technicians you can trust in your home or business.</p></div>
            <div className="card"><h3>Upfront Pricing</h3><p>Flat-rate quotes before work begins. No hidden fees, no surprises.</p></div>
            <div className="card"><h3>24/7 Emergency</h3><p>Round-the-clock availability for urgent plumbing emergencies, including weekends and holidays.</p></div>
            <div className="card"><h3>Quality Parts</h3><p>We use durable, code-compliant materials backed by manufacturer warranties.</p></div>
            <div className="card"><h3>Clean Workmanship</h3><p>We respect your property, clean up after every job, and explain everything in plain language.</p></div>
            <div className="card"><h3>Satisfaction Guarantee</h3><p>We stand behind our work with written warranties on parts and labor.</p></div>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <h2>Our Process</h2>
          <ol>
            <li><strong>Call us</strong> — Describe the issue to our friendly team, available 24/7.</li>
            <li><strong>Schedule</strong> — We book a convenient appointment, often same-day.</li>
            <li><strong>Diagnose</strong> — A licensed technician inspects and explains the problem.</li>
            <li><strong>Quote</strong> — You receive an upfront, flat-rate price before any work.</li>
            <li><strong>Repair</strong> — We complete the job with quality parts and clean up.</li>
            <li><strong>Warranty</strong> — You get a written warranty and maintenance tips.</li>
          </ol>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq"><q>Do you offer 24/7 emergency plumbing?</q><p>Yes. Dirty Hands Plumbing is available around the clock for plumbing emergencies nationwide.</p></div>
          <div className="faq"><q>Are your plumbers licensed and insured?</q><p>Yes. All technicians are licensed, bonded, and insured and work to local code.</p></div>
          <div className="faq"><q>Do you provide upfront pricing?</q><p>Yes. We give flat-rate quotes before any work begins so there are no surprises.</p></div>
          <div className="faq"><q>Do you service both homes and businesses?</q><p>Yes. We handle residential and commercial plumbing of all sizes.</p></div>
          <div className="faq"><q>What areas do you serve?</q><p>We serve communities across the United States. See our service areas page.</p></div>
        </div>
      </section>

      <section className="alt">
        <div className="container">
          <h2>Latest Service Locations</h2>
          <p>Browse recently added plumbing service areas.</p>
          <div className="related-links">
            {latest.map(z => (
              <a key={z.slug} href={`/areas/${z.slug}/`}>Plumbing in {z.city}, {z.state} {z.zip}</a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Contact Dirty Hands Plumbing</h2>
          <p>Ready to fix your plumbing problem? Call us now or request service online.</p>
          <p className="phone-big"><a href={business.tel}>{business.phone}</a></p>
          <p><a href="/contact/" className="cta-btn">Contact Us</a></p>
        </div>
      </section>
    </>
  );
}
