import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-etc-blue overflow-hidden">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Home Construction"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-etc-blue/90 to-etc-blue/40 mix-blend-multiply" />
      </div>

      <div className="relative container mx-auto px-4 py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-etc-accent/10 px-3 py-1 text-sm font-semibold text-etc-accent ring-1 ring-inset ring-etc-accent/20 mb-6">
            Serving Cape May County
          </div>
          <h1 className="text-4xl font-display font-bold tracking-tight text-white sm:text-6xl mb-6">
            Commercial Precision.<br/>
            <span className="text-etc-accent">Coastal Expertise.</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl leading-relaxed">
            From high-end residential renovations to critical storm watch inspections, ETC brings professional project management to the Jersey Shore. We handle the heavy lifting so you can enjoy the coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/gallery"
              className="inline-flex justify-center items-center rounded-md bg-etc-accent px-6 py-3 text-base font-bold text-etc-blue shadow-sm hover:bg-yellow-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400 transition-all"
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/locations/cape-may"
              className="inline-flex justify-center items-center rounded-md bg-white/10 px-6 py-3 text-base font-bold text-white hover:bg-white/20 transition-all backdrop-blur-sm ring-1 ring-white/30"
            >
              <FileText className="mr-2 h-5 w-5" />
              Local Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;