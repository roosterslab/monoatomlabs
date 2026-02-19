import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const Graphenode = () => {
  return <ProductDetailTemplate data={pipelineProducts.graphenode} />;
};

export default Graphenode;
