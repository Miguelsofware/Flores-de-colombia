
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Gift, Truck, Star } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    { icon: <Heart className="h-10 w-10 text-primary" />, title: 'Flores Frescas', description: 'Seleccionamos diariamente las flores más frescas de nuestros campos.' },
    { icon: <Truck className="h-10 w-10 text-primary" />, title: 'Entrega Rápida', description: 'Entregamos el mismo día en la ciudad y envíos nacionales en 24 horas.' },
    { icon: <Gift className="h-10 w-10 text-primary" />, title: 'Empaque Especial', description: 'Presentación elegante para que tu regalo sea aún más especial.' },
    { icon: <Star className="h-10 w-10 text-primary" />, title: 'Calidad Premium', description: 'Garantizamos la calidad y durabilidad de todas nuestras flores.' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">¿Por qué elegirnos?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Nuestro compromiso es ofrecer las flores más frescas y hermosas de Colombia, con un servicio excepcional.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="mx-auto mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
