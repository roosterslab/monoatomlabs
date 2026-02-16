import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackNavigation = ({ to, label }) => {
  return (
    <div className="bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          to={to}
          className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {label}
        </Link>
      </div>
    </div>
  );
};

export default BackNavigation;
