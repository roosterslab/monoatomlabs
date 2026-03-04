import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Card = ({
    children,
    header,
    footer,
    variant = 'default', // 'default', 'bordered', 'elevated', 'flat'
    theme = 'dark', // 'dark', 'light'
    hoverable = false,
    clickable = false,
    link,
    onClick,
    className = '',
    icon: Icon,
}) => {
    const baseStyles = 'rounded-sm transition-all duration-300';

    const variantStyles = {
        default: theme === 'dark'
            ? 'bg-neutral-900 border border-neutral-800'
            : 'bg-white border border-neutral-200',
        bordered: theme === 'dark'
            ? 'bg-transparent border border-neutral-800'
            : 'bg-transparent border border-neutral-200',
        elevated: theme === 'dark'
            ? 'bg-neutral-900 border border-neutral-800 shadow-lg'
            : 'bg-white border border-neutral-200 shadow-lg',
        flat: theme === 'dark'
            ? 'bg-neutral-900'
            : 'bg-white'
    };

    const hoverStyles = hoverable || clickable
        ? theme === 'dark'
            ? 'hover:border-neutral-600 hover:shadow-xl hover:-translate-y-1'
            : 'hover:border-neutral-400 hover:shadow-xl hover:-translate-y-1'
        : '';

    const cursorStyle = clickable || link ? 'cursor-pointer' : '';

    const cardClasses = `${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${cursorStyle} ${className}`;

    const cardContent = (
        <>
            {/* Header */}
            {(header || Icon) && (
                <div className={`p-6 border-b ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'}`}>
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            {Icon && (
                                <Icon className={`w-8 h-8 mb-4 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`} strokeWidth={1.5} />
                            )}
                            {typeof header === 'string' ? (
                                <h3 className={`text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`}>
                                    {header}
                                </h3>
                            ) : (
                                header
                            )}
                        </div>
                        {(clickable || link) && (
                            <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${
                                theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400'
                            }`} />
                        )}
                    </div>
                </div>
            )}

            {/* Body */}
            <div className="p-6">
                {children}
            </div>

            {/* Footer */}
            {footer && (
                <div className={`p-6 border-t ${theme === 'dark' ? 'border-neutral-800 bg-neutral-950/50' : 'border-neutral-200 bg-neutral-50'}`}>
                    {footer}
                </div>
            )}
        </>
    );

    if (link) {
        return (
            <Link to={link} className={`${cardClasses} group block`}>
                {cardContent}
            </Link>
        );
    }

    if (clickable && onClick) {
        return (
            <div onClick={onClick} className={`${cardClasses} group`}>
                {cardContent}
            </div>
        );
    }

    return (
        <div className={cardClasses}>
            {cardContent}
        </div>
    );
};

// Card subcomponents for more flexible composition
Card.Header = ({ children, className = '', theme = 'dark' }) => (
    <div className={`p-6 border-b ${theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200'} ${className}`}>
        {children}
    </div>
);

Card.Body = ({ children, className = '' }) => (
    <div className={`p-6 ${className}`}>
        {children}
    </div>
);

Card.Footer = ({ children, className = '', theme = 'dark' }) => (
    <div className={`p-6 border-t ${theme === 'dark' ? 'border-neutral-800 bg-neutral-950/50' : 'border-neutral-200 bg-neutral-50'} ${className}`}>
        {children}
    </div>
);

Card.Title = ({ children, className = '', theme = 'dark' }) => (
    <h3 className={`text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-neutral-900'} ${className}`}>
        {children}
    </h3>
);

Card.Description = ({ children, className = '', theme = 'dark' }) => (
    <p className={`text-sm ${theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'} ${className}`}>
        {children}
    </p>
);

export default Card;
