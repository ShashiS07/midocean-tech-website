
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Database, Server, Code2, Shuffle, Layers, ShieldCheck, Activity, Rocket } from 'lucide-react';

export const HireOdooTeam: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* 1. Hero: Focus on "Migration & Enterprise Scale" */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold mb-6 border border-indigo-500/30">
                        <Database size={14} className="mr-2" /> Enterprise Migration Experts
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Hire High-Performance <br/>
                        <span className="text-indigo-400">Odoo Teams</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                        Struggling with a slow Odoo instance? Stuck on version 13? 
                        Hire Python/PostgreSQL experts who specialize in Odoo performance tuning and version migration.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact">
                            <Button size="lg" variant="secondary" className="shadow-xl shadow-secondary/20 w-full sm:w-auto">
                                Book Odoo Audit
                            </Button>
                        </Link>
                        <Link to="/services/odoo">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800">
                                Migration Services
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                        <div className="font-bold">Technical Capabilities</div>
                        <div className="text-xs bg-indigo-500 px-2 py-1 rounded">v14 to v17</div>
                    </div>
                    <div className="space-y-4 text-sm">
                        <Capability icon={<Shuffle/>} text="Complex Data Migration (OpenUpgrade)" />
                        <Capability icon={<Activity/>} text="PostgreSQL Query Tuning" />
                        <Capability icon={<Code2/>} text="OWL Framework Components" />
                        <Capability icon={<Server/>} text="Odoo.sh & AWS Deployment" />
                        <Capability icon={<Layers/>} text="Multi-Company Setup" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. The Odoo Challenge */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-4">Why Generalist Developers Fail at Odoo</h2>
                  <p className="text-slate-600 text-lg">Odoo is a beast. It requires deep knowledge of its ORM and QWeb engine.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FeatureCard 
                      title="Performance Tuning"
                      desc="We don't just write code. We analyze the Postgres logs to ensure your Odoo instance handles 100k+ transactions without lagging."
                  />
                  <FeatureCard 
                      title="OWL Framework"
                      desc="Since v14, Odoo uses OWL (Odoo Web Library). Our frontend devs are experts in building responsive, modern Odoo views."
                  />
                  <FeatureCard 
                      title="Migration Safety"
                      desc="Upgrading Odoo is notoriously difficult. We write scripts to preserve your historical data and custom fields during the jump."
                  />
              </div>
          </div>
      </section>

      {/* 3. Models */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-primary mb-12">Engagement Models</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="text-indigo-600 mb-4"><Rocket size={40} className="mx-auto"/></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Project Squad</h3>
                      <p className="text-slate-600 mb-6">For Migration or New Implementation.</p>
                      <ul className="text-left space-y-2 text-sm text-slate-500 mb-8">
                          <li>• Fixed Scope & Timeline</li>
                          <li>• Includes PM & QA</li>
                          <li>• Warranty Period</li>
                      </ul>
                      <Link to="/contact"><Button variant="outline" fullWidth>Get Quote</Button></Link>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                      <div className="text-indigo-600 mb-4"><ShieldCheck size={40} className="mx-auto"/></div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">Staff Augmentation</h3>
                      <p className="text-slate-600 mb-6">For ongoing support & dev.</p>
                      <ul className="text-left space-y-2 text-sm text-slate-500 mb-8">
                          <li>• Dedicated Developer</li>
                          <li>• Monthly Billing</li>
                          <li>• Direct Communication</li>
                      </ul>
                      <Link to="/resource-augmentation"><Button variant="primary" fullWidth>Hire Developer</Button></Link>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary mb-6">Rescue your Odoo project.</h2>
              <p className="text-slate-600 mb-8 text-lg">
                  Don't let technical debt slow you down. Bring in the experts.
              </p>
              <Link to="/contact">
                  <Button size="lg">Contact Odoo Team</Button>
              </Link>
          </div>
      </section>
    </div>
  );
};

const Capability: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
    <div className="flex items-center gap-3 text-slate-300">
        <div className="text-indigo-400">{icon}</div>
        <span>{text}</span>
    </div>
);

const FeatureCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-indigo-200 transition-colors">
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);
