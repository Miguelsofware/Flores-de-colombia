
import React from 'react';
import { Search, Filter } from 'lucide-react';

const CatalogFilters = ({ activeCategory, setActiveCategory, searchQuery, setSearchQuery }) => {
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'ramos', name: 'Ramos' },
    { id: 'arreglos', name: 'Arreglos' },
    { id: 'exoticas', name: 'Exóticas' },
    { id: 'eventos', name: 'Eventos' },
    { id: 'plantas', name: 'Plantas' }
  ];

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Filter className="h-4 w-4" />
          <span>Filtrar por:</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CatalogFilters;
