import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle, Clock, X, Eye, Users, BarChart3, MapPin, Settings } from 'lucide-react'

interface AdminProperty {
  id: number
  title: string
  location: string
  price: string
  area: string
  type: string
  status: 'pending' | 'verified' | 'rejected'
  submissionDate: string
  seller: {
    name: string
    phone: string
    email: string
  }
  images: string[]
}

// Mock data pour l'admin
const mockAdminProperties: AdminProperty[] = [
  {
    id: 1,
    title: "Terrain Résidentiel - Douala",
    location: "Akwa, Douala",
    price: "45,000,000",
    area: "500",
    type: "Résidentiel",
    status: 'verified',
    submissionDate: "2024-01-15",
    seller: { name: "Jean Mballa", phone: "+237 6XX XXX XXX", email: "jean.mballa@email.com" },
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"]
  },
  {
    id: 6,
    title: "Terrain Commercial - Douala Port",
    location: "Zone Portuaire, Douala",
    price: "95,000,000",
    area: "1000",
    type: "Commercial",
    status: 'pending',
    submissionDate: "2024-01-28",
    seller: { name: "Alice Ngoula", phone: "+237 6XX XXX XXX", email: "alice.ngoula@email.com" },
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"]
  },
  {
    id: 7,
    title: "Terrain Agricole - Mbalmayo",
    location: "Périphérie, Mbalmayo",
    price: "15,000,000",
    area: "2500",
    type: "Agricole",
    status: 'pending',
    submissionDate: "2024-01-30",
    seller: { name: "Pierre Essomba", phone: "+237 6XX XXX XXX", email: "pierre.essomba@email.com" },
    images: ["https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop"]
  }
]

export function AdminPanel() {
  const [properties, setProperties] = useState(mockAdminProperties)
  const [selectedTab, setSelectedTab] = useState('pending')
  const [selectedProperty, setSelectedProperty] = useState<AdminProperty | null>(null)

  const updatePropertyStatus = (id: number, status: 'verified' | 'rejected') => {
    setProperties(props => 
      props.map(prop => 
        prop.id === id ? { ...prop, status } : prop
      )
    )
    setSelectedProperty(null)
  }

  const getFilteredProperties = () => {
    return properties.filter(prop => prop.status === selectedTab)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'pending':
        return <Clock className="h-5 w-5 text-amber-500" />
      case 'rejected':
        return <X className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'verified':
        return 'Vérifié'
      case 'pending':
        return 'En attente'
      case 'rejected':
        return 'Rejeté'
      default:
        return status
    }
  }

  const getTabCount = (status: string) => {
    return properties.filter(prop => prop.status === status).length
  }

  const renderStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <motion.div 
        className="bg-white rounded-lg border p-6"
        style={{ borderColor: 'var(--color-border)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center">
          <div className="p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}>
            <BarChart3 className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Terrains</p>
            <p className="text-2xl font-semibold">{properties.length}</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white rounded-lg border p-6"
        style={{ borderColor: 'var(--color-border)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center">
          <div className="p-2 bg-green-100 rounded-lg mr-4">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Vérifiés</p>
            <p className="text-2xl font-semibold text-green-600">{getTabCount('verified')}</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white rounded-lg border p-6"
        style={{ borderColor: 'var(--color-border)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex items-center">
          <div className="p-2 bg-amber-100 rounded-lg mr-4">
            <Clock className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">En Attente</p>
            <p className="text-2xl font-semibold text-amber-600">{getTabCount('pending')}</p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white rounded-lg border p-6"
        style={{ borderColor: 'var(--color-border)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="flex items-center">
          <div className="p-2 bg-red-100 rounded-lg mr-4">
            <X className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Rejetés</p>
            <p className="text-2xl font-semibold text-red-600">{getTabCount('rejected')}</p>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const renderPropertyModal = () => {
    if (!selectedProperty) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <motion.div
          className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{selectedProperty.title}</h2>
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedProperty.location}
                </p>
              </div>
              <button 
                onClick={() => setSelectedProperty(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <img
              src={selectedProperty.images[0]}
              alt={selectedProperty.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm font-medium text-gray-700">Prix</label>
                <p className="text-xl font-semibold" style={{ color: 'var(--color-primary)' }}>
                  {selectedProperty.price} FCFA
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Surface</label>
                <p className="text-lg">{selectedProperty.area} m²</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Type</label>
                <span className="inline-block px-2 py-1 text-sm border rounded-full">
                  {selectedProperty.type}
                </span>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700">Date de soumission</label>
                <p>{new Date(selectedProperty.submissionDate).toLocaleDateString('fr-FR')}</p>
              </div>
            </div>

            <div className="border-t pt-6 mb-6">
              <h3 className="font-semibold mb-4">Informations du Vendeur</h3>
              <div className="space-y-2">
                <p><strong>Nom:</strong> {selectedProperty.seller.name}</p>
                <p><strong>Téléphone:</strong> {selectedProperty.seller.phone}</p>
                <p><strong>Email:</strong> {selectedProperty.seller.email}</p>
              </div>
            </div>

            {selectedProperty.status === 'pending' && (
              <div className="flex space-x-4">
                <motion.button
                  className="flex-1 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  onClick={() => updatePropertyStatus(selectedProperty.id, 'verified')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Approuver
                </motion.button>
                <motion.button
                  className="flex-1 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                  onClick={() => updatePropertyStatus(selectedProperty.id, 'rejected')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Rejeter
                </motion.button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div 
      className="min-h-screen py-8"
      style={{ backgroundColor: 'var(--color-background)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
            Administration GoodImmo
          </h1>
          <p className="text-gray-600">
            Gérez les terrains soumis et surveillez l'activité de la plateforme
          </p>
        </motion.div>

        {renderStats()}

        {/* Onglets */}
        <div className="bg-white rounded-lg border mb-6" style={{ borderColor: 'var(--color-border)' }}>
          <div className="border-b" style={{ borderColor: 'var(--color-border)' }}>
            <nav className="flex space-x-8 px-6">
              {[
                { key: 'pending', label: 'En Attente', count: getTabCount('pending') },
                { key: 'verified', label: 'Vérifiés', count: getTabCount('verified') },
                { key: 'rejected', label: 'Rejetés', count: getTabCount('rejected') }
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`py-4 border-b-2 transition-colors ${
                    selectedTab === tab.key
                      ? 'border-green-500 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                  onClick={() => setSelectedTab(tab.key)}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </nav>
          </div>

          {/* Liste des terrains */}
          <div className="p-6">
            {getFilteredProperties().length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Aucun terrain dans cette catégorie
              </div>
            ) : (
              <div className="space-y-4">
                {getFilteredProperties().map((property) => (
                  <motion.div
                    key={property.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                    style={{ borderColor: 'var(--color-border)' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={property.images[0]}
                        alt={property.title}
                        className="w-16 h-12 object-cover rounded"
                      />
                      <div>
                        <h3 className="font-semibold">{property.title}</h3>
                        <p className="text-sm text-gray-600">{property.location}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>{property.price} FCFA</span>
                          <span>{property.area} m²</span>
                          <span>{property.type}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(property.status)}
                        <span className="text-sm">{getStatusText(property.status)}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {new Date(property.submissionDate).toLocaleDateString('fr-FR')}
                      </span>
                      <motion.button
                        className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                        onClick={() => setSelectedProperty(property)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="h-5 w-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {renderPropertyModal()}
    </motion.div>
  )
}