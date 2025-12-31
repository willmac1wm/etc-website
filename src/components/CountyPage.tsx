
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOWN_DATA, COUNTY_COORDINATES } from '../services/locationData';
import { MapPin, ArrowRight, Home } from 'lucide-react';

const CountyPage: React.FC = () => {
  const { countySlug } = useParams<{ countySlug: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [countySlug]);

  // Convert slug back to Display Name (e.g. 'cape-may' -> 'Cape May')
  const countyNameMap: Record<string, string> = {
    'cape-may': 'Cape May',
    'atlantic': 'Atlantic',
    'cumberland': 'Cumberland'
  };

  const countyName = countyNameMap[countySlug || ''];

  if (!countyName) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">County Not Found</h2>
        <Link to="/" className="text-etc-accent hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  // Filter towns for this county
  const countyTowns = Object.values(TOWN_DATA).filter(town => town.county === countyName);
  
  // Get Map Data
  const mapData = COUNTY_COORDINATES[countyName] || { lat: 39.0840, lng: -74.8000, zoom: 9 };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-etc-blue overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             {/* Abstract pattern or generic map bg */}
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 0 L100 100 L0 100 Z" fill="currentColor" className="text-gray-800" />
             </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            <span className="text-etc-accent">{countyName} County</span> Service Area
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Providing expert construction, renovation, and maintenance services to communities across {countyName} County.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Interactive Map Visual */}
          <div className="bg-gray-50 rounded-xl border border-gray-200 p-2 shadow-sm sticky top-24">
             <h2 className="text-2xl font-bold text-etc-blue mb-4 px-2 pt-2 flex items-center gap-2">
               <MapPin className="text-etc-accent" /> Service Map
             </h2>
             
             <div className="aspect-square w-full bg-white rounded-lg overflow-hidden relative shadow-inner">
                <iframe 
                  title={`${countyName} Service Map`}
                  width="100%" 
                  height="100%" 
                  frameBorder="0" 
                  scrolling="no" 
                  marginHeight={0} 
                  marginWidth={0} 
                  src={`https://maps.google.com/maps?q=${mapData.lat},${mapData.lng}&z=${mapData.zoom}&output=embed`}
                  className="w-full h-full grayscale opacity-90 hover:grayscale-0 transition-all duration-500"
                >
                </iframe>
                <div className="absolute bottom-4 left-4 pointer-events-none bg-white/90 px-3 py-1 rounded text-xs text-gray-500 shadow-sm border border-gray-200 backdrop-blur-sm">
                    Map Center: {countyName}
                </div>
             </div>
          </div>

          {/* Town List */}
          <div>
            <h2 className="text-2xl font-bold text-etc-blue mb-8">Communities We Serve</h2>
            <div className="grid sm:grid-cols-2 gap-4">
               {countyTowns.map((town) => (
                 <Link 
                   key={town.slug} 
                   to={`/locations/${town.slug}`}
                   className="group bg-white p-5 rounded-xl border border-gray-100 hover:border-etc-accent hover:shadow-md transition-all flex flex-col"
                 >
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg text-etc-blue group-hover:text-blue-700">{town.name}</span>
                        <ArrowRight size={18} className="text-gray-300 group-hover:text-etc-accent transition-colors" />
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2 mb-3 flex-grow">
                        {town.intro}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-xs text-gray-400">
                        <Home size={12} /> View Services
                    </div>
                 </Link>
               ))}
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h3 className="font-bold text-etc-blue text-lg mb-2">Don't see your town?</h3>
                <p className="text-gray-700 mb-4">
                    We service the entire {countyName} County region. If you are located nearby one of the listed towns, we likely cover your area.
                </p>
                <Link to="/contact" className="inline-block bg-etc-accent text-etc-blue font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                    Contact for Availability
                </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CountyPage;
