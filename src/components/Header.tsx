
import React, { useState } from 'react';
import { Menu, X, HardHat, Phone, ChevronDown, MapPin, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { TOWN_DATA } from '../services/locationData';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Capability Statement', href: '/capability-statement' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Group towns by county for Mega Menu
  const townsByCounty = Object.values(TOWN_DATA).reduce((acc, town) => {
    if (!acc[town.county]) acc[town.county] = [];
    acc[town.county].push(town);
    return acc;
  }, {} as Record<string, typeof TOWN_DATA[keyof typeof TOWN_DATA][]>);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-etc-blue p-2 rounded-lg">
                <HardHat className="h-8 w-8 text-etc-accent" />
              </div>
              <div>
                <span className="block font-display font-bold text-2xl tracking-tight text-etc-blue">
                  ETC
                </span>
                <span className="block text-[0.6rem] font-bold tracking-widest text-gray-500 uppercase -mt-1">
                  Essential Trade Contractors
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6 xl:space-x-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${
                  isActive(link.href) ? 'text-etc-blue border-b-2 border-etc-accent' : 'text-gray-600 hover:text-etc-blue'
                } px-1 py-2 text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mega Menu Dropdown for Service Areas */}
            <div className="relative group">
              <button 
                className={`flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors focus:outline-none ${
                    location.pathname.includes('/locations') ? 'text-etc-blue border-b-2 border-etc-accent' : 'text-gray-600 hover:text-etc-blue'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Service Areas <ChevronDown size={14} />
              </button>
              
              <div 
                className={`absolute left-1/2 -translate-x-1/2 mt-0 w-[800px] bg-white rounded-xl shadow-2xl py-6 border border-gray-100 transition-all duration-200 transform origin-top ${isDropdownOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="grid grid-cols-3 gap-8 px-8">
                  {/* Cape May Column */}
                  <div>
                    <Link to="/locations/county/cape-may" className="group block mb-3 border-b border-gray-100 pb-2">
                        <h3 className="text-etc-blue font-bold flex items-center gap-2 group-hover:text-etc-accent transition-colors">
                            <MapPin size={16} className="text-etc-accent" /> Cape May County
                            <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                    </Link>
                    <ul className="space-y-2">
                        {townsByCounty['Cape May']?.map(town => (
                            <li key={town.slug}>
                                <Link to={`/locations/${town.slug}`} className="text-sm text-gray-600 hover:text-etc-accent hover:pl-1 transition-all block">
                                    {town.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                  </div>

                  {/* Atlantic Column */}
                   <div>
                    <Link to="/locations/county/atlantic" className="group block mb-3 border-b border-gray-100 pb-2">
                        <h3 className="text-etc-blue font-bold flex items-center gap-2 group-hover:text-etc-accent transition-colors">
                            <MapPin size={16} className="text-etc-accent" /> Atlantic County
                             <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                    </Link>
                    <ul className="space-y-2">
                        {townsByCounty['Atlantic']?.map(town => (
                            <li key={town.slug}>
                                <Link to={`/locations/${town.slug}`} className="text-sm text-gray-600 hover:text-etc-accent hover:pl-1 transition-all block">
                                    {town.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                  </div>

                  {/* Cumberland Column */}
                   <div>
                    <Link to="/locations/county/cumberland" className="group block mb-3 border-b border-gray-100 pb-2">
                        <h3 className="text-etc-blue font-bold flex items-center gap-2 group-hover:text-etc-accent transition-colors">
                            <MapPin size={16} className="text-etc-accent" /> Cumberland County
                             <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                    </Link>
                    <ul className="space-y-2">
                        {townsByCounty['Cumberland']?.map(town => (
                            <li key={town.slug}>
                                <Link to={`/locations/${town.slug}`} className="text-sm text-gray-600 hover:text-etc-accent hover:pl-1 transition-all block">
                                    {town.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`${
                  isActive(link.href) ? 'text-etc-blue border-b-2 border-etc-accent' : 'text-gray-600 hover:text-etc-blue'
                } px-1 py-2 text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-etc-accent text-etc-blue px-4 py-2 rounded-md text-sm font-bold hover:bg-yellow-400 transition-colors"
            >
              <Phone size={16} />
              (609) 602-4314
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full z-50 max-h-[90vh] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-etc-blue hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="px-3 py-2 bg-gray-50 rounded-lg my-2">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Service Areas</div>
              <div className="space-y-4">
                  <div>
                      <Link to="/locations/county/cape-may" onClick={() => setIsOpen(false)} className="font-bold text-etc-blue text-sm mb-1 block hover:text-etc-accent">Cape May County</Link>
                       {townsByCounty['Cape May']?.map((town) => (
                        <Link key={town.slug} to={`/locations/${town.slug}`} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600 ml-2">{town.name}</Link>
                      ))}
                  </div>
                   <div>
                      <Link to="/locations/county/atlantic" onClick={() => setIsOpen(false)} className="font-bold text-etc-blue text-sm mb-1 block hover:text-etc-accent">Atlantic County</Link>
                       {townsByCounty['Atlantic']?.map((town) => (
                        <Link key={town.slug} to={`/locations/${town.slug}`} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600 ml-2">{town.name}</Link>
                      ))}
                  </div>
                  <div>
                      <Link to="/locations/county/cumberland" onClick={() => setIsOpen(false)} className="font-bold text-etc-blue text-sm mb-1 block hover:text-etc-accent">Cumberland County</Link>
                       {townsByCounty['Cumberland']?.map((town) => (
                        <Link key={town.slug} to={`/locations/${town.slug}`} onClick={() => setIsOpen(false)} className="block py-1 text-sm text-gray-600 ml-2">{town.name}</Link>
                      ))}
                  </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-etc-blue hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-etc-accent hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
