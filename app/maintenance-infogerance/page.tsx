import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Settings, Server, Clock, Shield, BarChart, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MaintenanceInfogerance() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 via-[#673de6]/10 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Maintenance & infogérance</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Support technique expert, mises à jour et supervision continue pour vos infrastructures
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Découvrir nos solutions
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
                src="/maintenance-support.png"
                alt="Maintenance et support technique"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos services de maintenance et d'infogérance</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Des solutions complètes pour assurer le bon fonctionnement et la sécurité de vos infrastructures
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Maintenance préventive</h3>
                <p className="text-gray-300 mb-4">
                  Anticipez les problèmes techniques grâce à une surveillance proactive et des interventions régulières
                  sur vos systèmes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Mises à jour régulières</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Surveillance 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Audits de sécurité</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Infogérance complète</h3>
                <p className="text-gray-300 mb-4">
                  Déléguez la gestion de votre infrastructure IT à nos experts pour vous concentrer sur votre cœur de
                  métier.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Gestion des serveurs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Administration réseau</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Sauvegardes automatisées</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Support technique</h3>
                <p className="text-gray-300 mb-4">
                  Bénéficiez d'une assistance technique réactive et experte pour résoudre rapidement vos problèmes IT.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Assistance 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Temps de réponse garanti</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Support multicanal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Packs Section */}
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

      {/* Benefits Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Les avantages de notre service d'infogérance</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez comment notre expertise technique peut transformer votre infrastructure IT
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sécurité renforcée</h3>
                  <p className="text-gray-600">
                    Protégez vos données et systèmes grâce à une surveillance continue, des mises à jour régulières et
                    des audits de sécurité pour prévenir les cyberattaques.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Protection contre les menaces en temps réel</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Mises à jour de sécurité automatiques</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Sauvegardes sécurisées et régulières</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Performance optimisée</h3>
                  <p className="text-gray-600">
                    Améliorez les performances de vos systèmes grâce à une maintenance proactive et des optimisations
                    régulières pour garantir une expérience utilisateur fluide.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Surveillance des performances en temps réel</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Optimisation des ressources</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Réduction des temps de chargement</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Continuité d'activité</h3>
                  <p className="text-gray-600">
                    Assurez la disponibilité continue de vos services grâce à une surveillance 24/7, des plans de
                    reprise après sinistre et une résolution rapide des incidents.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Détection précoce des problèmes</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Plans de reprise après sinistre</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Temps d'arrêt minimisé</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Support réactif</h3>
                  <p className="text-gray-600">
                    Bénéficiez d'une assistance technique experte et réactive pour résoudre rapidement vos problèmes et
                    minimiser les interruptions de service.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Support technique 24/7</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Temps de réponse garantis</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Équipe d'experts dédiée</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Impact Section */}
      <section className="py-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1f1d2c] mb-6">
              Lancez votre marque avec impact, développez sans limites.
            </h2>
            <p className="text-gray-600 mb-8">
              Ne perdez plus de temps avec les démarches techniques. Créez, animez et propulsez votre image grâce à nos
              packs 100% clé-en-main.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Script + storyboard sur-mesure</p>
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
                <p className="ml-3 text-gray-700">Voix-off & langage inclus</p>
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
            </div>
          </div>
          <div>
            <Image
              src="/maintenance-tech.png"
              alt="Maintenance technique"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Message Impact Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/tech-support.png"
                alt="Support technique"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Donnez vie à votre message avec des animations percutantes</h2>
              <p className="text-gray-300 mb-8">
                Captivez votre audience avec des animations qui racontent votre histoire de manière mémorable.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    Vidéos animées captivantes pour présenter vos services ou produits
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    Formats adaptés aux réseaux sociaux (reels, stories, posts, bannières)
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-300">
                    Motion design dynamique qui attire l'attention dès les premières secondes
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-300">Scénarisation et storytelling visuel pour marquer les esprits</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#673de6]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à optimiser votre infrastructure IT?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en maintenance et infogérance, et découvrez
            comment nos solutions peuvent vous aider à atteindre vos objectifs.
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
