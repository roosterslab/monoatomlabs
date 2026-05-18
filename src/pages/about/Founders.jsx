import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import { Users, GraduationCap, Award, Briefcase, Globe } from 'lucide-react';
import { aboutFoundersPresentation } from '../../presentation/pages/about-founders.copy';

const Founders = () => {
  const copy = aboutFoundersPresentation;

  return (
    <div className="min-h-screen">
      <PageHeader
        category="Leadership"
        title={copy.pageHeader.title}
        subtitle={copy.pageHeader.subtitle}
      />

      {/* Leadership Introduction */}
      <section className="py-16 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-neutral-600 leading-relaxed">
            Our leadership brings together <span className="text-neutral-900 font-medium">award-winning innovation expertise and proven industrial execution</span>, combining decades of materials research with large-scale manufacturing operations.
          </p>
        </div>
      </section>

      {/* Founders Profiles */}
      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="Meet Our Founders" theme="light" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Sushanth Paatnaik */}
            <div className="bg-neutral-50 p-8 border border-neutral-200 hover:border-neutral-300 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-white border border-neutral-200 flex items-center justify-center rounded-sm flex-shrink-0">
                  <Award className="w-8 h-8 text-neutral-900" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-medium text-neutral-900 mb-1">Sushanth Paatnaik</h2>
                  <p className="text-sm text-neutral-500 font-medium uppercase tracking-wide">Co-Founder & CEO</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-neutral-600 leading-relaxed">
                  A materials innovator and entrepreneur. Awarded six times by the President of India, with global recognitions including MIT TR35, TED India Speaker, and NASA-recognised innovator.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  He is focused on building next-generation technologies rooted in graphene, nano-materials, and advanced chemical engineering. He brings deep experience in deep-tech commercialisation, IP development, and scaling science-driven ventures.
                </p>
                <p className="text-sm text-neutral-500 italic">
                  Innovation journey started at the age of 11.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 uppercase tracking-wide mb-3">Key Recognitions</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium">6× President of India</span>
                  <span className="px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium">MIT TR35</span>
                  <span className="px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium">TED Speaker</span>
                  <span className="px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium">NASA Awardee</span>
                </div>
              </div>
            </div>

            {/* Aayush Bansal */}
            <div className="bg-neutral-50 p-8 border border-neutral-200 hover:border-neutral-300 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-white border border-neutral-200 flex items-center justify-center rounded-sm flex-shrink-0">
                  <Briefcase className="w-8 h-8 text-neutral-900" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-medium text-neutral-900 mb-1">Aayush Bansal</h2>
                  <p className="text-sm text-neutral-500 font-medium uppercase tracking-wide">Co-Founder & Strategic Investor</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-neutral-600 leading-relaxed">
                  Promoter of Kalika Steel, one of India's leading steel manufacturing groups, and a strategic investor in Monoatom Labs. He is a Computer Science Engineer with an MBA in Technology Management, NMIMS University.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  His expertise spans large-scale industrial operations and market expansion. Aayush enables Monoatom Labs to bridge breakthrough material innovations with real-world manufacturing, supply-chain integration, and national-scale deployment.
                </p>
                <p className="text-sm text-neutral-500 italic">
                  38+ years of experience in steel manufacturing and clothing business.
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <p className="text-xs text-neutral-500 uppercase tracking-wide mb-3">Key Expertise</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium">Kalika Steel Promoter</span>
                  <span className="px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium">Industrial Scale-up</span>
                  <span className="px-3 py-1 bg-white text-xs text-neutral-700 border border-neutral-200 font-medium">MBA Tech Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sushanth's Complete Recognitions */}
      <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="02" title="Sushanth's Recognitions & Awards" theme="light" subtitle="13 major recognitions for innovation and entrepreneurship excellence" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
            {[
              { award: 'Six times President of India Awardee', highlight: true },
              { award: 'TED Speaker', highlight: true },
              { award: 'NASA Awardee', highlight: true },
              { award: 'MIT TR-35 Awardee', highlight: true },
              { award: 'CEO Club Speaker', highlight: false },
              { award: 'Silicon Valley Speaker', highlight: false },
              { award: 'Intel IRIS Awardee', highlight: false },
              { award: 'MIT Fab-10 & 11 Awardee', highlight: false },
              { award: 'ICAI Abu Dhabi Speaker', highlight: false },
              { award: 'INK Fellow', highlight: false },
              { award: 'STPI-Chunauti Winner', highlight: false },
              { award: 'ELECRAMA Winner', highlight: false },
              { award: 'Mashaal Green Fellowship Awardee', highlight: false }
            ].map(({ award, highlight }) => (
              <div
                key={award}
                className={`px-4 py-4 ${highlight ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white border-neutral-200'} border text-sm text-center hover:border-neutral-400 transition-all hover:shadow-sm`}
              >
                <div className={`font-medium ${highlight ? 'text-white' : 'text-neutral-700'}`}>
                  {award}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Attributes */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="03" title="Team Composition" theme="light" subtitle="Bringing together diverse expertise for breakthrough innovation" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 border border-neutral-200 bg-white shadow-sm">
              <GraduationCap className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Scientific Excellence</h3>
              <p className="text-sm text-neutral-600">Materials science, chemical engineering, and nanotechnology experts from premier institutions.</p>
            </div>
            <div className="p-6 border border-neutral-200 bg-white shadow-sm">
              <Briefcase className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Industrial Experience</h3>
              <p className="text-sm text-neutral-600">Manufacturing, scale-up, and commercialization specialists with proven track records.</p>
            </div>
            <div className="p-6 border border-neutral-200 bg-white shadow-sm">
              <Users className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Research Partnerships</h3>
              <p className="text-sm text-neutral-600">Collaborations with IISc, IIT, and National Chemical Laboratory.</p>
            </div>
            <div className="p-6 border border-neutral-200 bg-white shadow-sm">
              <Globe className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
              <h3 className="text-lg font-medium text-neutral-900 mb-2">Global Recognition</h3>
              <p className="text-sm text-neutral-600">Multiple Presidential awards, TED India, and international recognitions for innovation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founders;
