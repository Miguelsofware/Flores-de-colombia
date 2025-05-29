
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedProductsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const featuredProducts = [
    {
      id: 1,
      name: 'Ramo de Rosas Colombianas',
      description: 'Hermoso ramo de rosas rojas cultivadas en los campos de Colombia.',
      price: '$145.000',
      image: 'https://floristeriasurtiflores.com/wp-content/uploads/2020/06/ramos-flores-rosas-cumple-mes-7.jpg',
      alt: 'Ramo de rosas rojas colombianas'
    },
    {
      id: 2,
      name: 'Arreglo Tropical Exótico',
      description: 'Vibrante arreglo con flores tropicales exóticas de la selva colombiana.',
      price: '$185.000',
      image: 'https://compraflores.com.co/images/large/169_1.jpg',
      alt: 'Arreglo floral tropical exótico'
    },
    {
      id: 3,
      name: 'Orquídeas Selectas',
      description: 'Elegante arreglo de orquídeas colombianas, símbolo de nuestra biodiversidad.',
      price: '$125.000',
      image: 'https://ponchycaprico.com/cdn/shop/products/100-rosas-y-orquideas-en-domo-Ponch-y-Caprico-floreria-a-domicilio-CDMX.jpg?v=1691270665&width=1100',
      alt: 'Arreglo de orquídeas colombianas'
    },
    {
      id: 4,
      name: 'Girasoles Radiantes',
      description: 'Alegre arreglo de girasoles que iluminará cualquier espacio.',
      price: '$155.000',
      image: 'https://www.floresbogota.co/media/catalog/product/cache/99f49e1fd5b36429339aafd5a2c3948f/r/a/ramo_de_girasoles_y_rosas_en_caja_de_lujo__1.jpg',
      alt: 'Arreglo de girasoles radiantes'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-2">Nuestros Arreglos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Descubre nuestras creaciones más populares, diseñadas con las flores más hermosas de Colombia.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredProducts.map((product) => (
            <motion.div 
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
              variants={itemVariants}
            >
              <div className="h-64 overflow-hidden">
              <img 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  alt={product.alt}
                  src={product.image}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-bold">{product.price}</span>
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary/10">
                    Ver Detalles
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/catalogo">
            <Button className="bg-primary hover:bg-primary/90">
              Ver Todo el Catálogo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;




