import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Sun, Car, CheckCircle, TrendingUp, ArrowRight } from 'lucide-react';

const CustomerSuccessStories = () => {
  const stories = [
    {
      industry: "Infrastructure & Construction",
      icon: Building2,
      color: "from-blue-500 to-cyan-600",
      title: "Infrastructure Giant Reduces Cement by 18%",
      company: "Leading Indian Infrastructure Developer",
      challenge: "Rising cement costs and sustainability goals required material innovation without compromising structural strength.",
      solution: "Deployed Graphacrete (M50 grade) in 15,000 m³ of structural concrete across 3 high-rise projects.",
      results: [
        { metric: "18%", label: "Cement Reduction", icon: TrendingUp },
        { metric: "₹64.5L", label: "Total Savings", icon: CheckCircle },
        { metric: "230 tons", label: "CO₂ Prevented", icon: CheckCircle },
        { metric: "35% faster", label: "Curing Time", icon: CheckCircle }
      ],
      quote: "Graphacrete delivered M50 performance at M40 cement dosage. The cost savings and environmental benefits made it an easy decision.",
      role: "Chief Materials Engineer"
    },
    {
      industry: "Solar Energy",
      icon: Sun,
      color: "from-orange-500 to-red-600",
      title: "Solar Farm Achieves 8.2% Output Gain",
      company: "250 MW Solar Installation, Rajasthan",
      challenge: "Desert dust accumulation reduced panel efficiency by 12-15%, requiring frequent costly cleaning operations.",
      solution: "Applied Graffisol nano-coating to 800,000+ solar panels with automated spray system.",
      results: [
        { metric: "8.2%", label: "Output Increase", icon: TrendingUp },
        { metric: "18 months", label: "Payback Period", icon: CheckCircle },
        { metric: "85%", label: "Cleaning Reduction", icon: CheckCircle },
        { metric: "₹2.4Cr/yr", label: "Revenue Gain", icon: CheckCircle }
      ],
      quote: "The hydrophobic coating keeps panels clean in harsh desert conditions. We're seeing consistent 8%+ gains across the entire farm.",
      role: "Operations Director"
    },
    {
      industry: "Automotive Manufacturing",
      icon: Car,
      color: "from-purple-500 to-pink-600",
      title: "Automotive Coating - 70% Cost Reduction",
      company: "Tier-1 Auto Component Manufacturer",
      challenge: "Premium ceramic coatings were too expensive for mass production. Needed high-temperature resistance at lower cost.",
      solution: "Switched to Ceraphene for thermal barrier coating on exhaust components and engine parts.",
      results: [
        { metric: "70%", label: "Cost Reduction", icon: TrendingUp },
        { metric: "1200°C", label: "Heat Resistance", icon: CheckCircle },
        { metric: "5 years", label: "Durability", icon: CheckCircle },
        { metric: "100%", label: "Quality Maintained", icon: CheckCircle }
      ],
      quote: "Ceraphene matches premium ceramic performance at a fraction of the cost. It's transformed our coating economics.",
      role: "VP Manufacturing"
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
            <CheckCircle className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">Proven Results</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Real Stories, Real Numbers
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            See how industry leaders are achieving measurable results with our graphene nano-platelets
          </p>
        </div>

        <div className="space-y-12">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-900 hover:shadow-2xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Left Column - Industry & Title */}
                <div className={`bg-gradient-to-br ${story.color} text-white p-10 flex flex-col justify-between`}>
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <story.icon className="w-8 h-8" />
                      </div>
                      <div className="text-sm font-bold opacity-90">{story.industry}</div>
                    </div>

                    <h3 className="text-3xl font-bold mb-4 leading-tight">
                      {story.title}
                    </h3>

                    <div className="text-sm opacity-90 mb-6">{story.company}</div>
                  </div>

                  <div className="border-t border-white/20 pt-6">
                    <div className="text-sm font-bold mb-2">THE CHALLENGE</div>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {story.challenge}
                    </p>
                  </div>
                </div>

                {/* Middle Column - Solution & Results */}
                <div className="lg:col-span-2 p-10">
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-neutral-500 mb-3">THE SOLUTION</h4>
                    <p className="text-neutral-700 leading-relaxed">
                      {story.solution}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-neutral-500 mb-4">THE RESULTS</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {story.results.map((result, idx) => (
                        <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                          <result.icon className="w-5 h-5 text-green-600 mb-2" />
                          <div className="text-2xl font-bold text-neutral-900 mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs text-neutral-600">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-neutral-900 text-white rounded-xl p-6 relative">
                    <div className="text-6xl absolute top-4 left-4 opacity-20">"</div>
                    <p className="text-lg italic mb-4 relative z-10 pl-8">
                      {story.quote}
                    </p>
                    <div className="text-sm opacity-80 pl-8">— {story.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center bg-neutral-900 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Want Similar Results?</h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Every application is unique. Let's discuss how graphene nano-platelets can deliver measurable ROI for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all inline-flex items-center gap-2">
              Download Full Case Studies
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessStories;
