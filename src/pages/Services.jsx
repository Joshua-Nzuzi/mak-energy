import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Wind, Sun, Building, Factory, Wrench, Check } from 'lucide-react';
import buildingImage from '@/assets/services/building.jpg';
import industryImage from '@/assets/services/industry.jpg';
import hvacImage from '@/assets/services/hvac.jpg';
import solarImage from '@/assets/services/solar.jpg';
import maintenanceImage from '@/assets/services/alt.jpg';

const PageTransition = ({ children }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: <Building className="h-10 w-10 text-accent" />,
  title: 'BTP',
  description: 'Travaux de construction, rénovation et aménagement pour les bâtiments résidentiels, tertiaires et industriels.',
  details: ['Gros œuvre & second œuvre', 'Installation électrique', 'Plomberie & sanitaire', 'Finitions & peinture'],
  image: buildingImage,
    },
    {
      icon: <Factory className="h-10 w-10 text-accent" />,
      title: 'Électricité Industrielle',
      description: 'Solutions haute performance pour les usines, entrepôts et sites de production.',
      details: ['Armoires de puissance', 'Automatisme', 'Maintenance préventive', 'Groupes électrogènes'],
      image: industryImage,
    },
    {
      icon: <Wind className="h-10 w-10 text-accent" />,
      title: 'Froid & Climatisation',
      description: 'Systèmes de climatisation et de réfrigération pour un confort et une conservation optimale.',
      details: ['Climatisation centrale', 'Chambres froides', 'Entretien et dépannage', 'Solutions VRV/VRF'],
      image: hvacImage,
    },
    {
      icon: <Sun className="h-10 w-10 text-accent" />,
      title: 'Énergie Solaire',
      description: 'Conception et installation de systèmes photovoltaïques pour une autonomie énergétique durable.',
      details: ['Centrales solaires', 'Kits autonomes', 'Pompage solaire', 'Solutions hybrides'],
      image: solarImage,
    },
    {
      icon: <Wrench className="h-10 w-10 text-accent" />,
      title: 'Maintenance & Dépannage',
      description: 'Un service réactif pour garantir la continuité de vos opérations et la longévité de vos installations.',
      details: ['Contrats de maintenance', 'Interventions 24/7', 'Diagnostic de pannes', 'Mises à niveau'],
      image: maintenanceImage,
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Nos Services - Mak Energy | Électricité, Solaire, Froid</title>
        <meta name="description" content="Explorez la gamme complète des services de Mak Energy : électricité industrielle et bâtiment, énergie solaire, froid et climatisation, et maintenance." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-secondary/20 pt-32 pb-20 text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-bold">Nos domaines d'<span className="text-accent">expertise</span></h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
              Des solutions énergétiques intégrées, conçues pour la performance, la durabilité et l'efficacité.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom space-y-20">
         {services.map((service, index) => (
  <motion.div
    key={service.title}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center`}
  >
    {/* Texte */}
    <div className={`space-y-4 order-1 ${index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}`}>
      <div className="flex items-center gap-4">
        {service.icon}
        <h2 className="text-3xl">{service.title}</h2>
      </div>
      <p className="text-gray-400">{service.description}</p>
      <ul className="space-y-2 pt-2">
        {service.details.map(detail => (
          <li key={detail} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-accent" />
            <span className="text-gray-300">{detail}</span>
          </li>
        ))}
      </ul>
      <div className="pt-4">
        <Link to="/contact" className="btn-primary">
          Obtenir un devis
        </Link>
      </div>
    </div>

    {/* Image */}
    <div className={`h-80 lg:h-96 rounded-lg overflow-hidden shadow-2xl order-2 ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
      <img
        src={service.image}
        alt={service.title}
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/20">
  <div className="container-custom">
    <div className="bg-card rounded-lg shadow-2xl p-8 md:p-12 lg:p-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="font-bold">Un projet spécifique en tête ?</h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          Notre équipe est prête à analyser vos besoins pour vous proposer une solution sur mesure.
        </p>
        <Link to="/contact" className="btn-primary inline-block">
          Discutons-en
        </Link>
      </motion.div>
    </div>
  </div>
</section>

    </PageTransition>
  );
};

export default Services;