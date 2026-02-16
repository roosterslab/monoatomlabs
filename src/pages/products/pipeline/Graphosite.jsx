import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const Graphosite = () => {
  return <ProductDetailTemplate data={pipelineProducts.graphosite} />;
};

export default Graphosite;
