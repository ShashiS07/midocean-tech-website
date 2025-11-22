
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { 
  Wallet, Factory, Users, Package, TrendingUp, ShoppingBag, Briefcase, PieChart, 
  ArrowRight, CheckCircle, FileText, Layout, Database, ShieldCheck, ChevronRight, 
  PlayCircle, Globe, Code2, Table, BarChart3, Printer, Key, Settings, 
  CreditCard, Truck, Calendar, AlertTriangle, MousePointerClick,
  Layers, RefreshCw, Clock, Wrench
} from 'lucide-react';

type ModuleData = {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  features: { title: string; desc: string; icon: React.ReactNode }[];
  reports: string[];
  benefits: string[];
  doctypes: string[];
  faq: { q: string; a: string }[];
};

const modules: Record<string, ModuleData> = {
  'accounting': {
    title: "Financial Accounting",
    subtitle: "A real-time, double-entry ledger that integrates every transaction across your enterprise.",
    description: "ERPNext Accounting is not a standalone silo; it is the nervous system of your ERP. Every purchase, sale, and stock movement updates the General Ledger in real-time. With support for multi-currency, multi-company, and configurable tax engines, it replaces legacy systems like Tally or QuickBooks for growing enterprises.",
    icon: <Wallet className="text-blue-500" size={48} />,
    features: [
      { 
        title: "Accounting Dimensions", 
        desc: "Go beyond standard Cost Centers. Tag transactions with custom dimensions (e.g., Territory, Brand, Project) for granular P&L analysis.",
        icon: <PieChart size={20} className="text-blue-500" />
      },
      { 
        title: "Automated Bank Reconciliation", 
        desc: "Upload bank statements (CSV/Excel) or connect via Plaid. The system auto-matches transactions with vouchers based on reference numbers.",
        icon: <CreditCard size={20} className="text-blue-500" />
      },
      { 
        title: "Budgeting & Control", 
        desc: "Define monthly or yearly budgets against Cost Centers. The system can warn or stop users from booking expenses if the budget is exceeded.",
        icon: <ShieldCheck size={20} className="text-blue-500" />
      },
      { 
        title: "Multi-Currency & Exchange Rates", 
        desc: "Auto-fetch daily exchange rates. Manage forex gains/losses automatically on payment entry. Transact in any currency, report in base currency.",
        icon: <Globe size={20} className="text-blue-500" />
      }
    ],
    reports: [
      "General Ledger & Trial Balance",
      "Profit & Loss Statement (P&L)",
      "Balance Sheet",
      "Accounts Receivable/Payable Aging",
      "Cash Flow Statement",
      "Gross Profit Analysis",
      "GST / VAT Audit Reports"
    ],
    benefits: ["Reduced period closing time by 40%", "Real-time cash flow analysis", "Audit-proof immutable ledger"],
    doctypes: ["Journal Entry", "Payment Entry", "Sales Invoice", "Purchase Invoice", "Cost Center", "Bank Reconciliation Tool", "Period Closing Voucher"],
    faq: [
      { q: "Does it support Indian GST e-Invoicing?", a: "Yes, ERPNext has a built-in GST compliance engine that supports JSON export for e-Invoicing and e-Waybill generation." },
      { q: "Can I manage multiple companies?", a: "Yes, you can set up a Group Company structure and get consolidated financial statements." }
    ]
  },
  'manufacturing': {
    title: "Manufacturing & MES",
    subtitle: "Plan, Track, and Optimize your Shop Floor operations.",
    description: "Whether you do Discrete Manufacturing (Assembly) or Process Manufacturing (Formulas), ERPNext handles it. From simple Bill of Materials to complex multi-level production planning with capacity constraints, it provides total visibility into your WIP and finished goods cost.",
    icon: <Factory className="text-amber-500" size={48} />,
    features: [
      { 
        title: "Production Planning Tool", 
        desc: "Aggregate open Sales Orders or Material Requests to generate a consolidated Production Plan. Auto-create Work Orders and Material Requests.",
        icon: <Calendar size={20} className="text-amber-500" />
      },
      { 
        title: "Bill of Materials (BOM)", 
        desc: "Manage multi-level BOMs with scrap, byproducts, and alternative items. Version control ensures you always build with the right specs.",
        icon: <Layers size={20} className="text-amber-500" />
      },
      { 
        title: "Shop Floor Control", 
        desc: "Track operations via Job Cards on tablets/kiosks. Capture real-time labor hours, machine usage, and quantity produced at each workstation.",
        icon: <Settings size={20} className="text-amber-500" />
      },
      { 
        title: "Subcontracting", 
        desc: "Streamline outsourcing. Issue raw materials to vendors and track incoming finished goods with automated valuation adjustment.",
        icon: <Truck size={20} className="text-amber-500" />
      }
    ],
    reports: [
      "Production Analytics",
      "BOM Explorer (Tree View)",
      "Work Order Summary",
      "Downtime Analysis",
      "Job Card Summary",
      "WIP Warehouse Valuation"
    ],
    benefits: ["Accurate product costing", "Reduced WIP inventory", "Better delivery timeline prediction"],
    doctypes: ["BOM", "Work Order", "Job Card", "Production Plan", "Workstation", "Operation", "Timesheet"],
    faq: [
      { q: "Can it handle capacity planning?", a: "Yes, ERPNext checks workstation availability and business hours to schedule Work Orders effectively." },
      { q: "How does it calculate Cost of Goods Sold?", a: "It sums up Raw Material Cost + Operating Cost (Electricity, Rent, Labor) to give you a precise per-unit cost." }
    ]
  },
  'hr-payroll': {
    title: "HR & Payroll",
    subtitle: "Manage your most valuable asset: Your People.",
    description: "A complete Human Resource Management System (HRMS) built right into your ERP. Stop maintaining employee data in spreadsheets. Handle recruitment, onboarding, leave management, expense claims, and complex payroll processing without leaving the platform.",
    icon: <Users className="text-purple-500" size={48} />,
    features: [
      { 
        title: "Payroll Processing", 
        desc: "Configurable salary structures with earnings, deductions, and tax slabs. Auto-generate thousands of payslips in one click based on attendance.",
        icon: <FileText size={20} className="text-purple-500" />
      },
      { 
        title: "Leave & Attendance", 
        desc: "Define leave policies, holidays, and accruals. Integrate with biometric devices to auto-mark attendance (Check-in/Check-out).",
        icon: <Calendar size={20} className="text-purple-500" />
      },
      { 
        title: "Expense Claims", 
        desc: "Employees can upload receipts via mobile. Managers approve workflows. Accounts processes reimbursement in the next pay cycle.",
        icon: <Wallet size={20} className="text-purple-500" />
      },
      { 
        title: "Recruitment Module", 
        desc: "Track Job Openings, Applicants, and Interview rounds. Convert successful applicants to Employees instantly.",
        icon: <Users size={20} className="text-purple-500" />
      }
    ],
    reports: [
      "Monthly Salary Register",
      "Leave Balance Report",
      "Employee Information Report",
      "Monthly Attendance Sheet",
      "Provident Fund (PF) Statement"
    ],
    benefits: ["Eliminate payroll errors", "Self-service portal for employees", "Compliance with labor laws"],
    doctypes: ["Employee", "Salary Slip", "Leave Application", "Expense Claim", "Job Applicant", "Shift Type", "Attendance"],
    faq: [
      { q: "Is there an employee self-service portal?", a: "Yes, employees can log in to view payslips, apply for leave, and submit tax declarations." },
      { q: "Can we handle loans and advances?", a: "Yes, the Employee Loan module tracks disbursement and auto-deducts EMI from salary." }
    ]
  },
  'inventory': {
    title: "Inventory & Stock",
    subtitle: "Precision stock management for high-volume operations.",
    description: "Stop guessing your stock levels. ERPNext Inventory gives you real-time visibility across unlimited warehouses. Manage serialized items, batches, expiry dates, and automate re-ordering to prevent stock-outs.",
    icon: <Package className="text-blue-500" size={48} />,
    features: [
      { 
        title: "Multi-Warehouse Management", 
        desc: "Create a tree structure of warehouses (e.g., Rack -> Zone -> Warehouse). Track stock in transit and at customer/vendor sites.",
        icon: <Database size={20} className="text-blue-500" />
      },
      { 
        title: "Serialization & Batching", 
        desc: "Trace every single item's movement. Manage manufacturing dates, expiry dates, and warranty periods for batches.",
        icon: <Key size={20} className="text-blue-500" />
      },
      { 
        title: "Automated Replenishment", 
        desc: "Set re-order levels and minimum order quantities. The system auto-generates Material Requests when stock dips.",
        icon: <RefreshCw size={20} className="text-blue-500" />
      },
      { 
        title: "Stock Valuation", 
        desc: "Supports FIFO (First-In-First-Out) and Moving Average valuation methods. Valuation rates are recalculated in real-time.",
        icon: <BarChart3 size={20} className="text-blue-500" />
      }
    ],
    reports: [
      "Stock Ledger",
      "Stock Balance",
      "Stock Ageing Report",
      "Item-wise Price List",
      "Stock Projected Quantity",
      "Batch-wise Balance History"
    ],
    benefits: ["Prevent stock-outs", "Reduce dead stock", "Complete traceability for recalls"],
    doctypes: ["Stock Entry", "Delivery Note", "Purchase Receipt", "Item", "Warehouse", "Stock Reconciliation", "Batch", "Serial No"],
    faq: [
      { q: "Can we use barcode scanners?", a: "Yes, ERPNext supports barcode scanning for quick stock entry, picking, and packing." },
      { q: "How does it handle returns?", a: "Dedicated Sales Return and Purchase Return workflows adjust stock and accounting ledgers automatically." }
    ]
  },
  'crm': {
    title: "CRM & Sales",
    subtitle: "Win more deals with integrated Customer Relationship Management.",
    description: "Your sales team shouldn't work in silos. ERPNext CRM connects Leads to Sales Orders to Invoices. Track opportunities, send quotations, manage your sales pipeline, and automate email campaigns efficiently.",
    icon: <TrendingUp className="text-red-500" size={48} />,
    features: [
      { 
        title: "Omnichannel Communication", 
        desc: "Sync your email inbox. Log calls and meetings. All communication is stored against the Lead/Customer for a 360° view.",
        icon: <Users size={20} className="text-red-500" />
      },
      { 
        title: "Sales Pipeline", 
        desc: "Visualize Opportunities by stage (Qualification, Proposal, Negotiation) in a Kanban view. Drag and drop to move deals forward.",
        icon: <Layout size={20} className="text-red-500" />
      },
      { 
        title: "Quotation Builder", 
        desc: "Create beautiful PDF quotes with item images and tax breakdowns. Convert quotes to Sales Orders with one click.",
        icon: <FileText size={20} className="text-red-500" />
      },
      { 
        title: "Campaign Management", 
        desc: "Send bulk email newsletters to Leads. Track open rates and click-throughs directly within the ERP.",
        icon: <Globe size={20} className="text-red-500" />
      }
    ],
    reports: [
      "Sales Funnel Analytics",
      "Lead Source Efficiency",
      "Sales Person Target Variance",
      "Inactive Customers",
      "Opportunity Summary by Stage"
    ],
    benefits: ["360-degree customer view", "Faster quote-to-cash cycle", "Improved sales team accountability"],
    doctypes: ["Lead", "Opportunity", "Quotation", "Customer", "Sales Partner", "Newsletter", "Email Campaign"],
    faq: [
      { q: "Does it integrate with LinkedIn?", a: "Standard integration is limited, but we can build custom scrapers or API connectors for LinkedIn leads." },
      { q: "Can we set sales targets?", a: "Yes, you can define monthly/quarterly sales targets for Sales Persons and track performance vs actuals." }
    ]
  },
  'buying': {
    title: "Buying & Procurement",
    subtitle: "Smarter purchasing for better margins.",
    description: "Streamline your procurement process to ensure material availability without overstocking. Manage supplier relationships, send Requests for Quotation (RFQs), compare supplier bids, and automate material planning.",
    icon: <ShoppingBag className="text-indigo-500" size={48} />,
    features: [
      { 
        title: "Supplier Scorecard", 
        desc: "The system automatically rates suppliers based on delivery time, quotation response time, and item quality.",
        icon: <BarChart3 size={20} className="text-indigo-500" />
      },
      { 
        title: "Request for Quotation (RFQ)", 
        desc: "Send RFQs to multiple vendors via email. Suppliers can submit bids via a portal, which you can compare side-by-side.",
        icon: <FileText size={20} className="text-indigo-500" />
      },
      { 
        title: "Purchase Agreements", 
        desc: "Create blanket orders for long-term contracts. Schedule partial deliveries against a master contract.",
        icon: <CheckCircle size={20} className="text-indigo-500" />
      },
      { 
        title: "Material Request Workflow", 
        desc: "Centralized requests from various departments. Set up approval workflows based on amount or department.",
        icon: <ArrowRight size={20} className="text-indigo-500" />
      }
    ],
    reports: [
      "Purchase Analytics",
      "Supplier-wise Item Price",
      "Procurement Tracker",
      "Material Request Summary",
      "Purchase Order Trends"
    ],
    benefits: ["Better supplier negotiation", "Prevent unauthorized purchases", "Timely material availability"],
    doctypes: ["Material Request", "Request for Quotation", "Purchase Order", "Supplier", "Supplier Quotation", "Purchase Invoice"],
    faq: [
      { q: "Can we set approval limits?", a: "Yes, you can configure workflows so high-value POs require manager or VP approval." }
    ]
  },
  'projects': {
    title: "Projects",
    subtitle: "Deliver service projects on time and on budget.",
    description: "Perfect for service companies, construction firms, and consultancies. Manage tasks, track time, and bill customers based on milestones or timesheets. Link purchases and expenses directly to projects for accurate profitability analysis.",
    icon: <Briefcase className="text-cyan-500" size={48} />,
    features: [
      { 
        title: "Task Management", 
        desc: "Assign tasks to users. Use Kanban boards and Gantt charts to visualize timelines and dependencies.",
        icon: <Layout size={20} className="text-cyan-500" />
      },
      { 
        title: "Timesheets & Billing", 
        desc: "Employees log billable/non-billable hours. Auto-generate Sales Invoices based on approved timesheets.",
        icon: <Clock size={20} className="text-cyan-500" />
      },
      { 
        title: "Project Costing", 
        desc: "Real-time P&L per project. Track material consumption, labor cost, and expense claims against a specific project budget.",
        icon: <PieChart size={20} className="text-cyan-500" />
      },
      { 
        title: "Customer Portal", 
        desc: "Give clients a login to view project status, approve timesheets, and raise issues directly.",
        icon: <Globe size={20} className="text-cyan-500" />
      }
    ],
    reports: [
      "Project Wise Profitability",
      "Resource Utilization",
      "Delayed Tasks Summary",
      "Timesheet Summary",
      "Project Budget vs Actual"
    ],
    benefits: ["Accurate project billing", "Real-time profitability view", "Resource utilization tracking"],
    doctypes: ["Project", "Task", "Timesheet", "Project Template", "Issue", "Activity Type"],
    faq: [
      { q: "Can it handle billing based on milestones?", a: "Yes, you can define billing milestones and generate invoices when they are reached." }
    ]
  },
  'asset-management': {
    title: "Asset Management",
    subtitle: "Track the complete lifecycle of your fixed assets.",
    description: "Maintain a comprehensive register of your company's assets. Automate depreciation entries, track asset locations, manage maintenance schedules, and handle asset disposal or sales.",
    icon: <Settings className="text-green-500" size={48} />,
    features: [
      { 
        title: "Asset Lifecycle", 
        desc: "Track purchase date, gross purchase amount, current location, custodian, and expected end of life.",
        icon: <RefreshCw size={20} className="text-green-500" />
      },
      { 
        title: "Automated Depreciation", 
        desc: "Auto-post depreciation entries. Supports Straight Line, Double Declining Balance, and Written Down Value methods.",
        icon: <TrendingUp size={20} className="text-green-500" />
      },
      { 
        title: "Maintenance Schedule", 
        desc: "Set up recurring maintenance tasks for machinery. System alerts you when service is due to prevent breakdown.",
        icon: <Wrench size={20} className="text-green-500" />
      },
      { 
        title: "Capitalization", 
        desc: "Convert Work-in-Progress (CWIP) items into Fixed Assets once installation is complete.",
        icon: <Database size={20} className="text-green-500" />
      }
    ],
    reports: [
      "Fixed Asset Register",
      "Asset Depreciation Ledger",
      "Asset Maintenance Log",
      "Asset Movement History"
    ],
    benefits: ["Compliance with accounting standards", "Prevent asset theft/loss", "Optimized equipment uptime"],
    doctypes: ["Asset", "Asset Category", "Asset Movement", "Asset Repair", "Depreciation Schedule", "Asset Maintenance"],
    faq: [
      { q: "Does it support existing assets?", a: "Yes, you can import existing assets with their current book value and accumulated depreciation." }
    ]
  }
};

export const ERPNextModuleDetail: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();

  if (!moduleId || !modules[moduleId]) {
    return <Navigate to="/services/erpnext" replace />;
  }

  const data = modules[moduleId];

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
             backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)',
             backgroundSize: '24px 24px'
        }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Link to="/services/erpnext" className="inline-flex items-center text-slate-400 hover:text-white mb-6 text-sm font-medium transition-colors">
               <ArrowRight className="rotate-180 mr-2" size={16} /> Back to ERPNext Overview
            </Link>
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="flex-1">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-bold mb-4 border border-secondary/20">
                      Core Module
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">{data.title}</h1>
                  <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                      {data.subtitle}
                  </p>
                  <div className="mt-8 flex gap-4">
                      <Link to="/contact">
                          <Button size="lg" variant="secondary" className="shadow-lg shadow-secondary/20">
                             Request Demo
                          </Button>
                      </Link>
                      <Link to="/services/erpnext">
                           <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-white/5">
                             View All Modules
                           </Button>
                      </Link>
                  </div>
               </div>
               <div className="w-32 h-32 lg:w-48 lg:h-48 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-2xl relative group">
                   <div className="absolute inset-0 bg-secondary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity"></div>
                   <div className="relative z-10">{data.icon}</div>
               </div>
            </div>
        </div>
      </section>

      {/* 2. Overview & Features */}
      <section className="py-20 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                 <div className="lg:col-span-2">
                     <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                     <p className="text-lg text-slate-600 leading-relaxed mb-10">
                         {data.description}
                     </p>

                     <h3 className="text-2xl font-bold text-slate-900 mb-8">Power Features</h3>
                     <div className="grid grid-cols-1 gap-6 mb-12">
                         {data.features.map((feat, i) => (
                             <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 flex items-start gap-4 transition-all hover:shadow-md hover:border-blue-100">
                                 <div className="p-3 bg-white rounded-lg shadow-sm shrink-0">
                                     {feat.icon}
                                 </div>
                                 <div>
                                     <div className="font-bold text-lg text-primary mb-2">{feat.title}</div>
                                     <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
                                 </div>
                             </div>
                         ))}
                     </div>

                     {/* Key Reports Section - New Addition */}
                     <div className="bg-slate-900 text-white rounded-2xl p-8 mb-12 relative overflow-hidden">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                         <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                            <BarChart3 className="text-secondary" /> Key Reports
                         </h3>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             {data.reports.map((report, i) => (
                                 <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                     <Table size={16} className="text-secondary" />
                                     <span className="text-sm font-medium text-slate-200">{report}</span>
                                 </div>
                             ))}
                         </div>
                     </div>

                     <h3 className="text-xl font-bold text-slate-900 mb-6">Why use ERPNext for {data.title}?</h3>
                     <ul className="space-y-4 mb-12">
                         {data.benefits.map((benefit, i) => (
                             <li key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-100 text-green-800 font-medium">
                                 <CheckCircle size={20} />
                                 <span>{benefit}</span>
                             </li>
                         ))}
                     </ul>

                     <h3 className="text-xl font-bold text-slate-900 mb-6">Common Questions</h3>
                     <div className="space-y-4">
                         {data.faq.map((item, i) => (
                             <div key={i} className="border border-slate-200 rounded-xl p-6 hover:border-blue-200 transition-colors bg-slate-50/50">
                                 <div className="font-bold text-slate-800 mb-2 flex items-start gap-2">
                                     <div className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">Q</div>
                                     {item.q}
                                 </div>
                                 <div className="text-slate-600 text-sm pl-8">{item.a}</div>
                             </div>
                         ))}
                     </div>
                 </div>

                 {/* Sidebar */}
                 <div className="space-y-8">
                     <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-24">
                         <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 border-b border-slate-100 pb-3">
                             <FileText size={18} className="text-slate-400" /> Core DocTypes
                         </h4>
                         <div className="flex flex-wrap gap-2 mb-6">
                             {data.doctypes.map((doc, i) => (
                                 <span key={i} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-600 hover:bg-white hover:border-secondary/50 hover:text-secondary transition-all cursor-default">
                                     {doc}
                                 </span>
                             ))}
                         </div>
                         
                         <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                             <h4 className="font-bold text-blue-900 mb-2 text-sm">Need Customization?</h4>
                             <p className="text-xs text-blue-700 mb-4 leading-relaxed">
                                 Standard module not enough? We can build custom apps or scripts to extend this module without breaking core updates.
                             </p>
                             <Link to="/services/custom-erp">
                                 <Button size="sm" fullWidth variant="outline" className="bg-white text-blue-700 border-blue-200 hover:bg-blue-50">
                                     Explore Custom Dev
                                 </Button>
                             </Link>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
      </section>

      {/* 3. CTA */}
      <section className="py-16 bg-slate-900 text-center text-white border-t border-white/10">
          <div className="max-w-2xl mx-auto px-4">
              <h2 className="text-3xl font-bold mb-4">Ready to optimize your {data.title}?</h2>
              <p className="text-slate-400 mb-8">
                  Book a discovery call to see a live demo of this module tailored to your business.
              </p>
              <div className="flex justify-center gap-4">
                  <Link to="/contact">
                      <Button size="lg" variant="secondary" className="shadow-xl shadow-secondary/20">
                          Schedule Demo
                      </Button>
                  </Link>
                  <Link to="/services/erpnext-vanilla">
                      <Button size="lg" variant="outline" className="text-white border-slate-600 hover:bg-white/10">
                          Check Pricing
                      </Button>
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};
