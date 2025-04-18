import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, BarChart, Megaphone, Search, Mail, Globe, Target, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function MarketingDigitalPublicite() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 via-[#673de6]/10 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Marketing Digital & Publicité</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Générez plus de leads avec nos stratégies SEO, SEA & publicité ciblée
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Booster votre visibilité
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
                src="/digital-marketing-dashboard.png"
                alt="Dashboard marketing digital"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-12 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#673de6] p-1 rounded-md">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold">250k</span>
                    <span className="text-xs text-gray-500">leads générés</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff41ed] p-1 rounded-md">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Félicitations! 🎉</span>
                    <span className="text-xs text-gray-500">Votre campagne est lancée!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos services de marketing digital</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Des solutions marketing complètes pour augmenter votre visibilité en ligne et générer plus de leads
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">SEO / Référencement naturel</h3>
                <p className="text-gray-300 mb-4">
                  Améliorez votre visibilité sur les moteurs de recherche et attirez un trafic qualifié sur votre site.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Audit SEO complet</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Optimisation on-page</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Stratégie de contenu</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">SEA / Publicité en ligne</h3>
                <p className="text-gray-300 mb-4">
                  Lancez des campagnes publicitaires ciblées sur Google, Facebook, Instagram et LinkedIn pour des
                  résultats immédiats.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Google Ads</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Facebook & Instagram Ads</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">LinkedIn Ads</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Megaphone className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Social Media Marketing</h3>
                <p className="text-gray-300 mb-4">
                  Développez votre présence sur les réseaux sociaux et engagez votre communauté avec du contenu
                  pertinent.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Stratégie de contenu</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Community management</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Analyse des performances</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Marketing Packs Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Choisissez votre pack marketing avec Liadtech</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Des solutions marketing adaptées à vos besoins et à votre budget
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pack 1 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Marketing digital & publicité</h3>
              <p className="text-gray-600 mb-6">
                Idéal pour les entreprises qui souhaitent augmenter leur visibilité en ligne.
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">990</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix de base par mois</p>
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
              <p className="text-gray-600 mb-6">
                Solution complète pour améliorer votre positionnement sur les moteurs de recherche.
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">1490</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix de base par mois</p>
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
              <p className="text-gray-600 mb-6">Stratégie de contenu pour attirer et fidéliser votre audience cible.</p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">890</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix de base par mois</p>
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

      {/* Additional Services Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Services marketing complémentaires</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Renforcez votre stratégie marketing avec nos services spécialisés
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Email Marketing</h3>
                <p className="text-gray-600">
                  Campagnes d'emailing personnalisées pour convertir vos prospects en clients fidèles.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Analyse & Reporting</h3>
                <p className="text-gray-600">
                  Suivi détaillé des performances de vos campagnes avec des rapports personnalisés.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Marketing Local</h3>
                <p className="text-gray-600">
                  Stratégies ciblées pour améliorer votre visibilité auprès de votre clientèle locale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Influence Marketing</h3>
                <p className="text-gray-600">
                  Collaborations avec des influenceurs pour étendre votre portée et renforcer votre crédibilité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Nos réussites clients</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs marketing
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-48 bg-[#673de6]/10 relative">
              <Image
                src="/case-study-1.png"
                alt="Étude de cas 1"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">+150% de trafic organique</h3>
              <p className="text-gray-600 mb-4">
                Comment nous avons doublé le trafic organique d'une entreprise de services B2B en 6 mois.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Secteur: B2B</span>
                <Link href="/etudes-de-cas/b2b-trafic">
                  <Button variant="link" className="text-[#673de6] p-0">
                    Lire l'étude de cas
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-48 bg-[#673de6]/10 relative">
              <Image
                src="/case-study-2.png"
                alt="Étude de cas 2"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">ROI de 300% sur Google Ads</h3>
              <p className="text-gray-600 mb-4">
                Optimisation des campagnes Google Ads d'un e-commerce pour tripler le retour sur investissement.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Secteur: E-commerce</span>
                <Link href="/etudes-de-cas/ecommerce-roi">
                  <Button variant="link" className="text-[#673de6] p-0">
                    Lire l'étude de cas
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg overflow-hidden">
            <div className="h-48 bg-[#673de6]/10 relative">
              <Image
                src="/case-study-3.png"
                alt="Étude de cas 3"
                width={400}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-2">+10K followers en 3 mois</h3>
              <p className="text-gray-600 mb-4">
                Stratégie social media qui a permis à une startup de développer rapidement sa communauté.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Secteur: Startup</span>
                <Link href="/etudes-de-cas/startup-social">
                  <Button variant="link" className="text-[#673de6] p-0">
                    Lire l'étude de cas
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-10">
          <Link href="/etudes-de-cas">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white">Voir toutes nos études de cas</Button>
          </Link>
        </div>
      </section>

      {/* Analytics Dashboard Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Suivez vos performances en temps réel</h2>
              <p className="text-gray-300 mb-8">
                Avec notre tableau de bord analytique, suivez l'évolution de vos campagnes marketing et prenez des
                décisions basées sur des données concrètes.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-300">Suivi du trafic et des conversions</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-300">Analyse du comportement des utilisateurs</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-300">Rapports personnalisés et automatisés</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-300">Intégration avec Google Analytics et autres outils</p>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/demo-analytics">
                  <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white">Demander une démo</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#673de6]/20 p-6 rounded-xl">
                <Image
                  src="/analytics-dashboard.png"
                  alt="Tableau de bord analytique"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#673de6] p-2 rounded-md">
                      <BarChart className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="block text-sm font-bold text-[#1f1d2c]">Stratégie digitale en cours</span>
                      <span className="text-xs text-gray-500">Analyse en temps réel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Questions fréquentes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Trouvez les réponses à vos questions sur nos services de marketing digital
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Combien de temps faut-il pour voir des résultats en SEO ?</h3>
              <p className="text-gray-600">
                Le SEO est un investissement à moyen et long terme. Les premiers résultats sont généralement visibles
                après 3 à 6 mois, mais l'optimisation SEO est un processus continu qui s'améliore avec le temps.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quels réseaux sociaux sont les plus adaptés à mon entreprise ?</h3>
              <p className="text-gray-600">
                Cela dépend de votre secteur d'activité et de votre cible. Nous réalisons une analyse pour déterminer
                les plateformes où votre audience est la plus présente et active.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Comment mesurez-vous le ROI de vos campagnes marketing ?</h3>
              <p className="text-gray-600">
                Nous mettons en place des KPIs spécifiques à vos objectifs et utilisons des outils d'analyse avancés
                pour suivre les conversions, le coût par acquisition et le retour sur investissement de chaque canal.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Proposez-vous des contrats à long terme ?</h3>
              <p className="text-gray-600">
                Nous proposons différentes formules adaptées à vos besoins. Bien que les stratégies marketing donnent de
                meilleurs résultats sur la durée, nous offrons aussi des prestations ponctuelles et des contrats
                flexibles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#673de6]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à booster votre présence en ligne ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre stratégie marketing digital et obtenir un audit
            gratuit de votre présence en ligne.
          </p>
          <Link href="/contact">
            <Button className="bg-white hover:bg-gray-100 text-[#673de6] px-8 py-3 rounded-lg">
              Demander un audit gratuit
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
