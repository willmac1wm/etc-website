
export interface TownData {
  slug: string;
  name: string;
  county: 'Cape May' | 'Atlantic' | 'Cumberland';
  imageUrl: string;
  metaDescription: string;
  intro: string;
  coordinates: { lat: number; lng: number }; // Added for Map
  services: {
    title: string;
    description: string;
    slug?: string; // Optional slug to map to specific service pillar
  }[];
  customMessage: string;
}

export const COUNTY_COORDINATES: Record<string, { lat: number; lng: number; zoom: number }> = {
  'Cape May': { lat: 39.0840, lng: -74.8000, zoom: 11 },
  'Atlantic': { lat: 39.4500, lng: -74.6000, zoom: 11 },
  'Cumberland': { lat: 39.3500, lng: -75.1000, zoom: 11 }
};

const COMMON_SERVICES = {
  RENTAL: {
    title: 'Rental Turnover & Repairs',
    description: 'Fast, reliable repairs between tenants. From drywall patches to fixture replacements, we ensure your property is ready for occupancy.',
    slug: 'residential-renovations'
  },
  STORM: {
    title: 'Storm Damage Assessment',
    description: 'Coastal weather can be harsh. We provide post-storm inspections and immediate securing of loose siding, shingles, or fencing.',
    slug: 'site-maintenance'
  },
  HANDYMAN: {
    title: 'General Handyman Services',
    description: 'No job is too small. We handle punch-lists, door adjustments, and general carpentry with professional project management.',
    slug: 'residential-renovations'
  },
  RENOVATION: {
    title: 'Kitchen & Bath Updates',
    description: 'Modernize your home with durable materials designed to withstand coastal humidity and wear.',
    slug: 'residential-renovations'
  },
  COMMERCIAL: {
    title: 'Commercial Maintenance',
    description: 'Keep your business running smoothly with rapid-response repairs for retail and office spaces.',
    slug: 'commercial-fit-outs'
  },
  SITE: {
    title: 'Brush & Site Clearing',
    description: 'Overgrown lot management, brush removal, and light grading for residential and commercial properties.',
    slug: 'site-maintenance'
  },
  CLEANING: {
    title: 'Power & Soft Washing',
    description: 'Remove salt spray, mold, and mildew. Gentle soft washing for siding and roofs, power washing for concrete and pavers.',
    slug: 'exterior-cleaning'
  },
  HARDSCAPE: {
    title: 'Hardscaping & Decks',
    description: 'Repair and installation of composite decks, paver patios, and sidewalks to enhance your outdoor living space.',
    slug: 'hardscaping-decks'
  },
  FLOOD: {
    title: 'Flood Mitigation',
    description: 'Rapid response water extraction, drying, and structural repairs after coastal flooding events.',
    slug: 'flood-mitigation'
  }
};

export const TOWN_DATA: Record<string, TownData> = {
  // --- CAPE MAY COUNTY ---
  'villas': {
    slug: 'villas',
    name: 'Villas, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1594391629555-467232238421?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Expert handyman and storm repair services in Villas, NJ. Specializing in rental turnover and year-round property maintenance.',
    intro: 'Located along the Delaware Bay, Villas homes face unique moisture and wind challenges. ETC provides affordable, professional maintenance for year-round residents and investment property owners.',
    coordinates: { lat: 39.0232, lng: -74.9360 },
    services: [COMMON_SERVICES.RENTAL, COMMON_SERVICES.STORM, COMMON_SERVICES.FLOOD],
    customMessage: 'Serving the Villas community with fair pricing and reliable scheduling.'
  },
  'wildwood': {
    slug: 'wildwood',
    name: 'Wildwood, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1575168866382-723a1a6b0c60?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Wildwood NJ property management support, commercial fit-outs, and condo maintenance services by ETC.',
    intro: 'The Wildwoods are the heartbeat of summer tourism. We help business owners and condo associations keep their properties compliant, safe, and attractive for the busy season.',
    coordinates: { lat: 38.9918, lng: -74.8152 },
    services: [
      COMMON_SERVICES.FLOOD,
      {
        title: 'Condo & HOA Maintenance',
        description: 'We work with associations to handle exterior maintenance, deck repairs, and common area upgrades.',
        slug: 'site-maintenance'
      },
      COMMON_SERVICES.COMMERCIAL
    ],
    customMessage: 'Keep your Wildwood property booking-ready all season long.'
  },
  'north-wildwood': {
    slug: 'north-wildwood',
    name: 'North Wildwood, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1517480447761-0d3597c41490?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'North Wildwood home renovation and storm watch services. Local contractors for shore home improvements.',
    intro: 'From the sea wall to the bay, North Wildwood homes require vigilant care. ETC specializes in updating older shore cottages and maintaining newer construction.',
    coordinates: { lat: 39.0007, lng: -74.7993 },
    services: [
      {
        title: 'Deck & Railing Safety',
        description: 'Salt air corrodes fasteners quickly. We perform safety audits and repairs on decks, stairs, and railings to ensure guest safety.',
        slug: 'hardscaping-decks'
      },
      COMMON_SERVICES.STORM,
      COMMON_SERVICES.FLOOD
    ],
    customMessage: 'Protecting your North Wildwood investment against the elements.'
  },
  'cape-may': {
    slug: 'cape-may',
    name: 'Cape May, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Historic restoration and property maintenance in Cape May, NJ. Respecting local architecture with modern building standards.',
    intro: 'Maintaining a home in historic Cape May requires a delicate touch. We balance modern building science with the aesthetic requirements of America\'s oldest seaside resort.',
    coordinates: { lat: 38.9351, lng: -74.9060 },
    services: [
      {
        title: 'Historic Property Care',
        description: 'Sensitive repairs to trim, siding, and porches that respect the architectural integrity of your Victorian home.',
        slug: 'residential-renovations'
      },
      COMMON_SERVICES.HARDSCAPE,
      COMMON_SERVICES.FLOOD
    ],
    customMessage: 'Preserving the charm of Cape May with professional craftsmanship.'
  },
  'cape-may-court-house': {
    slug: 'cape-may-court-house',
    name: 'Cape May Court House',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop',
    metaDescription: 'General contracting and handyman services in Cape May Court House, NJ. Local, reliable, and insured.',
    intro: 'As a commercial hub, Cape May Court House is a center for year-round living. We offer comprehensive home repairs and renovation services for local families and businesses.',
    coordinates: { lat: 39.0812, lng: -74.8235 },
    services: [COMMON_SERVICES.RENOVATION, COMMON_SERVICES.HARDSCAPE, COMMON_SERVICES.SITE],
    customMessage: 'Your local partner for reliable home improvements.'
  },
  'avalon': {
    slug: 'avalon',
    name: 'Avalon, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1495954484750-af469f2f9be5?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Premier home maintenance and construction services in Avalon, NJ. High-end renovations and discreet property management.',
    intro: 'Avalon properties demand the highest standard of finish and care. ETC delivers white-glove service for luxury renovations and proactive maintenance.',
    coordinates: { lat: 39.1007, lng: -74.7196 },
    services: [
      COMMON_SERVICES.FLOOD,
      {
        title: 'Luxury Renovation',
        description: 'High-end kitchen and bath remodels using premium materials. We maintain a clean, organized, and secure job site.',
        slug: 'residential-renovations'
      },
      {
        title: 'Composite Decking',
        description: 'Installation of high-performance outdoor living spaces designed to withstand the harsh dune-side environment.',
        slug: 'hardscaping-decks'
      }
    ],
    customMessage: 'Excellence in every detail for Avalon homeowners.'
  },
  'stone-harbor': {
    slug: 'stone-harbor',
    name: 'Stone Harbor, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1549603399-6e3e11562b72?q=80&w=1974&auto=format&fit=crop',
    metaDescription: 'Stone Harbor construction and maintenance services. Serving 96th Street businesses and beachfront homes.',
    intro: 'From the commercial district on 96th Street to the point, Stone Harbor requires reliable contractors. We specialize in maintaining the value and beauty of your Seven Mile Island property.',
    coordinates: { lat: 39.0490, lng: -74.7579 },
    services: [COMMON_SERVICES.COMMERCIAL, COMMON_SERVICES.FLOOD, COMMON_SERVICES.HARDSCAPE],
    customMessage: 'Reliable service for Stone Harbor\'s distinct properties.'
  },
  'ocean-city': {
    slug: 'ocean-city',
    name: 'Ocean City, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1559419134-2c6734139e55?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Family resort home repairs in Ocean City, NJ. Deck repairs, painting, and rental turnover services.',
    intro: 'America\'s Greatest Family Resort sees heavy traffic every summer. We help homeowners keep their rental properties pristine and safe for visiting families.',
    coordinates: { lat: 39.2776, lng: -74.5746 },
    services: [COMMON_SERVICES.RENTAL, COMMON_SERVICES.FLOOD, {
      title: 'Deck Inspections',
      description: 'Annual safety checks and repairs for decks and porches to handle summer crowds.',
      slug: 'hardscaping-decks'
    }],
    customMessage: 'Keeping Ocean City homes safe and welcoming.'
  },
  'sea-isle-city': {
    slug: 'sea-isle-city',
    name: 'Sea Isle City, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1554650392-563d76755490?q=80&w=2076&auto=format&fit=crop',
    metaDescription: 'Sea Isle City construction and handyman services. Storm prep and rental maintenance.',
    intro: 'Sea Isle City combines vibrant nightlife with quiet residential areas. We service both, ensuring your property can withstand the elements and the crowds.',
    coordinates: { lat: 39.1587, lng: -74.6913 },
    services: [COMMON_SERVICES.FLOOD, COMMON_SERVICES.RENTAL, COMMON_SERVICES.HARDSCAPE],
    customMessage: 'Your boots-on-the-ground team in Sea Isle.'
  },
  'rio-grande': {
    slug: 'rio-grande',
    name: 'Rio Grande, NJ',
    county: 'Cape May',
    imageUrl: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Commercial and residential contractors in Rio Grande, NJ. Fit-outs and repairs.',
    intro: 'As a commercial hub, Rio Grande businesses need reliable facility maintenance. We offer fast turnarounds for retail and office fit-outs.',
    coordinates: { lat: 39.0146, lng: -74.8724 },
    services: [COMMON_SERVICES.COMMERCIAL, COMMON_SERVICES.HARDSCAPE, COMMON_SERVICES.SITE],
    customMessage: 'Supporting Rio Grande businesses and homeowners.'
  },

  // --- ATLANTIC COUNTY ---
  'atlantic-city': {
    slug: 'atlantic-city',
    name: 'Atlantic City, NJ',
    county: 'Atlantic',
    imageUrl: 'https://images.unsplash.com/photo-1574343837968-3e449231f247?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Atlantic City commercial maintenance and renovation contractors.',
    intro: 'In the fast-paced environment of Atlantic City, you need a contractor who shows up. We handle commercial maintenance and residential repairs with urban efficiency.',
    coordinates: { lat: 39.3643, lng: -74.4229 },
    services: [COMMON_SERVICES.COMMERCIAL, COMMON_SERVICES.FLOOD, COMMON_SERVICES.CLEANING],
    customMessage: 'Professional trade services for the city that never sleeps.'
  },
  'margate': {
    slug: 'margate',
    name: 'Margate City, NJ',
    county: 'Atlantic',
    imageUrl: 'https://images.unsplash.com/photo-1517406689048-c8d35661b12b?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Margate City home repairs and luxury renovations.',
    intro: 'Margate homes range from historic to ultra-modern. Our team is experienced in high-end finishes and maintaining properties near the bay and ocean.',
    coordinates: { lat: 39.3282, lng: -74.5029 },
    services: [COMMON_SERVICES.FLOOD, COMMON_SERVICES.RENOVATION, COMMON_SERVICES.HARDSCAPE],
    customMessage: 'Quality craftsmanship for Margate homeowners.'
  },
  'ventnor': {
    slug: 'ventnor',
    name: 'Ventnor City, NJ',
    county: 'Atlantic',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop',
    metaDescription: 'Ventnor City handyman and construction services.',
    intro: 'We provide reliable home improvement services to the Ventnor community, focusing on exterior weatherproofing and interior updates.',
    coordinates: { lat: 39.3415, lng: -74.4782 },
    services: [COMMON_SERVICES.FLOOD, COMMON_SERVICES.RENTAL, COMMON_SERVICES.RENOVATION],
    customMessage: 'Local, reliable service for Ventnor residents.'
  },
  'brigantine': {
    slug: 'brigantine',
    name: 'Brigantine, NJ',
    county: 'Atlantic',
    imageUrl: 'https://images.unsplash.com/photo-1621295980073-207a9e344565?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Brigantine island home repairs and storm watch services.',
    intro: 'Brigantine\'s island setting requires specific maintenance against wind and sand. We are your local partner for keeping your island home secure.',
    coordinates: { lat: 39.4101, lng: -74.3646 },
    services: [COMMON_SERVICES.STORM, COMMON_SERVICES.FLOOD, COMMON_SERVICES.SITE],
    customMessage: 'Island-tough repairs for Brigantine homes.'
  },
  'egg-harbor-township': {
    slug: 'egg-harbor-township',
    name: 'Egg Harbor Twp',
    county: 'Atlantic',
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop',
    metaDescription: 'EHT construction and home addition contractors.',
    intro: 'Serving the growing families of Egg Harbor Township with spacious home additions, deck builds, and basement finishing.',
    coordinates: { lat: 39.3751, lng: -74.6049 },
    services: [COMMON_SERVICES.RENOVATION, COMMON_SERVICES.HARDSCAPE, COMMON_SERVICES.HANDYMAN],
    customMessage: 'Expanding and improving homes throughout EHT.'
  },
  'hammonton': {
    slug: 'hammonton',
    name: 'Hammonton, NJ',
    county: 'Atlantic',
    imageUrl: 'https://images.unsplash.com/photo-1595655584344-77a8296a2979?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Hammonton contractors for residential and agricultural support.',
    intro: 'In the Blueberry Capital, we provide robust construction services for residential homes and support structures for local agricultural businesses.',
    coordinates: { lat: 39.6365, lng: -74.8018 },
    services: [COMMON_SERVICES.SITE, COMMON_SERVICES.CLEANING, COMMON_SERVICES.COMMERCIAL],
    customMessage: 'Hardworking contractors for the Hammonton area.'
  },

  // --- CUMBERLAND COUNTY ---
  'vineland': {
    slug: 'vineland',
    name: 'Vineland, NJ',
    county: 'Cumberland',
    imageUrl: 'https://images.unsplash.com/photo-1542223616-9de9eb5e7e32?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Vineland NJ general contractors and maintenance professionals.',
    intro: 'We bring professional project management to Vineland, handling everything from historic home repairs to commercial facility maintenance.',
    coordinates: { lat: 39.4862, lng: -75.0257 },
    services: [COMMON_SERVICES.COMMERCIAL, COMMON_SERVICES.RENOVATION, COMMON_SERVICES.HARDSCAPE],
    customMessage: 'Professional standards for Vineland projects.'
  },
  'millville': {
    slug: 'millville',
    name: 'Millville, NJ',
    county: 'Cumberland',
    imageUrl: 'https://images.unsplash.com/photo-1590725140246-20ac70da1f79?q=80&w=1974&auto=format&fit=crop',
    metaDescription: 'Millville construction and handyman services.',
    intro: 'Supporting the Millville community with affordable, high-quality trade services. We specialize in rental property maintenance and home repairs.',
    coordinates: { lat: 39.4021, lng: -75.0393 },
    services: [COMMON_SERVICES.RENTAL, COMMON_SERVICES.HANDYMAN, COMMON_SERVICES.SITE],
    customMessage: 'Reliable work for Millville homeowners.'
  },
  'bridgeton': {
    slug: 'bridgeton',
    name: 'Bridgeton, NJ',
    county: 'Cumberland',
    imageUrl: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop',
    metaDescription: 'Bridgeton NJ property maintenance and code compliance repairs.',
    intro: 'Helping Bridgeton property owners maintain code compliance and improve property value with professional repair services.',
    coordinates: { lat: 39.4273, lng: -75.2341 },
    services: [COMMON_SERVICES.RENTAL, COMMON_SERVICES.HANDYMAN, COMMON_SERVICES.CLEANING],
    customMessage: 'Committed to improving Bridgeton properties.'
  },
};
