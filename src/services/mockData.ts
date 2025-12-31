import { Project, ProjectCategory, BlogPost, StatMetric, SafetyData } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Modern Farmhouse Kitchen Expansion',
    category: ProjectCategory.RESIDENTIAL,
    location: 'Princeton, NJ',
    description: 'A complete structural expansion and renovation converting a cramped 1950s kitchen into an open-concept chef\'s paradise.',
    contractValue: '$125K',
    completionDate: '2023-11',
    images: {
      before: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=2070&auto=format&fit=crop', // Old kitchen ish
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop', // Luxury kitchen
    },
    tags: ['Structural', 'Plumbing', 'High-End Finishes'],
    challenge: 'The original layout had load-bearing walls separating the kitchen from the living area, creating a dark, isolated space. The homeowner wanted an open floor plan without sacrificing structural integrity.',
    solution: 'We installed a flush steel beam to support the second floor, allowing us to remove two load-bearing walls. We then rerouted the HVAC and plumbing stacks to create a seamless island centerpiece.',
    testimonial: {
      text: "ETC brought a level of professionalism we didn't expect for a home renovation. They were on time, clean, and the structural work is flawless.",
      author: "Jennifer M., Homeowner"
    }
  },
  {
    id: '2',
    title: 'Luxury Master Bath Suite',
    category: ProjectCategory.RESIDENTIAL,
    location: 'Moorestown, NJ',
    description: 'Conversion of two small bedrooms into a luxury master suite with a spa-inspired bathroom and walk-in closet.',
    contractValue: '$85K',
    completionDate: '2023-08',
    images: {
      before: 'https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop', // Old room
      after: 'https://images.unsplash.com/photo-1620626012053-93f7c8c47029?q=80&w=2070&auto=format&fit=crop', // Luxury bath
    },
    tags: ['Plumbing', 'Tile Work', 'Design-Build'],
    challenge: 'The client needed to merge two smaller rooms while navigating complex 100-year-old plumbing systems that were not up to code.',
    solution: 'We completely gutted the plumbing to the main stack, installed a new subfloor system for the heavy soaking tub, and used waterproofing membranes exceeding industry standards.',
    testimonial: {
      text: "The attention to detail on the tile work is incredible. It feels like a 5-star hotel.",
      author: "Robert T., Homeowner"
    }
  },
  {
    id: '3',
    title: 'Commercial Office Fit-Out',
    category: ProjectCategory.COMMERCIAL,
    location: 'Cherry Hill, NJ',
    description: 'Interior fit-out for a 5,000 sq ft dental practice, including reception, treatment rooms, and sterilization labs.',
    contractValue: '$450K',
    completionDate: '2024-01',
    images: {
      before: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop', // Empty shell
      after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', // Office
    },
    tags: ['Medical', 'HVAC', 'Commercial'],
    challenge: 'Strict timelines were required to get the practice open. Additionally, medical gas lines required precise certification and testing.',
    solution: 'We implemented a double-shift schedule to accelerate drywall and painting, allowing specialized trades to install medical equipment without congestion.',
    testimonial: {
      text: "They treated our small commercial project with the rigor of a government job. Impressive documentation and safety.",
      author: "Dr. Sarah L., Practice Owner"
    }
  },
  {
    id: '4',
    title: 'Multi-Level Deck & Outdoor Living',
    category: ProjectCategory.RESIDENTIAL,
    location: 'Bucks County, PA',
    description: 'Construction of a composite multi-level deck with built-in outdoor kitchen and pergola.',
    contractValue: '$65K',
    completionDate: '2023-09',
    images: {
      before: 'https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&w=2070&auto=format&fit=crop', // Backyard
      after: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=2070&auto=format&fit=crop', // Nice deck
    },
    tags: ['Exterior', 'Hardscaping', 'Carpentry'],
    challenge: 'The backyard had a significant slope, requiring deep helical piles for structural stability.',
    solution: 'We engineered a foundation system using helical piles to guarantee no settling, creating a perfectly level structure on uneven terrain.',
    testimonial: {
      text: "Our backyard is now the neighborhood gathering spot. The craftsmanship is solid.",
      author: "The Petersons"
    }
  },
  {
    id: '5',
    title: 'Historic Home Façade Restoration',
    category: ProjectCategory.RENOVATION,
    location: 'Philadelphia, PA',
    description: 'Restoration of historic brickwork and window replacement for a registered historic home.',
    contractValue: '$95K',
    completionDate: '2023-10',
    images: {
      before: 'https://images.unsplash.com/photo-1574359256801-628d0526786d?q=80&w=2070&auto=format&fit=crop',
      after: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop',
    },
    tags: ['Historic', 'Masonry', 'Restoration'],
    challenge: 'Matching 100-year-old brick mortar color and consistency was critical for approval by the historical commission.',
    solution: 'We performed lab analysis on the original mortar to create a custom mix that satisfied the historical society while providing modern durability.',
    testimonial: {
      text: "They respected the history of our home while making it watertight for the next century.",
      author: "James W."
    }
  },
  {
    id: '6',
    title: 'Estate Brush Clearing & Site Prep',
    category: ProjectCategory.MAINTENANCE,
    location: 'Hopewell, NJ',
    description: 'Comprehensive clearing of 2 acres of overgrown brush and invasive species to prepare for a new landscape design.',
    contractValue: '$12K',
    completionDate: '2023-10',
    images: {
      before: 'https://images.unsplash.com/photo-1599150036666-4191d84203dc?q=80&w=2071&auto=format&fit=crop', // Overgrown woods
      after: 'https://images.unsplash.com/photo-1592322307525-4c017267591e?q=80&w=2070&auto=format&fit=crop', // Clean land
    },
    tags: ['Land Clearing', 'Excavation', 'Site Prep'],
    challenge: 'The terrain was uneven with dense poison ivy and invasive vines choking mature trees.',
    solution: 'We used forestry mulchers to clear the underbrush without damaging the root systems of the heritage oaks, grading the land for future planting.',
    testimonial: {
      text: "They transformed our jungle into a park. Fast, efficient, and they left the site immaculate.",
      author: "Mark D."
    }
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Why Residential Projects Need "Government-Grade" Safety',
    excerpt: 'How we apply federal safety standards to your home renovation to protect your family and property.',
    date: 'May 12, 2024',
    author: 'Sarah Jenkins, Project Executive',
    category: 'Safety',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop',
    readTime: '5 min read',
    content: `
      <p>When you hire a contractor for a kitchen remodel or a home addition, you rarely ask about their EMR rating or OSHA certifications. Usually, it's about price and timeline. However, at Essential Trade Contractors (ETC), we believe your home deserves the same level of safety rigor as a federal building.</p>
      
      <h3>What is "Federal-Grade" Safety?</h3>
      <p>Government contracts require strict adherence to safety protocols. This includes:</p>
      <ul>
        <li><strong>Daily Safety Briefings:</strong> We discuss potential hazards before tools are even touched.</li>
        <li><strong>Dust & Contaminant Control:</strong> We use hospital-grade negative pressure setups to keep construction dust out of your living areas.</li>
        <li><strong>Fire Prevention:</strong> Strict hot-work permits even for residential plumbing soldering.</li>
      </ul>
      
      <h3>Why It Matters for Homeowners</h3>
      <p>Construction sites are dangerous. By applying these strict standards to residential work, we minimize risk to your children, pets, and property. A safe site is also a clean and efficient site, which often leads to better quality finishes and staying on schedule.</p>
      
      <p>When we work on your home, we aren't just "handymen." We are certified professionals bringing heavy-duty discipline to your personal project.</p>
    `
  },
  {
    id: '2',
    title: 'The Hidden Value of Permits and Inspections',
    excerpt: 'Why skirting the permit process puts your home value at risk, and how we manage the bureaucracy for you.',
    date: 'April 28, 2024',
    author: 'Mike Ross, Lead Engineer',
    category: 'Advice',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop',
    readTime: '4 min read',
    content: `
      <p>It is tempting to skip the permit process for "small" jobs like a deck or a basement finish. It saves time and money upfront. But as a contractor set up for government compliance, we know that documentation is everything.</p>
      
      <h3>Resale Value</h3>
      <p>When you go to sell your home, unpermitted work can be a deal-breaker. Inspectors will flag finished basements that don't appear on tax records. By pulling permits now, you are investing in the future equity of your home.</p>
      
      <h3>Insurance Implications</h3>
      <p>If a fire or flood originates in an area of the home that was renovated without a permit, your insurance carrier may deny the claim. Is saving $200 on a permit worth risking your entire home's coverage?</p>
      
      <h3>We Handle the Paperwork</h3>
      <p>We know homeowners hate bureaucracy. That's why ETC handles the entire permitting process—from architectural drawings to final inspections—so you can relax knowing your project is 100% legal and code-compliant.</p>
    `
  },
  {
    id: '3',
    title: '2024 Trends in Sustainable Home Building',
    excerpt: 'From high-efficiency HVAC to sustainable lumber, here is how we are building greener homes in NJ and PA.',
    date: 'April 10, 2024',
    author: 'David Chen, Project Manager',
    category: 'Innovation',
    imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop',
    readTime: '6 min read',
    content: `
      <p>Sustainability isn't just a buzzword; it's about efficiency and durability. In 2024, we are seeing a massive shift in residential requests towards greener building practices.</p>
      
      <h3>Better Insulation, Lower Bills</h3>
      <p>We are standardizing the use of spray foam and rockwool insulation in our additions. While slightly more expensive than fiberglass, the air-sealing properties can reduce heating and cooling bills by up to 30%.</p>
      
      <h3>Composite vs. Wood</h3>
      <p>For our deck projects, 80% of clients are now choosing composite decking. It's made from recycled plastics, saves trees, and lasts two to three times longer than pressure-treated lumber without the need for chemical stains.</p>
    `
  },
];

export const STATS: StatMetric[] = [
  { label: 'Safety Rating', value: '0.82', subtext: 'EMR (Industry Best)' },
  { label: 'Projects Completed', value: '150+', subtext: 'Residential & Comm.' },
  { label: 'Bonding Capacity', value: '$5M', subtext: 'Ready for Gov' },
  { label: 'Years Experience', value: '15', subtext: 'Combined Leadership' },
];

export const SAFETY_CHART_DATA: SafetyData[] = [
  { name: '2019', incidents: 2, hours: 80 },
  { name: '2020', incidents: 1, hours: 90 },
  { name: '2021', incidents: 0, hours: 110 },
  { name: '2022', incidents: 0, hours: 140 },
  { name: '2023', incidents: 0, hours: 160 },
];