import { motion } from 'motion/react'
import { ArrowLeft, Mail, Phone, MapPin, Shield, FileText, AlertTriangle, HelpCircle, MessageCircle, Book } from 'lucide-react'

interface LegalPageProps {
  type: string
  onBack: () => void
}

export function LegalPages({ type, onBack }: LegalPageProps) {
  const renderPrivacyPolicy = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">1. Collecte des Informations</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            GoodImmo collecte différents types d'informations pour fournir et améliorer nos services :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Informations personnelles : nom, email, téléphone, adresse</li>
            <li>Informations sur les propriétés : localisation, prix, descriptions</li>
            <li>Données de navigation : cookies, adresse IP, historique de navigation</li>
            <li>Communications : messages, commentaires, feedback</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">2. Utilisation des Données</h2>
        <div className="space-y-4 text-gray-700">
          <p>Nous utilisons vos informations pour :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Faciliter les transactions immobilières</li>
            <li>Vérifier l'authenticité des propriétés</li>
            <li>Améliorer l'expérience utilisateur</li>
            <li>Communiquer les mises à jour importantes</li>
            <li>Assurer la sécurité de la plateforme</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">3. Partage des Informations</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            GoodImmo ne vend, ne loue, ni ne partage vos informations personnelles avec des tiers, 
            sauf dans les cas suivants :
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Avec votre consentement explicite</li>
            <li>Pour respecter les obligations légales</li>
            <li>Avec nos partenaires de vérification agréés</li>
            <li>En cas de fusion ou d'acquisition de l'entreprise</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">4. Sécurité des Données</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles 
            pour protéger vos données contre tout accès non autorisé, modification ou divulgation.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">5. Vos Droits</h2>
        <div className="space-y-4 text-gray-700">
          <p>Vous avez le droit de :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Accéder à vos données personnelles</li>
            <li>Rectifier les informations inexactes</li>
            <li>Supprimer votre compte et vos données</li>
            <li>Vous opposer au traitement de vos données</li>
            <li>Demander la portabilité de vos données</li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-800 mb-2">Contact pour la Protection des Données</h3>
        <p className="text-green-700">
          Pour toute question concernant cette politique de confidentialité, 
          contactez-nous à : privacy@goodimmo.cm
        </p>
      </div>
    </div>
  )

  const renderTermsOfService = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">1. Acceptation des Conditions</h2>
        <p className="text-gray-700">
          En utilisant GoodImmo, vous acceptez d'être lié par ces conditions d'utilisation. 
          Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre service.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">2. Description du Service</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            GoodImmo est une plateforme qui connecte directement les vendeurs et acheteurs 
            de terrains au Cameroun. Nous facilitons les transactions transparentes sans intermédiaires.
          </p>
          <p>Services inclus :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Publication et recherche de terrains</li>
            <li>Vérification professionnelle des propriétés</li>
            <li>Mise en relation directe vendeur-acheteur</li>
            <li>Support client et assistance juridique</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">3. Responsabilités des Utilisateurs</h2>
        <div className="space-y-4 text-gray-700">
          <p>En tant qu'utilisateur, vous vous engagez à :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Fournir des informations exactes et à jour</li>
            <li>Respecter les lois camerounaises en vigueur</li>
            <li>Ne pas publier de contenu frauduleux ou trompeur</li>
            <li>Maintenir la confidentialité de votre compte</li>
            <li>Traiter les autres utilisateurs avec respect</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">4. Vérification des Propriétés</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Tous les terrains sont vérifiés par nos agents géomètres qualifiés avant publication. 
            Cependant, cette vérification ne constitue pas une garantie absolue.
          </p>
          <p>Il est fortement recommandé aux acheteurs de :</p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Effectuer leur propre vérification indépendante</li>
            <li>Consulter un notaire avant la transaction</li>
            <li>Visiter physiquement la propriété</li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">5. Frais et Commissions</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            GoodImmo perçoit une commission de 5% sur les transactions réussies, 
            partagée équitablement entre l'acheteur et le vendeur.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">6. Limitation de Responsabilité</h2>
        <div className="space-y-4 text-gray-700">
          <p>
            GoodImmo agit en tant qu'intermédiaire technologique. Nous ne sommes pas 
            responsables des litiges entre acheteurs et vendeurs, ni des défauts cachés 
            des propriétés.
          </p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
        <h3 className="font-semibold text-amber-800 mb-2">Important</h3>
        <p className="text-amber-700">
          Ces conditions peuvent être modifiées à tout moment. Les utilisateurs seront 
          notifiés des changements importants par email.
        </p>
      </div>
    </div>
  )

  const renderLegalNotice = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Informations Légales</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Raison Sociale</h3>
            <p className="text-gray-700">GoodImmo SARL</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Adresse du Siège Social</h3>
            <p className="text-gray-700">
              123 Avenue de l'Indépendance<br />
              BP 1234, Yaoundé, Cameroun
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Numéro d'Immatriculation</h3>
            <p className="text-gray-700">RC/YAO/2023/B/1234</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Capital Social</h3>
            <p className="text-gray-700">10,000,000 FCFA</p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Directeur de Publication</h2>
        <p className="text-gray-700">
          Jean-Claude NKOMO, Directeur Général<br />
          Email: direction@goodimmo.cm
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
        <div className="space-y-2 text-gray-700">
          <p>Site hébergé par :</p>
          <p>
            Camtel Data Center<br />
            Douala, Cameroun<br />
            Téléphone: +237 233 XX XX XX
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Propriété Intellectuelle</h2>
        <p className="text-gray-700">
          Tous les contenus de ce site (textes, images, logos, graphiques) sont protégés 
          par le droit d'auteur et appartiennent à GoodImmo SARL ou à ses partenaires.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Droit Applicable</h2>
        <p className="text-gray-700">
          Le présent site est soumis au droit camerounais. En cas de litige, 
          les tribunaux de Yaoundé seront seuls compétents.
        </p>
      </div>
    </div>
  )

  const renderContactPage = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Nos Coordonnées</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p className="text-gray-700">
                    123 Avenue de l'Indépendance<br />
                    BP 1234, Yaoundé, Cameroun
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p className="text-gray-700">+237 6XX XXX XXX</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-600 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-700">contact@goodimmo.cm</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Horaires d'Ouverture</h3>
            <div className="space-y-2 text-gray-700">
              <p>Lundi - Vendredi : 8h00 - 17h00</p>
              <p>Samedi : 8h00 - 12h00</p>
              <p>Dimanche : Fermé</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Envoyez-nous un Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
              <input 
                type="text" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input 
                type="email" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
              <input 
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
              <select 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="question">Question générale</option>
                <option value="support">Support technique</option>
                <option value="verification">Vérification de terrain</option>
                <option value="complaint">Réclamation</option>
                <option value="partnership">Partenariat</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea 
                rows={5}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Décrivez votre demande en détail..."
              />
            </div>
            
            <motion.button 
              type="submit"
              className="w-full py-3 text-white rounded-md font-medium"
              style={{ backgroundColor: 'var(--color-primary)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Envoyer le Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  )

  const renderReportPage = () => (
    <div className="space-y-8">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-red-600 mt-1" />
          <div>
            <h3 className="font-semibold text-red-800 mb-2">Signaler un Problème</h3>
            <p className="text-red-700">
              Aidez-nous à maintenir GoodImmo sûre et fiable en signalant tout comportement 
              suspect ou problème que vous rencontrez.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Types de Signalements</h2>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">🏠 Terrain Suspect</h3>
              <p className="text-gray-700 text-sm">
                Propriété avec des informations fausses, prix excessif, ou documents douteux.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">👤 Vendeur Frauduleux</h3>
              <p className="text-gray-700 text-sm">
                Comportement suspect, tentative d'arnaque, ou identité falsifiée.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">⚠️ Problème Technique</h3>
              <p className="text-gray-700 text-sm">
                Bug de l'application, erreur de fonctionnement, ou problème d'accès.
              </p>
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">📱 Contenu Inapproprié</h3>
              <p className="text-gray-700 text-sm">
                Images inappropriées, descriptions offensantes, ou spam.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Formulaire de Signalement</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Type de problème *</label>
              <select 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="">Sélectionnez le type</option>
                <option value="property">Terrain suspect</option>
                <option value="seller">Vendeur frauduleux</option>
                <option value="technical">Problème technique</option>
                <option value="content">Contenu inapproprié</option>
                <option value="other">Autre</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email de contact *</label>
              <input 
                type="email" 
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Votre email pour le suivi"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ID ou Nom de l'élément signalé</label>
              <input 
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Ex: Nom du vendeur, titre du terrain..."
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Description détaillée *</label>
              <textarea 
                rows={5}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                placeholder="Décrivez le problème en détail, incluez toute information pertinente..."
              />
            </div>
            
            <div className="flex items-start space-x-2">
              <input type="checkbox" id="anonymous" className="mt-1" />
              <label htmlFor="anonymous" className="text-sm text-gray-700">
                Signalement anonyme (votre identité ne sera pas révélée)
              </label>
            </div>
            
            <motion.button 
              type="submit"
              className="w-full py-3 bg-red-600 text-white rounded-md font-medium hover:bg-red-700"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Envoyer le Signalement
            </motion.button>
          </form>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h3 className="font-semibold text-blue-800 mb-2">Que se passe-t-il après ?</h3>
        <div className="text-blue-700 space-y-2">
          <p>• Notre équipe examine tous les signalements sous 24-48h</p>
          <p>• Vous recevrez une confirmation par email</p>
          <p>• Les actions appropriées seront prises si nécessaire</p>
          <p>• Un suivi vous sera communiqué pour les cas graves</p>
        </div>
      </div>
    </div>
  )

  const renderFAQ = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Questions Fréquemment Posées</h2>
        <p className="text-gray-600">
          Trouvez rapidement des réponses aux questions les plus courantes
        </p>
      </div>

      <div className="space-y-6">
        {[
          {
            category: "Général",
            questions: [
              {
                q: "Qu'est-ce que GoodImmo ?",
                a: "GoodImmo est une plateforme qui connecte directement vendeurs et acheteurs de terrains au Cameroun, éliminant les intermédiaires pour des transactions transparentes."
              },
              {
                q: "Comment GoodImmo vérifie-t-elle les terrains ?",
                a: "Tous les terrains sont vérifiés par nos agents géomètres qualifiés qui vérifient la légalité, l'authenticité des documents et la conformité du terrain."
              },
              {
                q: "Y a-t-il des frais pour utiliser GoodImmo ?",
                a: "L'inscription et la recherche sont gratuites. Nous percevons une commission de 5% uniquement lors d'une transaction réussie."
              }
            ]
          },
          {
            category: "Vendeurs",
            questions: [
              {
                q: "Comment vendre mon terrain sur GoodImmo ?",
                a: "Inscrivez-vous, soumettez les détails de votre terrain avec 3-10 photos. Après vérification par nos agents (5-7 jours), votre terrain sera publié."
              },
              {
                q: "Quels documents dois-je fournir ?",
                a: "Titre foncier, plan de localisation, pièce d'identité, et certificat de non-gage si applicable."
              },
              {
                q: "Combien de temps prend la vérification ?",
                a: "Le processus de vérification prend généralement 5-7 jours ouvrables."
              }
            ]
          },
          {
            category: "Acheteurs",
            questions: [
              {
                q: "Comment puis-je être sûr qu'un terrain est authentique ?",
                a: "Tous nos terrains sont vérifiés, mais nous recommandons toujours de faire votre propre vérification et de consulter un notaire."
              },
              {
                q: "Puis-je visiter le terrain avant l'achat ?",
                a: "Absolument ! Nous encourageons fortement la visite physique avant toute transaction."
              },
              {
                q: "Comment contacter le vendeur ?",
                a: "Les coordonnées du vendeur sont disponibles sur chaque fiche terrain vérifiée."
              }
            ]
          }
        ].map((category, index) => (
          <div key={index} className="border rounded-lg p-6" style={{ borderColor: 'var(--color-border)' }}>
            <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>
              {category.category}
            </h3>
            <div className="space-y-4">
              {category.questions.map((item, qIndex) => (
                <div key={qIndex}>
                  <h4 className="font-semibold mb-2">{item.q}</h4>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const renderHelpCenter = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold mb-4">Centre d'Aide GoodImmo</h2>
        <p className="text-gray-600">
          Guides, tutoriels et ressources pour vous aider à utiliser notre plateforme
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: Book,
            title: "Guide du Vendeur",
            description: "Apprenez à vendre efficacement votre terrain",
            topics: ["Créer une annonce", "Photos optimales", "Fixer le bon prix", "Négociation"]
          },
          {
            icon: HelpCircle,
            title: "Guide de l'Acheteur",
            description: "Trouvez et achetez le terrain parfait",
            topics: ["Recherche avancée", "Évaluation terrain", "Vérifications légales", "Finalisation achat"]
          },
          {
            icon: Shield,
            title: "Sécurité & Vérification",
            description: "Comprenez notre processus de vérification",
            topics: ["Processus de vérification", "Documents requis", "Conseils sécurité", "Signaler un problème"]
          },
          {
            icon: MessageCircle,
            title: "Communication",
            description: "Communiquez efficacement sur la plateforme",
            topics: ["Contacter vendeurs", "Négociation en ligne", "Messages sécurisés", "Étiquette plateforme"]
          },
          {
            icon: FileText,
            title: "Aspects Légaux",
            description: "Informations juridiques importantes",
            topics: ["Droit foncier camerounais", "Contrats de vente", "Rôle du notaire", "Taxes et frais"]
          },
          {
            icon: Settings,
            title: "Compte & Paramètres",
            description: "Gérez votre compte GoodImmo",
            topics: ["Création compte", "Paramètres profil", "Notifications", "Confidentialité"]
          }
        ].map((section, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-lg p-6 hover:shadow-lg transition-shadow"
            style={{ borderColor: 'var(--color-border)' }}
            whileHover={{ y: -5 }}
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg mr-3" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}>
                <section.icon className="h-6 w-6" style={{ color: 'var(--color-primary)' }} />
              </div>
              <h3 className="font-semibold">{section.title}</h3>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">{section.description}</p>
            
            <ul className="space-y-2">
              {section.topics.map((topic, topicIndex) => (
                <li key={topicIndex} className="text-sm text-gray-700 hover:text-green-600 cursor-pointer">
                  • {topic}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="font-semibold text-green-800 mb-2">Besoin d'Aide Personnalisée ?</h3>
        <p className="text-green-700 mb-4">
          Notre équipe de support est disponible pour vous aider avec toute question spécifique.
        </p>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Contacter le Support
          </button>
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50">
            Programmer un Appel
          </button>
        </div>
      </div>
    </div>
  )

  const pageContent = {
    'privacy': { title: 'Politique de Confidentialité', icon: Shield, content: renderPrivacyPolicy },
    'terms': { title: 'Conditions d\'Utilisation', icon: FileText, content: renderTermsOfService },
    'legal': { title: 'Mentions Légales', icon: FileText, content: renderLegalNotice },
    'contact': { title: 'Contactez-nous', icon: Mail, content: renderContactPage },
    'report': { title: 'Signaler un Problème', icon: AlertTriangle, content: renderReportPage },
    'faq': { title: 'FAQ', icon: HelpCircle, content: renderFAQ },
    'help': { title: 'Centre d\'Aide', icon: Book, content: renderHelpCenter }
  }

  const currentPage = pageContent[type]
  if (!currentPage) return null

  return (
    <motion.div 
      className="min-h-screen py-8"
      style={{ backgroundColor: 'var(--color-background)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bouton retour */}
        <motion.button
          className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
          onClick={onBack}
          whileHover={{ x: -5 }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour
        </motion.button>

        {/* Header */}
        <motion.div 
          className="text-center mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 rounded-lg mr-3" style={{ backgroundColor: 'var(--color-primary)', opacity: 0.1 }}>
              <currentPage.icon className="h-8 w-8" style={{ color: 'var(--color-primary)' }} />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>
            {currentPage.title}
          </h1>
        </motion.div>

        {/* Content */}
        <motion.div
          className="bg-white rounded-lg border p-8"
          style={{ borderColor: 'var(--color-border)' }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {currentPage.content()}
        </motion.div>
      </div>
    </motion.div>
  )
}