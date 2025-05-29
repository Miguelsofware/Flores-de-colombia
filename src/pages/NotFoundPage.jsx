
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold mt-4 mb-6">Página no encontrada</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/">
              <Button className="bg-primary hover:bg-primary/90 flex items-center gap-2">
                <Home className="h-4 w-4" />
                Volver al Inicio
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 flex items-center gap-2"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-4 w-4" />
              Regresar
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img  
            className="max-w-xs mx-auto"
            alt="Flor marchita ilustrativa de página no encontrada"
           src="https://images.unsplash.com/photo-1631043212087-a4d760f8bb66" />
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;
