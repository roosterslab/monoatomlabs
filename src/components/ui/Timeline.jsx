import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Timeline = ({ items = [], theme = 'light' }) => {
    const isDark = theme === 'dark';

    return (
        <div className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-12">
            {items.map((item, index) => (
                <div key={index} className="relative">
                    {/* Dot */}
                    <div className={`
                        absolute -left-[39px] top-1 w-5 h-5 rounded-full border-4 
                        ${item.status === 'completed'
                            ? 'bg-emerald-500 border-white ring-2 ring-emerald-100'
                            : item.status === 'current'
                                ? 'bg-blue-600 border-white ring-2 ring-blue-100 animate-pulse'
                                : 'bg-neutral-300 border-white'
                        }
                    `}></div>

                    {/* Content */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:items-baseline">
                        <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-neutral-500' : 'text-neutral-500'}`}>
                            {item.phase}
                        </span>
                        <h4 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                            {item.title}
                        </h4>
                    </div>
                    <p className={`mt-2 text-base ${isDark ? 'text-neutral-400' : 'text-neutral-600'} max-w-lg`}>
                        {item.description}
                    </p>

                    {item.date && (
                        <span className="mt-2 inline-block px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded font-medium">
                            Target: {item.date}
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Timeline;
