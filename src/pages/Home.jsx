import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Wind, Sun } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import aboutImage from '@/assets/about.jpg';

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

const Home = () => {
  const stats = [
    { value: '10+', label: 'Ans d\'expérience' },
    { value: '200+', label: 'Projets réussis' },
    { value: '99%', label: 'Satisfaction client' },
    { value: '4', label: 'Domaines d\'expertise' },
  ];

  const services = [
    {
      icon: <Zap className="h-10 w-10 text-accent" />,
      title: 'Électricité',
      description: 'Solutions électriques complètes pour le bâtiment et l\'industrie.',
    },
    {
      icon: <Wind className="h-10 w-10 text-accent" />,
      title: 'Froid & Climatisation',
      description: 'Systèmes de refroidissement performants et éco-énergétiques.',
    },
    {
      icon: <Sun className="h-10 w-10 text-accent" />,
      title: 'Énergie Solaire',
      description: 'Installations photovoltaïques pour une énergie propre et autonome.',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Mak Energy - Solutions Énergétiques en Afrique</title>
        <meta name="description" content="Mak Energy, votre expert en électricité, froid, climatisation et énergie solaire. Des solutions durables pour les professionnels et les particuliers." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-secondary/20 pt-32 pb-20 text-center">

  <div className="container-custom flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
    
    {/* Texte */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="text-center lg:text-left"
    >
      <h1 className="font-bold leading-tight text-3xl sm:text-4xl">
        Bâtir l'avenir énergétique de l'<span className="text-accent">Afrique</span>
      </h1>
      <p className="mt-6 text-base sm:text-lg text-gray-300">
        Mak Energy est votre partenaire de confiance pour des solutions complètes en électricité, froid, climatisation et énergie solaire.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <Link to="/services" className="btn-primary">
          Découvrir nos services
        </Link>
        <Link to="/contact" className="btn-secondary">
          Nous contacter <ArrowRight className="inline ml-2 h-5 w-5" />
        </Link>
      </div>
    </motion.div>

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full max-h-[400px] sm:max-h-[500px] overflow-hidden rounded-lg shadow-2xl"
    >
      <img src={heroImage} alt="Mak Energy" className="w-full object-cover" />
    </motion.div>
    
  </div>
</section>


      {/* Stats Section */}
      <section className="bg-secondary/20 pt-32 pb-20">

        <div className="container-custom py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-4xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="section-padding text-white">
  <div className="container-custom flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
    
    {/* Texte */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center lg:text-left"
    >
      <h2 className="font-bold text-2xl sm:text-3xl">
        Votre partenaire pour une <span className="text-accent">croissance durable</span>
      </h2>
      <p className="mt-4 text-gray-400">
        Chez Mak Energy, nous nous engageons à fournir des solutions énergétiques qui non seulement répondent aux besoins de nos clients, mais contribuent également au développement durable de nos communautés.
      </p>
      <p className="mt-4 text-gray-400">
        Avec une équipe d'experts locaux et une connaissance approfondie du marché, nous concevons et mettons en œuvre des projets sur mesure, garantissant qualité, fiabilité et performance.
      </p>
      <Link to="/about" className="btn-primary mt-8 inline-block">
        En savoir plus sur nous
      </Link>
    </motion.div>

    {/* Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full max-h-[400px] sm:max-h-[500px] overflow-hidden rounded-lg shadow-2xl"
    >
      <img
        src={aboutImage}
        alt="Ingénieur Mak Energy"
        className="w-full object-cover"
      />
    </motion.div>
  </div>
</section>


      {/* Services Snippet */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-bold">Des solutions énergétiques <span className="text-accent">complètes</span></h2>
            <p className="mt-4 text-gray-400">
              Nous couvrons tous vos besoins énergétiques, de l'installation à la maintenance, avec un engagement constant envers la qualité et l'innovation.
            </p>
          </motion.div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-lg shadow-lg hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300"
              >
                {service.icon}
                <h3 className="mt-4 font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{service.description}</p>
                <Link to="/services" className="text-accent text-sm font-semibold mt-4 inline-block group">
                  Voir plus <ArrowRight className="inline ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
  <div className="container-custom">
    <div className="bg-card rounded-lg shadow-2xl p-8 md:p-12 lg:p-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <h2 className="font-bold">Prêt à démarrer votre projet ?</h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          Contactez notre équipe d'experts dès aujourd'hui pour discuter de vos besoins et obtenir un devis personnalisé et gratuit.
        </p>
        <Link to="/contact" className="btn-primary inline-block">
          Demander un devis gratuit
        </Link>
      </motion.div>
    </div>
  </div>
</section>

    </PageTransition>
  );
};

export default Home;