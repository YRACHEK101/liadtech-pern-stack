import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Smartphone, Monitor, Tablet, Layout, Users, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DesignUXUI() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Design UX/UI</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Créez des interfaces intuitives et esthétiques qui transforment l'expérience de vos utilisateurs
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff41ed] hover:bg-[#673de6] text-white px-8 py-6 text-lg rounded-lg">
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
                <p className="ml-3 text-gray-700">Musique libre de droit incluse</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Montage & sound design inclus</p>
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
            <div className="bg-[#ffa4f6]/20 p-6 rounded-xl">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Design UX/UI exemple"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* UX/UI Design Services */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos services de Design UX/UI</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Des interfaces intuitives et esthétiques qui transforment l'expérience de vos utilisateurs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Layout className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Conception d'interfaces</h3>
                <p className="text-gray-600 mb-4">
                  Création d'interfaces utilisateur modernes, intuitives et esthétiques pour vos applications web et
                  mobiles.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Wireframes & prototypes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Design system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Maquettes finalisées</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expérience utilisateur</h3>
                <p className="text-gray-600 mb-4">
                  Optimisation de l'expérience utilisateur pour maximiser l'engagement et la satisfaction.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Audit UX</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Tests utilisateurs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Parcours utilisateur</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Design Responsive</h3>
                <p className="text-gray-600 mb-4">
                  Interfaces adaptatives qui offrent une expérience optimale sur tous les appareils.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Mobile-first design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Adaptabilité multi-écrans</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-700">Performance optimisée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Packs Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Choisissez votre pack d'animation avec Liadtech</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Des animations pensées pour captiver, valoriser et faire rayonner votre message.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pack 1 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Marketing digital & publicité</h3>
              <p className="text-gray-600 mb-6">
                Idéal pour présenter un concept ou un service de façon claire et concise.
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">0</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix personnalisé selon besoins</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site vitrine</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site dynamique et wordpress</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site e-commerce</span>
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
              <h3 className="text-xl font-bold mb-4">Référencement web/SEO</h3>
              <p className="text-gray-600 mb-6">Parfait pour raconter une histoire de marque en plusieurs épisodes.</p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">0</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix personnalisé selon besoins</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site vitrine</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site dynamique et wordpress</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site e-commerce</span>
                </div>
              </div>

              <Button className="w-full bg-[#673de6] hover:bg-[#5f65f4] text-white">Sélectionner</Button>
            </CardContent>
          </Card>

          {/* Pack 3 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Blogging & Contenu</h3>
              <p className="text-gray-600 mb-6">Solution sur mesure pour des besoins spécifiques et complexes.</p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">0</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix personnalisé selon besoins</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site vitrine</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site dynamique et wordpress</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Site e-commerce</span>
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

      {/* Design Thinking Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Design thinking</h2>
              <p className="text-gray-300 mb-8">
                Notre approche centrée sur l'utilisateur garantit des interfaces intuitives et efficaces qui répondent
                aux besoins réels de vos utilisateurs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Empathie</h3>
                    <p className="text-gray-300">
                      Nous comprenons vos utilisateurs, leurs besoins et leurs attentes pour créer des expériences
                      pertinentes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Définition</h3>
                    <p className="text-gray-300">
                      Nous identifions les problèmes à résoudre et définissons clairement les objectifs du projet.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Idéation</h3>
                    <p className="text-gray-300">
                      Nous explorons toutes les solutions possibles pour trouver les meilleures approches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Prototypage</h3>
                    <p className="text-gray-300">
                      Nous créons des prototypes interactifs pour tester et valider nos concepts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 bg-[#673de6] rounded-full flex items-center justify-center mt-1 mr-4">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Test</h3>
                    <p className="text-gray-300">
                      Nous testons nos solutions avec de vrais utilisateurs pour les améliorer continuellement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="bg-[#673de6]/20 p-8 rounded-xl">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Design Thinking Process"
                  width={400}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Design Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Design responsive sur tous les appareils</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Des interfaces qui s'adaptent parfaitement à tous les écrans pour une expérience utilisateur optimale
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <div className="bg-[#673de6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="h-8 w-8 text-[#673de6]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Mobile</h3>
            <p className="text-gray-600">
              Interfaces optimisées pour les smartphones avec une navigation fluide et intuitive.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#673de6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Tablet className="h-8 w-8 text-[#673de6]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Tablette</h3>
            <p className="text-gray-600">
              Expérience adaptée aux tablettes qui tire parti de la taille d'écran intermédiaire.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-[#673de6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Monitor className="h-8 w-8 text-[#673de6]" />
            </div>
            <h3 className="font-bold text-lg mb-2">Desktop</h3>
            <p className="text-gray-600">Interfaces riches et complètes pour les ordinateurs de bureau et portables.</p>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Image
            src="/placeholder.svg?height=300&width=800"
            alt="Responsive Design Showcase"
            width={800}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Brand Impact Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1f1d2c] mb-6">
                Lancez votre marque avec impact, développez sans limites.
              </h2>
              <p className="text-gray-600 mb-8">
                Nos projets sont sur mesure avec des animations techniques, claires, animées et précises selon votre
                identité visuelle et vos objectifs de communication.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Logo, couleurs et typographies pour une image cohérente.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Charte graphique grâce à l'impact.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Templates animés pour stories, reels et posts.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Vidéos animées pour raconter votre histoire.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Conseils personnalisés pour mieux communiquer.</p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Brand Impact"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Notre processus de design UX/UI</h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#673de6]/30 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Recherche & Analyse</h3>
              <p className="text-gray-600">
                Étude approfondie de vos besoins, de votre audience et de vos objectifs commerciaux.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Wireframing</h3>
              <p className="text-gray-600">
                Création de maquettes filaires pour définir la structure et l'architecture de l'information.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Design UI</h3>
              <p className="text-gray-600">
                Conception visuelle des interfaces avec une attention particulière aux détails et à l'esthétique.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Prototypage & Tests</h3>
              <p className="text-gray-600">
                Création de prototypes interactifs et tests utilisateurs pour valider et améliorer l'expérience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1f1d2c] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à transformer votre expérience utilisateur?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet de design UX/UI et découvrir comment nous
            pouvons vous aider à créer des interfaces exceptionnelles.
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff41ed] hover:bg-[#ffa4f6] text-white px-8 py-3 rounded-lg">
              Demander un devis gratuit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
