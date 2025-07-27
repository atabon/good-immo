import { motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  itemsPerPage: number
  totalItems: number
}

export function Pagination({ currentPage, totalPages, onPageChange, itemsPerPage, totalItems }: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
      <div className="text-sm text-gray-600">
        Affichage de {startItem} à {endItem} sur {totalItems} terrains
      </div>
      
      <div className="flex items-center space-x-1">
        {/* Bouton Précédent */}
        <motion.button
          className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          whileHover={currentPage > 1 ? { scale: 1.05 } : {}}
          whileTap={currentPage > 1 ? { scale: 0.95 } : {}}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Précédent
        </motion.button>

        {/* Numéros de pages */}
        <div className="flex items-center space-x-1">
          {getVisiblePages().map((page, index) => (
            <div key={index}>
              {page === '...' ? (
                <span className="px-3 py-2 text-gray-400">...</span>
              ) : (
                <motion.button
                  className={`px-3 py-2 text-sm rounded-md transition-colors ${
                    currentPage === page
                      ? 'text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={currentPage === page ? { backgroundColor: 'var(--color-primary)' } : {}}
                  onClick={() => onPageChange(page as number)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {page}
                </motion.button>
              )}
            </div>
          ))}
        </div>

        {/* Bouton Suivant */}
        <motion.button
          className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-gray-100'
          }`}
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          whileHover={currentPage < totalPages ? { scale: 1.05 } : {}}
          whileTap={currentPage < totalPages ? { scale: 0.95 } : {}}
        >
          Suivant
          <ChevronRight className="h-4 w-4 ml-1" />
        </motion.button>
      </div>
    </div>
  )
}