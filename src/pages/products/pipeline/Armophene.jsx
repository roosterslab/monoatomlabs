import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const Armophene = () => {
  return <ProductDetailTemplate data={pipelineProducts.armophene} />;
};

export default Armophene;
