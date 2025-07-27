import { motion } from 'motion/react'
import { X } from 'lucide-react'

interface AuthDialogProps {
  showAuthDialog: boolean
  authMode: 'login' | 'register'
  onAuthModeChange: (mode: 'login' | 'register') => void
  onClose: () => void
  onSubmit: (e: React.FormEvent) => void
}

export function AuthDialog({ 
  showAuthDialog, 
  authMode, 
  onAuthModeChange, 
  onClose, 
  onSubmit 
}: AuthDialogProps) {
  if (!showAuthDialog) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        className="bg-white rounded-lg max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {authMode === 'login' ? 'Connexion' : 'Créer un Compte'}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <p className="text-gray-600 mb-6">
            {authMode === 'login' 
              ? 'Connectez-vous à votre compte' 
              : 'Rejoignez GoodImmo pour vendre ou acheter des terrains'
            }
          </p>

          <div className="flex mb-6">
            <button
              className={`flex-1 py-2 text-center rounded-l-md transition-colors ${
                authMode === 'login' 
                  ? 'text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
              style={authMode === 'login' ? { backgroundColor: 'var(--color-primary)' } : {}}
              onClick={() => onAuthModeChange('login')}
            >
              Connexion
            </button>
            <button
              className={`flex-1 py-2 text-center rounded-r-md transition-colors ${
                authMode === 'register' 
                  ? 'text-white' 
                  : 'bg-gray-100 text-gray-700'
              }`}
              style={authMode === 'register' ? { backgroundColor: 'var(--color-primary)' } : {}}
              onClick={() => onAuthModeChange('register')}
            >
              Inscription
            </button>
          </div>

          {authMode === 'login' ? (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="admin@goodimmo.cm pour accès admin"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                <input 
                  type="password" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <motion.button 
                type="submit"
                className="w-full py-2 text-white rounded-md font-medium"
                style={{ backgroundColor: 'var(--color-primary)' }}
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                Se Connecter
              </motion.button>
            </form>
          ) : (
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                <input 
                  name="name" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email"
                  name="email" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                <input 
                  type="tel" 
                  placeholder="+237 6XX XXX XXX" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                <input 
                  type="password" 
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <motion.button 
                type="submit"
                className="w-full py-2 text-white rounded-md font-medium"
                style={{ backgroundColor: 'var(--color-primary)' }}
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                Créer mon Compte
              </motion.button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  )
}