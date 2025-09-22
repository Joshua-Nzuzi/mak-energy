import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';
import { contactSchema } from '@/validation/contactSchema';
import { formatZodErrors } from '@/lib/utils';


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

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    botcheck: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
  const { name, value } = e.target;

  setFormData(prev => ({ ...prev, [name]: value }));

  // Validation à la volée pour ce champ
  const singleField = contactSchema.shape[name];
  if (singleField) {
    try {
      singleField.parse(value);
      setErrors(prev => ({ ...prev, [name]: undefined }));
    } catch (err) {
      const zodMessage = err?.issues?.[0]?.message || err.message || "Erreur de validation";
      setErrors(prev => ({ ...prev, [name]: zodMessage }));
    }
  }
};



  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  const result = contactSchema.safeParse(formData);

  if (!result.success) {
    const { fieldErrors, globalMessage } = formatZodErrors(result.error);

    setErrors(fieldErrors);

    toast({
      title: "Erreur de validation",
      description: globalMessage,
      variant: "destructive",
    });

    setIsSubmitting(false);
    return;
  }

    setErrors({}); // ✅ reset si tout est bon

    try {
      await emailjs.send(
        'service_4h8g9rf',     
        'template_7an2egk',    
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        'jYwSbHJgipbVSb_tC'    
      );

      toast({
        title: "Message envoyé ✅",
        description: "Merci. Nous avons bien reçu votre message et nous vous répondrons rapidement.",
      });

      setFormData({ name: '', email: '', phone: '', subject: '', message: '', botcheck: '' });
    } catch (error) {
      toast({
        title: "Erreur",
        description: "L'envoi du message a échoué. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Contactez Mak Energy | Devis et Informations</title>
        <meta
          name="description"
          content="Contactez l'équipe de Mak Energy pour toute demande de devis, de partenariat ou d'information sur nos services énergétiques."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-secondary/20 pt-32 pb-20 text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-bold">Entrons en <span className="text-accent">contact</span></h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto text-gray-300">
              Nous sommes à votre disposition pour toute question ou demande de devis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl">Nos coordonnées</h2>
              <p className="text-gray-400 mt-2">Contactez-nous directement ou via le formulaire.</p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Téléphone</h3>
                  <a href="tel:+243895508584" className="text-gray-300 hover:text-accent transition-colors">+243 895 508 584</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:makayamichel@gmail.com" className="text-gray-300 hover:text-accent transition-colors">makayamichel@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold">Adresse</h3>
                  <p className="text-gray-300">Kinshasa, République Démocratique du Congo</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-card p-8 rounded-lg shadow-2xl"
          >
            <h2 className="text-3xl mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleInputChange}
                    placeholder="Votre nom complet *" required
                    className="w-full bg-secondary/50 border border-border px-4 py-3 rounded-md focus:ring-accent focus:border-accent"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleInputChange}
                    placeholder="Votre adresse email *" required
                    className="w-full bg-secondary/50 border border-border px-4 py-3 rounded-md focus:ring-accent focus:border-accent"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                    placeholder="Votre téléphone"
                    className="w-full bg-secondary/50 border border-border px-4 py-3 rounded-md focus:ring-accent focus:border-accent"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <input
                    type="text" name="subject" value={formData.subject} onChange={handleInputChange}
                    placeholder="Sujet de votre message"
                    className="w-full bg-secondary/50 border border-border px-4 py-3 rounded-md focus:ring-accent focus:border-accent"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>
              </div>

              <div>
                <textarea
                  name="message" value={formData.message} onChange={handleInputChange}
                  placeholder="Votre message *" required rows="6"
                  className="w-full bg-secondary/50 border border-border px-4 py-3 rounded-md focus:ring-accent focus:border-accent resize-none"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Champ anti-bot caché */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleInputChange}
                style={{ display: 'none' }}
                autoComplete="off"
              />

              <div className="text-right">
                <button type="submit" disabled={isSubmitting} className="btn-primary">
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  {!isSubmitting && <Send className="inline ml-2 h-5 w-5" />}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
