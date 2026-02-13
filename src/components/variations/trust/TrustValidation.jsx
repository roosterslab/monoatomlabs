import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, FlaskConical, Users, TrendingUp, FileCheck, Star } from 'lucide-react';

const TrustValidation = () => {
  const trustPillars = [
    {
      icon: Shield,
      title: "NABL Certified",
      description: "All performance claims independently verified by National Accreditation Board for Testing",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: FlaskConical,
      title: "Scientific Validation",
      description: "Partnerships with IISc, IIT, NCL ensure rigorous research standards",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: TrendingUp,
      title: "Field-Tested Results",
      description: "5 field-scale pilot trials demonstrating real-world performance",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "Award-Winning Team",
      description: "Led by 6× President of India Awardee, MIT TR35, NASA recognized founders",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const certifications = [
    {
      name: "NABL Accreditation",
      description: "National Accreditation Board for Testing and Calibration Laboratories",
      status: "Certified",
      icon: Shield
    },
    {
      name: "Field Validation",
      description: "Real-world testing across multiple industrial applications",
      status: "5 Pilot Trials",
      icon: CheckCircle
    },
    {
      name: "Scientific Partnerships",
      description: "Collaboration with premier research institutes",
      status: "IISc, IIT, NCL",
      icon: Users
    },
    {
      name: "Performance Verification",
      description: "Independent third-party testing and validation",
      status: "Verified",
      icon: FileCheck
    }
  ];

  const performanceProof = [
    {
      product: "Graphacrete",
      claim: "40-50% Strength Increase",
      validation: "NABL Certified Lab Results",
      field: "M30 → M50 performance verified in field deployments",
      icon: CheckCircle
    },
    {
      product: "Graffisol",
      claim: "10-12% Efficiency Gain",
      validation: "Lab & Field Validated",
      field: "7-8% real-world performance across multiple installations",
      icon: CheckCircle
    },
    {
      product: "HD-G-PE",
      claim: "20× Elongation Improvement",
      validation: "Laboratory Testing",
      field: "Industrial-scale trials confirm performance",
      icon: CheckCircle
    },
    {
      product: "Ceraphene",
      claim: "9H+ Hardness",
      validation: "Industry Standard Testing",
      field: "3-4+ years durability proven in field applications",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6"
          >
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700">Trust & Validation</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Every Claim is Verified.<br />Every Result is Certified.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We don't just make promises—we provide NABL-certified proof, scientific validation, and real-world field test results
          </p>
        </div>

        {/* Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-neutral-200 rounded-2xl p-6 text-center hover:border-neutral-900 hover:shadow-xl transition-all group"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${pillar.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                <pillar.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{pillar.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-neutral-900 rounded-2xl p-10 mb-16"
        >
          <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Certifications & Validations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-neutral-50 rounded-xl border border-neutral-200"
              >
                <div className="p-3 bg-neutral-900 rounded-lg shrink-0">
                  <cert.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-neutral-900">{cert.name}</h4>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-sm text-neutral-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Performance Proof Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 to-black text-white rounded-2xl p-10 mb-16"
        >
          <div className="text-center mb-10">
            <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400 fill-yellow-400" />
            <h3 className="text-3xl font-bold mb-4">Independent Verification of All Claims</h3>
            <p className="text-neutral-300">
              Every performance metric is backed by certified lab results and field validation
            </p>
          </div>

          <div className="space-y-6">
            {performanceProof.map((proof, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Product
                    </div>
                    <div className="text-2xl font-bold flex items-center gap-2">
                      <proof.icon className="w-6 h-6 text-green-400" />
                      {proof.product}
                    </div>
                    <div className="text-lg text-blue-400 mt-1">{proof.claim}</div>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Lab Validation
                    </div>
                    <div className="text-white font-medium">{proof.validation}</div>
                  </div>

                  <div>
                    <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                      Field Proof
                    </div>
                    <div className="text-white font-medium">{proof.field}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scientific Partnership Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-neutral-200 rounded-2xl p-10"
        >
          <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Backed by India's Premier Research Institutes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {[
              {
                name: "Indian Institute of Science",
                acronym: "IISc",
                description: "Advanced materials research collaboration"
              },
              {
                name: "Indian Institute of Technology",
                acronym: "IIT",
                description: "Technology development partnerships"
              },
              {
                name: "National Chemical Laboratory",
                acronym: "NCL",
                description: "Chemical engineering validation"
              }
            ].map((institute, index) => (
              <div
                key={index}
                className="text-center p-6 bg-neutral-50 rounded-xl border border-neutral-200"
              >
                <div className="w-20 h-20 bg-neutral-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {institute.acronym}
                </div>
                <h4 className="font-bold text-neutral-900 mb-2">{institute.name}</h4>
                <p className="text-sm text-neutral-600">{institute.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-neutral-600">
            Our team includes scientists from these institutes working alongside industrial manufacturing experts to ensure every innovation meets the highest standards of scientific rigor and real-world applicability.
          </p>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            Want to See the Certified Data?
          </h3>
          <p className="text-neutral-600 mb-6">
            Download complete technical specifications, NABL certificates, and field test reports
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all">
              Download Certification Documents
            </button>
            <button className="border-2 border-neutral-900 text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-all">
              Request Field Test Data
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustValidation;
