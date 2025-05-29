
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductGrid = ({ products }) => {
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  const handleAddToCart = (product) => {
    toast({
      title: "¡Producto añadido!",
      description: `${product.name} ha sido añadido al carrito.`,
      duration: 3000,
    });
  };

  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.map(product => (
        <motion.div 
          key={product.id}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow card-hover"
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
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-primary font-bold">{product.price}</span>
              <Button 
                size="sm" 
                className="bg-primary hover:bg-primary/90 flex items-center gap-1"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="h-4 w-4" />
                Añadir
              </Button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProductGrid;
