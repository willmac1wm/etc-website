import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../services/mockData';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Article Not Found</h2>
        <Link to="/blog" className="text-etc-accent hover:underline mt-4 inline-block">Return to Blog</Link>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-etc-blue py-16 text-center text-white px-4">
        <div className="container mx-auto max-w-4xl">
           <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors text-sm">
             <ArrowLeft size={16} className="mr-2" /> Back to All Insights
           </Link>
           <div className="flex justify-center mb-6">
             <span className="bg-etc-accent/20 text-etc-accent text-xs font-bold px-3 py-1 rounded border border-etc-accent/30 uppercase tracking-wider">
               {post.category}
             </span>
           </div>
           <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
             {post.title}
           </h1>
           <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
             <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
             <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
             <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
           </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto max-w-4xl px-4 -mt-10 mb-12 relative z-10">
        <div className="rounded-xl overflow-hidden shadow-2xl h-[400px]">
          <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-3xl px-4">
        <div 
          className="prose prose-lg prose-headings:font-display prose-headings:font-bold prose-headings:text-etc-blue prose-a:text-etc-accent prose-img:rounded-xl text-gray-600 mx-auto"
          dangerouslySetInnerHTML={{ __html: post.content || `<p>${post.excerpt}</p>` }}
        />
        
        {/* Footer Share/Nav */}
        <div className="border-t border-gray-100 mt-12 pt-12 flex justify-between items-center">
           <Link to="/blog" className="font-bold text-etc-blue hover:text-etc-accent transition-colors flex items-center gap-2">
             <ArrowLeft size={20} /> Read More Articles
           </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;