import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';
import { technologyPilotProjectsPresentation } from '../../presentation/pages/technology-pilot-projects';

const PilotProjects = () => {
  const copy = technologyPilotProjectsPresentation;

  const projects = copy.projects;

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
            <p className="text-lg text-gray-300 leading-relaxed text-center">
              {copy.intro.body}
            </p>
          </section>

          <section className="mb-16">
            <SectionHeading title={copy.sections.active.heading} />
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-800/50 p-8 rounded-lg border border-purple-500/20">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-purple-400">{project.title}</h3>
                    <span className="bg-blue-900/30 px-3 py-1 rounded-full text-blue-400 text-sm">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-lg border border-purple-500/30 text-center">
            <h2 className="text-3xl font-bold mb-4">{copy.sections.cta.title}</h2>
            <p className="text-lg text-gray-300 mb-6">
              {copy.sections.cta.body}
            </p>
            <Link
              to="/partnership"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
            >
              {copy.sections.cta.buttonLabel}
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PilotProjects;
