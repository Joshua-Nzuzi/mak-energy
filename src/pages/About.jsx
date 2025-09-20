import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Users, Target, Heart, Award } from 'lucide-react';
import storyImage from '@/assets/story.jpg';

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

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-accent" />,
      title: 'Engagement Client',
      description: 'Votre satisfaction est notre priorité absolue. Nous collaborons étroitement avec vous à chaque étape.',
    },
    {
      icon: <Target className="h-8 w-8 text-accent" />,
      title: 'Qualité & Fiabilité',
      description: 'Nous utilisons des équipements de pointe et respectons les normes les plus strictes pour des résultats durables.',
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: 'Expertise Locale',
      description: 'Notre équipe comprend les défis et les opportunités uniques du marché africain.',
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: 'Innovation Continue',
      description: 'Nous intégrons les dernières technologies pour offrir des solutions énergétiques efficaces et pérennes.',
    },
  ];

  const team = [
    {
      name: 'John Kabeya',
      role: 'Directeur Technique',
      image: 'African male technical director in an office',
    },
    {
      name: 'Grace Ngalula',
      role: 'Chef de Projet Solaire',
      image: 'African female solar project manager on site',
    },
    {
      name: 'David Tshibangu',
      role: 'Responsable Froid & Climatisation',
      image: 'African male HVAC manager inspecting a unit',
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>À propos de Mak Energy | Notre Mission, Nos Valeurs</title>
        <meta name="description" content="Découvrez l'histoire, la mission et l'équipe d'experts derrière Mak Energy, votre partenaire énergétique en Afrique." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-secondary/20 pt-32 pb-20 text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-bold">Notre mission : <span className="text-accent">l'excellence énergétique</span></h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
              Nous nous engageons à fournir des solutions énergétiques fiables et innovantes qui soutiennent la croissance et le développement en Afrique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
  <div className="container-custom flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
    
    {/* Texte */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="order-2 lg:order-1"
    >
      <h2 className="font-bold">
        Une histoire de <span className="text-accent">passion et d'expertise</span>
      </h2>
      <p className="mt-4 text-gray-400">
        Fondée par des professionnels passionnés, Mak Energy est née de la vision de combler le fossé énergétique en Afrique avec des solutions de qualité internationale adaptées aux réalités locales.
      </p>
      <p className="mt-4 text-gray-400">
        Chaque projet est une nouvelle opportunité de démontrer notre engagement envers l'excellence, de la conception à la mise en service. Notre croissance est le reflet de la confiance que nos clients nous accordent.
      </p>
    </motion.div>

    {/* Image locale */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-2xl order-1 lg:order-2"
    >
      <img
        src={storyImage}
        alt="Équipe Mak Energy sur le terrain"
        className="w-full h-full object-cover"
      />
    </motion.div>
  </div>
</section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-bold">Nos <span className="text-accent">valeurs fondamentales</span></h2>
            <p className="mt-4 text-gray-400">
              Elles sont le socle de notre culture d'entreprise et guident chacune de nos actions.
            </p>
          </motion.div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 rounded-lg text-center"
              >
                {value.icon}
                <h3 className="mt-4 text-xl font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-bold">Rencontrez nos <span className="text-accent">experts</span></h2>
            <p className="mt-4 text-gray-400">
              Une équipe de professionnels dévoués et expérimentés, prêts à relever vos défis.
            </p>
          </motion.div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-card rounded-lg overflow-hidden text-center group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    alt={member.name}
                   src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-accent font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;