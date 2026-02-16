import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Handshake, FileCheck, ArrowRight } from 'lucide-react';

const Partnership = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        category="Collaboration"
        title="Partnership Opportunities"
        subtitle="We integrate our technology into your value chain through flexible, scalable partnership models designed for mutual growth."
      />

      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="Collaborative Engagement Models" theme="light" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* JV Model */}
            <div className="bg-neutral-50 p-10 border border-neutral-200 shadow-sm hover:border-neutral-300 transition-colors">
              <div className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center mb-8 rounded-sm">
                <Handshake className="w-7 h-7 text-neutral-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">JV – SPV Model</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                We partner with select clients through Joint Ventures structured via Special Purpose Vehicles (SPVs) to co-develop, manufacture, and commercialise graphene-enabled products. This model enables shared risk, shared IP value creation, and long-term strategic alignment.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Combine Deep-Tech Expertise with Mfg Scale
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Shared IP Value Creation
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Strategic Market Alignment
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="primary" theme="light" className="w-full justify-center">
                  Discuss JV Opportunity
                </Button>
              </Link>
            </div>

            {/* Licensing Model */}
            <div className="bg-neutral-50 p-10 border border-neutral-200 shadow-sm hover:border-neutral-300 transition-colors">
              <div className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center mb-8 rounded-sm">
                <FileCheck className="w-7 h-7 text-neutral-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">Technology Licensing</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                For faster capital-efficient deployment, Monoatom Labs offers technology licensing of its proprietary formulations, processes, and application-specific IP. This allows partners to rapidly integrate graphene innovations into existing production lines.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Rapid Production Integration
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Royalty & Technical Support Framework
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Application-Specific IP Access
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="secondary" theme="light" className="w-full justify-center">
                  Explore Licensing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-medium text-neutral-900 mb-6">Why Partner With Us?</h2>
          <p className="text-lg text-neutral-600 mb-12">
            Gain access to the world's most potential-rich material through a team that understands how to industrialize it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Proven Tech</h4>
              <p className="text-sm text-neutral-500">Validated products, not just lab concepts.</p>
            </div>
            <div className="bg-white p-6 border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Market Ready</h4>
              <p className="text-sm text-neutral-500">Solutions for large, existing markets.</p>
            </div>
            <div className="bg-white p-6 border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Scalable</h4>
              <p className="text-sm text-neutral-500">Processes designed for mass manufacturing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;
