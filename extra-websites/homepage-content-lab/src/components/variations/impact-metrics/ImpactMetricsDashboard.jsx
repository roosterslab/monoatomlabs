import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award, Leaf } from 'lucide-react';

const ImpactMetricsDashboard = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const metrics = [
    {
      icon: Leaf,
      value: 50,
      suffix: 'M+',
      unit: 'kg',
      label: 'CO₂ Saved',
      description: 'Carbon emissions prevented through graphene-enhanced materials',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Users,
      value: 100,
      suffix: '+',
      unit: '',
      label: 'Installations',
      description: 'Active deployments across construction, solar, and industrial sectors',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: TrendingUp,
      value: 25,
      suffix: '%',
      unit: '',
      label: 'Cost Reduction',
      description: 'Average cost savings achieved by customers vs traditional solutions',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Award,
      value: 99.5,
      suffix: '%',
      unit: '',
      label: 'Satisfaction',
      description: 'Customer satisfaction rating based on post-deployment surveys',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const AnimatedCounter = ({ value, suffix, unit, isInView }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isInView) return;

      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isInView, value]);

    return (
      <div className="text-6xl font-bold">
        {count.toFixed(value % 1 !== 0 ? 1 : 0)}
        {suffix}
        {unit && <span className="text-3xl ml-1">{unit}</span>}
      </div>
    );
  };

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-neutral-900 to-neutral-800 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6"
          >
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-bold text-green-300">Real Impact</span>
          </motion.div>

          <h2 className="text-5xl font-bold mb-4">
            Making a Measurable Difference
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Our graphene nano-platelets aren't just advanced materials—they're delivering real-world results across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 hover:border-white/30 hover:bg-white/10 transition-all"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${metric.color} rounded-xl mb-6`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>

              <AnimatedCounter
                value={metric.value}
                suffix={metric.suffix}
                unit={metric.unit}
                isInView={isInView}
              />

              <h3 className="text-2xl font-bold mt-4 mb-2">{metric.label}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
            <h4 className="text-lg font-bold mb-2">Commercial Products</h4>
            <p className="text-neutral-400 text-sm">Market-ready solutions deployed across industries</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
            <h4 className="text-lg font-bold mb-2">Field Validations</h4>
            <p className="text-neutral-400 text-sm">Independent testing and NABL certification</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <div className="text-3xl font-bold text-purple-400 mb-2">₹430</div>
            <h4 className="text-lg font-bold mb-2">Avg. Savings per m³</h4>
            <p className="text-neutral-400 text-sm">Cost reduction for concrete applications</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-400 text-sm">
            Data updated monthly • Last updated: February 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactMetricsDashboard;
