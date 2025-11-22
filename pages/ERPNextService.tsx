
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle, ArrowRight, Layers, ShieldCheck, Code2, 
  Database, Zap, Users, Settings, TrendingUp, 
  Server, RefreshCw, FileText, CheckSquare,
  Layout, ShoppingCart, Factory, Truck,
  GitMerge, Terminal, LifeBuoy, ChevronDown, ChevronUp,
  Play, MousePointerClick, Globe, Cpu, XCircle, Briefcase, Building2, Search,
  GraduationCap, Activity, HardHat, Stethoscope, BookOpen, Headphones, Package,
  Check, X, Wallet, ShoppingBag, PieChart, LayoutGrid, Box, Monitor, CreditCard,
  ChevronRight, AlertTriangle
} from 'lucide-react';

// Hook for ScrollSpy
const useScrollSpy = (ids: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      const positions = ids.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, top: 0, bottom: 0 };
        const top = el.getBoundingClientRect().top + scroll;
        return { id, top, bottom: top + el.offsetHeight };
      });

      const active = positions.find(pos => scroll >= pos.top - offset && scroll < pos.bottom - offset);
      if (active) {
        setActiveId(active.id);
      }
    };
    window.addEventListener('scroll', listener);
    listener(); // Trigger once on mount
    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);

  return activeId;
};

interface ERPNextServiceProps {
  region?: 'UK' | 'USA' | 'Dubai';
}

export const ERPNextService: React.FC<ERPNextServiceProps> = ({ region }) => {
  const [activeTab, setActiveTab] = useState<'mfg' | 'retail' | 'service' | 'health'>('mfg');
  const [currency, setCurrency] = useState<'USD' | 'INR' | 'GBP' | 'AED'>('USD');
  
  // Set default currency based on region prop
  useEffect(() => {
    if (region === 'UK') setCurrency('GBP');
    else if (region === 'Dubai') setCurrency('AED');
    else if (region === 'USA') setCurrency('USD');
    else setCurrency('USD'); // Default fallback
  }, [region]);

  const sections = [
    { id: 'about', label: 'What is ERPNext?' },
    { id: 'modules', label: 'Core Modules' },
    { id: 'industries', label: 'Industries' },
    { id: 'comparison', label: 'Why Switch?' },
    { id: 'pricing', label: 'Pricing' }
  ];

  const activeSection = useScrollSpy(sections.map(s => s.id), 150);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getHeroTitle = () => {
    if (region === 'UK') return "ERPNext Implementation Partner for UK Enterprises.";
    if (region === 'USA') return "Premier ERPNext Partner for USA Enterprises.";
    if (region === 'Dubai') return "#1 ERPNext Partner in Dubai & UAE.";
    return "The World's Best Open Source ERP.";
  };

  const getPrice = (type: 'vanilla' | 'sprint' | 'hourly') => {
      const prices = {
          'USD': { vanilla: '$10,000', sprint: '$2,500', hourly: '$25 - $40' },
          'INR': { vanilla: '₹8,50,000', sprint: '₹2,00,000', hourly: '₹2,000 - ₹3,500' },
          'GBP': { vanilla: '£8,000', sprint: '£2,000', hourly: '£25 - £35' },
          'AED': { vanilla: 'AED 36,500', sprint: 'AED 9,000', hourly: 'AED 100 - AED 150' }
      };
      return prices[currency][type];
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 relative">
      
      {/* 1. Modern Hero Section */}
      <section className="bg-slate-950 pt-32 pb-24 relative overflow-hidden text-white">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-300 text-xs font-bold mb-8 backdrop-blur-md animate-fade-in-up">
              <Layers size={14} />
              {region ? `${region} ERPNext Partner` : 'Certified Silver Partner'}
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
              {getHeroTitle()}
            </h1>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Stop paying the "SAP Tax". We engineer intelligent, self-learning ERPNext systems that scale with your business. <span className="text-white font-semibold">100% Open Source. Zero License Fees.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-900/50 w-full sm:w-auto font-bold px-8">
                  Start Implementation
                </Button>
              </Link>
              <Link to="/services/erpnext-vanilla">
                <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-white/10 hover:border-white w-full sm:w-auto">
                  View Success Pack
                </Button>
              </Link>
            </div>
          </div>

          {/* 3D Dashboard Graphic */}
          <div className="mt-20 relative mx-auto max-w-5xl perspective-1000 hidden md:block">
              <div className="relative bg-slate-900 border border-slate-800 rounded-xl shadow-2xl overflow-hidden transform rotate-x-12 scale-95 opacity-90 hover:opacity-100 hover:rotate-x-0 hover:scale-100 transition-all duration-700">
                  <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800 flex items-center px-4 gap-2 border-b border-slate-700">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="p-6 grid grid-cols-4 gap-6">
                      <div className="col-span-1 bg-slate-800/50 p-4 rounded-lg border border-slate-700 h-64"></div>
                      <div className="col-span-3 grid grid-cols-2 gap-4">
                          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 h-32"></div>
                          <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 h-32"></div>
                          <div className="col-span-2 bg-slate-800/50 p-4 rounded-lg border border-slate-700 h-28"></div>
                      </div>
                  </div>
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                          <div className="text-6xl font-bold text-white/5">ERPNext</div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* Sticky Sub-Nav */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14 overflow-x-auto hide-scrollbar gap-2 sm:gap-6">
           {sections.map(sec => (
              <button 
                key={sec.id} 
                onClick={() => scrollTo(sec.id)} 
                className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeSection === sec.id 
                    ? 'bg-slate-900 text-white' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {sec.label}
              </button>
           ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
          
          {/* 2. The Majestic Monolith (Information) */}
          <section id="about" className="scroll-mt-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <div className="inline-block px-3 py-1 rounded bg-blue-50 text-blue-600 text-xs font-bold mb-4 border border-blue-100">
                          THE MAJESTIC MONOLITH
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                          One Platform. <br/>
                          <span className="text-blue-600">Infinite Possibilities.</span>
                      </h2>
                      <div className="prose prose-lg text-slate-600">
                          <p>
                              ERPNext is the world's best 100% Open Source ERP. Unlike legacy systems that stitch together different apps, ERPNext is a <strong>Majestic Monolith</strong>.
                          </p>
                          <p>
                              It covers Accounting, HR, Manufacturing, CRM, and Inventory in a single codebase. This means your data is always in sync—no expensive connectors required.
                          </p>
                      </div>
                      <div className="mt-8 flex flex-col gap-3">
                          <CheckItem text="Built on the modern Frappe Framework (Python/JS)" />
                          <CheckItem text="100% Open Source & License Free" />
                          <CheckItem text="Used by 10,000+ Companies Globally" />
                      </div>
                      <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Learn more at</div>
                          <a href="https://frappe.io/erpnext" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors">
                              frappe.io/erpnext <ArrowRight size={16} />
                          </a>
                      </div>
                  </div>
                  <div className="bg-slate-100 rounded-3xl p-2 shadow-inner">
                      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
                          {/* Code Snippet Visual */}
                          <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-4">
                              <div className="w-3 h-3 rounded-full bg-red-400"></div>
                              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                              <div className="w-3 h-3 rounded-full bg-green-400"></div>
                              <div className="ml-auto text-xs font-mono text-slate-400">manufacturing.py</div>
                          </div>
                          <div className="font-mono text-sm space-y-2">
                              <div className="text-purple-600">class <span className="text-blue-600">WorkOrder</span>(Document):</div>
                              <div className="pl-4 text-slate-600">def <span className="text-amber-600">validate</span>(self):</div>
                              <div className="pl-8 text-green-600"># Check BOM validity</div>
                              <div className="pl-8 text-slate-800">self.validate_bom()</div>
                              <div className="pl-8 text-slate-800">self.set_actual_dates()</div>
                              <div className="pl-8 text-slate-500">...</div>
                          </div>
                          <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100 text-center">
                              <div className="text-blue-800 font-bold">Engineering DNA</div>
                              <div className="text-blue-600 text-xs">Extensible via Server Scripts & Custom Apps</div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* 3. Bento Grid Modules */}
          <section id="modules" className="scroll-mt-32">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything you need. Nothing you don't.</h2>
                  <p className="text-slate-600 max-w-2xl mx-auto">The most comprehensive suite of business applications.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(180px,auto)]">
                  {/* Large Box - Accounting */}
                  <div className="md:col-span-8 bg-blue-600 text-white rounded-3xl p-8 relative overflow-hidden group hover:shadow-xl transition-all cursor-pointer" onClick={() => document.location.href='/services/erpnext/accounting'}>
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                      <div className="relative z-10 h-full flex flex-col justify-between">
                          <div>
                              <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm"><Wallet className="text-white" /></div>
                              <h3 className="text-2xl font-bold mb-2">Financial Accounting</h3>
                              <p className="text-blue-100 max-w-md">Real-time General Ledger, Multi-currency, Banking Integration, and dimension-based Cost Center analysis.</p>
                          </div>
                          <div className="flex items-center gap-2 font-bold text-sm mt-4 group-hover:gap-3 transition-all">Explore <ArrowRight size={16}/></div>
                      </div>
                  </div>

                  {/* Small Box - HR */}
                  <div className="md:col-span-4 bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-200 transition-all group cursor-pointer" onClick={() => document.location.href='/services/erpnext/hr-payroll'}>
                      <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm text-purple-500"><Users /></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">HR & Payroll</h3>
                      <p className="text-slate-500 text-sm">Payroll processing, Leave management, and Employee lifecycle.</p>
                  </div>

                  {/* Tall Box - Manufacturing */}
                  <div className="md:col-span-4 md:row-span-2 bg-slate-900 text-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer" onClick={() => document.location.href='/services/erpnext/manufacturing'}>
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="relative z-10 h-full flex flex-col">
                          <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm text-amber-400"><Factory /></div>
                          <h3 className="text-2xl font-bold mb-2">Manufacturing</h3>
                          <p className="text-slate-400 text-sm mb-6">Multi-level BOMs, Production Planning, Work Orders, and Shop Floor job cards.</p>
                          <div className="mt-auto pt-4 border-t border-white/10">
                              <div className="flex items-center justify-between text-sm">
                                  <span className="text-slate-400">Capacity Planning</span>
                                  <CheckCircle size={16} className="text-green-500" />
                              </div>
                              <div className="flex items-center justify-between text-sm mt-2">
                                  <span className="text-slate-400">Subcontracting</span>
                                  <CheckCircle size={16} className="text-green-500" />
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Medium Box - Stock */}
                  <div className="md:col-span-4 bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-200 transition-all group cursor-pointer" onClick={() => document.location.href='/services/erpnext/inventory'}>
                      <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm text-teal-500"><Package /></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Inventory</h3>
                      <p className="text-slate-500 text-sm">Serialized inventory, Batch tracking, and Multi-warehouse management.</p>
                  </div>

                  {/* Medium Box - CRM */}
                  <div className="md:col-span-4 bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-blue-200 transition-all group cursor-pointer" onClick={() => document.location.href='/services/erpnext/crm'}>
                      <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm text-red-500"><TrendingUp /></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">CRM</h3>
                      <p className="text-slate-500 text-sm">Lead tracking, Opportunity pipeline, and automated Email campaigns.</p>
                  </div>

                  {/* Wide Box - Buying */}
                  <div className="md:col-span-8 bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all group cursor-pointer" onClick={() => document.location.href='/services/erpnext/buying'}>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                          <div className="bg-indigo-50 w-14 h-14 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0"><ShoppingBag size={28} /></div>
                          <div>
                              <h3 className="text-xl font-bold text-slate-900 mb-1">Buying & Procurement</h3>
                              <p className="text-slate-500">Supplier portal, RFQs, Purchase Orders, and automated material planning based on re-order levels.</p>
                          </div>
                          <div className="ml-auto">
                              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-slate-200 transition-colors">
                                  <ChevronRight size={16} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* 4. Comparison */}
          <section id="comparison" className="scroll-mt-32">
              <div className="bg-slate-900 rounded-3xl p-10 text-white overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative z-10 text-center mb-12">
                      <h2 className="text-3xl font-bold mb-4">Don't get locked in.</h2>
                      <p className="text-slate-400">Why smart CTOs are moving away from legacy ERPs.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                          <div className="text-slate-400 font-bold mb-4 text-sm uppercase tracking-wider">Legacy (SAP/Oracle)</div>
                          <div className="text-2xl font-bold mb-2 text-red-400">Expensive</div>
                          <p className="text-sm text-slate-500 mb-6">High licensing fees per user. Vendor lock-in.</p>
                          <XCircle className="mx-auto text-red-500/50" size={32} />
                      </div>
                      <div className="p-6 rounded-2xl bg-blue-600 border border-blue-500 text-center transform scale-105 shadow-2xl">
                          <div className="text-blue-200 font-bold mb-4 text-sm uppercase tracking-wider">ERPNext</div>
                          <div className="text-2xl font-bold mb-2 text-white">The Winner</div>
                          <p className="text-sm text-blue-100 mb-6">Zero license fees. 100% Customizable. Own your data.</p>
                          <CheckCircle className="mx-auto text-white" size={40} />
                      </div>
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center">
                          <div className="text-slate-400 font-bold mb-4 text-sm uppercase tracking-wider">SaaS (Zoho/Odoo)</div>
                          <div className="text-2xl font-bold mb-2 text-amber-400">Rigid</div>
                          <p className="text-sm text-slate-500 mb-6">Pay-walled features. Hard to customize logic.</p>
                          <AlertTriangle className="mx-auto text-amber-500/50" size={32} />
                      </div>
                  </div>
              </div>
          </section>

          {/* 5. Pricing / Engagement */}
          <section id="pricing" className="scroll-mt-32">
              <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Engagement Models</h2>
                  <p className="text-slate-600">From fixed-price packages to dedicated enterprise squads.</p>
                  
                  {/* Currency Toggle */}
                  <div className="inline-flex bg-white p-1 rounded-xl border border-slate-200 shadow-sm mt-6">
                      {['USD', 'INR', 'GBP', 'AED'].map((cur) => (
                         <button 
                            key={cur}
                            onClick={() => setCurrency(cur as any)}
                            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${currency === cur ? 'bg-slate-900 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'}`}
                        >
                            {cur}
                        </button>
                      ))}
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1 bg-blue-500"></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Success Pack</h3>
                      <div className="text-sm text-slate-500 mb-6">Fixed Scope. Rapid Implementation.</div>
                      <div className="text-4xl font-bold text-slate-900 mb-6">{getPrice('vanilla')}</div>
                      <ul className="space-y-4 mb-8">
                          <CheckItem text="Core Modules Configuration" />
                          <CheckItem text="Data Import (Masters)" />
                          <CheckItem text="User Training (Remote)" />
                          <CheckItem text="6-8 Weeks Delivery" />
                      </ul>
                      <Link to="/services/erpnext-vanilla">
                          <Button fullWidth variant="primary">View Details</Button>
                      </Link>
                  </div>

                  <div className="bg-slate-900 text-white p-8 rounded-3xl border border-slate-800 shadow-xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Recommended</div>
                      <h3 className="text-xl font-bold text-white mb-2">Enterprise Custom</h3>
                      <div className="text-slate-400 text-sm mb-6">For complex workflows & integrations.</div>
                      <div className="text-4xl font-bold text-white mb-6">Custom Quote</div>
                      <ul className="space-y-4 mb-8">
                          <CheckItem text="Custom App Development" light />
                          <CheckItem text="API Integrations" light />
                          <CheckItem text="On-site Consulting" light />
                          <CheckItem text="Dedicated Support Pod" light />
                      </ul>
                      <Link to="/contact">
                          <Button fullWidth variant="secondary">Book Discovery</Button>
                      </Link>
                  </div>
              </div>
          </section>

      </div>
    </div>
  );
};

// Helpers
const CheckItem = ({ text, light }: { text: string, light?: boolean }) => (
    <div className="flex items-center gap-3">
        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${light ? 'bg-white/20 text-white' : 'bg-blue-50 text-blue-600'}`}>
            <Check size={12} strokeWidth={3} />
        </div>
        <span className={`text-sm font-medium ${light ? 'text-slate-300' : 'text-slate-700'}`}>{text}</span>
    </div>
);
