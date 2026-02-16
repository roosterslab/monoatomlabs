import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { ArrowRight, Box, Sun, ShieldCheck, Layers, FlaskConical } from 'lucide-react';
import { products } from '../../data/content';

const ProductCard = ({ name, subtitle, highlight, icon: Icon, path, image }) => (
  <Link to={path} className="group block h-full">
    <div className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-blue-300 hover:shadow-xl">
      {image && (
        <div className="w-full h-80 overflow-hidden bg-neutral-50 p-8 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 rounded-lg flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
            <Icon className="w-6 h-6 text-neutral-600 group-hover:text-blue-600 transition-colors" strokeWidth={1.5} />
          </div>
          <div className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs text-blue-700 font-semibold uppercase tracking-wide">
            {highlight}
          </div>
        </div>
        <h3 className="text-2xl font-display font-bold text-neutral-900 mb-3 group-hover:text-blue-600 transition-colors">{name}</h3>
        <p className="text-neutral-600 mb-8 leading-relaxed">{subtitle}</p>
        <div className="flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700 mt-auto">
          View Details
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </div>
    </div>
  </Link>
);

const ProductsOverview = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        category="Portfolio"
        title="Products Overview"
        subtitle="Market-available graphene solutions delivering validated performance, consistent quality, and industrial scalability."
        transparent={true}
      />

      {/* Commercial Products */}
      <section className="py-24 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="Commercial Solutions" theme="light" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mt-12">
            <ProductCard
              name="Graphacrete"
              subtitle="High-Performance Concrete Additive"
              highlight="Construction"
              icon={Box}
              path="/products/graphacrete"
              image={products.graphacrete.image}
            />
            <ProductCard
              name="Graffisol"
              subtitle="Next-Generation Solar Panel Coating"
              highlight="Energy"
              icon={Sun}
              path="/products/graffisol"
              image={products.graffisol.image}
            />
            <ProductCard
              name="Ceraphene"
              subtitle="Ultra-Durable Ceramic Coating"
              highlight="Automotive"
              icon={ShieldCheck}
              path="/products/ceraphene"
              image={products.ceraphene.image}
            />
            <ProductCard
              name="HD-G-PE"
              subtitle="Graphene-Reinforced Polymer Enhancer"
              highlight="Materials"
              icon={Layers}
              path="/products/hd-g-pe"
              image={products.hdgpe.image}
            />
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="02" title="Performance Matrix" theme="light" subtitle="Verified improvements over standard industry benchmarks." />

          <div className="overflow-x-auto mt-12 bg-white border-2 border-neutral-200 rounded-xl shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-4 px-6 text-xs text-neutral-500 uppercase tracking-wide bg-neutral-50">Product</th>
                  <th className="py-4 px-6 text-xs text-neutral-500 uppercase tracking-wide bg-neutral-50">Industry</th>
                  <th className="py-4 px-6 text-xs text-neutral-500 uppercase tracking-wide bg-neutral-50">Primary Benefit</th>
                  <th className="py-4 px-6 text-xs text-neutral-500 uppercase tracking-wide bg-neutral-50">Key Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="py-6 px-6 font-medium text-neutral-900">Graphacrete</td>
                  <td className="py-6 px-6 text-neutral-600">Construction</td>
                  <td className="py-6 px-6 text-neutral-600">Strength & Durability</td>
                  <td className="py-6 px-6 text-neutral-900 font-mono">+40-50% Strength</td>
                </tr>
                <tr>
                  <td className="py-6 px-6 font-medium text-neutral-900">Graffisol</td>
                  <td className="py-6 px-6 text-neutral-600">Solar Energy</td>
                  <td className="py-6 px-6 text-neutral-600">Efficiency Enhancement</td>
                  <td className="py-6 px-6 text-neutral-900 font-mono">+8-12% Output</td>
                </tr>
                <tr>
                  <td className="py-6 px-6 font-medium text-neutral-900">Ceraphene</td>
                  <td className="py-6 px-6 text-neutral-600">Automotive</td>
                  <td className="py-6 px-6 text-neutral-600">Surface Protection</td>
                  <td className="py-6 px-6 text-neutral-900 font-mono">9H+ Hardness</td>
                </tr>
                <tr>
                  <td className="py-6 px-6 font-medium text-neutral-900">HD-G-PE</td>
                  <td className="py-6 px-6 text-neutral-600">Polymers</td>
                  <td className="py-6 px-6 text-neutral-600">Mechanical Properties</td>
                  <td className="py-6 px-6 text-neutral-900 font-mono">+30% Strength</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pipeline Teaser */}
      <section className="py-24 px-6 bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 border-t border-neutral-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase mb-8 shadow-sm">
                <FlaskConical className="w-4 h-4 text-blue-600" />
                <span>R&D Pipeline</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
                Redefining What's Possible
              </h2>
              <p className="text-xl text-neutral-600 mb-10 font-light leading-relaxed">
                From graphene-enhanced ballistics to atmospheric water harvesting, we are engineering the materials of tomorrow. Explore our active development pipeline.
              </p>
              <Link to="/products/pipeline">
                <Button variant="primary" className="h-14 px-8 text-lg">
                  Explore Pipeline <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Right Image Slideshow */}
            <div className="relative aspect-[4/3] bg-white rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 group">
              <PipelineSlideshow />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const PipelineSlideshow = () => {
  const slides = [
    { src: '/images/pipeline/studio/Armophene.png', caption: 'Armophene: Next-Gen Ballistics' },
    { src: '/images/pipeline/studio/Graphyre.png', caption: 'Graphyre: Advanced Composites' },
    { src: '/images/pipeline/studio/Graphosite.png', caption: 'Graphosite: Structural Reinforcement' },
    { src: '/images/pipeline/studio/Rustene.png', caption: 'Rustene: Anti-Corrosion Shield' },
    { src: '/images/pipeline/studio/Thermophene.png', caption: 'Thermaphene: Thermal Management' },
    { src: '/images/pipeline/studio/Gryogen.png', caption: 'Gryogen: Hydrogen Separation' },
    { src: '/images/pipeline/studio/DesalinationMembranes.png', caption: 'Mariphene: Water Desalination' },
    { src: '/images/pipeline/studio/Glasephene.png', caption: 'GlassPhen: Reinforced Fibres' },
    { src: '/images/pipeline/studio/Voltaphene.png', caption: 'Voltaphene: Energy Storage' },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 bg-neutral-50">
      {/* Image */}
      <div className="absolute inset-0 flex items-center justify-center p-12">
        {slides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.src}
            alt={slide.caption}
            className={`absolute max-w-full max-h-full object-contain transition-all duration-700 ease-in-out transform ${idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
          />
        ))}
      </div>

      {/* Caption Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
        <div className="text-white font-medium text-lg tracking-wide text-center">
          {slides[currentIndex].caption}
        </div>
        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-3">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsOverview;
