import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Handshake, Briefcase, ArrowRight, CheckCircle, Globe2, BadgeCheck } from 'lucide-react';

export const Partners: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* Hero */}
      <section className="bg-primary text-white pt-24 pb-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
               backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
               backgroundSize: '24px 24px'
          }}></div>
          <div className="max-w-4xl mx-auto px-4 relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Partner with Midocean</h1>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                  Expand your agency's capabilities. You handle the client relationship; we handle the heavy technical lifting.
              </p>
              <Link to="/contact">
                  <Button size="lg" variant="secondary">Apply for Partnership</Button>
              </Link>
          </div>
      </section>

      {/* Why Partner */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-3xl font-bold text-primary mb-6">Who is this for?</h2>
                      <div className="space-y-6">
                          <PartnerType 
                             title="Digital Agencies" 
                             desc="Your clients ask for ERP integrations with their websites. Don't say no. Say 'We can do that'."
                          />
                          <PartnerType 
                             title="Business Consultants" 
                             desc="You design the process optimization strategy. We implement the software to make it real."
                          />
                          <PartnerType 
                             title="IT Service Providers" 
                             desc="Offload complex Python/Odoo/ERPNext work to a specialist team while you manage the infra."
                          />
                      </div>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 text-center">
                      <Handshake size={64} className="mx-auto text-secondary mb-6" />
                      <h3 className="text-2xl font-bold text-primary mb-2">White-Label Ready</h3>
                      <p className="text-slate-600 mb-6">
                          We can work silently in the background as your technical arm, or alongside you as a visible partner.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-left text-sm">
                          <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> NDA Protected</div>
                          <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Flexible Billing</div>
                          <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Dedicated PM</div>
                          <div className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> Sales Support</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Tiers */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary text-center mb-16">Partnership Models</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Referral Partner</div>
                      <h3 className="text-2xl font-bold text-primary mb-4">10% Commission</h3>
                      <p className="text-slate-600 mb-6 h-20">
                          Simple. You introduce us to a lead. If we close the deal, you get a recurring commission for the first year.
                      </p>
                      <Link to="/contact">
                          <Button variant="outline" fullWidth>Become Referral Partner</Button>
                      </Link>
                  </div>

                  <div className="bg-white p-8 rounded-2xl border-2 border-secondary shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase">Most Popular</div>
                      <div className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Strategic / Reseller</div>
                      <h3 className="text-2xl font-bold text-primary mb-4">20%+ Margin</h3>
                      <p className="text-slate-600 mb-6 h-20">
                          You own the client contract. We bill you at wholesale rates. You mark it up and bill the client.
                      </p>
                      <Link to="/contact">
                          <Button variant="primary" fullWidth>Become Strategic Partner</Button>
                      </Link>
                  </div>
              </div>
          </div>
      </section>

    </div>
  );
};

const PartnerType: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <div className="flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
            <BadgeCheck size={24} />
        </div>
        <div>
            <h3 className="font-bold text-lg text-slate-900">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{desc}</p>
        </div>
    </div>
);