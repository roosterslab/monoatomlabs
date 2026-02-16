import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Droplet, Wind, Layers, Battery, ArrowRight, Activity, Beaker } from 'lucide-react';
import Button from '../ui/Button';

const PilotTechnologies = () => {
    const pilotProjects = [
        {
            icon: Activity,
            name: 'Hydrogen Separation',
            description: 'High-selectivity graphene membranes for efficient hydrogen production',
            status: 'Field Trials',
            color: 'blue',
            link: '/products/pipeline/hydrogen-membranes'
        },
        {
            icon: Droplet,
            name: 'Seawater Desalination',
            description: 'Ultra-thin membranes for low-energy water purification',
            status: 'Field Trials',
            color: 'cyan',
            link: '/products/pipeline/desalination-membranes'
        },
        {
            icon: Wind,
            name: 'Atmospheric Harvesting',
            description: 'Converting air into potable water efficiently',
            status: 'Field Trials',
            color: 'teal',
            link: '/products/pipeline/atmospheric-harvesting'
        },
        {
            icon: Layers,
            name: 'Graphene Glass Fibres',
            description: 'Enhanced composites for structural applications',
            status: 'Field Trials',
            color: 'purple',
            link: '/products/pipeline/graphene-glass-fibres'
        },
        {
            icon: Battery,
            name: 'Graphene Battery Storage',
            description: 'Higher power density with extended lifecycle',
            status: 'Field Trials',
            color: 'amber',
            link: '/products/pipeline/battery-storage'
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-100',
                text: 'text-blue-600',
                icon: 'text-blue-600',
                hoverBorder: 'group-hover:border-blue-300',
                badge: 'bg-blue-100 text-blue-700 border-blue-200'
            },
            cyan: {
                bg: 'bg-cyan-50',
                border: 'border-cyan-100',
                text: 'text-cyan-600',
                icon: 'text-cyan-600',
                hoverBorder: 'group-hover:border-cyan-300',
                badge: 'bg-cyan-100 text-cyan-700 border-cyan-200'
            },
            teal: {
                bg: 'bg-teal-50',
                border: 'border-teal-100',
                text: 'text-teal-600',
                icon: 'text-teal-600',
                hoverBorder: 'group-hover:border-teal-300',
                badge: 'bg-teal-100 text-teal-700 border-teal-200'
            },
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-100',
                text: 'text-purple-600',
                icon: 'text-purple-600',
                hoverBorder: 'group-hover:border-purple-300',
                badge: 'bg-purple-100 text-purple-700 border-purple-200'
            },
            amber: {
                bg: 'bg-amber-50',
                border: 'border-amber-100',
                text: 'text-amber-600',
                icon: 'text-amber-600',
                hoverBorder: 'group-hover:border-amber-300',
                badge: 'bg-amber-100 text-amber-700 border-amber-200'
            }
        };
        return colors[color] || colors.blue;
    };

    return (
        <section className="bg-white text-neutral-900 py-24 px-6 border-b border-neutral-100">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                        <Beaker className="w-3.5 h-3.5" />
                        <span>Pilot-Scale Technologies</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-neutral-900">
                        Field Trials Advancing to Market
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-3xl mx-auto font-light leading-relaxed">
                        Five breakthrough technologies in real-world field testing, moving from pilot to commercial scale.
                    </p>
                </div>

                {/* Pilot Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {pilotProjects.map((project, index) => {
                        const Icon = project.icon;
                        const colors = getColorClasses(project.color);

                        return (
                            <Link
                                key={index}
                                to={project.link}
                                className={`bg-white border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${colors.hoverBorder} border-neutral-200`}
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`p-3 rounded-xl ${colors.bg} ${colors.border} border`}>
                                        <Icon className={`w-8 h-8 ${colors.icon}`} strokeWidth={1.5} />
                                    </div>
                                    <span className={`px-2.5 py-1 rounded text-[10px] font-bold border uppercase tracking-wider ${colors.badge}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-neutral-900 group-hover:text-blue-700 transition-colors">
                                    {project.name}
                                </h3>
                                <p className="text-neutral-500 leading-relaxed font-light text-sm mb-6 min-h-[40px]">
                                    {project.description}
                                </p>
                                <div className="flex items-center text-sm font-medium text-neutral-400 group-hover:text-blue-600 transition-colors">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}

                    {/* CTA Card */}
                    <div className="bg-neutral-50 border border-dashed border-neutral-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-blue-50/50 hover:border-blue-200 transition-all group">
                        <div className="w-12 h-12 bg-white rounded-full border border-neutral-200 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
                            <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-blue-500" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-neutral-900">Want to see more?</h3>
                        <p className="text-neutral-500 mb-6 font-light text-sm">Explore our complete pilot technology data and validation reports.</p>
                        <Link to="/contact">
                            <Button variant="secondary" className="text-sm">
                                Contact R&D Team
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Additional Info Strip */}
                <div className="bg-neutral-50 border border-neutral-100 rounded-2xl p-8 md:p-12 text-center">
                    <h3 className="text-2xl font-display font-medium mb-4 text-neutral-900">From Lab Prototype to Industrial Scale</h3>
                    <p className="text-lg text-neutral-500 max-w-4xl mx-auto font-light leading-relaxed">
                        Each pilot technology undergoes rigorous field testing and validation before commercialization.
                        We ensure every innovation can scale from prototype to mass manufacturing with proven performance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PilotTechnologies;
