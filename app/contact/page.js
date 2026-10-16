import { business } from '../../lib/services';

export const metadata = {
  title: 'Contact Us',
  description: 'Contact Dirty Hands Plumbing for 24/7 plumbing service. Call +1 (607) 678-1346 or request service online.',
  alternates: { canonical: 'https://dirtyhandsplumbing.pages.dev/contact/' },
};

export default function Contact() {
  return (
    <section><div className="container">
      <h1>Contact Dirty Hands Plumbing</h1>
      <p>Need a plumber? We're available 24/7. Call us now or send a message.</p>
      <p className="phone-big"><a href={business.tel}>{business.phone}</a></p>
      <h2>Business Hours</h2>
      <p>{business.hours}</p>
      <h2>Service Area</h2>
      <p>Nationwide residential and commercial plumbing.</p>
      <h2>Request Service</h2>
      <p>Call us directly for the fastest response. For non-urgent inquiries, email {business.email}.</p>
      <p><a href={business.tel} className="cta-btn">Call Now</a></p>
    </div></section>
  );
}
