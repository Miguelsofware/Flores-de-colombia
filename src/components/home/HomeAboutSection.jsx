
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomeAboutSection = () => {
  return (
    <section className="py-16 bg-gray-50 flower-bg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              class="rounded-lg shadow-xl w-full h-[500px] object-cover"
              alt="Campos de flores en Colombia"
             src="https://images.unsplash.com/photo-1694155011869-6ec870281cfa" />
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-gray-700 mb-4">
              Desde 2005, FLORES DE COLOMBIA ha sido sinónimo de calidad y belleza en el mundo de la floricultura. Nuestras flores son cultivadas en las fértiles tierras colombianas, donde el clima y la altitud crean condiciones perfectas para el crecimiento de flores excepcionales.
            </p>
            <p className="text-gray-700 mb-6">
              Trabajamos directamente con pequeños productores locales, asegurando prácticas sostenibles y comercio justo. Cada flor que llega a tus manos ha sido cuidadosamente seleccionada y tratada para garantizar su frescura y longevidad.
            </p>
            <Link to="/nosotros">
              <Button className="bg-primary hover:bg-primary/90">
                Conoce Más Sobre Nosotros
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutSection;
