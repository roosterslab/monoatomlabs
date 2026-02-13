import React from 'react';

const Button = ({ children, variant = 'primary', theme = 'light', className = '', icon: Icon, onClick }) => {
    const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-300 rounded-sm group shadow-sm relative overflow-hidden";

    const getColors = () => {
        if (variant === 'primary') {
            return theme === 'dark'
                ? "bg-white text-black hover:bg-neutral-200 border border-white z-10 shadow-lg"
                : "bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-900";
        } else if (variant === 'secondary') {
            return theme === 'dark'
                ? "bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-neutral-900 z-10"
                : "bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-900";
        } else {
            // Text variant
            return theme === 'dark'
                ? "text-neutral-400 hover:text-white px-0 py-2 shadow-none"
                : "text-neutral-500 hover:text-neutral-900 px-0 py-2 shadow-none";
        }
    };

    return (
        <button onClick={onClick} className={`${baseStyle} ${getColors()} ${className}`}>
            {children}
            {Icon && <Icon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />}
        </button>
    );
};

export default Button;
