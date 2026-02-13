import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Factory, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

const HeroLabToMassManufacturing = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block bg-purple-500/20 border border-purple-300 rounded-full px-6 py-2 text-purple-200 font-semibold mb-6">
            From Lab to Manufacturing
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            We Don't Just Innovate<br />
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 text-transparent bg-clip-text">
              We Scale to Market
            </span>
          </h1>
        </motion.div>

        {/* Main Value Prop - Actual Production Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto mb-12 text-neutral-200"
        >
          We don't just innovate in the lab—we ensure every breakthrough can scale from prototype
          to mass manufacturing. Our approach bridges deep-tech expertise with real-world industrial
          deployment, supply-chain integration, and national-scale production.
        </motion.p>

        {/* Journey Stages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-4 mb-12"
        >
          <div className="relative">
            <div className="bg-white/10 backdrop-blur border-2 border-purple-400 rounded-xl p-6">
              <div className="bg-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">1</span>
              </div>
              <FlaskConical className="w-10 h-10 mx-auto mb-3 text-purple-300" />
              <h3 className="text-center font-bold mb-2">Lab Prototype</h3>
              <p className="text-sm text-center text-neutral-300">Breakthrough innovation</p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="w-6 h-6 text-purple-400" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur border-2 border-pink-400 rounded-xl p-6">
              <div className="bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">2</span>
              </div>
              <TrendingUp className="w-10 h-10 mx-auto mb-3 text-pink-300" />
              <h3 className="text-center font-bold mb-2">Scale-Up</h3>
              <p className="text-sm text-center text-neutral-300">Process optimization</p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="w-6 h-6 text-pink-400" />
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur border-2 border-blue-400 rounded-xl p-6">
              <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold">3</span>
              </div>
              <CheckCircle2 className="w-10 h-10 mx-auto mb-3 text-blue-300" />
              <h3 className="text-center font-bold mb-2">Field Validation</h3>
              <p className="text-sm text-center text-neutral-300">Real-world testing</p>
            </div>
            <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <ArrowRight className="w-6 h-6 text-blue-400" />
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur border-2 border-green-400 rounded-xl p-6">
            <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
              <span className="text-2xl font-bold">4</span>
            </div>
            <Factory className="w-10 h-10 mx-auto mb-3 text-green-300" />
            <h3 className="text-center font-bold mb-2">Mass Production</h3>
            <p className="text-sm text-center text-neutral-300">Industrial scale</p>
          </div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur border border-purple-400 rounded-2xl p-8 mb-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">Our Unique Approach</h3>
          <p className="text-lg text-neutral-200 max-w-3xl mx-auto">
            Deep scientific expertise from IISc, IIT, and National Chemical Laboratory combined with
            real-world industrial deployment, supply-chain integration, and entrepreneurial execution.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <a
            href="/partnership"
            className="inline-flex items-center gap-3 px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xl rounded-xl transition-all shadow-2xl hover:scale-105"
          >
            Partner With Us
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroLabToMassManufacturing;
