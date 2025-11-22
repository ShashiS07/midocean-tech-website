
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  Factory, Truck, ShoppingBag, Activity, HardHat, GraduationCap, Hammer, Flame,
  ArrowRight, CheckCircle, Users, TrendingUp, CheckSquare, Calculator, MousePointerClick,
  AlertTriangle, Briefcase, RefreshCw, ShieldCheck, ChevronDown, ChevronUp, Wrench,
  ArrowDown, Lightbulb, Check, Play, X, Menu, LayoutGrid, Calendar, FileText,
  ShoppingCart, Server, ClipboardList, Database, Cpu, Package
} from 'lucide-react';

// --- Types ---

type ThemeColors = {
  primary: string;      // Main text color e.g., text-blue-600
  bg: string;          // Light section bg e.g., bg-blue-50
  border: string;      // Border color e.g., border-blue-200
  gradient: string;    // Hero gradient e.g., from-blue-900 to-slate-900
  button: string;      // Primary Button classes
  lightButton: string; // Secondary/Light Button classes
  iconBg: string;      // Icon background
};

type RoleBenefit = {
  role: string;
  benefit: string;
  icon: React.ReactNode;
};

type FAQ = {
  q: string;
  a: string;
};

type FlowchartStep = {
  title: string;
  doctype: string;
  icon: React.ReactNode;
};

type InteractiveBlockData = 
  | { type: 'scenario'; title: string; options: { label: string; result: string; details: string[] }[] }
  | { type: 'checklist'; title: string; items: string[]; successText: string }
  | { type: 'roi'; title: string; inputs: { id: string; label: string; unit: string; default: number }[]; formula: (values: Record<string, number>) => string };

type IndustryData = {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  theme: ThemeColors;
  problemSolution: { challenge: string; solution: string }[];
  flowchart: { title: string; steps: FlowchartStep[] };
  implementationPattern: { step: string; desc: string }[];
  roles: RoleBenefit[];
  interactive: InteractiveBlockData;
  faqs: FAQ[];
};

const FlaskIcon = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2v7.31"/><path d="M14 2v7.31"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>;

// --- Data Configuration ---

const industries: Record<string, IndustryData> = {
  'manufacturing': {
    id: 'manufacturing',
    title: "Manufacturing & Engineering",
    subtitle: "Sync your Shop Floor with your Top Floor. Real-time visibility from BOM to Balance Sheet.",
    icon: <Factory />,
    theme: {
      primary: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      gradient: "from-blue-900 via-slate-900 to-slate-900",
      button: "bg-blue-600 hover:bg-blue-700 text-white shadow-blue-200",
      lightButton: "bg-blue-50 text-blue-700 hover:bg-blue-100",
      iconBg: "bg-blue-100 text-blue-600"
    },
    problemSolution: [
      { challenge: "Production delays due to material shortage.", solution: "MRP auto-generates Purchase Requests based on BOM & real-time stock." },
      { challenge: "Inaccurate Cost of Goods Sold (COGS).", solution: "Real-time Valuation Rate updates adding Electricity, Rent, and Labor to item cost." },
      { challenge: "Quality rejections not tracked.", solution: "Integrated Quality Inspection at Inward, In-Process, and Finished Goods stages." },
      { challenge: "Machine downtime impacting delivery.", solution: "Preventive Maintenance module with automated schedule alerts." }
    ],
    flowchart: {
      title: "Concept to Customer Flow",
      steps: [
        { title: "Demand", doctype: "Sales Order / Forecast", icon: <ShoppingCart size={20} /> },
        { title: "Planning", doctype: "Production Plan (MRP)", icon: <Calendar size={20} /> },
        { title: "Execution", doctype: "Work Order & Job Card", icon: <Factory size={20} /> },
        { title: "Costing", doctype: "Stock Entry (Finish)", icon: <Calculator size={20} /> }
      ]
    },
    implementationPattern: [
      { step: "Master Data", desc: "Cleanse Item codes, UOMs, and define multi-level Bill of Materials." },
      { step: "Workstations", desc: "Map machines, operation costs, and capacity planning." },
      { step: "Pilot Run", desc: "Execute a complete Work Order cycle: Plan -> Material -> Job Card -> Finish." },
      { step: "Finance Sync", desc: "Automate Stock Journal entries for WIP and Finished Goods." }
    ],
    roles: [
      { role: "Plant Manager", benefit: "Real-time view of Shop Floor load and job card status.", icon: <HardHat /> },
      { role: "Quality Head", benefit: "Traceability of batches from raw material supplier to finished product.", icon: <ShieldCheck /> },
      { role: "CFO", benefit: "Accurate WIP valuation and variance reports.", icon: <TrendingUp /> }
    ],
    interactive: {
      type: 'scenario',
      title: "Select Your Production Type",
      options: [
        { 
          label: "Discrete Assembly", 
          result: "We recommend the standard Manufacturing Module.", 
          details: ["Multi-level BOMs", "Serial No. Tracking", "Subcontracting Flow"] 
        },
        { 
          label: "Process / Chemical", 
          result: "You need Process Manufacturing features.", 
          details: ["Batch Numbers", "Recipe Management", "Variable Output/Scrap"] 
        },
        { 
          label: "Job Shop / ETO", 
          result: "Engineer-to-Order requires Project integration.", 
          details: ["Link WO to Sales Order", "Dynamic BOMs", "Project Costing"] 
        }
      ]
    },
    faqs: [
      { q: "Does it support barcode scanning?", a: "Yes, ERPNext supports barcode/QR code scanning for stock movements, job card entry, and dispatch." },
      { q: "Can we handle subcontracting?", a: "Absolutely. The system tracks raw materials sent to the subcontractor and values the incoming finished goods accordingly." }
    ]
  },
  'automotive': {
    id: 'automotive',
    title: "Automotive & OEM",
    subtitle: "Just-in-Time compliance and supply chain precision for Tier 1 & Tier 2 suppliers.",
    icon: <Cpu />,
    theme: {
      primary: "text-red-600",
      bg: "bg-red-50",
      border: "border-red-200",
      gradient: "from-red-900 via-slate-900 to-slate-900",
      button: "bg-red-600 hover:bg-red-700 text-white shadow-red-200",
      lightButton: "bg-red-50 text-red-700 hover:bg-red-100",
      iconBg: "bg-red-100 text-red-600"
    },
    problemSolution: [
      { challenge: "Schedule Adherence Failures.", solution: "MRP driven by rolling forecasts or EDI schedules from OEMs." },
      { challenge: "Traceability Gaps.", solution: "End-to-end Batch & Serial tracking from raw material inward to finished good dispatch." },
      { challenge: "Supplier Quality Issues.", solution: "Vendor scorecards updated automatically based on rejection rates and delivery time." },
      { challenge: "Just-in-Time (JIT) Pressure.", solution: "Automated re-order levels and kanban-style inventory replenishment." }
    ],
    flowchart: {
      title: "JIT Production Flow",
      steps: [
        { title: "Schedule", doctype: "Material Request (EDI)", icon: <Calendar size={20} /> },
        { title: "Production", doctype: "Work Order (Molding/Assy)", icon: <Factory size={20} /> },
        { title: "Quality", doctype: "PDI Inspection", icon: <ShieldCheck size={20} /> },
        { title: "Dispatch", doctype: "ASN / Delivery Note", icon: <Truck size={20} /> }
      ]
    },
    implementationPattern: [
      { step: "Item Master", desc: "Define Part Numbers, Customer Part Numbers, and revisions." },
      { step: "Quality Plan", desc: "Configure inspection templates for Incoming and PDI." },
      { step: "Barcode System", desc: "Implement bin management and FIFO enforcement via scanning." },
      { step: "Preventive Maint.", desc: "Schedule maintenance for dies, molds, and CNC machines." }
    ],
    roles: [
      { role: "Production Head", benefit: "OEE tracking and downtime analysis.", icon: <Activity /> },
      { role: "Quality Manager", benefit: "CAPA and 8D reporting integrated with returns.", icon: <ShieldCheck /> },
      { role: "Store In-charge", benefit: "FIFO enforcement preventing expiry or obsolescence.", icon: <Package /> }
    ],
    interactive: {
      type: 'checklist',
      title: "Automotive Compliance Check",
      items: ["Batch Traceability", "FIFO Enforcement", "Vendor Rating System", "Calibration Schedule"],
      successText: "ERPNext helps you meet IATF 16949 requirements with these features."
    },
    faqs: [
      { q: "Does it handle customer schedules?", a: "Yes, we can import rolling forecasts to drive material planning." },
      { q: "Can we track Mold life?", a: "Yes, Molds can be treated as assets with shot-count based maintenance schedules." }
    ]
  },
  'trading': {
    id: 'trading',
    title: "Retail & Distribution",
    subtitle: "Unify your offline and online channels. Master inventory across multiple warehouses.",
    icon: <ShoppingBag />,
    theme: {
      primary: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      gradient: "from-emerald-900 via-slate-900 to-slate-900",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-200",
      lightButton: "bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
      iconBg: "bg-emerald-100 text-emerald-600"
    },
    problemSolution: [
      { challenge: "Stock discrepancies across warehouses.", solution: "Unified Stock Ledger with periodic reconciliation tools and barcode scanning." },
      { challenge: "Dead stock accumulation.", solution: "Stock Ageing Reports and automated slow-moving item alerts." },
      { challenge: "Razor-thin margins.", solution: "Landed Cost Vouchers to allocate freight/customs cost to item valuation." },
      { challenge: "Sales team lacks data.", solution: "Mobile app for field sales with stock levels and customer outstanding." }
    ],
    flowchart: {
      title: "Order to Cash",
      steps: [
        { title: "Order", doctype: "Sales Order (App)", icon: <ShoppingCart size={20} /> },
        { title: "Sourcing", doctype: "Material Request", icon: <ClipboardList size={20} /> },
        { title: "Inward", doctype: "Purchase Receipt", icon: <Database size={20} /> },
        { title: "Fulfillment", doctype: "Delivery Note / Invoice", icon: <Truck size={20} /> }
      ]
    },
    implementationPattern: [
      { step: "Master Data", desc: "Import Items with Barcodes, Pricing Rules, and Tax info." },
      { step: "Store Setup", desc: "Configure POS Profiles and Warehouse hierarchy." },
      { step: "Sales App", desc: "Roll out mobile app to field sales team." },
      { step: "E-commerce", desc: "Connect Shopify/WooCommerce for live inventory sync." }
    ],
    roles: [
      { role: "Sales Manager", benefit: "Track sales targets vs actuals per territory.", icon: <TrendingUp /> },
      { role: "Purchase Manager", benefit: "Auto-reorder reports based on sales velocity.", icon: <Truck /> },
      { role: "Store Manager", benefit: "Faster checkout with offline-capable POS.", icon: <ShoppingBag /> }
    ],
    interactive: {
      type: 'roi',
      title: "Dead Stock Savings Calculator",
      inputs: [
        { id: 'turnover', label: 'Annual Turnover', unit: '$', default: 1000000 },
        { id: 'deadstock', label: 'Est. Dead Stock %', unit: '%', default: 5 }
      ],
      formula: (v) => `Recovering even half your dead stock could free up $${(v.turnover * (v.deadstock/100) * 0.5).toLocaleString()} in working capital.`
    },
    faqs: [
      { q: "Does POS work offline?", a: "Yes, ERPNext POS works offline and syncs when internet is restored." },
      { q: "Can we manage different price lists?", a: "Yes, you can have territory-based or customer-group-based price lists." }
    ]
  },
  'healthcare': {
    id: 'healthcare',
    title: "Healthcare & Clinics",
    subtitle: "Patient-centric management. Secure, HIPAA-ready, and integrated.",
    icon: <Activity />,
    theme: {
      primary: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-200",
      gradient: "from-rose-900 via-slate-900 to-slate-900",
      button: "bg-rose-600 hover:bg-rose-700 text-white shadow-rose-200",
      lightButton: "bg-rose-50 text-rose-700 hover:bg-rose-100",
      iconBg: "bg-rose-100 text-rose-600"
    },
    problemSolution: [
      { challenge: "Fragmented patient data.", solution: "Centralized Patient Repository with history, prescriptions, and lab results." },
      { challenge: "Billing leakage.", solution: "Integrated Inpatient (IPD) billing linked to procedures and pharmacy." },
      { challenge: "Appointment scheduling chaos.", solution: "Practitioner Schedules with online booking integration." },
      { challenge: "Pharmacy theft.", solution: "Batch-wise stock tracking with expiry alerts." }
    ],
    flowchart: {
      title: "Patient Journey",
      steps: [
        { title: "Booking", doctype: "Patient Appointment", icon: <Calendar size={20} /> },
        { title: "Consult", doctype: "Patient Encounter", icon: <Activity size={20} /> },
        { title: "Treatment", doctype: "Lab Test / Pharmacy", icon: <FlaskIcon /> },
        { title: "Billing", doctype: "Sales Invoice", icon: <FileText size={20} /> }
      ]
    },
    implementationPattern: [
      { step: "Practitioners", desc: "Setup Doctor profiles and availability schedules." },
      { step: "Clinical Data", desc: "Configure templates for Lab Tests and Prescriptions." },
      { step: "Front Desk", desc: "Train staff on Patient Registration and Billing." },
      { step: "Pharmacy", desc: "Import medicines and enable batch tracking." }
    ],
    roles: [
      { role: "Medical Director", benefit: "Clinical analytics and patient outcome tracking.", icon: <Activity /> },
      { role: "Admin", benefit: "Streamlined billing and insurance claim management.", icon: <Briefcase /> },
      { role: "Pharmacist", benefit: "Expiry alerts and fast dispensing.", icon: <ShoppingBag /> }
    ],
    interactive: {
      type: 'scenario',
      title: "Select Your Facility Type",
      options: [
        { 
          label: "Single Clinic", 
          result: "Standard Healthcare Module.", 
          details: ["Appointments", "Prescriptions", "Simple Billing"] 
        },
        { 
          label: "Multi-Chain / Hospital", 
          result: "Requires Enterprise Setup.", 
          details: ["Inpatient (IPD)", "Ward Mgmt", "Centralized Pharmacy", "Lab Integration"] 
        }
      ]
    },
    faqs: [
      { q: "Is it HIPAA compliant?", a: "ERPNext can be hosted on HIPAA compliant servers with encrypted databases and field-level security." },
      { q: "Can it integrate with LIS machines?", a: "Yes, we can build drivers to fetch data from Lab Information Systems via serial/TCP." }
    ]
  },
  'construction': {
    id: 'construction',
    title: "Construction & Projects",
    subtitle: "Control costs from BOQ to Handover. Project management meets ERP.",
    icon: <HardHat />,
    theme: {
      primary: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
      gradient: "from-amber-900 via-slate-900 to-slate-900",
      button: "bg-amber-600 hover:bg-amber-700 text-white shadow-amber-200",
      lightButton: "bg-amber-50 text-amber-700 hover:bg-amber-100",
      iconBg: "bg-amber-100 text-amber-600"
    },
    problemSolution: [
      { challenge: "Project cost overruns.", solution: "Real-time budget validation against Bill of Quantities (BOQ)." },
      { challenge: "Material theft at sites.", solution: "Strict Material Transfer Note (MTN) and consumption logs." },
      { challenge: "Subcontractor billing disputes.", solution: "Measurement Book (MB) recording for verified billing." },
      { challenge: "Equipment downtime.", solution: "Asset Maintenance schedules for cranes and heavy machinery." }
    ],
    flowchart: {
      title: "Site Project Controls",
      steps: [
        { title: "Estimation", doctype: "Project BOQ", icon: <Calculator size={20} /> },
        { title: "Requisition", doctype: "Material Request", icon: <ClipboardList size={20} /> },
        { title: "Procurement", doctype: "Purchase Order", icon: <Truck size={20} /> },
        { title: "Costing", doctype: "Stock Entry (Consume)", icon: <TrendingUp size={20} /> }
      ]
    },
    implementationPattern: [
      { step: "Project Setup", desc: "Define Project WBS and upload BOQ." },
      { step: "Site Access", desc: "Give site engineers mobile access for Material Requests." },
      { step: "Procurement", desc: "Centralized buying delivered to specific sites." },
      { step: "Billing", desc: "Milestone-based invoicing to client." }
    ],
    roles: [
      { role: "Project Manager", benefit: "Budget vs Actual variance analysis in real-time.", icon: <TrendingUp /> },
      { role: "Site Engineer", benefit: "Easy material requesting from mobile app.", icon: <Truck /> },
      { role: "Finance", benefit: "Project-wise P&L visibility.", icon: <Calculator /> }
    ],
    interactive: {
      type: 'checklist',
      title: "Site Control Checklist",
      items: ["Bill of Quantities (BOQ)", "Material Request from Site", "Subcontractor Billing", "Labor Muster Roll"],
      successText: "ERPNext Construction module covers all these critical site controls."
    },
    faqs: [
      { q: "Can we handle retention money?", a: "Yes, Payment Terms can be configured to hold retention amounts automatically." },
      { q: "How to track labor attendance?", a: "Site supervisors can mark attendance via the mobile app, linked to payroll." }
    ]
  },
  'education': {
    id: 'education',
    title: "Education & EdTech",
    subtitle: "Student lifecycle management for modern campuses and institutes.",
    icon: <GraduationCap />,
    theme: {
      primary: "text-yellow-600",
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      gradient: "from-yellow-900 via-slate-900 to-slate-900",
      button: "bg-yellow-600 hover:bg-yellow-700 text-white shadow-yellow-200",
      lightButton: "bg-yellow-50 text-yellow-700 hover:bg-yellow-100",
      iconBg: "bg-yellow-100 text-yellow-600"
    },
    problemSolution: [
      { challenge: "Disjointed student data.", solution: "Single Student Profile from Admission to Alumni." },
      { challenge: "Fee collection delays.", solution: "Automated Fee Scheduling and reminders via email/SMS." },
      { challenge: "Academic planning.", solution: "Course scheduling, assessment plans, and grading tools." },
      { challenge: "Accreditation reporting.", solution: "Centralized data for easy NAAC/NBA reporting." }
    ],
    flowchart: {
      title: "Student Lifecycle",
      steps: [
        { title: "Inquiry", doctype: "Lead / CRM", icon: <Users size={20} /> },
        { title: "Admission", doctype: "Student Applicant", icon: <FileText size={20} /> },
        { title: "Academic", doctype: "Program Enrollment", icon: <GraduationCap size={20} /> },
        { title: "Revenue", doctype: "Fees & Receipts", icon: <Calculator size={20} /> }
      ]
    },
    implementationPattern: [
      { step: "Academics", desc: "Setup Programs, Courses, and Fee Structures." },
      { step: "Admissions", desc: "Online application portal for new students." },
      { step: "LMS", desc: "Upload course content and quizzes." },
      { step: "Operations", desc: "Transport, Hostel, and Library management." }
    ],
    roles: [
      { role: "Registrar", benefit: "Streamlined enrollment and record keeping.", icon: <CheckSquare /> },
      { role: "Dean", benefit: "Faculty load analysis and academic performance reports.", icon: <TrendingUp /> },
      { role: "Student", benefit: "Self-service portal for fees, grades, and timetable.", icon: <Users /> }
    ],
    interactive: {
      type: 'scenario',
      title: "Institution Type",
      options: [
        { 
          label: "K-12 School", 
          result: "Focus on Parent Portal & Fees.", 
          details: ["Guardian Portal", "Transport Mgmt", "Attendance"] 
        },
        { 
          label: "University / College", 
          result: "Focus on Academics & Research.", 
          details: ["Program Enrollment", "Electives", "Hostel Mgmt"] 
        },
        { 
          label: "Training Institute", 
          result: "Focus on Lead conversion.", 
          details: ["CRM Integration", "Short Courses", "Certification"] 
        }
      ]
    },
    faqs: [
      { q: "Does it include an LMS?", a: "Yes, ERPNext has a built-in LMS for content delivery and quizzes." },
      { q: "Can parents pay fees online?", a: "Yes, we integrate Payment Gateways (Razorpay, Stripe) into the portal." }
    ]
  },
  'mining': {
    id: 'mining',
    title: "Mining & Excavation",
    subtitle: "Heavy asset management and logistics control for rugged operations.",
    icon: <Hammer />,
    theme: {
      primary: "text-slate-600",
      bg: "bg-slate-100",
      border: "border-slate-300",
      gradient: "from-slate-700 via-slate-900 to-black",
      button: "bg-slate-700 hover:bg-slate-800 text-white shadow-slate-400",
      lightButton: "bg-slate-200 text-slate-800 hover:bg-slate-300",
      iconBg: "bg-slate-200 text-slate-700"
    },
    problemSolution: [
      { challenge: "Fleet maintenance costs.", solution: "Comprehensive Asset Management for trucks, excavators, and crushers." },
      { challenge: "Weighbridge theft.", solution: "Integration with weighbridge software for auto-capture of weights." },
      { challenge: "Royalty pass management.", solution: "Track government royalty passes against dispatched quantity." },
      { challenge: "Diesel pilferage.", solution: "Fuel logs linked to vehicle odometer/hours." }
    ],
    flowchart: {
      title: "Pit to Port Flow",
      steps: [
        { title: "Extraction", doctype: "Production Log", icon: <Hammer size={20} /> },
        { title: "Transport", doctype: "Trip Sheet", icon: <Truck size={20} /> },
        { title: "Weighing", doctype: "Weighbridge Slip", icon: <Calculator size={20} /> },
        { title: "Dispatch", doctype: "Delivery Note", icon: <FileText size={20} /> }
      ]
    },
    implementationPattern: [
      { step: "Fleet Setup", desc: "Register all vehicles and machinery as Assets." },
      { step: "Logistics", desc: "Setup Weighbridge integration points." },
      { step: "Inventory", desc: "Spares and Fuel store management." },
      { step: "HR", desc: "Driver and operator shift management." }
    ],
    roles: [
      { role: "Site Manager", benefit: "Daily production reports and vehicle uptime stats.", icon: <HardHat /> },
      { role: "Maintenance Lead", benefit: "Preventive maintenance alerts for heavy machinery.", icon: <Wrench /> },
      { role: "Logistics Head", benefit: "Weighbridge automation prevents dispatch fraud.", icon: <Truck /> }
    ],
    interactive: {
      type: 'checklist',
      title: "Mining Operations Check",
      items: ["Weighbridge Integration", "Fleet Maintenance", "Fuel Consumption Tracking", "Royalty Pass Mgmt"],
      successText: "We have specialized patterns for these mining controls."
    },
    faqs: [
      { q: "Can it track tire inventory?", a: "Yes, tires can be serialized and tracked for life/wear-and-tear." },
      { q: "Does it work offline at remote sites?", a: "We can deploy local instances that sync to HQ when connectivity is available." }
    ]
  },
  'oil-gas': {
    id: 'oil-gas',
    title: "Oil & Gas",
    subtitle: "Safety, Maintenance, and Compliance for mission-critical infrastructure.",
    icon: <Flame />,
    theme: {
      primary: "text-orange-600",
      bg: "bg-orange-50",
      border: "border-orange-200",
      gradient: "from-orange-800 via-orange-900 to-slate-900",
      button: "bg-orange-600 hover:bg-orange-700 text-white shadow-orange-200",
      lightButton: "bg-orange-50 text-orange-700 hover:bg-orange-100",
      iconBg: "bg-orange-100 text-orange-600"
    },
    problemSolution: [
      { challenge: "Asset downtime risks.", solution: "Predictive maintenance schedules for critical pumps and rigs." },
      { challenge: "HSE Compliance.", solution: "Incident reporting and safety audit workflows." },
      { challenge: "Shift Management.", solution: "Complex roster management for offshore/onshore crews." },
      { challenge: "Procurement complexity.", solution: "Vendor qualification and strict QC for spares." }
    ],
    flowchart: {
      title: "Asset Integrity Loop",
      steps: [
        { title: "Monitor", doctype: "Asset Maintenance", icon: <Activity size={20} /> },
        { title: "Alert", doctype: "Maintenance Schedule", icon: <AlertTriangle size={20} /> },
        { title: "Execute", doctype: "Work Order", icon: <Wrench size={20} /> },
        { title: "Log", doctype: "Maintenance Log", icon: <ClipboardList size={20} /> }
      ]
    },
    implementationPattern: [
      { step: "Asset Registry", desc: "Tagging all critical equipment." },
      { step: "HSE Module", desc: "Configuring safety workflows and permits." },
      { step: "Maintenance", desc: "Preventive schedules and breakdown logging." },
      { step: "Workforce", desc: "Crew rotation and payroll integration." }
    ],
    roles: [
      { role: "Maintenance Engineer", benefit: "MTBF and MTTR analysis for critical assets.", icon: <Wrench /> },
      { role: "Safety Officer", benefit: "Digital permit-to-work system.", icon: <ShieldCheck /> },
      { role: "Ops Manager", benefit: "Real-time production and downtime dashboards.", icon: <Activity /> }
    ],
    interactive: {
      type: 'roi',
      title: "Uptime Value Calculator",
      inputs: [
        { id: 'downtime', label: 'Hours Downtime / Month', unit: 'hrs', default: 10 },
        { id: 'cost', label: 'Cost per Hour', unit: '$', default: 5000 }
      ],
      formula: (v) => `Reducing downtime by just 20% saves you $${(v.downtime * v.cost * 0.2 * 12).toLocaleString()} per year.`
    },
    faqs: [
      { q: "Can it handle Permit to Work?", a: "Yes, we configure custom workflows for work permits and safety checks." },
      { q: "Is it suitable for offshore?", a: "Yes, with offline-first capabilities and periodic sync." }
    ]
  }
};

// --- Sub-Components ---

const ScenarioSelector: React.FC<{ data: { options: any[] }, theme: ThemeColors }> = ({ data, theme }) => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-6">
        {data.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all border border-transparent ${
              selected === i 
              ? `bg-white ${theme.primary} shadow-sm` 
              : 'bg-slate-100 text-slate-500 hover:bg-white hover:border-slate-200'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      
      <div className={`bg-white rounded-2xl p-6 border ${theme.border} shadow-sm`}>
          <h4 className={`font-bold text-lg mb-3 ${theme.primary}`}>{data.options[selected].result}</h4>
          
          <div className="flex flex-wrap gap-2 mb-6">
             {data.options[selected].details.map((d: string, i: number) => (
               <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${theme.bg} ${theme.border} text-slate-700`}>
                  {d}
               </span>
             ))}
          </div>
          
          <Link to="/contact">
            <Button fullWidth className={theme.button}>
              Configure
            </Button>
          </Link>
      </div>
    </div>
  );
};

const ProcessChecklist: React.FC<{ data: { title: string; items: string[]; successText: string }, theme: ThemeColors }> = ({ data, theme }) => {
  const [checked, setChecked] = useState<string[]>([]);

  const toggle = (item: string) => {
    setChecked(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]);
  };

  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm border ${theme.border}`}>
      <div className="mb-4">
         <h3 className="text-lg font-bold text-slate-900">{data.title}</h3>
         <p className="text-xs text-slate-500">Select your requirements</p>
      </div>
      <div className="space-y-2 mb-6">
         {data.items.map((item) => (
           <div 
             key={item} 
             onClick={() => toggle(item)}
             className={`p-3 rounded-lg border cursor-pointer transition-all flex items-center gap-3 hover:bg-slate-50 ${
               checked.includes(item) ? `${theme.bg} ${theme.border}` : 'border-slate-100'
             }`}
           >
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                  checked.includes(item) 
                  ? `bg-white border-transparent ${theme.primary}` 
                  : 'bg-white border-slate-200 text-transparent'
              }`}>
                 <Check size={12} strokeWidth={4} />
              </div>
              <span className={`font-medium text-sm ${checked.includes(item) ? theme.primary : 'text-slate-600'}`}>{item}</span>
           </div>
         ))}
      </div>
      <div className={`transition-all duration-300 ${checked.length > 0 ? 'opacity-100' : 'opacity-50'}`}>
          <Link to="/contact">
             <Button fullWidth className={theme.button}>
               Get Plan
             </Button>
          </Link>
      </div>
    </div>
  );
};

const ROICalculator: React.FC<{ data: { title: string; inputs: any[]; formula: any }, theme: ThemeColors }> = ({ data, theme }) => {
  const [values, setValues] = useState<Record<string, number>>(() => {
     const initial: Record<string, number> = {};
     data.inputs.forEach(i => initial[i.id] = i.default);
     return initial;
  });

  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm border ${theme.border}`}>
       <h3 className="font-bold text-slate-900 text-lg mb-4">{data.title}</h3>
       <div className="space-y-4 mb-6">
          {data.inputs.map(input => (
            <div key={input.id}>
               <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{input.label}</label>
               <div className="flex items-center relative">
                  <input 
                    type="number" 
                    value={values[input.id]}
                    onChange={e => setValues({...values, [input.id]: parseFloat(e.target.value) || 0})}
                    className="w-full p-2 pl-3 pr-10 rounded-lg border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-200 font-bold text-slate-800 text-sm"
                  />
                  <div className="absolute right-3 text-slate-400 text-xs font-bold">{input.unit}</div>
               </div>
            </div>
          ))}
       </div>
       <div className={`p-4 rounded-xl text-center ${theme.bg} border ${theme.border}`}>
          <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Potential Savings</div>
          <div className={`text-2xl font-extrabold ${theme.primary} mb-1`}>{data.formula(values)}</div>
          <div className="text-[10px] text-slate-400">Annual projected ROI</div>
       </div>
       <div className="mt-4">
          <Link to="/contact">
              <Button fullWidth className={theme.button}>
                Calculate for Me
              </Button>
          </Link>
       </div>
    </div>
  );
};

// --- Scroll Spy Hook ---
const useScrollSpy = (ids: string[], offset: number = 100) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      const positions = ids.map(id => {
        const el = document.getElementById(id);
        if (!el) return { id, top: 0, bottom: 0 };
        const top = el.getBoundingClientRect().top + scroll;
        return { id, top, bottom: top + el.offsetHeight };
      });

      const active = positions.find(pos => scroll >= pos.top - offset && scroll < pos.bottom - offset);
      if (active) {
        setActiveId(active.id);
      }
    };
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, [ids, offset]);

  return activeId;
};

// --- Main Page Component ---

export const IndustryDetail: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();
  
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industryId]);
  
  if (!industryId || !industries[industryId]) {
    return <Navigate to="/" replace />;
  }

  const data = industries[industryId];
  const sectionIds = ['overview', 'reality', 'process-flow', 'interactive', 'roadmap', 'roles', 'faq'];
  const activeSection = useScrollSpy(sectionIds, 150);

  // Helper to render correct interactive block
  const InteractiveBlock = data.interactive.type === 'scenario' ? ScenarioSelector 
                         : data.interactive.type === 'checklist' ? ProcessChecklist 
                         : ROICalculator;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800 selection:bg-slate-200 relative">
      
      {/* 1. Dynamic Industry Hero */}
      <section className={`relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br ${data.theme.gradient}`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)', 
            backgroundSize: '40px 40px, 20px 20px',
            backgroundPosition: '0 0, 10px 10px'
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Content */}
              <div className="text-white space-y-8 animate-fade-in-up">
                  {/* Breadcrumb */}
                  <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60">
                     <Link to="/" className="hover:text-white transition-colors">Home</Link>
                     <ChevronDown size={10} className="-rotate-90" />
                     <Link to="/services/erpnext" className="hover:text-white transition-colors">Industries</Link>
                     <ChevronDown size={10} className="-rotate-90" />
                     <span className="text-white">{data.title}</span>
                  </nav>
                  
                  <div>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">{data.title}</h1>
                    <p className="text-xl text-blue-50/90 leading-relaxed max-w-xl font-light border-l-2 border-white/30 pl-6">
                      {data.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-2">
                      <Link to="/contact">
                          <button className={`px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-xl hover:-translate-y-1 ${data.theme.lightButton.replace('bg-', 'bg-white text-slate-900 hover:bg-blue-50')}`}>
                             Schedule Consultation
                          </button>
                      </Link>
                      <button 
                        onClick={() => scrollTo('reality')} 
                        className="px-8 py-4 rounded-xl font-bold text-lg transition-all border border-white/20 hover:bg-white/10 text-white backdrop-blur-sm flex items-center gap-2"
                      >
                         <Play size={18} fill="currentColor" /> Watch Workflow
                      </button>
                  </div>
              </div>
              
              {/* Hero Graphic - 3D Card */}
              <div className="hidden lg:flex justify-center relative perspective-1000">
                  <div className="absolute inset-0 bg-white/20 blur-[100px] rounded-full"></div>
                  <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-[2rem] shadow-2xl transform rotate-y-[-10deg] rotate-x-[5deg] hover:rotate-0 transition-all duration-700 group">
                      <div className={`w-24 h-24 rounded-2xl flex items-center justify-center shadow-inner mb-8 transition-transform group-hover:scale-110 duration-500 ${data.theme.iconBg.replace('bg-', 'bg-white ')}`}>
                          {React.cloneElement(data.icon as React.ReactElement<any>, { size: 48 })}
                      </div>
                      <div className="space-y-4">
                          <div className="flex items-center justify-between bg-black/20 p-4 rounded-xl border border-white/10">
                              <div>
                                <div className="text-xs text-white/60 uppercase tracking-wider font-bold">Efficiency</div>
                                <div className="text-2xl font-bold text-white">+35%</div>
                              </div>
                              <TrendingUp size={24} className="text-green-400" />
                          </div>
                          <div className="flex items-center justify-between bg-black/20 p-4 rounded-xl border border-white/10">
                              <div>
                                <div className="text-xs text-white/60 uppercase tracking-wider font-bold">Data Accuracy</div>
                                <div className="text-2xl font-bold text-white">99.9%</div>
                              </div>
                              <CheckCircle size={24} className="text-blue-400" />
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Universal Sticky Nav (Replaces Sidebar) */}
      <div className="sticky top-[72px] z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between h-14 overflow-x-auto hide-scrollbar gap-2 sm:gap-6">
           {sectionIds.map(sec => (
              <button 
                key={sec} 
                onClick={() => scrollTo(sec)} 
                className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-2 rounded-full whitespace-nowrap transition-all ${
                    activeSection === sec 
                    ? `${data.theme.bg} ${data.theme.primary}` 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {sec.replace(/-/g, ' ')}
              </button>
           ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
          
          {/* Main Content Column - Centered */}
          <div className="space-y-24">
             
             {/* Overview */}
             <section id="overview" className="scroll-mt-32">
                 <h2 className="text-3xl font-bold text-slate-900 mb-6">Overview</h2>
                 <p className="text-lg text-slate-600 leading-relaxed">
                   We replace disconnected spreadsheets with integrated workflows. {data.subtitle}
                 </p>
             </section>

             {/* Reality Check */}
             <section id="reality" className="scroll-mt-32">
                <div className="flex items-center gap-3 mb-8">
                    <div className={`p-2 rounded-lg ${data.theme.bg} ${data.theme.primary}`}><AlertTriangle size={24}/></div>
                    <h2 className="text-2xl font-bold text-slate-900">The Reality Check</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   {data.problemSolution.map((item, i) => (
                      <div key={i} className="group relative rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col">
                          <div className="bg-slate-50 p-6 border-b border-slate-100">
                              <div className="text-xs font-bold text-red-500 uppercase tracking-wide mb-2">Challenge</div>
                              <p className="text-slate-800 font-medium leading-relaxed">"{item.challenge}"</p>
                          </div>
                          <div className="bg-white p-6 flex-grow">
                              <div className={`text-xs font-bold uppercase tracking-wide mb-2 ${data.theme.primary}`}>Solution</div>
                              <p className="text-slate-600 leading-relaxed text-sm">{item.solution}</p>
                          </div>
                      </div>
                   ))}
                </div>
             </section>

             {/* Process Flow - Redesigned */}
             <section id="process-flow" className="scroll-mt-32">
                <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm relative overflow-hidden">
                   {/* Background Decoration */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-24 -mt-24 z-0"></div>

                   <div className="flex items-center justify-center gap-3 mb-12 relative z-10">
                       <div className={`p-2 rounded-full ${data.theme.bg} ${data.theme.primary}`}><RefreshCw size={20}/></div>
                       <h2 className="text-2xl font-bold text-slate-900">{data.flowchart.title}</h2>
                   </div>

                   {/* Flow Diagram */}
                   <div className="relative z-10">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[45px] left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {data.flowchart.steps.map((step, i) => (
                                <div key={i} className="relative group">
                                    {/* Connecting Arrow for Mobile */}
                                    {i !== data.flowchart.steps.length - 1 && (
                                        <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 text-slate-300 z-0">
                                            <ArrowDown size={16} />
                                        </div>
                                    )}
                                    
                                    <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm relative group-hover:border-blue-300 group-hover:shadow-md transition-all h-full flex flex-col items-center text-center z-10">
                                        {/* Step Number */}
                                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs border-4 border-white">
                                            {i+1}
                                        </div>
                                        
                                        {/* Icon */}
                                        <div className={`mb-4 w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${data.theme.bg} ${data.theme.primary}`}>
                                            {step.icon}
                                        </div>
                                        
                                        {/* Content */}
                                        <h4 className="font-bold text-slate-900 mb-2 text-sm">{step.title}</h4>
                                        <div className="mt-auto">
                                            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">System Doc</div>
                                            <div className="text-xs font-mono text-slate-600 bg-slate-50 px-2 py-1 rounded border border-slate-100 inline-block">
                                                {step.doctype}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Desktop Connector Arrow */}
                                    {i !== data.flowchart.steps.length - 1 && (
                                        <div className="hidden md:block absolute top-[45px] -right-4 text-slate-300 z-0 transform -translate-y-1/2">
                                            <ArrowRight size={16} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                   </div>
                </div>
             </section>

             {/* Interactive Tool */}
             <section id="interactive" className="scroll-mt-32">
                 <div className={`rounded-3xl p-8 md:p-12 border ${data.theme.border} ${data.theme.bg}`}>
                     <div className="flex items-center gap-3 mb-8 justify-center">
                         <MousePointerClick className={data.theme.primary} size={24} />
                         <h2 className="text-2xl font-bold text-slate-900">{data.interactive.title}</h2>
                     </div>
                     <div className="max-w-2xl mx-auto">
                         <InteractiveBlock data={data.interactive as any} theme={data.theme} />
                     </div>
                 </div>
             </section>

             {/* Roadmap */}
             <section id="roadmap" className="scroll-mt-32">
                 <h2 className="text-2xl font-bold text-slate-900 mb-10 flex items-center gap-3">
                    <LayoutGrid className="text-slate-400" /> Implementation Roadmap
                 </h2>
                 <div className="relative border-l-2 border-slate-200 pl-8 space-y-12">
                     {data.implementationPattern.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className={`absolute -left-[42px] top-0 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center font-bold text-xs shadow-sm z-10 ${data.theme.bg} ${data.theme.primary} ring-1 ring-slate-200`}>
                                {i+1}
                            </div>
                            <h3 className="font-bold text-lg text-slate-900 mb-2">{step.step}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xl">{step.desc}</p>
                        </div>
                     ))}
                 </div>
             </section>

             {/* Roles */}
             <section id="roles" className="scroll-mt-32">
                 <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
                     <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
                     <div className="relative z-10">
                         <h2 className="text-2xl font-bold mb-8">Wins for Every Role</h2>
                         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                             {data.roles.map((role, i) => (
                                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all group">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg text-white bg-gradient-to-br ${data.theme.gradient}`}>
                                        {React.cloneElement(role.icon as React.ReactElement<any>, { size: 20 })}
                                    </div>
                                    <h3 className="font-bold mb-2 text-white">{role.role}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {role.benefit}
                                    </p>
                                </div>
                             ))}
                         </div>
                     </div>
                 </div>
             </section>

             {/* FAQ */}
             <section id="faq" className="scroll-mt-32">
                 <h2 className="text-2xl font-bold text-slate-900 mb-8">Common Questions</h2>
                 <div className="space-y-4">
                     {data.faqs.map((faq, i) => (
                        <details key={i} className="group border border-slate-200 rounded-2xl bg-white overflow-hidden transition-colors hover:border-blue-200 open:shadow-sm open:bg-slate-50/50">
                            <summary className="flex items-center justify-between p-5 cursor-pointer list-none font-bold text-slate-800 group-open:text-blue-600 text-sm">
                                {faq.q}
                                <ChevronDown className="group-open:rotate-180 transition-transform text-slate-400 group-open:text-blue-600" size={18} />
                            </summary>
                            <div className="px-5 pb-5 pt-0 text-slate-600 text-sm leading-relaxed">
                                {faq.a}
                            </div>
                        </details>
                     ))}
                 </div>
             </section>

             {/* Bottom CTA */}
             <section className="pb-12">
                 <div className={`rounded-3xl p-10 text-center text-white shadow-2xl relative overflow-hidden bg-gradient-to-br ${data.theme.gradient}`}>
                     <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                     <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-6">Ready to modernize?</h2>
                        <p className="text-blue-100 mb-8 text-lg max-w-xl mx-auto">Get a tailored demonstration of these exact workflows.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact">
                                <button className={`px-8 py-3 rounded-xl font-bold transition-all shadow-lg bg-white text-slate-900 hover:bg-blue-50 w-full sm:w-auto`}>
                                    Book Discovery Call
                                </button>
                            </Link>
                        </div>
                     </div>
                 </div>
             </section>
          </div>
      </div>

    </div>
  );
};
