
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SocialIcons from '@/components/contact/SocialIcons';

const ContactInfo = () => {
  const contactDetails = [
    { icon: <Phone className="h-6 w-6 text-primary" />, title: 'Teléfono', lines: ['+57 316 533 1258', '+57 322 977 3911'] },
    { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Correo Electrónico', lines: ['cerqueramunozmarthayineth@gmail.com', ''] },
    { icon: <MapPin className="h-6 w-6 text-primary" />, title: 'Dirección', lines: ['Cra 11# 3-31', 'Garzon, Huila'] },
    { icon: <Clock className="h-6 w-6 text-primary" />, title: 'Horario de Atención', lines: ['Lunes a Viernes: 8:00 AM - 6:30 PM', 'Sábados: 9:00 AM - 6:00 PM', 'Domingos: Cerrado'] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-white rounded-lg shadow-md p-6 h-full">
        <h2 className="text-2xl font-bold mb-6 text-primary">Información de Contacto</h2>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-primary/10 p-3 rounded-full">
                {detail.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{detail.title}</h3>
                {detail.lines.map((line, i) => (
                  <p key={i} className="text-gray-600">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8">
          <h3 className="font-semibold text-gray-800 mb-4">Síguenos en Redes Sociales</h3>
          <SocialIcons />
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
