import { services } from '../../lib/services';

export const metadata = {
  title: 'Plumbing Services',
  description: 'Full range of residential and commercial plumbing services from Dirty Hands Plumbing. Emergency repairs, drain cleaning, water heaters, leak detection, and more.',
  alternates: { canonical: 'https://dirtyhandsplumbing.pages.dev/services/' },
};

export default function ServicesIndex() {
  return (
    <section>
      <div className="container">
        <h1>Plumbing Services</h1>
        <p>Dirty Hands Plumbing offers comprehensive plumbing services for homes and businesses. Explore our services below.</p>
        <div className="grid grid-3">
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
  );
}
