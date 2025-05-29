
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CatalogHeader from '@/components/catalog/CatalogHeader';
import CatalogFilters from '@/components/catalog/CatalogFilters';
import ProductGrid from '@/components/catalog/ProductGrid';
import { Button } from '@/components/ui/button';

const CatalogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { id: 1, name: 'Ramo de Rosas Rojas', description: '24 rosas rojas colombianas con follaje decorativo.', price: '$145.000', category: 'ramos', image: 'https://floristeriasurtiflores.com/wp-content/uploads/2020/06/ramos-flores-rosas-cumple-mes-7.jpg', alt: 'Ramo de 24 rosas rojas' },
    { id: 2, name: 'Arreglo Tropical Exótico', description: 'Heliconias, aves del paraíso y follaje tropical.', price: '$185.000', category: 'arreglos', image: 'https://compraflores.com.co/images/large/169_1.jpg', alt: 'Arreglo floral con heliconias y aves del paraíso' },
    { id: 3, name: 'Orquídeas Selectas', description: 'Elegante arreglo de orquídeas colombianas.', price: '$125.000', category: 'exoticas', image: 'https://ponchycaprico.com/cdn/shop/products/100-rosas-y-orquideas-en-domo-Ponch-y-Caprico-floreria-a-domicilio-CDMX.jpg?v=1691270665&width=1100', alt: 'Arreglo de orquídeas y rosas' },
    { id: 4, name: 'Girasoles Radiantes', description: 'Alegre arreglo de girasoles con follaje verde.', price: '$155.000', category: 'ramos', image: 'https://www.floresbogota.co/media/catalog/product/cache/99f49e1fd5b36429339aafd5a2c3948f/r/a/ramo_de_girasoles_y_rosas_en_caja_de_lujo__1.jpg', alt: 'Ramo de girasoles amarillos' },
    { id: 5, name: 'Centro de Mesa Elegante', description: 'Diseño sofisticado para eventos especiales.', price: '$100.000', category: 'eventos', image: 'https://cdn0.casamientos.com.ar/vendor/4305/3_2/960/jpg/2_7_144305-1556639271.jpeg', alt: 'Centro de mesa floral elegante para eventos' },
    { id: 6, name: 'Ramo de Novia Romántico', description: 'Delicado ramo con rosas blancas y follaje.', price: '$120.000', category: 'eventos', image: 'https://floristeriascartagena.es/wp-content/uploads/2023/05/significado-ramo-de-novia.png', alt: 'Ramo de novia con rosas blancas y rosadas' },
    { id: 7, name: 'Planta de Orquídea Phalaenopsis', description: 'Orquídea viva en maceta decorativa.', price: '$65.000', category: 'plantas', image: 'https://extasis.pe/nuevapagina/wp-content/uploads/2017/08/Orqu%C3%ADdeas-en-la-ventana-2.jpg', alt: 'Planta de orquídea Phalaenopsis en maceta' },
    { id: 8, name: 'Arreglo Primaveral', description: 'Colorido arreglo con flores de temporada.', price: '$60.000', category: 'arreglos', image: 'https://i.pinimg.com/736x/5a/6f/09/5a6f094efb199fa3f177a9318b73613b.jpg', alt: 'Bouquet primaveral con gerberas' },
    { id: 9, name: 'Ramo de Lirios', description: 'Elegante ramo de lirios blancos y rosados.', price: '$50.000', category: 'ramos', image: 'https://i.pinimg.com/736x/64/fa/af/64faafabe8ab47d73fbc49eab8d3f8d4.jpg', alt: 'Ramo de lirios blancos y rosados' },
    { id: 10, name: 'Heliconia Roja', description: 'Impresionante flor se cultivan en Colombia, especialmente en el oriente antioqueño.', price: '$90.000', category: 'exoticas', image: 'https://i.pinimg.com/736x/68/ad/a0/68ada0afd8e9f609e54b9531486c12b5.jpg', alt: 'Flor exótica de hortensias' },
    { id: 11, name: 'Terrario de Suculentas', description: 'Composición de suculentas en recipiente de vidrio.', price: '$65.000', category: 'plantas', image: 'https://i.pinimg.com/736x/50/b0/ad/50b0adbedcf43979cb8e0c152ce1f326.jpg', alt: 'Terrario con variedad de suculentas' },
    { id: 12, name: 'Decoración Floral para Eventos', description: 'Servicio de decoración floral completo.', price: 'Desde $300.000', category: 'eventos', image: 'https://bgfloristeria.com/cdn/shop/files/Decoracion_de_Espacios_Arcos_Para_Boda_XV_g.jpg?v=1731185976&width=800', alt: 'Decoración floral para un evento elegante' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <CatalogHeader />
        <CatalogFilters 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {filteredProducts.length > 0 ? (
          <ProductGrid products={filteredProducts} />
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
            <Button 
              className="mt-4 bg-primary hover:bg-primary/90"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
            >
              Ver todos los productos
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;
