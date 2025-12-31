import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-4">Start Your Project</h2>
            <p className="mb-8 text-gray-400">
              Ready to discuss your next government or commercial project? 
              Our team is ready to provide a detailed proposal and capability briefing.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-etc-accent/10 p-3 rounded-full text-etc-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Call Us</p>
                  <a href="tel:6096024314" className="text-white font-bold text-lg hover:text-etc-accent transition-colors">
                    (609) 602-4314
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                 <div className="bg-etc-accent/10 p-3 rounded-full text-etc-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Email Proposals</p>
                  <a href="mailto:rfp@etc-construction.com" className="text-white font-bold text-lg hover:text-etc-accent transition-colors">
                    rfp@etc-construction.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                 <div className="bg-etc-accent/10 p-3 rounded-full text-etc-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">Headquarters</p>
                  <a 
                    href="https://www.google.com/maps/place/Cape+May+Court+House,+NJ+08210" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white font-bold text-lg hover:text-etc-accent transition-colors"
                  >
                    Cape May Court House, NJ 08210
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Form */}
          <form className="bg-white/5 p-8 rounded-xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Send us a Message</h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-bold uppercase mb-2">First Name</label>
                <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:border-etc-accent outline-none" placeholder="John" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase mb-2">Last Name</label>
                <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:border-etc-accent outline-none" placeholder="Doe" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-bold uppercase mb-2">Company / Agency</label>
              <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:border-etc-accent outline-none" placeholder="e.g. GSA Region 3" />
            </div>
            <div className="mb-6">
              <label className="block text-xs font-bold uppercase mb-2">Project Details</label>
              <textarea rows={4} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white focus:border-etc-accent outline-none" placeholder="Describe scope, timeline, and location..."></textarea>
            </div>
            <button type="submit" className="w-full bg-etc-accent text-etc-blue font-bold py-4 rounded hover:bg-yellow-400 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;