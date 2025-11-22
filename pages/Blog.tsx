
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Calendar, User, ArrowRight, Tag, Search, ChevronRight } from 'lucide-react';

// Mock Data
const BLOG_POSTS = [
  {
    id: 'scaling-erpnext',
    title: 'Scaling ERPNext for 10k+ Concurrent Users',
    excerpt: 'A deep dive into our architecture for high-load Frappe deployments using read-replicas, background workers, and Redis queue optimization.',
    category: 'Engineering',
    author: 'Sarah Khan',
    date: 'Oct 15, 2023',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop',
    readTime: '8 min read'
  },
  {
    id: 'ai-demand-forecasting',
    title: 'Integrating OpenAI Assistant API with Frappe',
    excerpt: 'How we built a custom RAG pipeline to query ERPNext data using natural language for a manufacturing client, reducing reporting time by 90%.',
    category: 'AI & ML',
    author: 'James Davidson',
    date: 'Sep 28, 2023',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop',
    readTime: '12 min read'
  },
  {
    id: 'odoo-vs-erpnext',
    title: 'Odoo vs ERPNext: The 2024 Enterprise Comparison',
    excerpt: 'An unbiased look at the Total Cost of Ownership (TCO), flexibility, and ecosystem maturity of the two leading open-source ERPs.',
    category: 'Strategy',
    author: 'Ahmed Rashid',
    date: 'Nov 02, 2023',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    readTime: '15 min read'
  },
  {
    id: 'python-performance',
    title: 'Optimizing Python Scripts in Server Actions',
    excerpt: 'Common pitfalls when writing server scripts in Frappe. Learn how to profile code, avoid N+1 query problems, and use SQL efficiently.',
    category: 'Engineering',
    author: 'Sarah Khan',
    date: 'Aug 10, 2023',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    readTime: '6 min read'
  },
  {
    id: 'mfg-case-study',
    title: 'Digitizing a Textile Plant: Implementation Story',
    excerpt: 'From paper logs to IoT-enabled work orders. How we reduced material wastage by 18% in 6 months for a Gujarat-based textile giant.',
    category: 'Case Study',
    author: 'Team Midocean',
    date: 'Jul 22, 2023',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
    readTime: '10 min read'
  },
  {
    id: 'hsrp-compliance',
    title: 'HSRP Compliance: Automating Vahan Portal Sync',
    excerpt: 'Technical guide on integrating High Security Registration Plate production lines with government APIs for automated dispatch.',
    category: 'Automotive',
    author: 'Vikram Singh',
    date: 'Jun 15, 2023',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=800&auto=format&fit=crop',
    readTime: '7 min read'
  }
];

const CATEGORIES = ["All", "Engineering", "AI & ML", "Strategy", "Case Study", "Automotive"];

export const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-24 pb-20 text-center relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
         <div className="max-w-4xl mx-auto px-4 relative z-10">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-6 border border-secondary/20">
                 Insights & News
             </div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">Insights from the Lab</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
                 Technical deep dives, architectural patterns, and business strategy from our engineering team. We share what works in production.
             </p>
             
             {/* Search Bar */}
             <div className="max-w-lg mx-auto relative group">
                <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full group-hover:bg-secondary/30 transition-colors"></div>
                <input 
                  type="text" 
                  placeholder="Search articles (e.g. 'Performance', 'Odoo')..." 
                  className="relative w-full px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary backdrop-blur-sm transition-all"
                />
                <Search className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
             </div>
         </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
                {CATEGORIES.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                            activeCategory === cat 
                            ? 'bg-secondary text-white shadow-lg shadow-secondary/30 transform scale-105' 
                            : 'bg-white text-slate-600 border border-slate-200 hover:border-secondary/50 hover:text-secondary'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                    <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
                        {/* Image */}
                        <Link to="#" className="h-56 overflow-hidden relative block">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-primary shadow-sm flex items-center gap-1">
                                <Tag size={12} className="text-secondary" /> {post.category}
                            </div>
                        </Link>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs text-slate-400 mb-4 font-medium">
                                <span className="flex items-center gap-1"><Calendar size={14} className="text-slate-300"/> {post.date}</span>
                                <span className="flex items-center gap-1"><User size={14} className="text-slate-300"/> {post.author}</span>
                            </div>
                            
                            <Link to="#">
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-secondary transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>
                            </Link>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">{post.readTime}</span>
                                <Link to="#" className="text-secondary font-bold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read Article <ChevronRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-24 bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>
                
                <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Join the Engineering Newsletter</h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        Get architectural patterns, code snippets, and industry insights delivered to your inbox bi-weekly. No marketing spam, just engineering.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="dev@company.com" 
                            className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-secondary backdrop-blur-sm"
                        />
                        <Button size="lg" variant="secondary">Subscribe</Button>
                    </div>
                    <div className="mt-6 text-xs text-slate-500">
                        We care about your data in our <Link to="/privacy" className="text-slate-400 hover:text-white underline">Privacy Policy</Link>.
                    </div>
                </div>
            </div>

        </div>
      </section>
    </div>
  );
};
