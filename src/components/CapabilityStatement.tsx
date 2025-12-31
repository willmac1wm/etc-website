
import React from 'react';
import { FileText, Shield, CheckCircle, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const CapabilityStatement: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-12 pb-20">
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Header Section (Print Friendly) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-etc-blue pb-8 mb-12">
          <div>
            <h1 className="text-4xl font-display font-bold text-etc-blue mb-2">Capability Statement</h1>
            <p className="text-xl text-gray-600">Essential Trade Contractors (ETC)</p>
          </div>
          <div className="mt-6 md:mt-0 text-right">
             <div className="text-sm font-bold text-gray-500">UEI: <span className="text-gray-900 font-mono">X8K2L9M1P4Q7</span></div>
             <div className="text-sm font-bold text-gray-500">CAGE: <span className="text-gray-900 font-mono">8H7F2</span></div>
             <div className="inline-flex items-center gap-2 mt-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
               <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> Active in SAM.gov
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-2xl font-bold text-etc-blue mb-4 flex items-center gap-2">
                <Shield className="text-etc-accent" /> Company Overview
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Essential Trade Contractors (ETC) is a full-service general construction firm specializing in residential modernization, site maintenance, and light commercial fit-outs. We bring a "government-grade" approach to project management, safety, and documentation, ensuring projects are delivered on time and strictly to code. 
              </p>
              <p className="text-gray-700 leading-relaxed">
                While our portfolio is rooted in high-end residential craftsmanship, our operational infrastructure is built for federal compliance. We possess the safety protocols and administrative rigor required for government contracts.
              </p>
            </section>

            <section>
               <h2 className="text-2xl font-bold text-etc-blue mb-4 flex items-center gap-2">
                <CheckCircle className="text-etc-accent" /> Core Competencies
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                 {[
                   "General Construction & Renovation",
                   "Design-Build Services",
                   "Brush Clearing & Site Prep",
                   "Snow Plowing & Ice Management",
                   "Carpentry & Framing",
                   "Drywall & Insulation",
                   "Painting & Wall Coverings",
                   "Flooring Installation",
                   "Project Management"
                 ].map(item => (
                   <div key={item} className="flex items-center gap-2 bg-gray-50 p-3 rounded border border-gray-100">
                     <div className="w-1.5 h-1.5 bg-etc-accent rounded-full"></div>
                     <span className="text-gray-700 font-medium">{item}</span>
                   </div>
                 ))}
              </div>
            </section>

            <section>
               <h2 className="text-2xl font-bold text-etc-blue mb-4 flex items-center gap-2">
                <Award className="text-etc-accent" /> Differentiators
              </h2>
              <ul className="space-y-4">
                 <li className="flex gap-4">
                   <div className="bg-etc-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                   <div>
                     <h4 className="font-bold text-gray-900">Safety Culture</h4>
                     <p className="text-sm text-gray-600">Maintains an EMR of 0.82 (Industry avg 1.0). All supervisors are OSHA-30 certified.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="bg-etc-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                   <div>
                     <h4 className="font-bold text-gray-900">Operational Readiness</h4>
                     <p className="text-sm text-gray-600">Established vendor relationships and resource management systems to mobilize crews efficiently across the tri-state area.</p>
                   </div>
                 </li>
                 <li className="flex gap-4">
                   <div className="bg-etc-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                   <div>
                     <h4 className="font-bold text-gray-900">Administrative Excellence</h4>
                     <p className="text-sm text-gray-600">Proficient in detailed reporting, submittal management, and prevailing wage compliance.</p>
                   </div>
                 </li>
              </ul>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            
            <div className="bg-gray-900 text-white p-6 rounded-xl">
               <h3 className="font-bold text-lg mb-4 text-etc-accent">NAICS Codes</h3>
               <ul className="space-y-2 text-sm">
                 <li className="flex justify-between border-b border-gray-700 pb-2">
                   <span>236118</span>
                   <span className="text-gray-400">Residential Remodelers</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-700 pb-2">
                   <span>236220</span>
                   <span className="text-gray-400">Commercial Building</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-700 pb-2">
                   <span>561730</span>
                   <span className="text-gray-400">Landscaping (Snow/Brush)</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-700 pb-2">
                   <span>238130</span>
                   <span className="text-gray-400">Framing Contractors</span>
                 </li>
                 <li className="flex justify-between border-b border-gray-700 pb-2">
                   <span>238310</span>
                   <span className="text-gray-400">Drywall & Insulation</span>
                 </li>
                 <li className="flex justify-between pt-1">
                   <span>238350</span>
                   <span className="text-gray-400">Finish Carpentry</span>
                 </li>
               </ul>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
               <h3 className="font-bold text-lg mb-4 text-etc-blue">Company Data</h3>
               <div className="space-y-3 text-sm">
                 <div>
                   <span className="block text-gray-500 text-xs uppercase">Legal Name</span>
                   <span className="font-medium">Essential Trade Contractors LLC</span>
                 </div>
                 <div>
                   <span className="block text-gray-500 text-xs uppercase">Established</span>
                   <span className="font-medium">2009</span>
                 </div>
                 <div>
                   <span className="block text-gray-500 text-xs uppercase">Business Size</span>
                   <span className="font-medium">Small Business</span>
                 </div>
                 <div>
                   <span className="block text-gray-500 text-xs uppercase">Service Area</span>
                   <span className="font-medium">NJ, PA, DE</span>
                 </div>
               </div>
            </div>

            <div className="text-center">
              <a href="#" className="flex items-center justify-center gap-2 w-full bg-etc-blue text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <FileText size={18} /> Download PDF Version
              </a>
              <p className="text-xs text-gray-500 mt-2">Updated: May 2024</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilityStatement;
