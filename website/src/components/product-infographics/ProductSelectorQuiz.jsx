import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle2, ArrowRight, ArrowLeft, RefreshCw, Sparkles, Target } from 'lucide-react';

const ProductSelectorQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 'industry',
      question: 'What industry are you in?',
      options: [
        { value: 'construction', label: 'Construction & Infrastructure', icon: '🏗️' },
        { value: 'solar', label: 'Solar Energy & Renewables', icon: '☀️' },
        { value: 'automotive', label: 'Automotive & Coatings', icon: '🚗' },
        { value: 'manufacturing', label: 'Polymer & Manufacturing', icon: '🏭' },
      ],
    },
    {
      id: 'goal',
      question: 'What is your primary goal?',
      options: [
        { value: 'strength', label: 'Increase Strength & Durability', icon: '💪' },
        { value: 'efficiency', label: 'Improve Energy Efficiency', icon: '⚡' },
        { value: 'cost', label: 'Reduce Costs', icon: '💰' },
        { value: 'performance', label: 'Enhance Material Performance', icon: '🎯' },
      ],
    },
    {
      id: 'scale',
      question: 'What is your project scale?',
      options: [
        { value: 'small', label: 'Small Scale (Pilot/Testing)', icon: '📦' },
        { value: 'medium', label: 'Medium Scale (Commercial)', icon: '🏢' },
        { value: 'large', label: 'Large Scale (Industrial)', icon: '🏭' },
        { value: 'enterprise', label: 'Enterprise (Multi-site)', icon: '🌍' },
      ],
    },
    {
      id: 'priority',
      question: 'What matters most to you?',
      options: [
        { value: 'roi', label: 'Fast ROI & Payback', icon: '📈' },
        { value: 'sustainability', label: 'Environmental Impact', icon: '🌱' },
        { value: 'quality', label: 'Premium Quality', icon: '⭐' },
        { value: 'innovation', label: 'Cutting-edge Technology', icon: '🚀' },
      ],
    },
    {
      id: 'timeline',
      question: 'When do you need results?',
      options: [
        { value: 'immediate', label: 'Immediate (Days-Weeks)', icon: '⚡' },
        { value: 'short', label: 'Short-term (1-3 Months)', icon: '📅' },
        { value: 'medium', label: 'Medium-term (3-12 Months)', icon: '📆' },
        { value: 'long', label: 'Long-term (1+ Years)', icon: '🗓️' },
      ],
    },
  ];

  const productRecommendations = {
    graphacrete: {
      name: 'Graphacrete',
      tagline: 'High-Performance Concrete Additive',
      icon: '🏗️',
      color: 'from-brand-500 to-teal-500',
      benefits: [
        '40-50% strength increase',
        '15-20% cement savings',
        '30-45% lower water permeability',
        'Enhanced durability',
      ],
      bestFor: ['Construction', 'Infrastructure', 'Cost reduction', 'Sustainability'],
      roi: '2-3 months payback',
    },
    graffisol: {
      name: 'Graffisol',
      tagline: 'Solar Panel Performance Coating',
      icon: '☀️',
      color: 'from-orange-500 to-yellow-500',
      benefits: [
        '10-12% energy output gain',
        '50-60% soiling reduction',
        '5-6°C panel cooling',
        'Faster cleaning cycles',
      ],
      bestFor: ['Solar energy', 'Energy efficiency', 'Fast ROI', 'Performance'],
      roi: '14-18 months payback',
    },
    ceraphene: {
      name: 'Ceraphene',
      tagline: 'Premium Ceramic Coating',
      icon: '✨',
      color: 'from-purple-500 to-pink-500',
      benefits: [
        '60-70% cost savings vs competitors',
        '9H+ hardness rating',
        '3-4+ years durability',
        'Hydrophobic & scratch-resistant',
      ],
      bestFor: ['Automotive', 'Premium quality', 'Cost savings', 'Mass market'],
      roi: 'Immediate cost savings',
    },
    hdgpe: {
      name: 'HD-G-PE',
      tagline: 'Graphene Polymer Enhancer',
      icon: '🧬',
      color: 'from-cyan-500 to-blue-500',
      benefits: [
        '20× elongation improvement',
        '30% tensile strength increase',
        '20% longer product lifespan',
        'Superior flexibility',
      ],
      bestFor: ['Manufacturing', 'Polymer enhancement', 'Innovation', 'Performance'],
      roi: '6-9 months payback',
    },
  };

  const calculateRecommendation = () => {
    const scores = {
      graphacrete: 0,
      graffisol: 0,
      ceraphene: 0,
      hdgpe: 0,
    };

    // Industry scoring
    if (answers.industry === 'construction') scores.graphacrete += 3;
    if (answers.industry === 'solar') scores.graffisol += 3;
    if (answers.industry === 'automotive') scores.ceraphene += 3;
    if (answers.industry === 'manufacturing') scores.hdgpe += 3;

    // Goal scoring
    if (answers.goal === 'strength') scores.graphacrete += 2;
    if (answers.goal === 'efficiency') scores.graffisol += 2;
    if (answers.goal === 'cost') {
      scores.ceraphene += 2;
      scores.graphacrete += 1;
    }
    if (answers.goal === 'performance') scores.hdgpe += 2;

    // Priority scoring
    if (answers.priority === 'roi') {
      scores.graphacrete += 2;
      scores.graffisol += 1;
    }
    if (answers.priority === 'sustainability') scores.graphacrete += 2;
    if (answers.priority === 'quality') scores.ceraphene += 2;
    if (answers.priority === 'innovation') scores.hdgpe += 2;

    // Timeline scoring
    if (answers.timeline === 'immediate') {
      scores.ceraphene += 1;
      scores.graffisol += 1;
    }

    // Find highest score
    const maxScore = Math.max(...Object.values(scores));
    const recommended = Object.keys(scores).find((key) => scores[key] === maxScore);

    return productRecommendations[recommended];
  };

  const handleAnswer = (value) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value });

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResult(true);
      }, 300);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const recommendation = showResult ? calculateRecommendation() : null;

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <HelpCircle className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Product Finder
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Find Your Perfect Product
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Answer 5 quick questions and we'll recommend the best Monoatom solution for your needs
          </p>
        </motion.div>

        {!showResult ? (
          <>
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-mono text-neutral-400">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-mono text-brand-400">{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-neutral-800 rounded-sm overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-gradient-to-r from-brand-500 to-teal-500"
                />
              </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-8 mb-6"
              >
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-8 text-center">
                  {questions[currentQuestion].question}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onClick={() => handleAnswer(option.value)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-6 rounded-sm border transition-all text-left ${
                        answers[questions[currentQuestion].id] === option.value
                          ? 'bg-brand-500/20 border-brand-500/50 shadow-[0_0_20px_rgba(13,148,136,0.3)]'
                          : 'bg-neutral-800/50 border-neutral-700 hover:bg-neutral-800 hover:border-brand-500/30'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{option.icon}</div>
                        <div className="flex-grow">
                          <div className="text-white font-display font-bold mb-1">{option.label}</div>
                        </div>
                        {answers[questions[currentQuestion].id] === option.value && (
                          <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0" />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={goBack}
                disabled={currentQuestion === 0}
                className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2 text-white font-mono"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>

              <button
                onClick={restartQuiz}
                className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 hover:border-red-500/30 transition-all inline-flex items-center gap-2 text-neutral-400 hover:text-red-400 font-mono"
              >
                <RefreshCw className="w-4 h-4" />
                Restart
              </button>
            </div>
          </>
        ) : (
          // Results
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Recommendation Card */}
            <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm overflow-hidden mb-8">
              {/* Header */}
              <div className={`bg-gradient-to-r ${recommendation.color} p-8 text-center`}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="text-6xl mb-4"
                >
                  {recommendation.icon}
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {recommendation.name}
                </h3>
                <p className="text-lg text-white/90 font-mono">{recommendation.tagline}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Best For */}
                <div className="mb-8">
                  <h4 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5 text-brand-400" />
                    Perfect For
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {recommendation.bestFor.map((item, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + idx * 0.1 }}
                        className="px-4 py-2 bg-brand-500/20 border border-brand-500/30 rounded-sm text-brand-400 font-mono text-sm"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-8">
                  <h4 className="text-xl font-display font-bold text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-brand-400" />
                    Key Benefits
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {recommendation.benefits.map((benefit, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-neutral-800/50 rounded-sm border border-neutral-700"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-200">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* ROI */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-sm p-6 text-center"
                >
                  <div className="text-sm font-mono text-neutral-400 uppercase mb-2">Expected ROI</div>
                  <div className="text-2xl font-mono font-bold text-green-400">{recommendation.roi}</div>
                </motion.div>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={restartQuiz}
                className="px-8 py-4 bg-neutral-900 border border-neutral-800 rounded-sm hover:bg-neutral-800 hover:border-neutral-700 transition-all inline-flex items-center justify-center gap-2 text-white font-mono"
              >
                <RefreshCw className="w-5 h-5" />
                Retake Quiz
              </button>
              <button className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-mono font-bold rounded-sm transition-all border border-brand-400 inline-flex items-center justify-center gap-2">
                Learn More About {recommendation.name}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductSelectorQuiz;
