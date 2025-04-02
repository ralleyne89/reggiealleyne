
import React from 'react';

const WorksLoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-8">
      <div className="h-8 w-40 bg-secondary rounded"></div>
      <div className="h-12 w-80 bg-secondary rounded"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-80 bg-secondary rounded-xl"></div>
        ))}
      </div>
    </div>
  );
};

export default WorksLoadingSkeleton;
