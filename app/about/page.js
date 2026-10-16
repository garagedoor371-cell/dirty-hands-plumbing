import { business } from '../../lib/services';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Dirty Hands Plumbing, our mission, values, and commitment to quality plumbing services.',
  alternates: { canonical: 'https://dirtyhandsplumbing.pages.dev/about/' },
};

export default function About() {
  return (
    <section><div className="container">
      <h1>About Dirty Hands Plumbing</h1>
      <p>Dirty Hands Plumbing was founded on a simple idea: plumbing should be done right the first time, at a fair price, by people who care about your home. We are a licensed, bonded, and insured plumbing company serving residential and commercial customers nationwide.</p>
      <h2>Our Mission</h2>
      <p>To deliver reliable, high-quality plumbing services that protect our customers' homes and businesses while treating every property with respect.</p>
      <h2>Our Values</h2>
      <ul>
        <li><strong>Honesty:</strong> Upfront pricing with no hidden fees.</li>
        <li><strong>Quality:</strong> Skilled technicians and durable parts.</li>
        <li><strong>Respect:</strong> Clean workmanship and clear communication.</li>
        <li><strong>Availability:</strong> 24/7 emergency response.</li>
      </ul>
      <h2>Reviews</h2>
      <p>Our customers rate us {business.yelpRating} stars on Yelp ({business.yelpCount} reviews) and {business.gmbRating} stars on Google ({business.gmbCount} reviews). We are proud of the trust our neighbors place in us.</p>
      <h2>Contact</h2>
      <p>Call <a href={business.tel}>{business.phone}</a> or <a href="/contact/">contact us online</a>.</p>
    </div></section>
  );
}
