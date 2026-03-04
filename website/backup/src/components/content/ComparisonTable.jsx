import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus } from 'lucide-react';

/**
 * ComparisonTable Component
 * Display competitive comparison tables
 */
const ComparisonTable = ({
  table,
  highlightProduct,
  variant = 'default', // default, compact, detailed
  showIcons = true,
  className = ''
}) => {
  if (!table || !table.headers || !table.rows) return null;

  // Determine which column to highlight
  const highlightIndex = highlightProduct
    ? table.headers.findIndex(
        header => header.toLowerCase().includes(highlightProduct.toLowerCase())
      )
    : -1;

  // Parse cell value to determine if it should show an icon
  const getCellIcon = (value) => {
    const lowerValue = String(value).toLowerCase();

    if (lowerValue === 'yes' || lowerValue === 'true' || lowerValue === 'excellent' || lowerValue === 'superior') {
      return <Check className="w-5 h-5 text-green-500" />;
    }
    if (lowerValue === 'no' || lowerValue === 'false') {
      return <X className="w-5 h-5 text-red-500" />;
    }
    if (lowerValue === 'medium' || lowerValue === 'moderate' || lowerValue === 'good') {
      return <Minus className="w-5 h-5 text-amber-500" />;
    }

    return null;
  };

  const renderCell = (value, isHighlighted) => {
    const icon = showIcons ? getCellIcon(value) : null;

    if (icon) {
      return (
        <div className="flex items-center justify-center gap-2">
          {icon}
          <span className={isHighlighted ? 'font-semibold' : ''}>
            {value}
          </span>
        </div>
      );
    }

    return (
      <span className={isHighlighted ? 'font-semibold' : ''}>
        {value}
      </span>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`overflow-x-auto ${className}`}
    >
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-slate-900 text-white">
            {table.headers.map((header, index) => (
              <th
                key={index}
                className={`py-4 px-6 text-left font-semibold ${
                  index === highlightIndex
                    ? 'bg-blue-600'
                    : ''
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.05 }}
              className={`border-b border-slate-200 ${
                rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              } hover:bg-blue-50 transition-colors`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`py-4 px-6 ${
                    cellIndex === 0
                      ? 'font-medium text-slate-900'
                      : 'text-slate-700'
                  } ${
                    cellIndex === highlightIndex
                      ? 'bg-blue-50 font-semibold'
                      : ''
                  }`}
                >
                  {cellIndex === 0 ? cell : renderCell(cell, cellIndex === highlightIndex)}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

/**
 * ComparisonCards Component
 * Display comparison as side-by-side cards
 */
export const ComparisonCards = ({
  items = [],
  highlightIndex = 0,
  className = ''
}) => {
  return (
    <div className={`grid md:grid-cols-${Math.min(items.length, 3)} gap-6 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`border rounded-lg p-6 ${
            index === highlightIndex
              ? 'border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-200'
              : 'border-slate-200 bg-white'
          }`}
        >
          {index === highlightIndex && (
            <div className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-4">
              Recommended
            </div>
          )}
          <h3 className="text-xl font-bold mb-4 text-slate-900">
            {item.name}
          </h3>
          {item.price && (
            <div className="text-3xl font-bold text-blue-600 mb-4">
              {item.price}
            </div>
          )}
          <ul className="space-y-3">
            {item.features && item.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
          {item.cta && (
            <button className={`mt-6 w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
              index === highlightIndex
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}>
              {item.cta}
            </button>
          )}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * FeatureComparison Component
 * Compare features across multiple products/options
 */
export const FeatureComparison = ({
  features = [],
  products = [],
  highlightProduct,
  className = ''
}) => {
  const highlightIndex = highlightProduct
    ? products.findIndex(p => p === highlightProduct)
    : -1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`overflow-x-auto ${className}`}
    >
      <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
        <thead>
          <tr className="bg-slate-900 text-white">
            <th className="py-4 px-6 text-left font-semibold">Feature</th>
            {products.map((product, index) => (
              <th
                key={index}
                className={`py-4 px-6 text-center font-semibold ${
                  index === highlightIndex ? 'bg-blue-600' : ''
                }`}
              >
                {product}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature, rowIndex) => (
            <motion.tr
              key={rowIndex}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: rowIndex * 0.05 }}
              className={`border-b border-slate-200 ${
                rowIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'
              }`}
            >
              <td className="py-4 px-6 font-medium text-slate-900">
                {feature.name}
              </td>
              {feature.values.map((value, colIndex) => (
                <td
                  key={colIndex}
                  className={`py-4 px-6 text-center ${
                    colIndex === highlightIndex ? 'bg-blue-50 font-semibold' : ''
                  }`}
                >
                  {typeof value === 'boolean' ? (
                    value ? (
                      <Check className="w-6 h-6 text-green-500 mx-auto" />
                    ) : (
                      <X className="w-6 h-6 text-red-500 mx-auto" />
                    )
                  ) : (
                    <span className="text-slate-700">{value}</span>
                  )}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

/**
 * PricingComparison Component
 * Specialized comparison for pricing tiers
 */
export const PricingComparison = ({
  plans = [],
  highlightIndex = 1,
  className = ''
}) => {
  return (
    <div className={`grid md:grid-cols-${Math.min(plans.length, 3)} gap-6 ${className}`}>
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`relative border rounded-2xl p-8 ${
            index === highlightIndex
              ? 'border-blue-500 bg-blue-50 shadow-2xl transform scale-105'
              : 'border-slate-200 bg-white shadow-lg'
          }`}
        >
          {index === highlightIndex && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
              Most Popular
            </div>
          )}
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              {plan.name}
            </h3>
            {plan.description && (
              <p className="text-slate-600 text-sm">
                {plan.description}
              </p>
            )}
          </div>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-blue-600">
              {plan.price}
            </div>
            {plan.period && (
              <div className="text-slate-600 text-sm mt-1">
                {plan.period}
              </div>
            )}
          </div>
          <ul className="space-y-3 mb-8">
            {plan.features && plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
          <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
            index === highlightIndex
              ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'
              : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}>
            {plan.cta || 'Get Started'}
          </button>
        </motion.div>
      ))}
    </div>
  );
};

/**
 * SimpleComparison Component
 * Basic comparison with minimal styling
 */
export const SimpleComparison = ({
  items = [],
  metric,
  className = ''
}) => {
  return (
    <div className={`grid md:grid-cols-${Math.min(items.length, 4)} gap-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white border border-slate-200 rounded-lg p-6 text-center"
        >
          <div className="text-sm text-slate-600 mb-2">
            {item.label}
          </div>
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {item.value}
          </div>
          {item.note && (
            <div className="text-xs text-slate-500">
              {item.note}
            </div>
          )}
        </motion.div>
      ))}
      {metric && (
        <div className="md:col-span-full text-center text-sm text-slate-600 mt-4">
          {metric}
        </div>
      )}
    </div>
  );
};

export default ComparisonTable;
