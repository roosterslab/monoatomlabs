import React from 'react';
import { motion } from 'framer-motion';
import { Phone, FlaskConical, Rocket, CheckCircle, ArrowRight } from 'lucide-react';

const CustomerJourney = () => {
  const steps = [
    {
      step: "1",
      title: "Discovery Call",
      subtitle: "Understanding Your Needs",
      icon: Phone,
      duration: "1 Week",
      color: "from-blue-500 to-cyan-600",
      activities: [
        "Initial consultation to understand your requirements",
        "Recommend appropriate product solutions",
        "Share technical specifications and performance data",
        "Discuss pricing and implementation options"
      ]
    },
    {
      step: "2",
      title: "Sample & Testing",
      subtitle: "Proof of Performance",
      icon: FlaskConical,
      duration: "2-4 Weeks",
      color: "from-purple-500 to-pink-600",
      activities: [
        "Provide product samples for your evaluation",
        "Support pilot testing in your environment",
        "Analyze results and optimize formulation",
        "Address technical questions from your team"
      ]
    },
    {
      step: "3",
      title: "Pilot Deployment",
      subtitle: "Small-Scale Implementation",
      icon: Rocket,
      duration: "1-2 Months",
      color: "from-green-500 to-emerald-600",
      activities: [
        "Limited production run or site trial",
        "Monitor performance metrics closely",
        "Optimize application process",
        "Train your team on best practices"
      ]
    },
    {
      step: "4",
      title: "Full Rollout",
      subtitle: "Scale to Production",
      icon: CheckCircle,
      duration: "Ongoing",
      color: "from-orange-500 to-red-600",
      activities: [
        "Manufacturing partnership or technology licensing",
        "Full-scale production integration",
        "Continuous technical support",
        "Performance monitoring and optimization"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6"
          >
            <ArrowRight className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">Your Journey With Us</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            How We Work Together
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            A clear, structured process from discovery to deployment—designed to minimize risk and maximize results
          </p>
        </div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 hover:shadow-2xl transition-all h-full">
                  <div className={`inline-flex p-4 bg-gradient-to-br ${step.color} rounded-xl mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="text-4xl font-bold text-neutral-900 mb-2">{step.step}</div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{step.title}</h3>
                  <p className="text-neutral-600 mb-4">{step.subtitle}</p>

                  <div className="inline-flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-full mb-6">
                    <span className="text-sm font-bold text-neutral-600">{step.duration}</span>
                  </div>

                  <ul className="space-y-3">
                    {step.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-neutral-400 -translate-y-1/2 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 text-white rounded-2xl p-10">
            <h3 className="text-2xl font-bold mb-4">Partnership Models</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">Technology Licensing</h4>
                <p className="text-neutral-300 text-sm">
                  Integrate our IP into your production lines with full technical support and royalty-based model
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">JV-SPV Model</h4>
                <p className="text-neutral-300 text-sm">
                  Joint ventures for co-development, manufacturing, and commercialization with shared IP value
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">What You Get</h3>
            <ul className="space-y-3">
              {[
                "NABL-certified performance guarantees",
                "Full technical documentation",
                "Application training for your team",
                "Ongoing optimization support",
                "Access to R&D expertise",
                "Manufacturing process guidance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-neutral-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 transition-all shadow-xl">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerJourney;
