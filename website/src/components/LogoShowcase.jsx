import React from 'react';
import Logo from './Logo';

/**
 * Logo Showcase Component
 * Demonstrates all variations of the Logo component
 * Use this as a reference or for testing/design review
 */
const LogoShowcase = () => {
    return (
        <div className="min-h-screen bg-neutral-100 p-8">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                        Monoatom Labs Logo Showcase
                    </h1>
                    <p className="text-lg text-neutral-600">
                        Official logo component with all variations
                    </p>
                </div>

                {/* Light Theme - Different Sizes */}
                <section className="bg-white rounded-2xl p-12 shadow-sm">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-8">Light Theme (on white background)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Small (80px)</p>
                            <div className="flex justify-center">
                                <Logo size="small" theme="light" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Medium (120px)</p>
                            <div className="flex justify-center">
                                <Logo size="medium" theme="light" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Large (160px)</p>
                            <div className="flex justify-center">
                                <Logo size="large" theme="light" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">X-Large (200px)</p>
                            <div className="flex justify-center">
                                <Logo size="xlarge" theme="light" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Dark Theme - Different Sizes */}
                <section className="bg-neutral-900 rounded-2xl p-12 shadow-sm">
                    <h2 className="text-2xl font-bold text-white mb-8">Dark Theme (on dark background)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="text-center">
                            <p className="text-sm text-neutral-400 mb-4">Small (80px)</p>
                            <div className="flex justify-center">
                                <Logo size="small" theme="dark" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-400 mb-4">Medium (120px)</p>
                            <div className="flex justify-center">
                                <Logo size="medium" theme="dark" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-400 mb-4">Large (160px)</p>
                            <div className="flex justify-center">
                                <Logo size="large" theme="dark" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-400 mb-4">X-Large (200px)</p>
                            <div className="flex justify-center">
                                <Logo size="xlarge" theme="dark" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Component Parts */}
                <section className="bg-white rounded-2xl p-12 shadow-sm">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-8">Component Parts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Full Logo</p>
                            <div className="flex justify-center">
                                <Logo size="large" showIcon={true} showText={true} />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Icon Only</p>
                            <div className="flex justify-center">
                                <Logo size="large" showIcon={true} showText={false} />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Text Only</p>
                            <div className="flex justify-center">
                                <Logo size="large" showIcon={false} showText={true} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Custom Sizes */}
                <section className="bg-white rounded-2xl p-12 shadow-sm">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-8">Custom Sizes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Custom 60px</p>
                            <div className="flex justify-center">
                                <Logo size={60} theme="light" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Custom 100px</p>
                            <div className="flex justify-center">
                                <Logo size={100} theme="light" />
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-neutral-500 mb-4">Custom 250px</p>
                            <div className="flex justify-center">
                                <Logo size={250} theme="light" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="bg-neutral-50 rounded-2xl p-12">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-8">Common Use Cases</h2>
                    <div className="space-y-8">

                        {/* Navbar */}
                        <div className="bg-neutral-900 p-6 rounded-xl">
                            <p className="text-sm text-neutral-400 mb-4">Navbar Logo</p>
                            <Logo size="small" theme="dark" className="hover:opacity-80 transition-opacity cursor-pointer" />
                        </div>

                        {/* Footer */}
                        <div className="bg-neutral-800 p-6 rounded-xl">
                            <p className="text-sm text-neutral-400 mb-4">Footer Logo</p>
                            <Logo size="medium" theme="dark" />
                        </div>

                        {/* Hero Section */}
                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-xl text-center">
                            <p className="text-sm text-neutral-600 mb-6">Hero Section</p>
                            <div className="flex justify-center">
                                <Logo size="xlarge" theme="light" />
                            </div>
                        </div>

                        {/* Loading State */}
                        <div className="bg-white border border-neutral-200 p-12 rounded-xl text-center">
                            <p className="text-sm text-neutral-600 mb-6">Loading State</p>
                            <div className="flex justify-center">
                                <Logo size={150} theme="light" className="animate-pulse" />
                            </div>
                        </div>

                        {/* Icon Badge */}
                        <div className="bg-white border border-neutral-200 p-6 rounded-xl inline-flex items-center gap-4">
                            <Logo size={40} showText={false} theme="light" />
                            <div>
                                <p className="text-sm font-bold text-neutral-900">Icon Badge</p>
                                <p className="text-xs text-neutral-500">Small icon for compact spaces</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accessibility Info */}
                <section className="bg-blue-50 border border-blue-200 rounded-2xl p-8">
                    <h3 className="text-lg font-bold text-blue-900 mb-4">✅ Accessibility Features</h3>
                    <ul className="space-y-2 text-sm text-blue-800">
                        <li>• ARIA labels for screen readers</li>
                        <li>• Semantic HTML structure</li>
                        <li>• Proper role attributes</li>
                        <li>• High contrast ratios (WCAG AA compliant)</li>
                    </ul>
                </section>

                {/* Code Examples */}
                <section className="bg-neutral-800 text-white rounded-2xl p-8 font-mono text-sm">
                    <h3 className="text-lg font-bold mb-4">Code Examples</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="text-neutral-400 mb-2">// Default usage</p>
                            <code className="text-green-400">&lt;Logo /&gt;</code>
                        </div>
                        <div>
                            <p className="text-neutral-400 mb-2">// Custom size and theme</p>
                            <code className="text-green-400">&lt;Logo size="large" theme="dark" /&gt;</code>
                        </div>
                        <div>
                            <p className="text-neutral-400 mb-2">// Icon only</p>
                            <code className="text-green-400">&lt;Logo size={60} showText=&#123;false&#125; /&gt;</code>
                        </div>
                        <div>
                            <p className="text-neutral-400 mb-2">// With custom styling</p>
                            <code className="text-green-400">&lt;Logo className="hover:opacity-80 transition-opacity" /&gt;</code>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default LogoShowcase;
