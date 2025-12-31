
import React from 'react';
import { Home, Building2, Briefcase, Trees, ArrowRight, Hammer, Droplets, Waves } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <h2 className="text-sm font-bold text-etc-accent uppercase tracking-wider mb-2">What We Build</h2>
           <h3 className="text-3xl md:text-4xl font-display font-bold text-etc-blue mb-4">Construction Services</h3>
           <p className="text-gray-600 max-w-2xl mx-auto">Bringing professional project management to every job site.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Residential */}
          <Link to="/services/residential-renovations" className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all border border-gray-100 hover:border-etc-accent/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-etc-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <div className="bg-etc-blue/5 p-4 rounded-lg inline-block mb-4 group-hover:bg-etc-accent group-hover:text-etc-blue transition-colors">
                <Home className="w-8 h-8 text-etc-blue group-hover:text-etc-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-etc-blue">Residential Renovations</h3>
            <p className="text-gray-600 mb-4 text-sm">
              High-end kitchen remodels, bathroom suites, and home additions. We treat your home with respect and rigor.
            </p>
            <span className="text-etc-accent font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
               View Details <ArrowRight size={16} />
            </span>
          </Link>

          {/* Commercial */}
          <Link to="/services/commercial-fit-outs" className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all border border-gray-100 hover:border-etc-accent/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-etc-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <div className="bg-etc-blue/5 p-4 rounded-lg inline-block mb-4 group-hover:bg-etc-accent group-hover:text-etc-blue transition-colors">
                <Building2 className="w-8 h-8 text-etc-blue group-hover:text-etc-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-etc-blue">Commercial Fit-Outs</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Retail, office, and light industrial modifications. Strict schedule adherence to get your business running faster.
            </p>
            <span className="text-etc-accent font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
               View Details <ArrowRight size={16} />
            </span>
          </Link>

          {/* Maintenance */}
          <Link to="/services/site-maintenance" className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all border border-gray-100 hover:border-etc-accent/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-etc-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
             <div className="bg-etc-blue/5 p-4 rounded-lg inline-block mb-4 group-hover:bg-etc-accent group-hover:text-etc-blue transition-colors">
                <Trees className="w-8 h-8 text-etc-blue group-hover:text-etc-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-etc-blue">Site Maintenance</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Complete brush cleanup, land clearing, and light snow plow services. Heavy-duty exterior maintenance.
            </p>
            <span className="text-etc-accent font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
               View Details <ArrowRight size={16} />
            </span>
          </Link>

          {/* Hardscaping */}
          <Link to="/services/hardscaping-decks" className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all border border-gray-100 hover:border-etc-accent/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-etc-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
             <div className="bg-etc-blue/5 p-4 rounded-lg inline-block mb-4 group-hover:bg-etc-accent group-hover:text-etc-blue transition-colors">
                <Hammer className="w-8 h-8 text-etc-blue group-hover:text-etc-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-etc-blue">Hardscaping & Decks</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Composite decking, paver patios, and durable sidewalks. Expand your living space outdoors.
            </p>
            <span className="text-etc-accent font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
               View Details <ArrowRight size={16} />
            </span>
          </Link>

          {/* Exterior Cleaning */}
          <Link to="/services/exterior-cleaning" className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all border border-gray-100 hover:border-etc-accent/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-etc-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
             <div className="bg-etc-blue/5 p-4 rounded-lg inline-block mb-4 group-hover:bg-etc-accent group-hover:text-etc-blue transition-colors">
                <Droplets className="w-8 h-8 text-etc-blue group-hover:text-etc-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-etc-blue">Power & Soft Washing</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Professional pressure washing for concrete and soft washing for siding and roofs. Restore your curb appeal.
            </p>
            <span className="text-etc-accent font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
               View Details <ArrowRight size={16} />
            </span>
          </Link>

          {/* Flood Mitigation */}
          <Link to="/services/flood-mitigation" className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all border border-gray-100 hover:border-etc-accent/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-etc-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
             <div className="bg-etc-blue/5 p-4 rounded-lg inline-block mb-4 group-hover:bg-etc-accent group-hover:text-etc-blue transition-colors">
                <Waves className="w-8 h-8 text-etc-blue group-hover:text-etc-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-etc-blue">Flood Mitigation</h3>
            <p className="text-gray-600 mb-4 text-sm">
              Rapid response water extraction, drying, and restoration for post-storm flooding events.
            </p>
            <span className="text-etc-accent font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
               View Details <ArrowRight size={16} />
            </span>
          </Link>

          {/* Government */}
          <Link to="/services/government-contracting" className="group p-8 bg-gray-50 rounded-xl hover:shadow-xl transition-all border border-gray-100 hover:border-etc-accent/50 relative overflow-hidden md:col-span-2 lg:col-span-3">
            <div className="absolute top-0 left-0 w-1 h-full bg-etc-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
             <div className="bg-etc-blue/5 p-4 rounded-lg inline-block mb-4 group-hover:bg-etc-accent group-hover:text-etc-blue transition-colors">
                <Briefcase className="w-8 h-8 text-etc-blue group-hover:text-etc-blue" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-etc-blue">Government Contracting</h3>
            <p className="text-gray-600 mb-4 text-sm">
              <span className="inline-block bg-etc-blue text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1">CAPABILITY READY</span><br/>
              Registered for federal and state projects. Certifications, safety protocols, and admin capacity for RFPs.
            </p>
            <span className="text-etc-accent font-bold text-sm flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
               View Details <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
