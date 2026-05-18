import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';
import { industriesAdvancedMaterialsPresentation } from '../../presentation/pages/industries-advanced-materials';

const AdvancedMaterials = () => {
  const copy = industriesAdvancedMaterialsPresentation;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              {copy.hero.title}
            </h1>
            <p className="text-xl text-gray-300">
              {copy.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <SectionHeading title={copy.sections.solutions.heading} />
            <p className="text-lg text-gray-300 leading-relaxed">
              {copy.sections.solutions.body}
            </p>
          </section>

          <section className="mb-16">
            <SectionHeading title={copy.sections.applications.heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {copy.sections.applications.items.map((app, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                  <p className="text-lg text-gray-300">{app}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading title={copy.sections.pipelineProducts.heading} />
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-lg border border-orange-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-orange-400">{copy.sections.pipelineProducts.graphosite.name}</h3>
                  <span className="bg-orange-900/30 px-3 py-1 rounded-full text-orange-400 text-sm">
                    {copy.sections.pipelineProducts.graphosite.statusLabel}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {copy.sections.pipelineProducts.graphosite.body}
                </p>
                <Link to="/products/pipeline/graphosite" className="text-orange-400 hover:text-orange-300">
                  {copy.sections.pipelineProducts.graphosite.linkLabel}
                </Link>
              </div>

              <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-lg border border-orange-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-orange-400">{copy.sections.pipelineProducts.armophene.name}</h3>
                  <span className="bg-orange-900/30 px-3 py-1 rounded-full text-orange-400 text-sm">
                    {copy.sections.pipelineProducts.armophene.statusLabel}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">
                  {copy.sections.pipelineProducts.armophene.body}
                </p>
                <Link to="/products/pipeline/armophene" className="text-orange-400 hover:text-orange-300">
                  {copy.sections.pipelineProducts.armophene.linkLabel}
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-6">{copy.sections.related.heading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/products/pipeline" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.related.pipelineLinkLabel}
              </Link>
              <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.related.contactLinkLabel}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdvancedMaterials;
