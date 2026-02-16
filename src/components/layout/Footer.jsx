import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';
import Button from '../ui/Button';
import MonochromeGrid from '../hero/MonochromeGrid';
import Logo from '../Logo';

const Footer = () => {
    const location = useLocation();

    const handleLogoClick = (e) => {
        // If already on home page, scroll to top
        if (location.pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    return (
        <footer id="contact" className="relative bg-neutral-950 text-white pt-24 pb-12 px-6 border-t border-neutral-900 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0 opacity-50 transform translate-y-20">
                <MonochromeGrid />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <Logo size={20} showText={false} theme="dark" className="mb-8" />
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
                            Ready to enable Industry 4.0?
                        </h2>
                        <p className="text-xl text-neutral-500 max-w-md mb-10">
                            Partner with Monoatom Labs to integrate graphene solutions into your industrial workflow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact">
                                <Button variant="primary" theme="dark">Get in Touch</Button>
                            </Link>
                            <Link to="/contact">
                                <Button variant="secondary" theme="dark" className="border-neutral-800">Download Company Profile</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 text-sm lg:pl-12 border-l border-neutral-900">
                        <div>
                            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-neutral-500">Headquarters</h4>
                            <div className="flex items-start space-x-4 mb-2 text-neutral-300">
                                <MapPin className="w-5 h-5 mt-1 shrink-0 text-neutral-500" />
                                <span className="text-base">3rd Floor, iHub Gujarat,<br />Ahmedabad - 380015</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold mb-6 uppercase tracking-wider text-xs text-neutral-500">Connect</h4>
                            <div className="space-y-4 text-neutral-300">
                                <a href="mailto:info@monoatomlabs.com" className="flex items-center space-x-4 hover:text-white transition-colors">
                                    <Mail className="w-5 h-5 text-neutral-500" />
                                    <span className="text-base">info@monoatomlabs.com</span>
                                </a>
                                <div className="flex items-center space-x-4">
                                    <Phone className="w-5 h-5 text-neutral-500" />
                                    <span className="text-base">+91 989 819 9809</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 mb-16">
                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500">Company</h4>
                        <ul className="space-y-2.5 text-sm text-neutral-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/about/company" className="hover:text-white transition-colors">Our Company</Link></li>
                            <li><Link to="/about/facilities" className="hover:text-white transition-colors">Facilities</Link></li>
                            <li><Link to="/about/founders" className="hover:text-white transition-colors">Founders</Link></li>
                        </ul>
                    </div>

                    {/* Products Links */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500">Products</h4>
                        <ul className="space-y-2.5 text-sm text-neutral-400">
                            <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
                            <li><Link to="/products/graphacrete" className="hover:text-white transition-colors">Graphacrete</Link></li>
                            <li><Link to="/products/graffisol" className="hover:text-white transition-colors">Graffisol</Link></li>
                            <li><Link to="/products/ceraphene" className="hover:text-white transition-colors">Ceraphene</Link></li>
                            <li><Link to="/products/hd-g-pe" className="hover:text-white transition-colors">HD-G-PE</Link></li>
                        </ul>
                    </div>

                    {/* Innovation Pipeline Links */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500">Innovation Pipeline</h4>
                        <ul className="space-y-2.5 text-sm text-neutral-400">
                            <li><Link to="/products/pipeline" className="hover:text-white transition-colors">Overview</Link></li>
                            <li><Link to="/products/pipeline/rustene" className="hover:text-white transition-colors">Rustene</Link></li>
                            <li><Link to="/products/pipeline/graphyre" className="hover:text-white transition-colors">Graphyre</Link></li>
                            <li><Link to="/products/pipeline/graphosite" className="hover:text-white transition-colors">Graphosite</Link></li>
                            <li><Link to="/products/pipeline/thermaphene" className="hover:text-white transition-colors">Thermaphene</Link></li>
                            <li><Link to="/products/pipeline/armophene" className="hover:text-white transition-colors">Armophene</Link></li>
                        </ul>
                    </div>

                    {/* Contact Links */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500">Connect</h4>
                        <ul className="space-y-2.5 text-sm text-neutral-400">
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section with Logo */}
                <div className="pt-8 border-t border-neutral-900">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <Link to="/" onClick={handleLogoClick} className="hover:opacity-80 transition-opacity">
                            <Logo size={20} theme="dark" />
                        </Link>
                        <div className="text-xs text-neutral-600">
                            <p>&copy; {new Date().getFullYear()} Monoatom Labs. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
