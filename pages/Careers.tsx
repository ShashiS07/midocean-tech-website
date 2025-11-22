import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Code, Coffee, Zap, Users, Globe, Monitor, ArrowRight, CheckCircle } from 'lucide-react';

export const Careers: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-24 pb-20 text-center">
         <div className="max-w-4xl mx-auto px-4">
             <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-6 border border-secondary/20">
                  <Users size={14} className="mr-2" /> We are Hiring
             </div>
             <h1 className="text-4xl md:text-6xl font-bold mb-6">Join the Elite.</h1>
             <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                 We are building the Navy SEALs of ERP Engineering. 
                 If you obsess over code quality and love solving complex business logic, you belong here.
             </p>
             <Button onClick={() => document.getElementById('jobs')?.scrollIntoView({behavior:'smooth'})} variant="secondary" size="lg">View Open Positions</Button>
         </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-primary">Why Developers Love Midocean</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <PerkCard icon={<Globe/>} title="Remote-First" desc="Work from anywhere. We care about your code commits, not your chair time." />
                  <PerkCard icon={<Zap/>} title="Latest Tech" desc="We don't do legacy. Work with Python 3.10+, Frappe v15, React, and Docker." />
                  <PerkCard icon={<Coffee/>} title="No Burnout" desc="We respect weekends. We plan sprints realistically to avoid the death-march crunch." />
              </div>
          </div>
      </section>

      {/* Jobs */}
      <section id="jobs" className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary mb-12">Open Positions</h2>
              
              <div className="space-y-4">
                  <JobCard 
                     title="Senior Python Developer (Frappe)"
                     dept="Engineering"
                     loc="Remote (India/Asia)"
                     type="Full-time"
                  />
                  <JobCard 
                     title="Odoo Technical Consultant"
                     dept="Engineering"
                     loc="Remote"
                     type="Full-time"
                  />
                  <JobCard 
                     title="React / Frontend Engineer"
                     dept="Product"
                     loc="Remote"
                     type="Full-time"
                  />
                  <JobCard 
                     title="ERP Implementation Consultant"
                     dept="Delivery"
                     loc="Hybrid (London)"
                     type="Contract"
                  />
              </div>

              <div className="mt-12 p-8 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                  <h3 className="font-bold text-blue-900 text-lg mb-2">Don't see a fit?</h3>
                  <p className="text-slate-600 mb-6">
                      We are always looking for talent. Send your portfolio/GitHub to our talent team.
                  </p>
                  <a href="mailto:careers@midocean.tech">
                      <Button variant="outline" className="bg-white">Email careers@midocean.tech</Button>
                  </a>
              </div>
          </div>
      </section>
    </div>
  );
};

const PerkCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="text-center p-6">
        <div className="w-12 h-12 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-secondary mb-4">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 24 })}
        </div>
        <h3 className="font-bold text-lg text-primary mb-2">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
    </div>
);

const JobCard: React.FC<{ title: string; dept: string; loc: string; type: string }> = ({ title, dept, loc, type }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 hover:border-secondary hover:shadow-md transition-all flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
            <h3 className="font-bold text-lg text-slate-900">{title}</h3>
            <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                <span className="flex items-center gap-1"><Code size={14}/> {dept}</span>
                <span className="flex items-center gap-1"><Globe size={14}/> {loc}</span>
                <span className="px-2 py-0.5 bg-slate-100 rounded text-xs font-bold">{type}</span>
            </div>
        </div>
        <a href="mailto:careers@midocean.tech?subject=Application for " className="shrink-0">
            <Button variant="outline" size="sm">Apply Now</Button>
        </a>
    </div>
);