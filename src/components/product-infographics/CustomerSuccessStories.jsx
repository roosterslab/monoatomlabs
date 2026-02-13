import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, TrendingUp, Award, Quote, ChevronLeft, ChevronRight, Star, CheckCircle2 } from 'lucide-react';

const CustomerSuccessStories = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const successStories = [
    {
      id: 1,
      company: 'L&T Construction',
      industry: 'construction',
      logo: 'L&T',
      product: 'Graphacrete',
      project: 'Commercial Tower - Mumbai',
      challenge: 'Required M50 grade concrete for high-rise construction while minimizing costs and environmental impact.',
      solution: 'Implemented Graphacrete additive at 0.08% dosage, achieving M50 performance with reduced cement content.',
      results: [
        { metric: 'Strength Increase', value: '+48%', icon: TrendingUp },
        { metric: 'Cement Savings', value: '18%', icon: CheckCircle2 },
        { metric: 'Cost Reduction', value: '₹12L', icon: TrendingUp },
        { metric: 'Project Timeline', value: 'On Time', icon: CheckCircle2 },
      ],
      testimonial: 'Graphacrete exceeded our expectations. We achieved M50 grade performance while saving 18% on cement costs. The durability improvements give us confidence in long-term structural integrity.',
      author: 'Rajesh Kumar',
      position: 'Senior Project Manager',
      rating: 5,
      year: 2024,
    },
    {
      id: 2,
      company: 'Tata Power Solar',
      industry: 'energy',
      logo: 'Tata',
      product: 'Graffisol',
      project: '50 MW Solar Farm - Rajasthan',
      challenge: 'High soiling losses and temperature-induced efficiency drops in desert environment reducing energy output.',
      solution: 'Applied Graffisol coating to 180,000 solar panels across the 50 MW installation.',
      results: [
        { metric: 'Energy Gain', value: '+11.2%', icon: TrendingUp },
        { metric: 'Soiling Reduction', value: '58%', icon: CheckCircle2 },
        { metric: 'Annual Revenue', value: '+₹2.8Cr', icon: TrendingUp },
        { metric: 'ROI Period', value: '14 months', icon: CheckCircle2 },
      ],
      testimonial: 'Graffisol transformed our solar farm performance. The 11% energy gain translates to significant revenue increase, and reduced cleaning frequency saves operational costs. Best investment we made.',
      author: 'Priya Sharma',
      position: 'Operations Director',
      rating: 5,
      year: 2025,
    },
    {
      id: 3,
      company: 'Maruti Suzuki',
      industry: 'automotive',
      logo: 'Maruti',
      product: 'Ceraphene',
      project: 'Premium Car Coating Line',
      challenge: 'Needed affordable, high-quality ceramic coating for premium segment without passing excessive costs to customers.',
      solution: 'Integrated Ceraphene into premium trim packages, replacing expensive imported coatings.',
      results: [
        { metric: 'Cost Savings', value: '68%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '97%', icon: Star },
        { metric: 'Units Coated', value: '24,000+', icon: CheckCircle2 },
        { metric: 'Quality Rating', value: '9H+', icon: Award },
      ],
      testimonial: 'Ceraphene allowed us to offer premium ceramic protection at competitive prices. Customer feedback has been exceptional, and the 68% cost savings improved our margins significantly.',
      author: 'Amit Desai',
      position: 'Head of Product Development',
      rating: 5,
      year: 2024,
    },
    {
      id: 4,
      company: 'Reliance Industries',
      industry: 'manufacturing',
      logo: 'RIL',
      product: 'HD-G-PE',
      project: 'HDPE Pipe Manufacturing',
      challenge: 'Required stronger, more flexible HDPE pipes for industrial applications without redesigning production process.',
      solution: 'Incorporated HD-G-PE masterbatch into existing HDPE formulation for pipe extrusion.',
      results: [
        { metric: 'Elongation', value: '20× better', icon: TrendingUp },
        { metric: 'Tensile Strength', value: '+32%', icon: CheckCircle2 },
        { metric: 'Product Lifespan', value: '+22%', icon: TrendingUp },
        { metric: 'Market Premium', value: '+18%', icon: Award },
      ],
      testimonial: 'HD-G-PE gave our pipes a competitive edge. The dramatic improvement in elongation and strength allows us to command premium pricing while offering superior products to our customers.',
      author: 'Dr. Vikram Patel',
      position: 'Chief Technology Officer',
      rating: 5,
      year: 2024,
    },
    {
      id: 5,
      company: 'Shapoorji Pallonji',
      industry: 'construction',
      logo: 'SP',
      product: 'Graphacrete',
      project: 'Infrastructure Bridge Project',
      challenge: 'Bridge construction in coastal area requiring exceptional durability and corrosion resistance.',
      solution: 'Used Graphacrete in all structural elements to enhance strength and reduce water permeability.',
      results: [
        { metric: 'Water Permeability', value: '-42%', icon: CheckCircle2 },
        { metric: 'Design Life', value: '+25 years', icon: TrendingUp },
        { metric: 'Maintenance Cost', value: '-35%', icon: TrendingUp },
        { metric: 'Awards Won', value: '2', icon: Award },
      ],
      testimonial: 'For coastal infrastructure, Graphacrete is a game-changer. The reduced permeability means significantly less corrosion risk, extending the bridge design life by decades.',
      author: 'Arjun Menon',
      position: 'Principal Engineer',
      rating: 5,
      year: 2025,
    },
    {
      id: 6,
      company: 'Azure Power',
      industry: 'energy',
      logo: 'Azure',
      product: 'Graffisol',
      project: 'Floating Solar Installation',
      challenge: 'High humidity and water-related soiling affecting floating solar panels more than ground-mounted systems.',
      solution: 'Applied Graffisol coating specifically formulated for aquatic environments.',
      results: [
        { metric: 'Performance Gain', value: '+12.4%', icon: TrendingUp },
        { metric: 'Cleaning Frequency', value: '-75%', icon: CheckCircle2 },
        { metric: 'Annual Savings', value: '₹45L', icon: TrendingUp },
        { metric: 'Payback', value: '11 months', icon: CheckCircle2 },
      ],
      testimonial: 'Graffisol solved our floating solar challenges. The coating handles humidity and water exposure exceptionally well, and the energy gains exceeded our projections.',
      author: 'Neha Kapoor',
      position: 'Chief Operating Officer',
      rating: 5,
      year: 2025,
    },
  ];

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building2 },
    { id: 'construction', name: 'Construction', icon: Building2 },
    { id: 'energy', name: 'Energy & Solar', icon: TrendingUp },
    { id: 'automotive', name: 'Automotive', icon: Award },
    { id: 'manufacturing', name: 'Manufacturing', icon: Building2 },
  ];

  const filteredStories = selectedIndustry === 'all'
    ? successStories
    : successStories.filter(story => story.industry === selectedIndustry);

  const currentStory = filteredStories[currentStoryIndex];

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  // Reset index when changing filters
  React.useEffect(() => {
    setCurrentStoryIndex(0);
  }, [selectedIndustry]);

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <Award className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Real-World Impact
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Customer Success Stories
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            Discover how leading companies are achieving breakthrough results with Monoatom products
          </p>

          {/* Industry Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-3 rounded-sm font-mono font-semibold transition-all border inline-flex items-center gap-2 ${
                    selectedIndustry === industry.id
                      ? 'bg-brand-500 text-white border-brand-400'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {industry.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Story Carousel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedIndustry}-${currentStoryIndex}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Story Card */}
            <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm overflow-hidden">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-brand-500/20 to-purple-500/20 border-b border-neutral-800 p-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/10 border border-white/20 rounded-sm flex items-center justify-center backdrop-blur">
                      <span className="text-xl font-bold text-white">{currentStory.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-1">
                        {currentStory.company}
                      </h3>
                      <p className="text-neutral-400 font-mono text-sm">{currentStory.project}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-4 py-2 bg-brand-500/20 border border-brand-500/30 rounded-sm">
                      <span className="text-brand-400 font-mono font-bold text-sm">{currentStory.product}</span>
                    </div>
                    <div className="px-4 py-2 bg-neutral-800/80 border border-neutral-700 rounded-sm">
                      <span className="text-neutral-300 font-mono text-sm">{currentStory.year}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                {/* Challenge & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-display font-bold text-red-400 mb-3">Challenge</h4>
                    <p className="text-neutral-300 leading-relaxed">{currentStory.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-green-400 mb-3">Solution</h4>
                    <p className="text-neutral-300 leading-relaxed">{currentStory.solution}</p>
                  </div>
                </div>

                {/* Results Grid */}
                <div className="mb-8">
                  <h4 className="text-lg font-display font-bold text-white mb-4">Results Achieved</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {currentStory.results.map((result, idx) => {
                      const Icon = result.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="bg-neutral-800/50 border border-neutral-700 rounded-sm p-4 text-center hover:border-brand-500/30 transition-all"
                        >
                          <Icon className="w-6 h-6 text-brand-400 mx-auto mb-2" />
                          <div className="text-2xl font-mono font-bold text-white mb-1">{result.value}</div>
                          <div className="text-xs text-neutral-400 font-mono">{result.metric}</div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gradient-to-br from-brand-500/10 to-purple-500/10 border border-brand-500/20 rounded-sm p-6">
                  <Quote className="w-8 h-8 text-brand-400/40 mb-4" />
                  <p className="text-lg text-neutral-200 leading-relaxed mb-4 italic">
                    "{currentStory.testimonial}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-bold text-white">{currentStory.author}</div>
                      <div className="text-sm text-neutral-400 font-mono">{currentStory.position}</div>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(currentStory.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevStory}
                disabled={filteredStories.length <= 1}
                className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 hover:border-brand-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 text-white font-mono"
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {filteredStories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStoryIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentStoryIndex ? 'bg-brand-400 w-8' : 'bg-neutral-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextStory}
                disabled={filteredStories.length <= 1}
                className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 hover:border-brand-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 text-white font-mono"
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8 backdrop-blur"
        >
          <h3 className="text-2xl font-display font-bold text-white text-center mb-6">
            Collective Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-mono font-bold text-brand-400 mb-2">127+</div>
              <div className="text-sm text-neutral-400 font-mono uppercase">Success Stories</div>
            </div>
            <div>
              <div className="text-4xl font-mono font-bold text-brand-400 mb-2">98%</div>
              <div className="text-sm text-neutral-400 font-mono uppercase">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-4xl font-mono font-bold text-brand-400 mb-2">₹450Cr+</div>
              <div className="text-sm text-neutral-400 font-mono uppercase">Customer Savings</div>
            </div>
            <div>
              <div className="text-4xl font-mono font-bold text-brand-400 mb-2">15</div>
              <div className="text-sm text-neutral-400 font-mono uppercase">Industries Served</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomerSuccessStories;
