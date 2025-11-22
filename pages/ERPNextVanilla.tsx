import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle, 
  XCircle, 
  Package, 
  Calendar, 
  FileText, 
  AlertTriangle, 
  Layers, 
  ShoppingCart, 
  Factory, 
  Database, 
  ChevronDown, 
  ChevronUp,
  ShieldCheck,
  Briefcase,
  Users,
  Download,
  Check,
  Clock,
  ArrowRight,
  LayoutList,
  Settings,
  Stethoscope,
  HardHat,
  Wrench,
  LifeBuoy,
  ShoppingBag,
  X
} from 'lucide-react';

// ScrollSpy Hook (Local to avoid file creation)
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
      if (active) setActiveId(active.id);
    };
    window.addEventListener('scroll', listener);
    listener();
    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);
  return activeId;
};

export const ERPNextVanilla: React.FC = () => {
  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'scope', label: 'Scope & Inclusions' },
    { id: 'modules', label: 'Module Details' },
    { id: 'methodology', label: '12-Week Plan' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' }
  ];

  const activeSection = useScrollSpy(sections.map(s => s.id), 150);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 relative">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 pt-24 pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(37, 99, 235, 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
        }}></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/30 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold mb-6 uppercase tracking-wider backdrop-blur-sm">
              <Package size={14} className="mr-2" />
              ERPNext Success Pack
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Standardized ERPNext.<br/>
              <span className="text-blue-400">Guaranteed Delivery.</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl">
              A fixed-scope, fixed-price implementation package designed for SMEs. 
              Includes <strong>Manufacturing, HRMS, Accounting, and Stock</strong>—deployed in 12 weeks using our proven template methodology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={() => scrollTo('pricing')} size="lg" variant="secondary" className="shadow-lg shadow-secondary/20 w-full sm:w-auto font-bold">
                View Pricing Package
              </Button>
              <Button onClick={() => scrollTo('scope')} size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-white/5 hover:border-white w-full sm:w-auto">
                Explore Scope
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Sticky Sub-Nav (Replaces Sidebar) */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14 overflow-x-auto hide-scrollbar gap-2 sm:gap-6">
           {sections.map(sec => (
              <button 
                key={sec.id} 
                onClick={() => scrollTo(sec.id)} 
                className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeSection === sec.id 
                    ? 'bg-blue-50 text-blue-600 border border-blue-100' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {sec.label}
              </button>
           ))}
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          
          {/* Main Content Column - Centered */}
          <div className="space-y-24">

              {/* 2. Overview */}
              <section id="overview" className="scroll-mt-32">
                  <div className="text-center mb-12 lg:text-left">
                      <h2 className="text-3xl font-bold text-slate-900">Why Choose the Success Pack?</h2>
                      <p className="text-slate-500 mt-4 text-lg">
                          Traditional ERP projects fail because of scope creep. The Success Pack reverses this by starting with a standard, proven configuration that fits 90% of SME needs.
                      </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <BenefitCard 
                        icon={<Clock className="text-blue-500" />}
                        title="Speed to Value"
                        desc="Go live in 12-16 weeks. We use pre-configured templates for Manufacturing and Accounting to skip the lengthy design phase."
                      />
                      <BenefitCard 
                        icon={<ShieldCheck className="text-blue-500" />}
                        title="Risk Free"
                        desc="You know exactly what you get. The scope, deliverables, and cost are frozen before we start. No surprises."
                      />
                      <BenefitCard 
                        icon={<LayoutList className="text-purple-500" />}
                        title="Best Practices"
                        desc="Don't reinvent the wheel. Adopt industry-standard workflows for BOMs, Payroll, and Stock that thousands of companies use."
                      />
                  </div>
              </section>

              {/* 3. Scope of Work */}
              <section id="scope" className="scroll-mt-32">
                  <div className="mb-12">
                      <h2 className="text-3xl font-bold text-primary mb-4">Scope of Work & Inclusions</h2>
                      <p className="text-slate-600">
                          The Success Pack is designed to provide essential configuration, training, and support for ERPNext implementation.
                      </p>
                  </div>

                  {/* Part A: General Terms */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-6">
                              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Wrench size={24}/></div>
                              <h3 className="font-bold text-xl text-slate-900">Customization & Consulting</h3>
                          </div>
                          <div className="space-y-4">
                              <ScopeItem text="Hours valid for 2 months from contract start." />
                              <ScopeItem text="Designing and implementing 2 Custom Print Formats." />
                              <ScopeItem text="Up to 30 Custom Fields added to existing DocTypes." />
                              <ScopeItem text="Creation of simple Custom DocTypes if required." />
                              <div className="flex gap-3 text-sm text-slate-400 italic mt-4 pt-4 border-t border-slate-100">
                                  <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                                  <span>Excludes heavy core modifications or complex workflows.</span>
                              </div>
                          </div>
                      </div>

                      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                          <div className="flex items-center gap-3 mb-6">
                              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Database size={24}/></div>
                              <h3 className="font-bold text-xl text-slate-900">Data, Training & Support</h3>
                          </div>
                          <div className="space-y-4">
                              <ScopeItem text="Import up to 3,000 Customers/Suppliers." />
                              <ScopeItem text="Import up to 500 Items in Item Master." />
                              <ScopeItem text="Opening/Closing Balances only (No backdated history)." />
                              <ScopeItem text="Remote training via Google Meet (Sessions recorded)." />
                              <ScopeItem text="Support via Partner Portal (Mon-Fri)." />
                          </div>
                      </div>
                  </div>
              </section>
              
              {/* 3.5 Module Details */}
              <section id="modules" className="scroll-mt-32">
                  <h3 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Module-wise Functional Scope</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <ModuleScopeCard 
                          title="Sales & CRM" 
                          icon={<ShoppingCart />} 
                          inclusions={[
                              "Quotations, Sales Orders, Invoices",
                              "Up to 2 Custom Print Formats",
                              "Customer Master & Pricing Rules",
                              "Lead & Opportunity Tracking"
                          ]}
                          exclusions={[
                              "Sales Forecasting / Pipeline Reporting",
                              "Third-party integrations (e.g., Shopify)"
                          ]}
                      />
                      <ModuleScopeCard 
                          title="Purchase & Inventory" 
                          icon={<ShoppingBag />} 
                          inclusions={[
                              "Supplier Quotations, POs, Receipts",
                              "Item, Warehouse, Stock Ledger",
                              "Valuation: FIFO, Moving Average",
                              "Stock Entries: Transfer, Issue, Receipt"
                          ]}
                          exclusions={[
                              "Automated Procurement Planning",
                              "RFID or Warehouse Automation"
                          ]}
                      />
                      <ModuleScopeCard 
                          title="Accounting" 
                          icon={<FileText />} 
                          inclusions={[
                              "Standard Chart of Accounts",
                              "Sales/Purchase Invoice Setup",
                              "Journal, Payment Entry, Bank Rec",
                              "P&L, Balance Sheet Reports"
                          ]}
                          exclusions={[
                              "Multi-currency Consolidation",
                              "Custom Financial Reports"
                          ]}
                      />
                      <ModuleScopeCard 
                          title="Manufacturing" 
                          icon={<Factory />} 
                          inclusions={[
                              "BOM, Work Orders, Production Planning",
                              "Custom fields in Mfg DocTypes",
                              "Custom BOM Print Formats",
                              "Production tracking reports"
                          ]}
                          exclusions={[
                              "Custom algorithms or workflows",
                              "Machinery/PLC Integration"
                          ]}
                      />
                  </div>
              </section>

              {/* 4. Methodology */}
              <section id="methodology" className="scroll-mt-32">
                  <h2 className="text-3xl font-bold text-primary mb-12 text-center lg:text-left">The 12-Week Rollout</h2>
                  <div className="space-y-8">
                      <TimelineRow 
                          week="Weeks 1-2"
                          phase="Discovery & Blueprint"
                          desc="We map your processes to standard ERPNext workflows. We identify gaps and define the exact configuration needed. Deliverable: Signed Blueprint Document."
                          icon={<Briefcase />}
                      />
                      <TimelineRow 
                          week="Weeks 3-6"
                          phase="Configuration & Data Prep"
                          desc="We configure the system (COA, Warehouses, Workflows). Simultaneously, your team cleans master data using our standardized Excel templates."
                          icon={<Settings />}
                      />
                      <TimelineRow 
                          week="Weeks 7-10"
                          phase="UAT & Training"
                          desc="We upload your master data and train your key users. You perform User Acceptance Testing (UAT) to verify the system works as expected."
                          icon={<Users />}
                      />
                      <TimelineRow 
                          week="Weeks 11-12"
                          phase="Go-Live & Handover"
                          desc="Cutover to production. We upload opening balances (Stock, GL, AR/AP) and provide intensive support for the first 2 weeks of live operations."
                          icon={<CheckCircle />}
                          isLast
                      />
                  </div>
              </section>

              {/* 5. Pricing */}
              <section id="pricing" className="scroll-mt-32">
                  <div className="bg-slate-900 text-white rounded-3xl p-10 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                      
                      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                          <div>
                              <div className="inline-block px-3 py-1 rounded bg-blue-500/20 text-blue-400 text-xs font-bold mb-4 border border-blue-500/30">
                                  LIMITED TIME OFFER
                              </div>
                              <h2 className="text-3xl font-bold mb-6">Transparent, Fixed Pricing.</h2>
                              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                                  Get a world-class ERP implementation for less than the cost of a junior developer's annual salary.
                              </p>
                              <div className="space-y-4">
                                  <PricingCheck text="No user license fees (100% Open Source)" />
                                  <PricingCheck text="Includes 8 Core Modules" />
                                  <PricingCheck text="Includes Server Setup Guidance" />
                                  <PricingCheck text="Includes 60 Hours of Consulting Time" />
                              </div>
                          </div>

                          <div className="bg-white text-slate-800 rounded-2xl p-1 overflow-hidden shadow-2xl transform rotate-1">
                              <div className="bg-slate-50 p-8 border-b border-slate-100 text-center">
                                  <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">Success Pack</div>
                                  <div className="text-5xl font-bold text-primary mb-1">₹8,50,000</div>
                                  <div className="text-xl font-medium text-slate-400">+ GST</div>
                                  <p className="text-slate-500 text-sm mt-4">One-time implementation fee</p>
                              </div>
                              <div className="p-8">
                                  <h4 className="font-bold text-center mb-6">Payment Schedule</h4>
                                  <div className="space-y-3 mb-8 text-sm">
                                      <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-slate-600">Kickoff</span><span className="font-bold">30%</span></div>
                                      <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-slate-600">Config Complete</span><span className="font-bold">30%</span></div>
                                      <div className="flex justify-between border-b border-slate-100 pb-2"><span className="text-slate-600">UAT Sign-off</span><span className="font-bold">30%</span></div>
                                      <div className="flex justify-between"><span className="text-slate-600">Go-Live</span><span className="font-bold">10%</span></div>
                                  </div>
                                  <Link to="/contact">
                                      <Button size="lg" fullWidth className="shadow-xl shadow-primary/10">
                                          Request Proposal
                                      </Button>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* 6. FAQ */}
              <section id="faq" className="scroll-mt-32">
                  <h2 className="text-2xl font-bold text-primary mb-8">Common Questions</h2>
                  <div className="space-y-4">
                    <FAQItem q="What if we need customization?" a="We recommend going live with the Standard version first (Phase 1). Once your team is comfortable, we can take up customization projects in Phase 2." />
                    <FAQItem q="Who provides the server?" a="You do. We recommend Frappe Cloud ($25-$50/mo) for the best experience. We can also deploy on your AWS or DigitalOcean account." />
                    <FAQItem q="Can we add more users later?" a="Yes! ERPNext is open source. You can add unlimited users. Our scope covers training for up to 25 users, but the system supports hundreds." />
                  </div>
              </section>

          </div>
      </div>

      {/* Footer CTA */}
      <section className="py-16 bg-blue-50 border-t border-blue-100 text-center">
          <div className="max-w-4xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to standardize?</h2>
              <p className="text-slate-600 mb-8">
                  Stop struggling with spreadsheets. Get a world-class ERP system in 12 weeks.
              </p>
              <Link to="/contact">
                  <Button size="lg">Get Started Today</Button>
              </Link>
          </div>
      </section>
    </div>
  );
};

// --- Subcomponents ---

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="text-left p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
        <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 text-slate-800">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
    </div>
);

const ScopeItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex gap-3 text-sm text-slate-700">
      <CheckCircle size={16} className="text-slate-900 shrink-0 mt-0.5" />
      <span>{text}</span>
  </div>
);

const ModuleScopeCard: React.FC<{ title: string; icon: React.ReactNode; inclusions: string[]; exclusions: string[] }> = ({ title, icon, inclusions, exclusions }) => (
  <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="bg-slate-50 p-4 border-b border-slate-100 flex items-center gap-3">
          <div className="p-2 bg-white rounded-lg text-slate-700 shadow-sm">{React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}</div>
          <h3 className="font-bold text-lg text-slate-900">{title}</h3>
      </div>
      <div className="p-6">
          <div className="mb-4">
             <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-3 flex items-center gap-1"><Check size={12} /> Inclusions</div>
             <ul className="space-y-2">
                 {inclusions.map((item, i) => (
                     <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                         <div className="w-1 h-1 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                         {item}
                     </li>
                 ))}
             </ul>
          </div>
          <div>
             <div className="text-xs font-bold text-red-500 uppercase tracking-wider mb-3 flex items-center gap-1 opacity-80"><X size={12} /> Exclusions</div>
             <ul className="space-y-2">
                 {exclusions.map((item, i) => (
                     <li key={i} className="text-sm text-slate-400 flex items-start gap-2">
                         <div className="w-1 h-1 rounded-full bg-slate-300 mt-2 shrink-0"></div>
                         {item}
                     </li>
                 ))}
             </ul>
          </div>
      </div>
  </div>
);

const TimelineRow: React.FC<{ week: string; phase: string; desc: string; icon: React.ReactNode; isLast?: boolean }> = ({ week, phase, desc, icon, isLast }) => (
    <div className="flex gap-6 md:gap-10">
        <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-100 flex items-center justify-center text-blue-600 shrink-0 z-10">
                {React.cloneElement(icon as React.ReactElement<any>, { size: 20 })}
            </div>
            {!isLast && <div className="w-0.5 bg-slate-100 flex-grow my-2"></div>}
        </div>
        <div className="pb-12">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">{week}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">{phase}</h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl">{desc}</p>
        </div>
    </div>
);

const PricingCheck: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
            <Check size={12} strokeWidth={3} />
        </div>
        <span className="text-slate-300 font-medium">{text}</span>
    </div>
);

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-800">{q}</span>
        {isOpen ? <ChevronUp className="text-blue-600" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
            {a}
        </div>
      </div>
    </div>
  );
};