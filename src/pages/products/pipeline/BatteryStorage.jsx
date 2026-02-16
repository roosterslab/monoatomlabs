import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';

const BatteryStorage = () => {
  return <ProductDetailTemplate data={pipelineProducts.batteryStorage} />;
};

export default BatteryStorage;
