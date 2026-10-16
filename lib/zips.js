import zips from '../data/zips.json';

export const allZips = zips;

export function getZipBySlug(slug) {
  return zips.find(z => z.slug === slug);
}

export function zipsByState(state) {
  return zips.filter(z => z.state === state);
}

export function zipsByCity(city, state) {
  return zips.filter(z => z.city === city && z.state === state);
}

export function relatedZips(zip, count = 12) {
  // same state first, then others; deterministic by slug sort
  const same = zips.filter(z => z.state === zip.state && z.slug !== zip.slug);
  const others = zips.filter(z => z.state !== zip.state);
  const pool = [...same, ...others];
  // deterministic pseudo-random selection based on zip string
  let h = 0;
  for (let i = 0; i < zip.slug.length; i++) h = (h * 31 + zip.slug.charCodeAt(i)) >>> 0;
  const picked = [];
  const used = new Set();
  let idx = h % pool.length;
  while (picked.length < count && picked.length < pool.length) {
    const c = pool[idx % pool.length];
    if (!used.has(c.slug)) { used.add(c.slug); picked.push(c); }
    idx = (idx * 9301 + 49297) % pool.length;
    if (picked.length > 0 && idx === (h % pool.length)) break;
  }
  // fallback
  if (picked.length < count) {
    for (const c of pool) {
      if (picked.length >= count) break;
      if (!used.has(c.slug)) { used.add(c.slug); picked.push(c); }
    }
  }
  return picked.slice(0, count);
}

export const states = [...new Set(zips.map(z => z.state))].sort();
