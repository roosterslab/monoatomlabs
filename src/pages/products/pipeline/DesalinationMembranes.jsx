import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const DesalinationMembranes = () => {
  return <ProductDetailTemplate data={pipelineProducts.desalinationMembranes} />;
};

export default DesalinationMembranes;
