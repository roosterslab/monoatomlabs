import React from 'react';
import { Shield, Award, CheckCircle, FlaskConical, Users, TrendingUp, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const TrustValidation = () => {
    const trustPillars = [
        {
            icon: Shield,
            title: "NABL Certified",
            description: "All performance claims independently verified by National Accreditation Board for Testing",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: FlaskConical,
            title: "Scientific Validation",
            description: "Partnerships with IISc, IIT, NCL ensure rigorous research standards",
            color: "from-purple-500 to-pink-600"
        },
        {
            icon: TrendingUp,
            title: "Field-Tested Results",
            description: "5 field-scale pilot trials demonstrating real-world performance",
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: Award,
            title: "Award-Winning Team",
            description: "Led by 6× President of India Awardee, MIT TR35, NASA recognized founders",
            color: "from-yellow-500 to-orange-600"
        }
    ];

    const certifications = [
        {
            name: "NABL Accreditation",
            description: "National Accreditation Board for Testing and Calibration Laboratories",
            status: "Certified",
            icon: Shield
        },
        {
            name: "Field Validation",
            description: "Real-world testing across multiple industrial applications",
            status: "5 Pilot Trials",
            icon: CheckCircle
        },
        {
            name: "Scientific Partnerships",
            description: "Collaboration with premier research institutes",
            status: "IISc, IIT, NCL",
            icon: Users
        },
        {
            name: "Performance Verification",
            description: "Independent third-party testing and validation",
            status: "Verified",
            icon: FileCheck
        }
    ];

    return (
        <section className="py-24 px-6 bg-black/10 border-b border-neutral-800">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-bold text-blue-300 uppercase tracking-wide">Trust & Validation</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
                        Every Claim is Verified.<br />Every Result is Certified.
                    </h2>
                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-light">
                        We don't just make promises—we provide NABL-certified proof, scientific validation, and real-world field test results
                    </p>
                </div>

                {/* Trust Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {trustPillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 border-2 border-white/10 rounded-2xl p-6 text-center hover:border-white/30 hover:shadow-xl transition-all group backdrop-blur-sm"
                            >
                                <div className={`inline-flex p-4 bg-gradient-to-br ${pillar.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                                <p className="text-sm text-neutral-300 leading-relaxed font-light">{pillar.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Certifications Grid */}
                <div className="bg-white/5 border-2 border-white/20 rounded-2xl p-10 mb-16 backdrop-blur-sm">
                    <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                        Certifications & Validations
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {certifications.map((cert, index) => {
                            const Icon = cert.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 bg-black/20 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                                >
                                    <div className="p-3 bg-white/10 rounded-lg shrink-0 border border-white/20">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-bold text-white">{cert.name}</h4>
                                            <span className="text-xs font-bold text-green-400 bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30">
                                                {cert.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-neutral-300 font-light">{cert.description}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Scientific Partnership Badges */}
                <div className="bg-white/5 border-2 border-white/20 rounded-2xl p-10 backdrop-blur-sm">
                    <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">
                        Backed by India's Premier Research Institutes
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {[
                            {
                                name: "Indian Institute of Science",
                                acronym: "IISc",
                                description: "Advanced materials research collaboration"
                            },
                            {
                                name: "Indian Institute of Technology",
                                acronym: "IIT",
                                description: "Technology development partnerships"
                            },
                            {
                                name: "National Chemical Laboratory",
                                acronym: "NCL",
                                description: "Chemical engineering validation"
                            }
                        ].map((institute, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-black/20 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="w-20 h-20 bg-white/10 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 border border-white/20">
                                    {institute.acronym}
                                </div>
                                <h4 className="font-bold text-white mb-2">{institute.name}</h4>
                                <p className="text-sm text-neutral-300 font-light">{institute.description}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-neutral-300 font-light">
                        Our team includes scientists from these institutes working alongside industrial manufacturing experts to ensure every innovation meets the highest standards of scientific rigor and real-world applicability.
                    </p>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                        Want to See the Certified Data?
                    </h3>
                    <p className="text-neutral-300 mb-8 font-light">
                        Download complete technical specifications, NABL certificates, and field test reports
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button variant="primary" theme="dark">
                                Download Certification Documents
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="secondary" theme="dark">
                                Request Field Test Data
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustValidation;
