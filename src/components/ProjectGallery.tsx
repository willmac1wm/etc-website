
import React, { useState, useEffect } from 'react';
import { contentService } from '../services/contentService';
import { Project, ProjectCategory } from '../types';
import { MapPin, Calendar, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await contentService.getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const categories = ['All', ...Object.values(ProjectCategory)];

  if (loading) {
    return (
      <div className="py-40 flex justify-center items-center bg-gray-50">
        <Loader2 className="animate-spin text-etc-accent h-12 w-12" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-etc-accent uppercase tracking-wider mb-2">Our Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-etc-blue mb-4">Featured Projects</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
             High-end residential renovations and commercial craftsmanship. See how we transform spaces.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="relative z-10 flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-etc-blue text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
          {filteredProjects.map((project) => {
            return (
              <Link to={`/gallery/${project.id}`} key={project.id} className="block group h-full">
                <div className="bg-white rounded-xl shadow-sm group-hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
                  
                  {/* Image Area - Shows After Image Only for Clean Grid */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.images.after}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-etc-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                       <span className="text-white font-bold border-2 border-etc-accent px-4 py-2 rounded uppercase tracking-wider text-sm flex items-center gap-2">
                         View Case Study <ArrowRight size={16}/>
                       </span>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-etc-blue px-3 py-1 text-xs font-bold rounded shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-bold text-etc-blue mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-center gap-1">
                        <MapPin size={14} className="text-etc-gray" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-etc-gray" />
                        {project.completionDate}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
