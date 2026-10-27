import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const team = [
    { name: 'Susanth Paithanik', role: 'Co-Founder & CEO', image: '/images/team/susanth-paithanik.jpg' },
    { name: 'Aayush Bansal', role: 'Co-Founder & Strategic Investor', image: '/images/team/aayush-bansal.jpg' },
    { name: 'Raj Vijay Shah', role: 'Director & Strategic Advisor', image: '/images/team/raj-vijay-shah.jpg' },
];

const TeamTeaser = () => {
    return (
        <section id="team" className="py-24 px-6 bg-white text-neutral-900 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 border-b border-neutral-200 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                            03 — Team
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-4">Meet the Team</h2>
                        <p className="text-neutral-600 max-w-2xl text-lg font-light">
                            The people behind the science, the scale-up and the strategy.
                        </p>
                    </div>
                    <Link
                        to="/team"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-sm font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition-colors self-start md:self-auto"
                    >
                        View full leadership team
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <Link key={member.name} to="/team" className="group">
                            <img
                                src={member.image}
                                alt={member.name}
                                loading="lazy"
                                className="w-full aspect-[4/5] object-cover bg-neutral-100 border border-neutral-200 rounded-2xl mb-6 group-hover:border-neutral-400 transition-colors"
                            />
                            <h3 className="text-xl font-display font-medium text-neutral-900 mb-1">{member.name}</h3>
                            <p className="text-neutral-500 font-mono text-xs uppercase tracking-wider">{member.role}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamTeaser;
