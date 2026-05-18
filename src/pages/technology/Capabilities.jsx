import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';
import { technologyCapabilitiesPresentation } from '../../presentation/pages/technology-capabilities';

const Capabilities = () => {
  const copy = technologyCapabilitiesPresentation;

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
            <SectionHeading title={copy.sections.research.heading} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {copy.sections.research.areas.map((area, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-bold text-purple-400 mb-4">{area.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {area.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading title={copy.sections.partnership.heading} />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {copy.sections.partnership.intro}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {copy.sections.partnership.partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 text-center"
                >
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{partner.name}</h3>
                  <p className="text-gray-400">{partner.label}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-6">{copy.sections.learnMore.heading}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/about/facilities" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.learnMore.facilitiesLinkLabel}
              </Link>
              <Link to="/technology/platform" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.learnMore.platformLinkLabel}
              </Link>
              <Link to="/technology/pilot-projects" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.learnMore.pilotProjectsLinkLabel}
              </Link>
              <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                {copy.sections.learnMore.contactLinkLabel}
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Capabilities;
