
import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <motion.div 
      className="text-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Estamos aquí para ayudarte. Envíanos un mensaje o visítanos en nuestra tienda.
      </p>
    </motion.div>
  );
};

export default ContactHeader;
