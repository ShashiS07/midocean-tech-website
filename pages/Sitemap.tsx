
import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';

export const Sitemap: React.FC = () => {
  const sections = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", to: "/" },
        { name: "About Us", to: "/about" },
        { name: "Contact Us", to: "/contact" },
        { name: "Careers", to: "/careers" },
        { name: "Partner Program", to: "/partners" },
        { name: "Blog & Insights", to: "/blog" },
      ]
    },
    {
      title: "Services",
      links: [
        { name: "ERPNext Services", to: "/services/erpnext" },
        { name: "ERPNext Success Pack (Fixed Price)", to: "/services/erpnext-vanilla" },
        { name: "AMC & Support", to: "/erpnext-amc-support" },
        { name: "Resource Augmentation", to: "/resource-augmentation" },
        { name: "Odoo Services", to: "/services/odoo" },
        { name: "Custom Development", to: "/services/custom-erp" },
        { name: "Implementation", to: "/services/implementation" },
      ]
    },
    {
      title: "Hiring & Talent",
      links: [
        { name: "Hire ERPNext Team", to: "/hire-erpnext-team" },
        { name: "Hire ERPNext Consultant", to: "/hire-erpnext-consultant" },
        { name: "Hire ERPNext Developer", to: "/hire-erpnext-developer" },
        { name: "Hire Frappe Developer", to: "/hire-frappe-developer" },
        { name: "Hire Odoo Team", to: "/hire-odoo-team" },
      ]
    },
    {
      title: "Industries",
      links: [
        { name: "Manufacturing", to: "/industries/manufacturing" },
        { name: "Automotive & OEM", to: "/industries/automotive" },
        { name: "Retail & Trading", to: "/industries/trading" },
      ]
    },
    {
      title: "Resources & Tools",
      links: [
        { name: "Playbooks Library", to: "/playbooks" },
        { name: "Readiness Checker", to: "/readiness-checker" },
        { name: "Legal: Privacy Policy", to: "/privacy" },
        { name: "Legal: Terms of Service", to: "/terms" },
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* Header */}
      <section className="bg-white border-b border-slate-200 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-4 flex items-center gap-3">
             <Map className="text-secondary" /> Sitemap
          </h1>
          <p className="text-slate-600">Overview of available pages and resources on Midocean.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
              {sections.map((section, idx) => (
                  <div key={idx}>
                      <h2 className="text-lg font-bold text-primary mb-6 pb-2 border-b border-slate-200">
                          {section.title}
                      </h2>
                      <ul className="space-y-3">
                          {section.links.map((link, i) => (
                              <li key={i}>
                                  <Link 
                                    to={link.to} 
                                    className="text-slate-600 hover:text-secondary transition-colors flex items-center gap-2 group"
                                  >
                                      <ArrowRight size={14} className="text-slate-300 group-hover:text-secondary transition-colors" />
                                      {link.name}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};