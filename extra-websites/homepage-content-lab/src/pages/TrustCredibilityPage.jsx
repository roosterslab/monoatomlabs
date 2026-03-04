import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, BarChart, MessageSquare, Building, FileCheck, Handshake, MapPin, Shield } from 'lucide-react';

export default function TrustCredibilityPage() {
  const [selectedFramework, setSelectedFramework] = useState('certification');

  const trustFrameworks = {
    certification: {
      name: 'Certification & Validation',
      icon: Award,
      tagline: 'Lead with third-party validation and credentials',
      title: 'Validated Performance. Certified Quality. Proven Results.',
      color: 'from-blue-600 to-cyan-600',
      elements: [
        {
          category: 'NABL Accreditation',
          items: [
            'Only NABL-certified graphene testing lab in Telangana',
            'Mechanical testing, thermal analysis, chemical characterization',
            'Third-party validation of all product performance claims'
          ]
        },
        {
          category: 'Testing Capabilities',
          items: [
            'Compressive strength testing (concrete applications)',
            'Thermal conductivity measurement',
            'Raman spectroscopy (graphene quality verification)',
            'X-ray diffraction (XRD) and SEM analysis'
          ]
        },
        {
          category: 'Validation Results',
          items: [
            'Graphacrete: 40% compressive strength improvement (IS 456:2000)',
            'Graffisol: 4-6% efficiency gain (IEC 61215)',
            'Ceraphene: Grade 5B adhesion, 5-7x durability (ASTM D3359)',
            'HD-G-PE: 30% barrier improvement (ASTM D3985)'
          ]
        }
      ],
      useWhen: 'Technical decision-makers, compliance/quality-focused buyers, first-time visitors with high skepticism'
    },
    awards: {
      name: 'Awards & Recognition',
      icon: Award,
      tagline: 'Showcase external validation and industry recognition',
      title: 'Recognized for Innovation. Awarded for Impact.',
      color: 'from-amber-600 to-orange-600',
      elements: [
        {
          category: 'Government Recognition',
          items: [
            'Startup India certification',
            'Telangana State Innovation recognition',
            'R&D tax incentive approval'
          ]
        },
        {
          category: 'Media Coverage',
          items: [
            'Featured in industry publications for commercialization achievement',
            'Conference speaker invitations',
            '"Bridging the Lab-to-Market Gap in Advanced Materials"'
          ]
        },
        {
          category: 'Academic Partnerships',
          items: [
            'Collaboration with research institutions on graphene research',
            'Joint development programs',
            'Published papers in materials science journals'
          ]
        }
      ],
      useWhen: 'Brand awareness campaigns, media/press pages, investor presentations'
    },
    'founder-credibility': {
      name: 'Founder Credibility',
      icon: Users,
      tagline: 'Leverage founder backgrounds to build trust',
      title: '15+ Years Materials Science R&D. Commercial Track Record Proven.',
      color: 'from-purple-600 to-pink-600',
      elements: [
        {
          category: 'Expertise & Background',
          items: [
            '15+ years in materials science R&D',
            'Education from premier institutions',
            'Previous experience at leading research organizations',
            'Deep expertise in graphene synthesis and nanomaterial dispersion'
          ]
        },
        {
          category: 'Why Founder Experience Matters',
          items: [
            'Lived the frustration of seeing breakthrough materials die in development',
            'Built the integrated platform they wish existed 15 years ago',
            'Proven track record: 4 products commercialized, 200+ installations'
          ]
        },
        {
          category: 'Mission-Driven Leadership',
          items: [
            'Solve the commercialization gap that kills 99% of innovations',
            'Make India a global hub for advanced materials',
            'Turn research into revenue, lab breakthroughs into market impact'
          ]
        }
      ],
      useWhen: 'About page, partnership inquiries, investor pitches, first-time brand introduction'
    },
    'traction': {
      name: 'Traction & Proof Points',
      icon: BarChart,
      tagline: 'Let results speak for credibility',
      title: '200+ Installations. 4 Products. Real Results.',
      color: 'from-green-600 to-emerald-600',
      elements: [
        {
          category: 'Commercial Traction',
          items: [
            '200+ successful product installations',
            '4 commercial products generating revenue',
            '5 products in development pipeline',
            '3 production facilities operational'
          ]
        },
        {
          category: 'Customer Impact',
          items: [
            '₹280/m³ average cost savings (Graphacrete)',
            '40% compressive strength improvement',
            '4-6% solar efficiency gains (Graffisol)',
            '5-7x coating durability (Ceraphene)',
            '30% barrier improvement (HD-G-PE)'
          ]
        },
        {
          category: 'Speed to Market',
          items: [
            '6-9 months typical development timeline',
            '100% product success rate (4/4 commercialized)',
            'Proven commercialization playbook'
          ]
        }
      ],
      useWhen: 'Homepage credibility section, case studies page, sales presentations, investor traction slides'
    },
    'testimonials': {
      name: 'Client Testimonials',
      icon: MessageSquare,
      tagline: 'Social proof through customer voices',
      title: 'What Our Partners Say',
      color: 'from-rose-600 to-red-600',
      elements: [
        {
          category: 'Construction Sector',
          items: [
            '"40% strength gains changed our bidding strategy. Graphacrete is now our standard for M30+ projects."',
            '₹280/m³ cost savings validated across multiple projects',
            'NABL test results gave us confidence to specify with confidence'
          ]
        },
        {
          category: 'Solar Energy',
          items: [
            '"Graffisol pays for itself in 18 months. 5.2% efficiency gain sustained over time."',
            '500kW solar farm performance validated',
            'ROI math is simple: 18-month payback, then pure upside'
          ]
        },
        {
          category: 'Industrial Manufacturing',
          items: [
            '"Ceraphene coatings still performing after months/years — 5-7x longer than previous solution"',
            'Downtime reduced significantly',
            'Maintenance costs down substantially'
          ]
        }
      ],
      useWhen: 'Product pages, case studies page, sales proposals, industry-specific landing pages'
    },
    'process': {
      name: 'Process Transparency',
      icon: FileCheck,
      tagline: 'Build trust through openness about how you work',
      title: 'From Synthesis to Deployment — Quality at Every Step',
      color: 'from-indigo-600 to-blue-600',
      elements: [
        {
          category: '5-Step Quality Process',
          items: [
            'Step 1: Synthesis & Production - CVD graphene, >99% purity, full traceability',
            'Step 2: Formulation & Optimization - Application-specific, iterative testing',
            'Step 3: NABL Validation - Third-party testing, standards compliance',
            'Step 4: Customer Pilot - Small-scale trial, data collection, success criteria',
            'Step 5: Full Deployment - Training, technical support, performance monitoring'
          ]
        },
        {
          category: 'Quality Guarantees',
          items: [
            'Performance guarantee: Meet NABL-validated specs or we troubleshoot at no cost',
            'Technical support: Dedicated support for first 90 days',
            'Documentation: Complete technical data sheets, test reports',
            'Compliance: All products meet relevant Indian and international standards'
          ]
        },
        {
          category: 'Transparency Commitments',
          items: [
            'Test data available: NABL test reports shared with customers',
            'Facility visits: Customers can tour production facilities',
            'Direct access: Speak directly with formulation chemists',
            'Case studies: Share anonymized performance data'
          ]
        }
      ],
      useWhen: 'Technical audiences, high-value B2B deals, quality-conscious buyers, partnership discussions'
    },
    'infrastructure': {
      name: 'Infrastructure & Facilities',
      icon: MapPin,
      tagline: 'Demonstrate operational scale and legitimacy',
      title: '3 Facilities. 1 NABL-Certified Lab. Complete Vertical Integration.',
      color: 'from-teal-600 to-cyan-600',
      elements: [
        {
          category: 'Facility 1: R&D & Validation Lab (Hyderabad)',
          items: [
            'NABL-certified testing laboratory',
            'Graphene synthesis (CVD equipment)',
            'Formulation development lab',
            'Analytical instruments (Raman, XRD, SEM)'
          ]
        },
        {
          category: 'Facility 2: Production Unit (Mahabubnagar)',
          items: [
            'High-volume production for construction sector',
            'Graphacrete and construction-related products',
            'Scalable capacity for expansion'
          ]
        },
        {
          category: 'Facility 3: Specialty Coatings (Warangal)',
          items: [
            'Graffisol (solar coating) production',
            'Ceraphene (ceramic coating)',
            'HD-G-PE (polyethylene films)',
            'Custom formulation capabilities'
          ]
        },
        {
          category: 'Why Multiple Facilities Matter',
          items: [
            'Redundancy: No single point of failure in supply chain',
            'Specialization: Each facility optimized for specific product types',
            'Scalability: Can expand without disrupting existing operations',
            'Customer Proximity: Closer to different regional markets'
          ]
        }
      ],
      useWhen: 'Partnership discussions, investor presentations, large-scale customer inquiries, company overview'
    },
    'compliance': {
      name: 'Compliance & Safety',
      icon: Shield,
      tagline: 'Reassure through regulatory compliance',
      title: 'Compliant. Safe. Responsible.',
      color: 'from-violet-600 to-purple-600',
      elements: [
        {
          category: 'Product Compliance',
          items: [
            'All products meet relevant IS (Indian Standards) codes',
            'Material safety data sheets (MSDS) for all products',
            'Environmental impact assessments completed',
            'Workplace safety protocols in place'
          ]
        },
        {
          category: 'Testing Standards',
          items: [
            'IS 456:2000 (Concrete specifications) - Graphacrete',
            'IEC 61215 (Solar panel testing) - Graffisol compatibility',
            'ASTM D3359 (Adhesion testing) - Ceraphene',
            'ASTM D3985 (Barrier properties) - HD-G-PE'
          ]
        },
        {
          category: 'Safety & Environmental Responsibility',
          items: [
            'Personal protective equipment (PPE) mandatory',
            'Regular safety training for all facility staff',
            'Waste management per PCB guidelines',
            'Energy-efficient production processes'
          ]
        }
      ],
      useWhen: 'Large enterprise customers, government/institutional buyers, export inquiries, partnership due diligence'
    },
    'partnerships': {
      name: 'Partnership & Investor Backing',
      icon: Handshake,
      tagline: 'Show backing and strategic relationships',
      title: 'Backed by Believers. Partnered with Leaders.',
      color: 'from-fuchsia-600 to-pink-600',
      elements: [
        {
          category: 'Strategic Partnerships',
          items: [
            'Academic collaborations: Joint research on graphene applications',
            'Industry partnerships: Co-development programs',
            'Technology partners: Advanced characterization equipment suppliers'
          ]
        },
        {
          category: 'Government Support',
          items: [
            'Startup India recognized',
            'State innovation fund support',
            'R&D tax incentives approved'
          ]
        },
        {
          category: 'Network & Community',
          items: [
            'Industry association memberships',
            'Materials science society participation',
            'Speaking engagements at industry conferences',
            'Panelist at industry forums'
          ]
        }
      ],
      useWhen: 'Investor pitch decks, partnership proposals, about page credibility section, press/media pages'
    }
  };

  const currentFramework = trustFrameworks[selectedFramework];
  const Icon = currentFramework.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Trust & Credibility Building</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            9 comprehensive frameworks for building visitor confidence through strategic credibility markers
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Layer multiple trust elements throughout the user journey
          </p>
        </div>

        {/* Framework Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-black mb-4">Select Trust Framework</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(trustFrameworks).map(([key, framework]) => {
              const FrameworkIcon = framework.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedFramework(key)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedFramework === key
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <FrameworkIcon className="w-5 h-5 mb-2" />
                  <div className="text-sm font-medium">{framework.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Framework Preview */}
        <motion.div
          key={selectedFramework}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          {/* Framework Header */}
          <div className={`bg-gradient-to-r ${currentFramework.color} text-white p-12`}>
            <div className="max-w-4xl mx-auto text-center">
              <Icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
              <h2 className="text-3xl font-bold mb-3">{currentFramework.name}</h2>
              <p className="text-lg opacity-90 mb-4">{currentFramework.tagline}</p>
              <div className="text-2xl font-bold">{currentFramework.title}</div>
            </div>
          </div>

          {/* Framework Content */}
          <div className="p-8">
            <div className="space-y-6">
              {currentFramework.elements.map((element, index) => (
                <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                  <h3 className="text-lg font-semibold text-black mb-4">{element.category}</h3>
                  <ul className="space-y-2">
                    {element.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-neutral-700">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Use When */}
            <div className="mt-6 bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Use When:</h3>
              <p className="text-blue-800 text-sm">{currentFramework.useWhen}</p>
            </div>
          </div>
        </motion.div>

        {/* Implementation Matrix */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Trust Element Priority by Page</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Page</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Primary Trust Element</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Secondary</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Tertiary</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 font-medium">Homepage</td>
                  <td className="px-4 py-3 text-neutral-600">Traction & Proof Points</td>
                  <td className="px-4 py-3 text-neutral-600">Certification</td>
                  <td className="px-4 py-3 text-neutral-600">Awards</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 font-medium">About</td>
                  <td className="px-4 py-3 text-neutral-600">Founder Credibility</td>
                  <td className="px-4 py-3 text-neutral-600">Awards & Recognition</td>
                  <td className="px-4 py-3 text-neutral-600">Partnerships</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Products</td>
                  <td className="px-4 py-3 text-neutral-600">NABL Validation</td>
                  <td className="px-4 py-3 text-neutral-600">Client Testimonials</td>
                  <td className="px-4 py-3 text-neutral-600">Process Quality</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Technology</td>
                  <td className="px-4 py-3 text-neutral-600">Process Transparency</td>
                  <td className="px-4 py-3 text-neutral-600">Certification</td>
                  <td className="px-4 py-3 text-neutral-600">Infrastructure</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Partnership</td>
                  <td className="px-4 py-3 text-neutral-600">Traction</td>
                  <td className="px-4 py-3 text-neutral-600">Investor Backing</td>
                  <td className="px-4 py-3 text-neutral-600">Compliance</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Industries</td>
                  <td className="px-4 py-3 text-neutral-600">Case Studies</td>
                  <td className="px-4 py-3 text-neutral-600">Traction</td>
                  <td className="px-4 py-3 text-neutral-600">Certification</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
