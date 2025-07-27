import { useState } from 'react'
import { Filter, X, Search } from 'lucide-react'

interface FilterState {
  priceRange: [number, number]
  areaRange: [number, number]
  propertyTypes: string[]
  locations: string[]
  verified: boolean
  searchTerm: string
}

interface AdvancedFiltersProps {
  onFiltersChange: (filters: FilterState) => void
  onReset: () => void
}

const PROPERTY_TYPES = ['Résidentiel', 'Commercial', 'Agricole', 'Industriel']
const LOCATIONS = ['Douala', 'Yaoundé', 'Bafoussam', 'Bamenda', 'Garoua', 'Ngaoundéré']

export function AdvancedFilters({ onFiltersChange, onReset }: AdvancedFiltersProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 100000000],
    areaRange: [0, 5000],
    propertyTypes: [],
    locations: [],
    verified: true,
    searchTerm: ''
  })

  const updateFilters = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFiltersChange(updatedFilters)
  }

  const togglePropertyType = (type: string) => {
    const newTypes = filters.propertyTypes.includes(type)
      ? filters.propertyTypes.filter(t => t !== type)
      : [...filters.propertyTypes, type]
    updateFilters({ propertyTypes: newTypes })
  }

  const toggleLocation = (location: string) => {
    const newLocations = filters.locations.includes(location)
      ? filters.locations.filter(l => l !== location)
      : [...filters.locations, location]
    updateFilters({ locations: newLocations })
  }

  const resetFilters = () => {
    const defaultFilters = {
      priceRange: [0, 100000000] as [number, number],
      areaRange: [0, 5000] as [number, number],
      propertyTypes: [],
      locations: [],
      verified: true,
      searchTerm: ''
    }
    setFilters(defaultFilters)
    onFiltersChange(defaultFilters)
    onReset()
  }

  const formatPrice = (price: number) => {
    if (price >= 1000000) {
      return `${(price / 1000000).toFixed(1)}M`
    }
    if (price >= 1000) {
      return `${(price / 1000).toFixed(0)}K`
    }
    return price.toString()
  }

  const getActiveFilterCount = () => {
    let count = 0
    if (filters.propertyTypes.length > 0) count++
    if (filters.locations.length > 0) count++
    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 100000000) count++
    if (filters.areaRange[0] > 0 || filters.areaRange[1] < 5000) count++
    if (filters.searchTerm) count++
    return count
  }

  return (
    <div className="mb-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4 pb-3">
        <div className="flex items-center justify-between">
          <h3 className="flex items-center font-semibold">
            <Filter className="h-5 w-5 mr-2" />
            Filtres de Recherche
            {getActiveFilterCount() > 0 && (
              <span className="ml-2 bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                {getActiveFilterCount()}
              </span>
            )}
          </h3>
          <div className="flex items-center space-x-2">
            <button
              className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Réduire' : 'Étendre'}
            </button>
            {getActiveFilterCount() > 0 && (
              <button
                className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                onClick={resetFilters}
              >
                <X className="h-4 w-4 mr-1 inline" />
                Effacer
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher par titre, description, localisation..."
            value={filters.searchTerm}
            onChange={(e) => updateFilters({ searchTerm: e.target.value })}
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        {isExpanded && (
          <>
            {/* Price Range */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Prix (FCFA)</label>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Prix min"
                    value={filters.priceRange[0]}
                    onChange={(e) => updateFilters({ priceRange: [parseInt(e.target.value) || 0, filters.priceRange[1]] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <span className="text-gray-500">à</span>
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Prix max"
                    value={filters.priceRange[1]}
                    onChange={(e) => updateFilters({ priceRange: [filters.priceRange[0], parseInt(e.target.value) || 100000000] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Area Range */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Surface (m²)</label>
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Surface min"
                    value={filters.areaRange[0]}
                    onChange={(e) => updateFilters({ areaRange: [parseInt(e.target.value) || 0, filters.areaRange[1]] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <span className="text-gray-500">à</span>
                <div className="flex-1">
                  <input
                    type="number"
                    placeholder="Surface max"
                    value={filters.areaRange[1]}
                    onChange={(e) => updateFilters({ areaRange: [filters.areaRange[0], parseInt(e.target.value) || 5000] })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>

            {/* Property Types */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Types de Terrain</label>
              <div className="flex flex-wrap gap-2">
                {PROPERTY_TYPES.map((type) => (
                  <button
                    key={type}
                    className={`px-3 py-1 text-sm rounded-full border cursor-pointer transition-colors ${
                      filters.propertyTypes.includes(type)
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => togglePropertyType(type)}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Villes</label>
              <div className="flex flex-wrap gap-2">
                {LOCATIONS.map((location) => (
                  <button
                    key={location}
                    className={`px-3 py-1 text-sm rounded-full border cursor-pointer transition-colors ${
                      filters.locations.includes(location)
                        ? 'bg-green-600 text-white border-green-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    onClick={() => toggleLocation(location)}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>

            {/* Verified Only */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="verified"
                checked={filters.verified}
                onChange={(e) => updateFilters({ verified: e.target.checked })}
                className="rounded border-gray-300"
              />
              <label htmlFor="verified" className="text-sm text-gray-700">Afficher uniquement les terrains vérifiés</label>
            </div>
          </>
        )}
      </div>
    </div>
  )
}