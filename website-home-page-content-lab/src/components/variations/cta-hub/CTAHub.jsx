import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Phone, Calculator, Handshake, FlaskConical, TrendingUp, Download, Calendar } from 'lucide-react';

const CTAHub = () => {
  const ctaCards = [
    {
      audience: "Manufacturers",
      icon: Download,
      color: "from-blue-500 to-cyan-600",
      ctas: [
        { text: "Download Product Catalog", icon: FileText, type: "primary" },
        { text: "Request Technical Specifications", icon: FileText, type: "secondary" }
      ],
      description: "Get detailed specs, performance data, and application guides"
    },
    {
      audience: "Decision Makers",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-600",
      ctas: [
        { text: "Schedule Consultation Call", icon: Phone, type: "primary" },
        { text: "Use ROI Calculator", icon: Calculator, type: "secondary" }
      ],
      description: "Understand ROI and business impact with expert guidance"
    },
    {
      audience: "Partners",
      icon: Handshake,
      color: "from-green-500 to-emerald-600",
      ctas: [
        { text: "Explore Licensing Options", icon: FileText, type: "primary" },
        { text: "Discuss JV Opportunities", icon: Calendar, type: "secondary" }
      ],
      description: "Two proven models: Technology Licensing or JV-SPV partnerships"
    },
    {
      audience: "Researchers",
      icon: FlaskConical,
      color: "from-orange-500 to-red-600",
      ctas: [
        { text: "Download White Papers", icon: Download, type: "primary" },
        { text: "Request Sample Kit", icon: FlaskConical, type: "secondary" }
      ],
      description: "Access technical documentation and sample materials"
    }
  ];

  const quickLinks = [
    { text: "View All Products", icon: FileText },
    { text: "See Competitive Comparison", icon: TrendingUp },
    { text: "Read Case Studies", icon: FileText },
    { text: "Download Certifications", icon: Download },
    { text: "Contact Technical Team", icon: Phone },
    { text: "Schedule Site Visit", icon: Calendar }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6"
          >
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700">Take Action</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            What Would You Like to Do?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Choose your path based on your role and requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {ctaCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-900 hover:shadow-2xl transition-all"
            >
              <div className={`bg-gradient-to-br ${card.color} p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <card.icon className="w-10 h-10" />
                  <h3 className="text-2xl font-bold">For {card.audience}</h3>
                </div>
                <p className="opacity-90">{card.description}</p>
              </div>

              <div className="p-8 space-y-4">
                {card.ctas.map((cta, idx) => (
                  <button
                    key={idx}
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-bold transition-all ${
                      cta.type === 'primary'
                        ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                        : 'border-2 border-neutral-300 text-neutral-900 hover:border-neutral-900'
                    }`}
                  >
                    <cta.icon className="w-5 h-5" />
                    {cta.text}
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-neutral-900 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-center mb-8">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                className="flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all border border-white/20 hover:border-white/40"
              >
                <link.icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-left font-medium">{link.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center p-10 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl">
          <h3 className="text-3xl font-bold text-neutral-900 mb-4">
            Not Sure Where to Start?
          </h3>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Talk to our team to determine the best path forward for your specific requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-neutral-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 transition-all">
              <Phone className="w-5 h-5 inline mr-2" />
              Schedule Discovery Call
            </button>
            <button className="border-2 border-neutral-900 text-neutral-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all">
              <FileText className="w-5 h-5 inline mr-2" />
              Send Us Your Requirements
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <div className="font-bold text-neutral-900 mb-2">📧 Email</div>
                <div className="text-neutral-600">info@monoatomlabs.com</div>
              </div>
              <div>
                <div className="font-bold text-neutral-900 mb-2">📞 Phone</div>
                <div className="text-neutral-600">+91-989-919-9809</div>
              </div>
              <div>
                <div className="font-bold text-neutral-900 mb-2">📍 Location</div>
                <div className="text-neutral-600">iHub, Ahmedabad, Gujarat</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAHub;
