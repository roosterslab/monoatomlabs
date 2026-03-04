/**
 * Content Components Index
 * Centralized exports for all content-related components
 */

// Main Components
export { default as ProductPage } from './ProductPage';
export { default as ContentSection, ContentGrid, TwoColumnSection, HighlightBox, Timeline } from './ContentSection';
export { default as FeatureList, FeatureGrid, BenefitsList, CheckList } from './FeatureList';
export { default as SpecTable, SpecGrid, SpecList, MetricCard, PerformanceComparison } from './SpecTable';
export { default as ComparisonTable, ComparisonCards, FeatureComparison, PricingComparison, SimpleComparison } from './ComparisonTable';

// Re-export for convenience
export const ContentComponents = {
  ProductPage: require('./ProductPage').default,
  ContentSection: require('./ContentSection').default,
  FeatureList: require('./FeatureList').default,
  SpecTable: require('./SpecTable').default,
  ComparisonTable: require('./ComparisonTable').default
};
