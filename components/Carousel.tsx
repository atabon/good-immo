import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

interface CarouselProps {
  images: string[]
  title: string
}

export function Carousel({ images, title }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showFullscreen, setShowFullscreen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const openFullscreen = () => {
    setShowFullscreen(true)
  }

  const closeFullscreen = () => {
    setShowFullscreen(false)
  }

  return (
    <>
      {/* Carousel principal */}
      <div className="relative">
        {/* Image principale */}
        <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden cursor-pointer">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onClick={openFullscreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Contrôles */}
          {images.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Indicateur du nombre d'images */}
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Miniatures */}
        {images.length > 1 && (
          <div className="flex space-x-2 mt-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-20 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-green-500' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image}
                  alt={`Miniature ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {/* Modal plein écran */}
      <AnimatePresence>
        {showFullscreen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeFullscreen}
          >
            <div className="relative max-w-7xl max-h-full p-4" onClick={(e) => e.stopPropagation()}>
              <motion.img
                src={images[currentIndex]}
                alt={`${title} - Image ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />

              {/* Bouton de fermeture */}
              <button
                onClick={closeFullscreen}
                className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Contrôles en plein écran */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Indicateur en plein écran */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}