
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Leaf, Heart } from 'lucide-react';

const AboutPage = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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

  // Team members
  const teamMembers = [
    {
      name: 'Luz Cerquera',
      position: 'Fundadora y Directora',
      bio: 'Con más de 20 años de experiencia en floricultura, Luz fundó FLORES DE COLOMBIA con la visión de compartir la belleza natural de su país con el mundo.',
      image: 'founder'
    },
    {
      name: 'Yineth Cequera ',
      position: 'Maestra Florista',
      bio: 'Yineth es un artista floral, cuyas creaciones han sido presentadas en exposiciones de flores en todo el municipio.',
      image: 'florist'
    },
    {
      name: 'Miguel Palomino',
      position: 'Gerente de Sostenibilidad',
      bio: 'Miguel trabaja para asegurar que nuestras prácticas sean amigables con el medio ambiente y beneficien a las comunidades locales.',
      image: 'sustainability'
    },
    {
      name: 'Cristian Palomino',
      position: 'Diseñador Floral',
      bio: 'Cristian Apasionado por el arte floral, crea arreglos únicos que combinan color, forma y fragancia para expresar emociones y embellecer espacios.',
      image: 'cultivation'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-50 flower-bg">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestra Historia</h1>
            <p className="text-xl text-gray-700 mb-6">
              Descubre la pasión y dedicación detrás de FLORES DE COLOMBIA, donde cada flor cuenta una historia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
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
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
                alt="Historia de FLORES DE COLOMBIA"
               src="https://images.unsplash.com/photo-1677094544424-6c7e3e20cb86" />
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4">De la Semilla a la Flor</h2>
              <p className="text-gray-700 mb-4">
                FLORES DE COLOMBIA nació en 2011 de la pasión de Luz Cerquera por las flores y su deseo de compartir la extraordinaria biodiversidad floral de Colombia con el mundo. Lo que comenzó como un pequeño negocio familiar ha florecido hasta convertirse en una de las floristerías más reconocidas del Municipio.
              </p>
              <p className="text-gray-700 mb-4">
                Nuestra historia está enraizada en las fértiles tierras colombianas, donde el clima único y la rica biodiversidad crean el entorno perfecto para cultivar algunas de las flores más hermosas del mundo. Trabajamos directamente con pequeños agricultores locales, asegurando prácticas sostenibles y comercio justo.
              </p>
              <p className="text-gray-700">
                A lo largo de los años, hemos perfeccionado el arte de seleccionar, arreglar y entregar flores frescas, llevando un pedazo de la belleza natural de Colombia a hogares y eventos especiales. Cada arreglo floral que creamos es una celebración de color, fragancia y vida.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Estos principios guían todo lo que hacemos, desde el cultivo hasta la entrega.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="h-12 w-12 text-primary" />, title: 'Sostenibilidad', description: 'Nos comprometemos con prácticas de cultivo sostenibles que respetan y preservan nuestro medio ambiente.' },
              { icon: <Award className="h-12 w-12 text-primary" />, title: 'Calidad', description: 'Seleccionamos cuidadosamente cada flor para garantizar que solo las mejores lleguen a nuestros clientes.' },
              { icon: <Heart className="h-12 w-12 text-primary" />, title: 'Pasión', description: 'Amamos lo que hacemos y ponemos nuestro corazón en cada arreglo floral que creamos.' },
              { icon: <Users className="h-12 w-12 text-primary" />, title: 'Comunidad', description: 'Apoyamos a las comunidades locales y promovemos el comercio justo con nuestros agricultores.' }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="mx-auto mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas apasionadas que hacen posible FLORES DE COLOMBIA.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
                variants={itemVariants}
              >
                <div className="h-64 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    alt={`${member.name} - ${member.position}`}
                   src="https://images.unsplash.com/photo-1684951167814-de6fbb0904a5" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-xl mb-0">
                "Compartir la belleza natural de Colombia a través de flores excepcionales, cultivadas con amor y respeto por la naturaleza, creando momentos de alegría y conexión en la vida de nuestros clientes."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
