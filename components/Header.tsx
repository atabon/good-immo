import { motion } from 'motion/react'
import logo from 'figma:asset/d53c1a448fc8a1ad956c362d2aeeb8be8067bcb2.png'

interface HeaderProps {
  currentView: string
  isLoggedIn: boolean
  isAdmin: boolean
  userName: string
  onViewChange: (view: string) => void
  onShowAuth: () => void
  onLogout: () => void
}

export function Header({ 
  currentView, 
  isLoggedIn, 
  isAdmin, 
  userName, 
  onViewChange, 
  onShowAuth, 
  onLogout 
}: HeaderProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-b shadow-sm sticky top-0 z-50"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => onViewChange('home')}
          >
            <div className="flex items-center">
              <img src={logo} alt="GoodImmo Logo" className="h-12 w-auto" />
              <span className="ml-2 text-xl font-semibold hidden sm:block" style={{ color: 'var(--color-primary)' }}>
                GoodImmo
              </span>
            </div>
          </motion.div>
          
          <nav className="hidden md:flex space-x-6">
            <button
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                currentView === 'home' 
                  ? 'text-white' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={currentView === 'home' ? { backgroundColor: 'var(--color-primary)' } : { color: 'var(--color-primary)' }}
              onClick={() => onViewChange('home')}
            >
              Accueil
            </button>
            <button
              className={`px-3 py-2 rounded-md transition-colors text-sm ${
                currentView === 'listings' 
                  ? 'text-white' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              style={currentView === 'listings' ? { backgroundColor: 'var(--color-primary)' } : { color: 'var(--color-primary)' }}
              onClick={() => onViewChange('listings')}
            >
              Terrains Disponibles
            </button>
            {isLoggedIn && (
              <button
                className={`px-3 py-2 rounded-md transition-colors text-sm ${
                  currentView === 'sell-property' 
                    ? 'text-white' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={currentView === 'sell-property' ? { backgroundColor: 'var(--color-primary)' } : { color: 'var(--color-primary)' }}
                onClick={() => onViewChange('sell-property')}
              >
                Vendre Mon Terrain
              </button>
            )}
            {isAdmin && (
              <button
                className={`px-3 py-2 rounded-md transition-colors text-sm ${
                  currentView === 'admin' 
                    ? 'text-white' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                style={currentView === 'admin' ? { backgroundColor: 'var(--color-primary)' } : { color: 'var(--color-primary)' }}
                onClick={() => onViewChange('admin')}
              >
                Administration
              </button>
            )}
          </nav>
          
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 hidden sm:block">
                  Bonjour, {userName} {isAdmin && '(Admin)'}
                </span>
                <button 
                  className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
                  onClick={onLogout}
                >
                  Déconnexion
                </button>
              </div>
            ) : (
              <button 
                className="px-4 py-2 text-white rounded-md hover:opacity-90 transition-opacity text-sm"
                style={{ backgroundColor: 'var(--color-primary)' }}
                onClick={onShowAuth}
              >
                Connexion
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.header>
  )
}