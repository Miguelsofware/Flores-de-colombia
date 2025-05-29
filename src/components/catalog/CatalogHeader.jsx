
import React from 'react';
import { motion } from 'framer-motion';

const CatalogHeader = () => {
  return (
    <motion.div 
      className="text-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Nuestro Catálogo</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Descubre nuestra amplia selección de flores y arreglos, cultivados con amor en los campos colombianos.
      </p>
    </motion.div>
  );
};

export default CatalogHeader;
