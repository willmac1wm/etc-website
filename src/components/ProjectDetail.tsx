import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PROJECTS } from '../services/mockData';
import { ArrowLeft, CheckCircle, MapPin, Calendar, DollarSign } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Project Not Found</h2>
        <Link to="/gallery" className="text-etc-accent hover:underline mt-4 inline-block">Return to Portfolio</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Image */}
      <div className="relative h-[50vh] bg-gray-900">
        <img 
          src={project.images.after} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 absolute inset-0 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-10">
          <div className="container mx-auto">
             <Link to="/gallery" className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors font-semibold">
                <ArrowLeft size={20} className="mr-2" /> Back to Portfolio
             </Link>
            <div className="flex flex-col items-start">
              <div className="bg-etc-accent text-etc-blue text-xs font-bold px-3 py-1 rounded inline-block mb-4 uppercase tracking-wider">
                {project.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
                  <span className="flex items-center gap-1"><MapPin size={16} /> {project.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={16} /> Completed: {project.completionDate}</span>
                  {project.contractValue && <span className="flex items-center gap-1"><DollarSign size={16} /> Value: {project.contractValue}</span>}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-display font-bold text-etc-blue mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {project.description}
              </p>
            </section>

            {/* Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <div className="grid md:grid-cols-2 gap-8">
                {project.challenge && (
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <h3 className="font-bold text-red-900 mb-3 text-lg">The Challenge</h3>
                    <p className="text-gray-700">{project.challenge}</p>
                  </div>
                )}
                {project.solution && (
                   <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <h3 className="font-bold text-green-900 mb-3 text-lg">The Solution</h3>
                    <p className="text-gray-700">{project.solution}</p>
                  </div>
                )}
              </div>
            )}

            {/* Before / After Images */}
            <section>
               <h2 className="text-2xl font-display font-bold text-etc-blue mb-6">Visual Transformation</h2>
               <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-2 group">
                       <img src={project.images.before} alt="Before" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                       <div className="absolute top-4 left-4 bg-gray-900/80 text-white text-xs font-bold px-3 py-1 rounded">BEFORE</div>
                    </div>
                    <p className="text-sm text-gray-500 italic">Original condition prior to renovation.</p>
                  </div>
                   <div>
                    <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-2 group">
                       <img src={project.images.after} alt="After" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                       <div className="absolute top-4 left-4 bg-etc-accent text-etc-blue text-xs font-bold px-3 py-1 rounded">AFTER</div>
                    </div>
                    <p className="text-sm text-gray-500 italic">Completed project delivered on schedule.</p>
                  </div>
               </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
             {/* Testimonial */}
             {project.testimonial && (
               <div className="bg-etc-blue text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 -mt-4 -mr-4 text-white/10">
                   <svg width="100" height="100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.054 15.385 14.542 17.202 14.249C16.92 12.872 16.035 12.001 14.931 12.001C13.881 12.001 13.013 12.822 13.013 14.017L13.013 21L6.99999 21L6.99999 14.017C6.99999 10.152 9.47999 7 13.518 7C17.556 7 21.018 10.152 21.018 14.017L21.018 21L14.017 21Z"/></svg>
                 </div>
                 <p className="text-lg italic font-light relative z-10 mb-6">"{project.testimonial.text}"</p>
                 <div>
                   <p className="font-bold text-etc-accent">{project.testimonial.author}</p>
                   <p className="text-xs text-gray-400">Verified Client</p>
                 </div>
               </div>
             )}

             {/* Tags */}
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-etc-blue mb-4">Project Scope</h3>
                <div className="flex flex-wrap gap-2">
                   {project.tags.map(tag => (
                     <span key={tag} className="flex items-center bg-white border border-gray-200 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold">
                       <CheckCircle size={12} className="mr-1 text-etc-accent" /> {tag}
                     </span>
                   ))}
                </div>
             </div>

             {/* CTA */}
             <div className="text-center">
               <h3 className="font-bold text-gray-900 mb-2">Inspired by this project?</h3>
               <Link to="/contact" className="inline-block w-full bg-etc-accent hover:bg-yellow-400 text-etc-blue font-bold py-3 rounded-lg transition-colors">
                 Get a Quote
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;