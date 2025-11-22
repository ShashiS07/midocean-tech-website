import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle, 
  BarChart3, 
  FileText, 
  Users, 
  Database,
  ArrowRight,
  RefreshCw,
  Factory,
  ShoppingBag,
  Truck,
  Activity,
  HardHat,
  Briefcase,
  Check,
  X,
  Lightbulb,
  ShieldAlert,
  TrendingUp,
  Calendar,
  Target,
  Clock,
  UserPlus,
  Search,
  Minimize2,
  UserX,
  FileQuestion,
  AlertTriangle,
  ArrowRightCircle
} from 'lucide-react';

// --- Types & Initial State ---

type FormData = {
  // Step 1
  industry: string;
  companySize: string;
  hasExistingERP: string;
  // Step 2
  definedProcesses: string[];
  processStandardization: number; // 1-5
  // Step 3
  dataCleanliness: string;
  dataSource: string;
  hasDataTeam: boolean | null;
  // Step 4
  hasProjectOwner: string;
  openToChange: string;
  constraints: string;
};

const INITIAL_DATA: FormData = {
  industry: '',
  companySize: '',
  hasExistingERP: '',
  definedProcesses: [],
  processStandardization: 3,
  dataCleanliness: '',
  dataSource: '',
  hasDataTeam: null,
  hasProjectOwner: '',
  openToChange: '',
  constraints: ''
};

const STEPS = [
  { id: 1, title: "Scale & Industry", subtitle: "Company Profile", icon: <BarChart3 size={20} /> },
  { id: 2, title: "Process Maturity", subtitle: "Workflows", icon: <FileText size={20} /> },
  { id: 3, title: "Data Hygiene", subtitle: "Migration Risk", icon: <Database size={20} /> },
  { id: 4, title: "People & Change", subtitle: "Adoption Readiness", icon: <Users size={20} /> }
];

// --- Main Component ---

export const ReadinessChecker: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep, showResults]);

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleProcess = (process: string) => {
    setFormData(prev => {
      const current = prev.definedProcesses;
      const updated = current.includes(process)
        ? current.filter(p => p !== process)
        : [...current, process];
      return { ...prev, definedProcesses: updated };
    });
  };

  const calculateScore = () => {
    let points = 0;
    
    // 1. Systems (15 pts)
    if (formData.hasExistingERP === 'Yes') points += 15;
    
    // 2. Processes (25 pts)
    const processScore = Math.min(formData.definedProcesses.length * 3, 15);
    const standardScore = formData.processStandardization * 2;
    points += processScore + standardScore;

    // 3. Data (25 pts)
    if (formData.dataCleanliness === 'Mostly Clean & Structured') points += 15;
    else if (formData.dataCleanliness === 'Partially Clean') points += 8;
    if (formData.hasDataTeam) points += 10;

    // 4. People (35 pts)
    if (formData.hasProjectOwner === 'Yes, Single Point of Contact') points += 20;
    if (formData.openToChange === 'Yes, they are eager') points += 15;
    else if (formData.openToChange === 'Maybe, with training') points += 5;

    return Math.min(Math.round(points), 100);
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev + 1);
        setIsAnimating(false);
      }, 300);
    } else {
      setScore(calculateScore());
      setShowResults(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStep(prev => prev - 1);
        setIsAnimating(false);
      }, 300);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1: return formData.industry && formData.companySize && formData.hasExistingERP;
      case 2: return formData.definedProcesses.length > 0;
      case 3: return formData.dataCleanliness && formData.dataSource && formData.hasDataTeam !== null;
      case 4: return formData.hasProjectOwner && formData.openToChange;
      default: return false;
    }
  };

  if (showResults) {
    return <ResultsView score={score} formData={formData} onRetry={() => {
        setFormData(INITIAL_DATA);
        setCurrentStep(1);
        setShowResults(false);
    }} />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Compact Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">
                    <Activity size={18} />
                </div>
                <span className="font-bold text-slate-800 hidden sm:inline">ERP Readiness Assessment</span>
            </div>
            <Link to="/">
                <Button variant="ghost" size="sm">Exit</Button>
            </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8 lg:py-12">
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Main Wizard Card */}
            <div className="lg:col-span-8">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col min-h-[600px]">
                    
                    {/* Progress Stepper */}
                    <div className="bg-slate-50 border-b border-slate-100 p-6">
                        <div className="flex justify-between items-center">
                            {STEPS.map((step, idx) => {
                                const isActive = step.id === currentStep;
                                const isCompleted = step.id < currentStep;
                                return (
                                    <div key={step.id} className="flex flex-col items-center relative z-10 flex-1 group">
                                        {/* Connecting Line */}
                                        {idx !== 0 && (
                                            <div className={`absolute top-4 -left-[50%] w-full h-0.5 -z-10 ${isCompleted ? 'bg-secondary' : 'bg-slate-200'}`} />
                                        )}
                                        
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-2 transition-all duration-300 ${
                                            isActive ? 'border-secondary bg-secondary text-white scale-110 shadow-lg shadow-secondary/30' :
                                            isCompleted ? 'border-secondary bg-secondary text-white' :
                                            'border-slate-200 bg-white text-slate-400'
                                        }`}>
                                            {isCompleted ? <Check size={14} /> : step.id}
                                        </div>
                                        <span className={`mt-2 text-[10px] uppercase font-bold tracking-wider transition-colors ${isActive ? 'text-primary' : 'text-slate-400'}`}>
                                            {step.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Dynamic Form Content */}
                    <div className={`p-6 md:p-8 flex-grow transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                        
                        {/* Step 1: Industry & Scale */}
                        {currentStep === 1 && (
                            <div className="space-y-8">
                                <div>
                                    <Label>Select your primary industry</Label>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                                        {[
                                            { name: 'Manufacturing', icon: <Factory /> },
                                            { name: 'Trading / Retail', icon: <ShoppingBag /> },
                                            { name: 'Automotive / HSRP', icon: <Truck /> },
                                            { name: 'Healthcare', icon: <Activity /> },
                                            { name: 'Construction', icon: <HardHat /> },
                                            { name: 'Services / Other', icon: <Briefcase /> }
                                        ].map(opt => (
                                            <CardOption 
                                                key={opt.name}
                                                selected={formData.industry === opt.name}
                                                onClick={() => handleChange('industry', opt.name)}
                                            >
                                                <div className="mb-2 opacity-80">{opt.icon}</div>
                                                {opt.name}
                                            </CardOption>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <Label>How many system users will you have?</Label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                                        {['1-20', '21-50', '51-200', '200+'].map(opt => (
                                            <CardOption 
                                                key={opt}
                                                selected={formData.companySize === opt}
                                                onClick={() => handleChange('companySize', opt)}
                                                center
                                            >
                                                {opt}
                                            </CardOption>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <Label>Are you migrating from an existing ERP?</Label>
                                    <div className="flex gap-4 mt-3">
                                        <RadioCard 
                                            label="Yes, migrating from legacy" 
                                            subLabel="SAP, Microsoft, Custom ERP"
                                            selected={formData.hasExistingERP === 'Yes'}
                                            onClick={() => handleChange('hasExistingERP', 'Yes')}
                                        />
                                        <RadioCard 
                                            label="No, first time ERP" 
                                            subLabel="Using Excel, Tally, or Paper"
                                            selected={formData.hasExistingERP === 'No'}
                                            onClick={() => handleChange('hasExistingERP', 'No')}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 2: Processes */}
                        {currentStep === 2 && (
                            <div className="space-y-8">
                                <div>
                                    <Label>Which processes are currently documented (SOPs)?</Label>
                                    <p className="text-sm text-slate-500 mb-4">Select all that apply</p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {['Sales & CRM', 'Procurement', 'Inventory Management', 'Manufacturing / Production', 'Finance & Accounting', 'HR & Payroll'].map(proc => (
                                            <CheckboxCard 
                                                key={proc}
                                                label={proc}
                                                checked={formData.definedProcesses.includes(proc)}
                                                onChange={() => toggleProcess(proc)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <Label>How standardized are these workflows?</Label>
                                    <div className="mt-6 px-2">
                                        <div className="flex justify-between mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            <span>Ad-hoc / Chaos</span>
                                            <span>Strictly Enforced</span>
                                        </div>
                                        <div className="relative h-3 bg-slate-100 rounded-full">
                                            <div 
                                                className="absolute h-3 bg-gradient-to-r from-secondary/50 to-secondary rounded-full transition-all duration-300"
                                                style={{ width: `${(formData.processStandardization - 1) * 25}%` }}
                                            ></div>
                                            {[1, 2, 3, 4, 5].map(num => (
                                                <button
                                                    key={num}
                                                    onClick={() => handleChange('processStandardization', num)}
                                                    className={`absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all shadow-sm border-2 ${
                                                        formData.processStandardization === num 
                                                        ? 'bg-white border-secondary text-secondary scale-125 z-10 ring-4 ring-secondary/10' 
                                                        : 'bg-white border-slate-200 text-slate-400 hover:border-secondary/50'
                                                    }`}
                                                    style={{ left: `${(num - 1) * 25}%`, transform: `translate(-50%, -50%) ${formData.processStandardization === num ? 'scale(1.25)' : 'scale(1)'}` }}
                                                >
                                                    {num}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Data */}
                        {currentStep === 3 && (
                            <div className="space-y-8">
                                <div>
                                    <Label>How clean is your master data?</Label>
                                    <div className="grid grid-cols-1 gap-3 mt-3">
                                        {[
                                            { val: 'Messy / Duplicates / Missing Info', desc: 'Needs significant cleanup before import' },
                                            { val: 'Partially Clean', desc: 'Some spreadsheets are good, others defined loosely' },
                                            { val: 'Mostly Clean & Structured', desc: 'Ready for template import with minor adjustments' }
                                        ].map(opt => (
                                            <CardOption 
                                                key={opt.val}
                                                selected={formData.dataCleanliness === opt.val}
                                                onClick={() => handleChange('dataCleanliness', opt.val)}
                                                alignLeft
                                            >
                                                <div className="font-bold">{opt.val}</div>
                                                <div className="text-xs font-normal opacity-70">{opt.desc}</div>
                                            </CardOption>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <Label>Primary Data Source</Label>
                                    <input 
                                        type="text" 
                                        className="w-full p-4 mt-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/20 transition-all outline-none font-medium"
                                        placeholder="e.g. Tally, Busy, Excel, Legacy SAP..."
                                        value={formData.dataSource}
                                        onChange={(e) => handleChange('dataSource', e.target.value)}
                                    />
                                </div>

                                <div>
                                    <Label>Do you have a dedicated data team?</Label>
                                    <div className="flex gap-4 mt-3">
                                        <RadioCard 
                                            label="Yes" 
                                            subLabel="We have resources for cleaning"
                                            selected={formData.hasDataTeam === true}
                                            onClick={() => handleChange('hasDataTeam', true)}
                                        />
                                        <RadioCard 
                                            label="No" 
                                            subLabel="We will need assistance"
                                            selected={formData.hasDataTeam === false}
                                            onClick={() => handleChange('hasDataTeam', false)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: People */}
                        {currentStep === 4 && (
                            <div className="space-y-8">
                                <div>
                                    <Label>Project Leadership</Label>
                                    <div className="grid grid-cols-1 gap-3 mt-3">
                                        {[
                                            'Yes, Single Point of Contact',
                                            'Distributed Ownership (Multiple Heads)',
                                            'No, not assigned yet'
                                        ].map(opt => (
                                            <CardOption 
                                                key={opt}
                                                selected={formData.hasProjectOwner === opt}
                                                onClick={() => handleChange('hasProjectOwner', opt)}
                                                alignLeft
                                            >
                                                {opt}
                                            </CardOption>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <Label>Team Sentiment to Change</Label>
                                    <div className="grid grid-cols-1 gap-3 mt-3">
                                        {[
                                            { val: 'Yes, they are eager', icon: <TrendingUp className="text-green-500" /> },
                                            { val: 'Maybe, with training', icon: <AlertCircle className="text-amber-500" /> },
                                            { val: 'No, resistance expected', icon: <ShieldAlert className="text-red-500" /> }
                                        ].map(opt => (
                                            <div 
                                                key={opt.val}
                                                onClick={() => handleChange('openToChange', opt.val)}
                                                className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                    formData.openToChange === opt.val
                                                    ? 'border-secondary bg-secondary/5 shadow-md' 
                                                    : 'border-slate-100 hover:border-slate-300'
                                                }`}
                                            >
                                                <div className="p-2 bg-white rounded-full shadow-sm">{opt.icon}</div>
                                                <div className={`font-bold ${formData.openToChange === opt.val ? 'text-secondary' : 'text-slate-700'}`}>{opt.val}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <Label>Constraints or Hard Deadlines (Optional)</Label>
                                    <textarea
                                        className="w-full p-4 mt-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-secondary focus:bg-white focus:ring-2 focus:ring-secondary/20 transition-all outline-none resize-none h-24"
                                        placeholder="e.g. Must go live before new fiscal year..."
                                        value={formData.constraints}
                                        onChange={(e) => handleChange('constraints', e.target.value)}
                                    />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-between items-center">
                        <Button 
                            variant="ghost" 
                            onClick={handleBack} 
                            disabled={currentStep === 1}
                            className={`text-slate-500 hover:text-slate-800 ${currentStep === 1 ? 'invisible' : ''}`}
                        >
                            <ChevronLeft size={18} className="mr-1" /> Back
                        </Button>

                        <Button 
                            onClick={handleNext} 
                            disabled={!isStepValid()}
                            className={`px-8 ${!isStepValid() ? 'opacity-50 cursor-not-allowed' : 'shadow-lg shadow-primary/20'}`}
                        >
                            {currentStep === STEPS.length ? 'Generate Report' : 'Next Step'} 
                            {currentStep !== STEPS.length && <ChevronRight size={18} className="ml-2" />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Right Sidebar - Context */}
            <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
                    <div className="flex items-center gap-3 text-primary font-bold mb-6 border-b border-slate-100 pb-4">
                        <Lightbulb className="text-secondary fill-secondary/20" size={20} />
                        <span>Why We Ask This</span>
                    </div>
                    
                    <div className="prose prose-sm text-slate-600">
                         {currentStep === 1 && (
                             <div className="animate-fade-in-up">
                                 <h4 className="font-bold text-slate-800 mb-2">Scale & Complexity</h4>
                                 <p>ERP architectures differ vastly based on user count. A 500-user setup needs read-replicas and load balancers, while a 20-user setup can run on a simpler VPS.</p>
                                 <p className="mt-4">Knowing your industry helps us identify which <strong>modules</strong> are critical for your MVP.</p>
                             </div>
                         )}
                         {currentStep === 2 && (
                             <div className="animate-fade-in-up">
                                 <h4 className="font-bold text-slate-800 mb-2">Automation vs Chaos</h4>
                                 <p>"Automating a chaotic process just creates automated chaos."</p>
                                 <p className="mt-4">Standardization score helps us estimate the <strong>Consulting Effort</strong> needed before we write a single line of code.</p>
                             </div>
                         )}
                         {currentStep === 3 && (
                             <div className="animate-fade-in-up">
                                 <h4 className="font-bold text-slate-800 mb-2">The #1 Blocker</h4>
                                 <p>Data Migration is historically the biggest reason for implementation delays.</p>
                                 <p className="mt-4">If data is messy, we recommend a <strong>Data Cleansing Sprint</strong> prior to the main project kickoff.</p>
                             </div>
                         )}
                         {currentStep === 4 && (
                             <div className="animate-fade-in-up">
                                 <h4 className="font-bold text-slate-800 mb-2">Change Management</h4>
                                 <p>ERP success is 20% technology and 80% people.</p>
                                 <p className="mt-4">Without a strong internal <strong>Project Owner</strong>, decisions stall. Resistance to change indicates a need for heavy training budgets.</p>
                             </div>
                         )}
                    </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start gap-3">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-600 shrink-0">
                        <ShieldAlert size={16} />
                    </div>
                    <div className="text-xs text-blue-800 leading-relaxed">
                        <strong>Privacy Note:</strong> Your answers are processed locally and only sent if you choose to contact us at the end.
                    </div>
                </div>
            </div>

         </div>
      </div>
    </div>
  );
};

// --- Results View ---

type ActionItem = {
  icon: React.ReactNode;
  text: string;
}

type RiskItem = {
  icon: React.ReactNode;
  text: string;
}

const ResultsView: React.FC<{ score: number; formData: FormData; onRetry: () => void }> = ({ score, formData, onRetry }) => {
    let category = "";
    let colorClass = "";
    let bgClass = "";
    let description = "";
    let nextSteps: ActionItem[] = [];
    let riskFactors: RiskItem[] = [];

    // Determine Category and Next Steps based on Score
    if (score >= 80) {
        category = "Implementation Ready";
        colorClass = "text-green-600";
        bgClass = "bg-green-50 border-green-200";
        description = "Your organization exhibits high maturity. You have defined processes, clean data, and the right leadership structure.";
        nextSteps = [
            { icon: <Calendar size={18} />, text: "Schedule a Blueprinting Workshop" },
            { icon: <Target size={18} />, text: "Define specific KPI targets for the new system" },
            { icon: <Clock size={18} />, text: "Select a deployment date" }
        ];
    } else if (score >= 50) {
        category = "Partially Ready";
        colorClass = "text-amber-600";
        bgClass = "bg-amber-50 border-amber-200";
        description = "You have the basics in place, but significant gaps exist in data quality or process standardization.";
        nextSteps = [
            { icon: <Database size={18} />, text: "Start a 'Data Cleansing Sprint' immediately" },
            { icon: <FileText size={18} />, text: "Document SOPs for critical workflows" },
            { icon: <UserPlus size={18} />, text: "Appoint a dedicated internal Project Champion" }
        ];
    } else {
        category = "Pre-Consulting Needed";
        colorClass = "text-red-600";
        bgClass = "bg-red-50 border-red-200";
        description = "Starting an ERP project now carries high risk. Focus on organizational readiness before technology selection.";
        nextSteps = [
            { icon: <Search size={18} />, text: "Hire a Business Analyst to map processes" },
            { icon: <Minimize2 size={18} />, text: "Consolidate data from scattered Excel sheets" },
            { icon: <Users size={18} />, text: "Build internal consensus on the need for change" }
        ];
    }

    // Determine Risks based on specific inputs
    if (formData.hasProjectOwner !== 'Yes, Single Point of Contact') {
        riskFactors.push({ icon: <UserX size={18} />, text: "Weak Internal Ownership" });
    }
    if (formData.dataCleanliness.includes('Messy')) {
        riskFactors.push({ icon: <Database size={18} />, text: "High Data Migration Effort" });
    }
    if (formData.processStandardization < 3) {
        riskFactors.push({ icon: <FileQuestion size={18} />, text: "Undefined Processes" });
    }
    if (formData.openToChange.includes('resistance')) {
        riskFactors.push({ icon: <Users size={18} />, text: "User Adoption Risk" });
    }
    if (formData.hasExistingERP === 'No' && score < 50) {
        riskFactors.push({ icon: <AlertTriangle size={18} />, text: "First-time ERP Culture Shock" });
    }

    // Fallback if no risks
    if (riskFactors.length === 0) {
       riskFactors.push({ icon: <CheckCircle2 size={18} />, text: "No major risks detected." });
    }

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                
                {/* Report Card */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden animate-fade-in-up">
                    <div className="bg-primary text-white p-8 text-center relative overflow-hidden">
                         <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                         <h2 className="text-2xl md:text-3xl font-bold relative z-10">Readiness Report</h2>
                         <p className="text-slate-300 text-sm mt-2 relative z-10">Assessment completed on {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-12 border-b border-slate-100 pb-12">
                            {/* Gauge */}
                            <div className="relative w-48 h-48 shrink-0">
                                <svg className="w-full h-full transform -rotate-90">
                                    <circle cx="96" cy="96" r="88" stroke="#f1f5f9" strokeWidth="12" fill="none" />
                                    <circle 
                                        cx="96" cy="96" r="88" 
                                        stroke="currentColor" strokeWidth="12" fill="none" 
                                        strokeDasharray={552} 
                                        strokeDashoffset={552 - (552 * score) / 100} 
                                        className={`${colorClass} transition-all duration-1000 ease-out`}
                                        strokeLinecap="round"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-5xl font-bold text-slate-800">{score}</span>
                                    <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Score</span>
                                </div>
                            </div>

                            {/* Text Context */}
                            <div className="text-center md:text-left">
                                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-3 ${bgClass} ${colorClass}`}>
                                    {category}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4">Analysis Summary</h3>
                                <p className="text-slate-600 leading-relaxed text-lg">
                                    {description}
                                </p>
                            </div>
                        </div>

                        {/* Action Plan Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Recommended Actions Card */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                                <div className="h-2 bg-green-500 w-full"></div>
                                <div className="p-6 flex-grow">
                                    <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                                        <ArrowRightCircle className="text-green-600" size={24} /> Recommended Actions
                                    </h4>
                                    <div className="space-y-4">
                                        {nextSteps.map((step, i) => (
                                            <div key={i} className="flex items-start gap-4 group">
                                                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center text-green-600 shrink-0 group-hover:bg-green-100 transition-colors">
                                                    {step.icon}
                                                </div>
                                                <div>
                                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-0.5">Step {i+1}</div>
                                                    <span className="text-slate-700 font-medium leading-snug block">{step.text}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Risk Factors Card */}
                            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
                                <div className="h-2 bg-amber-500 w-full"></div>
                                <div className="p-6 flex-grow">
                                    <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2 text-lg">
                                        <AlertTriangle className="text-amber-600" size={24} /> Risk Factors Identified
                                    </h4>
                                    <div className="space-y-4">
                                        {riskFactors.map((risk, i) => (
                                            <div key={i} className="flex items-start gap-4 group">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                                                    riskFactors.length === 1 && risk.text.includes('No major') 
                                                    ? 'bg-slate-50 text-slate-400 border-slate-100' 
                                                    : 'bg-amber-50 text-amber-600 border-amber-100 group-hover:bg-amber-100'
                                                }`}>
                                                    {risk.icon}
                                                </div>
                                                <div className="flex items-center h-10">
                                                    <span className={`font-medium leading-snug block ${
                                                         riskFactors.length === 1 && risk.text.includes('No major') ? 'text-slate-400 italic' : 'text-slate-700'
                                                    }`}>
                                                        {risk.text}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Actions */}
                        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full shadow-xl shadow-primary/20">
                                    Discuss this Report with Experts
                                </Button>
                            </Link>
                            <Button variant="outline" onClick={onRetry} className="w-full sm:w-auto">
                                <RefreshCw size={16} className="mr-2" /> Restart Assessment
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- UI Components ---

const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <label className="block text-lg font-bold text-slate-800 mb-1">{children}</label>
);

const CardOption: React.FC<{ children: React.ReactNode; selected: boolean; onClick: () => void; center?: boolean; alignLeft?: boolean }> = ({ children, selected, onClick, center, alignLeft }) => (
    <div 
        onClick={onClick}
        className={`
            relative overflow-hidden cursor-pointer p-4 rounded-xl border-2 transition-all duration-200 group
            ${selected 
                ? 'border-secondary bg-secondary/5 text-secondary shadow-md ring-1 ring-secondary/20' 
                : 'border-slate-100 bg-white text-slate-600 hover:border-secondary/50 hover:shadow-sm'
            }
            ${center ? 'text-center' : ''}
            ${alignLeft ? 'text-left' : center ? '' : 'flex flex-col items-center justify-center text-center h-full'}
        `}
    >
        {selected && (
            <div className="absolute top-2 right-2 text-secondary">
                <CheckCircle2 size={16} />
            </div>
        )}
        <div className={`font-bold text-sm ${selected ? 'text-secondary' : 'text-slate-700'}`}>{children}</div>
    </div>
);

const RadioCard: React.FC<{ label: string; subLabel?: string; selected: boolean; onClick: () => void }> = ({ label, subLabel, selected, onClick }) => (
    <div 
        onClick={onClick} 
        className={`flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all flex items-start gap-3 ${
            selected ? 'border-secondary bg-secondary/5' : 'border-slate-100 bg-white hover:border-slate-200'
        }`}
    >
        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${selected ? 'border-secondary' : 'border-slate-300'}`}>
            {selected && <div className="w-2.5 h-2.5 rounded-full bg-secondary"></div>}
        </div>
        <div>
            <div className={`font-bold text-sm ${selected ? 'text-secondary' : 'text-slate-800'}`}>{label}</div>
            {subLabel && <div className="text-xs text-slate-500 mt-1">{subLabel}</div>}
        </div>
    </div>
);

const CheckboxCard: React.FC<{ label: string; checked: boolean; onChange: () => void }> = ({ label, checked, onChange }) => (
    <div 
        onClick={onChange}
        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
            checked 
            ? 'bg-blue-50 border-blue-200 text-blue-800 shadow-sm' 
            : 'bg-white border-slate-100 text-slate-600 hover:border-slate-300'
        }`}
    >
        <div className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mr-3 transition-colors ${checked ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300 bg-white'}`}>
            {checked && <Check size={12} strokeWidth={4} />}
        </div>
        <span className="font-bold text-sm">{label}</span>
    </div>
);