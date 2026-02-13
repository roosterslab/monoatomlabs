import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, FileCheck, Users, Microscope, Building2, CheckCircle, ExternalLink } from 'lucide-react';

const CertificationsValidation = () => {
  const certifications = [
    {
      icon: Shield,
      title: "NABL Certified",
      subtitle: "ISO/IEC 17025:2017",
      description: "All performance claims independently verified by National Accreditation Board",
      badge: "Laboratory Testing",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Award,
      title: "ISO 9001:2015",
      subtitle: "Quality Management",
      description: "Certified quality management system for manufacturing and R&D processes",
      badge: "QMS Certified",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: FileCheck,
      title: "BIS Standards",
      subtitle: "Bureau of Indian Standards",
      description: "Products comply with IS codes for construction materials and coatings",
      badge: "Standards Compliant",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Microscope,
      title: "Patent Portfolio",
      subtitle: "3 Granted + 2 Filed",
      description: "Proprietary graphene synthesis and application methods protected by patents",
      badge: "IP Protected",
      color: "from-orange-500 to-red-600"
    }
  ];

  const partnerships = [
    {
      name: "IISc Bangalore",
      type: "Scientific Partnership",
      logo: "🏛️",
      description: "Collaborative research on graphene nano-materials and applications",
      metrics: ["Joint Publications", "Lab Access", "Expert Validation"]
    },
    {
      name: "IIT Network",
      type: "Technology Validation",
      logo: "🎓",
      description: "Field testing and performance validation across multiple IIT labs",
      metrics: ["Field Tests", "Data Validation", "Technical Reports"]
    },
    {
      name: "NCL Pune",
      type: "Research Collaboration",
      logo: "🔬",
      description: "Advanced characterization and materials testing partnership",
      metrics: ["Material Analysis", "TEM/SEM", "Spectroscopy"]
    }
  ];

  const validationPoints = [
    {
      icon: CheckCircle,
      title: "Independent Lab Testing",
      description: "All claims verified by NABL-accredited third-party laboratories",
      count: "15+"
    },
    {
      icon: Users,
      title: "Field Deployments",
      description: "Real-world validation across construction, solar, and industrial sites",
      count: "100+"
    },
    {
      icon: Building2,
      title: "Industry Partnerships",
      description: "Active collaborations with leading companies for pilot programs",
      count: "20+"
    },
    {
      icon: FileCheck,
      title: "Technical Publications",
      description: "Peer-reviewed papers and technical reports documenting results",
      count: "8+"
    }
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
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold text-blue-700">Certified & Validated</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Trust Through Verification
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Every claim backed by independent testing, certifications, and scientific partnerships
          </p>
        </div>

        {/* Certification Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 hover:shadow-2xl transition-all text-center"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${cert.color} rounded-xl mb-4`}>
                <cert.icon className="w-8 h-8 text-white" />
              </div>

              <div className="inline-block bg-neutral-100 px-3 py-1 rounded-full text-xs font-bold text-neutral-600 mb-3">
                {cert.badge}
              </div>

              <h3 className="text-xl font-bold text-neutral-900 mb-1">{cert.title}</h3>
              <div className="text-sm text-neutral-600 mb-3 font-medium">{cert.subtitle}</div>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scientific Partnerships */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Scientific Validation Partners
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <div className="text-5xl mb-4">{partner.logo}</div>
                <h4 className="text-2xl font-bold mb-2">{partner.name}</h4>
                <div className="text-sm text-neutral-400 mb-4">{partner.type}</div>
                <p className="text-neutral-300 text-sm mb-6 leading-relaxed">
                  {partner.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {partner.metrics.map((metric, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Validation Metrics */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-12 mb-16">
          <h3 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            By The Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {validationPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-4 bg-white rounded-xl mb-4 shadow-lg">
                  <point.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-neutral-900 mb-2">{point.count}</div>
                <h4 className="font-bold text-neutral-900 mb-2">{point.title}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testing Standards */}
        <div className="bg-white border-2 border-neutral-200 rounded-2xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Testing Standards We Follow
              </h3>
              <ul className="space-y-4">
                {[
                  "IS 516-1959 (Compressive Strength)",
                  "IS 1199-1959 (Tensile Strength)",
                  "ASTM D412 (Polymer Testing)",
                  "IEC 61215 (Solar Module Standards)",
                  "ASTM C666 (Freeze-Thaw Resistance)",
                  "ISO 4624 (Coating Adhesion)"
                ].map((standard, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                Downloadable Resources
              </h3>
              <div className="space-y-3">
                {[
                  "NABL Test Reports",
                  "Product Certifications",
                  "Technical Data Sheets",
                  "Safety Data Sheets (SDS)",
                  "Patent Documentation",
                  "Research Publications"
                ].map((resource, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between p-4 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-neutral-900 hover:bg-neutral-100 transition-all group"
                  >
                    <span className="font-medium text-neutral-900">{resource}</span>
                    <ExternalLink className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            Need specific certification documentation for your procurement process?
          </p>
          <button className="bg-neutral-900 text-white px-8 py-4 rounded-full font-bold hover:bg-neutral-800 transition-all">
            Request Certification Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsValidation;
