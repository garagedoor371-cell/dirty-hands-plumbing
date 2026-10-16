// Deterministic pseudo-random helpers
function hash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
}
function pick(arr, seed, n = 1) {
  const out = [];
  const used = new Set();
  let i = 0;
  while (out.length < n && out.length < arr.length) {
    const idx = (seed + i * 7919) % arr.length;
    if (!used.has(idx)) { used.add(idx); out.push(arr[idx]); }
    i++;
  }
  return out;
}

const STATE_NAMES = {
  AL:'Alabama',AR:'Arkansas',AZ:'Arizona',CA:'California',CO:'Colorado',CT:'Connecticut',
  DC:'District of Columbia',DE:'Delaware',FL:'Florida',GA:'Georgia',HI:'Hawaii',IA:'Iowa',
  ID:'Idaho',IL:'Illinois',IN:'Indiana',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',MA:'Massachusetts',
  MD:'Maryland',ME:'Maine',MI:'Michigan',MN:'Minnesota',MO:'Missouri',MS:'Mississippi',
  NC:'North Carolina',NE:'Nebraska',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',
  NV:'Nevada',NY:'New York',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',
  RI:'Rhode Island',SC:'South Carolina',TN:'Tennessee',TX:'Texas',UT:'Utah',VA:'Virginia',
  WA:'Washington',WI:'Wisconsin',WV:'West Virginia',
};

export function stateName(code) { return STATE_NAMES[code] || code; }

const introTemplates = [
  (c, s, z) => `Dirty Hands Plumbing proudly serves homeowners and businesses in ${c}, ${s} (${z}). Our licensed and insured plumbers deliver fast, reliable, and affordable plumbing solutions for every need, from minor repairs to major installations. When you call us, you speak directly with a local plumbing professional who understands the unique challenges of properties in ${c}.`,
  (c, s, z) => `Looking for a trusted plumber in ${c}, ${s} ${z}? Dirty Hands Plumbing is your local partner for residential and commercial plumbing. We combine old-fashioned craftsmanship with modern tools to fix problems right the first time. Our team is available around the clock for emergencies across the ${c} area.`,
  (c, s, z) => `Residents and business owners in ${c}, ${s} rely on Dirty Hands Plumbing for dependable service in ZIP code ${z}. We handle everything from leaky faucets to full sewer line replacements, always with upfront pricing and a satisfaction guarantee. Our plumbers live and work in the community, so we know ${c} homes inside and out.`,
];

const needsTemplates = [
  (c, s) => `Homes and buildings in ${c}, ${stateName(s)} face a range of plumbing challenges throughout the year. Aging infrastructure, hard water, seasonal temperature swings, and heavy daily use all put stress on pipes, fixtures, and water heaters. Dirty Hands Plumbing addresses these local conditions with targeted solutions rather than one-size-fits-all fixes.`,
  (c, s) => `Whether you own a single-family home, a multi-unit property, or a commercial space in ${c}, plumbing issues can disrupt daily life and cause costly damage if ignored. Our technicians are trained to diagnose problems quickly and recommend the most cost-effective repair, keeping your property in ${stateName(s)} running smoothly.`,
  (c, s) => `In ${c}, common calls include slow drains, running toilets, low water pressure, and water heater failures. We also see seasonal spikes in frozen or burst pipes during colder months and irrigation leaks during warmer seasons. Our preventative maintenance plans help ${stateName(s)} property owners avoid emergencies before they start.`,
];

const servicesPara = (c, s) => `Dirty Hands Plumbing offers a full range of plumbing services in ${c}, ${stateName(s)}, including emergency plumbing, drain cleaning, water heater repair and installation, leak detection, pipe repair and replacement, toilet and faucet repair, sewer line services, garbage disposal repair, bathroom and kitchen plumbing, water line repair, sump pump installation, fixture installation, hydro jetting, backflow prevention, commercial plumbing, residential plumbing, and gas line services. Each job is performed by licensed technicians using quality parts and industry best practices.`;

const problemsPara = (c, s, z) => `Common plumbing problems we solve in ${c} (${z}) include clogged drains and toilets, leaky or dripping faucets, running toilets, low or fluctuating water pressure, water heater not heating or leaking, burst or corroded pipes, sewer backups and odors, garbage disposal jams, sump pump failures, and water line breaks. We also handle new construction and remodel plumbing, fixture upgrades, and code-compliance corrections for properties throughout ${stateName(s)}.`;

const processPara = (c) => `Our service process in ${c} is simple and transparent. First, you call our 24/7 line and describe the issue. We schedule a convenient appointment and arrive on time in a fully stocked truck. Our technician inspects the problem, explains the cause, and provides an upfront price before any work begins. Once you approve, we complete the repair using quality parts, test the system, clean the work area, and walk you through what was done. You receive a written warranty on parts and labor for peace of mind.`;

const whyPara = (c, s) => `Customers in ${c}, ${stateName(s)} choose Dirty Hands Plumbing because we show up on time, charge fair prices, and stand behind our work. We are licensed, bonded, and insured. We do not charge overtime for emergency calls, and we never push unnecessary services. Our reviews reflect real experiences from real neighbors, with a 4.3-star rating across 25+ reviews on Yelp and a 4.1-star rating across 33+ reviews on Google. We treat every home like our own.`;

const availabilityPara = (c, s, z) => `We serve ${c} and surrounding communities in ${stateName(s)}, including nearby ZIP codes and neighborhoods. Whether you are in downtown ${c}, a suburban subdivision, or a rural property near ${z}, our plumbers can reach you quickly. Same-day service is available for most repairs, and true emergencies are prioritized 24 hours a day, 7 days a week, including weekends and holidays.`;

const faqBank = (c, s, z) => ([
  { q: `Do you offer emergency plumbing in ${c}, ${s}?`, a: `Yes. Dirty Hands Plumbing provides 24/7 emergency plumbing throughout ${c} and ZIP ${z}. Call ${'+1 (607) 678-1346'} any time and a licensed plumber will be dispatched.` },
  { q: `How much does a plumber cost in ${c}?`, a: `Pricing depends on the job. We provide upfront, flat-rate quotes before work begins so there are no surprises. Many common repairs in ${c} are completed for a straightforward service fee plus parts.` },
  { q: `Are your plumbers licensed and insured in ${stateName(s)}?`, a: `Yes. All Dirty Hands Plumbing technicians are licensed, bonded, and insured, and our work meets local code requirements in ${stateName(s)}.` },
  { q: `Do you service water heaters in ${c}?`, a: `Yes. We repair and install tank and tankless water heaters for homes and businesses in ${c}, ${z}, including emergency no-hot-water calls.` },
  { q: `Can you fix a clogged drain in ${c}?`, a: `Absolutely. We use professional drain cleaning and hydro jetting to clear stubborn clogs in ${c} without damaging your pipes.` },
  { q: `Do you offer free estimates in ${c}, ${s}?`, a: `We provide upfront pricing on site. For larger projects in ${c}, we can schedule a diagnostic visit and quote the work before starting.` },
  { q: `What areas near ${c} do you serve?`, a: `We serve ${c} and surrounding communities across ${stateName(s)}. Call us to confirm coverage for your specific address.` },
  { q: `Do you handle commercial plumbing in ${c}?`, a: `Yes. Dirty Hands Plumbing serves both residential and commercial properties in ${c}, including offices, restaurants, and multi-unit buildings.` },
]);

export function areaContent(zip) {
  const c = zip.city, s = zip.state, z = zip.zip;
  const seed = hash(zip.slug);
  const intros = pick(introTemplates, seed, 1);
  const needs = pick(needsTemplates, seed + 1, 1);
  const faqs = faqBank(c, s, z);
  // pick 6 faqs deterministically
  const chosenFaqs = [];
  const used = new Set();
  let i = 0;
  while (chosenFaqs.length < 6 && chosenFaqs.length < faqs.length) {
    const idx = (seed + i * 13) % faqs.length;
    if (!used.has(idx)) { used.add(idx); chosenFaqs.push(faqs[idx]); }
    i++;
  }
  return {
    intro: intros[0](c, s, z),
    needs: needs[0](c, s),
    services: servicesPara(c, s),
    problems: problemsPara(c, s, z),
    process: processPara(c),
    why: whyPara(c, s),
    availability: availabilityPara(c, s, z),
    faqs: chosenFaqs,
  };
}

// Service page content
const serviceIntros = {
  'emergency-plumbing': (name) => `When a pipe bursts or a toilet overflows at 2 AM, you need a plumber who answers the phone and shows up fast. Dirty Hands Plumbing provides 24/7 emergency plumbing across our service areas. Our licensed technicians arrive with fully stocked trucks to stop the damage and restore your system quickly.`,
  'drain-cleaning': (name) => `Slow or clogged drains are more than an inconvenience; they can lead to backups and water damage. Dirty Hands Plumbing uses professional-grade equipment, including hydro jetting, to clear drains thoroughly and keep them flowing freely.`,
  'water-heater-repair': (name) => `No hot water disrupts your whole day. Our technicians diagnose and repair gas, electric, and tankless water heaters, restoring comfort quickly and safely.`,
  'water-heater-installation': (name) => `Upgrading or replacing a water heater is a smart investment in comfort and efficiency. We help you choose the right unit and install it to code.`,
  'leak-detection': (name) => `Hidden leaks waste water and damage structures. We use advanced detection methods to find leaks behind walls, under slabs, and underground without unnecessary demolition.`,
  'pipe-repair': (name) => `Corroded, cracked, or burst pipes threaten your property. We repair and replace pipes using durable materials and modern techniques, including trenchless options where appropriate.`,
  'toilet-repair': (name) => `From running toilets to complete replacements, we fix toilet problems efficiently and cleanly, restoring proper function and saving water.`,
  'faucet-repair': (name) => `Dripping faucets waste water and annoy everyone. We repair and install kitchen and bathroom faucets, restoring smooth operation and a fresh look.`,
  'sewer-line-repair': (name) => `Sewer backups are serious. We diagnose sewer line issues with camera inspection and provide repair or replacement solutions that last.`,
  'garbage-disposal-repair': (name) => `A jammed or leaking disposal disrupts the kitchen. We repair and install garbage disposals quickly and safely.`,
  'bathroom-plumbing': (name) => `From new fixtures to full remodels, our bathroom plumbing services cover everything behind the walls and under the floor.`,
  'kitchen-plumbing': (name) => `Kitchen plumbing keeps your home running. We handle sinks, dishwashers, disposals, and water lines with minimal disruption.`,
  'water-line-repair': (name) => `A broken water line can flood your yard and cut off supply. We locate and repair water lines efficiently, including trenchless replacement.`,
  'sump-pump-installation': (name) => `Protect your basement from flooding with a reliable sump pump. We install, repair, and maintain sump pumps for year-round protection.`,
  'fixture-installation': (name) => `Upgrading fixtures improves function and style. We install sinks, faucets, toilets, showers, and more to manufacturer specifications.`,
  'hydro-jetting': (name) => `Hydro jetting uses high-pressure water to scour pipes clean, removing grease, roots, and scale for long-lasting results.`,
  'backflow-prevention': (name) => `Backflow devices protect your water supply. We test, repair, and install backflow prevention assemblies to keep water safe.`,
  'commercial-plumbing': (name) => `Businesses need plumbing that minimizes downtime. We provide commercial plumbing maintenance, repairs, and installations with flexible scheduling.`,
  'residential-plumbing': (name) => `Your home deserves a plumber who respects your space. We deliver comprehensive residential plumbing with clear communication and clean workmanship.`,
  'gas-line-repair': (name) => `Gas lines require licensed expertise. We repair, install, and test gas lines safely and to code.`,
};

export function serviceContent(svc) {
  const name = svc.name;
  const intro = serviceIntros[svc.slug] ? serviceIntros[svc.slug](name) : `${name} services from Dirty Hands Plumbing.`;
  return {
    intro,
    whatIs: `${name} is a core plumbing service that addresses specific problems in your home or business. At Dirty Hands Plumbing, we approach every ${name.toLowerCase()} job with a thorough inspection, clear explanation, and a repair plan tailored to your property. We use quality materials and proven methods to deliver lasting results.`,
    problems: `Customers typically request ${name.toLowerCase()} when they notice symptoms such as reduced performance, visible leaks, unusual noises, odors, or complete failure. Ignoring these signs can lead to water damage, higher utility bills, and more expensive repairs. Our technicians are trained to identify root causes rather than just treating symptoms.`,
    benefits: `Choosing Dirty Hands Plumbing for ${name.toLowerCase()} means upfront pricing, licensed and insured technicians, quality parts, and a workmanship warranty. We respect your time and property, clean up after ourselves, and explain everything in plain language. Many jobs are completed in a single visit.`,
    when: `You may need ${name.toLowerCase()} if you experience recurring issues, aging equipment, code violations, or want to upgrade for efficiency and comfort. We also provide preventative maintenance to extend the life of your plumbing systems.`,
    process: `Our ${name.toLowerCase()} process begins with a phone consultation and scheduling. On arrival, the technician inspects and diagnoses, presents options and pricing, and completes the approved work. We test thoroughly, clean up, and provide maintenance tips to prevent future problems.`,
    included: `Included with our ${name.toLowerCase()} service: professional diagnosis, upfront quote, quality parts, skilled labor, system testing, cleanup, and a written warranty. Additional services are only recommended when genuinely needed.`,
    options: `We offer standard and premium options for ${name.toLowerCase()}, allowing you to balance budget and longevity. Our technician will explain the trade-offs so you can make an informed decision.`,
    common: `Common ${name.toLowerCase()} issues include wear and tear, improper installation, corrosion, blockages, and pressure problems. We address each with the appropriate repair or replacement strategy.`,
    pricing: `Pricing for ${name.toLowerCase()} varies by scope, materials, and access. We provide flat-rate quotes before work begins. Financing options may be available for larger projects; ask our team.`,
    why: `Dirty Hands Plumbing stands out for honest pricing, skilled technicians, and reliable follow-through. Our 4.3-star Yelp rating (25+ reviews) and 4.1-star Google rating (33+ reviews) reflect real customer satisfaction.`,
    availability: `We offer ${name.toLowerCase()} across our service areas with same-day availability for most jobs and 24/7 response for emergencies.`,
    faqs: [
      { q: `What does ${name.toLowerCase()} include?`, a: `Diagnosis, upfront pricing, quality parts, skilled labor, testing, cleanup, and a warranty.` },
      { q: `How long does ${name.toLowerCase()} take?`, a: `Most jobs are completed in one visit, typically within a few hours depending on scope.` },
      { q: `Do you offer emergency ${name.toLowerCase()}?`, a: `Yes, we provide 24/7 emergency service for urgent plumbing issues.` },
      { q: `Are you licensed and insured?`, a: `Yes, all technicians are licensed, bonded, and insured.` },
      { q: `Do you service my area?`, a: `We serve many cities across the US. Check our service areas page or call to confirm.` },
      { q: `Do you offer warranties?`, a: `Yes, we provide written warranties on parts and labor.` },
    ],
  };
}
