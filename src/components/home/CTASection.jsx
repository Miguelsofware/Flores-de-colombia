
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">¿Listo para alegrar tu día con flores?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Haz tu pedido ahora y recibe las flores más frescas y hermosas de Colombia directamente en tu puerta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Hacer Pedido Ahora
            </Button>
            <Link to="/contacto">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Contactar
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
