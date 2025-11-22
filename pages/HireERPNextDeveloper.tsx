
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Code2, Terminal, Database, Server, Check, AlertTriangle, GitMerge, Cpu } from 'lucide-react';

export const HireERPNextDeveloper: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* 1. Hero: Focus on "Code Quality & Tech" */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #2563eb 25%, transparent 25%, transparent 75%, #2563eb 75%, #2563eb)', backgroundSize: '20px 20px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-300 text-xs font-bold mb-6 border border-green-500/30">
                <Terminal size={14} className="mr-2" /> Python & JS Experts
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Hire Vetted <br/>
                <span className="text-green-400">ERPNext Developers</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Need a custom API integration? A complex report? Hire developers who write standard, upgrade-safe code using the Frappe Framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                    <Button size="lg" variant="secondary" className="shadow-xl shadow-secondary/20 w-full sm:w-auto">
                        View Developer Profiles
                    </Button>
                </Link>
                <Link to="/resource-augmentation">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800">
                        How We Vet Talent
                    </Button>
                </Link>
            </div>
        </div>
      </section>

      {/* 2. Tech Stack Grid */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-4">The Tech Stack Matters</h2>
                  <p className="text-slate-600">Our developers don't just "know ERPNext". They are full-stack engineers.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <TechCard icon={<Code2/>} title="Python 3.10+" desc="Server scripts, custom apps, background jobs." />
                  <TechCard icon={<Terminal/>} title="JavaScript (ES6)" desc="Client scripts, Frappe UI, React components." />
                  <TechCard icon={<Database/>} title="MariaDB / Redis" desc="Query optimization, caching, database tuning." />
                  <TechCard icon={<Server/>} title="DevOps" desc="Docker, CI/CD pipelines, Nginx config." />
              </div>
          </div>
      </section>

      {/* 3. The Quality Promise */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-primary mb-6">No Spaghetti Code. Ever.</h2>
                      <p className="text-slate-600 mb-6 text-lg">
                          Many freelancers edit the core ERPNext files directly, making upgrades impossible. We strictly follow the <strong>"Custom App"</strong> architecture.
                      </p>
                      <div className="space-y-4">
                          <CheckItem text="100% Upgrade Safe Customizations" />
                          <CheckItem text="Strict PEP8 Linting Standards" />
                          <CheckItem text="Git Version Control for all changes" />
                          <CheckItem text="Unit Tests for critical logic" />
                      </div>
                  </div>
                  <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl font-mono text-sm text-slate-300 border border-slate-700">
                      <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-700">
                          <span>custom_api.py</span>
                          <span className="text-green-400 text-xs">Pass: 12/12 Tests</span>
                      </div>
                      <div className="space-y-2 opacity-80">
                          <p><span className="text-purple-400">@frappe.whitelist</span>()</p>
                          <p><span className="text-purple-400">def</span> <span className="text-yellow-300">sync_inventory</span>(item_code):</p>
                          <p className="pl-4 text-slate-500"># Validated Logic</p>
                          <p className="pl-4">doc = frappe.get_doc(<span className="text-green-300">"Item"</span>, item_code)</p>
                          <p className="pl-4"><span className="text-purple-400">if</span> <span className="text-purple-400">not</span> doc:</p>
                          <p className="pl-8">frappe.throw(<span className="text-green-300">"Item Not Found"</span>)</p>
                          <p className="pl-4"><span className="text-purple-400">return</span> {"status": "success"}</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. Use Cases */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">What can they build?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <UseCase title="API Integrations" desc="Connect ERPNext to Shopify, Amazon, Banks, or 3PL Logistics providers using REST API." />
                  <UseCase title="Custom Reports" desc="Complex SQL Query reports or Script Reports with charts and drill-down capabilities." />
                  <UseCase title="Print Formats" desc="Pixel-perfect HTML/Jinja/CSS print layouts for Invoices, POs, and Delivery Notes." />
              </div>
          </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Need a dev for 40 hours or 40 months?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                  Our flexible engagement models let you scale up or down instantly.
              </p>
              <Link to="/contact">
                  <Button size="lg" variant="secondary">Hire a Developer</Button>
              </Link>
          </div>
      </section>
    </div>
  );
};

const TechCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-green-400 transition-colors text-center">
        <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-slate-800 mb-4 shadow-sm">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
        </div>
        <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-xs text-slate-500">{desc}</p>
    </div>
);

const CheckItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-3">
        <Check size={20} className="text-green-500 shrink-0" />
        <span className="text-slate-700 font-medium">{text}</span>
    </div>
);

const UseCase: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="border border-slate-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
        <h3 className="font-bold text-lg text-primary mb-3">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
);
