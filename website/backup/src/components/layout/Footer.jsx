import React from 'react';
import { Link } from 'react-router-dom';
import { Hexagon, MapPin, Mail, Phone } from 'lucide-react';
import Button from '../ui/Button';
import MonochromeGrid from '../hero/MonochromeGrid';

const Footer = () => {
    return (
        <footer id="contact" className="relative bg-neutral-950 text-white pt-24 pb-12 px-6 border-t border-neutral-900 overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0 opacity-50 transform translate-y-20">
                <MonochromeGrid />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <Hexagon className="w-12 h-12 text-white mb-8" strokeWidth={1} />
                        <h2 className="text-5xl md:text-6xl font-medium tracking-tight mb-8">
                            Ready to upgrade your materials?
                        </h2>
                        <p className="text-xl text-neutral-500 max-w-md mb-10">
                            Partner with Monoatom Labs to integrate graphene solutions into your industrial workflow.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact">
                                <Button variant="primary" theme="dark">Get in Touch</Button>
                            </Link>
                            <Button variant="secondary" theme="dark" className="border-neutral-800">Download Company Profile</Button>
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
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500">Company</h4>
                        <ul className="space-y-2.5 text-sm text-neutral-400">
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Founders & Team</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">Facilities</Link></li>
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
                            <li><Link to="/products/pipeline" className="hover:text-white transition-colors">Pipeline</Link></li>
                        </ul>
                    </div>

                    {/* Technology Links */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500">Technology</h4>
                        <ul className="space-y-2.5 text-sm text-neutral-400">
                            <li><Link to="/technology/platform" className="hover:text-white transition-colors">Our Platform</Link></li>
                            <li><Link to="/technology/pilot-projects" className="hover:text-white transition-colors">Pilot Projects</Link></li>
                            <li><Link to="/technology/capabilities" className="hover:text-white transition-colors">Capabilities</Link></li>
                        </ul>
                    </div>

                    {/* Industries Links */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500">Industries</h4>
                        <ul className="space-y-2.5 text-sm text-neutral-400">
                            <li><Link to="/industries" className="hover:text-white transition-colors">Overview</Link></li>
                            <li><Link to="/industries/construction" className="hover:text-white transition-colors">Construction</Link></li>
                            <li><Link to="/industries/solar-energy" className="hover:text-white transition-colors">Solar Energy</Link></li>
                            <li><Link to="/industries/automotive" className="hover:text-white transition-colors">Automotive</Link></li>
                            <li><Link to="/industries/advanced-materials" className="hover:text-white transition-colors">Advanced Materials</Link></li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-bold mb-4 uppercase tracking-wider text-xs text-neutral-500">Resources</h4>
                        <ul className="space-y-2.5 text-sm text-neutral-400">
                            <li><Link to="/partnership" className="hover:text-white transition-colors">Partnership</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
                    <p>&copy; {new Date().getFullYear()} Monoatom Labs. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
