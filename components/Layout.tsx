
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, MapPin, ArrowRight, Linkedin, Twitter, Github, Youtube, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { ERPNextMegaMenu } from './navigation/ERPNextMegaMenu';

export const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800">
      {/* Utility Nav */}
      <div className="bg-primary text-slate-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center space-x-1 hover:text-white cursor-pointer transition-colors">
              <MapPin size={12} /> <span>India (HQ)</span>
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">UK</span>
            <span className="hover:text-white cursor-pointer transition-colors">UAE</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Partner Portal</a>
            <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
            <span className="flex items-center space-x-1 hover:text-white cursor-pointer transition-colors">
              <Globe size={12} /> <span>EN</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3' : 'bg-white border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="h-10 w-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-secondary transition-colors duration-300">
              M
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary leading-tight">Midocean</span>
              <span className="text-[10px] tracking-widest text-slate-500 uppercase">Technologies</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            
            {/* ERPNext Mega Menu - Primary Offering */}
            <ERPNextMegaMenu />

            {/* Consolidated Services Dropdown */}
            <NavDropdown title="Services">
              <DropdownItem to="/resource-augmentation" title="Hire Developers" desc="Dedicated Staff Augmentation" />
              <DropdownItem to="/services/odoo" title="Odoo Services" desc="Migration, Tuning & Support" />
              <DropdownItem to="/services/custom-erp" title="Custom Engineering" desc="Mobile Apps, AI & Portals" />
              <DropdownItem to="/services/implementation" title="Implementation" desc="Consulting & Governance" />
              <DropdownItem to="/erpnext-amc-support" title="Managed Support" desc="24/7 SLA & Maintenance" />
            </NavDropdown>

            {/* Industries Dropdown */}
            <NavDropdown title="Industries">
              <DropdownItem to="/industries/manufacturing" title="Manufacturing" desc="Discrete & Process Mfg" />
              <DropdownItem to="/industries/automotive" title="Automotive & OEM" desc="JIT & Supply Chain" />
              <DropdownItem to="/industries/trading" title="Retail & Trading" desc="Distribution & POS" />
              <DropdownItem to="/industries/healthcare" title="Healthcare" desc="Hospitals & Clinics" />
              <DropdownItem to="/industries/construction" title="Construction" desc="Project Control" />
              <div className="pt-2 mt-2 border-t border-slate-100">
                  <Link to="/services/erpnext" className="text-xs text-secondary font-bold pl-3 hover:underline">View All Industries</Link>
              </div>
            </NavDropdown>

            {/* Resources Dropdown */}
            <NavDropdown title="Resources">
              <DropdownItem to="/playbooks" title="Playbooks Library" desc="Implementation Recipes" />
              <DropdownItem to="/readiness-checker" title="Readiness Tool" desc="Self-Assessment Audit" />
              <DropdownItem to="/blog" title="Insights & Blog" desc="Engineering & Strategy" />
            </NavDropdown>

            {/* Company Dropdown */}
            <NavDropdown title="Company">
              <DropdownItem to="/about" title="About Us" desc="Our Story & Values" />
              <DropdownItem to="/careers" title="Careers" desc="Join the Team" />
              <DropdownItem to="/partners" title="Partners" desc="Agency Partnership" />
              <DropdownItem to="/contact" title="Contact" desc="Get in Touch" />
            </NavDropdown>
          </nav>

          {/* CTA & Partner Logo */}
          <div className="hidden lg:flex items-center gap-4">
            {/* CSS-based Frappe Partner Badge (Unbreakable) */}
            <div className="flex items-center gap-2 px-2 py-1 bg-slate-50 border border-slate-200 rounded hover:border-blue-200 transition-colors cursor-default group" title="Frappe Certified Silver Partner">
               <div className="w-6 h-6 bg-[#0089FF] rounded flex items-center justify-center text-white font-bold text-sm group-hover:bg-blue-600 transition-colors">F</div>
               <div className="flex flex-col">
                 <span className="text-[8px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-0.5 group-hover:text-blue-500 transition-colors">Certified</span>
                 <span className="text-[10px] font-bold text-slate-800 leading-none">Silver Partner</span>
               </div>
            </div>
            <Link to="/contact">
              <Button size="sm" variant="primary" className="shadow-lg shadow-primary/20">
                Book a Call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[80px] z-40 bg-white overflow-y-auto p-4 border-t border-slate-100 pb-20">
          <div className="flex flex-col space-y-4">
            <MobileNavLink to="/">Home</MobileNavLink>

            {/* ERPNext Mobile Section */}
            <div className="font-semibold text-slate-900 pb-1 border-b border-slate-100 mt-2 text-secondary">ERPNext</div>
            <MobileNavLink to="/services/erpnext" className="pl-4 text-sm">Overview & Modules</MobileNavLink>
            <MobileNavLink to="/services/erpnext-vanilla" className="pl-4 text-sm">Success Pack (Fixed)</MobileNavLink>
            <MobileNavLink to="/playbooks" className="pl-4 text-sm">Playbooks Library</MobileNavLink>
            <MobileNavLink to="/erpnext-amc-support" className="pl-4 text-sm">AMC Support</MobileNavLink>

            <div className="font-semibold text-slate-900 pb-1 border-b border-slate-100 mt-2">Services</div>
            <MobileNavLink to="/resource-augmentation" className="pl-4 text-sm font-medium text-blue-600">Hire Developers</MobileNavLink>
            <MobileNavLink to="/services/odoo" className="pl-4 text-sm">Odoo Services</MobileNavLink>
            <MobileNavLink to="/services/custom-erp" className="pl-4 text-sm">Custom Engineering</MobileNavLink>
            <MobileNavLink to="/services/implementation" className="pl-4 text-sm">Implementation</MobileNavLink>
            
            <div className="font-semibold text-slate-900 pb-1 border-b border-slate-100 mt-2">Industries</div>
            <MobileNavLink to="/industries/manufacturing" className="pl-4 text-sm">Manufacturing</MobileNavLink>
            <MobileNavLink to="/industries/automotive" className="pl-4 text-sm">Automotive & OEM</MobileNavLink>
            <MobileNavLink to="/industries/trading" className="pl-4 text-sm">Retail & Trading</MobileNavLink>
            <MobileNavLink to="/industries/healthcare" className="pl-4 text-sm">Healthcare</MobileNavLink>
            <MobileNavLink to="/industries/construction" className="pl-4 text-sm">Construction</MobileNavLink>
            <MobileNavLink to="/industries/education" className="pl-4 text-sm">Education</MobileNavLink>
            <MobileNavLink to="/industries/mining" className="pl-4 text-sm">Mining</MobileNavLink>
            <MobileNavLink to="/industries/oil-gas" className="pl-4 text-sm">Oil & Gas</MobileNavLink>

            <div className="font-semibold text-slate-900 pb-1 border-b border-slate-100 mt-2">Resources</div>
            <MobileNavLink to="/readiness-checker" className="pl-4 text-sm">Readiness Tool</MobileNavLink>
            <MobileNavLink to="/blog" className="pl-4 text-sm">Blog & Insights</MobileNavLink>

            <div className="font-semibold text-slate-900 pb-1 border-b border-slate-100 mt-2">Company</div>
            <MobileNavLink to="/about" className="pl-4 text-sm">About Us</MobileNavLink>
            <MobileNavLink to="/careers" className="pl-4 text-sm">Careers</MobileNavLink>
            <MobileNavLink to="/partners" className="pl-4 text-sm">Partner Program</MobileNavLink>
            <MobileNavLink to="/contact" className="pl-4 text-sm">Contact</MobileNavLink>
            
            <div className="pt-4 flex flex-col gap-4">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button fullWidth>Book a Call</Button>
              </Link>
              <div className="flex justify-center">
                 <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg w-full justify-center">
                     <div className="w-8 h-8 bg-[#0089FF] rounded flex items-center justify-center text-white font-bold text-lg">F</div>
                     <div className="flex flex-col text-left">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1">Certified</span>
                       <span className="text-xs font-bold text-slate-800 leading-none">Silver Partner</span>
                     </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link to={to} className="text-sm font-medium text-slate-600 hover:text-primary transition-colors">
    {children}
  </Link>
);

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode; className?: string }> = ({ to, children, className }) => (
  <Link to={to} className={`block py-2 text-slate-600 hover:text-primary font-medium ${className}`}>
    {children}
  </Link>
);

const NavDropdown: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="relative group">
    <button className="flex items-center space-x-1 text-sm font-medium text-slate-600 group-hover:text-primary transition-colors py-2 focus:outline-none">
      <span>{title}</span>
      <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
    </button>
    <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 p-2">
      {children}
    </div>
  </div>
);

const DropdownItem: React.FC<{ to: string; title: string; desc?: string }> = ({ to, title, desc }) => (
  <Link to={to} className="block p-3 rounded-lg hover:bg-slate-50 transition-colors group">
    <div className="text-sm font-semibold text-slate-900 group-hover:text-secondary transition-colors">{title}</div>
    {desc && <div className="text-xs text-slate-500 mt-0.5">{desc}</div>}
  </Link>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          
          {/* Brand Column - Spans 2 cols on large screens */}
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
               <div className="h-10 w-10 bg-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-500 transition-colors">M</div>
               <div className="flex flex-col">
                 <span className="text-xl font-bold text-white leading-tight">Midocean</span>
                 <span className="text-[10px] tracking-widest text-slate-500 uppercase">Technologies</span>
               </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-sm text-slate-400">
              We engineer self-learning ERP systems for modern enterprises. 
              Official <strong>Frappe Silver Partner</strong> specializing in complex manufacturing & supply chain digitisation.
            </p>
            
            <div className="flex gap-4 mb-8">
               <SocialIcon icon={<Linkedin size={18} />} href="#" />
               <SocialIcon icon={<Twitter size={18} />} href="#" />
               <SocialIcon icon={<Github size={18} />} href="#" />
               <SocialIcon icon={<Youtube size={18} />} href="#" />
            </div>

            <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800 w-fit">
                <div className="w-10 h-10 bg-[#0089FF] rounded flex items-center justify-center text-white font-bold text-lg">F</div>
                <div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase">Certified</div>
                   <div className="text-xs font-bold text-white">Silver Partner</div>
                </div>
            </div>
          </div>

          {/* Sitemap Columns */}
          
          {/* Column 1: ERPNext */}
          <div>
             <h4 className="text-white font-bold mb-4">ERPNext</h4>
             <ul className="space-y-2 text-sm">
                <FooterLink to="/services/erpnext">Overview</FooterLink>
                <FooterLink to="/services/erpnext-vanilla">Success Pack (Fixed)</FooterLink>
                <FooterLink to="/erpnext-amc-support">AMC & Support</FooterLink>
                
                <li className="pt-3 font-semibold text-slate-500 text-xs uppercase tracking-wider">Hire Experts</li>
                <FooterLink to="/hire-erpnext-team">Hire ERPNext Team</FooterLink>
                <FooterLink to="/hire-erpnext-consultant">Hire Consultant</FooterLink>
                <FooterLink to="/hire-erpnext-developer">Hire Developer</FooterLink>
             </ul>
          </div>

          {/* Column 2: Services */}
          <div>
             <h4 className="text-white font-bold mb-4">Services</h4>
             <ul className="space-y-2 text-sm">
                <FooterLink to="/services/odoo">Odoo Migration</FooterLink>
                <FooterLink to="/hire-odoo-team">Hire Odoo Team</FooterLink>
                <FooterLink to="/services/custom-erp">Custom Development</FooterLink>
                <FooterLink to="/hire-frappe-developer">Hire Frappe Dev</FooterLink>
                <FooterLink to="/services/implementation">Implementation</FooterLink>
                <FooterLink to="/readiness-checker">Readiness Audit</FooterLink>
                
                <li className="pt-2 font-semibold text-slate-500 text-xs uppercase tracking-wider">Industries</li>
                <FooterLink to="/industries/manufacturing">Manufacturing</FooterLink>
                <FooterLink to="/industries/automotive">Automotive & OEM</FooterLink>
             </ul>
          </div>

          {/* Column 3: Company */}
          <div>
             <h4 className="text-white font-bold mb-4">Company</h4>
             <ul className="space-y-2 text-sm">
                <FooterLink to="/about">About Us</FooterLink>
                <FooterLink to="/careers">Careers <span className="text-[10px] text-secondary bg-secondary/10 px-1.5 py-0.5 rounded ml-1">Hiring</span></FooterLink>
                <FooterLink to="/partners">Partner Program</FooterLink>
                <FooterLink to="/contact">Contact Us</FooterLink>
                <FooterLink to="/playbooks">Playbooks Library</FooterLink>
                <FooterLink to="/blog">Insights & Blog</FooterLink>
             </ul>
          </div>

          {/* Column 4: Global */}
          <div>
             <h4 className="text-white font-bold mb-4">Global Offices</h4>
             <ul className="space-y-4 text-sm">
                <li>
                   <div className="text-white font-medium mb-1 flex items-center gap-2">
                      <img src="https://flagcdn.com/w20/in.png" className="w-4 rounded-[2px]" alt="India" /> India (HQ)
                   </div>
                   <p className="text-xs text-slate-500">Ahmedabad, Gujarat</p>
                </li>
                <li>
                   <div className="text-white font-medium mb-1 flex items-center gap-2">
                      <img src="https://flagcdn.com/w20/gb.png" className="w-4 rounded-[2px]" alt="UK" /> United Kingdom
                   </div>
                   <p className="text-xs text-slate-500">Covent Garden, London</p>
                </li>
                <li>
                   <div className="text-white font-medium mb-1 flex items-center gap-2">
                      <img src="https://flagcdn.com/w20/ae.png" className="w-4 rounded-[2px]" alt="UAE" /> UAE
                   </div>
                   <p className="text-xs text-slate-500">Sharjah Media City</p>
                </li>
                <li className="pt-2">
                   <a href="mailto:business@midocean.tech" className="flex items-center gap-2 text-secondary hover:text-white transition-colors cursor-pointer font-medium">
                      <Mail size={14} /> business@midocean.tech
                   </a>
                </li>
             </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-slate-500 text-center md:text-left">
               &copy; {currentYear} Midocean Technologies Pvt Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium">
               <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
               <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
               <Link to="/security" className="hover:text-white transition-colors">Security</Link>
               <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link to={to} className="hover:text-secondary transition-colors block py-0.5">
      {children}
    </Link>
  </li>
);

const SocialIcon: React.FC<{ icon: React.ReactNode; href: string }> = ({ icon, href }) => (
    <a href={href} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-secondary hover:text-white transition-all border border-slate-800">
        {icon}
    </a>
);