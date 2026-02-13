import React from 'react';
import { Shield, Award, CheckCircle2, Microscope, FileCheck, Activity, Binary } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { DarkHexBackground } from '../backgrounds';

const TrustCard = ({ icon: Icon, title, description, items, color, badges }) => (
    <div className="group relative bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-900/60 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden backdrop-blur-sm">
        {/* Holographic Scan Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

        <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400 border border-${color}-500/20 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-500`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                {badges && (
                    <div className="flex -space-x-2">
                        {badges.map((badge, i) => (
                            <div key={i} className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-[10px] text-neutral-400 font-mono font-bold">
                                {badge}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {title}
            </h3>

            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                {description}
            </p>

            <ul className="space-y-3 border-t border-white/5 pt-4">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                        <CheckCircle2 className={`w-4 h-4 text-${color}-500/80`} />
                        <span className="text-sm text-neutral-300 font-medium">{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

const EquipmentStatus = ({ name, id, status }) => (
    <div className="flex items-center justify-between p-4 bg-black/40 border border-white/5 rounded-lg hover:border-cyan-500/30 transition-colors group">
        <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`}></div>
            <div>
                <div className="text-sm font-mono font-bold text-neutral-300 group-hover:text-white transition-colors">{name}</div>
                <div className="text-[10px] text-neutral-600 font-mono tracking-wider">{id}</div>
            </div>
        </div>
        <div className="px-2 py-1 bg-white/5 rounded text-[10px] text-neutral-500 font-mono group-hover:text-cyan-400 transition-colors">
            {status}
        </div>
    </div>
);

const CertificationsSection = () => {
    const trustPillars = [
        {
            icon: Shield,
            title: "Accredited Excellence",
            description: "Certified by the National Accreditation Board for Testing (NABL) & ISO standards.",
            color: "cyan",
            items: ["ISO/IEC 17025:2017", "ISO 9001:2015", "Traceable Validation"],
            badges: ["ISO", "BIS", "CE"]
        },
        {
            icon: Microscope,
            title: "Atomic Verification",
            description: "Every batch undergoes multi-spectrum analysis from raw material to dispatch.",
            color: "purple",
            items: ["SEM/TEM Imaging", "Raman Spectroscopy", "Molecular Analysis"],
            badges: ["99%", "QC"]
        },
        {
            icon: FileCheck,
            title: "Transparent Reporting",
            description: "Digital Certificates of Analysis (CoA) accessible for every shipment.",
            color: "emerald",
            items: ["Cloud-Hosted Reports", "QR Code Traceability", "Third-Party Audits"],
            badges: ["CoA", "PDF"]
        }
    ];

    const equipmentList = [
        { name: "Field Emission SEM", id: "Lab-A12", status: "Active" },
        { name: "Raman Spectrometer", id: "Lab-B04", status: "Active" },
        { name: "Universal Testing", id: "Mech-X9", status: "Calibrated" },
        { name: "Thermal Analyzer", id: "Therm-D2", status: "Active" },
        { name: "Particle Size Analyzer", id: "Nano-S1", status: "Active" },
        { name: "Optical Profilometer", id: "Surf-M3", status: "Maintenance" }
    ];

    return (
        <DarkHexBackground className="py-24 px-6 border-b border-neutral-800">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    number="07"
                    title="Certified Trust"
                    subtitle="Rigorous testing, certified quality, and transparent validation at every step."
                    theme="dark"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 mb-12">
                    {trustPillars.map((pillar, index) => (
                        <TrustCard key={index} {...pillar} />
                    ))}
                </div>

                {/* Validation Console */}
                <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/50 backdrop-blur-md">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="absolute top-0 right-0 p-4 flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
                    </div>

                    <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-flex items-center space-x-2 mb-6">
                                <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
                                <span className="text-sm font-mono font-bold text-emerald-400 uppercase tracking-widest">Live Lab Status</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold text-white mb-4">
                                State-of-the-Art <br />
                                <span className="text-neutral-500">Characterization Suite</span>
                            </h3>
                            <p className="text-neutral-400 leading-relaxed mb-8">
                                Our in-house characterization facility ensures that every nanometer of material meets the strictest global standards before it leaves our facility.
                            </p>

                            <button className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all">
                                <Binary className="w-4 h-4 text-neutral-400 group-hover:text-cyan-400" />
                                <span className="font-mono text-sm">Download Lab Spec Sheet</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {equipmentList.map((eq, i) => (
                                <EquipmentStatus key={i} {...eq} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </DarkHexBackground>
    );
};

export default CertificationsSection;
