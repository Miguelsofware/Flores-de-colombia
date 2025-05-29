
import React from 'react';

const ContactMap = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Nuestra Ubicación</h2>
      <div className="rounded-lg overflow-hidden shadow-md h-[400px]">
        <iframe 
          src="https://www.google.com/maps/place/Cra.+11+%233-31,+Garz%C3%B3n,+Huila/@2.1953326,-75.6314768,19.4z/data=!4m6!3m5!1s0x8e24d9833d450433:0x47874fef10ab752f!8m2!3d2.1953446!4d-75.6310491!16s%2Fg%2F11s8zc27fs?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0"
          title="Mapa de ubicación de FLORES DE COLOMBIA"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
