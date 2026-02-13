import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is graphene actually ready for industrial use?",
      answer: "Absolutely. We have 5+ commercially available products already deployed in real industrial applications. These aren't lab prototypes—Graphacrete, Graffisol, HD-G-PE, and Ceraphene are NABL certified and field-tested across construction, solar, polymer, and coating industries.",
      highlight: "5+ products commercially available, NABL certified, field-tested"
    },
    {
      question: "How expensive is it compared to traditional solutions?",
      answer: "Our products deliver premium performance at competitive or lower costs. Graphacrete saves ₹430 per cubic meter vs M50 concrete. Graffisol pays back in 18 months for solar plants. Ceraphene costs 60-70% less than premium ceramic coatings while delivering comparable durability.",
      highlight: "Cost-effective with measurable ROI"
    },
    {
      question: "Will it work with our existing manufacturing processes?",
      answer: "Yes. All our products are designed as drop-in solutions requiring minimal to no changes in existing equipment or processes. Graphacrete mixes like standard admixtures. Graffisol applies via simple spray/wipe. HD-G-PE works with existing HDPE processing lines.",
      highlight: "Drop-in solutions, no equipment changes needed"
    },
    {
      question: "Is it safe and certified?",
      answer: "All performance claims are independently verified by NABL (National Accreditation Board for Testing). We have partnerships with IISc, IIT, and NCL for scientific validation. Products undergo rigorous safety testing and comply with industry standards.",
      highlight: "NABL certified, IISc/IIT/NCL validated"
    },
    {
      question: "Can you scale to our production volume?",
      answer: "Yes. We offer two collaboration models: (1) Technology Licensing for rapid integration into your existing production lines, and (2) JV-SPV partnerships for co-development and manufacturing. Both models support industrial-scale deployment.",
      highlight: "Manufacturing partnerships ready, scalable solutions"
    },
    {
      question: "What's the typical implementation timeline?",
      answer: "It varies by product and scale. Typically: Discovery call (1 week) → Sample testing (2-4 weeks) → Pilot deployment (1-2 months) → Full rollout (3-6 months). We provide technical support throughout.",
      highlight: "3-6 months from discovery to full deployment"
    },
    {
      question: "Do you provide technical support?",
      answer: "Yes. We offer comprehensive technical support including formulation guidance, application training, troubleshooting, and performance optimization. Our team includes scientists from premier institutes who work alongside your engineers.",
      highlight: "Full technical support with expert team"
    },
    {
      question: "What makes your graphene different from competitors?",
      answer: "High aspect ratio (2,000-4,000:1) and high purity (~99%) nano-platelets deliver superior performance at lower dosages. We're the only company offering complete solutions—not just materials, but application-specific formulations with proven field performance and commercial-scale manufacturing capability.",
      highlight: "Unique: High aspect ratio + High purity + Manufacturing ready"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6"
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700">Questions Answered</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-600">
            Addressing common concerns about commercial graphene applications
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border-2 border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-900 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between bg-white hover:bg-neutral-50 transition-colors"
              >
                <span className="text-lg font-bold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-neutral-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 bg-neutral-50">
                      <p className="text-neutral-700 leading-relaxed mb-4">
                        {faq.answer}
                      </p>
                      <div className="flex items-start gap-2 bg-green-50 border border-green-200 rounded-lg p-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-green-900">
                          {faq.highlight}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-neutral-900 text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-neutral-300 mb-6">
            Our technical team is ready to address your specific requirements
          </p>
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all">
            Schedule Technical Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
