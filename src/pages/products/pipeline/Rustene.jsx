import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const Rustene = () => {
  return <ProductDetailTemplate data={pipelineProducts.rustene} />;
};

export default Rustene;
