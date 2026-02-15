import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Droplet, Wind, Layers, Battery, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const PilotTechnologies = () => {
    const pilotProjects = [
        {
            icon: Wind,
            name: 'Hydrogen Separation Membranes',
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
            icon: Droplet,
            name: 'Atmospheric Water Harvesting',
            description: 'Converting air into potable water efficiently',
            status: 'Field Trials',
            color: 'teal',
            link: '/products/pipeline/atmospheric-harvesting'
        },
        {
            icon: Layers,
            name: 'Graphene-Reinforced Glass Fibres',
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
                gradient: 'from-blue-600/20 to-blue-800/20',
                border: 'border-blue-500',
                hoverBorder: 'hover:border-blue-600',
                icon: 'text-blue-400',
                badge: 'bg-blue-500/20 border-blue-500/30 text-blue-200'
            },
            cyan: {
                gradient: 'from-cyan-600/20 to-cyan-800/20',
                border: 'border-cyan-500',
                hoverBorder: 'hover:border-cyan-600',
                icon: 'text-cyan-400',
                badge: 'bg-cyan-500/20 border-cyan-500/30 text-cyan-200'
            },
            teal: {
                gradient: 'from-teal-600/20 to-teal-800/20',
                border: 'border-teal-500',
                hoverBorder: 'hover:border-teal-600',
                icon: 'text-teal-400',
                badge: 'bg-teal-500/20 border-teal-500/30 text-teal-200'
            },
            purple: {
                gradient: 'from-purple-600/20 to-purple-800/20',
                border: 'border-purple-500',
                hoverBorder: 'hover:border-purple-600',
                icon: 'text-purple-400',
                badge: 'bg-purple-500/20 border-purple-500/30 text-purple-200'
            },
            amber: {
                gradient: 'from-amber-600/20 to-amber-800/20',
                border: 'border-amber-500',
                hoverBorder: 'hover:border-amber-600',
                icon: 'text-amber-400',
                badge: 'bg-amber-500/20 border-amber-500/30 text-amber-200'
            }
        };
        return colors[color];
    };

    return (
        <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-24 px-6 border-b border-neutral-800">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 text-white font-semibold mb-6">
                        <FlaskConical className="w-5 h-5" />
                        <span className="uppercase tracking-wide">Pilot-Scale Technologies</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 tracking-tight">
                        Field Trials Advancing to Market
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-light">
                        Five breakthrough technologies in real-world field testing, moving from pilot to commercial scale
                    </p>
                </div>

                {/* Pilot Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {pilotProjects.map((project, index) => {
                        const Icon = project.icon;
                        const colors = getColorClasses(project.color);

                        return (
                            <Link
                                key={index}
                                to={project.link}
                                className={`bg-gradient-to-br ${colors.gradient} backdrop-blur border-2 ${colors.border} ${colors.hoverBorder} rounded-2xl p-6 hover:scale-105 transition-all group`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <Icon className={`w-12 h-12 ${colors.icon}`} />
                                    <span className={`${colors.badge} px-3 py-1 rounded-full text-xs font-bold border uppercase tracking-wide`}>
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">{project.name}</h3>
                                <p className="text-neutral-300 leading-relaxed font-light">{project.description}</p>
                                <div className="mt-4 flex items-center text-sm text-neutral-400 group-hover:text-white transition-colors">
                                    <span>Learn more</span>
                                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </Link>
                        );
                    })}

                    {/* CTA Card */}
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border-2 border-white/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-all">
                        <h3 className="text-2xl font-bold mb-3">Want to Learn More?</h3>
                        <p className="text-neutral-300 mb-4 font-light">Explore our complete pilot technology portfolio</p>
                        <Link to="/contact">
                            <Button variant="primary" theme="dark" icon={ArrowRight}>
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 md:p-10 text-center">
                    <h3 className="text-3xl font-display font-medium mb-4">From Lab Prototype to Industrial Scale</h3>
                    <p className="text-lg text-neutral-300 max-w-4xl mx-auto font-light">
                        Each pilot technology undergoes rigorous field testing and validation before commercialization.
                        We ensure every innovation can scale from prototype to mass manufacturing with proven performance.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PilotTechnologies;
