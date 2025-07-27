import { motion } from 'motion/react'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import logo from 'figma:asset/d53c1a448fc8a1ad956c362d2aeeb8be8067bcb2.png'

interface FooterProps {
  onViewChange: (view: string) => void
}

export function Footer({ onViewChange }: FooterProps) {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white border-t mt-16"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <img src={logo} alt="GoodImmo Logo" className="h-8 w-auto mr-2" />
              <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>GoodImmo</span>
            </div>
            <p className="text-sm text-gray-600">
              La plateforme de référence pour l'achat et la vente de terrains au Cameroun. 
              Transactions sécurisées et transparentes.
            </p>
            <div className="flex space-x-4">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Facebook className="h-5 w-5 text-gray-600 cursor-pointer transition-colors hover:text-green-600" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Twitter className="h-5 w-5 text-gray-600 cursor-pointer transition-colors hover:text-green-600" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Instagram className="h-5 w-5 text-gray-600 cursor-pointer transition-colors hover:text-green-600" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Linkedin className="h-5 w-5 text-gray-600 cursor-pointer transition-colors hover:text-green-600" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onViewChange('listings')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Vente de Terrains
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onViewChange('listings')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Achat de Terrains
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onViewChange('help')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Vérification Terrain
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onViewChange('help')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Conseils Juridiques
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => onViewChange('help')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Centre d'Aide
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onViewChange('faq')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onViewChange('contact')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Contactez-nous
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onViewChange('report')}
                  className="text-gray-600 hover:text-green-600 transition-colors"
                >
                  Signaler un Problème
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600">+237 6XX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600">contact@goodimmo.cm</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-gray-600" />
                <span className="text-gray-600">Yaoundé, Cameroun</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center"
          style={{ borderColor: 'var(--color-border)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-600">
            © 2024 GoodImmo. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <button 
              onClick={() => onViewChange('privacy')}
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              Politique de Confidentialité
            </button>
            <button 
              onClick={() => onViewChange('terms')}
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              Conditions d'Utilisation
            </button>
            <button 
              onClick={() => onViewChange('legal')}
              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
            >
              Mentions Légales
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}