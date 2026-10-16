import { allZips, states } from '../../lib/zips';
import { stateName } from '../../lib/content';

export const metadata = {
  title: 'All Service Locations',
  description: 'Complete directory of Dirty Hands Plumbing service locations across the United States.',
  alternates: { canonical: 'https://dirtyhandsplumbing.pages.dev/all-locations/' },
};

export default function AllLocations() {
  const byState = {};
  for (const z of allZips) {
    if (!byState[z.state]) byState[z.state] = [];
    byState[z.state].push(z);
  }
  return (
    <section>
      <div className="container">
        <h1>All Service Locations</h1>
        <p>Directory of all plumbing service areas. {allZips.length} locations nationwide.</p>
        {states.map(st => (
          <div key={st} style={{marginBottom:24}}>
            <h2>{stateName(st)} ({byState[st].length})</h2>
            <div className="related-links">
              {byState[st].map(z => (
                <a key={z.slug} href={`/areas/${z.slug}/`}>{z.city} {z.zip}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
