import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import logo from '@/assets/Logo-removebg.png'

const services = [
  'BTP',
  'Électricité Industrielle',
  'Froid & Climatisation',
  'Énergie Solaire',
]

const Footer = () => {
  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  // 👉 Détection moderne : Gmail ou messagerie locale
  const [isGmailPreferred, setIsGmailPreferred] = useState(false)

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isChrome = userAgent.includes('chrome')
    const isAndroid = userAgent.includes('android')
    const isUsingGmail =
      document.cookie.includes('G_AUTHUSER_H') ||
      window.location.hostname.includes('gmail.com') ||
      (isChrome && isAndroid)

    setIsGmailPreferred(isUsingGmail)
  }, [])

  const email = 'makenergy496@gmail.com'
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
  const mailtoLink = `mailto:${email}?subject=Demande%20d'informations%20-%20Mak%20Energy`

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
              {services.map(service => {
                const anchor = service.toLowerCase().replace(/[^a-z0-9]+/gi, '-').replace(/(^-|-$)/g, '')
                return (
                  <li key={service}>
                    <Link
                      to={`/services#${anchor}`}
                      className="text-gray-400 hover:text-accent transition-colors text-sm"
                    >
                      {service}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <p className="font-semibold text-white">Contactez-nous</p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-accent" />
                <a
                  href={isGmailPreferred ? gmailLink : mailtoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 text-sm hover:text-accent transition-colors duration-300"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+243895508584" className="text-gray-400 text-sm hover:text-accent">
                  +243 895 508 584
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-gray-400 text-sm">
                  2, AV Bahumbu, Q/Molo, C/Lemba, Kinshasa, République Démocratique du Congo
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Signature */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Built by{' '}
            <a
              href="https://portfolio-fullstack-umber.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent transition-colors duration-300"
            >
              Joshua_Dev
            </a>.
          </p>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Mak Energy. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
