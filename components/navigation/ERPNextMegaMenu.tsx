
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Layers, BookOpen, Wrench, Activity, Factory, PlayCircle } from 'lucide-react';
import { Button } from '../ui/Button';

export const ERPNextMegaMenu: React.FC = () => (
  <div className="relative group">
    <button className="flex items-center space-x-1 text-sm font-medium text-slate-600 group-hover:text-primary transition-colors py-2 focus:outline-none">
      <span>ERPNext</span>
      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
    </button>
    
    {/* Mega Dropdown */}
    <div className="absolute top-full left-0 w-[900px] bg-white rounded-xl shadow-2xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden -translate-x-24">
      <div className="flex h-full">
        {/* Sidebar - Featured / Hero */}
        <div className="w-72 bg-slate-50 p-6 flex flex-col border-r border-slate-100 relative overflow-hidden">
           {/* Background decorative element */}
           <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full blur-3xl -mr-16 -mt-16 opacity-50 pointer-events-none"></div>
           
           <div className="relative z-10 mb-6">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl mb-4 shadow-sm border border-slate-100">
                <Layers size={24} />
              </div>
              <h3 className="font-bold text-slate-900 text-lg leading-tight mb-2">Intelligent ERP</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                The world's best open-source ERP, engineered for high-performance manufacturing & distribution.
              </p>
              <Link to="/services/erpnext">
                <Button size="sm" fullWidth className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200">
                  Platform Overview
                </Button>
              </Link>
           </div>

           <div className="mt-auto relative z-10 bg-white p-4 rounded-xl border border-slate-200 shadow-sm group/tool hover:border-secondary/50 transition-colors cursor-pointer">
               <Link to="/readiness-checker" className="block">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">New Tool</div>
                  <div className="font-bold text-slate-800 group-hover/tool:text-secondary transition-colors flex items-center gap-2">
                    <Activity size={16} className="text-secondary" /> Readiness Checker
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                    Assess your organization's maturity score in 2 minutes.
                  </p>
               </Link>
           </div>
        </div>

        {/* Main Content Grid */}
        <div className="flex-1 p-8 grid grid-cols-3 gap-x-8 gap-y-6 bg-white">
           
           {/* Col 1: Industries (Expanded) */}
           <div className="space-y-4 col-span-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                <Factory size={14} /> Industries
              </div>
              <ul className="space-y-2 h-[280px] overflow-y-auto pr-2 custom-scrollbar">
                <MegaMenuItem to="/industries/manufacturing" title="Manufacturing" desc="Discrete & Process" />
                <MegaMenuItem to="/industries/automotive" title="Automotive & OEM" desc="OEM & Supply Chain" />
                <MegaMenuItem to="/industries/trading" title="Retail & Trading" desc="Distribution & POS" />
                <MegaMenuItem to="/industries/healthcare" title="Healthcare" desc="Clinics & Hospitals" />
                <MegaMenuItem to="/industries/construction" title="Construction" desc="Project Control" />
                <MegaMenuItem to="/industries/education" title="Education" desc="LMS & SIS" />
                <MegaMenuItem to="/industries/mining" title="Mining" desc="Fleet & Royalty" />
                <MegaMenuItem to="/industries/oil-gas" title="Oil & Gas" desc="Asset Maintenance" />
              </ul>
           </div>
           
           {/* Col 2: Services */}
           <div className="space-y-4 col-span-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                <Wrench size={14} /> Services
              </div>
              <ul className="space-y-3">
                <MegaMenuItem to="/services/erpnext-vanilla" title="Success Pack" desc="Fixed Price Implementation" badge="Best Value" highlight />
                <MegaMenuItem to="/services/erpnext" title="Custom Solutions" desc="Tailored Enterprise Rollouts" />
                <MegaMenuItem to="/resource-augmentation" title="Hire Developers" desc="Staff Augmentation" />
                <MegaMenuItem to="/erpnext-amc-support" title="AMC & Support" desc="SLA-driven Maintenance" />
              </ul>
           </div>

           {/* Col 3: Resources */}
           <div className="space-y-4 col-span-1">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-2">
                <BookOpen size={14} /> Knowledge
              </div>
              <ul className="space-y-3">
                <MegaMenuItem to="/playbooks" title="Playbooks Library" desc="Standardized Recipes" />
                <MegaMenuItem to="/playbooks/multi-plant" title="Multi-Plant Mfg" />
                <MegaMenuItem to="/playbooks/hsrp" title="HSRP Workflow" />
                <li className="pt-2">
                  <Link to="/" className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    View Case Studies <PlayCircle size={12} />
                  </Link>
                </li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const MegaMenuItem: React.FC<{ to: string; title: string; desc?: string; badge?: string; highlight?: boolean }> = ({ to, title, desc, badge, highlight }) => (
  <li>
    <Link to={to} className="group/item block py-1">
      <div className="flex items-center justify-between">
        <span className={`text-sm font-medium transition-colors ${highlight ? 'text-blue-700' : 'text-slate-700 group-hover/item:text-primary'}`}>
          {title}
        </span>
        {badge && <span className="text-[9px] font-bold px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded border border-blue-100 uppercase tracking-tight">{badge}</span>}
      </div>
      {desc && <div className={`text-[10px] mt-0.5 transition-colors ${highlight ? 'text-blue-600/70' : 'text-slate-400 group-hover/item:text-slate-500'}`}>{desc}</div>}
    </Link>
  </li>
);