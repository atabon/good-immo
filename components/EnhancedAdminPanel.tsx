import { useState } from 'react'
import { motion } from 'motion/react'
import { CheckCircle, Clock, X, Eye, Users, BarChart3, MapPin, Settings, Shield, AlertTriangle, FileText, Handshake, Ban, TrendingUp, UserCheck, Home, Building, UserX } from 'lucide-react'

interface AdminProperty {
  id: number
  title: string
  location: string
  price: string
  area: string
  type: string
  status: 'pending' | 'verified' | 'rejected' | 'sold'
  submissionDate: string
  seller: {
    name: string
    phone: string
    email: string
    id: number
  }
  images: string[]
  documents?: string[]
}

interface AdminSeller {
  id: number
  name: string
  email: string
  phone: string
  location: string
  joinDate: string
  status: 'active' | 'suspended' | 'banned'
  propertiesCount: number
  totalSales: string
  reportCount: number
}

interface AdminReport {
  id: number
  type: 'seller' | 'property'
  targetId: number
  targetName: string
  reporterEmail: string
  reason: string
  description: string
  date: string
  status: 'pending' | 'resolved' | 'dismissed'
}

interface AdminSale {
  id: number
  propertyTitle: string
  sellerName: string
  buyerName: string
  salePrice: string
  saleDate: string
  commission: string
  status: 'completed' | 'processing'
}

// Mock data
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
    seller: { id: 1, name: "Jean Mballa", phone: "+237 6XX XXX XXX", email: "jean.mballa@email.com" },
    images: ["https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"],
    documents: ["titre_foncier.pdf", "plan_localisation.pdf"]
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
    seller: { id: 2, name: "Alice Ngoula", phone: "+237 6XX XXX XXX", email: "alice.ngoula@email.com" },
    images: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"],
    documents: ["acte_propriete.pdf"]
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
    seller: { id: 3, name: "Pierre Essomba", phone: "+237 6XX XXX XXX", email: "pierre.essomba@email.com" },
    images: ["https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop"]
  },
  {
    id: 8,
    title: "Terrain Résidentiel - Yaoundé",
    location: "Bastos, Yaoundé",
    price: "75,000,000",
    area: "800",
    type: "Résidentiel",
    status: 'sold',
    submissionDate: "2023-12-10",
    seller: { id: 1, name: "Jean Mballa", phone: "+237 6XX XXX XXX", email: "jean.mballa@email.com" },
    images: ["https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=400&h=300&fit=crop"]
  }
]

const mockSellers: AdminSeller[] = [
  {
    id: 1,
    name: "Jean Mballa",
    email: "jean.mballa@email.com",
    phone: "+237 6XX XXX XXX",
    location: "Douala, Cameroun",
    joinDate: "2023-08-15",
    status: 'active',
    propertiesCount: 3,
    totalSales: "120,000,000",
    reportCount: 0
  },
  {
    id: 2,
    name: "Alice Ngoula",
    email: "alice.ngoula@email.com",
    phone: "+237 6XX XXX XXX",
    location: "Douala, Cameroun",
    joinDate: "2023-10-15",
    status: 'active',
    propertiesCount: 1,
    totalSales: "0",
    reportCount: 1
  },
  {
    id: 3,
    name: "Pierre Essomba",
    email: "pierre.essomba@email.com",
    phone: "+237 6XX XXX XXX",
    location: "Mbalmayo, Cameroun",
    joinDate: "2023-09-05",
    status: 'suspended',
    propertiesCount: 1,
    totalSales: "0",
    reportCount: 2
  }
]

const mockReports: AdminReport[] = [
  {
    id: 1,
    type: 'seller',
    targetId: 2,
    targetName: "Alice Ngoula",
    reporterEmail: "anonyme@email.com",
    reason: "Informations fausses",
    description: "Le vendeur a fourni de fausses informations sur le terrain.",
    date: "2024-01-25",
    status: 'pending'
  },
  {
    id: 2,
    type: 'property',
    targetId: 7,
    targetName: "Terrain Agricole - Mbalmayo",
    reporterEmail: "acheteur@email.com",
    reason: "Prix excessif",
    description: "Le prix demandé semble excessif par rapport au marché.",
    date: "2024-01-28",
    status: 'pending'
  }
]

const mockSales: AdminSale[] = [
  {
    id: 1,
    propertyTitle: "Terrain Résidentiel - Yaoundé",
    sellerName: "Jean Mballa",
    buyerName: "Marie Fokou",
    salePrice: "75,000,000",
    saleDate: "2024-01-20",
    commission: "3,750,000",
    status: 'completed'
  },
  {
    id: 2,
    propertyTitle: "Terrain Commercial - Douala",
    sellerName: "Samuel Nkomo",
    buyerName: "Entreprise ABC",
    salePrice: "150,000,000",
    saleDate: "2024-01-15",
    commission: "7,500,000",
    status: 'processing'
  }
]

export function EnhancedAdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [properties, setProperties] = useState(mockAdminProperties)
  const [sellers, setSellers] = useState(mockSellers)
  const [reports, setReports] = useState(mockReports)
  const [sales] = useState(mockSales)
  const [selectedItem, setSelectedItem] = useState<any>(null)
  const [modalType, setModalType] = useState<string>('')

  const updatePropertyStatus = (id: number, status: 'verified' | 'rejected') => {
    setProperties(props => 
      props.map(prop => 
        prop.id === id ? { ...prop, status } : prop
      )
    )
    setSelectedItem(null)
  }

  const updateSellerStatus = (id: number, status: 'active' | 'suspended' | 'banned') => {
    setSellers(sellers => 
      sellers.map(seller => 
        seller.id === id ? { ...seller, status } : seller
      )
    )
  }

  const updateReportStatus = (id: number, status: 'resolved' | 'dismissed') => {
    setReports(reports => 
      reports.map(report => 
        report.id === id ? { ...report, status } : report
      )
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
      case 'active':
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'pending':
      case 'processing':
        return <Clock className="h-5 w-5 text-amber-500" />
      case 'rejected':
      case 'dismissed':
        return <X className="h-5 w-5 text-red-500" />
      case 'suspended':
        return <Ban className="h-5 w-5 text-orange-500" />
      case 'banned':
        return <UserX className="h-5 w-5 text-red-600" />
      case 'sold':
        return <Handshake className="h-5 w-5 text-blue-500" />
      case 'resolved':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      default:
        return null
    }
  }

  const getStatusText = (status: string) => {
    const statusMap = {
      'verified': 'Vérifié',
      'pending': 'En attente',
      'rejected': 'Rejeté',
      'sold': 'Vendu',
      'active': 'Actif',
      'suspended': 'Suspendu',
      'banned': 'Banni',
      'completed': 'Terminée',
      'processing': 'En cours',
      'resolved': 'Résolu',
      'dismissed': 'Rejeté'
    }
    return statusMap[status] || status
  }

  const tabs = [
    { id: 'dashboard', label: 'Tableau de bord', icon: BarChart3 },
    { id: 'properties', label: 'Vérifications', icon: Shield },
    { id: 'sellers', label: 'Vendeurs', icon: Users },
    { id: 'sales', label: 'Ventes', icon: TrendingUp },
    { id: 'reports', label: 'Signalements', icon: AlertTriangle }
  ]

  const renderStats = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
      <motion.div 
        className="bg-white rounded-lg border p-6"
        style={{ borderColor: 'var(--color-border)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center">
          <div className="p-2 rounded-lg mr-4" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}>
            <Home className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
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
            <p className="text-2xl font-semibold text-green-600">
              {properties.filter(p => p.status === 'verified').length}
            </p>
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
            <p className="text-2xl font-semibold text-amber-600">
              {properties.filter(p => p.status === 'pending').length}
            </p>
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
          <div className="p-2 bg-blue-100 rounded-lg mr-4">
            <Users className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Vendeurs Actifs</p>
            <p className="text-2xl font-semibold text-blue-600">
              {sellers.filter(s => s.status === 'active').length}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="bg-white rounded-lg border p-6"
        style={{ borderColor: 'var(--color-border)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="flex items-center">
          <div className="p-2 bg-red-100 rounded-lg mr-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Signalements</p>
            <p className="text-2xl font-semibold text-red-600">
              {reports.filter(r => r.status === 'pending').length}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const renderProperties = () => (
    <div className="bg-white rounded-lg border" style={{ borderColor: 'var(--color-border)' }}>
      <div className="p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <h3 className="text-lg font-semibold">Vérifications de Terrains</h3>
        <p className="text-gray-600 text-sm">Gérez les soumissions de terrains en attente de vérification</p>
      </div>
      <div className="p-6">
        {properties.filter(p => p.status === 'pending').length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            Aucun terrain en attente de vérification
          </div>
        ) : (
          <div className="space-y-4">
            {properties.filter(p => p.status === 'pending').map((property) => (
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
                    <h4 className="font-semibold">{property.title}</h4>
                    <p className="text-sm text-gray-600">{property.location}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{property.price} FCFA</span>
                      <span>{property.area} m²</span>
                      <span>Vendeur: {property.seller.name}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <motion.button
                    className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
                    onClick={() => updatePropertyStatus(property.id, 'verified')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Approuver
                  </motion.button>
                  <motion.button
                    className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
                    onClick={() => updatePropertyStatus(property.id, 'rejected')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Rejeter
                  </motion.button>
                  <motion.button
                    className="p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100"
                    onClick={() => {
                      setSelectedItem(property)
                      setModalType('property')
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="h-4 w-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  const renderSellers = () => (
    <div className="bg-white rounded-lg border" style={{ borderColor: 'var(--color-border)' }}>
      <div className="p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <h3 className="text-lg font-semibold">Gestion des Vendeurs</h3>
        <p className="text-gray-600 text-sm">Surveillez et gérez les comptes vendeurs</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {sellers.map((seller) => (
            <motion.div
              key={seller.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              style={{ borderColor: 'var(--color-border)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold">{seller.name}</h4>
                  <p className="text-sm text-gray-600">{seller.email}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{seller.propertiesCount} terrains</span>
                    <span>{seller.totalSales} FCFA vendus</span>
                    {seller.reportCount > 0 && (
                      <span className="text-red-500">{seller.reportCount} signalement(s)</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  {getStatusIcon(seller.status)}
                  <span className="text-sm">{getStatusText(seller.status)}</span>
                </div>
                
                {seller.status !== 'banned' && (
                  <div className="flex space-x-2">
                    {seller.status === 'active' ? (
                      <motion.button
                        className="px-3 py-1 bg-orange-600 text-white rounded-md text-sm hover:bg-orange-700"
                        onClick={() => updateSellerStatus(seller.id, 'suspended')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Suspendre
                      </motion.button>
                    ) : (
                      <motion.button
                        className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
                        onClick={() => updateSellerStatus(seller.id, 'active')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Activer
                      </motion.button>
                    )}
                    <motion.button
                      className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-red-700"
                      onClick={() => updateSellerStatus(seller.id, 'banned')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Bannir
                    </motion.button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSales = () => (
    <div className="bg-white rounded-lg border" style={{ borderColor: 'var(--color-border)' }}>
      <div className="p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <h3 className="text-lg font-semibold">Historique des Ventes</h3>
        <p className="text-gray-600 text-sm">Suivez toutes les transactions effectuées sur la plateforme</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {sales.map((sale) => (
            <motion.div
              key={sale.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              style={{ borderColor: 'var(--color-border)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <h4 className="font-semibold">{sale.propertyTitle}</h4>
                <p className="text-sm text-gray-600">
                  {sale.sellerName} → {sale.buyerName}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Prix: {sale.salePrice} FCFA</span>
                  <span>Commission: {sale.commission} FCFA</span>
                  <span>Date: {new Date(sale.saleDate).toLocaleDateString('fr-FR')}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                {getStatusIcon(sale.status)}
                <span className="text-sm">{getStatusText(sale.status)}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderReports = () => (
    <div className="bg-white rounded-lg border" style={{ borderColor: 'var(--color-border)' }}>
      <div className="p-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
        <h3 className="text-lg font-semibold">Signalements</h3>
        <p className="text-gray-600 text-sm">Gérez les signalements d'utilisateurs</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {reports.filter(r => r.status === 'pending').map((report) => (
            <motion.div
              key={report.id}
              className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              style={{ borderColor: 'var(--color-border)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-semibold">Signalement - {report.targetName}</h4>
                  <p className="text-sm text-gray-600">
                    Type: {report.type === 'seller' ? 'Vendeur' : 'Terrain'} | 
                    Motif: {report.reason}
                  </p>
                </div>
                <span className="text-xs text-gray-500">
                  {new Date(report.date).toLocaleDateString('fr-FR')}
                </span>
              </div>
              
              <p className="text-sm text-gray-700 mb-4">{report.description}</p>
              
              <div className="flex space-x-2">
                <motion.button
                  className="px-3 py-1 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
                  onClick={() => updateReportStatus(report.id, 'resolved')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Résoudre
                </motion.button>
                <motion.button
                  className="px-3 py-1 bg-gray-600 text-white rounded-md text-sm hover:bg-gray-700"
                  onClick={() => updateReportStatus(report.id, 'dismissed')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Rejeter
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderModal = () => {
    if (!selectedItem) return null

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
              <h2 className="text-xl font-semibold">
                {modalType === 'property' ? 'Détails du Terrain' : 'Détails'}
              </h2>
              <button 
                onClick={() => setSelectedItem(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {modalType === 'property' && (
              <div className="space-y-4">
                <img
                  src={selectedItem.images[0]}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Titre</label>
                    <p>{selectedItem.title}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Prix</label>
                    <p>{selectedItem.price} FCFA</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Surface</label>
                    <p>{selectedItem.area} m²</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Type</label>
                    <p>{selectedItem.type}</p>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Localisation</label>
                  <p>{selectedItem.location}</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Vendeur</label>
                  <p>{selectedItem.seller.name} - {selectedItem.seller.email}</p>
                </div>

                {selectedItem.documents && (
                  <div>
                    <label className="text-sm font-medium text-gray-700">Documents fournis</label>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {selectedItem.documents.map((doc, index) => (
                        <li key={index}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedItem.status === 'pending' && (
                  <div className="flex space-x-4 pt-4">
                    <motion.button
                      className="flex-1 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      onClick={() => updatePropertyStatus(selectedItem.id, 'verified')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Approuver
                    </motion.button>
                    <motion.button
                      className="flex-1 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      onClick={() => updatePropertyStatus(selectedItem.id, 'rejected')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Rejeter
                    </motion.button>
                  </div>
                )}
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
            Tableau de bord complet pour la gestion de la plateforme
          </p>
        </motion.div>

        {renderStats()}

        {/* Navigation tabs */}
        <div className="bg-white rounded-lg border mb-6" style={{ borderColor: 'var(--color-border)' }}>
          <nav className="flex space-x-0 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center px-6 py-4 border-b-2 whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-green-500 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'dashboard' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-lg font-semibold mb-4">Activité Récente</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Terrain vérifié: Douala Centre</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-sm">Nouveau vendeur inscrit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <span className="text-sm">Nouveau signalement reçu</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg border p-6" style={{ borderColor: 'var(--color-border)' }}>
                <h3 className="text-lg font-semibold mb-4">Actions Requises</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Terrains à vérifier</span>
                    <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                      {properties.filter(p => p.status === 'pending').length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Signalements en attente</span>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs">
                      {reports.filter(r => r.status === 'pending').length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'properties' && renderProperties()}
          {activeTab === 'sellers' && renderSellers()}
          {activeTab === 'sales' && renderSales()}
          {activeTab === 'reports' && renderReports()}
        </motion.div>
      </div>

      {renderModal()}
    </motion.div>
  )
}