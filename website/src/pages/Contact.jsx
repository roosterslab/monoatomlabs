import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { Mail, Phone, Globe, MapPin, Briefcase, HelpCircle, Handshake, MessageSquare, FileCheck } from 'lucide-react';
import { contentData } from '../utils/contentData';

const ContactBox = ({ icon: Icon, title, content, href }) => (
  <div className="p-8 bg-white border border-neutral-200 shadow-sm hover:border-neutral-300 transition-colors">
    <Icon className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
    <h3 className="text-xl font-display font-medium text-neutral-900 mb-2">{title}</h3>
    {href ? (
      <a href={href} className="text-lg text-neutral-600 hover:text-neutral-900 transition-colors">
        {content}
      </a>
    ) : (
      <p className="text-lg text-neutral-600 leading-relaxed max-w-xs">{content}</p>
    )}
  </div>
);

const HelpCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-neutral-50 border border-neutral-200">
    <Icon className="w-6 h-6 text-neutral-700 mb-4" strokeWidth={1.5} />
    <h3 className="text-lg font-medium text-neutral-900 mb-2">{title}</h3>
    <p className="text-sm text-neutral-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const Contact = () => {
  const data = contentData.contact;

  return (
    <div className="min-h-screen">
      <PageHeader
        category="Connect"
        title="Contact Us"
        subtitle="Get in touch with our team for product inquiries, technical support, or partnership opportunities."
      />

      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ContactBox
              icon={Mail}
              title="Email Us"
              content={data.email}
              href={`mailto:${data.email}`}
            />
            <ContactBox
              icon={Phone}
              title="Call Us"
              content={data.phone}
              href={`tel:${data.phone}`}
            />
            <ContactBox
              icon={MapPin}
              title="Visit Us"
              content={data.address}
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="How Can We Help?" theme="light" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <HelpCard
              icon={Briefcase}
              title="Product Inquiries"
              description="Learn more about our products, pricing, specifications, and ordering information."
            />
            <HelpCard
              icon={HelpCircle}
              title="Technical Support"
              description="Get assistance with product applications, formulations, and implementation."
            />
            <HelpCard
              icon={Handshake}
              title="Partnership Opportunities"
              description="Explore JV-SPV models, technology licensing, and collaboration opportunities."
            />
            <HelpCard
              icon={MessageSquare}
              title="General Inquiries"
              description="Any other questions about Monoatom Labs, our technology, or capabilities."
            />
          </div>
        </div>
      </section>

      {/* --- PARTNERSHIP CONTENT --- */}
      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="02" title="Collaborative Engagement Models" theme="light" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* JV Model */}
            <div className="bg-neutral-50 p-10 border border-neutral-200 shadow-sm hover:border-neutral-300 transition-colors">
              <div className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center mb-8 rounded-sm">
                <Handshake className="w-7 h-7 text-neutral-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">JV – SPV Model</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                We partner with select clients through Joint Ventures structured via Special Purpose Vehicles (SPVs) to co-develop, manufacture, and commercialise graphene-enabled products. This model enables shared risk, shared IP value creation, and long-term strategic alignment.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Combine Deep-Tech Expertise with Mfg Scale
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Shared IP Value Creation
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Strategic Market Alignment
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="primary" theme="light" className="w-full justify-center">
                  Discuss JV Opportunity
                </Button>
              </Link>
            </div>

            {/* Licensing Model */}
            <div className="bg-neutral-50 p-10 border border-neutral-200 shadow-sm hover:border-neutral-300 transition-colors">
              <div className="w-14 h-14 bg-white border border-neutral-200 flex items-center justify-center mb-8 rounded-sm">
                <FileCheck className="w-7 h-7 text-neutral-700" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">Technology Licensing</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                For faster capital-efficient deployment, Monoatom Labs offers technology licensing of its proprietary formulations, processes, and application-specific IP. This allows partners to rapidly integrate graphene innovations into existing production lines.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Rapid Production Integration
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Royalty & Technical Support Framework
                </li>
                <li className="flex items-center text-neutral-700">
                  <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                  Application-Specific IP Access
                </li>
              </ul>
              <Link to="/contact">
                <Button variant="secondary" theme="light" className="w-full justify-center">
                  Explore Licensing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-medium text-neutral-900 mb-6">Why Partner With Us?</h2>
          <p className="text-lg text-neutral-600 mb-12">
            Gain access to the world's most potential-rich material through a team that understands how to industrialize it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Proven Tech</h4>
              <p className="text-sm text-neutral-500">Validated products, not just lab concepts.</p>
            </div>
            <div className="bg-white p-6 border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Market Ready</h4>
              <p className="text-sm text-neutral-500">Solutions for large, existing markets.</p>
            </div>
            <div className="bg-white p-6 border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">Scalable</h4>
              <p className="text-sm text-neutral-500">Processes designed for mass manufacturing.</p>
            </div>
          </div>
        </div>
      </section>
      {/* --------------------------- */}

      {/* Business Hours */}
      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-3xl mx-auto text-center bg-white border border-neutral-200 p-10 shadow-sm">
          <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">Business Hours</h3>
          <p className="text-lg text-neutral-600 mb-2">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
          <p className="text-sm text-neutral-500">We typically respond to inquiries within 24-48 hours</p>
        </div>
      </section>

      {/* Quick Links & CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-display font-medium text-neutral-900 mb-6">Let's Build the Future Together</h2>
          <p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
            Whether you're looking to enhance existing products, develop breakthrough solutions, or license proven technologies, we're here to help.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`mailto:${data.email}`}>
              <Button variant="primary" theme="light" className="h-12 px-8">
                Send Email
              </Button>
            </a>
            <a href={`tel:${data.phone}`}>
              <Button variant="secondary" theme="light" className="h-12 px-8">
                Call Us
              </Button>
            </a>
          </div>

          <div className="mt-16 pt-16 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/products" className="text-neutral-600 hover:text-neutral-900 font-medium text-sm p-4 hover:bg-neutral-50 transition-colors">
              Explore Products
            </Link>
            <Link to="/about" className="text-neutral-600 hover:text-neutral-900 font-medium text-sm p-4 hover:bg-neutral-50 transition-colors">
              About Monoatom
            </Link>
            <Link to="/technology" className="text-neutral-600 hover:text-neutral-900 font-medium text-sm p-4 hover:bg-neutral-50 transition-colors">
              Our Technology
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
