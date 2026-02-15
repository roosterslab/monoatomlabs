import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Briefcase, HelpCircle, Handshake, MessageSquare, FileCheck, ArrowRight, Clock, Globe, Send, User, Building, CheckCircle } from 'lucide-react';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import { contentData } from '../utils/contentData';

const ContactBox = ({ icon: Icon, title, content, href, subtext }) => (
  <div className="group p-8 bg-white border border-neutral-200 rounded-2xl hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full">
    <div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-50 group-hover:border-blue-100">
      <Icon className="w-6 h-6 text-neutral-600 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
    </div>
    <h3 className="text-xl font-display font-medium text-neutral-900 mb-2">{title}</h3>

    {href ? (
      <a href={href} className="text-lg text-neutral-600 hover:text-blue-600 transition-colors font-medium block mb-1">
        {content}
      </a>
    ) : (
      <p className="text-lg text-neutral-600 leading-relaxed max-w-xs font-medium mb-1">{content}</p>
    )}

    {subtext && <p className="text-sm text-neutral-400">{subtext}</p>}
  </div>
);

const FAQItem = ({ question, answer }) => (
  <div className="mb-6 last:mb-0">
    <h4 className="font-bold text-neutral-900 mb-2 flex items-start gap-2">
      <HelpCircle className="w-4 h-4 text-blue-500 mt-1 shrink-0" />
      {question}
    </h4>
    <p className="text-sm text-neutral-500 leading-relaxed pl-6">{answer}</p>
  </div>
);

const Contact = () => {
  const data = contentData.contact;
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <PageHeader
        category="Connect"
        title="Contact Us"
        subtitle="Get in touch with our team for product inquiries, technical support, or partnership opportunities."
      />

      {/* Main Content Container - Light Mode */}
      <div className="bg-white border-t border-neutral-200 relative z-10">

        {/* Primary Contact Grid */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 -mt-32 relative z-20">
              <ContactBox
                icon={Mail}
                title="Email Us"
                content={data.email}
                href={`mailto:${data.email}`}
                subtext="Response within 24 hours"
              />
              <ContactBox
                icon={Phone}
                title="Call Us"
                content={data.phone}
                href={`tel:${data.phone}`}
                subtext="Mon-Fri, 9am - 6pm IST"
              />
              <ContactBox
                icon={MapPin}
                title="Visit HQ"
                content={data.address}
                subtext="Ahmedabad, Gujarat, India"
              />
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-12 px-6 border-b border-neutral-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              {/* Left Col: Contact Form */}
              <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-200">
                <h2 className="text-3xl font-display font-medium text-neutral-900 mb-2">Send us a Message</h2>
                <p className="text-neutral-500 mb-8 font-light">Fill out the form below and we'll route your inquiry to the right expert.</p>

                {formState === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                    <p className="text-green-700">Thank you for contacting Monoatom Labs. We will be in touch shortly.</p>
                    <button onClick={() => setFormState('idle')} className="mt-6 text-sm font-bold text-green-800 underline">Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Full Name</label>
                        <div className="relative">
                          <User className="absolute top-3.5 left-4 w-5 h-5 text-neutral-400" />
                          <input type="text" required className="w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="John Doe" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Organization</label>
                        <div className="relative">
                          <Building className="absolute top-3.5 left-4 w-5 h-5 text-neutral-400" />
                          <input type="text" className="w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Company Name" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Email Address</label>
                      <div className="relative">
                        <Mail className="absolute top-3.5 left-4 w-5 h-5 text-neutral-400" />
                        <input type="email" required className="w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Nature of Inquiry</label>
                      <div className="relative">
                        <Briefcase className="absolute top-3.5 left-4 w-5 h-5 text-neutral-400" />
                        <select className="w-full bg-white border border-neutral-200 rounded-xl py-3 pl-12 pr-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none">
                          <option>Product Inquiry</option>
                          <option>Partnership / JV</option>
                          <option>Technical Support</option>
                          <option>Investment</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-neutral-500 uppercase tracking-wider">Message</label>
                      <textarea required rows={4} className="w-full bg-white border border-neutral-200 rounded-xl p-4 text-neutral-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="How can we help you today?"></textarea>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full justify-center py-4 text-base"
                      disabled={formState === 'submitting'}
                    >
                      {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>

              {/* Right Col: FAQ & Info */}
              <div>
                <div className="mb-12">
                  <h3 className="text-xl font-display font-medium text-neutral-900 mb-6">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    <FAQItem question="What is your typical lead time for product samples?" answer="Standard samples are dispatched within 3-5 business days. Custom formulations may take 2-3 weeks depending on complexity." />
                    <FAQItem question="Do you offer technical support for integration?" answer="Yes, our application engineering team provides full support to integrate our additives into your existing production lines." />
                    <FAQItem question="Are your products certified?" answer="Yes, our core products like Graphacrete are NABL certified. Detailed MSDS and TDS are available upon request." />
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-blue-800">
                    <div className="flex justify-between border-b border-blue-200 pb-2">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM IST</span>
                    </div>
                    <div className="flex justify-between border-b border-blue-200 pb-2">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 2:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-blue-600">
                    * We typically respond to email inquiries within 24 hours, even on weekends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="py-24 px-6 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-bold tracking-wider uppercase mb-6">
                <Globe className="w-3 h-3" />
                Strategic Collaboration
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-neutral-900 mb-6">Engagement Models</h2>
              <p className="text-lg text-neutral-500 font-light">We offer flexible partnership structures designed to accelerate commercialization and maximize value.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* JV Model */}
              <div className="bg-white p-10 rounded-3xl border border-neutral-200 shadow-sm hover:border-blue-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">
                  <Handshake className="w-7 h-7 text-neutral-700 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">JV – SPV Model</h3>
                <p className="text-neutral-500 mb-8 leading-relaxed font-light">
                  Co-develop, manufacture, and commercialise graphene-enabled products through Joint Ventures.
                  Shared risk, shared IP value creation, and long-term strategic alignment.
                </p>
                <Link to="/contact">
                  <Button variant="primary" className="w-full justify-center">
                    Discuss JV Opportunity
                  </Button>
                </Link>
              </div>

              {/* Licensing Model */}
              <div className="bg-white p-10 rounded-3xl border border-neutral-200 shadow-sm hover:border-purple-200 hover:shadow-lg transition-all duration-300 group">
                <div className="w-14 h-14 bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-8 rounded-2xl group-hover:bg-purple-50 group-hover:border-purple-100 transition-colors">
                  <FileCheck className="w-7 h-7 text-neutral-700 group-hover:text-purple-600 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">Technology Licensing</h3>
                <p className="text-neutral-500 mb-8 leading-relaxed font-light">
                  Rapidly integrate graphene innovations into existing production lines.
                  Access proprietary formulations, processes, and application-specific IP with full technical support.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full justify-center">
                    Explore Licensing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
