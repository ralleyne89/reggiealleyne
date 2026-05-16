
import React from 'react';

const WorksLoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8 rounded-2xl border border-gray-200 bg-slate-50 p-5 sm:p-8">
      <div className="space-y-4">
        <div className="h-4 w-24 rounded-full bg-slate-200"></div>
        <div className="h-10 w-full max-w-2xl rounded bg-slate-200"></div>
        <div className="h-4 w-full max-w-xl rounded bg-slate-200"></div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-80 rounded-xl bg-slate-200"></div>
        ))}
      </div>
    </div>
  );
};

export default WorksLoadingSkeleton;
