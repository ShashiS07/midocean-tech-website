
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Briefcase, ArrowRight, CheckCircle, Globe, FileText, Layout, Settings } from 'lucide-react';

export const HireERPNextConsultant: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* 1. Hero: Focus on "Process & Business Logic" */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold mb-6 border border-amber-500/30">
                        <Briefcase size={14} className="mr-2" /> Functional Experts
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Hire Expert <br/>
                        <span className="text-amber-400">ERPNext Consultants</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                        Developers write code, but Consultants understand business. Hire experts who can map your Manufacturing, Accounting, and HR processes to ERPNext workflows accurately.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link to="/contact">
                            <Button size="lg" variant="secondary" className="shadow-xl shadow-secondary/20 w-full sm:w-auto">
                                Find a Consultant
                            </Button>
                        </Link>
                        <Link to="/services/implementation">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800">
                                See Methodology
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="bg-white text-slate-800 rounded-2xl p-8 shadow-2xl border border-slate-200 transform rotate-2">
                    <h3 className="font-bold text-xl mb-6 border-b border-slate-100 pb-4">What a Consultant Does:</h3>
                    <div className="space-y-4">
                         <TaskItem text="Business Process Mapping (BPML)" />
                         <TaskItem text="Chart of Accounts Setup" />
                         <TaskItem text="BOM & Workstation Configuration" />
                         <TaskItem text="User Role & Permission Design" />
                         <TaskItem text="UAT Planning & User Training" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. The Skill Gap */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold text-primary mb-4">Stop asking Developers to make Accounting decisions.</h2>
                  <p className="text-slate-600 text-lg">
                      A Python developer doesn't know the difference between a "Journal Entry" and a "Payment Entry". A Consultant does.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <SkillCard 
                      title="Finance Domain"
                      desc="Our consultants are often CAs or have MBA Finance backgrounds. They ensure your Taxes, Ledgers, and Cost Centers are GAAP/IFRS compliant."
                      icon={<FileText size={32} className="text-blue-600" />}
                  />
                  <SkillCard 
                      title="Supply Chain Logic"
                      desc="We understand JIT, FIFO, Valuation rates, and Re-order levels. We configure the system to optimize your inventory, not just store data."
                      icon={<Layout size={32} className="text-amber-600" />}
                  />
                  <SkillCard 
                      title="Change Management"
                      desc="The hardest part of ERP is people. Our consultants run workshops to get buy-in from your team and ensure adoption."
                      icon={<Users size={32} className="text-green-600" />}
                  />
              </div>
          </div>
      </section>

      {/* 3. Domains */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Consultants by Industry</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <IndustryCard title="Manufacturing" desc="BOMs, Routing, Subcontracting, Quality." />
                  <IndustryCard title="Retail & Trading" desc="POS, Multi-store, Pricing Rules." />
                  <IndustryCard title="Healthcare" desc="Patient appointments, Lab tests, Prescriptions." />
                  <IndustryCard title="Education" desc="Student lifecycle, Fee structure, LMS." />
              </div>
          </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary mb-6">Get the Blueprint right.</h2>
              <p className="text-slate-600 mb-8 text-lg">
                  Hire a consultant for a 2-week Discovery Sprint before you start development.
              </p>
              <Link to="/contact">
                  <Button size="lg">Book a Consultant</Button>
              </Link>
          </div>
      </section>
    </div>
  );
};

const TaskItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
        <CheckCircle size={18} className="text-green-500 shrink-0" />
        <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
);

const SkillCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:shadow-md transition-all">
        <div className="mb-6 flex justify-center">{icon}</div>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);

const IndustryCard: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="font-bold text-lg text-primary mb-2">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
    </div>
);

// Icon Helper
const Users = ({ size, className }: { size: number; className?: string }) => (
    <Globe size={size} className={className} />
);
