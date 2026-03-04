import React, { useState } from 'react';

const Tabs = ({
    tabs = [],
    defaultTab = 0,
    onChange,
    theme = 'dark', // 'dark', 'light'
    variant = 'default', // 'default', 'pills', 'underline'
    className = '',
    orientation = 'horizontal', // 'horizontal', 'vertical'
}) => {
    const [activeTab, setActiveTab] = useState(defaultTab);

    const handleTabChange = (index) => {
        setActiveTab(index);
        if (onChange) {
            onChange(index);
        }
    };

    const baseTabStyles = 'px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer';

    const getTabStyles = (isActive) => {
        if (variant === 'pills') {
            return isActive
                ? theme === 'dark'
                    ? 'bg-white text-black rounded-sm'
                    : 'bg-neutral-900 text-white rounded-sm'
                : theme === 'dark'
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-sm';
        }

        if (variant === 'underline') {
            return isActive
                ? theme === 'dark'
                    ? 'text-white border-b-2 border-white'
                    : 'text-neutral-900 border-b-2 border-neutral-900'
                : theme === 'dark'
                    ? 'text-neutral-400 hover:text-white border-b-2 border-transparent'
                    : 'text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent';
        }

        // default variant
        return isActive
            ? theme === 'dark'
                ? 'text-white bg-neutral-900 border border-neutral-800 rounded-t-sm'
                : 'text-neutral-900 bg-white border border-neutral-200 rounded-t-sm'
            : theme === 'dark'
                ? 'text-neutral-400 hover:text-white border border-transparent'
                : 'text-neutral-600 hover:text-neutral-900 border border-transparent';
    };

    const containerStyles = orientation === 'horizontal'
        ? 'flex flex-col'
        : 'flex flex-row gap-6';

    const tabListStyles = orientation === 'horizontal'
        ? 'flex flex-wrap gap-2 border-b ' + (theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200')
        : 'flex flex-col gap-2 min-w-[200px]';

    const tabPanelStyles = orientation === 'horizontal'
        ? 'py-6'
        : 'flex-1';

    return (
        <div className={`${containerStyles} ${className}`}>
            {/* Tab List */}
            <div className={tabListStyles} role="tablist">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={activeTab === index}
                        aria-controls={`tabpanel-${index}`}
                        onClick={() => handleTabChange(index)}
                        className={`${baseTabStyles} ${getTabStyles(activeTab === index)}`}
                    >
                        {tab.icon && (
                            <span className="inline-flex items-center gap-2">
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </span>
                        )}
                        {!tab.icon && tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Panels */}
            <div className={tabPanelStyles}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        role="tabpanel"
                        id={`tabpanel-${index}`}
                        hidden={activeTab !== index}
                        className={activeTab === index ? 'animate-in fade-in duration-300' : ''}
                    >
                        {activeTab === index && tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

// Controlled Tabs Component (for advanced use cases)
const ControlledTabs = ({
    tabs = [],
    activeTab,
    onChange,
    theme = 'dark',
    variant = 'default',
    className = '',
    orientation = 'horizontal',
}) => {
    const baseTabStyles = 'px-6 py-3 text-sm font-medium transition-all duration-300 cursor-pointer';

    const getTabStyles = (isActive) => {
        if (variant === 'pills') {
            return isActive
                ? theme === 'dark'
                    ? 'bg-white text-black rounded-sm'
                    : 'bg-neutral-900 text-white rounded-sm'
                : theme === 'dark'
                    ? 'text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-sm'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-sm';
        }

        if (variant === 'underline') {
            return isActive
                ? theme === 'dark'
                    ? 'text-white border-b-2 border-white'
                    : 'text-neutral-900 border-b-2 border-neutral-900'
                : theme === 'dark'
                    ? 'text-neutral-400 hover:text-white border-b-2 border-transparent'
                    : 'text-neutral-600 hover:text-neutral-900 border-b-2 border-transparent';
        }

        return isActive
            ? theme === 'dark'
                ? 'text-white bg-neutral-900 border border-neutral-800 rounded-t-sm'
                : 'text-neutral-900 bg-white border border-neutral-200 rounded-t-sm'
            : theme === 'dark'
                ? 'text-neutral-400 hover:text-white border border-transparent'
                : 'text-neutral-600 hover:text-neutral-900 border border-transparent';
    };

    const containerStyles = orientation === 'horizontal'
        ? 'flex flex-col'
        : 'flex flex-row gap-6';

    const tabListStyles = orientation === 'horizontal'
        ? 'flex flex-wrap gap-2 border-b ' + (theme === 'dark' ? 'border-neutral-800' : 'border-neutral-200')
        : 'flex flex-col gap-2 min-w-[200px]';

    const tabPanelStyles = orientation === 'horizontal'
        ? 'py-6'
        : 'flex-1';

    return (
        <div className={`${containerStyles} ${className}`}>
            <div className={tabListStyles} role="tablist">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={activeTab === index}
                        onClick={() => onChange(index)}
                        className={`${baseTabStyles} ${getTabStyles(activeTab === index)}`}
                    >
                        {tab.icon && (
                            <span className="inline-flex items-center gap-2">
                                <tab.icon className="w-4 h-4" />
                                {tab.label}
                            </span>
                        )}
                        {!tab.icon && tab.label}
                    </button>
                ))}
            </div>

            <div className={tabPanelStyles}>
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        role="tabpanel"
                        hidden={activeTab !== index}
                        className={activeTab === index ? 'animate-in fade-in duration-300' : ''}
                    >
                        {activeTab === index && tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

Tabs.Controlled = ControlledTabs;

export default Tabs;
