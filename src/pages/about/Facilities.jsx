import React from 'react';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import { Microscope, FlaskConical, Settings, ClipboardCheck, Building2 } from 'lucide-react';

const CapabilityBlock = ({ icon: Icon, title, items }) => (
  <div className="p-8 bg-neutral-50 border border-neutral-200 flex flex-col h-full shadow-sm hover:border-neutral-300 transition-colors">
    <Icon className="w-10 h-10 text-neutral-600 mb-6" strokeWidth={1.5} />
    <h3 className="text-xl font-display font-medium text-neutral-900 mb-6">{title}</h3>
    <ul className="space-y-3 mt-auto">
      {items.map((item, i) => (
        <li key={i} className="flex items-start text-sm text-neutral-600">
          <span className="w-1 h-1 bg-neutral-400 rounded-full mr-3 mt-2 shrink-0"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const Facilities = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        category="Infrastructure"
        title="Facilities & Capabilities"
        subtitle="Advanced research and testing facilities enabling breakthrough nanomaterial innovations from fundamental research to commercial production."
      />

      {/* Introduction */}
      <section className="py-16 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-neutral-600 leading-relaxed">
            Monoatom Labs operates <span className="text-neutral-900 font-medium">state-of-the-art research and testing laboratories.</span> We have equipment for advanced material synthesis, validation, and scale-up.
          </p>
        </div>
      </section>

      {/* Two-Facility Structure from PDF */}
      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="Our Facilities" theme="light" subtitle="Two specialized laboratories covering the full innovation lifecycle" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {/* Facility 01 - Nanomaterials R&D */}
            <div className="p-10 border-2 border-neutral-300 bg-white hover:border-neutral-400 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center rounded-sm font-display text-xl font-medium">
                  01
                </div>
                <h3 className="text-2xl font-display font-medium text-neutral-900">
                  Nanomaterials R&D Facility
                </h3>
              </div>

              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                Focused on graphene processing, dispersion technologies, and high-purity nano-additive development.
              </p>

              <div className="bg-neutral-50 p-6 border border-neutral-200 rounded-sm">
                <h4 className="text-sm font-medium text-neutral-900 mb-4 uppercase tracking-wide">Capabilities include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-neutral-600">
                    <span className="mr-3 text-neutral-400 font-bold">•</span>
                    <span>Surface chemistry modification</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <span className="mr-3 text-neutral-400 font-bold">•</span>
                    <span>Advanced characterization (SEM, TEM, Raman)</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <span className="mr-3 text-neutral-400 font-bold">•</span>
                    <span>Pilot-scale dispersion & functionalization units</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Facility 02 - Application & Testing */}
            <div className="p-10 border-2 border-neutral-300 bg-white hover:border-neutral-400 transition-all hover:shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center rounded-sm font-display text-xl font-medium">
                  02
                </div>
                <h3 className="text-2xl font-display font-medium text-neutral-900">
                  Application & Testing Facility
                </h3>
              </div>

              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
                Designed for real-industry testing across coatings, concrete, composites, energy systems, and bio-chemical applications.
              </p>

              <div className="bg-neutral-50 p-6 border border-neutral-200 rounded-sm">
                <h4 className="text-sm font-medium text-neutral-900 mb-4 uppercase tracking-wide">Capabilities include:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-neutral-600">
                    <span className="mr-3 text-neutral-400 font-bold">•</span>
                    <span>Mechanical & durability testing</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <span className="mr-3 text-neutral-400 font-bold">•</span>
                    <span>Thermal & electrical conductivity labs</span>
                  </li>
                  <li className="flex items-start text-neutral-600">
                    <span className="mr-3 text-neutral-400 font-bold">•</span>
                    <span>Prototype fabrication & field-simulation setups</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Capabilities Grid */}
      <section className="py-24 px-6 border-b border-neutral-200 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="02" title="Core Capabilities" theme="light" subtitle="Comprehensive expertise across the innovation value chain" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <CapabilityBlock
              icon={FlaskConical}
              title="Materials Innovation"
              items={[
                'Custom formulation development',
                'Bio-inspired chemistry solutions',
                'Performance-enhancing additive systems',
                'Scalable synthesis processes',
                'IP-protected methodologies'
              ]}
            />
            <CapabilityBlock
              icon={Microscope}
              title="Application Development"
              items={[
                'Coatings and surface treatments',
                'Composite materials',
                'Energy storage and conversion',
                'Construction materials',
                'Mobility and aerospace applications'
              ]}
            />
            <CapabilityBlock
              icon={Settings}
              title="Manufacturing Scale-Up"
              items={[
                'Pilot-scale production facilities',
                'Process optimization and validation',
                'Quality control and characterization',
                'Supply chain integration',
                'Technical support and training'
              ]}
            />
            <CapabilityBlock
              icon={ClipboardCheck}
              title="Testing & Validation"
              items={[
                'NABL-certified laboratory testing',
                'Field deployment and monitoring',
                'Independent third-party validation',
                'Long-term durability studies',
                'Performance characterization'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Infrastructure Details */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading number="03" title="Research Equipment" theme="light" subtitle="Our state-of-the-art facilities combine advanced instrumentation with expert personnel." />

          <div className="mt-12 bg-white border border-neutral-200 p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {[
                'High-resolution microscopy suite',
                'Spectroscopy and analytical systems',
                'Rheology and viscosity measurement',
                'Thermal analysis equipment',
                'Coating application stations',
                'Mechanical testing systems',
                'Environmental chambers',
                'Process automation units'
              ].map((item, i) => (
                <div key={i} className="flex items-center py-2 border-b border-neutral-100 last:border-0 md:last:border-b [&:nth-last-child(2)]:border-0">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  <span className="text-neutral-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Partnership Network" theme="light" subtitle="Collaborating with premier research institutions." />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {['IISc', 'IIT', 'NCL'].map((partner) => (
              <div key={partner} className="h-32 bg-neutral-50 border border-neutral-200 flex flex-col items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
                <Building2 className="w-8 h-8 text-neutral-600 mb-2" />
                <span className="text-xl font-display font-medium text-neutral-900">{partner}</span>
                <span className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Research Partner</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
