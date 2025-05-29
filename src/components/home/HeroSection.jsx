
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img 
          class="w-full h-full object-cover"
          alt="Hermosas flores colombianas"
         src="https://images.unsplash.com/photo-1592290435338-682c400cb6f8" />
        <div className="absolute inset-0 hero-gradient opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-2xl text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Belleza Natural de Colombia</h1>
          <p className="text-xl mb-8">Descubre la magia de nuestras flores, cultivadas con amor en los campos colombianos y entregadas con pasión a tu puerta.</p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Ver Catálogo
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30">
              Contactar
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
