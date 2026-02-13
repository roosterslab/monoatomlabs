import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, Shield, Clock, TrendingUp, HelpCircle, AlertCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const FAQItem = ({ question, answer, icon: Icon, isOpen, onClick }) => (
    <div className={`group border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-white shadow-xl ring-1 ring-neutral-200' : 'bg-white hover:border-neutral-300'}`}>
        <button
            onClick={onClick}
            className="w-full flex items-center gap-4 p-6 text-left"
        >
            <div className={`flex-shrink-0 p-2 rounded-lg ${isOpen ? 'bg-brand-50 text-brand-600' : 'bg-neutral-100 text-neutral-500'} transition-colors`}>
                <Icon className="w-5 h-5" />
            </div>

            <div className="flex-grow">
                <h3 className={`text-lg font-display font-medium transition-colors ${isOpen ? 'text-neutral-900' : 'text-neutral-700 group-hover:text-black'}`}>
                    {question}
                </h3>
            </div>

            <ChevronDown
                className={`flex-shrink-0 w-5 h-5 text-neutral-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-500' : ''
                    }`}
            />
        </button>

        <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
        >
            <div className="px-6 pb-6 pl-[76px] text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
                {answer}
            </div>
        </div>
    </div>
);

const ObjectionCard = ({ title, response, color }) => (
    <div className={`relative overflow-hidden bg-white border border-neutral-200 p-6 rounded-2xl hover:border-${color}-200 hover:shadow-lg transition-all duration-300 group`}>
        <div className={`absolute top-0 right-0 w-32 h-32 bg-${color}-50 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-${color}-100 transition-colors`}></div>

        <h4 className="font-display font-bold text-lg mb-4 text-neutral-900 flex items-center gap-2">
            <AlertCircle className={`w-5 h-5 text-${color}-500`} />
            {title}
        </h4>

        <div className={`relative pl-4 border-l-2 border-${color}-200 group-hover:border-${color}-400 transition-colors`}>
            <p className="text-neutral-600 text-sm leading-relaxed">
                <span className="text-neutral-900 font-bold block mb-1">Reality:</span>
                {response}
            </p>
        </div>
    </div>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "How long does it take to see ROI from your products?",
            answer: "Most customers see positive ROI within 18 months on average. Graffisol (solar coating) typically pays back in 18 months, while Graphacrete shows immediate cost savings through cement reduction. We provide detailed ROI calculators and pilot programs to verify results.",
            icon: TrendingUp
        },
        {
            question: "Are your products certified and tested?",
            answer: "Yes, all our products undergo rigorous NABL-certified testing. We maintain two state-of-the-art R&D and testing facilities with ISO-standard equipment. Our products are validated through both lab testing and real-world field trials.",
            icon: Shield
        },
        {
            question: "What is the minimum order quantity?",
            answer: "We offer flexible order quantities to suit different project sizes. For pilot programs, we can start with small batches (kg-scale). For full-scale deployment, we have ton-scale manufacturing capabilities.",
            icon: Clock
        },
        {
            question: "Do you provide on-site technical support?",
            answer: "Absolutely! We provide comprehensive technical support including on-site training, application guidelines, troubleshooting assistance, and ongoing consultation to ensure optimal performance.",
            icon: CheckCircle2
        }
    ];

    const objections = [
        {
            title: "\"Graphene is too expensive\"",
            response: "Our ultra-low dosage (0.05%) makes it highly cost-effective per unit, often reducing total material costs by displacing expensive additives.",
            color: "rose"
        },
        {
            title: "\"It's not proven at scale\"",
            response: "We operate a ton-scale facility and have deployed successfully in major infrastructure projects. We are not a lab experiment; we are an industrial supplier.",
            color: "amber"
        },
        {
            title: "\"Integration is complex\"",
            response: "Our products are designed as drop-in additives. No major machinery changes are required. We provide the dosing protocols.",
            color: "cyan"
        },
        {
            title: "\"ROI is uncertain\"",
            response: "We offer performance warranties and pilot programs to validate ROI on your specific site before you commit to a full contract.",
            color: "purple"
        }
    ];

    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Header & Objections */}
                    <div className="lg:col-span-5 space-y-8">
                        <SectionHeading
                            number="11"
                            title="Knowledge Base"
                            subtitle="Expert answers to technical and commercial questions."
                            theme="light"
                        />

                        <div className="bg-neutral-50 border border-neutral-200 rounded-3xl p-8">
                            <h3 className="text-xl font-display font-medium text-neutral-900 mb-6 flex items-center gap-2">
                                <HelpCircle className="w-5 h-5 text-neutral-500" />
                                Common Concerns
                            </h3>
                            <div className="space-y-4">
                                {objections.map((obj, i) => (
                                    <ObjectionCard key={i} {...obj} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: FAQ Accordion */}
                    <div className="lg:col-span-7 space-y-4 pt-8 lg:pt-0">
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                question={faq.question}
                                answer={faq.answer}
                                icon={faq.icon}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
