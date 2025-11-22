
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  Clock, Globe, Shield, Zap, Code, Database, Layout, Brain, Cpu, 
  Users, Terminal, Server, GitBranch, Laptop, Coffee, MessageSquare, ArrowRight, 
  Briefcase, UserCheck, Rocket, Code2, CheckCircle, Layers, Search,
  Smartphone, Cloud, Lock, Monitor, HardDrive, Settings
} from 'lucide-react';

export const ResourceAugmentation: React.FC = () => {
  const [activeTechTab, setActiveTechTab] = useState<'erpnext' | 'odoo' | 'web' | 'mobile' | 'cloud' | 'data'>('erpnext');

  const tabs = [
    { id: 'erpnext', label: 'ERPNext', icon: <Layers size={16} /> },
    { id: 'odoo', label: 'Odoo', icon: <Database size={16} /> },
    { id: 'web', label: 'Web & Backend', icon: <Monitor size={16} /> },
    { id: 'mobile', label: 'Mobile', icon: <Smartphone size={16} /> },
    { id: 'cloud', label: 'DevOps', icon: <Cloud size={16} /> },
    { id: 'data', label: 'Data & AI', icon: <Brain size={16} /> },
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        {/* Background Patterns - Updated to Blue shades */}
        <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(30deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6), linear-gradient(150deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6), linear-gradient(30deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6), linear-gradient(150deg, #3b82f6 12%, transparent 12.5%, transparent 87%, #3b82f6 87.5%, #3b82f6), linear-gradient(60deg, #1d4ed8 25%, transparent 25.5%, transparent 75%, #1d4ed8 75%, #1d4ed8), linear-gradient(60deg, #1d4ed8 25%, transparent 25.5%, transparent 75%, #1d4ed8 75%, #1d4ed8)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px, 0 0, 40px 70px'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/95 to-slate-900"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold mb-8 uppercase tracking-wider backdrop-blur-sm animate-fade-in-up">
             <Rocket size={14} /> Top 1% Global Talent
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            Elite Engineering Teams <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-200">On Demand</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up">
            From <strong>ERP Specialists</strong> to <strong>Full-Stack Architects</strong>. Scale your engineering capacity with pre-vetted senior developers who integrate seamlessly into your workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
            <Link to="/contact">
               <Button size="lg" variant="secondary" className="shadow-lg shadow-secondary/20 w-full sm:w-auto">
                 Build My Squad
               </Button>
            </Link>
            <Link to="/contact">
               <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-white/5 hover:border-white w-full sm:w-auto">
                 Download Rate Card
               </Button>
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-8 max-w-4xl mx-auto">
             <div>
               <div className="text-3xl font-bold text-white mb-1">48h</div>
               <div className="text-xs text-slate-400 uppercase tracking-wide">Avg. Time to Onboard</div>
             </div>
             <div>
               <div className="text-3xl font-bold text-white mb-1">30+</div>
               <div className="text-xs text-slate-400 uppercase tracking-wide">Core Experts</div>
             </div>
             <div>
               <div className="text-3xl font-bold text-white mb-1">94%</div>
               <div className="text-xs text-slate-400 uppercase tracking-wide">Retention Rate</div>
             </div>
             <div>
               <div className="text-3xl font-bold text-white mb-1">5yr+</div>
               <div className="text-xs text-slate-400 uppercase tracking-wide">Avg. Experience</div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. The "Why Us" Section */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full z-0"></div>
                    <img 
                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                     alt="Team Collaboration" 
                     className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                   />
                   <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 z-20 max-w-xs">
                      <div className="flex items-center gap-3 mb-3">
                         <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                            <UserCheck size={20} />
                         </div>
                         <div>
                            <div className="font-bold text-slate-900">Vetted Expert</div>
                            <div className="text-xs text-slate-500">Senior Solution Architect</div>
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="h-2 bg-slate-100 rounded-full w-full"></div>
                         <div className="h-2 bg-slate-100 rounded-full w-3/4"></div>
                      </div>
                   </div>
                </div>
                
                <div>
                   <h2 className="text-3xl font-bold text-primary mb-6">More Than Just "Staffing"</h2>
                   <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      Most agencies send you CVs of generic developers who treat your project like a gig. 
                      At Midocean, we provide <strong>Career Engineers</strong>. They are culturally aligned, tech-obsessed, and trained in modern agile methodologies.
                   </p>
 
                   <div className="space-y-6">
                      <ValuePropItem 
                         icon={<Briefcase size={20} />}
                         title="Domain Expertise"
                         desc="Our ERP devs understand Accounting and Manufacturing. Our Web devs understand SEO and Core Web Vitals."
                      />
                      <ValuePropItem 
                         icon={<Globe size={20} />}
                         title="Timezone Overlap"
                         desc="We work during your hours. Overlapping shifts for UK, US (EST), and GCC clients ensure real-time collaboration."
                      />
                      <ValuePropItem 
                         icon={<GitBranch size={20} />}
                         title="Code Quality Standards"
                         desc="We enforce strict linting, PR reviews, and CI/CD pipelines. No spaghetti code, ever."
                      />
                   </div>
                </div>
             </div>
          </div>
       </section>

      {/* 3. Technology Stack Focus (Expanded) */}
      <section className="py-20 bg-slate-50 border-y border-slate-200" id="tech-stack">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-primary mb-4">Core Technology Landscape</h2>
               <p className="text-slate-600 max-w-2xl mx-auto">
                 While we are famous for ERPNext & Odoo, our engineering pods cover the entire digital ecosystem.
               </p>
            </div>

            {/* New Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
               {tabs.map((tab) => (
                 <button 
                    key={tab.id}
                    onClick={() => setActiveTechTab(tab.id as any)}
                    className={`px-5 py-3 rounded-lg text-sm font-bold transition-all flex items-center gap-2 border ${
                      activeTechTab === tab.id 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-lg transform scale-105' 
                      : 'bg-white text-slate-500 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                 >
                    {tab.icon} {tab.label}
                 </button>
               ))}
            </div>

            {/* TAB CONTENT */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-12 shadow-sm min-h-[400px] animate-fade-in-up">
               
               {/* 1. ERPNEXT */}
               {activeTechTab === 'erpnext' && (
                  <TechContentLayout 
                    title="Frappe Ecosystem Experts"
                    desc="The best Frappe developers in the market. Contributors to the open-source core."
                    skills={[
                      { category: "Languages", items: ["Python 3.10+", "JavaScript (ES6+)", "Jinja2"] },
                      { category: "Database", items: ["MariaDB", "Redis", "PostgreSQL (Frappe v15)"] },
                      { category: "Frontend", items: ["Vue.js", "Frappe UI", "React.js"] },
                      { category: "Tools", items: ["Bench CLI", "Git", "Socket.io"] }
                    ]}
                    capabilities={[
                      "Complex Custom App Development",
                      "Server Scripts & Client Scripts",
                      "API Integrations (Rest & RPC)",
                      "Performance Optimization"
                    ]}
                    highlightColor="blue"
                  />
               )}

               {/* 2. ODOO */}
               {activeTechTab === 'odoo' && (
                  <TechContentLayout 
                    title="Odoo Technical Consultants"
                    desc="Experts in Odoo Community & Enterprise (v14 to v17). Migration and OWL framework specialists."
                    skills={[
                      { category: "Languages", items: ["Python", "XML", "JavaScript"] },
                      { category: "Framework", items: ["Odoo ORM", "OWL (Odoo Web Library)", "QWeb"] },
                      { category: "Database", items: ["PostgreSQL"] },
                      { category: "Infra", items: ["Odoo.sh", "Docker", "Nginx"] }
                    ]}
                    capabilities={[
                      "Module Migration (Legacy to v17)",
                      "Accounting Reports Customization",
                      "POS Hardware Integration",
                      "Theme Development"
                    ]}
                    highlightColor="purple"
                  />
               )}

               {/* 3. WEB & BACKEND */}
               {activeTechTab === 'web' && (
                  <TechContentLayout 
                    title="Modern Web Engineering"
                    desc="Full-cycle development using battle-tested frameworks. Scalable, secure, and SEO-friendly."
                    skills={[
                      { category: "Frontend", items: ["React.js", "Next.js", "Vue.js", "Angular", "Tailwind CSS"] },
                      { category: "Backend", items: ["Node.js (Nest/Express)", "Python (Django/FastAPI)", "PHP (Laravel)", "Java Spring Boot", ".NET Core"] },
                      { category: "Architecture", items: ["Microservices", "GraphQL", "Serverless", "REST"] },
                      { category: "CMS", items: ["WordPress", "Strapi", "Sanity"] }
                    ]}
                    capabilities={[
                      "SaaS Product Development",
                      "Enterprise Portals & Dashboards",
                      "Progressive Web Apps (PWA)",
                      "High-traffic E-commerce"
                    ]}
                    highlightColor="teal"
                  />
               )}

               {/* 4. MOBILE */}
               {activeTechTab === 'mobile' && (
                  <TechContentLayout 
                    title="Native & Cross-Platform Mobile"
                    desc="Building beautiful, responsive apps for iOS and Android that connect to your ERP or backend."
                    skills={[
                      { category: "Cross-Platform", items: ["Flutter (Dart)", "React Native"] },
                      { category: "Native iOS", items: ["Swift", "SwiftUI", "Objective-C"] },
                      { category: "Native Android", items: ["Kotlin", "Java"] },
                      { category: "Tools", items: ["Firebase", "Fastlane", "Xcode", "Android Studio"] }
                    ]}
                    capabilities={[
                      "Field Service Apps",
                      "Customer Loyalty Apps",
                      "Offline-first Architecture",
                      "Bluetooth/IoT Integration"
                    ]}
                    highlightColor="indigo"
                  />
               )}

               {/* 5. CLOUD & DEVOPS */}
               {activeTechTab === 'cloud' && (
                  <TechContentLayout 
                    title="Cloud Infrastructure & DevOps"
                    desc="Automating deployment pipelines and ensuring 99.99% uptime for your mission-critical apps."
                    skills={[
                      { category: "Cloud Providers", items: ["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean"] },
                      { category: "Containerization", items: ["Docker", "Kubernetes (K8s)", "Helm"] },
                      { category: "IaC", items: ["Terraform", "Ansible", "CloudFormation"] },
                      { category: "CI/CD", items: ["Jenkins", "GitHub Actions", "GitLab CI"] }
                    ]}
                    capabilities={[
                      "Infrastructure as Code (IaC)",
                      "Auto-scaling Architecture",
                      "Security Audits & Hardening",
                      "Disaster Recovery Setup"
                    ]}
                    highlightColor="orange"
                  />
               )}

               {/* 6. DATA & AI */}
               {activeTechTab === 'data' && (
                  <TechContentLayout 
                    title="Data Science & AI Engineering"
                    desc="Turning raw data into actionable insights using modern ML pipelines and LLMs."
                    skills={[
                      { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "ElasticSearch", "Snowflake"] },
                      { category: "AI / ML", items: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"] },
                      { category: "GenAI", items: ["OpenAI API", "LangChain", "LlamaIndex", "HuggingFace"] },
                      { category: "ETL", items: ["Apache Airflow", "Pandas", "Kafka"] }
                    ]}
                    capabilities={[
                      "Predictive Analytics Models",
                      "Custom AI Chatbots (RAG)",
                      "Data Warehousing",
                      "Business Intelligence Dashboards"
                    ]}
                    highlightColor="pink"
                  />
               )}

            </div>
         </div>
      </section>

      {/* 4. Hiring Process - Timeline */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-4">Deploy Your Team in 48 Hours</h2>
                  <p className="text-slate-600">No lengthy recruitment cycles. Our bench is ready.</p>
              </div>

              <div className="relative">
                  {/* Line */}
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                      <ProcessStep 
                         step="01" 
                         title="Share Reqs" 
                         desc="Tell us your tech stack, experience level, and domain requirements." 
                         icon={<MessageSquare size={24} />}
                      />
                      <ProcessStep 
                         step="02" 
                         title="Curated Profiles" 
                         desc="Within 24h, we send you CVs of the best-fit pre-vetted engineers." 
                         icon={<UserCheck size={24} />}
                      />
                      <ProcessStep 
                         step="03" 
                         title="Interview" 
                         desc="Conduct technical interviews or code tests to verify their skills." 
                         icon={<Monitor size={24} />}
                      />
                      <ProcessStep 
                         step="04" 
                         title="Onboard" 
                         desc="Sign the contract and the dev joins your Slack/Teams instantly." 
                         icon={<Rocket size={24} />}
                         highlight
                      />
                  </div>
              </div>
          </div>
      </section>

      {/* 5. Roles & Rates Preview */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Roles We Fill</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <RoleCard 
                      title="Senior ERPNext Architect"
                      exp="7+ Years"
                      focus="System Design, Performance, Security"
                      skills={["Large Scale Architecture", "Code Review", "Team Leadership"]}
                  />
                  <RoleCard 
                      title="Full Stack Developer"
                      exp="5+ Years"
                      focus="MERN / LAMP Stack + Cloud"
                      skills={["React", "Node.js", "AWS", "Microservices"]}
                  />
                  <RoleCard 
                      title="Mobile Engineer"
                      exp="4+ Years"
                      focus="Cross-platform Apps"
                      skills={["Flutter", "iOS", "Android", "Offline Sync"]}
                  />
                  <RoleCard 
                      title="Odoo Tech Lead"
                      exp="6+ Years"
                      focus="Migration Strategy, Architecture"
                      skills={["PostgreSQL Tuning", "Module Migration", "Server Mgmt"]}
                  />
                  <RoleCard 
                      title="DevOps Engineer"
                      exp="5+ Years"
                      focus="CI/CD & Infrastructure"
                      skills={["Kubernetes", "Docker", "Terraform", "Jenkins"]}
                  />
                  <RoleCard 
                      title="AI / ML Engineer"
                      exp="3+ Years"
                      focus="LLM Integration, Data Pipelines"
                      skills={["Python", "OpenAI", "TensorFlow", "RAG"]}
                  />
              </div>
          </div>
      </section>

      {/* 6. Engagement Models */}
      <section className="py-24 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-3xl font-bold text-primary mb-6">Flexible Engagement Models</h2>
                     <p className="text-slate-600 text-lg mb-8">
                         Whether you need a single developer to plug a gap or a full product team to build your MVP, we have a model for you.
                     </p>
                     <div className="space-y-6">
                         <ModelCard 
                            title="Staff Augmentation"
                            sub="Extend your team"
                            desc="Developers work as part of your internal team, under your PM's guidance. Best for scale."
                            icon={<Users className="text-blue-600"/>}
                         />
                         <ModelCard 
                            title="Dedicated Product Pod"
                            sub="Outsource the outcome"
                            desc="We provide a PM, QA, and Devs. We take ownership of the roadmap and delivery."
                            icon={<Briefcase className="text-blue-600"/>}
                         />
                     </div>
                 </div>
                 <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                     <img 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                        alt="Office Discussion" 
                        className="w-full h-full object-cover"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
                         <div className="text-white">
                             <div className="font-bold text-xl mb-2">Remote, yet Present.</div>
                             <p className="text-slate-300 text-sm">Our teams use Slack, Jira, and Zoom to stay perfectly synced with your workflow.</p>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
         <div className="max-w-3xl mx-auto px-4">
             <h2 className="text-3xl font-bold text-primary mb-12 text-center">Hiring FAQs</h2>
             <div className="space-y-4">
                 <FAQItem q="How quickly can they start?" a="Usually within 48 to 72 hours after you select a profile. We keep a bench of pre-vetted developers ready to deploy." />
                 <FAQItem q="What if the developer isn't a good fit?" a="We offer a 2-week replacement guarantee. If you're not happy with the performance in the first 2 weeks, we replace the resource at no extra cost." />
                 <FAQItem q="Do I own the code?" a="Yes, absolutely. It's a 'Work for Hire' arrangement. You own 100% of the IP and code produced by our developers." />
                 <FAQItem q="Do they work in my timezone?" a="Our developers in India work overlapping hours (typically 1 PM to 10 PM IST) which covers UK, Europe, GCC, and morning EST hours." />
                 <FAQItem q="Are there any hidden fees?" a="No. We charge a simple monthly retainer per resource. No setup fees, no exit fees, no infrastructure costs." />
             </div>
         </div>
      </section>

      {/* 8. CTA */}
      <section className="py-24 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
             <h2 className="text-4xl font-bold mb-6">Ready to scale your engineering capacity?</h2>
             <p className="text-xl text-slate-300 mb-10">
                Stop recruiting, start building. Get matched with top-tier technical talent today.
             </p>
             <Link to="/contact">
                <Button size="lg" variant="secondary" className="px-12 py-4 text-lg shadow-xl shadow-secondary/20">
                   Request Developer Profiles
                </Button>
             </Link>
          </div>
      </section>
    </div>
  );
};

// --- Subcomponents ---

const ValuePropItem: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
   <div className="flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
         {icon}
      </div>
      <div>
         <h3 className="font-bold text-slate-900 text-lg mb-1">{title}</h3>
         <p className="text-slate-600 leading-relaxed">{desc}</p>
      </div>
   </div>
);

const TechContentLayout: React.FC<{ 
  title: string; 
  desc: string; 
  skills: { category: string; items: string[] }[]; 
  capabilities: string[]; 
  highlightColor: 'blue' | 'purple' | 'teal' | 'indigo' | 'orange' | 'pink';
}> = ({ title, desc, skills, capabilities, highlightColor }) => {
  
  // Changed 'teal' to 'blue' mapping to align with user request
  const colors = {
    blue: 'text-blue-600 bg-blue-50 border-blue-100',
    purple: 'text-purple-600 bg-purple-50 border-purple-100',
    teal: 'text-blue-600 bg-blue-50 border-blue-100', // Remapped Teal to Blue
    indigo: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    orange: 'text-orange-600 bg-orange-50 border-orange-100',
    pink: 'text-pink-600 bg-pink-50 border-pink-100',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        <div className={`inline-block px-3 py-1 rounded font-bold text-xs mb-4 border ${colors[highlightColor].split(' ').slice(1).join(' ')}`}>
          <span className={colors[highlightColor].split(' ')[0]}>CORE COMPETENCY</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-4">{title}</h3>
        <p className="text-slate-600 mb-8 leading-relaxed">{desc}</p>
        
        <div className="grid grid-cols-2 gap-4">
           {skills.map((skillGroup, i) => (
             <div key={i} className="mb-2">
               <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{skillGroup.category}</div>
               <div className="flex flex-wrap gap-2">
                 {skillGroup.items.map(item => (
                   <span key={item} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-700">
                     {item}
                   </span>
                 ))}
               </div>
             </div>
           ))}
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-8 border border-slate-100 flex flex-col">
         <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2"><Settings size={18}/> What they can build:</h4>
         <ul className="space-y-4 flex-grow">
            {capabilities.map((cap, i) => (
               <li key={i} className="flex items-start gap-3">
                  <CheckCircle size={18} className={`${colors[highlightColor].split(' ')[0]} shrink-0 mt-0.5`} />
                  <span className="text-slate-700 font-medium">{cap}</span>
               </li>
            ))}
         </ul>
         <Link to="/contact" className="mt-8">
            <Button fullWidth variant="outline" className="bg-white">Hire {title.split(' ')[0]} Experts</Button>
         </Link>
      </div>
    </div>
  );
};

const ProcessStep: React.FC<{ step: string; title: string; desc: string; icon: React.ReactNode; highlight?: boolean }> = ({ step, title, desc, icon, highlight }) => (
   <div className={`p-6 rounded-2xl border text-center transition-all hover:-translate-y-1 h-full flex flex-col items-center ${highlight ? 'bg-slate-900 text-white border-slate-800 shadow-xl' : 'bg-white border-slate-200 text-slate-800 shadow-sm'}`}>
      <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4 ${highlight ? 'bg-white/10 text-secondary' : 'bg-slate-50 text-slate-400'}`}>
         {icon}
      </div>
      <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${highlight ? 'text-slate-400' : 'text-slate-400'}`}>{step}</div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className={`text-sm leading-relaxed ${highlight ? 'text-slate-300' : 'text-slate-500'}`}>{desc}</p>
   </div>
);

const RoleCard: React.FC<{ title: string; exp: string; focus: string; skills: string[] }> = ({ title, exp, focus, skills }) => (
   <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
         <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
         <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded">{exp}</span>
      </div>
      <p className="text-sm text-slate-500 mb-4 h-10">{focus}</p>
      <div className="flex flex-wrap gap-2">
         {skills.map((skill, i) => (
            <span key={i} className="px-2 py-1 bg-slate-50 text-slate-600 text-xs rounded border border-slate-100 font-medium">
               {skill}
            </span>
         ))}
      </div>
   </div>
);

const ModelCard: React.FC<{ title: string; sub: string; desc: string; icon: React.ReactNode }> = ({ title, sub, desc, icon }) => (
   <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex gap-4 hover:bg-white hover:shadow-md transition-all cursor-default">
      <div className="mt-1">{icon}</div>
      <div>
         <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
         <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">{sub}</div>
         <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
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
         <div className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <ArrowRight className="text-slate-400 rotate-90" size={18} />
         </div>
       </button>
       <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
         <div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100 mt-2">
             {a}
         </div>
       </div>
     </div>
   );
 };
