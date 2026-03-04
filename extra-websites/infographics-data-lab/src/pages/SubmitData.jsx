import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import { generateMarkdown, downloadMarkdown } from '../utils/generateMarkdown';
import CerapheneForm from '../components/forms/CerapheneForm';
import GraffisolForm from '../components/forms/GraffisolForm';
import GraphacreteForm from '../components/forms/GraphacreteForm';
import HDGPEForm from '../components/forms/HDGPEForm';

const SubmitData = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submittedProduct, setSubmittedProduct] = useState(null);

  const products = [
    {
      id: 'ceraphene',
      name: 'Ceraphene',
      description: 'Ceramic coating data',
      color: 'purple',
      priority: 'amber',
      badge: '1 item needed',
    },
    {
      id: 'graffisol',
      name: 'Graffisol',
      description: 'Solar coating data',
      color: 'amber',
      priority: 'red',
      badge: '1 CRITICAL item',
    },
    {
      id: 'graphacrete',
      name: 'Graphacrete',
      description: 'Concrete additive data',
      color: 'teal',
      priority: 'amber',
      badge: '2 items needed',
    },
    {
      id: 'hdgpe',
      name: 'HD-G-PE',
      description: 'Polymer enhancer data',
      color: 'cyan',
      priority: 'red',
      badge: '2 CRITICAL items',
    },
  ];

  const handleSubmit = (formData, productName) => {
    // Generate markdown
    const markdown = generateMarkdown(formData, productName);

    // Generate filename with timestamp
    const timestamp = new Date().toISOString().split('T')[0];
    const filename = `${productName.toLowerCase()}_data_${timestamp}.md`;

    // Download the file
    downloadMarkdown(markdown, filename);

    // Show success message
    setSubmittedProduct(productName);
    setSelectedProduct(null);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getColorClasses = (color) => {
    const colorMap = {
      purple: {
        border: 'border-purple-300',
        hover: 'hover:bg-purple-50',
        text: 'text-purple-700',
      },
      amber: {
        border: 'border-amber-300',
        hover: 'hover:bg-amber-50',
        text: 'text-amber-700',
      },
      teal: {
        border: 'border-teal-300',
        hover: 'hover:bg-teal-50',
        text: 'text-teal-700',
      },
      cyan: {
        border: 'border-cyan-300',
        hover: 'hover:bg-cyan-50',
        text: 'text-cyan-700',
      },
    };
    return colorMap[color] || colorMap.purple;
  };

  const getBadgeClasses = (priority) => {
    return priority === 'red'
      ? 'bg-red-100 text-red-700'
      : 'bg-amber-100 text-amber-700';
  };

  return (
    <div className="min-h-screen">
      <Header
        title="Submit Calculator Data"
        subtitle="Provide the critical data we need for accurate ROI calculations"
      />

      <Navigation />

      <div className="container mx-auto px-6 py-12 max-w-4xl">
        {/* Success Message */}
        {submittedProduct && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8"
          >
            <div className="flex items-start">
              <svg
                className="h-6 w-6 text-green-500 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-green-800 mb-2">
                  ✅ {submittedProduct} Data Downloaded Successfully!
                </h3>
                <p className="text-sm text-green-700 mb-3">
                  Your markdown file has been downloaded. Please:
                </p>
                <ol className="text-sm text-green-700 space-y-1 ml-4 list-decimal">
                  <li>
                    <strong>Option 1:</strong> Email the file to:{' '}
                    <span className="font-mono bg-green-100 px-2 py-1 rounded">
                      data-team@monoatomlabs.com
                    </span>
                  </li>
                  <li>
                    <strong>Option 2:</strong> Save it to:{' '}
                    <span className="font-mono text-xs bg-green-100 px-2 py-1 rounded block mt-1">
                      C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root\website-infographics-data-lab\submissions\
                    </span>
                  </li>
                </ol>
                <button
                  onClick={() => setSubmittedProduct(null)}
                  className="mt-4 px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700"
                >
                  Submit More Data
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Product Selector */}
        {!selectedProduct && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product) => {
                const colors = getColorClasses(product.color);
                return (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`p-6 border-2 ${colors.border} rounded-xl ${colors.hover} transition-all text-left`}
                  >
                    <h3 className={`font-bold text-lg ${colors.text} mb-2`}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="text-xs">
                      <span
                        className={`px-2 py-1 rounded ${getBadgeClasses(product.priority)}`}
                      >
                        {product.badge}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Forms */}
        {selectedProduct === 'ceraphene' && (
          <CerapheneForm
            onSubmit={(data) => handleSubmit(data, 'Ceraphene')}
            onCancel={() => setSelectedProduct(null)}
          />
        )}

        {selectedProduct === 'graffisol' && (
          <GraffisolForm
            onSubmit={(data) => handleSubmit(data, 'Graffisol')}
            onCancel={() => setSelectedProduct(null)}
          />
        )}

        {selectedProduct === 'graphacrete' && (
          <GraphacreteForm
            onSubmit={(data) => handleSubmit(data, 'Graphacrete')}
            onCancel={() => setSelectedProduct(null)}
          />
        )}

        {selectedProduct === 'hdgpe' && (
          <HDGPEForm
            onSubmit={(data) => handleSubmit(data, 'HD-G-PE')}
            onCancel={() => setSelectedProduct(null)}
          />
        )}

        {/* Help Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-blue-900 mb-2">Need Help?</h3>
          <p className="text-sm text-blue-800 mb-4">
            Questions about what data to provide or how to find it?
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="mailto:data-team@monoatomlabs.com"
              className="text-blue-700 hover:text-blue-900 font-semibold"
            >
              📧 Email Data Team
            </a>
            <a href="/" className="text-blue-700 hover:text-blue-900 font-semibold">
              📊 View Dashboard
            </a>
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; 2026 Monoatom Labs. Internal stakeholder portal.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SubmitData;
