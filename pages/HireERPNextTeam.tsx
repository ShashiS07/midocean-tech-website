
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Users, CheckCircle, ShieldCheck, Zap, Briefcase, Layout, MessageSquare, Globe } from 'lucide-react';

export const HireERPNextTeam: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* 1. Hero: Focus on "Managed Squads" */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-6 border border-blue-500/30">
                        <Users size={14} className="mr-2" /> Managed Engineering Pods
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        Hire a Dedicated <br/>
                        <span className="text-blue-400">ERPNext Team</span>
                    </h1>
                    <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                        Stop managing individual freelancers. Deploy a pre-configured squad (PM, Architect, Devs, QA) that takes full ownership of your project delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link to="/contact">
                            <Button size="lg" variant="secondary" className="shadow-xl shadow-secondary/20 w-full sm:w-auto">
                                Build Your Squad
                            </Button>
                        </Link>
                        <Link to="/resource-augmentation">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600 text-white hover:bg-slate-800">
                                View Rate Card
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* Visual: Team Composition */}
                <div className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Typical Squad Structure</h3>
                    <div className="space-y-4">
                        <TeamMember role="Project Manager" desc="Scrum Master, Agile delivery, Communication." icon="PM" color="bg-blue-500" />
                        <TeamMember role="Solution Architect" desc="System Design, Schema Optimization, Code Review." icon="SA" color="bg-purple-500" />
                        <TeamMember role="Sr. Python Developer" desc="Backend logic, API Integrations, Performance." icon="BE" color="bg-green-500" />
                        <TeamMember role="Frappe Developer" desc="UI/UX, Portal Pages, Print Formats." icon="FE" color="bg-amber-500" />
                        <TeamMember role="QA Engineer" desc="Manual testing, Cypress automation." icon="QA" color="bg-red-500" />
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2. Why a Team vs Freelancers? */}
      <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-4">Why Hiring a "Team" De-risks Your Project</h2>
                  <p className="text-slate-600 text-lg">Individual developers write code. Teams deliver products.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <FeatureCard 
                      icon={<ShieldCheck size={32} className="text-green-500" />}
                      title="No Single Point of Failure"
                      desc="If a freelancer falls sick, your project stalls. With our squads, knowledge is shared, and backup resources are always available."
                  />
                  <FeatureCard 
                      icon={<Zap size={32} className="text-amber-500" />}
                      title="Faster Velocity"
                      desc="Our pods have worked together before. They have established communication channels, coding standards, and CI/CD pipelines ready to go."
                  />
                  <FeatureCard 
                      icon={<Briefcase size={32} className="text-blue-500" />}
                      title="Managed Delivery"
                      desc="You don't need to be the Project Manager. Our dedicated PM handles sprint planning, standups, and blockers for you."
                  />
              </div>
          </div>
      </section>

      {/* 3. Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-primary mb-12 text-center">Deployment Timeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Step num="01" title="Requirement" desc="We analyze your backlog and define the team composition needed." />
                  <Step num="02" title="Selection" desc="We propose specific profiles. You interview them (optional)." />
                  <Step num="03" title="Onboarding" desc="Team setup on your Slack/Jira. Access rights and environment setup." />
                  <Step num="04" title="Kickoff" desc="First sprint planning. The team starts delivering value in week 1." />
              </div>
          </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-primary mb-6">Ready to scale your engineering?</h2>
              <p className="text-slate-600 mb-8 text-lg">
                  Deploy a battle-tested ERPNext team within 48 hours.
              </p>
              <Link to="/contact">
                  <Button size="lg">Schedule Team Discovery</Button>
              </Link>
          </div>
      </section>
    </div>
  );
};

const TeamMember: React.FC<{ role: string; desc: string; icon: string; color: string }> = ({ role, desc, icon, color }) => (
    <div className="flex items-center gap-4 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white ${color}`}>
            {icon}
        </div>
        <div>
            <div className="font-bold text-white text-sm">{role}</div>
            <div className="text-xs text-slate-400">{desc}</div>
        </div>
    </div>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
);

const Step: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm text-center">
        <div className="text-4xl font-bold text-slate-200 mb-4">{num}</div>
        <h3 className="font-bold text-lg text-primary mb-2">{title}</h3>
        <p className="text-sm text-slate-500">{desc}</p>
    </div>
);
