
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Log the 404 error for monitoring
    console.error(`[404 Error] Page not found: ${location.pathname}`);
    
    // In a real production app, you would send this to your analytics/logging service here
    // e.g. logToService({ type: '404', path: location.pathname, referrer: document.referrer });
  }, [location]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 max-w-lg w-full relative overflow-hidden">
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-secondary to-blue-400"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full z-0"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-secondary animate-bounce-slow">
            <FileQuestion size={40} />
          </div>
          
          <h1 className="text-6xl font-bold text-slate-900 mb-2">404</h1>
          <h2 className="text-2xl font-bold text-primary mb-4">Page Not Found</h2>
          
          <p className="text-slate-600 mb-8 leading-relaxed">
            Oops! The page you are looking for seems to have wandered off. It might have been moved, deleted, or never existed in the first place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-secondary/20">
                <Home size={18} className="mr-2" /> Go Home
              </Button>
            </Link>
            <button onClick={() => window.history.back()}>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <ArrowLeft size={18} className="mr-2" /> Go Back
              </Button>
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 font-mono">
            Error Code: 404_NOT_FOUND <br/>
            Path: {location.pathname}
          </div>
        </div>
      </div>
    </div>
  );
};
