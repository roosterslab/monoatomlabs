import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import PageHeader from '../../../components/ui/PageHeader';
import Button from '../../../components/ui/Button';
import BackNavigation from '../../../components/ui/BackNavigation';

const Rustene = () => {
  const features = [
    'Ultra-thin graphene barrier technology',
    'Advanced corrosion prevention',
    'Extended metal lifespan',
    'Superior protection against rust'
  ];

  const applications = [
    'Industrial metal structures',
    'Marine equipment',
    'Automotive components',
    'Infrastructure protection'
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        category="R&D Pipeline"
        title="Rustene"
        subtitle="Graphene-based anti-rusting paint that forms an ultra-thin barrier preventing corrosion and extending metal lifespan."
      />

      <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

      <div className="bg-white border-t border-neutral-200">
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Content Column */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-display font-medium text-neutral-900 mb-8">Core Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-6 mb-16">
                  {features.map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-colors group">
                      <div className="w-10 h-10 bg-white rounded-lg border border-neutral-200 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                        <Shield className="w-5 h-5" />
                      </div>
                      <p className="font-medium text-neutral-900">{item}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-display font-medium text-neutral-900 mb-8">Target Applications</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {applications.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 p-4 rounded-xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sticky Sidebar */}
              <div className="lg:col-start-3">
                <div className="sticky top-32 p-8 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-sm">
                  <div className="mb-6">
                    <span className="inline-flex px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                      Development Phase
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-4">Interested in Rustene?</h3>
                  <p className="text-neutral-600 mb-8 text-sm leading-relaxed">
                    We are currently validating this technology for industrial applications. Contact our R&D team for partnership opportunities.
                  </p>
                  <Link to="/contact">
                    <Button variant="primary" className="w-full justify-center">Inquire Now</Button>
                  </Link>
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <Link to="/products/pipeline" className="flex items-center justify-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                      View Full Pipeline <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rustene;
