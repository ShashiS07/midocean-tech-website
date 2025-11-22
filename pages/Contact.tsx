
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Clock, CheckCircle, Building2, Globe2, Check, Loader2, AlertCircle, ShieldCheck, Zap, MessageSquare, ArrowRight, Lock } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: [] as string[],
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const interests = [
    "ERPNext Implementation",
    "Odoo Services",
    "Hire Developers",
    "Custom Development",
    "Support / AMS",
    "General Inquiry"
  ];

  const handleInterestChange = (item: string) => {
    setFormState(prev => {
      const newInterests = prev.interest.includes(item)
        ? prev.interest.filter(i => i !== item)
        : [...prev.interest, item];
      return { ...prev, interest: newInterests };
    });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = "Business Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSending(true);
    setSubmissionError(null);

    const payload = {
        to: 'business@midocean.tech',
        from: formState.email,
        subject: `New Inquiry from ${formState.name} - ${formState.company}`,
        name: formState.name,
        email: formState.email,
        company: formState.company,
        phone: formState.phone,
        interests: formState.interest.join(', '),
        message: formState.message,
        source: 'Midocean Website Contact Form'
    };

    try {
        // Simulate API call
        await new Promise(r => setTimeout(r, 1500));
        
        setIsSubmitted(true);
        setFormState({
            name: '', email: '', company: '', phone: '', interest: [], message: ''
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    } catch (err: any) {
        console.error('Submission error:', err);
        setSubmissionError(`Failed to send: ${err.message}`);
    } finally {
        setIsSending(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white p-10 rounded-3xl shadow-2xl text-center animate-fade-in-up border border-slate-100">
          <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received!</h2>
          <p className="text-slate-600 mb-8 text-lg leading-relaxed">
            Thanks, <strong>{formState.name}</strong>. We've assigned a ticket to our pre-sales engineering team. Expect a technical response (not a sales bot) within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)} variant="outline" className="w-full">Return to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Header */}
      <div className="bg-slate-900 text-white pt-28 pb-32 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get a Technical Roadmap, <br/><span className="text-secondary">Not a Sales Pitch.</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-xl">
              Discuss your ERP or Engineering challenges directly with a Solution Architect.
            </p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-200">
          
          {/* LEFT: Motivation & Form */}
          <div className="p-8 md:p-12 lg:w-2/3 bg-white order-2 lg:order-1">
            
            {/* Improved Motivation Block */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-slate-900">Tell us about your project</h2>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-xs font-bold border border-green-100">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        Response time: &lt; 24h
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex flex-col items-start gap-3">
                        <div className="p-2 bg-white rounded-lg text-blue-600 shadow-sm"><Zap size={18}/></div>
                        <div>
                            <div className="font-bold text-slate-900 text-sm">Fast Turnaround</div>
                            <div className="text-xs text-slate-500 mt-1">We value your time. Get a roadmap quickly.</div>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-100 flex flex-col items-start gap-3">
                        <div className="p-2 bg-white rounded-lg text-amber-600 shadow-sm"><ShieldCheck size={18}/></div>
                        <div>
                            <div className="font-bold text-slate-900 text-sm">NDA Protected</div>
                            <div className="text-xs text-slate-500 mt-1">Your IP and ideas are safe with us.</div>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-100 flex flex-col items-start gap-3">
                        <div className="p-2 bg-white rounded-lg text-purple-600 shadow-sm"><MessageSquare size={18}/></div>
                        <div>
                            <div className="font-bold text-slate-900 text-sm">Expert Access</div>
                            <div className="text-xs text-slate-500 mt-1">Talk to engineers, not sales scripts.</div>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              
              {/* Section 1: User Info */}
              <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">1</div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Your Details</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        className={`w-full px-4 py-3 rounded-lg bg-white border text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium ${
                          errors.name 
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-slate-300 focus:border-blue-500'
                        }`}
                        placeholder="e.g. John Doe"
                        name="user_name"
                        value={formState.name}
                        onChange={e => {
                          setFormState({...formState, name: e.target.value});
                          if (errors.name) setErrors({...errors, name: ''});
                        }}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Business Email <span className="text-red-500">*</span></label>
                      <input 
                        type="email" 
                        className={`w-full px-4 py-3 rounded-lg bg-white border text-slate-900 placeholder:text-slate-400 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium ${
                          errors.email
                            ? 'border-red-300 focus:border-red-500' 
                            : 'border-slate-300 focus:border-blue-500'
                        }`}
                        placeholder="john@company.com"
                        name="user_email"
                        value={formState.email}
                        onChange={e => {
                          setFormState({...formState, email: e.target.value});
                          if (errors.email) setErrors({...errors, email: ''});
                        }}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                        placeholder="+1 (555) 000-0000"
                        name="phone"
                        value={formState.phone}
                        onChange={e => setFormState({...formState, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Company Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none font-medium"
                        placeholder="Acme Corp"
                        name="company"
                        value={formState.company}
                        onChange={e => setFormState({...formState, company: e.target.value})}
                      />
                    </div>
                  </div>
              </div>

              {/* Section 2: Intent */}
              <div className="space-y-4">
                 <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">2</div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">How can we help?</h4>
                  </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interests.map(item => {
                      const isSelected = formState.interest.includes(item);
                      return (
                        <button
                          type="button"
                          key={item}
                          onClick={() => handleInterestChange(item)}
                          className={`
                            text-sm px-4 py-3 rounded-lg border font-semibold transition-all duration-200 text-center outline-none
                            ${isSelected
                              ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200 ring-2 ring-offset-1 ring-blue-600'
                              : 'bg-white text-slate-600 border-slate-300 hover:border-blue-400 hover:text-blue-600'
                            }
                          `}
                        >
                          {item}
                        </button>
                      );
                    })}
                 </div>
              </div>

              {/* Section 3: Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">3</div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Project Details</h4>
                  </div>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none resize-none font-medium leading-relaxed"
                  placeholder="Briefly describe your requirements, timeline, and what success looks like..."
                  name="message"
                  value={formState.message}
                  onChange={e => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>

              {submissionError && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-100 animate-fade-in-up">
                    <AlertCircle size={18} /> {submissionError}
                </div>
              )}

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Lock size={12} />
                    <span>Your information is secure and encrypted.</span>
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto px-10 py-4 text-lg shadow-xl shadow-blue-200" disabled={isSending}>
                  {isSending ? (
                      <span className="flex items-center gap-2">
                          <Loader2 size={20} className="animate-spin" /> Processing...
                      </span>
                  ) : (
                      <span className="flex items-center gap-2">
                          Submit Request <ArrowRight size={20} />
                      </span>
                  )}
                </Button>
              </div>
            </form>
          </div>

          {/* RIGHT: Contact Info Sidebar */}
          <div className="bg-slate-900 text-white p-10 lg:w-1/3 relative overflow-hidden order-1 lg:order-2 flex flex-col">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 opacity-10 rounded-full blur-3xl -ml-20 -mb-20"></div>
             
             <div className="relative z-10 space-y-10">
                <div>
                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-white">
                      <Globe2 className="text-secondary" size={24} /> Global Offices
                    </h3>
                    <div className="space-y-8">
                      <div className="group">
                         <div className="flex items-center gap-3 mb-2">
                             <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-secondary"><Building2 size={16}/></div>
                             <div className="font-bold text-lg">India (HQ)</div>
                         </div>
                         <div className="pl-11 text-slate-400 text-sm leading-relaxed font-light border-l-2 border-white/10 group-hover:border-secondary transition-colors">
                            1008, Synergy Tower, Corporate Rd,<br />
                            Ahmedabad, Gujarat 380015
                         </div>
                      </div>

                      <div className="group">
                         <div className="flex items-center gap-3 mb-2">
                             <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-secondary"><MapPin size={16}/></div>
                             <div className="font-bold text-lg">United Kingdom</div>
                         </div>
                         <div className="pl-11 text-slate-400 text-sm leading-relaxed font-light border-l-2 border-white/10 group-hover:border-secondary transition-colors">
                            71-75 Shelton Street,<br />
                            Covent Garden, London
                         </div>
                      </div>

                      <div className="group">
                         <div className="flex items-center gap-3 mb-2">
                             <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-secondary"><MapPin size={16}/></div>
                             <div className="font-bold text-lg">UAE</div>
                         </div>
                         <div className="pl-11 text-slate-400 text-sm leading-relaxed font-light border-l-2 border-white/10 group-hover:border-secondary transition-colors">
                            Sharjah Media City,<br />
                            Sharjah, United Arab Emirates
                         </div>
                      </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400 uppercase font-bold mb-1">Email Us</div>
                            <a href="mailto:business@midocean.tech" className="text-white font-medium hover:text-secondary transition-colors">
                                business@midocean.tech
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary shrink-0">
                            <Clock size={20} />
                        </div>
                        <div>
                            <div className="text-xs text-slate-400 uppercase font-bold mb-1">Working Hours</div>
                            <div className="text-white font-medium text-sm">Mon-Fri: 9am - 7pm IST</div>
                            <div className="text-xs text-slate-500 mt-1">Overlapping hours for UK/US clients</div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};
