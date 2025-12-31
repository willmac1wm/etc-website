
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TOWN_DATA } from '../services/locationData';
import { SERVICE_DATA } from '../services/serviceData';
import { Phone, ArrowLeft, CheckCircle, MapPin, Calendar, ArrowRight } from 'lucide-react';

const ServiceLocationPage: React.FC = () => {
  const { townSlug, serviceSlug } = useParams<{ townSlug: string; serviceSlug: string }>();
  
  const town = TOWN_DATA[townSlug || ''];
  const service = SERVICE_DATA[serviceSlug || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [townSlug, serviceSlug]);

  if (!town || !service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Page Not Found</h2>
        <Link to="/" className="text-etc-accent hover:underline mt-4 inline-block">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <img 
            src={town.imageUrl} 
            alt={`${service.title} in ${town.name}`} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-etc-blue via-etc-blue/90 to-etc-blue/60" />
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Link to={`/locations/${town.slug}`} className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors text-sm font-bold">
             <ArrowLeft size={16} className="mr-2" /> Back to {town.name} Services
          </Link>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
            <span className="text-etc-accent">{service.title}</span> in {town.name}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
            Professional {service.title.toLowerCase()} services tailored for {town.name} homeowners and businesses.
            Local expertise, reliable scheduling, and high-quality results.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-etc-blue mb-4">
                Why Choose ETC for {service.title} in {town.name}?
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                 Residents of {town.name} trust Essential Trade Contractors because we understand the specific needs of {town.county} County properties. 
                 From navigating local permits to choosing materials that withstand our coastal climate, we bring local knowledge to every {service.title.toLowerCase()} project.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {service.shortDescription} {town.intro}
              </p>
            </section>

            {/* Service Features adapted for Location */}
            <section>
              <h3 className="text-xl font-bold text-etc-blue mb-6">Our {town.name} Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle className="text-etc-accent flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Map Section */}
            <section>
               <h3 className="text-xl font-bold text-etc-blue mb-6 flex items-center gap-2">
                 <MapPin className="text-etc-accent" /> Serving {town.name} & Surrounding Areas
               </h3>
               <div className="w-full h-96 bg-gray-100 rounded-xl overflow-hidden shadow-inner border border-gray-200">
                 <iframe
                    title={`Map of ${town.name}`}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${town.coordinates.lat},${town.coordinates.lng}&zoom=14`}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                  >
                    {/* Note: In a real app, you would need a valid Google Maps API Key. 
                        For this demo, we can simulate the visual or use a placeholder if no key is available.
                        Since we can't inject a real key here, this iframe might show a developer mode overlay or require a key. 
                        Alternatively, we can use OpenStreetMap for a free embed. Let's stick to the structure.
                    */}
                  </iframe>
                  {/* Fallback visual since we don't have a real API key in this context */}
                  <div className="hidden absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500 font-bold">Map Center: {town.coordinates.lat}, {town.coordinates.lng}</p>
                  </div>
               </div>
               <p className="text-sm text-gray-500 mt-2 italic">
                 We are locally active in {town.name}, providing {service.title.toLowerCase()} services to neighborhoods throughout {town.county} County.
               </p>
            </section>

             <section className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h3 className="font-bold text-etc-blue text-lg mb-2">Ready to improve your {town.name} property?</h3>
                <p className="text-gray-700 mb-6">
                  Get a detailed quote for {service.title.toLowerCase()} specifically tailored to your home's needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:6096024314" className="flex items-center justify-center gap-2 bg-etc-accent text-etc-blue font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors">
                    <Phone size={18} /> (609) 602-4314
                  </a>
                  <Link to="/contact" className="flex items-center justify-center gap-2 bg-white text-etc-blue font-bold py-3 px-6 rounded-lg hover:bg-white/80 transition-colors border border-blue-200">
                    Request Online Quote
                  </Link>
                </div>
             </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Benefits Box */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-lg mb-4 text-etc-blue">Service Benefits</h3>
               <ul className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm">
                    <span className="block font-bold text-gray-900 mb-1">{benefit.title}</span>
                    <span className="text-gray-500" dangerouslySetInnerHTML={{ __html: benefit.description }} />
                  </li>
                ))}
               </ul>
            </div>

            {/* Local Link Building */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-bold text-etc-blue mb-4 text-sm uppercase tracking-wider">Other Services in {town.name}</h3>
              <nav className="flex flex-col gap-2">
                 {town.services.map((s, idx) => {
                    // Check if we have a matching full service page for this town service bullet
                    // This creates the internal linking mesh
                    const linkedServiceSlug = s.slug || ''; 
                    if(linkedServiceSlug && linkedServiceSlug !== serviceSlug) {
                         return (
                            <Link key={idx} to={`/locations/${town.slug}/${linkedServiceSlug}`} className="text-sm text-gray-600 hover:text-etc-accent flex items-center justify-between group py-2 border-b border-gray-200 last:border-0">
                                {s.title} <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                         )
                    }
                    return null;
                 })}
                 <Link to={`/locations/${town.slug}`} className="text-sm font-bold text-etc-blue mt-2 inline-block hover:underline">
                    View All {town.name} Services
                 </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLocationPage;
