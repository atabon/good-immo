import { motion } from 'motion/react'
import { Shield, Clock, Users, MapPin } from 'lucide-react'
import heroBackground from 'figma:asset/c58685ab81dbae80cc5e437da4e4c30de8c71f98.png'

interface HomePageProps {
  isLoggedIn: boolean
  onViewChange: (view: string) => void
  onShowAuth: () => void
}

export function HomePage({ isLoggedIn, onViewChange, onShowAuth }: HomePageProps) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Hero Section */}
      <motion.section 
        className="relative py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(31, 127, 32, 0.7), rgba(31, 127, 32, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Vente de Terrain Transparente au Cameroun
            </motion.h1>
            <motion.p 
              className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Éliminez les intermédiaires. Connectez directement vendeurs et acheteurs pour des transactions 
              de terrain sécurisées, vérifiées et équitables.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button 
                className="px-6 py-3 bg-white text-green-600 rounded-md hover:bg-white/90 transition-colors font-medium"
                onClick={() => onViewChange('listings')}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Explorer les Terrains
              </motion.button>
              <motion.button 
                className="px-6 py-3 border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors font-medium"
                onClick={() => isLoggedIn ? onViewChange('sell-property') : onShowAuth()}
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                Vendre Mon Terrain
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Pourquoi Choisir GoodImmo ?
            </h2>
            <p className="text-lg text-gray-600">
              Une solution moderne pour un marché foncier transparent
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Vérification Professionnelle", description: "Chaque terrain est vérifié par des agents géomètres qualifiés avant publication" },
              { icon: Users, title: "Contact Direct", description: "Négociez directement avec le propriétaire, sans intermédiaires" },
              { icon: Clock, title: "Transactions Rapides", description: "Processus simplifié pour des ventes plus rapides et efficaces" },
              { icon: MapPin, title: "Localisation Précise", description: "Informations géographiques détaillées et fiables" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white rounded-lg shadow-sm border p-6 h-full"
                style={{ borderColor: 'var(--color-border)' }}
              >
                <div className="text-center">
                  <feature.icon className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--color-primary)' }} />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How it works */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
              Comment Ça Marche
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Inscription & Soumission", description: "Créez votre compte et soumettez les détails de votre terrain" },
              { step: "2", title: "Vérification Terrain", description: "Nos agents géomètres vérifient la légalité et l'authenticité" },
              { step: "3", title: "Publication & Vente", description: "Votre terrain est publié et les acheteurs vous contactent directement" }
            ].map((step, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-medium"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.step}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}