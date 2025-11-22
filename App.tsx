
import React, { Suspense, lazy } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Loading } from './components/ui/Loading';

// Lazy Load pages for performance optimization
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const ResourceAugmentation = lazy(() => import('./pages/ResourceAugmentation').then(module => ({ default: module.ResourceAugmentation })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail').then(module => ({ default: module.ServiceDetail })));
const ERPNextService = lazy(() => import('./pages/ERPNextService').then(module => ({ default: module.ERPNextService })));
const ERPNextVanilla = lazy(() => import('./pages/ERPNextVanilla').then(module => ({ default: module.ERPNextVanilla })));
const ERPNextModuleDetail = lazy(() => import('./pages/ERPNextModuleDetail').then(module => ({ default: module.ERPNextModuleDetail })));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail').then(module => ({ default: module.IndustryDetail })));
const Playbooks = lazy(() => import('./pages/Playbooks').then(module => ({ default: module.Playbooks })));
const PlaybookDetail = lazy(() => import('./pages/PlaybookDetail').then(module => ({ default: module.PlaybookDetail })));
const ReadinessChecker = lazy(() => import('./pages/ReadinessChecker').then(module => ({ default: module.ReadinessChecker })));
const AMCSupport = lazy(() => import('./pages/AMCSupport').then(module => ({ default: module.AMCSupport })));

// Hiring Landing Pages
const HireERPNextTeam = lazy(() => import('./pages/HireERPNextTeam').then(module => ({ default: module.HireERPNextTeam })));
const HireERPNextConsultant = lazy(() => import('./pages/HireERPNextConsultant').then(module => ({ default: module.HireERPNextConsultant })));
const HireERPNextDeveloper = lazy(() => import('./pages/HireERPNextDeveloper').then(module => ({ default: module.HireERPNextDeveloper })));
const HireFrappeDeveloper = lazy(() => import('./pages/HireFrappeDeveloper').then(module => ({ default: module.HireFrappeDeveloper })));
const HireOdooTeam = lazy(() => import('./pages/HireOdooTeam').then(module => ({ default: module.HireOdooTeam })));

// Corporate Pages
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Careers = lazy(() => import('./pages/Careers').then(module => ({ default: module.Careers })));
const Partners = lazy(() => import('./pages/Partners').then(module => ({ default: module.Partners })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Sitemap = lazy(() => import('./pages/Sitemap').then(module => ({ default: module.Sitemap })));
const Privacy = lazy(() => import('./pages/Legal').then(module => ({ default: module.Privacy })));
const Terms = lazy(() => import('./pages/Legal').then(module => ({ default: module.Terms })));

// 404 Page
const NotFound = lazy(() => import('./pages/NotFound').then(module => ({ default: module.NotFound })));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="resource-augmentation" element={<ResourceAugmentation />} />
            <Route path="contact" element={<Contact />} />
            
            {/* Hiring Landing Pages */}
            <Route path="hire-erpnext-team" element={<HireERPNextTeam />} />
            <Route path="hire-erpnext-consultant" element={<HireERPNextConsultant />} />
            <Route path="hire-erpnext-developer" element={<HireERPNextDeveloper />} />
            <Route path="hire-frappe-developer" element={<HireFrappeDeveloper />} />
            <Route path="hire-odoo-team" element={<HireOdooTeam />} />

            {/* Corporate Pages */}
            <Route path="about" element={<About />} />
            <Route path="careers" element={<Careers />} />
            <Route path="partners" element={<Partners />} />
            <Route path="blog" element={<Blog />} />
            <Route path="sitemap" element={<Sitemap />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />

            {/* Specific Landing Pages */}
            <Route path="services/erpnext" element={<ERPNextService />} />
            
            {/* Regional Landing Pages for SEO */}
            <Route path="united-kingdom/erpnext" element={<ERPNextService region="UK" />} />
            <Route path="united-states/erpnext" element={<ERPNextService region="USA" />} />
            <Route path="dubai/erpnext" element={<ERPNextService region="Dubai" />} />
            
            <Route path="services/erpnext-vanilla" element={<ERPNextVanilla />} />
            <Route path="erpnext-amc-support" element={<AMCSupport />} />
            
            {/* ERPNext Specific Modules */}
            <Route path="services/erpnext/:moduleId" element={<ERPNextModuleDetail />} />

            {/* Dynamic Routes for Services */}
            <Route path="services/:serviceId" element={<ServiceDetail />} />
            
            {/* Dynamic Routes for Industries */}
            <Route path="industries/:industryId" element={<IndustryDetail />} />

            {/* Playbooks */}
            <Route path="playbooks" element={<Playbooks />} />
            <Route path="playbooks/:playbookId" element={<PlaybookDetail />} />

            {/* Tools */}
            <Route path="readiness-checker" element={<ReadinessChecker />} />

            {/* Catch-all for 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
