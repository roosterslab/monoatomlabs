import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const CallToAction = ({
    title,
    description,
    primaryButton,
    secondaryButton,
    variant = 'default', // 'default', 'compact', 'split'
    theme = 'dark', // 'dark', 'light'
    className = '',
    icon: Icon,
}) => {
    const variantStyles = {
        default: 'py-24',
        compact: 'py-16',
        split: 'py-24'
    };

    const bgStyles = {
        dark: 'bg-neutral-950 text-white border-neutral-900',
        light: 'bg-white text-neutral-900 border-neutral-200'
    };

    if (variant === 'split') {
        return (
            <section className={`border-t ${bgStyles[theme]} ${variantStyles[variant]} ${className}`}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            {Icon && (
                                <Icon className={`w-12 h-12 mb-6 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`} strokeWidth={1} />
                            )}
                            <h2 className={`text-4xl md:text-5xl font-medium tracking-tight mb-4 ${
                                theme === 'dark' ? 'text-white' : 'text-neutral-900'
                            }`}>
                                {title}
                            </h2>
                            <p className={`text-lg md:text-xl ${
                                theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                            }`}>
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
                            {primaryButton && (
                                primaryButton.link ? (
                                    <Link to={primaryButton.link}>
                                        <Button
                                            variant="primary"
                                            theme={theme}
                                            icon={primaryButton.icon || ArrowRight}
                                        >
                                            {primaryButton.text}
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        variant="primary"
                                        theme={theme}
                                        icon={primaryButton.icon || ArrowRight}
                                        onClick={primaryButton.onClick}
                                    >
                                        {primaryButton.text}
                                    </Button>
                                )
                            )}

                            {secondaryButton && (
                                secondaryButton.link ? (
                                    <Link to={secondaryButton.link}>
                                        <Button
                                            variant="secondary"
                                            theme={theme}
                                            className={theme === 'dark' ? 'border-neutral-800' : ''}
                                        >
                                            {secondaryButton.text}
                                        </Button>
                                    </Link>
                                ) : (
                                    <Button
                                        variant="secondary"
                                        theme={theme}
                                        className={theme === 'dark' ? 'border-neutral-800' : ''}
                                        onClick={secondaryButton.onClick}
                                    >
                                        {secondaryButton.text}
                                    </Button>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`border-t ${bgStyles[theme]} ${variantStyles[variant]} ${className}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {Icon && (
                        <Icon className={`w-12 h-12 mx-auto mb-6 ${theme === 'dark' ? 'text-white' : 'text-neutral-900'}`} strokeWidth={1} />
                    )}

                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 ${
                        theme === 'dark' ? 'text-white' : 'text-neutral-900'
                    }`}>
                        {title}
                    </h2>

                    {description && (
                        <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${
                            theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600'
                        }`}>
                            {description}
                        </p>
                    )}

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {primaryButton && (
                            primaryButton.link ? (
                                <Link to={primaryButton.link}>
                                    <Button
                                        variant="primary"
                                        theme={theme}
                                        icon={primaryButton.icon || ArrowRight}
                                    >
                                        {primaryButton.text}
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    variant="primary"
                                    theme={theme}
                                    icon={primaryButton.icon || ArrowRight}
                                    onClick={primaryButton.onClick}
                                >
                                    {primaryButton.text}
                                </Button>
                            )
                        )}

                        {secondaryButton && (
                            secondaryButton.link ? (
                                <Link to={secondaryButton.link}>
                                    <Button
                                        variant="secondary"
                                        theme={theme}
                                        className={theme === 'dark' ? 'border-neutral-800' : ''}
                                    >
                                        {secondaryButton.text}
                                    </Button>
                                </Link>
                            ) : (
                                <Button
                                    variant="secondary"
                                    theme={theme}
                                    className={theme === 'dark' ? 'border-neutral-800' : ''}
                                    onClick={secondaryButton.onClick}
                                >
                                    {secondaryButton.text}
                                </Button>
                            )
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
