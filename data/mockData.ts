export interface Property {
  id: number
  title: string
  location: string
  price: string
  area: string
  type: string
  verified: boolean
  verificationDate: string
  description: string
  seller: {
    name: string
    phone: string
    email: string
    location: string
    joinDate: string
  }
  images: string[]
  coordinates: { lat: number; lng: number }
}

export const mockProperties: Property[] = [
  {
    id: 1,
    title: "Terrain Résidentiel - Douala",
    location: "Akwa, Douala",
    price: "45,000,000",
    area: "500",
    type: "Résidentiel",
    verified: true,
    verificationDate: "2024-01-15",
    description: "Terrain bien situé dans le quartier Akwa, proche des commodités. Idéal pour construction résidentielle avec accès facile aux routes principales et services urbains.",
    seller: {
      name: "Jean Mballa",
      phone: "+237 6XX XXX XXX",
      email: "jean.mballa@email.com",
      location: "Douala, Cameroun",
      joinDate: "2023-08-15"
    },
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop&q=80"
    ],
    coordinates: { lat: 4.0511, lng: 9.7679 }
  },
  {
    id: 2,
    title: "Terrain Commercial - Yaoundé",
    location: "Centre-ville, Yaoundé",
    price: "80,000,000",
    area: "800",
    type: "Commercial",
    verified: true,
    verificationDate: "2024-01-20",
    description: "Parfait pour projet commercial, excellent emplacement en plein centre-ville avec forte affluence et visibilité maximale.",
    seller: {
      name: "Marie Nkomo",
      phone: "+237 6XX XXX XXX",
      email: "marie.nkomo@email.com",
      location: "Yaoundé, Cameroun",
      joinDate: "2023-11-02"
    },
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"
    ],
    coordinates: { lat: 3.848, lng: 11.502 }
  },
  {
    id: 3,
    title: "Terrain Agricole - Bafoussam",
    location: "Périphérie, Bafoussam",
    price: "25,000,000",
    area: "1200",
    type: "Agricole",
    verified: true,
    verificationDate: "2024-01-18",
    description: "Idéal pour agriculture, sol fertile et accès routier. Terrain plat avec source d'eau naturelle disponible.",
    seller: {
      name: "Paul Tchuente",
      phone: "+237 6XX XXX XXX",
      email: "paul.tchuente@email.com",
      location: "Bafoussam, Cameroun",
      joinDate: "2023-09-20"
    },
    images: [
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1574923623126-34cc3dd3ca20?w=600&h=400&fit=crop"
    ],
    coordinates: { lat: 5.4781, lng: 10.4172 }
  },
  {
    id: 4,
    title: "Terrain Industriel - Bamenda",
    location: "Zone Industrielle, Bamenda",
    price: "120,000,000",
    area: "2000",
    type: "Industriel",
    verified: true,
    verificationDate: "2024-01-22",
    description: "Grande surface pour projets industriels, accès facilité. Zone d'activité avec toutes les commodités industrielles.",
    seller: {
      name: "Samuel Fokou",
      phone: "+237 6XX XXX XXX",
      email: "samuel.fokou@email.com",
      location: "Bamenda, Cameroun",
      joinDate: "2023-07-10"
    },
    images: [
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
    ],
    coordinates: { lat: 5.9597, lng: 10.1581 }
  },
  {
    id: 5,
    title: "Terrain Résidentiel - Garoua",
    location: "Quartier Résidentiel, Garoua",
    price: "35,000,000",
    area: "750",
    type: "Résidentiel",
    verified: true,
    verificationDate: "2024-01-25",
    description: "Terrain résidentiel dans un quartier calme et sécurisé. Proche des écoles et centres de santé.",
    seller: {
      name: "Fatima Abdou",
      phone: "+237 6XX XXX XXX",
      email: "fatima.abdou@email.com",
      location: "Garoua, Cameroun",
      joinDate: "2023-12-01"
    },
    images: [
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop"
    ],
    coordinates: { lat: 9.3265, lng: 13.3957 }
  },
  {
    id: 6,
    title: "Terrain Commercial - Douala Port",
    location: "Zone Portuaire, Douala",
    price: "95,000,000",
    area: "1000",
    type: "Commercial",
    verified: true,
    verificationDate: "2024-01-28",
    description: "Emplacement stratégique près du port de Douala, idéal pour activités logistiques.",
    seller: {
      name: "Alice Ngoula",
      phone: "+237 6XX XXX XXX",
      email: "alice.ngoula@email.com",
      location: "Douala, Cameroun",
      joinDate: "2023-10-15"
    },
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop"
    ],
    coordinates: { lat: 4.0615, lng: 9.7679 }
  },
  {
    id: 7,
    title: "Terrain Agricole - Mbalmayo",
    location: "Périphérie, Mbalmayo",
    price: "15,000,000",
    area: "2500",
    type: "Agricole",
    verified: true,
    verificationDate: "2024-01-30",
    description: "Vaste terrain agricole avec potentiel d'élevage et agriculture intensive.",
    seller: {
      name: "Pierre Essomba",
      phone: "+237 6XX XXX XXX",
      email: "pierre.essomba@email.com",
      location: "Mbalmayo, Cameroun",
      joinDate: "2023-09-05"
    },
    images: [
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop"
    ],
    coordinates: { lat: 3.5186, lng: 11.5021 }
  }
]