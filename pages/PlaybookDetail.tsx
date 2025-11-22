import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  ArrowLeft, 
  ArrowRight,
  Layers, 
  FileText, 
  BarChart2, 
  AlertTriangle, 
  Calendar, 
  ArrowDown, 
  CheckSquare,
  GitMerge,
  Database,
  Server,
  Smartphone,
  Globe,
  Printer,
  Truck,
  HardHat
} from 'lucide-react';

type Flow = {
  step: string;
  desc: string;
};

type PlaybookData = {
  title: string;
  description: string;
  architecture: React.ReactNode;
  doctypes: string[];
  kpis: string[];
  mistakes: string[];
  timeline: string;
  currentFlow: Flow[];
  proposedFlow: Flow[];
  uat: string[];
  migration: string[];
};

// Helper Icons
const FactoryIcon = () => <Layers size={24} className="mx-auto mb-2 text-slate-500" />;
const TruckIcon = () => <div className="mx-auto mb-2 text-slate-500"><Truck size={24} /></div>;
const HardHatIcon = () => <div className="mx-auto mb-2 text-slate-500"><HardHat size={24} /></div>;

const playbooks: Record<string, PlaybookData> = {
  'multi-plant': {
    title: "Multi-Plant Manufacturing",
    description: "A standardized rollout strategy for manufacturers with a central Head Office and multiple distributed production units. This playbook addresses common challenges in inter-plant stock transfers, consolidated planning, and subcontracting.",
    architecture: (
        <div className="flex flex-col items-center justify-center p-8 space-y-8 w-full">
            {/* HQ */}
            <div className="border-2 border-primary bg-white p-4 rounded-lg text-center w-48 shadow-lg z-10">
                <div className="font-bold text-primary">Head Office (HQ)</div>
                <div className="text-xs text-slate-500">Master Data, Finance, Sales</div>
            </div>
            
            {/* Connection Lines */}
            <div className="flex justify-between w-64 border-t-2 border-dashed border-slate-300 relative h-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-50 px-2 text-xs text-slate-400">Sync via API / Common DB</div>
                <div className="w-0.5 h-8 bg-slate-300 absolute left-0"></div>
                <div className="w-0.5 h-8 bg-slate-300 absolute right-0"></div>
            </div>

            {/* Plants */}
            <div className="flex justify-between gap-8 w-full max-w-md">
                 <div className="border border-slate-300 bg-slate-50 p-4 rounded-lg text-center w-40">
                    <FactoryIcon />
                    <div className="font-bold text-slate-700 mt-2">Plant A</div>
                    <div className="text-xs text-slate-500">Production, Stores</div>
                </div>
                <div className="border border-slate-300 bg-slate-50 p-4 rounded-lg text-center w-40">
                    <FactoryIcon />
                    <div className="font-bold text-slate-700 mt-2">Plant B</div>
                    <div className="text-xs text-slate-500">Production, Stores</div>
                </div>
            </div>
        </div>
    ),
    doctypes: ["Work Order", "Bill of Materials (BOM)", "Production Plan", "Stock Entry (Material Transfer)", "Subcontracting Order"],
    kpis: ["Overall Equipment Effectiveness (OEE)", "Material Wastage %", "Production Plan Adherence", "Cost of Goods Sold (COGS) Accuracy"],
    mistakes: [
        "Creating separate Item Codes for the same raw material across plants.",
        "Ignoring WIP Valuation in opening balance migration.",
        "Over-complicating BOMs with too many sub-assemblies initially."
    ],
    timeline: "12-16 Weeks",
    currentFlow: [
        { step: "Plan", desc: "Excel sheets emailed from HQ to Plant Managers" },
        { step: "Execute", desc: "Manual logs in registers, updated weekly" },
        { step: "Review", desc: "End-of-month variance panic" }
    ],
    proposedFlow: [
        { step: "Plan", desc: "Central Production Plan in ERP creates Work Orders automatically" },
        { step: "Execute", desc: "Job Cards on tablets at workstations; Real-time stock consumption" },
        { step: "Review", desc: "Daily dashboard showing Plan vs Actual variance" }
    ],
    uat: ["Create multi-level BOM", "Execute Work Order with scrap entry", "Inter-warehouse stock transfer", "Subcontracting cycle with raw material supply"],
    migration: ["Item Master (Unified)", "BOMs (Version 1)", "Warehouse Tree Structure", "Opening Stock Balance (Plant-wise)"]
  },
  'hsrp': {
    title: "HSRP & Number Plate Operations",
    description: "A high-compliance workflow for HSRP manufacturers. This playbook focuses on integrating Government portals (Vahan) with internal manufacturing logic to ensure 100% data accuracy and zero dispatch errors.",
    architecture: (
        <div className="flex flex-col items-center p-6 w-full gap-6">
             <div className="flex gap-4 items-center">
                 <div className="bg-orange-50 border border-orange-200 p-4 rounded text-center w-32">
                     <Globe className="mx-auto mb-2 text-orange-500" />
                     <div className="font-bold text-xs">Vahan Portal</div>
                 </div>
                 <ArrowRight className="text-slate-300" />
                 <div className="bg-blue-50 border border-blue-200 p-4 rounded text-center w-32">
                     <Server className="mx-auto mb-2 text-blue-500" />
                     <div className="font-bold text-xs">ERPNext App</div>
                 </div>
                 <ArrowRight className="text-slate-300" />
                 <div className="bg-slate-50 border border-slate-200 p-4 rounded text-center w-32">
                     <Printer className="mx-auto mb-2 text-slate-600" />
                     <div className="font-bold text-xs">Embossing Station</div>
                 </div>
             </div>
             <div className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Automated Daily Sync via API</div>
        </div>
    ),
    doctypes: ["Sales Order (from API)", "HSRP Embossing Entry", "Laser Code Update", "Dispatch Note", "Delivery Challan"],
    kpis: ["Embossing Daily Average", "Rejection Rate", "Order-to-Dispatch Time", "Portal Sync Latency"],
    mistakes: [
        "Manual data entry of vehicle details leading to typo errors.",
        "Lack of validation for duplicate laser codes.",
        "Dispatching plates without scanning for verification."
    ],
    timeline: "8-10 Weeks",
    currentFlow: [
        { step: "Order", desc: "Download CSV from portal manually" },
        { step: "Make", desc: "Type vehicle number into embossing machine software" },
        { step: "Dispatch", desc: "Manual courier slip creation" }
    ],
    proposedFlow: [
        { step: "Order", desc: "API auto-fetches orders every 15 mins into ERP" },
        { step: "Make", desc: "Scan QR code to auto-configure embossing machine" },
        { step: "Dispatch", desc: "Scan to Dispatch; auto-updates Vahan portal" }
    ],
    uat: ["API Order Fetch Success", "Duplicate Laser Code Prevention", "Bulk Sticker Printing", "Dispatch Scanning Validation"],
    migration: ["Dealer Master Data", "Historical Order Data (Optional)", "Laser Code Inventory"]
  },
  'trading': {
    title: "Trading & Distribution",
    description: "Designed for high-volume distributors. This playbook focuses on streamlining the order-to-cash cycle, automating credit control, and optimizing inventory across multiple warehouses.",
    architecture: (
        <div className="flex flex-col items-center p-6 w-full gap-6">
             <div className="flex gap-8 items-center">
                 <div className="bg-white border border-slate-200 p-4 rounded text-center w-32 shadow-sm">
                     <Smartphone className="mx-auto mb-2 text-teal-500" />
                     <div className="font-bold text-xs">Sales App</div>
                 </div>
                 <div className="h-0.5 w-16 bg-slate-300"></div>
                 <div className="bg-white border border-primary p-4 rounded text-center w-40 shadow-md relative">
                     <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 rounded">Central Core</div>
                     <Database className="mx-auto mb-2 text-primary" />
                     <div className="font-bold text-xs">ERPNext Inventory</div>
                 </div>
                 <div className="h-0.5 w-16 bg-slate-300"></div>
                 <div className="bg-white border border-slate-200 p-4 rounded text-center w-32 shadow-sm">
                     <TruckIcon />
                     <div className="font-bold text-xs mt-2">3PL Logistics</div>
                 </div>
             </div>
        </div>
    ),
    doctypes: ["Sales Invoice", "Pick List", "Delivery Note", "Stock Reconciliation", "Payment Entry"],
    kpis: ["Inventory Turnover Ratio", "Order Fill Rate", "Average Days Receivable", "Dead Stock %"],
    mistakes: [
        "Allowing negative stock to speed up billing.",
        "Not enforcing credit limits at the Sales Order stage.",
        "Inconsistent Item naming conventions."
    ],
    timeline: "6-8 Weeks",
    currentFlow: [
        { step: "Order", desc: "Sales rep calls office; admin types order" },
        { step: "Ship", desc: "Warehouse finds items (if available)" },
        { step: "Bill", desc: "Invoice sent days after delivery" }
    ],
    proposedFlow: [
        { step: "Order", desc: "Rep enters order in App; auto-checks stock & credit" },
        { step: "Ship", desc: "Pick List generated automatically for warehouse" },
        { step: "Bill", desc: "Instant e-Invoice generation upon Dispatch" }
    ],
    uat: ["Credit Limit Block", "Batch-wise Stock Expiry", "Return Sales Order", "Split Delivery"],
    migration: ["Customer Master with Credit Limits", "Item Master with Barcodes", "Opening Stock Batches"]
  },
  'construction': {
    title: "Construction Project Control",
    description: "Project-centric ERP for infrastructure and construction. Links every material request and expense claim to a specific project budget, preventing cost overruns.",
    architecture: (
        <div className="flex flex-col items-center p-6 w-full gap-6">
            {/* Project Top */}
            <div className="bg-slate-800 text-white p-4 rounded-lg w-64 text-center">
                <div className="font-bold">Project Budget (BOQ)</div>
            </div>
            <ArrowDown className="text-slate-300" />
            <div className="grid grid-cols-2 gap-8 w-full max-w-lg">
                <div className="border border-slate-200 bg-white p-4 rounded text-center">
                    <HardHatIcon />
                    <div className="font-bold text-sm mt-2">Site Office</div>
                    <div className="text-xs text-slate-500">Material Requests, Daily Logs</div>
                </div>
                <div className="border border-slate-200 bg-white p-4 rounded text-center">
                    <div className="font-bold text-sm">HO Finance</div>
                    <div className="text-xs text-slate-500">PO Approval, Payments</div>
                </div>
            </div>
        </div>
    ),
    doctypes: ["Project", "Cost Center", "Material Request", "Purchase Order", "Expense Claim"],
    kpis: ["Budget vs Actual Variance", "Project Completion %", "Material Consumption per Sq.ft", "Vendor Payment Cycle"],
    mistakes: [
        "Booking expenses to a generic cost center instead of specific projects.",
        "Not defining a BOQ (Bill of Quantities) before starting execution.",
        "Allowing POs without budget validation."
    ],
    timeline: "10-14 Weeks",
    currentFlow: [
        { step: "Req", desc: "Site engineer calls purchase manager" },
        { step: "Buy", desc: "PM buys material; bill sent to accounts later" },
        { step: "Track", desc: "Excel sheet updated monthly to guess profit" }
    ],
    proposedFlow: [
        { step: "Req", desc: "Site raises Material Request against Project BOQ" },
        { step: "Buy", desc: "PO created only if budget allows; Workflow approval" },
        { step: "Track", desc: "Real-time P&L per Project View" }
    ],
    uat: ["Project Budget Enforcement", "Material Transfer to Site", "Subcontractor Billing", "Expense Claim Approval"],
    migration: ["Project List", "Cost Center Tree", "Vendor Master", "Open POs"]
  }
};

export const PlaybookDetail: React.FC = () => {
  const { playbookId } = useParams<{ playbookId: string }>();

  if (!playbookId || !playbooks[playbookId]) {
    return <Navigate to="/playbooks" replace />;
  }

  const data = playbooks[playbookId];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
           <Link to="/playbooks" className="inline-flex items-center text-slate-500 hover:text-primary mb-6 text-sm font-medium transition-colors">
              <ArrowLeft size={16} className="mr-1" /> Back to Library
           </Link>
           <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
               <div>
                   <div className="text-secondary font-bold text-sm uppercase tracking-wide mb-2">ERPNext Playbook</div>
                   <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">{data.title}</h1>
                   <p className="text-slate-600 max-w-3xl text-lg leading-relaxed">{data.description}</p>
               </div>
               <div className="shrink-0 bg-slate-50 px-6 py-4 rounded-xl border border-slate-100 text-center">
                   <div className="text-xs text-slate-500 uppercase font-bold mb-1">Est. Timeline</div>
                   <div className="text-2xl font-bold text-primary flex items-center gap-2 justify-center">
                       <Calendar size={20} className="text-secondary" /> {data.timeline}
                   </div>
               </div>
           </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
                {/* Architecture */}
                <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                    <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                        <GitMerge className="text-secondary" /> Typical Architecture
                    </h2>
                    <div className="bg-slate-50 rounded-xl border border-slate-100 p-4">
                        {data.architecture}
                    </div>
                </section>

                {/* Process Flow */}
                <section>
                    <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                        <Layers className="text-secondary" /> Process Transformation
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-red-50/50 border border-red-100 p-6 rounded-xl">
                            <h3 className="text-red-800 font-bold mb-4 text-sm uppercase">Current Reality (Chaos)</h3>
                            <div className="space-y-4 relative">
                                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-red-200"></div>
                                {data.currentFlow.map((flow, i) => (
                                    <div key={i} className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-6 h-6 bg-red-100 rounded-full border border-red-200 text-red-600 text-xs flex items-center justify-center font-bold">{i+1}</div>
                                        <div className="font-bold text-slate-800 text-sm">{flow.step}</div>
                                        <div className="text-sm text-slate-600">{flow.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-green-50/50 border border-green-100 p-6 rounded-xl">
                            <h3 className="text-green-800 font-bold mb-4 text-sm uppercase">Proposed Flow (Order)</h3>
                            <div className="space-y-4 relative">
                                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-green-200"></div>
                                {data.proposedFlow.map((flow, i) => (
                                    <div key={i} className="relative pl-8">
                                        <div className="absolute left-0 top-1 w-6 h-6 bg-green-100 rounded-full border border-green-200 text-green-600 text-xs flex items-center justify-center font-bold">{i+1}</div>
                                        <div className="font-bold text-slate-800 text-sm">{flow.step}</div>
                                        <div className="text-sm text-slate-600">{flow.desc}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Checklists Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <CheckSquare size={18} className="text-secondary" /> UAT Scenarios
                        </h2>
                        <ul className="space-y-3">
                            {data.uat.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                            <Database size={18} className="text-secondary" /> Migration Checklist
                        </h2>
                        <ul className="space-y-3">
                            {data.migration.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-slate-300 shrink-0"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1 space-y-8">
                {/* Key DocTypes */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                        <FileText size={18} /> Key DocTypes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {data.doctypes.map((doc, i) => (
                            <span key={i} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs font-medium text-slate-600">
                                {doc}
                            </span>
                        ))}
                    </div>
                </div>

                {/* KPIs */}
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                        <BarChart2 size={18} /> Standard KPIs
                    </h3>
                    <ul className="space-y-3">
                        {data.kpis.map((kpi, i) => (
                            <li key={i} className="text-sm text-slate-600 flex items-start gap-2">
                                <span className="text-green-500 font-bold">↑</span> {kpi}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Common Mistakes */}
                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                        <AlertTriangle size={18} /> Common Mistakes
                    </h3>
                    <ul className="space-y-3">
                        {data.mistakes.map((mistake, i) => (
                            <li key={i} className="text-sm text-orange-800/80 leading-relaxed flex items-start gap-2">
                                <span className="text-orange-500">•</span> {mistake}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="bg-primary text-white p-6 rounded-xl text-center">
                    <h3 className="font-bold text-lg mb-2">Need this implemented?</h3>
                    <p className="text-slate-300 text-sm mb-6">Our team has executed this exact playbook for 10+ clients.</p>
                    <Link to="/contact">
                        <Button fullWidth variant="secondary">Book Discovery Call</Button>
                    </Link>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};
