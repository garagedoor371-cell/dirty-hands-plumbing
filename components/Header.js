import { business, services } from '../lib/services';

export default function Header() {
  return (
    <header className="site-header">
      <div className="bar">
        <a href="/" className="logo">{business.name}</a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="/services/">Services</a>
          <a href="/areas/">Service Areas</a>
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
          <a href={business.tel} className="cta-btn">Call {business.phone}</a>
        </nav>
      </div>
    </header>
  );
}
