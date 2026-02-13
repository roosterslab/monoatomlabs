import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { Target, Eye, Globe, Zap, Droplets, Wind, Heart } from 'lucide-react';

const Company = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        category="Company"
        title="About Monoatom Labs"
        subtitle="We envision a world where breakthrough materials enable cleaner air, purer water, sustainable energy, and enhanced quality of life for everyone."
      />

      {/* Tagline */}
      <section className="py-12 px-6 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg font-medium tracking-wide">
            Advanced Nanomaterials for Better Quality of Life
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-neutral-50 border border-neutral-200">
              <span className="block text-sm text-neutral-500 uppercase tracking-wide mb-2">Founded</span>
              <span className="text-3xl font-display text-neutral-900">2025</span>
            </div>
            <div className="p-8 bg-neutral-50 border border-neutral-200">
              <span className="block text-sm text-neutral-500 uppercase tracking-wide mb-2">Headquarters</span>
              <span className="text-3xl font-display text-neutral-900">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-6 h-6 text-neutral-900" />
                <h2 className="text-2xl font-display font-medium text-neutral-900">Our Vision</h2>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed mb-12">
                Advanced Nanomaterials for Better Quality of Life. We see graphene and advanced nanomaterials as the foundation of a transformation that will touch every aspect of human life.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-neutral-900" />
                <h2 className="text-2xl font-display font-medium text-neutral-900">Our Mission</h2>
              </div>
              <p className="text-lg text-neutral-600 leading-relaxed">
                To create commercially viable graphene solutions for industrial applications. We develop, validate, and make commercial-scale manufacturing of graphene innovations to provide:
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                  <Wind className="w-5 h-5 text-neutral-500" />
                  <span className="text-neutral-900 font-medium">Clean Air</span>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                  <Droplets className="w-5 h-5 text-neutral-500" />
                  <span className="text-neutral-900 font-medium">Clean Water</span>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-neutral-500" />
                  <span className="text-neutral-900 font-medium">Clean Energy</span>
                </div>
                <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                  <Heart className="w-5 h-5 text-neutral-500" />
                  <span className="text-neutral-900 font-medium">Better Life</span>
                </div>
              </div>
            </div>

            <div className="bg-neutral-50 p-8 border border-neutral-200">
              <h3 className="text-xl font-display font-medium text-neutral-900 mb-6">Who We Are</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Our innovations are designed to deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into Industry 4.0.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="What Makes Us Different" theme="light" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm">
              <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">Deep Scientific Expertise</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our team combines materials science, chemical engineering, and nanotechnology expertise with research partners from prestigious institutions including IISc, IIT, and National Chemical Laboratory.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm">
              <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">Industrial Scale Capability</h3>
              <p className="text-neutral-600 leading-relaxed">
                We don't just innovate in the lab—we ensure every innovation can scale from prototype to mass manufacturing with pilot-scale facilities and process optimization.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm">
              <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">Real-World Validation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our products undergo rigorous field trials and real-world testing before commercialization through NABL-certified laboratory testing and independent third-party validation.
              </p>
            </div>
            <div className="p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm">
              <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">IP-Driven Innovation</h3>
              <p className="text-neutral-600 leading-relaxed">
                Proprietary technology and process IP protected through patents and trade secrets, including patented formulations and proprietary dispersion technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-medium text-neutral-900 mb-6">Connect With Us</h2>
          <p className="text-lg text-neutral-600 mb-10">
            Let's build the future together. Explore partnership opportunities and discover how we can help you succeed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" theme="light" className="h-12 px-8">
                Partnership Opportunities
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" theme="light" className="h-12 px-8">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Company;
