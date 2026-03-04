import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, Sparkles } from 'lucide-react';

/**
 * FeatureList Component
 * Display features/benefits in various layouts
 */
const FeatureList = ({
  features = [],
  variant = 'default', // default, detailed, simple, compact, cards
  columns = 2,
  showIcon = true,
  iconType = 'check', // check, chevron, sparkle, custom
  customIcon,
  className = ''
}) => {
  if (!features || features.length === 0) return null;

  // Icon selection
  const getIcon = () => {
    if (customIcon) return customIcon;

    switch (iconType) {
      case 'check':
        return <Check className="w-5 h-5" />;
      case 'chevron':
        return <ChevronRight className="w-5 h-5" />;
      case 'sparkle':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Check className="w-5 h-5" />;
    }
  };

  // Column classes
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  // Variant: Simple list
  if (variant === 'simple') {
    return (
      <div className={`grid ${columnClasses[columns]} gap-4 ${className}`}>
        {features.map((feature, index) => {
          const title = feature.title || feature.text || feature;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-start gap-3"
            >
              {showIcon && (
                <div className="mt-0.5 text-blue-600 flex-shrink-0">
                  {getIcon()}
                </div>
              )}
              <span className="text-slate-700">
                {title}
              </span>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Variant: Compact list
  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`}>
        {features.map((feature, index) => {
          const title = feature.title || feature.text || feature;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center gap-3 text-slate-700"
            >
              {showIcon && (
                <div className="text-blue-600 flex-shrink-0">
                  {getIcon()}
                </div>
              )}
              <span>{title}</span>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // Variant: Cards
  if (variant === 'cards') {
    return (
      <div className={`grid ${columnClasses[columns]} gap-6 ${className}`}>
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all"
          >
            {showIcon && (
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {getIcon()}
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2 text-slate-900">
              {feature.title || feature.text || feature}
            </h3>
            {feature.description && (
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            )}
            {feature.details && feature.details.length > 0 && (
              <ul className="mt-4 space-y-2">
                {feature.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  // Variant: Detailed (default or detailed)
  return (
    <div className={`grid ${columnClasses[columns]} gap-8 ${className}`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="feature-item"
        >
          <div className="flex items-start gap-4">
            {showIcon && (
              <div className="mt-1 text-blue-600 flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  {getIcon()}
                </div>
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                {feature.title || feature.text || feature}
              </h3>
              {feature.description && (
                <p className="text-slate-600 leading-relaxed mb-3">
                  {feature.description}
                </p>
              )}
              {feature.details && feature.details.length > 0 && (
                <ul className="space-y-2">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 mt-0.5 text-blue-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/**
 * FeatureGrid Component
 * Grid of feature cards with icons
 */
export const FeatureGrid = ({
  features = [],
  columns = 3,
  variant = 'default', // default, minimal, detailed
  className = ''
}) => {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-8 ${className}`}>
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="text-center"
        >
          {feature.icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl text-blue-600 mb-4">
              {feature.icon}
            </div>
          )}
          <h3 className="text-xl font-semibold mb-3 text-slate-900">
            {feature.title}
          </h3>
          {feature.description && (
            <p className="text-slate-600 leading-relaxed">
              {feature.description}
            </p>
          )}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * BenefitsList Component
 * Specialized for product benefits with emphasis
 */
export const BenefitsList = ({
  benefits = [],
  showNumbers = true,
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${className}`}>
      {benefits.map((benefit, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex gap-4 p-6 bg-white border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
        >
          {showNumbers && (
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold">
              {index + 1}
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2 text-slate-900">
              {benefit.title}
            </h3>
            {benefit.description && (
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            )}
            {benefit.details && benefit.details.length > 0 && (
              <ul className="mt-3 space-y-1">
                {benefit.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/**
 * CheckList Component
 * Simple checklist with checkmarks
 */
export const CheckList = ({
  items = [],
  columns = 1,
  size = 'md', // sm, md, lg
  className = ''
}) => {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3'
  };

  const sizeClasses = {
    sm: 'text-sm gap-2',
    md: 'text-base gap-3',
    lg: 'text-lg gap-4'
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-4 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={`flex items-start ${sizeClasses[size]}`}
        >
          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
          <span className="text-slate-700">
            {typeof item === 'string' ? item : item.text || item.title}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureList;
