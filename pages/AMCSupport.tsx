import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Zap, 
  Headphones, 
  Server, 
  LifeBuoy, 
  ArrowRight, 
  FileText, 
  Phone, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp,
  Code2,
  Database,
  GitMerge,
  RefreshCw,
  Printer,
  BarChart3,
  Terminal,
  UserX,
  Check
} from 'lucide-react';

export const AMCSupport: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const toggleCurrency = (curr: 'USD' | 'INR') => {
    setCurrency(curr);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* 1. Hero Section - Trust & Expertise */}
      <section className="bg-white pt-24 pb-20 lg:pt-32 lg:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(#0f172a 1px, transparent 1px)`,
            backgroundSize: '32px 32px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100 mb-6">
                  <Headphones size={14} className="mr-2" />
                  ERPNext Silver Partner
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                  Stabilize Your <br/>
                  <span className="text-secondary">ERPNext System</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
                  Stop struggling with downtime and bugs. Get certified <strong>L1-L3 Support</strong>, safe version upgrades, and custom development from a dedicated team.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth'})} size="lg" className="shadow-xl shadow-primary/20 w-full sm:w-auto">
                    View Support Plans
                  </Button>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Book Technical Audit
                    </Button>
                  </Link>
                </div>

                <div className="mt-10 flex items-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <Shield size={16} className="text-secondary" />
                        <span>SLA Guaranteed</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={16} className="text-secondary" />
                        <span>24/7 Critical Support</span>
                    </div>
                </div>
            </div>
            
            {/* Abstract Graphic */}
            <div className="relative hidden lg:block">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full blur-3xl opacity-50"></div>
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 max-w-md ml-auto rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center justify-between mb-6 border-b border-slate-100 pb-4">
                        <div className="flex items-center gap-3">
                             <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                 <CheckCircle size={20} />
                             </div>
                             <div>
                                 <div className="font-bold text-slate-900">System Health</div>
                                 <div className="text-xs text-green-600 font-bold">99.9% Uptime</div>
                             </div>
                        </div>
                        <div className="text-xs text-slate-400">Live Monitor</div>
                    </div>
                    <div className="space-y-4">
                         <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
                             <div className="flex items-center gap-3">
                                 <Database size={16} className="text-blue-500" />
                                 <span className="text-sm font-medium">MariaDB Slow Queries</span>
                             </div>
                             <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Optimized</span>
                         </div>
                         <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
                             <div className="flex items-center gap-3">
                                 <Server size={16} className="text-purple-500" />
                                 <span className="text-sm font-medium">Background Workers</span>
                             </div>
                             <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Running</span>
                         </div>
                         <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
                             <div className="flex items-center gap-3">
                                 <GitMerge size={16} className="text-amber-500" />
                                 <span className="text-sm font-medium">Frappe v15 Upgrade</span>
                             </div>
                             <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Scheduled</span>
                         </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Problem - Why Support Matters */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">The Cost of "Freelancer" Support</h2>
            <p className="text-lg text-slate-600">
              Is your ERPNext implementation suffering from neglect? We replace chaos with professional, process-driven engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <PainCard 
                icon={<UserX size={32} className="text-red-500" />}
                title="Ghosted by Developer?"
                text="The original freelancer is busy or unresponsive. We take over code ownership, document it, and provide enterprise stability."
             />
             <PainCard 
                icon={<Terminal size={32} className="text-amber-500" />}
                title="Failed Upgrades"
                text="Stuck on v13 because custom scripts break on upgrade? Our experts refactor your code to be compatible with v14/v15."
             />
             <PainCard 
                icon={<Zap size={32} className="text-orange-500" />}
                title="Performance Lag"
                text="Reports timing out? We optimize SQL queries, tune MariaDB configs, and implement Redis caching correctly."
             />
          </div>
        </div>
      </section>

      {/* 3. Scope of Work - What We Do */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
               <h2 className="text-3xl font-bold text-primary mb-4">Comprehensive Support Scope</h2>
               <p className="text-slate-600">We bridge the gap between functional usage and technical infrastructure.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Column 1: Functional */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-secondary/50 transition-all group">
                    <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                        <LifeBuoy size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">Functional Support (L1)</h3>
                    <ul className="space-y-4">
                        <ScopeList title="User Training" desc="Clarifying workflow logic for Buying, Selling, Stock." />
                        <ScopeList title="Data Correction" desc="Fixing incorrect GL entries or stock reconciliation." />
                        <ScopeList title="Configuration" desc="Setting up new workflows, assignment rules, permissions." />
                        <ScopeList title="Print Formats" desc="HTML/Jinja modifications for Invoices & POs." />
                    </ul>
                </div>

                {/* Column 2: Technical */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-secondary/50 transition-all group">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Code2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">Technical Fixes (L2)</h3>
                    <ul className="space-y-4">
                        <ScopeList title="Bug Fixing" desc="Debugging Python/JS code in custom apps." />
                        <ScopeList title="Report Building" desc="Creating complex SQL Query Reports and Script Reports." />
                        <ScopeList title="API Integration" desc="Fixing sync issues with Shopify, WooCommerce, Banks." />
                        <ScopeList title="Scripting" desc="Writing Server Scripts and Client Scripts for validation." />
                    </ul>
                </div>

                {/* Column 3: DevOps */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:border-secondary/50 transition-all group">
                    <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Server size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">Server & DevOps (L3)</h3>
                    <ul className="space-y-4">
                        <ScopeList title="Version Upgrades" desc="Safe migration (e.g., v13 to v15) with data backup." />
                        <ScopeList title="Performance Tuning" desc="MariaDB config, Nginx caching, and background workers." />
                        <ScopeList title="Security Audits" desc="Firewall setup, fail2ban, and SSL management." />
                        <ScopeList title="Backups" desc="Automated S3/Dropbox backup configuration." />
                    </ul>
                </div>
            </div>
         </div>
      </section>

      {/* 4. Governance - Visual Process */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-primary mb-6">The "Life of a Ticket"</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        We don't just fix things; we follow a rigorous ITIL-aligned process to ensure quality and prevent regressions.
                    </p>
                    
                    <div className="space-y-6">
                        <ProcessStep 
                            num="01" title="Log & Triage" 
                            desc="You raise a ticket via Email or Portal. Our L1 team categorizes it by priority (P1-P4) within 1 hour." 
                        />
                        <ProcessStep 
                            num="02" title="Debug & Fix" 
                            desc="Assigned to L2/L3 engineer. Fix is developed in a 'Staging' environment, never directly on Production." 
                        />
                        <ProcessStep 
                            num="03" title="UAT & Deploy" 
                            desc="You verify the fix on Staging. Once approved, we deploy to Production during off-peak hours." 
                        />
                    </div>
                </div>
                <div className="relative">
                     {/* Visual Representation of Dashboard */}
                     <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 relative z-10">
                         <div className="flex items-center justify-between mb-6">
                             <div className="font-bold text-slate-800">Support Portal</div>
                             <div className="flex gap-2">
                                 <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                 <div className="w-3 h-3 rounded-full bg-green-500"></div>
                             </div>
                         </div>
                         <div className="space-y-3">
                             <TicketItem id="SUP-2401" title="Production Plan Error" status="In Progress" priority="High" />
                             <TicketItem id="SUP-2398" title="User Permission Update" status="Resolved" priority="Low" />
                             <TicketItem id="SUP-2392" title="Slow Report Loading" status="Testing" priority="Medium" />
                         </div>
                         <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 text-center">
                             <div>
                                 <div className="text-2xl font-bold text-slate-800">1.2h</div>
                                 <div className="text-[10px] text-slate-500 uppercase">Avg Response</div>
                             </div>
                             <div>
                                 <div className="text-2xl font-bold text-slate-800">98%</div>
                                 <div className="text-[10px] text-slate-500 uppercase">SLA Met</div>
                             </div>
                             <div>
                                 <div className="text-2xl font-bold text-slate-800">4.9/5</div>
                                 <div className="text-[10px] text-slate-500 uppercase">CSAT Score</div>
                             </div>
                         </div>
                     </div>
                     {/* Decor */}
                     <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
                     <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>
            </div>
         </div>
      </section>

      {/* 5. Case Studies (Social Proof) */}
      <section className="py-24 bg-white border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-primary mb-12 text-center">Support in Action</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <CaseCard 
                    title="Manufacturing Client"
                    problem="Recurring production entry errors and slow stock reports."
                    solution="Optimized SQL queries and implemented barcode scanning."
                    outcome="Reduced support tickets by 60% in 3 months."
                 />
                 <CaseCard 
                    title="Trading Distributor"
                    problem="Stock mismatches causing sales blockages."
                    solution="Strict serial no. validation and nightly reconciliation scripts."
                    outcome="100% inventory accuracy across 4 warehouses."
                 />
                 <CaseCard 
                    title="HSRP Plant"
                    problem="High downtime during government API sync."
                    solution="Rewrote integration logic with robust retry mechanisms."
                    outcome="Zero downtime during business hours."
                 />
             </div>
         </div>
      </section>

      {/* 6. Pricing Section - Dynamic & Add-ons */}
      <section id="pricing" className="py-24 bg-slate-50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header & Toggle */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div className="max-w-2xl">
                      <h2 className="text-3xl font-bold text-primary mb-4">Flexible "Hours Bank" Pricing</h2>
                      <p className="text-slate-600 text-lg">
                          Purchase a block of hours. Use them for Support, Training, or Development. 
                          No monthly "use-it-or-lose-it" pressure.
                      </p>
                  </div>
                  {/* Toggle */}
                  <div className="bg-white p-1 rounded-xl border border-slate-200 shadow-sm inline-flex">
                      <button 
                          onClick={() => toggleCurrency('USD')}
                          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${currency === 'USD' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'}`}
                      >
                          USD ($)
                      </button>
                      <button 
                          onClick={() => toggleCurrency('INR')}
                          className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${currency === 'INR' ? 'bg-primary text-white shadow-md' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'}`}
                      >
                          INR (₹)
                      </button>
                  </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start mb-16">
                {/* Block 1 */}
                <PricingCard 
                   hours="50"
                   rateUSD={30}
                   rateINR={2200}
                   currency={currency}
                   title="Starter"
                   desc="For minor tweaks & bug fixes"
                   features={[
                       "Valid for 3 Months",
                       "L1 & L2 Support",
                       "Email Ticketing",
                       "48h SLA"
                   ]}
                   color="blue"
                />

                {/* Block 2 */}
                <PricingCard 
                   hours="100"
                   rateUSD={28}
                   rateINR={2000}
                   currency={currency}
                   title="Growth"
                   desc="For stable maintenance"
                   features={[
                       "Valid for 6 Months",
                       "L1, L2 & L3 Support",
                       "Priority Portal Access",
                       "24h SLA"
                   ]}
                   color="teal"
                   highlight
                />

                {/* Block 3 */}
                <PricingCard 
                   hours="300"
                   rateUSD={25}
                   rateINR={1800}
                   currency={currency}
                   title="Scale"
                   desc="For active development"
                   features={[
                       "Valid for 12 Months",
                       "Dedicated Tech Lead",
                       "Architecture Review",
                       "Code Reviews",
                       "12h SLA"
                   ]}
                   color="purple"
                />

                {/* Enterprise */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl border border-slate-800 flex flex-col h-full">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-white">Enterprise</h3>
                        <p className="text-slate-400 text-sm mt-2">Mission-critical ops</p>
                    </div>
                    <div className="text-3xl font-bold mb-6 text-secondary">Custom SLA</div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        <FeatureItem text="Dedicated 24/7 Pod" dark />
                        <FeatureItem text="Guaranteed Uptime" dark />
                        <FeatureItem text="On-site Visits" dark />
                        <FeatureItem text="Strategic Roadmap" dark />
                    </ul>
                    <Link to="/contact" className="mt-auto">
                        <Button fullWidth variant="secondary">Contact Sales</Button>
                    </Link>
                </div>
            </div>

            {/* ADD-ONS SECTION */}
            <div className="border-t border-slate-200 pt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Specialized Add-Ons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Add-on 1: Print Formats & Reports */}
                    <AddOnCard 
                        icon={<Printer size={24}/>}
                        title="Print Format & Report Pack"
                        desc="Perfect for when you need professional invoice designs or complex MIS reports without buying a large support block."
                        priceUSD="$500"
                        priceINR="₹40,000"
                        currency={currency}
                        features={[
                            "5 Custom Print Formats (HTML/Jinja)",
                            "2 Complex Script/Query Reports",
                            "Branding & Layout Setup",
                            "1 Week Delivery"
                        ]}
                        color="amber"
                    />

                    {/* Add-on 2: Custom Development */}
                    <AddOnCard 
                        icon={<Code2 size={24}/>}
                        title="Custom Development Sprint"
                        desc="A focused 2-week agile sprint to build a specific feature or custom app module. Ideal for extending functionality."
                        priceUSD="$2,500"
                        priceINR="₹2,00,000"
                        currency={currency}
                        features={[
                            "80 Hours of Dedicated Dev Time",
                            "Solution Architect Supervision",
                            "Code Review & Documentation",
                            "Deployment to Staging"
                        ]}
                        color="indigo"
                    />
                </div>
            </div>

            <div className="mt-12 bg-blue-50 rounded-xl p-6 border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-full text-blue-600 shadow-sm">
                        <RefreshCw size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-primary">Rollover Unused Hours</h4>
                        <p className="text-sm text-slate-600">Renew your plan before expiry and carry forward up to 20% of unused hours.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-white rounded-full text-blue-600 shadow-sm">
                        <Code2 size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-primary">Use for Development</h4>
                        <p className="text-sm text-slate-600">Hours can be used for custom script writing, print formats, and report building.</p>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-white">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
               <FAQItem q="What are the Terms & Conditions?" a="Our support plans are governed by a standard SLA agreement. Hours are valid for the specified duration (3, 6, or 12 months). Unused hours can be rolled over up to 20% upon renewal. We strictly adhere to NDA and IP protection policies. Full T&C document is provided with the proposal." />
               <FAQItem q="Do hours expire?" a="Hours are valid for the duration of the block (3, 6, or 12 months). You can carry forward up to 20% if you renew before expiry." />
               <FAQItem q="Can we use these hours for new development?" a="Yes! Unlike traditional AMCs which are only for bug fixes, our 'Hours Bank' can be used for new features, reports, or training." />
               <FAQItem q="Do you provide 24x7 support?" a="Our standard support is 9 AM - 7 PM IST (covering UK/GCC/India hours). 24x7 critical support is available on the Enterprise plan." />
               <FAQItem q="Can you support self-hosted ERPNext?" a="Yes, we support on-premise, AWS, DigitalOcean, and Frappe Cloud hosting. We will need SSH/VPN access." />
               <FAQItem q="How do you track time?" a="We bill in 15-minute increments. All time is logged in our ticketing system which you can audit at any time." />
            </div>
         </div>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-slate-900 text-white">
         <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Stabilize Your ERP?</h2>
            <p className="text-xl text-slate-300 mb-10">
               Switch to professional, SLA-driven support today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto shadow-lg shadow-secondary/20">
                     Buy Support Block
                  </Button>
               </Link>
               <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 hover:bg-slate-800 text-white">
                     Book Technical Audit
                  </Button>
               </Link>
            </div>
         </div>
      </section>

    </div>
  );
};

// --- Subcomponents ---

const PricingCard: React.FC<{ 
    hours: string; 
    rateUSD: number; 
    rateINR: number;
    currency: 'USD' | 'INR';
    title: string; 
    desc: string; 
    features: string[]; 
    color: 'blue' | 'teal' | 'purple';
    highlight?: boolean;
}> = ({ hours, rateUSD, rateINR, currency, title, desc, features, color, highlight }) => {
    const rate = currency === 'USD' ? rateUSD : rateINR;
    const symbol = currency === 'USD' ? '$' : '₹';
    const total = parseInt(hours) * rate;
    
    const colorClasses = {
        blue: 'bg-blue-50 text-blue-700',
        teal: 'bg-teal-50 text-teal-700',
        purple: 'bg-purple-50 text-purple-700'
    };

    return (
        <div className={`p-8 rounded-2xl bg-white flex flex-col h-full transition-all ${highlight ? 'border-2 border-secondary shadow-xl ring-1 ring-secondary/10 relative scale-105 z-10' : 'border border-slate-200 shadow-sm hover:shadow-lg'}`}>
            {highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
                    Most Popular
                </div>
            )}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
                <p className="text-sm text-slate-500 mt-1">{desc}</p>
            </div>
            <div className="mb-6 pb-6 border-b border-slate-100">
                <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">{symbol}{total.toLocaleString()}</span>
                    <span className="text-slate-400 font-medium text-sm">/ block</span>
                </div>
                <div className={`inline-block mt-3 px-2 py-1 rounded text-xs font-bold ${colorClasses[color]}`}>
                    {hours} Hours @ {symbol}{rate.toLocaleString()}/hr
                </div>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
                {features.map((feat, i) => (
                    <FeatureItem key={i} text={feat} />
                ))}
            </ul>
            <Link to="/contact" className="mt-auto">
                <Button fullWidth variant={highlight ? 'primary' : 'outline'}>Choose Plan</Button>
            </Link>
        </div>
    );
};

const AddOnCard: React.FC<{ 
    icon: React.ReactNode; 
    title: string; 
    desc: string; 
    priceUSD: string; 
    priceINR: string;
    currency: 'USD' | 'INR';
    features: string[]; 
    color: 'amber' | 'indigo'; 
}> = ({ icon, title, desc, priceUSD, priceINR, currency, features, color }) => {
    const price = currency === 'USD' ? priceUSD : priceINR;
    const bgClass = color === 'amber' ? 'bg-amber-50' : 'bg-indigo-50';
    const iconColor = color === 'amber' ? 'text-amber-600' : 'text-indigo-600';

    return (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col">
            <div className="flex items-start justify-between mb-4">
                 <div className={`p-3 rounded-xl ${bgClass} ${iconColor}`}>
                     {icon}
                 </div>
                 <div className="text-right">
                     <div className="text-2xl font-bold text-slate-900">{price}</div>
                     <div className="text-xs text-slate-500 uppercase font-bold">Fixed Price</div>
                 </div>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">{desc}</p>
            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${color === 'amber' ? 'bg-amber-500' : 'bg-indigo-500'}`}></div>
                        <span className="text-slate-700">{feat}</span>
                    </li>
                ))}
            </ul>
            <Link to="/contact" className="mt-auto">
                <Button fullWidth variant="outline">Request Add-On</Button>
            </Link>
        </div>
    );
};

const FeatureItem: React.FC<{ text: string; dark?: boolean }> = ({ text, dark }) => (
    <li className="flex items-start gap-3">
        <CheckCircle size={18} className={`shrink-0 mt-0.5 ${dark ? 'text-secondary' : 'text-secondary'}`} />
        <span className={`text-sm font-medium ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</span>
    </li>
);

const PainCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
     <div className="mb-6">{icon}</div>
     <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
     <p className="text-slate-600 leading-relaxed">{text}</p>
  </div>
);

const ScopeList: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
    <li className="flex items-start gap-3">
        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
        <div>
            <strong className="text-slate-800 block">{title}</strong>
            <span className="text-slate-500 text-sm">{desc}</span>
        </div>
    </li>
);

const ProcessStep: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
    <div className="flex gap-4">
        <div className="text-3xl font-bold text-slate-200">{num}</div>
        <div>
            <h4 className="font-bold text-slate-900 text-lg mb-1">{title}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
        </div>
    </div>
);

const TicketItem: React.FC<{ id: string; title: string; status: string; priority: string }> = ({ id, title, status, priority }) => {
    const statusColor = status === 'Resolved' ? 'bg-green-100 text-green-700' : status === 'In Progress' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700';
    const priorityColor = priority === 'High' ? 'text-red-500' : 'text-slate-500';
    
    return (
        <div className="p-3 border border-slate-100 rounded-lg bg-slate-50 flex items-center justify-between">
            <div>
                <div className="text-xs font-bold text-slate-400 mb-0.5">{id}</div>
                <div className="text-sm font-bold text-slate-800">{title}</div>
            </div>
            <div className="text-right">
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${statusColor}`}>{status}</span>
                <div className={`text-[10px] font-bold mt-1 ${priorityColor}`}>{priority}</div>
            </div>
        </div>
    );
};

const CaseCard: React.FC<{ title: string; problem: string; solution: string; outcome: string }> = ({ title, problem, solution, outcome }) => (
    <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{title}</div>
        <div className="space-y-4">
            <div>
                <div className="text-sm font-bold text-red-500 mb-1">Challenge</div>
                <p className="text-slate-600 text-sm">{problem}</p>
            </div>
            <div>
                <div className="text-sm font-bold text-blue-500 mb-1">Solution</div>
                <p className="text-slate-600 text-sm">{solution}</p>
            </div>
            <div className="pt-4 border-t border-slate-100">
                <div className="text-sm font-bold text-green-600 mb-1">Outcome</div>
                <p className="text-slate-800 font-bold text-sm">{outcome}</p>
            </div>
        </div>
    </div>
);

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none hover:bg-slate-50 transition-colors"
      >
        <span className="font-bold text-slate-800">{q}</span>
        {isOpen ? <ChevronUp className="text-secondary" size={20} /> : <ChevronDown className="text-slate-400" size={20} />}
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
            {a}
        </div>
      </div>
    </div>
  );
};