import React from 'react';
import { Facebook, Linkedin, Instagram, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactFooter: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
             <div className="text-xl font-display font-bold text-white mb-4">ETC</div>
             <p className="text-sm mb-4">Essential Trade Contractors.<br/>Local. Reliable. Professional.</p>
             <div className="text-sm text-gray-500">
                <p>100 Industrial Blvd</p>
                <p>Trenton, NJ 08611</p>
                <p className="mt-2"><a href="tel:6096024314" className="hover:text-etc-accent">(609) 602-4314</a></p>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
               <li><Link to="/services" className="hover:text-etc-accent transition-colors">Residential Renovations</Link></li>
               <li><Link to="/services" className="hover:text-etc-accent transition-colors">Commercial Fit-Outs</Link></li>
               <li><Link to="/services" className="hover:text-etc-accent transition-colors">Site Maintenance</Link></li>
               <li><Link to="/capability-statement" className="hover:text-etc-accent transition-colors">Government Contracting</Link></li>
            </ul>
          </div>

          {/* Service Areas (SEO) */}
          <div className="col-span-1 md:col-span-2">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider flex items-center gap-2">
              <MapPin size={14} /> Major Service Hubs
            </h4>
            <p className="text-xs text-gray-500 mb-3">Serving all of South Jersey including:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-sm">
                <Link to="/locations/cape-may" className="hover:text-etc-accent">Cape May Contractors</Link>
                <Link to="/locations/wildwood" className="hover:text-etc-accent">Wildwood Handyman</Link>
                <Link to="/locations/avalon" className="hover:text-etc-accent">Avalon Renovations</Link>
                <Link to="/locations/ocean-city" className="hover:text-etc-accent">Ocean City Repairs</Link>
                <Link to="/locations/atlantic-city" className="hover:text-etc-accent">Atlantic City Commercial</Link>
                <Link to="/locations/vineland" className="hover:text-etc-accent">Vineland Construction</Link>
                <Link to="/locations/margate" className="hover:text-etc-accent">Margate Home Improv.</Link>
                <Link to="/locations/villas" className="hover:text-etc-accent">Villas Storm Repair</Link>
                <Link to="/locations/hammonton" className="hover:text-etc-accent">Hammonton Services</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm">
            © {new Date().getFullYear()} Essential Trade Contractors. All rights reserved.
          </div>
          <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;