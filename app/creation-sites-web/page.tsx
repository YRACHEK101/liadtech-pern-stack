import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Globe, Code, Smartphone, ShoppingCart, Zap, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function CreationSitesWeb() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 via-[#673de6]/10 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Création de sites web</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Sites vitrines ou e-commerce conçus pour booster vos ventes et valoriser votre image
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Demander un devis
            </Button>
          </Link>
        </div>
      </section>

      {/* Main Offer Section */}
      <section className="py-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-[#673de6]/10 px-4 py-2 rounded-full text-[#673de6] font-medium mb-4">
              Notre offre phare
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1f1d2c] mb-6">
              Expliquez votre concept en 30 secondes chrono.
            </h2>
            <p className="text-gray-600 mb-8">
              Attirez l'attention, simplifiez votre message et boostez vos conversions avec une animation 2D claire,
              moderne et percutante.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Script / storyboard sur-mesure</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Animation fluide et professionnelle</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Voix off in langage incluse</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Design personnalisé à votre charte</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Musique & sound design inclus</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">2 révisions comprises</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Livraison: 10 à 14 jours</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <span className="text-5xl font-bold text-[#673de6]">750€</span>
              <Link href="/contact" className="ml-6">
                <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-6">
                  Profiter de l'offre <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#673de6]/10 p-6 rounded-xl">
              <Image
                src="/website-creation.png"
                alt="Création de site web"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Websites Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos types de sites web</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Des solutions web adaptées à vos besoins spécifiques et à votre secteur d'activité
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Site Vitrine</h3>
                <p className="text-gray-300 mb-4">
                  Présentez votre entreprise, vos services et vos valeurs avec un site élégant et professionnel qui
                  reflète votre identité.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Design sur mesure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Responsive (mobile, tablette, desktop)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Optimisé pour le référencement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Site E-commerce</h3>
                <p className="text-gray-300 mb-4">
                  Vendez vos produits en ligne avec une boutique performante, sécurisée et optimisée pour les
                  conversions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Gestion de catalogue produits</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Paiement sécurisé</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Gestion des stocks et commandes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Site Dynamique</h3>
                <p className="text-gray-300 mb-4">
                  Créez une expérience interactive avec un site riche en fonctionnalités et facile à mettre à jour.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">CMS intuitif (WordPress, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Fonctionnalités personnalisées</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Intégration de blog et médias</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Packs Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Choisissez votre pack de site web avec Liadtech</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Des solutions web pensées pour valoriser votre marque et convertir vos visiteurs en clients.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pack 1 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Site Vitrine</h3>
              <p className="text-gray-600 mb-6">
                Idéal pour présenter votre entreprise et vos services de façon professionnelle.
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">990</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix de base pour 5 pages</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Design responsive</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Optimisation SEO de base</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Formulaire de contact</span>
                </div>
              </div>

              <Button className="w-full bg-white hover:bg-gray-100 text-[#673de6] border border-[#673de6]">
                Sélectionner
              </Button>
            </CardContent>
          </Card>

          {/* Pack 2 */}
          <Card className="border-2 border-[#673de6] shadow-lg relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#673de6] text-white px-4 py-1 rounded-full text-sm">
              Le plus populaire!
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Site Dynamique WordPress</h3>
              <p className="text-gray-600 mb-6">Solution complète avec CMS pour gérer facilement votre contenu.</p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">1990</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix de base</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>CMS WordPress personnalisé</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Optimisation SEO avancée</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Blog et fonctionnalités interactives</span>
                </div>
              </div>

              <Button className="w-full bg-[#673de6] hover:bg-[#5f65f4] text-white">Sélectionner</Button>
            </CardContent>
          </Card>

          {/* Pack 3 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Site E-commerce</h3>
              <p className="text-gray-600 mb-6">Boutique en ligne complète pour vendre vos produits.</p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">3490</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix de base</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Catalogue produits illimité</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Paiement sécurisé multi-méthodes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Gestion des stocks et commandes</span>
                </div>
              </div>

              <Button className="w-full bg-white hover:bg-gray-100 text-[#673de6] border border-[#673de6]">
                Sélectionner
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">Conditions de paiement</div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Pourquoi choisir LIADTECH pour votre site web ?</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez les avantages qui font la différence pour votre présence en ligne
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design Responsive</h3>
                  <p className="text-gray-600">
                    Sites parfaitement adaptés à tous les appareils : ordinateurs, tablettes et smartphones pour une
                    expérience utilisateur optimale.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance Optimisée</h3>
                  <p className="text-gray-600">
                    Sites rapides et performants, optimisés pour les moteurs de recherche et offrant une navigation
                    fluide à vos visiteurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Design Sur Mesure</h3>
                  <p className="text-gray-600">
                    Designs uniques et personnalisés qui reflètent l'identité de votre marque et vous démarquent de la
                    concurrence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">SEO Intégré</h3>
                  <p className="text-gray-600">
                    Optimisation pour les moteurs de recherche dès la conception pour améliorer votre visibilité en
                    ligne et attirer plus de visiteurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Code Propre</h3>
                  <p className="text-gray-600">
                    Code optimisé et structuré selon les standards du web pour garantir la pérennité et la
                    maintenabilité de votre site.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Conversion Optimisée</h3>
                  <p className="text-gray-600">
                    Sites conçus pour convertir vos visiteurs en clients avec des parcours utilisateurs optimisés et des
                    appels à l'action stratégiques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Notre processus de création de site web</h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#673de6]/30 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Analyse & Stratégie</h3>
              <p className="text-gray-600">
                Étude approfondie de vos besoins, de votre marché et définition des objectifs de votre site web.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Design & Maquettes</h3>
              <p className="text-gray-600">
                Création de maquettes visuelles pour définir l'apparence et l'expérience utilisateur de votre site.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Développement</h3>
              <p className="text-gray-600">
                Intégration et programmation de votre site avec des technologies modernes et performantes.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Mise en ligne & Suivi</h3>
              <p className="text-gray-600">
                Lancement de votre site, tests finaux et accompagnement pour assurer son bon fonctionnement et son
                évolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos réalisations</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Découvrez quelques-uns de nos projets de sites web récents
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg group relative">
                <Image
                  src={`/sleek-digital-interface.png?height=300&width=400&query=modern website design ${item}`}
                  alt={`Projet web ${item}`}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1d2c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold text-lg">Projet {item}</h3>
                    <p className="text-sm">
                      Site {item % 3 === 0 ? "E-commerce" : item % 2 === 0 ? "Dynamique" : "Vitrine"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white">Voir plus de projets</Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Ce que disent nos clients</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Découvrez les témoignages de clients satisfaits par nos services de création de sites web
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/confident-professional.png"
                    alt="Client 1"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Sophie Martin</h4>
                  <p className="text-sm text-gray-500">Directrice Marketing, Entreprise A</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "LIADTECH a transformé notre présence en ligne avec un site web moderne et performant. Nous avons vu une
                augmentation significative de nos leads depuis le lancement. Leur équipe est professionnelle et à
                l'écoute."
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/confident-executive.png"
                    alt="Client 2"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Thomas Dubois</h4>
                  <p className="text-sm text-gray-500">Fondateur, Startup B</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Notre boutique en ligne développée par LIADTECH a dépassé toutes nos attentes. Le site est non
                seulement esthétique mais aussi très fonctionnel. Nos ventes ont augmenté de 45% en seulement trois
                mois!"
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/confident-leader.png"
                    alt="Client 3"
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Julie Leroy</h4>
                  <p className="text-sm text-gray-500">Responsable Communication, Association C</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Travailler avec LIADTECH a été un plaisir. Ils ont su comprendre nos besoins spécifiques et créer un
                site qui reflète parfaitement nos valeurs. Le processus a été transparent et le résultat est à la
                hauteur de nos attentes."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Questions fréquentes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Trouvez les réponses à vos questions sur nos services de création de sites web
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Combien de temps faut-il pour créer un site web ?</h3>
              <p className="text-gray-600">
                Le délai varie selon la complexité du projet. Un site vitrine simple peut être réalisé en 2-3 semaines,
                tandis qu'un site e-commerce ou une plateforme complexe peut nécessiter 1 à 3 mois.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Quelles technologies utilisez-vous ?</h3>
              <p className="text-gray-600">
                Nous utilisons les technologies les plus modernes et performantes comme React, Next.js, WordPress,
                WooCommerce, et d'autres selon les besoins spécifiques de votre projet.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Proposez-vous un service de maintenance ?</h3>
              <p className="text-gray-600">
                Oui, nous proposons des forfaits de maintenance pour assurer le bon fonctionnement, la sécurité et les
                mises à jour de votre site web. Consultez notre page de maintenance pour plus d'informations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-lg mb-2">Mon site sera-t-il optimisé pour les moteurs de recherche ?</h3>
              <p className="text-gray-600">
                Absolument. Tous nos sites sont développés avec une attention particulière au SEO dès la conception.
                Nous intégrons les meilleures pratiques pour améliorer votre visibilité sur les moteurs de recherche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#673de6]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à lancer votre projet web ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet de site web et obtenir un devis personnalisé.
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-gray-100 text-[#673de6] px-8 py-3 rounded-lg">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
