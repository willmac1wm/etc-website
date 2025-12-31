
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOWN_DATA } from '../services/locationData';
import { Phone, ArrowRight, Wrench, Shield, Home } from 'lucide-react';

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const town = TOWN_DATA[slug || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!town) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Location Not Found</h2>
        <Link to="/" className="text-etc-accent hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Location Hero with Image Background and Blue Overlay */}
      <div className="relative py-32 overflow-hidden bg-gray-900">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={town.imageUrl} 
            alt={`${town.name} Landmark`} 
            className="w-full h-full object-cover"
          />
          {/* Transparent Blue Overlay (80% opacity, no multiply) for better image visibility */}
          <div className="absolute inset-0 bg-etc-blue/80" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="flex items-center gap-2 text-etc-accent mb-4 font-bold uppercase tracking-wider text-sm">
            <span className="bg-etc-accent/20 px-2 py-1 rounded border border-etc-accent/30">{town.county} County</span>
            <span>•</span>
            <span>Service Area</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Contractors in <span className="text-etc-accent">{town.name}</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            {town.intro}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-etc-blue mb-8">Local Services for {town.name}</h2>
            
            <div className="space-y-8">
              {town.services.map((service, idx) => {
                 // Determine if this service bullet maps to a known service slug for linking
                 const serviceSlug = service.slug;
                 const cardContent = (
                   <>
                     <div className={`bg-white p-3 rounded-full h-fit shadow-sm text-etc-accent ${serviceSlug ? 'group-hover:bg-etc-accent group-hover:text-etc-blue transition-colors' : ''}`}>
                       {idx === 0 ? <Wrench size={24} /> : idx === 1 ? <Shield size={24} /> : <Home size={24} />}
                     </div>
                     <div>
                       <h3 className={`text-xl font-bold text-etc-blue mb-2 flex items-center gap-2 ${serviceSlug ? 'group-hover:text-blue-700' : ''}`}>
                           {service.title}
                           {serviceSlug && <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0" />}
                       </h3>
                       <p className="text-gray-600 leading-relaxed">{service.description}</p>
                     </div>
                   </>
                 );

                 const className = `flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100 hover:shadow-md transition-shadow ${serviceSlug ? 'group cursor-pointer hover:border-etc-accent/30' : ''}`;

                 return serviceSlug ? (
                   <Link 
                     key={idx}
                     to={`/locations/${town.slug}/${serviceSlug}`}
                     className={className}
                   >
                     {cardContent}
                   </Link>
                 ) : (
                   <div key={idx} className={className}>
                     {cardContent}
                   </div>
                 );
              })}
            </div>

            <div className="mt-12 bg-blue-50 p-8 rounded-xl border border-blue-100">
              <h3 className="text-lg font-bold text-etc-blue mb-2">Why Choose ETC in {town.name}?</h3>
              <p className="text-gray-700 mb-4">{town.customMessage}</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-etc-accent rounded-full"></div> Local knowledge of {town.county} County building codes</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-etc-accent rounded-full"></div> Fast response times for rental emergencies</li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-etc-blue text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Need Service in {town.name}?</h3>
              <p className="text-gray-300 mb-6">Contact us today for a free estimate or to schedule a property inspection.</p>
              
              <div className="space-y-4">
                <a href="tel:6096024314" className="flex items-center justify-center gap-2 w-full bg-etc-accent text-etc-blue font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                  <Phone size={18} /> (609) 602-4314
                </a>
                <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-white/10 text-white font-bold py-3 rounded-lg hover:bg-white/20 transition-colors">
                  Request Online
                </Link>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl">
              <h3 className="font-bold text-etc-blue mb-4">Nearby Service Areas</h3>
              <nav className="flex flex-col gap-2">
                {/* Show other towns in the same county first */}
                {Object.values(TOWN_DATA)
                  .filter(t => t.slug !== slug && t.county === town.county)
                  .slice(0, 5)
                  .map(t => (
                  <Link key={t.slug} to={`/locations/${t.slug}`} className="text-gray-600 hover:text-etc-accent hover:pl-2 transition-all flex items-center justify-between group">
                    {t.name} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LocationPage;
