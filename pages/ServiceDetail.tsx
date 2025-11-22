
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  BarChart3, 
  Globe, 
  ShieldCheck, 
  Settings, 
  BrainCircuit,
  ChevronDown,
  ChevronUp,
  Clock,
  Code2,
  Database,
  Zap,
  Users,
  Layout,
  ChevronRight,
  ClipboardCheck
} from 'lucide-react';

type ServiceData = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  modules?: string[];
  benefits: { title: string; desc: string; icon: React.ReactNode }[];
  process: { title: string; desc: string }[];
  techStack: string[];
  faqs: { q: string; a: string }[];
};

// --- Data Configuration ---

const services: Record<string, ServiceData> = {
  'erpnext': {
    title: "Intelligent ERPNext Implementation",
    subtitle: "The #1 Open Source ERP, supercharged with Python & AI.",
    description: "ERPNext is not just an ERP; it's a programmable platform. As certified partners, we leverage its Python/Frappe core to deliver AI-driven workflows, automated reporting, and infinite scalability. We don't just implement; we engineer competitive advantages.",
    icon: <Layers className="text-blue-400" size={32} />,
    features: [
      "AI-Assisted Data Entry & Reconciliation",
      "Custom Python Scripts for Complex Logic",
      "Predictive Inventory Planning",
      "Automated Bank Reconciliation",
      "Seamless Integration (Shopify, WooCommerce)",
      "Enterprise-grade Cloud Hosting"
    ],
    modules: ["Accounting", "Manufacturing", "HR & Payroll", "CRM", "Buying", "Asset Mgmt", "Quality Control"],
    benefits: [
      { title: "Zero License Fees", desc: "Stop paying per-user taxes. Own your data and your software code completely.", icon: <ShieldCheck size={20} /> },
      { title: "100% Extensible", desc: "Built on Frappe (Python/JS), allowing us to build any custom feature you can imagine.", icon: <Code2 size={20} /> },
      { title: "Rapid Deployment", desc: "Go live in weeks, not years, thanks to our pre-configured industry playbooks.", icon: <Zap size={20} /> }
    ],
    process: [
      { title: "Discovery & BPML", desc: "We map your 'As-Is' vs 'To-Be' processes and define the Business Process Master List." },
      { title: "Conference Room Pilot", desc: "We demonstrate key flows in a vanilla instance to validate fit and identify gaps." },
      { title: "Configuration & Dev", desc: "Our engineers configure the system and build custom scripts/reports." },
      { title: "UAT & Training", desc: "Your team validates the system with real data while we provide role-based training." },
      { title: "Go-Live & Hypercare", desc: "We stand by you during cutover and provide intensive support for the first month." }
    ],
    techStack: ["Python", "MariaDB", "Redis", "Node.js", "Socket.io", "Frappe"],
    faqs: [
      { q: "Is ERPNext really suitable for large enterprises?", a: "Yes. We have implemented ERPNext for organizations with 500+ concurrent users and millions of transaction rows, utilizing separate read-replicas and background workers." },
      { q: "How long does a typical implementation take?", a: "For a standard manufacturing setup, it takes 12-16 weeks. Simple trading setups can be done in 6-8 weeks." },
      { q: "Can you migrate my data from Tally/SAP?", a: "Absolutely. We have proprietary scripts to cleanse and migrate Masters and Opening Balances from legacy systems." }
    ]
  },
  'odoo': {
    title: "Smart Odoo Migration & Services",
    subtitle: "Upgrade to a more connected, automated Odoo experience.",
    description: "Unlock the full potential of Odoo with our expert Python developers. We specialize in complex migrations, performance tuning for high-volume transactions, and integrating Odoo with external AI/ML services.",
    icon: <BarChart3 className="text-purple-400" size={32} />,
    features: [
      "Strategic Migration (v14/v15 to v17)",
      "High-Performance PostgreSQL Tuning",
      "Odoo.sh & AWS Cloud Architecture",
      "Custom AI Module Development",
      "QuickBooks/NetSuite to Odoo Migration",
      "Dedicated Functional Support"
    ],
    modules: ["Sales", "Inventory", "Accounting", "Website", "Studio", "Field Service"],
    benefits: [
      { title: "Modular Architecture", desc: "Start with what you need and add apps as you grow.", icon: <Layout size={20} /> },
      { title: "Modern UI/UX", desc: "One of the most user-friendly interfaces in the ERP market today.", icon: <Users size={20} /> },
      { title: "Global Ecosystem", desc: "Supported by a massive community and thousands of third-party apps.", icon: <Globe size={20} /> }
    ],
    process: [
      { title: "Audit & Health Check", desc: "We analyze your existing database and custom code for compatibility." },
      { title: "Migration Strategy", desc: "We plan the upgrade path (OpenUpgrade or Enterprise scripts)." },
      { title: "Data Cleansing", desc: "Removing duplicate partners, items, and unused data before moving." },
      { title: "Validation", desc: "Testing critical workflows in the new version environment." },
      { title: "Switchover", desc: "Final delta migration and DNS switchover." }
    ],
    techStack: ["Python", "PostgreSQL", "XML", "QWeb", "JavaScript", "Nginx"],
    faqs: [
      { q: "Do you support Odoo Community or Enterprise?", a: "We support both, but for larger organizations requiring accounting and mobile features, we recommend Enterprise." },
      { q: "Can you fix my slow Odoo instance?", a: "Yes. We specialize in PostgreSQL tuning and code profiling to optimize slow queries." }
    ]
  },
  'custom-erp': {
    title: "AI-Native Custom Development",
    subtitle: "Bespoke software when off-the-shelf isn't enough.",
    description: "We build next-generation enterprise applications using the Frappe Framework, React, and Flutter. By integrating LLMs (OpenAI, Claude) and Machine Learning models directly into your workflow, we automate the cognitive load of your business.",
    icon: <BrainCircuit className="text-blue-400" size={32} />,
    features: [
      "LLM-powered Document Processing",
      "Frappe Framework Custom Apps",
      "React/Vue.js Modern Frontends",
      "Mobile Apps (Flutter/React Native)",
      "Microservices Architecture",
      "Real-time IoT Integrations"
    ],
    benefits: [
      { title: "Total Ownership", desc: "You own the IP. No vendor lock-in or recurring license costs.", icon: <ShieldCheck size={20} /> },
      { title: "Exact Fit", desc: "Software adapted to your unique process, not the other way around.", icon: <Settings size={20} /> },
      { title: "Future Ready", desc: "Built on modern stacks designed for AI and high scalability.", icon: <Zap size={20} /> }
    ],
    process: [
      { title: "Product Discovery", desc: "Workshops to define the MVP scope and user personas." },
      { title: "UX/UI Design", desc: "Wireframing and high-fidelity prototypes." },
      { title: "Agile Development", desc: "2-week sprints with continuous delivery and feedback." },
      { title: "QA & Security", desc: "Automated testing and vulnerability scanning." },
      { title: "Deployment", desc: "CI/CD setup on AWS/Azure/Google Cloud." }
    ],
    techStack: ["React", "Frappe", "Python", "Docker", "Kubernetes", "AWS"],
    faqs: [
      { q: "Why use Frappe Framework instead of Django/Node?", a: "Frappe gives us a head start with built-in auth, permissions, and API generation, saving 40% dev time." },
      { q: "Do you build mobile apps too?", a: "Yes, we build cross-platform apps using Flutter or React Native that integrate seamlessly with your backend." }
    ]
  },
  'implementation': {
    title: "Agile Implementation & Rollout",
    subtitle: "Data-driven methodologies ensuring 100% adoption.",
    description: "Our implementation process is designed to minimize disruption and maximize ROI. We use agile sprints adapted for ERP, ensuring you see value in weeks, not years. We focus heavily on data integrity and user acceptance.",
    icon: <Settings className="text-slate-400" size={32} />,
    features: [
      "Detailed Gap Analysis & BPML",
      "Conference Room Pilots (CRP)",
      "Automated Data Migration Scripts",
      "User Acceptance Testing (UAT)",
      "Go-live Hypercare Support",
      "Change Management Workshops"
    ],
    benefits: [
      { title: "Risk Mitigation", desc: "Phased rollouts reduce the risk of operational disruption.", icon: <ShieldCheck size={20} /> },
      { title: "User Adoption", desc: "Heavy focus on training and change management ensures teams actually use the system.", icon: <Users size={20} /> },
      { title: "Best Practices", desc: "We bring industry standard workflows, so you don't reinvent the wheel.", icon: <Globe size={20} /> }
    ],
    process: [
      { title: "Initiate", desc: "Project Charter and Team formation." },
      { title: "Design", desc: "Solution Blueprinting and Gap Analysis." },
      { title: "Build", desc: "Configuration and Customization." },
      { title: "Validate", desc: "UAT and Integration Testing." },
      { title: "Deploy", desc: "Cutover and Go-Live." }
    ],
    techStack: ["Jira", "Git", "Selenium", "Excel"],
    faqs: [
      { q: "Do you provide on-site implementation?", a: "Yes, for critical phases like CRP and Go-Live, we can deploy consultants on-site globally." }
    ]
  },
  'support': {
    title: "Managed Support & AMS",
    subtitle: "24/7 reliability for mission-critical systems.",
    description: "Your ERP is the heart of your business. Our Application Management Services (AMS) ensure it never skips a beat. We provide proactive monitoring, security patching, and on-demand development support.",
    icon: <ShieldCheck className="text-green-400" size={32} />,
    features: [
      "SLA-backed L1/L2/L3 Support",
      "Database Performance Optimization",
      "Security Audits & Patching",
      "Custom Report Building",
      "Version Upgrades",
      "Dedicated Success Manager"
    ],
    benefits: [
      { title: "Peace of Mind", desc: "Guaranteed response times and uptime.", icon: <CheckCircle size={20} /> },
      { title: "Continuous Improvement", desc: "Regular audits to suggest new features and optimizations.", icon: <Zap size={20} /> },
      { title: "Cost Effective", desc: "Cheaper than hiring a full-time in-house team.", icon: <BarChart3 size={20} /> }
    ],
    process: [
      { title: "Ticket Logged", desc: "User reports issue via Portal/Email." },
      { title: "Triage", desc: "L1 Support categorizes priority." },
      { title: "Resolution", desc: "L2/L3 team fixes the issue." },
      { title: "Deployment", desc: "Fix deployed to UAT, then Prod." },
      { title: "Review", desc: "Root Cause Analysis (RCA) for critical incidents." }
    ],
    techStack: ["Zendesk", "Frappe Desk", "Nagios", "New Relic"],
    faqs: [
      { q: "What are your standard SLA times?", a: "Critical issues are responded to within 1 hour. High priority within 4 hours." }
    ]
  }
};

// --- Subcomponents ---

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none group"
      >
        <span className={`font-semibold text-slate-800 transition-colors ${isOpen ? 'text-primary' : 'group-hover:text-primary'}`}>
          {q}
        </span>
        {isOpen ? <ChevronUp className="text-secondary" size={20} /> : <ChevronDown className="text-slate-400 group-hover:text-secondary" size={20} />}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
};

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  if (!serviceId || !services[serviceId]) {
    return <Navigate to="/" replace />;
  }

  const data = services[serviceId];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* Dark Enterprise Hero */}
      <section className="bg-primary text-white relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 z-0 opacity-10" style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           {/* Breadcrumb */}
           <nav className="flex items-center text-xs text-slate-400 mb-8 space-x-2 uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={12} />
              <Link to="/services/erpnext" className="hover:text-white transition-colors">Services</Link>
              <ChevronRight size={12} />
              <span className="text-secondary font-bold">{data.title}</span>
           </nav>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium text-blue-300">
                      {data.icon} <span className="ml-2">Enterprise Grade Solution</span>
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{data.title}</h1>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                    {data.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                     <Link to="/contact">
                        <Button size="lg" variant="secondary">Schedule Consultation</Button>
                     </Link>
                     <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">Download Brochure</Button>
                  </div>
              </div>
              
              {/* Hero Stats/Visual */}
              <div className="hidden lg:block">
                 <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 transform rotate-1 hover:rotate-0 transition-all duration-500">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-secondary mb-1">100%</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">Success Rate</div>
                        </div>
                        <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                            <div className="text-3xl font-bold text-secondary mb-1">45+</div>
                            <div className="text-xs text-slate-400 uppercase tracking-wide">Enterprise Clients</div>
                        </div>
                        <div className="col-span-2 p-4 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
                            <div>
                               <div className="text-sm font-bold text-white">Certified Partners</div>
                               <div className="text-xs text-slate-400">Official Ecosystem Members</div>
                            </div>
                            <ShieldCheck className="text-secondary" size={28} />
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Tech Stack Ticker */}
      <div className="bg-slate-900 border-b border-slate-800 py-6 overflow-hidden">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-start items-center gap-8 text-slate-500 text-sm font-mono">
             <span className="uppercase tracking-widest text-slate-600 text-xs hidden md:block">Tech Stack:</span>
             {data.techStack.map((tech, i) => (
                 <span key={i} className="flex items-center gap-2 hover:text-slate-300 transition-colors">
                    <Database size={14} /> {tech}
                 </span>
             ))}
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-16">
               
               {/* Overview */}
               <section>
                   <h2 className="text-2xl font-bold text-primary mb-6">The Midocean Difference</h2>
                   <p className="text-slate-600 text-lg leading-loose mb-8">
                       {data.description}
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {data.benefits.map((benefit, i) => (
                          <div key={i} className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                              <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center text-primary mb-4">
                                  {benefit.icon}
                              </div>
                              <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                              <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                          </div>
                      ))}
                   </div>
               </section>

               {/* Implementation Process */}
               <section>
                  <h2 className="text-2xl font-bold text-primary mb-8">Implementation Methodology</h2>
                  <div className="relative border-l-2 border-slate-200 pl-8 space-y-12">
                      {data.process.map((step, i) => (
                          <div key={i} className="relative group">
                              <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white border-2 border-slate-300 group-hover:border-secondary group-hover:scale-110 transition-all z-10">
                                  <div className="w-2 h-2 bg-slate-300 rounded-full absolute top-1.5 left-1.5 group-hover:bg-secondary transition-colors"></div>
                              </div>
                              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                                  {step.title}
                              </h3>
                              <p className="text-slate-600 mt-2 max-w-xl">{step.desc}</p>
                          </div>
                      ))}
                  </div>
               </section>

               {/* Core Features List */}
               <section>
                   <h2 className="text-2xl font-bold text-primary mb-6">Key Capabilities</h2>
                   <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                           {data.features.map((feat, i) => (
                               <div key={i} className="flex items-start gap-3">
                                   <CheckCircle className="text-secondary shrink-0 mt-0.5" size={18} />
                                   <span className="text-slate-700 font-medium text-sm">{feat}</span>
                               </div>
                           ))}
                       </div>
                   </div>
               </section>

               {/* Modules (if applicable) */}
               {data.modules && (
                   <section>
                       <h2 className="text-2xl font-bold text-primary mb-6">Integrated Modules</h2>
                       <div className="flex flex-wrap gap-3">
                           {data.modules.map((mod, i) => (
                               <span key={i} className="px-4 py-2 bg-slate-100 hover:bg-white hover:shadow-sm border border-slate-200 rounded-lg text-slate-600 text-sm font-medium transition-all cursor-default">
                                   {mod}
                               </span>
                           ))}
                       </div>
                   </section>
               )}

               {/* Readiness Checker Promo for ERPNext */}
               {serviceId === 'erpnext' && (
                  <section className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl border border-white/10">
                      {/* Visuals/Content */}
                      <div className="relative z-10">
                        <div className="flex items-start gap-4">
                             <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                                 <ClipboardCheck size={24} />
                             </div>
                             <div>
                                <h2 className="text-2xl font-bold mb-2 text-white">Is your organization ready for ERP?</h2>
                                <p className="text-slate-300 mb-8 max-w-lg text-lg leading-relaxed">
                                  Take our 2-minute interactive assessment to evaluate your process maturity, data hygiene, and team readiness. Get a personalized risk report instantly.
                                </p>
                                <Link to="/readiness-checker">
                                  <Button size="lg" variant="secondary" className="shadow-lg shadow-secondary/20">
                                    Launch Readiness Assessment <ArrowRight size={16} className="ml-2" />
                                  </Button>
                                </Link>
                             </div>
                        </div>
                      </div>
                      {/* Background decor */}
                      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600 opacity-10 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
                  </section>
               )}

               {/* FAQs */}
               <section>
                   <h2 className="text-2xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
                   <div className="bg-white rounded-2xl border border-slate-200 px-8 py-4 shadow-sm">
                       {data.faqs.map((faq, i) => (
                           <FAQItem key={i} q={faq.q} a={faq.a} />
                       ))}
                   </div>
               </section>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                    {/* Main CTA Card */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-blue-300"></div>
                        <h3 className="text-xl font-bold text-primary mb-2">Ready to transform?</h3>
                        <p className="text-slate-500 text-sm mb-6">
                            Book a 30-min discovery call with our Solution Architect. No sales pressure, just technical validation.
                        </p>
                        <div className="space-y-3">
                            <Link to="/contact">
                                <Button fullWidth size="lg" className="shadow-lg shadow-primary/10">
                                    Book Discovery Call
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button fullWidth variant="outline">
                                    Request Pricing
                                </Button>
                            </Link>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
                                <div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
                            </div>
                            <div className="text-xs text-slate-500">
                                <span className="font-bold text-primary">30+</span> Experts available
                            </div>
                        </div>
                    </div>

                    {/* Contact Snippet */}
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-900 mb-2">Have a quick question?</h4>
                        <p className="text-xs text-slate-500 mb-4">
                            Email our pre-sales team directly for a rapid response.
                        </p>
                        <a href="mailto:business@midocean.tech" className="flex items-center gap-2 text-sm font-bold text-secondary hover:text-primary transition-colors">
                            business@midocean.tech <ArrowRight size={14} />
                        </a>
                    </div>

                    {/* Certifications */}
                    <div className="flex gap-4 justify-center opacity-50 grayscale hover:grayscale-0 transition-all">
                        <div className="h-10 w-20 bg-slate-200 rounded"></div>
                        <div className="h-10 w-20 bg-slate-200 rounded"></div>
                        <div className="h-10 w-20 bg-slate-200 rounded"></div>
                    </div>
                </div>
            </div>

         </div>
      </div>
    </div>
  );
};
