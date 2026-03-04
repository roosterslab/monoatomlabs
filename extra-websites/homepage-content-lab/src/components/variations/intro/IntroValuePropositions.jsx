import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Factory, Award, Target } from 'lucide-react';

const IntroValuePropositions = () => {
  const valueProps = [
    {
      icon: Atom,
      title: 'Scalable Graphene Solutions',
      description: 'Provider of commercially viable graphene solutions for industrial applications. We focus on graphene as a transformative nanomaterial with significant commercial potential, delivering clean air, clean water, clean energy, and a better life.',
      color: 'blue'
    },
    {
      icon: Factory,
      title: 'From Lab to Manufacturing',
      description: 'We don\'t just innovate in the lab—we ensure every breakthrough can scale from prototype to mass manufacturing. Our approach bridges deep-tech expertise with real-world industrial deployment, supply-chain integration, and national-scale production.',
      color: 'purple'
    },
    {
      icon: Award,
      title: 'Award-Winning Innovation',
      description: 'Led by visionaries with global recognition including MIT TR35, TED Speaker, NASA Awardee, and 6-time President of India Award recipient. Our team combines scientific depth from IISc, IIT, and National Chemical Laboratory with entrepreneurial execution.',
      color: 'amber'
    }
  ];

  const colorClasses = {
    blue: {
      gradient: 'from-blue-600/20 to-blue-800/20',
      border: 'border-blue-500',
      icon: 'text-blue-400',
      text: 'text-blue-300'
    },
    purple: {
      gradient: 'from-purple-600/20 to-purple-800/20',
      border: 'border-purple-500',
      icon: 'text-purple-400',
      text: 'text-purple-300'
    },
    amber: {
      gradient: 'from-amber-600/20 to-amber-800/20',
      border: 'border-amber-500',
      icon: 'text-amber-400',
      text: 'text-amber-300'
    }
  };

  return (
    <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white/10 border border-white/20 rounded-full px-6 py-2 text-white font-semibold mb-6">
            Our Value Propositions
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Why Choose Monoatom Labs?
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Three core pillars that set us apart in the advanced materials industry
          </p>
        </motion.div>

        {/* Value Propositions - Actual Production Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className={`bg-gradient-to-br ${colorClasses[prop.color].gradient} backdrop-blur border-2 ${colorClasses[prop.color].border} rounded-2xl p-8 hover:scale-105 transition-transform`}
            >
              <prop.icon className={`w-16 h-16 ${colorClasses[prop.color].icon} mb-6`} />
              <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
              <p className="text-neutral-300 leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <Target className="w-12 h-12 text-green-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-green-300">Our Vision</h3>
            <p className="text-lg text-neutral-200">
              Advanced Nanomaterials for Better Quality of Life
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8">
            <Target className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-blue-300">Our Mission</h3>
            <p className="text-lg text-neutral-200">
              To create commercially viable graphene solutions for industrial applications. Develop, validate,
              and make commercial-scale manufacturing of graphene innovations to provide clean air, clean water,
              clean energy, and better life.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroValuePropositions;
