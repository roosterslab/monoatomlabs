import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Layers, Shield, Zap, Box, AppWindow } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../Logo';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = () => {
            setActiveDropdown(null);
        };
        if (activeDropdown) {
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
        }
    }, [activeDropdown]);

    const navigationItems = {
        Products: [
            { name: 'Graphacrete', path: '/products/graphacrete', desc: 'Nano-engineered concrete', icon: Layers },
            { name: 'Graffisol', path: '/products/graffisol', desc: 'Anti-corrosion coating', icon: Shield },
            { name: 'Ceraphene', path: '/products/ceraphene', desc: 'Thermal management', icon: Zap },
            { name: 'HD-G-PE', path: '/products/hd-g-pe', desc: 'Advanced polymers', icon: Box },
            { name: 'View All Products', path: '/products', desc: 'Full catalog overview', icon: AppWindow },
        ],
    };

    const directLinks = [
        { name: 'About', path: '/about' },
        { name: 'Innovations Pipeline', path: '/products/pipeline' },
    ];

    const isActiveLink = (path) => {
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };

    const handleDropdownToggle = (item, e) => {
        e.stopPropagation();
        setActiveDropdown(activeDropdown === item ? null : item);
    };

    const handleMobileDropdownToggle = (item) => {
        setMobileDropdown(mobileDropdown === item ? null : item);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-neutral-800 py-6' : 'bg-transparent border-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="hover:opacity-80 transition-opacity">
                        <Logo size={scrolled ? 15 : 22} theme="dark" className="transition-all duration-300" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {Object.keys(navigationItems).map((item) => (
                            <div key={item} className="relative group">
                                <button
                                    onClick={(e) => handleDropdownToggle(item, e)}
                                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${isActiveLink(`/#${item.toLowerCase()}`) ? 'text-white' : 'text-neutral-400 hover:text-white'
                                        }`}
                                >
                                    {item}
                                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item ? 'rotate-180' : ''}`} />
                                </button>

                                {/* Mega Menu Dropdown */}
                                {activeDropdown === item && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-neutral-950/95 backdrop-blur-xl border border-neutral-800 rounded-2xl shadow-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-200 ring-1 ring-white/5 grid grid-cols-2 gap-2">
                                        {navigationItems[item].map((subItem) => (
                                            <Link
                                                key={subItem.path}
                                                to={subItem.path}
                                                className={`flex items-start gap-4 p-3 rounded-xl transition-all duration-200 group/item ${isActiveLink(subItem.path)
                                                    ? 'bg-neutral-800/50 ring-1 ring-white/5'
                                                    : 'hover:bg-neutral-800/50 hover:ring-1 hover:ring-white/5'
                                                    }`}
                                                onClick={() => {
                                                    setActiveDropdown(null);
                                                }}
                                            >
                                                <div className={`p-2 rounded-lg ${isActiveLink(subItem.path) ? 'bg-blue-500/20 text-blue-400' : 'bg-neutral-900 text-neutral-500 group-hover/item:text-blue-400 group-hover/item:bg-blue-500/10'} transition-colors`}>
                                                    <subItem.icon size={20} />
                                                </div>
                                                <div>
                                                    <div className={`text-sm font-bold mb-0.5 ${isActiveLink(subItem.path) ? 'text-white' : 'text-neutral-300 group-hover/item:text-white'}`}>
                                                        {subItem.name}
                                                    </div>
                                                    <div className="text-xs text-neutral-500 leading-snug group-hover/item:text-neutral-400">
                                                        {subItem.desc}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Direct Links */}
                        {directLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors ${isActiveLink(link.path) ? 'text-white' : 'text-neutral-400 hover:text-white'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                        <Link to="/contact">
                            <Button
                                variant="primary"
                                theme="dark"
                                className="h-9 px-4 text-xs shadow-none"
                            >
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {
                isOpen && (
                    <div className="md:hidden bg-neutral-950 border-b border-neutral-800 absolute w-full shadow-xl">
                        <div className="px-6 py-4 space-y-2">
                            {Object.keys(navigationItems).map((item) => (
                                <div key={item}>
                                    <button
                                        onClick={() => handleMobileDropdownToggle(item)}
                                        className="flex items-center justify-between w-full text-sm font-medium text-neutral-400 hover:text-white py-2"
                                    >
                                        {item}
                                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === item ? 'rotate-180' : ''}`} />
                                    </button>

                                    {mobileDropdown === item && (
                                        <div className="pl-4 space-y-2 pb-2">
                                            {navigationItems[item].map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    to={subItem.path}
                                                    className={`flex items-center gap-3 py-2 ${isActiveLink(subItem.path) ? 'text-white' : 'text-neutral-400'
                                                        }`}
                                                    onClick={() => {
                                                        setIsOpen(false);
                                                        setMobileDropdown(null);
                                                    }}
                                                >
                                                    <subItem.icon size={16} />
                                                    <span className="text-sm font-medium">{subItem.name}</span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}

                            {directLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block text-sm font-medium py-2 transition-colors ${isActiveLink(link.path) ? 'text-white' : 'text-neutral-400 hover:text-white'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Link
                                to="/contact"
                                className="block pt-2"
                                onClick={() => setIsOpen(false)}
                            >
                                <Button
                                    variant="primary"
                                    theme="dark"
                                    className="h-9 px-4 text-xs shadow-none w-full"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
