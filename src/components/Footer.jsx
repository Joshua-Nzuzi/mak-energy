import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/Logo-removebg.png';


const Footer = () => {
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Électricité Bâtiment',
    'Électricité Industrielle',
    'Froid & Climatisation',
    'Énergie Solaire',
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="space-y-4">
  <Link to="/" className="flex items-center space-x-2">
    <img
      src={logo}
      alt="Mak Energy Logo"
      className="h-12 rounded-md transition duration-300 ease-in-out hover:brightness-90 hover:scale-105"
    />
  </Link>
  <p className="text-gray-400 text-sm leading-relaxed">
    Votre partenaire de confiance pour des solutions énergétiques innovantes et durables en Afrique.
  </p>
</div>


          {/* Navigation */}
          <div className="space-y-4">
            <p className="font-semibold text-white">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <p className="font-semibold text-white">Nos Services</p>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service}>
                  <Link to="/services" className="text-gray-400 hover:text-accent transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-semibold text-white">Contactez-nous</p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:dibainvest@gmail.com" className="text-gray-400 text-sm hover:text-accent">makayamichel@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+243895508584" className="text-gray-400 text-sm hover:text-accent">+243 895 508 584</a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-gray-400 text-sm">Kinshasa, R.D. Congo</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
             Built by Joshua_Dev.
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mak Energy. Tous droits réservés.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;