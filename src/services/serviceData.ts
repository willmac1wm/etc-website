
import { Home, Building2, Trees, Briefcase, Hammer, Droplets, Waves } from 'lucide-react';

export interface ServiceData {
  slug: string;
  title: string;
  icon: any; // Lucide icon component
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
}

export const SERVICE_DATA: Record<string, ServiceData> = {
  'residential-renovations': {
    slug: 'residential-renovations',
    title: 'Residential Renovations',
    icon: Home,
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'High-end kitchen remodels, bathroom suites, and home additions.',
    fullDescription: 'Your home is your sanctuary, but it is also a complex system of structure, plumbing, and electrical work. At ETC, we approach residential renovations with the same rigor we apply to commercial projects. Whether you are expanding your footprint with an addition or modernizing a chef\'s kitchen, we protect your property with hospital-grade dust control and strict safety protocols.',
    features: [
      'Kitchen & Bath Remodeling',
      'Structural Additions',
      'Finished Basements',
      'Whole-Home Generators',
      'Historical Restorations',
      'Permit Management'
    ],
    benefits: [
      {
        title: 'Project Management',
        description: 'We use professional scheduling software to ensure trades are aligned, materials are on-site, and timelines are met.'
      },
      {
        title: 'Visual Documentation',
        description: 'We partner with <a href="https://listingpixel.com" target="_blank" class="text-etc-accent font-bold hover:underline">Listing Pixel</a> to photograph projects before, during, and after construction.'
      },
      {
        title: 'Transparent Billing',
        description: 'Detailed scope of work and change order management means no surprise costs at the end of the job.'
      }
    ],
    process: [
      { step: 1, title: 'Consultation & Scope', description: 'We walk your property, discuss your vision, and identify potential structural challenges upfront.' },
      { step: 2, title: 'Permitting & Design', description: 'We handle all architectural drawings and township permit applications.' },
      { step: 3, title: 'Construction', description: 'Execution with daily site supervision and weekly progress reports.' },
      { step: 4, title: 'Closeout', description: 'Final inspections, punch-list completion, and a clean site turnover.' }
    ]
  },
  'commercial-fit-outs': {
    slug: 'commercial-fit-outs',
    title: 'Commercial Fit-Outs',
    icon: Building2,
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    shortDescription: 'Retail, office, and light industrial modifications.',
    fullDescription: 'Time is money. In commercial construction, a delayed opening can cost thousands in lost revenue. ETC specializes in rapid, code-compliant fit-outs for offices, retail stores, and medical practices. We understand the nuances of working in occupied buildings and coordinating with property management companies.',
    features: [
      'White Box Build-Outs',
      'Office Partitions & Layouts',
      'Retail Storefronts',
      'Medical Office Upgrades',
      'ADA Compliance Updates',
      'Acoustical Ceilings'
    ],
    benefits: [
      {
        title: 'Speed to Market',
        description: 'Aggressive scheduling including nights and weekends to get your business open faster.'
      },
      {
        title: 'Visual Documentation',
        description: 'We partner with <a href="https://listingpixel.com" target="_blank" class="text-etc-accent font-bold hover:underline">Listing Pixel</a> to photograph projects before, during, and after construction.'
      },
      {
        title: 'Minimal Disruption',
        description: 'Low-noise and clean-site protocols for working in active office parks.'
      }
    ],
    process: [
      { step: 1, title: 'Lease Review', description: 'We review your landlord\'s work letter to maximize your tenant improvement allowance.' },
      { step: 2, title: 'Value Engineering', description: 'Identifying material alternatives to lower costs without sacrificing aesthetics.' },
      { step: 3, title: 'Rapid Build', description: 'Coordinated trade stacking to reduce overall project duration.' },
      { step: 4, title: 'Certificate of Occupancy', description: 'Managing inspections to ensure a smooth C.O. issuance.' }
    ]
  },
  'site-maintenance': {
    slug: 'site-maintenance',
    title: 'Site Maintenance',
    icon: Trees,
    heroImage: 'https://images.unsplash.com/photo-1592322307525-4c017267591e?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Complete brush cleanup, land clearing, and light snow plow services.',
    fullDescription: 'Curb appeal and accessibility are critical for both residential estates and commercial properties. ETC provides heavy-duty exterior maintenance services. Whether you need to reclaim an overgrown lot, clear a site for new construction, or ensure your parking lot is safe during winter, we have the equipment and manpower to handle it.',
    features: [
      'Brush Hogging & Land Clearing',
      'Forestry Mulching',
      'Invasive Species Removal',
      'Light Excavation & Grading',
      'Snow Plowing & Salting',
      'Storm Debris Cleanup'
    ],
    benefits: [
      {
        title: 'Equipment Power',
        description: 'We own our heavy equipment, meaning we mobilize faster without waiting for rental companies.'
      },
      {
        title: 'Visual Documentation',
        description: 'We partner with <a href="https://listingpixel.com" target="_blank" class="text-etc-accent font-bold hover:underline">Listing Pixel</a> to photograph projects before, during, and after construction.'
      },
      {
        title: 'Safety Focused',
        description: 'Fully insured for heavy machinery operations, protecting you from liability.'
      }
    ],
    process: [
      { step: 1, title: 'Site Assessment', description: 'Evaluating terrain, access points, and scope of clearing required.' },
      { step: 2, title: 'Mobilization', description: 'Transporting heavy equipment to the site safely.' },
      { step: 3, title: 'Execution', description: 'Systematic clearing, grading, or plowing.' },
      { step: 4, title: 'Disposal', description: 'Responsible mulching on-site or hauling away debris.' }
    ]
  },
  'hardscaping-decks': {
    slug: 'hardscaping-decks',
    title: 'Hardscaping & Decks',
    icon: Hammer,
    heroImage: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Custom composite decks, pavers, sidewalks, and outdoor living spaces.',
    fullDescription: 'Expand your living space outdoors with structural hardscaping and decking. We specialize in low-maintenance composite decks, paver patios, and durable concrete sidewalks. Our team ensures proper drainage and structural integrity for every project, creating lasting value for your property.',
    features: [
      'Composite Decking (Trex/TimberTech)',
      'Paver Patios & Driveways',
      'Concrete Sidewalks',
      'Retaining Walls',
      'Outdoor Kitchens',
      'Pool Surrounds'
    ],
    benefits: [
      {
        title: 'Long-Term Durability',
        description: 'We use premium materials and proper base preparation to prevent settling and cracking.'
      },
       {
        title: 'Visual Documentation',
        description: 'We partner with <a href="https://listingpixel.com" target="_blank" class="text-etc-accent font-bold hover:underline">Listing Pixel</a> to photograph projects before, during, and after construction.'
      },
      {
        title: 'Design-Build',
        description: 'Full design services to visualize your new outdoor oasis before construction begins.'
      }
    ],
    process: [
      { step: 1, title: 'Design Consultation', description: 'Selecting materials and laying out the footprint of your new space.' },
      { step: 2, title: 'Excavation & Base', description: 'Proper grading and compaction of the sub-base is critical for longevity.' },
      { step: 3, title: 'Installation', description: 'Precision laying of pavers or structural framing of decks.' },
      { step: 4, title: 'Finishing', description: 'Sanding polymeric sand or installing railing systems for a polished look.' }
    ]
  },
  'exterior-cleaning': {
    slug: 'exterior-cleaning',
    title: 'Power & Soft Washing',
    icon: Droplets,
    heroImage: 'https://images.unsplash.com/photo-1593019808940-974a44133420?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Professional pressure washing and soft wash services for siding and roofs.',
    fullDescription: 'Salt air, mold, and algae can wreak havoc on coastal properties. Our exterior cleaning services restore the beauty of your home while protecting delicate surfaces. We use specialized soft-wash techniques for siding and roofs to avoid damage, and high-pressure surface cleaners for concrete and pavers.',
    features: [
      'Soft Wash Siding Cleaning',
      'Concrete Pressure Washing',
      'Deck Restoration & Cleaning',
      'Roof Washing (Moss Removal)',
      'Gutter Cleaning',
      'Fence Restoration'
    ],
    benefits: [
      {
        title: 'Property Value',
        description: 'Instantly boost curb appeal by removing unsightly stains and organic growth.'
      },
      {
        title: 'Visual Documentation',
        description: 'We partner with <a href="https://listingpixel.com" target="_blank" class="text-etc-accent font-bold hover:underline">Listing Pixel</a> to photograph projects before, during, and after construction.'
      },
      {
        title: 'Damage Prevention',
        description: 'Removing mold and algae extends the lifespan of your siding, roof, and decking materials.'
      }
    ],
    process: [
      { step: 1, title: 'Protection', description: 'We cover delicate plants and electrical outlets before beginning work.' },
      { step: 2, title: 'Pre-Treatment', description: 'Applying eco-friendly cleaning solutions to loosen grime and kill organics.' },
      { step: 3, title: 'Washing', description: 'Using the appropriate pressure (Low or High) for the specific surface.' },
      { step: 4, title: 'Rinse & Review', description: 'Final rinse and walkthrough to ensure a spotless finish.' }
    ]
  },
  'flood-mitigation': {
    slug: 'flood-mitigation',
    title: 'Flood Mitigation',
    icon: Waves,
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b9bfd5f578?q=80&w=2069&auto=format&fit=crop',
    shortDescription: 'Post-storm water extraction, flood damage repair, and drying services.',
    fullDescription: 'Living on the coast means dealing with high tides and nor\'easters. When flooding occurs, rapid response is critical to prevent mold and structural rot. ETC provides comprehensive flood mitigation services, from immediate water extraction and flood cut removal of damaged drywall to dehumidification and sanitization. We get your property dry, clean, and ready for reconstruction.',
    features: [
      'Emergency Water Extraction',
      'Industrial Dehumidification',
      'Flood Cut Drywall Removal',
      'Anti-Microbial Treatment',
      'Subfloor Drying & Repair',
      'Content Manipulation'
    ],
    benefits: [
      {
        title: 'Mold Prevention',
        description: 'Rapid drying within the first 48 hours is the only way to effectively stop mold growth.'
      },
      {
        title: 'Visual Documentation',
        description: 'We partner with <a href="https://listingpixel.com" target="_blank" class="text-etc-accent font-bold hover:underline">Listing Pixel</a> to photograph damage for insurance claims.'
      },
      {
        title: 'Reconstruction Ready',
        description: 'As a general contractor, we can seamlessly transition from mitigation to rebuilding.'
      }
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Mapping moisture levels and categorization of water damage.' },
      { step: 2, title: 'Extraction', description: 'Removing standing water and bulk moisture from flooring and walls.' },
      { step: 3, title: 'Demolition', description: 'Removing compromised materials (carpet, padding, drywall) to facilitate drying.' },
      { step: 4, title: 'Drying & Testing', description: 'Monitoring humidity levels until the structure meets dry standards.' }
    ]
  },
  'government-contracting': {
    slug: 'government-contracting',
    title: 'Government Contracting',
    icon: Briefcase,
    heroImage: 'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?q=80&w=2070&auto=format&fit=crop',
    shortDescription: 'Registered for federal and state projects.',
    fullDescription: 'Essential Trade Contractors is built to serve the public sector. We maintain the administrative infrastructure required for government work, including certified payroll, detailed safety plans, and quality control reporting. Our active SAM.gov registration makes us a ready-to-go partner for prime contractors and agencies.',
    features: [
      'General Construction (NAICS 236220)',
      'Facilities Maintenance',
      'Concrete & Paving',
      'Secure Facility Work',
      'Emergency Response Services',
      'Subcontractor Management'
    ],
    benefits: [
      {
        title: 'Compliance Ready',
        description: 'Experts in Davis-Bacon wage reporting and FAR compliance.'
      },
      {
        title: 'Fully Insured',
        description: 'Comprehensive liability coverage for all project types.'
      },
      {
        title: 'Visual Documentation',
        description: 'We partner with <a href="https://listingpixel.com" target="_blank" class="text-etc-accent font-bold hover:underline">Listing Pixel</a> to photograph projects before, during, and after construction.'
      }
    ],
    process: [
      { step: 1, title: 'RFP Analysis', description: 'Thorough review of solicitation requirements and scope.' },
      { step: 2, title: 'Technical Proposal', description: 'Developing a detailed work plan, schedule, and safety approach.' },
      { step: 3, title: 'Performance', description: 'Executing work with strict adherence to specifications and quality control.' },
      { step: 4, title: 'Reporting', description: 'Timely submission of daily logs, payroll, and closeout documents.' }
    ]
  }
};
