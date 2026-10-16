import { allZips, states } from '../../lib/zips';
import { stateName } from '../../lib/content';

export const metadata = {
  title: 'Service Areas',
  description: 'Dirty Hands Plumbing serves communities across the United States. Find plumbing services in your city.',
  alternates: { canonical: 'https://dirtyhandsplumbing.pages.dev/areas/' },
};

export default function AreasIndex() {
  // group by state
  const byState = {};
  for (const z of allZips) {
    if (!byState[z.state]) byState[z.state] = [];
    byState[z.state].push(z);
  }
  return (
    <section>
      <div className="container">
        <h1>Service Areas</h1>
        <p>Dirty Hands Plumbing provides 24/7 plumbing services in communities across the United States. Select your state to find local service.</p>
        {states.map(st => (
          <div key={st} style={{marginBottom:30}}>
            <h2>{stateName(st)}</h2>
            <div className="related-links">
              {byState[st].slice(0, 40).map(z => (
                <a key={z.slug} href={`/areas/${z.slug}/`}>{z.city} {z.zip}</a>
              ))}
            </div>
            {byState[st].length > 40 && <p><a href="/all-locations/">View all {byState[st].length} locations in {stateName(st)} →</a></p>}
          </div>
        ))}
      </div>
    </section>
  );
}
