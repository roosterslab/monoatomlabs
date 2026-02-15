import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
            <div className="max-w-5xl mx-auto">
                <div className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertCircle className="w-8 h-8 text-neutral-600" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">The Challenge</h2>
                    </div>
                    <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
                        Graphene has been called the "miracle material" for over two decades. Despite thousands of
                        research papers, 99% of innovations never transition from lab to manufacturing.
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900">Our Solution</h2>
                    </div>
                    <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-light">
                        We bridge this gap with real-world industrial deployment capabilities, ensuring every
                        product is designed for commercial-scale manufacturing from day one.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
