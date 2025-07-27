import { useState, useRef } from 'react'
import { motion } from 'motion/react'
import { Upload, X, Image, AlertCircle } from 'lucide-react'

interface ImageUploadProps {
  images: File[]
  onImagesChange: (images: File[]) => void
  minImages?: number
  maxImages?: number
}

export function ImageUpload({ images, onImagesChange, minImages = 3, maxImages = 10 }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files) return

    const newFiles = Array.from(files).filter(file => {
      // Vérifier le type de fichier
      if (!file.type.startsWith('image/')) return false
      // Vérifier la taille (max 5MB)
      if (file.size > 5 * 1024 * 1024) return false
      return true
    })

    const totalImages = [...images, ...newFiles]
    if (totalImages.length <= maxImages) {
      onImagesChange(totalImages)
    } else {
      // Prendre seulement les premiers images jusqu'à la limite
      onImagesChange(totalImages.slice(0, maxImages))
    }
  }

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index)
    onImagesChange(newImages)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFiles(e.dataTransfer.files)
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const getImagePreview = (file: File) => {
    return URL.createObjectURL(file)
  }

  const isValidImageCount = images.length >= minImages && images.length <= maxImages

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Photos du terrain *
        </label>
        <p className="text-sm text-gray-600 mb-4">
          Ajoutez entre {minImages} et {maxImages} photos de haute qualité de votre terrain. 
          Formats acceptés: JPG, PNG, WebP (max 5MB par image)
        </p>
      </div>

      {/* Zone de drop */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
          dragActive
            ? 'border-green-500 bg-green-50'
            : images.length >= maxImages
            ? 'border-gray-300 bg-gray-50'
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />

        {images.length < maxImages ? (
          <div className="text-center">
            <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <button
                  type="button"
                  onClick={openFileDialog}
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  Cliquez pour sélectionner
                </button>{' '}
                ou glissez-déposez vos images ici
              </p>
              <p className="text-xs text-gray-500">
                {images.length}/{maxImages} images ajoutées
              </p>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <Image className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <p className="text-sm text-gray-600">
              Limite d'images atteinte ({maxImages}/{maxImages})
            </p>
          </div>
        )}
      </div>

      {/* Validation message */}
      {images.length > 0 && !isValidImageCount && (
        <div className="flex items-center space-x-2 text-sm">
          <AlertCircle className="h-4 w-4 text-amber-500" />
          <span className="text-amber-600">
            {images.length < minImages
              ? `Ajoutez au moins ${minImages - images.length} image(s) supplémentaire(s)`
              : `Supprimez ${images.length - maxImages} image(s) en trop`
            }
          </span>
        </div>
      )}

      {/* Validation success */}
      {isValidImageCount && (
        <div className="flex items-center space-x-2 text-sm text-green-600">
          <div className="h-4 w-4 rounded-full bg-green-500 flex items-center justify-center">
            <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
          <span>Nombre d'images valide ({images.length}/{maxImages})</span>
        </div>
      )}

      {/* Prévisualisation des images */}
      {images.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-gray-700">Aperçu des images</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((file, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group"
              >
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={getImagePreview(file)}
                    alt={`Aperçu ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Conseils pour de bonnes photos */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h5 className="font-medium text-blue-800 mb-2">💡 Conseils pour de bonnes photos</h5>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Prenez des photos par temps clair et lumineux</li>
          <li>• Incluez différents angles et perspectives du terrain</li>
          <li>• Montrez les accès, les délimitations et l'environnement</li>
          <li>• Évitez les photos floues ou mal cadrées</li>
          <li>• La première image sera utilisée comme photo principale</li>
        </ul>
      </div>
    </div>
  )
}