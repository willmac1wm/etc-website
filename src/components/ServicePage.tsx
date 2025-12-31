
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICE_DATA } from '../services/serviceData';
import { TOWN_DATA } from '../services/locationData';
import { CheckCircle, Phone, ArrowRight, ArrowLeft, MapPin } from 'lucide-react';

const ServicePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICE_DATA[slug || ''];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Service Not Found</h2>
        <Link to="/services" className="text-etc-accent hover:underline mt-4 inline-block">Return to Services</Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-etc-blue/80 mix-blend-multiply" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <Link to="/services" className="inline-flex items-center text-etc-accent hover:text-white mb-6 transition-colors font-bold text-sm uppercase tracking-wider">
            <ArrowLeft size={16} className="mr-2" /> Back to Services
          </Link>
          <div className="bg-etc-accent/20 p-3 rounded-lg w-fit mb-4 backdrop-blur-sm border border-etc-accent/30 text-etc-accent">
            <Icon size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">{service.title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{service.shortDescription}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <section>
              <h2 className="text-2xl font-display font-bold text-etc-blue mb-4">Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
            </section>

            {/* Key Features Grid */}
            <section>
              <h3 className="text-xl font-bold text-etc-blue mb-6">Capabilities</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle className="text-etc-accent flex-shrink-0" size={20} />
                    <span className="font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Timeline */}
            <section>
               <h3 className="text-xl font-bold text-etc-blue mb-6">How We Work</h3>
               <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        {/* Icon/Number */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-etc-blue text-etc-accent group-[.is-active]:bg-etc-accent group-[.is-active]:text-etc-blue shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-bold">
                           {step.step}
                        </div>
                        {/* Card */}
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                           <div className="flex items-center justify-between space-x-2 mb-1">
                              <div className="font-bold text-slate-900">{step.title}</div>
                           </div>
                           <div className="text-slate-500">{step.description}</div>
                        </div>
                     </div>
                  ))}
               </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Benefits Box */}
            <div className="bg-etc-blue text-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-etc-accent">The ETC Advantage</h3>
              <div className="space-y-6">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx}>
                    <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: benefit.description }} />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl text-center">
              <h3 className="font-bold text-etc-blue text-xl mb-2">Ready to Start?</h3>
              <p className="text-gray-600 mb-6">Contact us for a consultation or quote on your {service.title} project.</p>
              <a href="tel:6096024314" className="flex items-center justify-center gap-2 w-full bg-etc-accent text-etc-blue font-bold py-3 rounded-lg hover:bg-yellow-400 transition-colors mb-3">
                <Phone size={18} /> (609) 602-4314
              </a>
              <Link to="/contact" className="flex items-center justify-center gap-2 w-full bg-white border-2 border-etc-blue text-etc-blue font-bold py-3 rounded-lg hover:bg-blue-50 transition-colors">
                Request Online <ArrowRight size={18} />
              </Link>
            </div>

            {/* Service Areas (New Section) */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl">
               <h3 className="font-bold text-etc-blue mb-4 flex items-center gap-2">
                 <MapPin size={18} className="text-etc-accent"/> Service Areas
               </h3>
               <p className="text-xs text-gray-500 mb-3">We provide {service.title} services in these locations:</p>
               <div className="grid grid-cols-2 gap-2 text-sm">
                 {Object.values(TOWN_DATA).map(town => (
                   <Link 
                     key={town.slug} 
                     to={`/locations/${town.slug}/${service.slug}`} 
                     className="text-gray-600 hover:text-etc-accent hover:underline truncate"
                   >
                     {town.name}
                   </Link>
                 ))}
               </div>
            </div>

            {/* Other Services Nav */}
            <div className="border-t border-gray-200 pt-8">
              <h4 className="font-bold text-gray-400 uppercase text-xs tracking-wider mb-4">Explore Other Services</h4>
              <nav className="space-y-2">
                 {Object.values(SERVICE_DATA).filter(s => s.slug !== slug).map(s => (
                   <Link key={s.slug} to={`/services/${s.slug}`} className="block p-3 rounded hover:bg-gray-50 text-gray-600 hover:text-etc-blue transition-colors font-medium text-sm">
                     {s.title}
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

export default ServicePage;
