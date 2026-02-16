import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const AtmosphericHarvesting = () => {
  return <ProductDetailTemplate data={pipelineProducts.atmosphericHarvesting} />;
};

export default AtmosphericHarvesting;
