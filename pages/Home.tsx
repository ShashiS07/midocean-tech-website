
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  ArrowRight, 
  CheckCircle, 
  Layers, 
  Users, 
  Globe, 
  BarChart3, 
  Zap, 
  BrainCircuit, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ChevronRight, 
  Quote,
  BookOpen,
  Code2,
  Factory,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Mail,
} from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full font-sans">
      {/* 1. Hero Section - H1 Priority for SEO */}
      <section className="relative pt-24 pb-24 lg:pb-32 overflow-hidden bg-slate-50" aria-label="Introduction">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-blue-100 text-blue-700 text-xs font-bold shadow-sm">
                <Sparkles size={12} className="mr-2 text-blue-500" />
                ERPNext Silver Partner
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-[1.15] tracking-tight">
                Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-400">ERP & Technology</span> Partner for Modern Enterprises
              </h1>
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                We engineer <strong>Self-Learning ERP Systems</strong> using <strong>ERPNext, Odoo, and AI</strong>. Transform your manufacturing, trading, or service business with data-driven workflows that scale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/contact" title="Schedule a consultation">
                  <Button size="lg" className="shadow-xl shadow-primary/20 w-full sm:w-auto hover:-translate-y-0.5 transition-transform">
                    Book Discovery Call
                  </Button>
                </Link>
                <Link to="/services/erpnext" title="Learn about ERPNext">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/50 backdrop-blur-sm hover:bg-white">
                    Explore ERPNext
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-500 pt-4 border-t border-slate-200/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></div>
                  <span className="font-bold text-slate-700">ERPNext Silver Partner</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-slate-400" />
                  <span className="font-medium">India • UK • USA • GCC</span>
                </div>
              </div>
            </div>
            
            {/* Visual Element - Enterprise Dashboard Graphic */}
            <div className="relative lg:h-[600px] flex items-center justify-center hidden md:flex perspective-1000">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 to-blue-100/40 rounded-full blur-[80px] opacity-60"></div>
                 
                 {/* Main Dashboard Card */}
                 <div className="relative bg-white/90 backdrop-blur-2xl p-6 rounded-2xl shadow-2xl border border-white/60 transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 z-20">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-white">
                            <BrainCircuit size={20} className="text-secondary" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">AI Demand Forecasting</div>
                            <div className="text-[10px] text-slate-400">Real-time Inference</div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600 font-bold bg-green-50 px-2.5 py-1 rounded-full border border-green-100 flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Live
                        </div>
                    </div>

                    {/* Chart Area */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-end">
                           <div>
                             <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Predicted Demand</div>
                             <div className="text-3xl font-bold text-slate-800">2,840 <span className="text-sm font-medium text-green-500 ml-1">▲ 12%</span></div>
                           </div>
                           <div className="text-right">
                              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-1">Accuracy</div>
                              <div className="font-bold text-primary text-lg">98.4%</div>
                           </div>
                        </div>
                        
                        <div className="h-32 bg-slate-50/50 rounded-xl w-full flex items-end justify-between p-4 gap-3 border border-slate-100">
                             {[35, 45, 60, 50, 75, 85, 95].map((h, i) => (
                                 <div key={i} className="relative w-full group">
                                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                      {h * 10} Units
                                    </div>
                                    <div 
                                      className={`w-full rounded-t-sm transition-all duration-1000 ease-out ${i > 4 ? 'bg-gradient-to-t from-secondary to-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.3)]' : 'bg-slate-200'}`} 
                                      style={{ height: `${h}%` }}
                                    ></div>
                                 </div>
                             ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-indigo-50/80 rounded-xl border border-indigo-100">
                                <div className="text-xs text-indigo-500 font-bold mb-1">Auto-Reordered</div>
                                <div className="text-xl font-bold text-indigo-700">1,240 Units</div>
                                <div className="w-full bg-indigo-200 h-1 rounded-full mt-2 overflow-hidden">
                                  <div className="bg-indigo-500 h-full w-[75%]"></div>
                                </div>
                            </div>
                            <div className="p-4 bg-blue-50/80 rounded-xl border border-blue-100">
                                <div className="text-xs text-blue-600 font-bold mb-1">Cost Saved</div>
                                <div className="text-xl font-bold text-blue-700">$45,200</div>
                                <div className="w-full bg-blue-200 h-1 rounded-full mt-2 overflow-hidden">
                                  <div className="bg-blue-500 h-full w-[45%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
                 
                 {/* Floating Badge - Speed */}
                 <div className="absolute top-20 -left-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow z-30 max-w-[200px]">
                    <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 font-bold shadow-inner">
                        <Zap size={24} />
                    </div>
                    <div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Process Speed</div>
                        <div className="font-bold text-slate-800 text-lg leading-none mt-0.5">10x Faster</div>
                    </div>
                 </div>

                 {/* Floating Badge - Code */}
                 <div className="absolute -bottom-8 -right-4 bg-slate-900 p-5 rounded-2xl shadow-2xl border border-slate-700 z-30">
                    <div className="flex items-center gap-2 mb-2 border-b border-slate-700 pb-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">prediction.py</div>
                    </div>
                    <div className="font-mono text-[10px] leading-relaxed">
                      <div className="text-purple-400">def <span className="text-blue-400">forecast_demand</span>(data):</div>
                      <div className="text-slate-400 pl-2">model = load_model(<span className="text-green-400">'v2.5'</span>)</div>
                      <div className="text-slate-400 pl-2">return model.predict(data)</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar - Social Proof */}
      <section className="border-y border-slate-200 bg-white py-10" aria-label="Trusted Clients">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted by Modern Enterprises Globally</p>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-50 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0">
                {/* 
                   TO UPLOAD YOUR LOGOS: 
                   1. Upload your image files to a hosting service or your project's public/assets folder.
                   2. Replace the 'src' string below with your image URL (e.g., "/assets/logo1.png" or "https://example.com/logo.png").
                */}
                <img src="https://placehold.co/120x40/transparent/1e293b?text=Acme+Corp" alt="Acme Corp" className="h-8 md:h-10 w-auto object-contain" />
                <img src="https://placehold.co/120x40/transparent/1e293b?text=Global+Tech" alt="Global Tech" className="h-8 md:h-10 w-auto object-contain" />
                <img src="https://placehold.co/120x40/transparent/1e293b?text=Future+Mfg" alt="Future Mfg" className="h-8 md:h-10 w-auto object-contain" />
                <img src="https://placehold.co/120x40/transparent/1e293b?text=Logistics+Inc" alt="Logistics Inc" className="h-8 md:h-10 w-auto object-contain" />
                <img src="https://placehold.co/120x40/transparent/1e293b?text=Health+Plus" alt="Health Plus" className="h-8 md:h-10 w-auto object-contain" />
            </div>
        </div>
      </section>

      {/* 3. Why Partner with Midocean - Value Proposition */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Why Leading Enterprises Choose Us</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
               We don't just implement software; we engineer competitive advantages. Our unique blend of deep technical capability and business acumen sets us apart.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
             {/* Card 1: Engineering */}
             <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 group hover:-translate-y-1">
                 <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                         <Code2 size={28} />
                     </div>
                     <div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full">
                         Python & React Experts
                     </div>
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3">Engineering DNA</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                     Most partners just configure. We engineer. We build robust custom apps, complex integrations, and high-performance extensions that standard ERPs can't handle.
                 </p>
                 <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-500 font-medium">
                     <span className="flex items-center gap-1"><CheckCircle size={14} className="text-blue-500"/> Complex Architecture</span>
                     <span className="flex items-center gap-1"><CheckCircle size={14} className="text-blue-500"/> Scalable Code</span>
                 </div>
             </div>

             {/* Card 2: Global Delivery */}
             <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-200 transition-all duration-300 group hover:-translate-y-1">
                 <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                         <Globe size={28} />
                     </div>
                     <div className="px-3 py-1 bg-sky-50 text-sky-700 text-xs font-bold rounded-full">
                         India • UK • US
                     </div>
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3">Global Hybrid Model</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                     Get the best of both worlds: The cost-efficiency of our India development center combined with the reliability of local onshore project management.
                 </p>
                 <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-500 font-medium">
                     <span className="flex items-center gap-1"><CheckCircle size={14} className="text-sky-500"/> Overlapping Timezones</span>
                     <span className="flex items-center gap-1"><CheckCircle size={14} className="text-sky-500"/> Cultural Alignment</span>
                 </div>
             </div>

             {/* Card 3: Domain Expertise */}
             <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 group hover:-translate-y-1">
                 <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                         <Factory size={28} />
                     </div>
                     <div className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full">
                         Mfg & Trading Focus
                     </div>
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3">Deep Domain Expertise</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                     We speak your language. From multi-level BOMs in manufacturing to HSRP compliance in automotive, our consultants understand your floor-level reality.
                 </p>
                 <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-500 font-medium">
                     <span className="flex items-center gap-1"><CheckCircle size={14} className="text-amber-500"/> Process First</span>
                     <span className="flex items-center gap-1"><CheckCircle size={14} className="text-amber-500"/> ROI Driven</span>
                 </div>
             </div>

             {/* Card 4: Accelerators */}
             <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-purple-200 transition-all duration-300 group hover:-translate-y-1">
                 <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                         <Zap size={28} />
                     </div>
                     <div className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold rounded-full">
                         Speed to Value
                     </div>
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-3">Proprietary Accelerators</h3>
                 <p className="text-slate-600 leading-relaxed mb-4">
                     Don't start from zero. We bring pre-built industry playbooks, migration scripts, and code modules that cut implementation time by 40%.
                 </p>
                 <div className="pt-4 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-500 font-medium">
                     <span className="flex items-center gap-1"><CheckCircle size={14} className="text-purple-500"/> Proven Templates</span>
                     <span className="flex items-center gap-1"><CheckCircle size={14} className="text-purple-500"/> Rapid Go-Live</span>
                 </div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. Services Grid - Core Offerings */}
      <section className="py-24 bg-slate-50" aria-label="Our Services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-primary mb-4">End-to-End Technology Solutions</h2>
              <p className="text-slate-600">
                From implementing the world's best open-source ERPs to building bespoke AI solutions, we cover your entire digital roadmap.
              </p>
            </div>
            <Link to="/contact" className="hidden md:flex items-center text-secondary font-bold hover:gap-2 transition-all mt-6 md:mt-0">
              View Capability Deck <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard 
              icon={<Layers className="text-blue-600" />}
              title="Intelligent ERPNext"
              desc="Full-cycle implementation of the world's best open-source ERP, customized for manufacturing & trading."
              link="/services/erpnext"
              badge="Best Seller"
            />
            <ServiceCard 
              icon={<BarChart3 className="text-purple-600" />}
              title="Odoo Migration"
              desc="Seamless migration from legacy systems or older Odoo versions to the latest Enterprise edition."
              link="/services/odoo"
            />
            <ServiceCard 
              icon={<BrainCircuit className="text-sky-600" />}
              title="Custom AI Apps"
              desc="Bespoke React/Python applications integrated with LLMs to automate complex workflows."
              link="/services/custom-erp"
            />
            <ServiceCard 
              icon={<Users className="text-amber-600" />}
              title="Staff Augmentation"
              desc="Hire pre-vetted Frappe Developers, Python Experts, and Odoo Consultants on demand."
              link="/resource-augmentation"
              highlight
            />
          </div>
          
          <div className="mt-8 text-center md:hidden">
             <Link to="/contact" className="text-secondary font-bold inline-flex items-center">
                View Capability Deck <ArrowRight size={18} className="ml-2" />
             </Link>
          </div>
        </div>
      </section>

      {/* 5. ERPNext Playbooks - Differentiator */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{
             backgroundImage: 'linear-gradient(45deg, #0f172a 25%, transparent 25%, transparent 75%, #0f172a 75%, #0f172a), linear-gradient(45deg, #0f172a 25%, transparent 25%, transparent 75%, #0f172a 75%, #0f172a)',
             backgroundSize: '20px 20px',
             backgroundPosition: '0 0, 10px 10px'
         }}></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-4 border border-secondary/20">
                        <BookOpen size={14} /> Proven Recipes, No Guesswork
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">ERPNext Playbooks Library</h2>
                    <p className="text-slate-400 max-w-2xl">
                        We don't believe in trial and error. Access our standardized implementation recipes, architecture diagrams, and process flows for your industry.
                    </p>
                </div>
                <Link to="/playbooks" className="hidden md:block">
                    <Button variant="secondary">Explore Library</Button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { id: 'multi-plant', title: 'Multi-Plant Manufacturing', icon: <FactoryIcon /> },
                    { id: 'hsrp', title: 'HSRP & Number Plate Ops', icon: <CarIcon /> },
                    { id: 'trading', title: 'Trading & Distribution', icon: <TruckIcon /> },
                    { id: 'construction', title: 'Construction Projects', icon: <HardHatIcon /> }
                ].map((playbook) => (
                    <Link key={playbook.id} to={`/playbooks/${playbook.id}`} className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-secondary/50 transition-all group cursor-pointer h-full flex flex-col backdrop-blur-sm">
                        <div className="p-3 bg-slate-800 rounded-lg w-fit mb-4 group-hover:bg-secondary group-hover:text-white transition-colors text-slate-300">
                            {playbook.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors">{playbook.title}</h3>
                        <div className="mt-auto pt-4 flex items-center text-xs text-slate-400 gap-2 group-hover:text-white transition-colors border-t border-white/5">
                            View Architecture <ArrowRight size={12} />
                        </div>
                    </Link>
                ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
                <Link to="/playbooks">
                    <Button variant="secondary" fullWidth>Explore Library</Button>
                </Link>
            </div>
         </div>
      </section>

      {/* 6. Stats & Case Studies - Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 border-b border-slate-100 pb-12">
             {[
                 { number: '250+', label: 'Custom Plugins' },
                 { number: '9+', label: 'Years Experience' },
                 { number: '30+', label: 'Team Members' },
                 { number: '10+', label: 'Odoo Projects' }
             ].map((stat, index) => (
                 <div key={index} className="text-center group cursor-default">
                     <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 group-hover:-translate-y-1 transition-transform duration-300 inline-block font-sans">{stat.number}</div>
                     <div className="text-sm font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                 </div>
             ))}
          </div>

          {/* Case Studies Header */}
          <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl font-bold text-primary mb-2">Real Results, Real Impact</h2>
                <p className="text-slate-600 max-w-xl">See how we've helped organizations like yours scale efficiently.</p>
             </div>
             <Link to="/" className="hidden md:flex items-center text-secondary font-bold hover:gap-2 transition-all">
                View all case studies <ArrowRight size={18} className="ml-2" />
             </Link>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="group cursor-pointer flex flex-col h-full">
                 <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-slate-100 border border-slate-100 group-hover:shadow-lg transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1565514020176-6c2235b8b369?q=80&w=800&auto=format&fit=crop" 
                      alt="Manufacturing Plant" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary shadow-sm border border-white/20">Manufacturing</div>
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    300% Efficiency Boost for HSRP Plant
                 </h3>
                 <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    Implemented a custom ERPNext solution with automated embossing machine integration, reducing dispatch errors to near zero.
                 </p>
                 <div className="flex items-center text-secondary text-sm font-bold mt-auto">
                    Read Story <ChevronRight size={16} className="ml-1" />
                 </div>
              </article>

              <article className="group cursor-pointer flex flex-col h-full">
                 <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-slate-100 border border-slate-100 group-hover:shadow-lg transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop" 
                      alt="Logistics Warehouse" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary shadow-sm border border-white/20">Logistics</div>
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    AI Supply Chain for EV Start-up
                 </h3>
                 <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    Built a predictive inventory model using Python & Odoo that cut warehousing costs by 22% in the first quarter.
                 </p>
                 <div className="flex items-center text-secondary text-sm font-bold mt-auto">
                    Read Story <ChevronRight size={16} className="ml-1" />
                 </div>
              </article>

              <article className="group cursor-pointer flex flex-col h-full">
                 <div className="relative overflow-hidden rounded-2xl mb-4 aspect-video bg-slate-100 border border-slate-100 group-hover:shadow-lg transition-all">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop" 
                      alt="Healthcare Tablet" 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary shadow-sm border border-white/20">Healthcare</div>
                 </div>
                 <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    HIPAA-Compliant Clinic Management
                 </h3>
                 <p className="text-slate-600 text-sm mb-4 line-clamp-3 flex-grow">
                    A multi-location clinic chain migrated from legacy software to a centralized, secure ERPNext cloud instance.
                 </p>
                 <div className="flex items-center text-secondary text-sm font-bold mt-auto">
                    Read Story <ChevronRight size={16} className="ml-1" />
                 </div>
              </article>
          </div>
        </div>
      </section>

      {/* 7. Testimonials - Social Proof */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">Trusted by Visionaries</h2>
            <p className="text-slate-600">
              Hear from the leaders who are redefining their industries with Midocean's technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow flex flex-col">
               <Quote className="text-secondary/20 absolute top-6 right-6" size={48} />
               <p className="text-slate-600 mb-6 relative z-10 leading-relaxed italic flex-grow">
                 "We evaluated SAP and Oracle, but Midocean's implementation of ERPNext gave us 90% of the utility at 10% of the TCO. Their AI forecasting module paid for itself in 3 months."
               </p>
               <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                 <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary font-bold border border-slate-200 text-xs">JD</div>
                 <div>
                   <div className="font-bold text-primary text-sm">James Davidson</div>
                   <div className="text-xs text-slate-500">CTO, FutureMfg Automotive</div>
                 </div>
               </div>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow flex flex-col">
               <Quote className="text-secondary/20 absolute top-6 right-6" size={48} />
               <p className="text-slate-600 mb-6 relative z-10 leading-relaxed italic flex-grow">
                  "Finding developers who actually understand accounting and manufacturing is rare. The resource augmentation team from Midocean hit the ground running in 48 hours."
               </p>
               <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                 <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary font-bold border border-slate-200 text-xs">SK</div>
                 <div>
                   <div className="font-bold text-primary text-sm">Sarah Khan</div>
                   <div className="text-xs text-slate-500">VP Engineering, TechFlow UK</div>
                 </div>
               </div>
             </div>
             
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow flex flex-col">
               <Quote className="text-secondary/20 absolute top-6 right-6" size={48} />
               <p className="text-slate-600 mb-6 relative z-10 leading-relaxed italic flex-grow">
                 "Our multi-country Odoo rollout was stalled for months. Midocean's architects came in, fixed the architecture, and we went live in UAE and India simultaneously."
               </p>
               <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                 <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-primary font-bold border border-slate-200 text-xs">AR</div>
                 <div>
                   <div className="font-bold text-primary text-sm">Ahmed Rashid</div>
                   <div className="text-xs text-slate-500">Director, GCC Logistics</div>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. Insights & Events - Authority */}
      <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                  <div className="max-w-2xl">
                      <h2 className="text-3xl font-bold text-primary mb-4">Insights from the Lab</h2>
                      <p className="text-slate-600">
                          Technical guides, webinars, and architectural patterns from our engineering team.
                      </p>
                  </div>
                  <Link to="/" className="hidden md:flex items-center text-secondary font-bold hover:gap-2 transition-all mt-4 md:mt-0">
                      View All Insights <ArrowRight size={18} className="ml-2" />
                  </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Blog 1 */}
                  <BlogCard 
                     imageUrl="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
                     category="Engineering"
                     title="Scaling ERPNext for 10k+ Concurrent Users"
                     date="Sep 28, 2024"
                  />
                  {/* Blog 2 */}
                  <BlogCard 
                     imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop"
                     category="AI & ML"
                     title="Integrating OpenAI Assistant API with Frappe"
                     date="Oct 05, 2024"
                  />
                  {/* Event Card (Combined) */}
                  <div className="rounded-xl bg-primary text-white p-8 flex flex-col justify-between relative overflow-hidden group cursor-pointer hover:shadow-xl transition-all">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-20 rounded-bl-full transition-transform group-hover:scale-110"></div>
                      <div>
                          <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/10 text-secondary text-xs font-bold mb-4">
                              <Calendar size={12} /> Upcoming Webinar
                          </div>
                          <h3 className="text-xl font-bold mb-2">Generative AI in ERPNext</h3>
                          <p className="text-slate-300 text-sm">Join us for a live demo of our new AI agents for inventory management.</p>
                      </div>
                      <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                          <div>
                              <div className="text-lg font-bold">15 Oct</div>
                              <div className="text-xs text-slate-400">2:00 PM BST</div>
                          </div>
                          <Button size="sm" variant="secondary">Register</Button>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 9. Global Presence / Final CTA */}
      <section className="bg-slate-50 py-24 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Ready to engineer your future?</h2>
              <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
                  Whether you need a full digital transformation or a dedicated team of experts, Midocean is your partner in complexity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                      <Button size="lg" className="shadow-xl shadow-primary/20 w-full sm:w-auto">
                        Schedule a Discovery Call
                      </Button>
                  </Link>
                  <Link to="/contact">
                      <Button size="lg" variant="outline" className="bg-white w-full sm:w-auto">
                        View Capability Deck
                      </Button>
                  </Link>
              </div>
              <div className="mt-12 pt-12 border-t border-slate-200 flex flex-wrap justify-center gap-8 text-slate-400 opacity-70">
                  <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <MapPin size={16} /> Mumbai (HQ)
                  </div>
                  <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <MapPin size={16} /> London
                  </div>
                  <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <MapPin size={16} /> New York
                  </div>
                  <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-default">
                      <MapPin size={16} /> Dubai
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

// Icons for Playbooks
const FactoryIcon = () => <Layers size={24} />;
const CarIcon = () => <div className="relative"><div className="w-6 h-4 border-2 border-current rounded-sm"></div><div className="w-2 h-2 rounded-full border-2 border-current absolute -bottom-1 -left-1 bg-slate-800"></div><div className="w-2 h-2 rounded-full border-2 border-current absolute -bottom-1 -right-1 bg-slate-800"></div></div>;
const TruckIcon = () => <div className="relative"><div className="w-5 h-4 border-2 border-current rounded-sm"></div><div className="w-3 h-3 border-2 border-current absolute -right-2 bottom-1 rounded-sm"></div></div>;
const HardHatIcon = () => <div className="w-6 h-4 border-t-4 border-current rounded-t-full"></div>;

// Subcomponents
const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; link: string; highlight?: boolean; badge?: string }> = ({ icon, title, desc, link, highlight, badge }) => (
  <Link to={link} className={`relative group p-6 rounded-2xl transition-all duration-300 border flex flex-col h-full hover:-translate-y-1 ${highlight ? 'bg-primary text-white border-primary shadow-xl shadow-primary/20' : 'bg-white text-slate-600 border-slate-100 hover:border-secondary/50 hover:shadow-lg'}`} title={title}>
    {badge && (
      <div className="absolute -top-3 right-6 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide shadow-sm">
        {badge}
      </div>
    )}
    <div className={`mb-6 p-3 rounded-xl w-fit transition-colors ${highlight ? 'bg-white/10' : 'bg-slate-50 group-hover:bg-slate-100'}`}>
      {icon}
    </div>
    <h3 className={`text-xl font-bold mb-3 ${highlight ? 'text-white' : 'text-primary'}`}>{title}</h3>
    <p className={`text-sm leading-relaxed mb-6 flex-grow ${highlight ? 'text-slate-300' : 'text-slate-500'}`}>
      {desc}
    </p>
    <div className={`flex items-center text-sm font-bold mt-auto ${highlight ? 'text-secondary' : 'text-secondary'} group-hover:gap-2 transition-all`}>
      Explore <ArrowRight size={16} className="ml-1" />
    </div>
  </Link>
);

const BlogCard: React.FC<{ imageUrl: string; category: string; title: string; date: string }> = ({ imageUrl, category, title, date }) => (
    <article className="group cursor-pointer flex flex-col h-full">
        <div className="h-48 rounded-xl mb-4 overflow-hidden border border-slate-100 shadow-sm relative">
           <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
           <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors"></div>
        </div>
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <span className="text-secondary font-bold uppercase tracking-wide">{category}</span>
            <time>{date}</time>
        </div>
        <h3 className="text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-3 leading-tight">
            {title}
        </h3>
        <div className="flex items-center text-slate-400 text-sm font-medium group-hover:text-primary transition-colors mt-auto">
            Read Article <ArrowRight size={14} className="ml-1" />
        </div>
    </article>
);
