import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Globe, Users, Award, Target, MapPin, Heart, Code2, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* 1. Hero */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
             backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
             backgroundSize: '24px 24px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">We Engineer Certainty.</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Midocean Technologies is not just an "implementation partner". 
              We are a global engineering firm dedicated to digitizing complex manufacturing and trading enterprises.
            </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <div className="text-secondary font-bold uppercase tracking-widest text-xs mb-2">Our Story</div>
                  <h2 className="text-3xl font-bold text-primary mb-6">Born from the chaos of failed implementations.</h2>
                  <div className="space-y-4 text-slate-600 leading-relaxed">
                      <p>
                        In 2015, our founders were on the client side. They tried to implement an ERP for a mid-sized manufacturing plant. 
                        They hired freelancers, then a big consultancy, then a local agency.
                      </p>
                      <p>
                        The result? <strong>Chaos.</strong> Missed deadlines, spaghetti code, and a system that no one used.
                      </p>
                      <p>
                        They realized the market lacked a partner who understood both <em>Code</em> and <em>Business Process</em>. 
                        Midocean was born to fill that gap. We combined the rigor of enterprise engineering with the agility of modern open-source tools.
                      </p>
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                   <StatsCard number="9+" label="Years Active" />
                   <StatsCard number="150+" label="Projects Delivered" />
                   <StatsCard number="15+" label="Countries Served" />
                   <StatsCard number="100%" label="Bootstrapped" />
               </div>
           </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-primary">Our Engineering DNA</h2>
                  <p className="text-slate-600 mt-4">We are developers first, consultants second.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <ValueCard 
                     icon={<Code2 size={32} className="text-blue-500" />}
                     title="Clean Code or Nothing"
                     desc="We strictly follow PEP8 standards. We write unit tests. We do code reviews. We don't patch; we fix."
                  />
                  <ValueCard 
                     icon={<Target size={32} className="text-red-500" />}
                     title="Outcome over Output"
                     desc="We don't bill for hours spent 'trying'. We bill for features delivered and processes automated."
                  />
                  <ValueCard 
                     icon={<ShieldCheck size={32} className="text-green-500" />}
                     title="Brutal Honesty"
                     desc="If a feature is a bad idea, we will tell you. We refuse to build shelf-ware that users hate."
                  />
              </div>
          </div>
      </section>

      {/* 4. Global Presence */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Global Presence, Local Focus</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <OfficeCard 
                     country="India (HQ)"
                     city="Ahmedabad, Gujarat"
                     address="1008, Synergy Tower, Corporate Rd, Makarba"
                     type="Engineering Center"
                  />
                  <OfficeCard 
                     country="United Kingdom"
                     city="London"
                     address="71-75 Shelton Street, Covent Garden"
                     type="Sales & Consulting"
                  />
                  <OfficeCard 
                     country="UAE"
                     city="Sharjah"
                     address="Sharjah Media City, SMC"
                     type="Regional Sales"
                  />
              </div>
          </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-primary text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Work with a partner who cares.</h2>
              <p className="text-slate-300 mb-8 text-lg">
                  Ready to experience an implementation that actually finishes on time?
              </p>
              <Link to="/contact">
                  <Button size="lg" variant="secondary">Contact Leadership Team</Button>
              </Link>
          </div>
      </section>

    </div>
  );
};

const StatsCard: React.FC<{ number: string; label: string }> = ({ number, label }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
        <div className="text-4xl font-bold text-secondary mb-1">{number}</div>
        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{label}</div>
    </div>
);

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);

const OfficeCard: React.FC<{ country: string; city: string; address: string; type: string }> = ({ country, city, address, type }) => (
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-xl text-primary">{country}</h3>
            <span className="text-[10px] font-bold bg-white border border-slate-200 px-2 py-1 rounded uppercase text-slate-500">{type}</span>
        </div>
        <div className="flex items-start gap-3 text-slate-600">
            <MapPin size={20} className="shrink-0 text-secondary mt-1" />
            <div>
                <div className="font-bold text-slate-800">{city}</div>
                <div className="text-sm mt-1">{address}</div>
            </div>
        </div>
    </div>
);