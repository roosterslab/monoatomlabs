import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';

const ProcessFlow = ({ steps = [], theme = 'light', accentColor = 'blue' }) => {
    const isDark = theme === 'dark';

    const colorMap = {
        blue: { bgLight: 'bg-blue-50', textLight: 'text-blue-600', textDark: 'text-blue-400', },
        emerald: { bgLight: 'bg-emerald-50', textLight: 'text-emerald-600', textDark: 'text-emerald-400' },
        purple: { bgLight: 'bg-purple-50', textLight: 'text-purple-600', textDark: 'text-purple-400' },
        slate: { bgLight: 'bg-slate-50', textLight: 'text-slate-800', textDark: 'text-slate-200' },
    };

    const colors = colorMap[accentColor] || colorMap.blue;

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
                            ${isDark ? `bg-neutral-800 ${colors.textDark}` : `${colors.bgLight} ${colors.textLight}`}
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
