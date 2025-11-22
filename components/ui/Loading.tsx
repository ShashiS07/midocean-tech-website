import React from 'react';

export const Loading: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-slate-50">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-slate-200 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
      <div className="mt-4 text-slate-400 font-medium text-sm animate-pulse">
        Loading Midocean...
      </div>
    </div>
  );
};