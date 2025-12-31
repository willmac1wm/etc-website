
import React, { useEffect, useState } from 'react';
import { contentService } from '../services/contentService';
import { BlogPost } from '../types';
import { Clock, User, ArrowRight, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await contentService.getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to load blog posts", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex justify-center items-center bg-white">
        <Loader2 className="animate-spin text-etc-accent h-8 w-8" />
      </div>
    );
  }

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-etc-accent uppercase tracking-wider mb-2">Industry Insights</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-etc-blue mb-4">Construction & Contracting News</h3>
            <p className="text-gray-600">
              Expert advice on home renovation trends, safety standards, and property value.
            </p>
          </div>
          <Link to="/blog" className="hidden md:flex items-center gap-2 text-etc-blue font-bold hover:text-etc-accent transition-colors">
            View all articles <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="flex flex-col group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-4 h-56">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-etc-blue text-white text-xs font-bold px-3 py-1 rounded">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                <span className="flex items-center gap-1">
                  <User size={12} /> {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>

              <h4 className="text-xl font-bold text-etc-blue mb-3 group-hover:text-blue-700 transition-colors">
                {post.title}
              </h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              
              <div className="mt-auto">
                <span className="text-etc-accent font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <Link to="/blog" className="inline-flex items-center gap-2 text-etc-blue font-bold hover:text-etc-accent transition-colors">
                View all articles <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
