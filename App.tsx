import { useState } from 'react'
import { motion } from 'motion/react'
import { InteractiveMap } from './components/InteractiveMap'
import { AdvancedFilters } from './components/AdvancedFilters'
import { ImageUpload } from './components/ImageUpload'
import { Pagination } from './components/Pagination'
import { Carousel } from './components/Carousel'
import { EnhancedAdminPanel } from './components/EnhancedAdminPanel'
import { LegalPages } from './components/LegalPages'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AuthDialog } from './components/AuthDialog'
import { HomePage } from './components/pages/HomePage'
import { MapPin, CheckCircle, Phone, Mail, User, Grid3X3, Map, X, ArrowLeft, Calendar, Share2, Heart } from 'lucide-react'
import { mockProperties, type Property } from './data/mockData'

export default function App() {
  const [currentView, setCurrentView] = useState('home')
  const [selectedPropertyId, setSelectedPropertyId] = useState<number | null>(null)
  const [showAuthDialog, setShowAuthDialog] = useState(false)
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [userName, setUserName] = useState('')
  const [listingView, setListingView] = useState('grid')
  const [filteredProperties, setFilteredProperties] = useState(mockProperties)
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(6)
  
  // États pour le formulaire de vente
  const [propertyImages, setPropertyImages] = useState<File[]>([])
  const [formData, setFormData] = useState({
    title: '',
    type: 'Résidentiel',
    price: '',
    area: '',
    location: '',
    description: ''
  })

  // Pagination logic
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProperties = filteredProperties.slice(startIndex, startIndex + itemsPerPage)

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const email = formData.get('email') as string
    
    setIsLoggedIn(true)
    setIsAdmin(email === 'admin@goodimmo.cm')
    setUserName(authMode === 'login' ? 'Utilisateur' : (formData.get('name') as string) || 'Utilisateur')
    setShowAuthDialog(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setIsAdmin(false)
    setUserName('')
    setCurrentView('home')
    setSelectedPropertyId(null)
  }

  const handleViewChange = (view: string) => {
    setCurrentView(view)
    setSelectedPropertyId(null)
  }

  const handleFiltersChange = (filters: any) => {
    let filtered = mockProperties

    if (filters.searchTerm) {
      filtered = filtered.filter(property =>
        property.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        property.location.toLowerCase().includes(filters.searchTerm.toLowerCase())
      )
    }

    filtered = filtered.filter(property => {
      const price = parseInt(property.price.replace(/,/g, ''))
      return price >= filters.priceRange[0] && price <= filters.priceRange[1]
    })

    filtered = filtered.filter(property => {
      const area = parseInt(property.area)
      return area >= filters.areaRange[0] && area <= filters.areaRange[1]
    })

    if (filters.propertyTypes.length > 0) {
      filtered = filtered.filter(property =>
        filters.propertyTypes.includes(property.type)
      )
    }

    if (filters.locations.length > 0) {
      filtered = filtered.filter(property =>
        filters.locations.some((location: string) => property.location.includes(location))
      )
    }

    if (filters.verified) {
      filtered = filtered.filter(property => property.verified)
    }

    setFilteredProperties(filtered)
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setFilteredProperties(mockProperties)
    setCurrentPage(1)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (propertyImages.length < 3) {
      alert('Veuillez ajouter au moins 3 images de votre terrain.')
      return
    }

    if (propertyImages.length > 10) {
      alert('Vous ne pouvez pas ajouter plus de 10 images.')
      return
    }

    if (!formData.title || !formData.price || !formData.area || !formData.location || !formData.description) {
      alert('Veuillez remplir tous les champs obligatoires.')
      return
    }

    console.log('Données soumises:', formData, 'Images:', propertyImages)
    alert('Votre terrain a été soumis pour vérification ! Nous vous contacterons sous 5-7 jours ouvrables.')
    
    setFormData({
      title: '',
      type: 'Résidentiel',
      price: '',
      area: '',
      location: '',
      description: ''
    })
    setPropertyImages([])
  }

  const renderListings = () => (
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
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>Terrains Disponibles</h1>
            <div className="flex items-center space-x-2">
              <button
                className={`px-3 py-1 text-sm rounded-md border transition-colors flex items-center ${
                  listingView === 'grid' 
                    ? 'text-white' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
                style={listingView === 'grid' ? { backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' } : {}}
                onClick={() => setListingView('grid')}
              >
                <Grid3X3 className="h-4 w-4 mr-1" />
                Grille
              </button>
              <button
                className={`px-3 py-1 text-sm rounded-md border transition-colors flex items-center ${
                  listingView === 'map' 
                    ? 'text-white' 
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
                style={listingView === 'map' ? { backgroundColor: 'var(--color-primary)', borderColor: 'var(--color-primary)' } : {}}
                onClick={() => setListingView('map')}
              >
                <Map className="h-4 w-4 mr-1" />
                Carte
              </button>
            </div>
          </div>
          <p className="text-gray-600">
            {filteredProperties.length} terrain(s) trouvé(s) - Tous vérifiés par nos agents géomètres
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <AdvancedFilters 
            onFiltersChange={handleFiltersChange}
            onReset={resetFilters}
          />
        </motion.div>

        {listingView === 'map' ? (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InteractiveMap 
              properties={filteredProperties}
              onPropertySelect={(property: Property) => setSelectedPropertyId(property.id)}
              selectedProperty={null}
            />
          </motion.div>
        ) : (
          <>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {paginatedProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="bg-white rounded-lg shadow-sm border cursor-pointer hover:shadow-lg transition-shadow h-full"
                  style={{ borderColor: 'var(--color-border)' }}
                >
                  <div className="relative">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <span className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Vérifié
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{property.title}</h3>
                    <p className="flex items-center text-gray-600 text-sm mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Prix:</span>
                        <span className="font-semibold">{property.price} FCFA</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Surface:</span>
                        <span>{property.area} m²</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Type:</span>
                        <span className="px-2 py-1 text-xs border rounded-full">{property.type}</span>
                      </div>
                      <motion.button 
                        className="w-full mt-4 px-4 py-2 text-white rounded-md transition-opacity"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                        onClick={() => setSelectedPropertyId(property.id)}
                        whileHover={{ scale: 1.02 }} 
                        whileTap={{ scale: 0.98 }}
                      >
                        Voir Détails
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              itemsPerPage={itemsPerPage}
              totalItems={filteredProperties.length}
            />
          </>
        )}

        {filteredProperties.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-600 mb-4">
              Aucun terrain ne correspond à vos critères de recherche.
            </p>
            <button 
              className="px-4 py-2 text-white rounded-md"
              style={{ backgroundColor: 'var(--color-primary)' }}
              onClick={resetFilters}
            >
              Réinitialiser les filtres
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )

  const renderPropertyDetail = () => {
    const property = mockProperties.find(p => p.id === selectedPropertyId)
    if (!property) return null

    return (
      <motion.div 
        className="min-h-screen py-8"
        style={{ backgroundColor: 'var(--color-background)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
            onClick={() => setSelectedPropertyId(null)}
            whileHover={{ x: -5 }}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Retour aux résultats
          </motion.button>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--color-primary)' }}>
                    {property.title}
                  </h1>
                  <p className="flex items-center text-gray-600 text-lg">
                    <MapPin className="h-5 w-5 mr-2" />
                    {property.location}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="p-2 border rounded-md hover:bg-gray-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    className="p-2 border rounded-md hover:bg-gray-50"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span>Vérifié le {new Date(property.verificationDate).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Publié le {new Date(property.verificationDate).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <Carousel images={property.images} title={property.title} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Prix</h3>
                      <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
                        {property.price} FCFA
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Surface</h3>
                      <p className="text-2xl font-semibold">{property.area} m²</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-2">Type</h3>
                      <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm font-medium">
                        {property.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
                  <h3 className="font-semibold text-lg mb-4">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{property.description}</p>
                </div>

                <div className="bg-white rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
                  <h3 className="font-semibold text-lg mb-4">Localisation</h3>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Carte de localisation</p>
                      <p className="text-sm text-gray-500">{property.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
                  <h3 className="font-semibold text-lg mb-4">Vendeur</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <User className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-semibold">{property.seller.name}</p>
                        <p className="text-sm text-gray-600">
                          <MapPin className="h-3 w-3 inline mr-1" />
                          {property.seller.location}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <p>
                        <Calendar className="h-4 w-4 inline mr-2" />
                        Membre depuis {new Date(property.seller.joinDate).toLocaleDateString('fr-FR')}
                      </p>
                    </div>

                    <div className="space-y-3 pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                      <motion.a
                        href={`tel:${property.seller.phone}`}
                        className="flex items-center justify-center w-full py-3 text-white rounded-md transition-colors"
                        style={{ backgroundColor: 'var(--color-primary)' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="h-5 w-5 mr-2" />
                        Appeler
                      </motion.a>
                      <motion.a
                        href={`mailto:${property.seller.email}`}
                        className="flex items-center justify-center w-full py-3 border rounded-md hover:bg-gray-50 transition-colors"
                        style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Mail className="h-5 w-5 mr-2" />
                        Envoyer un message
                      </motion.a>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">💡 Conseils de sécurité</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Vérifiez toujours les documents sur place</li>
                    <li>• Rencontrez le vendeur en personne</li>
                    <li>• Visitez le terrain avant tout engagement</li>
                    <li>• Consultez un notaire pour la transaction</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

  const renderSellProperty = () => (
    <motion.div 
      className="min-h-screen py-8"
      style={{ backgroundColor: 'var(--color-background)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>Vendre Mon Terrain</h1>
          <p className="text-gray-600">
            Soumettez votre terrain pour vérification et publication sur GoodImmo
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg shadow-sm border p-6"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <div className="mb-6">
            <h2 className="font-semibold text-lg">Informations du Terrain</h2>
            <p className="text-gray-600 text-sm">
              Tous les champs sont requis. Votre terrain sera vérifié par nos agents avant publication.
            </p>
          </div>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Titre de l'annonce *</label>
                <input 
                  type="text"
                  placeholder="Ex: Terrain résidentiel - Douala"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type de terrain *</label>
                <select 
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="Résidentiel">Résidentiel</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Agricole">Agricole</option>
                  <option value="Industriel">Industriel</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Prix (FCFA) *</label>
                <input 
                  type="number" 
                  placeholder="45000000"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Surface (m²) *</label>
                <input 
                  type="number" 
                  placeholder="500"
                  value={formData.area}
                  onChange={(e) => setFormData({...formData, area: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Localisation *</label>
              <input 
                type="text" 
                placeholder="Ex: Akwa, Douala"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
              <textarea 
                placeholder="Décrivez votre terrain, ses avantages, la proximité des commodités..."
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            <ImageUpload
              images={propertyImages}
              onImagesChange={setPropertyImages}
              minImages={3}
              maxImages={10}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Documents additionnels requis</label>
              <div className="text-sm text-gray-600 space-y-1">
                <p>• Titre foncier ou acte de propriété</p>
                <p>• Plan de localisation</p>
                <p>• Pièce d'identité du propriétaire</p>
                <p>• Certificat de non-gage (si applicable)</p>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2" style={{ color: 'var(--color-primary)' }}>Processus de Vérification</h4>
              <p className="text-sm text-gray-600">
                Après soumission, nos agents géomètres procéderont à la vérification de votre terrain 
                sous 5-7 jours ouvrables. Vous serez contacté pour coordonner la visite terrain et fournir 
                les documents physiques.
              </p>
            </div>

            <motion.button 
              type="submit"
              className="w-full py-3 text-white rounded-md font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ backgroundColor: 'var(--color-primary)' }}
              disabled={propertyImages.length < 3 || propertyImages.length > 10}
              whileHover={propertyImages.length >= 3 && propertyImages.length <= 10 ? { scale: 1.02 } : {}} 
              whileTap={propertyImages.length >= 3 && propertyImages.length <= 10 ? { scale: 0.98 } : {}}
            >
              Soumettre pour Vérification
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  )

  const renderCurrentView = () => {
    if (selectedPropertyId) return renderPropertyDetail()
    
    switch (currentView) {
      case 'home':
        return <HomePage isLoggedIn={isLoggedIn} onViewChange={handleViewChange} onShowAuth={() => setShowAuthDialog(true)} />
      case 'listings':
        return renderListings()
      case 'sell-property':
        return isLoggedIn ? renderSellProperty() : (
          <motion.div 
            className="min-h-screen flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-lg shadow-sm border p-6 max-w-md text-center" style={{ borderColor: 'var(--color-border)' }}>
              <h2 className="font-semibold text-lg mb-2">Connexion Requise</h2>
              <p className="text-gray-600 mb-4">
                Vous devez vous connecter pour vendre un terrain
              </p>
              <button 
                className="w-full py-2 text-white rounded-md"
                style={{ backgroundColor: 'var(--color-primary)' }}
                onClick={() => setShowAuthDialog(true)}
              >
                Se Connecter / S'inscrire
              </button>
            </div>
          </motion.div>
        )
      case 'admin':
        return isAdmin ? <EnhancedAdminPanel /> : <div>Accès non autorisé</div>
      case 'privacy':
      case 'terms':
      case 'legal':
      case 'contact':
      case 'report':
      case 'faq':
      case 'help':
        return <LegalPages type={currentView} onBack={() => setCurrentView('home')} />
      default:
        return <HomePage isLoggedIn={isLoggedIn} onViewChange={handleViewChange} onShowAuth={() => setShowAuthDialog(true)} />
    }
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Header
        currentView={currentView}
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        userName={userName}
        onViewChange={handleViewChange}
        onShowAuth={() => setShowAuthDialog(true)}
        onLogout={handleLogout}
      />
      
      {renderCurrentView()}
      
      <AuthDialog
        showAuthDialog={showAuthDialog}
        authMode={authMode}
        onAuthModeChange={setAuthMode}
        onClose={() => setShowAuthDialog(false)}
        onSubmit={handleAuth}
      />
      
      <Footer onViewChange={handleViewChange} />
    </div>
  )
}