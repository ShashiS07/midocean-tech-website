
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowRight, BookOpen, Layers, Factory, Truck, ShoppingBag, HardHat, ShieldCheck } from 'lucide-react';

export const Playbooks: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
            backgroundSize: '24px 24px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-sm font-bold mb-6 border border-secondary/20">
                <BookOpen size={16} /> Knowledge Base
           </div>
           <h1 className="text-4xl md:text-5xl font-bold mb-6">ERPNext Playbook Library</h1>
           <p className="text-xl text-slate-300 max-w-2xl mx-auto">
             Don't reinvent the wheel. Explore our library of standardized implementation recipes, architecture diagrams, and industry-specific workflows.
           </p>
        </div>
      </div>

      {/* Playbook Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Playbook 1 */}
            <PlaybookCard 
              id="multi-plant"
              title="Multi-Plant Manufacturing"
              description="A unified architecture for manufacturers with a central HQ and multiple distributed production units. Covers inter-plant transfers and consolidated planning."
              icon={<Factory className="text-blue-500" size={32} />}
              tags={["Manufacturing", "Subcontracting", "MRP"]}
            />

            {/* Playbook 2 */}
            <PlaybookCard 
              id="hsrp"
              title="HSRP & Number Plate Operations"
              description="Specialized workflow for High Security Registration Plates. Integrates Vahan/Parivahan portals with embossing machines and dispatch logic."
              icon={<Truck className="text-amber-500" size={32} />}
              tags={["Automotive", "Government API", "Logistics"]}
            />

            {/* Playbook 3 */}
            <PlaybookCard 
              id="trading"
              title="Trading & Distribution"
              description="Optimized for high-volume distributors. Features mobile order taking, centralized warehousing, and credit limit automation."
              icon={<ShoppingBag className="text-blue-500" size={32} />}
              tags={["Distribution", "Mobile Sales", "Inventory"]}
            />

            {/* Playbook 4 */}
            <PlaybookCard 
              id="construction"
              title="Construction Project Control"
              description="Project-based accounting and material management for infrastructure companies. Links site expenses directly to project budgets."
              icon={<HardHat className="text-orange-500" size={32} />}
              tags={["Projects", "Budgeting", "Site Management"]}
            />
         </div>

         <div className="mt-16 bg-white p-8 rounded-2xl border border-slate-100 text-center">
            <h3 className="text-xl font-bold text-primary mb-2">Don't see your industry?</h3>
            <p className="text-slate-600 mb-6">We have experience in 12+ other sectors including Healthcare, Non-Profit, and Education.</p>
            <Link to="/contact">
                <Button variant="outline">Request Custom Roadmap</Button>
            </Link>
         </div>
      </div>
    </div>
  );
};

const PlaybookCard: React.FC<{ id: string; title: string; description: string; icon: React.ReactNode; tags: string[] }> = ({ id, title, description, icon, tags }) => (
    <Link to={`/playbooks/${id}`} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-secondary/30 transition-all group flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
            <div className="p-3 bg-slate-50 rounded-xl group-hover:bg-slate-100 transition-colors">
                {icon}
            </div>
            <div className="bg-slate-50 text-slate-500 text-xs px-2 py-1 rounded-md font-mono">
                v14 / v15
            </div>
        </div>
        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
            {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
            {tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded border border-slate-100">
                    {tag}
                </span>
            ))}
        </div>
        <div className="flex items-center text-secondary font-bold text-sm pt-6 border-t border-slate-50">
            View Playbook <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </div>
    </Link>
);
