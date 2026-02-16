import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const GrapheneGlassFibres = () => {
  return <ProductDetailTemplate data={pipelineProducts.grapheneGlassFibres} />;
};

export default GrapheneGlassFibres;
