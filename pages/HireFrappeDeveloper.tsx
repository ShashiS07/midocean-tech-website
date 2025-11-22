
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Cpu, Smartphone, Layout, Database, ArrowRight, Box, Globe, Lock } from 'lucide-react';

export const HireFrappeDeveloper: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* 1. Hero: Focus on "Custom App / Framework" */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold mb-6 border border-purple-500/30">
                <Box size={14} className="mr-2" /> Low-Code Framework Experts
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hire Expert <br/>
                <span className="text-purple-400">Frappe Framework Developers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Go beyond ERPNext. Build custom SaaS products, internal tools, and customer portals using the power of Frappe + React/Vue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                    <Button size="lg" variant="secondary" className="shadow-xl shadow-secondary/20 w-full sm:w-auto">
                        Start Your Project
                    </Button>
                </Link>
                <Link to="/services/custom-erp">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800">
                        View Use Cases
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* 2. Why Frappe? */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-primary mb-6">Why build on Frappe?</h2>
                      <p className="text-slate-600 text-lg mb-6">
                          Frappe is a full-stack web application framework in Python & JS. It handles the boring stuff (Auth, Permissions, PDF generation, Email) so we can focus on your business logic.
                      </p>
                      <ul className="space-y-4">
                          <Benefit title="Rapid Development" desc="Build CRUD apps 10x faster than Django/Node from scratch." />
                          <Benefit title="Built-in Admin UI" desc="Get a powerful Desk interface out of the box." />
                          <Benefit title="REST API Native" desc="Every DocType automatically generates a REST API." />
                      </ul>
                  </div>
                  <div className="bg-purple-50 rounded-3xl p-10 text-center border border-purple-100">
                       <div className="text-purple-900 font-bold text-2xl mb-8">What we build</div>
                       <div className="grid grid-cols-2 gap-4">
                           <AppType icon={<Layout/>} label="LMS Platforms" />
                           <AppType icon={<Database/>} label="Inventory Systems" />
                           <AppType icon={<Globe/>} label="B2B Portals" />
                           <AppType icon={<Smartphone/>} label="PWA Apps" />
                       </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 3. Technologies */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Our Frappe Stack</h2>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
                  <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-800 font-bold text-xl">Py</div>
                      <span className="font-bold text-slate-600">Python</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-blue-500 font-bold text-xl">Re</div>
                      <span className="font-bold text-slate-600">React</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-green-500 font-bold text-xl">Vu</div>
                      <span className="font-bold text-slate-600">Vue.js</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-red-500 font-bold text-xl">Re</div>
                      <span className="font-bold text-slate-600">Redis</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm text-slate-800 font-bold text-xl">Do</div>
                      <span className="font-bold text-slate-600">Docker</span>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary mb-6">Have a SaaS idea?</h2>
              <p className="text-slate-600 mb-8 text-lg">
                  Don't spend months building the backend. Hire Frappe developers and launch your MVP in weeks.
              </p>
              <Link to="/contact">
                  <Button size="lg">Estimate My Project</Button>
              </Link>
          </div>
      </section>
    </div>
  );
};

const Benefit: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="flex items-start gap-4">
        <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0 mt-1">
            <ArrowRight size={14} />
        </div>
        <div>
            <h3 className="font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
        </div>
    </div>
);

const AppType: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center justify-center gap-2 h-24">
        <div className="text-purple-500">{icon}</div>
        <div className="font-bold text-slate-800 text-sm">{label}</div>
    </div>
);
