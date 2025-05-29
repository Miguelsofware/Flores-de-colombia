
import React from 'react';
import { Link } from 'react-router-dom';
import { Flower, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Flower className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">FLORES DE COLOMBIA</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ofrecemos las más hermosas flores colombianas, cultivadas con amor y cuidado para llevar belleza y alegría a tu hogar.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-300 hover:text-primary transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-primary transition-colors">Catálogo</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-primary transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Nuestros Productos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-primary transition-colors">Ramos de Novia</Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-primary transition-colors">Arreglos Florales</Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-primary transition-colors">Flores Exóticas</Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-primary transition-colors">Centros de Mesa</Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-gray-300 hover:text-primary transition-colors">Decoración de Eventos</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contáctanos</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-300">Carrera 11#3-33, Huila, Colombia</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-300">+57 316 533 1258</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-300">cerqueramunozmarthayineth@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} FLORES DE COLOMBIA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
