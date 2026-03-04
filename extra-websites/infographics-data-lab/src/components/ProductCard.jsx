import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { name, description, accuracy, color, bgGradient, path, status } = product;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`product-card overflow-hidden ${bgGradient}`}
      style={{ borderColor: color }}
    >
      <div className="px-6 py-4" style={{ backgroundColor: color }}>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Accuracy</span>
            <span className="text-xl font-bold" style={{ color }}>{accuracy}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 rounded-full transition-all"
              style={{ width: `${accuracy}%`, backgroundColor: color }}
            ></div>
          </div>
        </div>

        <div className="space-y-2 text-sm mb-4">
          {status.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-gray-600">
                {item.icon} {item.label}
              </span>
              <span className={`font-semibold ${
                item.type === 'complete' ? 'text-green-600' :
                item.type === 'critical' ? 'text-red-600' :
                'text-amber-600'
              }`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

        <Link
          to={path}
          className="block w-full text-center py-2 rounded-lg hover:opacity-90 transition-all font-semibold text-sm text-white"
          style={{ backgroundColor: color }}
        >
          View Details →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
