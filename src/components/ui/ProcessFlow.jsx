import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const ProcessFlow = ({ steps = [], theme = 'light' }) => {
    const isDark = theme === 'dark';

    return (
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-8">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    {/* Step Card */}
                    <div className={`
                        relative flex-1 p-6 rounded-2xl border text-center min-h-[160px] flex flex-col items-center justify-center
                        ${isDark
                            ? 'bg-neutral-900 border-neutral-800 text-white'
                            : 'bg-white border-neutral-200 text-neutral-900 shadow-sm'
                        }
                    `}>
                        <div className={`
                            w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl
                            ${isDark ? 'bg-neutral-800 text-blue-400' : 'bg-blue-50 text-blue-600'}
                        `}>
                            {step.icon}
                        </div>
                        <h4 className="font-semibold mb-2">{step.title}</h4>
                        <p className={`text-sm ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                            {step.description}
                        </p>

                        {/* Number Indicator */}
                        <div className="absolute top-4 right-4 text-xs font-mono opacity-30">
                            0{index + 1}
                        </div>
                    </div>

                    {/* Connector Arrow */}
                    {index < steps.length - 1 && (
                        <div className={`${isDark ? 'text-neutral-700' : 'text-neutral-300'}`}>
                            <ArrowRight className="hidden md:block w-6 h-6" />
                            <ArrowDown className="block md:hidden w-6 h-6" />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProcessFlow;
