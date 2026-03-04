import React from 'react';
import { motion } from 'framer-motion';

/**
 * ContentSection Component
 * Reusable content section with optional subsections
 */
const ContentSection = ({
  title,
  subtitle,
  content,
  subsections = [],
  children,
  className = '',
  containerClassName = 'container mx-auto px-6',
  variant = 'default' // default, centered, wide
}) => {
  const variantStyles = {
    default: 'max-w-5xl',
    centered: 'max-w-4xl mx-auto text-center',
    wide: 'max-w-7xl'
  };

  return (
    <section className={`py-16 ${className}`}>
      <div className={containerClassName}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={variantStyles[variant]}
        >
          {/* Section Title */}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
          )}

          {/* Section Subtitle */}
          {subtitle && (
            <p className="text-lg text-slate-600 mb-8">
              {subtitle}
            </p>
          )}

          {/* Main Content */}
          {content && (
            <div className="prose prose-lg max-w-none mb-8">
              {typeof content === 'string' ? (
                <div
                  className="text-slate-700 leading-relaxed whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : (
                content
              )}
            </div>
          )}

          {/* Subsections */}
          {subsections.length > 0 && (
            <div className="space-y-12 mt-12">
              {subsections.map((subsection, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="subsection"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-slate-900">
                    {subsection.title}
                  </h3>
                  {subsection.content && (
                    <div className="text-slate-700 leading-relaxed space-y-4">
                      {Array.isArray(subsection.content) ? (
                        subsection.content.map((paragraph, idx) => {
                          // Skip empty lines
                          if (!paragraph.trim()) return null;

                          // Check if it's a list item
                          if (paragraph.trim().startsWith('-') || paragraph.trim().startsWith('*')) {
                            return (
                              <ul key={idx} className="list-disc list-inside space-y-2 ml-4">
                                <li className="text-slate-700">
                                  {paragraph.trim().substring(1).trim()}
                                </li>
                              </ul>
                            );
                          }

                          // Regular paragraph
                          return (
                            <p key={idx} className="text-slate-700">
                              {paragraph}
                            </p>
                          );
                        })
                      ) : (
                        <p className="text-slate-700">{subsection.content}</p>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* Additional Children */}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

/**
 * ContentGrid Component
 * Grid layout for content cards
 */
export const ContentGrid = ({
  items,
  columns = 3,
  gap = 6,
  className = ''
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-${gap} ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
        >
          {item.icon && (
            <div className="mb-4 text-blue-600">
              {item.icon}
            </div>
          )}
          {item.title && (
            <h3 className="text-xl font-semibold mb-2 text-slate-900">
              {item.title}
            </h3>
          )}
          {item.description && (
            <p className="text-slate-600">
              {item.description}
            </p>
          )}
          {item.content && (
            <div className="mt-4 text-slate-600">
              {item.content}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

/**
 * TwoColumnSection Component
 * Content split into two columns
 */
export const TwoColumnSection = ({
  leftContent,
  rightContent,
  leftWidth = '50%',
  rightWidth = '50%',
  className = ''
}) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-start ${className}`}>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {leftContent}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {rightContent}
      </motion.div>
    </div>
  );
};

/**
 * HighlightBox Component
 * Highlighted content box for callouts
 */
export const HighlightBox = ({
  children,
  variant = 'info', // info, success, warning, error
  className = ''
}) => {
  const variants = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    success: 'bg-green-50 border-green-200 text-green-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    error: 'bg-red-50 border-red-200 text-red-900'
  };

  return (
    <div className={`border-l-4 p-6 rounded-r-lg ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

/**
 * Timeline Component
 * Vertical timeline for processes or history
 */
export const Timeline = ({ items, className = '' }) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex gap-6"
        >
          {/* Timeline Node */}
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-blue-200" />
            {index < items.length - 1 && (
              <div className="w-0.5 flex-1 bg-slate-200 mt-2" />
            )}
          </div>

          {/* Timeline Content */}
          <div className="flex-1 pb-8">
            {item.label && (
              <span className="text-sm font-medium text-blue-600 uppercase tracking-wide">
                {item.label}
              </span>
            )}
            {item.title && (
              <h3 className="text-xl font-semibold mt-1 mb-2 text-slate-900">
                {item.title}
              </h3>
            )}
            {item.description && (
              <p className="text-slate-600">
                {item.description}
              </p>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ContentSection;
