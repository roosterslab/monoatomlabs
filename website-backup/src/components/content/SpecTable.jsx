import React from 'react';
import { motion } from 'framer-motion';

/**
 * SpecTable Component
 * Display technical specifications in organized tables
 */
const SpecTable = ({
  specifications = {},
  tables = [],
  variant = 'default', // default, compact, detailed, cards
  className = ''
}) => {
  // If specifications object is provided
  const renderSpecifications = () => {
    if (!specifications || Object.keys(specifications).length === 0) return null;

    if (variant === 'cards') {
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(specifications).map(([key, value], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200 rounded-lg p-6"
            >
              {typeof value === 'object' && value !== null ? (
                <>
                  <h3 className="text-lg font-semibold mb-4 text-slate-900 capitalize">
                    {key.replace(/_/g, ' ')}
                  </h3>
                  <dl className="space-y-2">
                    {Object.entries(value).map(([subKey, subValue]) => (
                      <div key={subKey} className="flex justify-between gap-4">
                        <dt className="text-slate-600 font-medium">
                          {subKey}:
                        </dt>
                        <dd className="text-slate-900 font-semibold text-right">
                          {subValue}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </>
              ) : (
                <div className="flex justify-between items-center gap-4">
                  <dt className="text-slate-600 font-medium capitalize">
                    {key.replace(/_/g, ' ')}:
                  </dt>
                  <dd className="text-slate-900 font-semibold">
                    {value}
                  </dd>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      );
    }

    // Default table view
    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {Object.entries(specifications).map(([key, value], index) => (
              <motion.tr
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="border-b border-slate-200 hover:bg-slate-50"
              >
                <td className="py-4 px-6 font-medium text-slate-700 capitalize bg-slate-50">
                  {key.replace(/_/g, ' ')}
                </td>
                <td className="py-4 px-6 text-slate-900">
                  {typeof value === 'object' && value !== null ? (
                    <dl className="space-y-1">
                      {Object.entries(value).map(([subKey, subValue]) => (
                        <div key={subKey}>
                          <span className="font-medium">{subKey}: </span>
                          <span>{subValue}</span>
                        </div>
                      ))}
                    </dl>
                  ) : (
                    value
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // If tables array is provided
  const renderTables = () => {
    if (!tables || tables.length === 0) return null;

    return tables.map((table, tableIndex) => (
      <motion.div
        key={tableIndex}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`overflow-x-auto ${tableIndex > 0 ? 'mt-8' : ''}`}
      >
        <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-sm">
          {table.headers && table.headers.length > 0 && (
            <thead>
              <tr className="bg-slate-900 text-white">
                {table.headers.map((header, index) => (
                  <th
                    key={index}
                    className="py-4 px-6 text-left font-semibold"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            {table.rows && table.rows.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: rowIndex * 0.05 }}
                className="border-b border-slate-200 hover:bg-slate-50"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`py-4 px-6 ${
                      cellIndex === 0
                        ? 'font-medium text-slate-900'
                        : 'text-slate-700'
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    ));
  };

  return (
    <div className={className}>
      {renderSpecifications()}
      {renderTables()}
    </div>
  );
};

/**
 * SpecGrid Component
 * Display specifications in a grid of cards
 */
export const SpecGrid = ({
  specifications = {},
  columns = 3,
  className = ''
}) => {
  const columnClasses = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${columnClasses[columns]} gap-6 ${className}`}>
      {Object.entries(specifications).map(([key, value], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
        >
          <div className="text-3xl font-bold text-blue-600 mb-2">
            {value}
          </div>
          <div className="text-sm text-slate-600 capitalize">
            {key.replace(/_/g, ' ')}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/**
 * SpecList Component
 * Display specifications as a simple list
 */
export const SpecList = ({
  specifications = {},
  variant = 'default', // default, compact
  className = ''
}) => {
  return (
    <dl className={`space-y-4 ${className}`}>
      {Object.entries(specifications).map(([key, value], index) => (
        <motion.div
          key={key}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className={`${
            variant === 'compact' ? 'flex items-center gap-4' : 'space-y-1'
          }`}
        >
          <dt className="text-slate-600 font-medium capitalize">
            {key.replace(/_/g, ' ')}:
          </dt>
          <dd className="text-slate-900 font-semibold">
            {typeof value === 'object' && value !== null
              ? JSON.stringify(value)
              : value}
          </dd>
        </motion.div>
      ))}
    </dl>
  );
};

/**
 * MetricCard Component
 * Display a single key metric prominently
 */
export const MetricCard = ({
  label,
  value,
  description,
  icon,
  variant = 'default', // default, highlighted, gradient
  className = ''
}) => {
  const variants = {
    default: 'bg-white border-slate-200',
    highlighted: 'bg-blue-50 border-blue-300',
    gradient: 'bg-gradient-to-br from-blue-600 to-blue-800 text-white border-blue-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`border rounded-lg p-6 ${variants[variant]} ${className}`}
    >
      {icon && (
        <div className={`mb-4 ${variant === 'gradient' ? 'text-white' : 'text-blue-600'}`}>
          {icon}
        </div>
      )}
      <div className={`text-4xl font-bold mb-2 ${
        variant === 'gradient' ? 'text-white' : 'text-blue-600'
      }`}>
        {value}
      </div>
      <div className={`text-sm font-medium mb-1 ${
        variant === 'gradient' ? 'text-blue-100' : 'text-slate-600'
      }`}>
        {label}
      </div>
      {description && (
        <div className={`text-sm ${
          variant === 'gradient' ? 'text-blue-200' : 'text-slate-500'
        }`}>
          {description}
        </div>
      )}
    </motion.div>
  );
};

/**
 * PerformanceComparison Component
 * Show before/after or comparison metrics
 */
export const PerformanceComparison = ({
  before,
  after,
  improvement,
  metric,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-white border border-slate-200 rounded-lg p-6 ${className}`}
    >
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-slate-400 mb-2">
            {before}
          </div>
          <div className="text-sm text-slate-600">Before</div>
        </div>
        <div className="flex items-center justify-center">
          <div className="text-2xl font-bold text-green-600">
            {improvement}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-blue-600 mb-2">
            {after}
          </div>
          <div className="text-sm text-slate-600">After</div>
        </div>
      </div>
      {metric && (
        <div className="mt-4 text-center text-sm text-slate-600 border-t border-slate-200 pt-4">
          {metric}
        </div>
      )}
    </motion.div>
  );
};

export default SpecTable;
