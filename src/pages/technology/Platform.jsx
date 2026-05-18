import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';
import { technologyPlatformPresentation } from '../../presentation/pages/technology-platform';

const Platform = () => {
  const copy = technologyPlatformPresentation;

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
            <SectionHeading title={copy.sections.platform.heading} />
            <p className="text-lg text-gray-300 leading-relaxed">
              {copy.sections.platform.body}
            </p>
          </section>

          <section className="mb-16">
            <SectionHeading title={copy.sections.capabilities.heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {copy.sections.capabilities.items.map((item, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading title={copy.sections.process.heading} />
            <div className="space-y-6">
              {copy.sections.process.steps.map((step, index) => (
                <div key={index} className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-6">{copy.sections.learnMore.heading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/technology/pilot-projects" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.learnMore.pilotProjectsLinkLabel}
              </Link>
              <Link to="/technology/capabilities" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.learnMore.capabilitiesLinkLabel}
              </Link>
              <Link to="/products" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.learnMore.productsLinkLabel}
              </Link>
              <Link to="/partnership" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.learnMore.partnershipLinkLabel}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Platform;
