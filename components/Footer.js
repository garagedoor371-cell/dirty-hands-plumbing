import { business, services } from '../lib/services';
import { states } from '../lib/zips';

export default function Footer() {
  const topServices = services.slice(0, 8);
  const topStates = states.slice(0, 12);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div>
            <h4>{business.name}</h4>
            <p>24/7 residential and commercial plumbing services. Licensed, bonded, and insured. Upfront pricing, no hidden fees.</p>
            <p><strong>Phone:</strong> <a href={business.tel}>{business.phone}</a></p>
            <p><strong>Hours:</strong> {business.hours}</p>
            <p><strong>Service:</strong> Nationwide</p>
          </div>
          <div>
            <h4>Services</h4>
            {topServices.map(s => <a key={s.slug} href={`/services/${s.slug}/`}>{s.name}</a>)}
            <a href="/services/">All Services</a>
          </div>
          <div>
            <h4>Service Areas</h4>
            {topStates.map(st => <a key={st} href={`/areas/`}>{st}</a>)}
            <a href="/all-locations/">All Locations</a>
          </div>
          <div>
            <h4>Company</h4>
            <a href="/about/">About Us</a>
            <a href="/contact/">Contact</a>
            <a href="/privacy/">Privacy Policy</a>
            <a href="/terms/">Terms & Conditions</a>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} {business.name}. All rights reserved.</div>
      </div>
    </footer>
  );
}
