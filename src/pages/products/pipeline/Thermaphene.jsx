import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const Thermaphene = () => {
  return <ProductDetailTemplate data={pipelineProducts.thermaphene} />;
};

export default Thermaphene;
