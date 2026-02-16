import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const Graphyre = () => {
  return <ProductDetailTemplate data={pipelineProducts.graphyre} />;
};

export default Graphyre;
