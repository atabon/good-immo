import { useState } from 'react'
import { MapPin, Navigation } from 'lucide-react'

interface Property {
  id: number
  title: string
  location: string
  price: string
  area: string
  type: string
  verified: boolean
  coordinates: { lat: number; lng: number }
}

interface InteractiveMapProps {
  properties: Property[]
  onPropertySelect: (property: Property) => void
  selectedProperty?: Property | null
}

export function InteractiveMap({ properties, onPropertySelect, selectedProperty }: InteractiveMapProps) {
  const [mapCenter, setMapCenter] = useState({ lat: 3.848, lng: 11.502 }) // Cameroun center
  const [zoom, setZoom] = useState(7)

  // Mock coordinates for Cameroon cities
  const mockCoordinates = {
    "Douala": { lat: 4.0511, lng: 9.7679 },
    "Yaoundé": { lat: 3.848, lng: 11.502 },
    "Bafoussam": { lat: 5.4781, lng: 10.4172 },
    "Bamenda": { lat: 5.9597, lng: 10.1581 },
    "Garoua": { lat: 9.3265, lng: 13.3957 }
  }

  const getPropertyCoordinates = (location: string) => {
    const city = Object.keys(mockCoordinates).find(city => location.includes(city))
    return city ? mockCoordinates[city] : { lat: 3.848, lng: 11.502 }
  }

  const zoomToProperty = (property: Property) => {
    const coords = getPropertyCoordinates(property.location)
    setMapCenter(coords)
    setZoom(12)
    onPropertySelect(property)
  }

  return (
    <div className="h-[500px] overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm">
      <div className="p-4 pb-2 border-b border-gray-200">
        <h3 className="flex items-center font-semibold">
          <Navigation className="h-5 w-5 mr-2" />
          Carte des Terrains
        </h3>
      </div>
      <div className="p-0 h-full">
        <div className="relative h-full bg-gradient-to-br from-green-100 to-green-200 overflow-hidden">
          {/* Simplified map background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100">
            <svg className="w-full h-full opacity-20" viewBox="0 0 400 400">
              <path
                d="M50 50 Q150 30 250 60 T350 100 L350 300 Q250 320 150 290 T50 250 Z"
                fill="currentColor"
                className="text-green-600"
              />
              <path
                d="M80 80 Q180 60 280 90 T380 130 L380 280 Q280 300 180 270 T80 230 Z"
                fill="currentColor"
                className="text-green-500"
              />
            </svg>
          </div>

          {/* Property markers */}
          <div className="absolute inset-0">
            {properties.map((property) => {
              const coords = getPropertyCoordinates(property.location)
              const x = ((coords.lng - 8) / 8) * 100 // Normalize longitude
              const y = ((7 - coords.lat) / 4) * 100 // Normalize latitude
              
              return (
                <div
                  key={property.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
                    selectedProperty?.id === property.id ? 'scale-125 z-20' : 'z-10'
                  }`}
                  style={{ left: `${Math.max(5, Math.min(95, x))}%`, top: `${Math.max(5, Math.min(95, y))}%` }}
                  onClick={() => zoomToProperty(property)}
                >
                  <div className={`relative ${selectedProperty?.id === property.id ? 'animate-pulse' : ''}`}>
                    <MapPin 
                      className={`h-8 w-8 ${
                        selectedProperty?.id === property.id 
                          ? 'text-red-500' 
                          : 'text-primary'
                      } drop-shadow-lg`}
                    />
                    {property.verified && (
                      <span className="absolute -top-2 -right-2 scale-75 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
                        ✓
                      </span>
                    )}
                    
                    {/* Property info popup */}
                    {selectedProperty?.id === property.id && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-48 bg-white rounded-lg shadow-lg border p-3 z-30">
                        <h4 className="font-semibold text-sm">{property.title}</h4>
                        <p className="text-xs text-muted-foreground">{property.location}</p>
                        <p className="text-sm font-semibold text-primary">{property.price} FCFA</p>
                        <p className="text-xs">{property.area} m²</p>
                        <button 
                          className="w-full mt-2 px-3 py-1 text-sm bg-green-600 text-white rounded-md hover:bg-green-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            onPropertySelect(property)
                          }}
                        >
                          Voir Détails
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Map controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <button
              className="block w-8 h-8 bg-white/90 border border-gray-300 rounded text-sm hover:bg-white"
              onClick={() => setZoom(Math.min(15, zoom + 1))}
            >
              +
            </button>
            <button
              className="block w-8 h-8 bg-white/90 border border-gray-300 rounded text-sm hover:bg-white"
              onClick={() => setZoom(Math.max(5, zoom - 1))}
            >
              -
            </button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 space-y-2">
            <h5 className="font-semibold text-sm">Légende</h5>
            <div className="flex items-center space-x-2 text-xs">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Terrain disponible</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <MapPin className="h-4 w-4 text-red-500" />
              <span>Terrain sélectionné</span>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <span className="scale-75 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">✓</span>
              <span>Vérifié</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}