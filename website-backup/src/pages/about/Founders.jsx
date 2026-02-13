import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import { Users, GraduationCap, Award, Briefcase, Globe } from 'lucide-react';

const Founders = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        category="Leadership"
        title="Founders & Team"
        subtitle="Monoatom Labs is built on decades of innovation expertise, combining deep scientific knowledge with proven industrial manufacturing capabilities."
      />

      {/* Main Story */}
      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Sushanth Paatnaik */}
            <div>
              <div className="w-16 h-16 bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6 rounded-sm shadow-sm">
                <Award className="w-8 h-8 text-neutral-900" />
              </div>
              <h2 className="text-2xl font-display font-medium text-neutral-900 mb-2">Sushanth Paatnaik</h2>
              <p className="text-sm text-neutral-500 font-medium uppercase tracking-wide mb-6">Co-Founder & CEO</p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Materials innovator and entrepreneur. 6-time President of India Awardee. Global recognitions include MIT TR35, TED India Speaker, NASA-recognized innovator. His innovation journey started at the age of 11. Focused on building next-generation technologies rooted in graphene, nanomaterials, and advanced chemical engineering with expertise in deep-tech commercialization and scaling science-driven ventures.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">6× President of India</span>
                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">MIT TR35</span>
                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">TED Speaker</span>
                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">NASA Awardee</span>
              </div>
            </div>

            {/* Aayush Bansal */}
            <div>
              <div className="w-16 h-16 bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6 rounded-sm shadow-sm">
                <Briefcase className="w-8 h-8 text-neutral-900" />
              </div>
              <h2 className="text-2xl font-display font-medium text-neutral-900 mb-2">Aayush Bansal</h2>
              <p className="text-sm text-neutral-500 font-medium uppercase tracking-wide mb-6">Co-Founder & Strategic Investor</p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Promoter of Kalika Steel, one of India's leading steel manufacturing groups. Computer Science Engineer with MBA in Technology Management from NMIMS University. With over 38 years of experience in steel manufacturing and clothing business, he brings expertise in large-scale industrial operations and market expansion, enabling bridge between breakthrough innovations and real-world manufacturing.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">Kalika Steel Promoter</span>
                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">Industrial Scale-up</span>
                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">MBA Tech Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sushanth's Complete Recognitions */}
      <section className="py-16 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="Sushanth's Recognitions & Awards" theme="light" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-12">
            {[
              'Six times President of India Awardee',
              'TED Speaker',
              'NASA Awardee',
              'MIT TR-35 Awardee',
              'CEO Club Speaker',
              'Silicon Valley Speaker',
              'Intel IRIS Awardee',
              'MIT Fab-10 & 11 Awardee',
              'ICAI Abu Dhabi Speaker',
              'INK Fellow',
              'STPI-Chunauti Winner',
              'ELECRAMA Winner',
              'Mashaal Green Fellowship Awardee'
            ].map((award) => (
              <div key={award} className="px-4 py-3 bg-neutral-50 border border-neutral-200 text-sm text-neutral-700 text-center hover:border-neutral-300 transition-colors">
                {award}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Attributes */}
      <section className="py-24 px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="02" title="Team Composition" theme="light" />

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
