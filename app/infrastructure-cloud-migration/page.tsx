import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Cloud, Server, Database, Zap, Shield, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InfrastructureCloudMigration() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 via-[#673de6]/10 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Infrastructure Cloud et migration</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Solutions cloud évolutives, sécurisées et optimisées pour votre transformation digitale
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Migrer vers le cloud
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
                src="/cloud-overview-dashboard.png"
                alt="Infrastructure Cloud"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-12 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#673de6] p-1 rounded-md">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold">99.9%</span>
                    <span className="text-xs text-gray-500">Disponibilité garantie</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff41ed] p-1 rounded-md">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Infrastructure évolutive</span>
                    <span className="text-xs text-gray-500">Adaptée à vos besoins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos services d'infrastructure cloud</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Des solutions cloud complètes pour moderniser votre infrastructure IT et accélérer votre transformation
            digitale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Cloud className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Migration vers le cloud</h3>
                <p className="text-gray-300 mb-4">
                  Transition fluide de vos applications et données vers le cloud avec une approche méthodique et
                  sécurisée.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Analyse de l'existant</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Plan de migration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Transfert sécurisé</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Infrastructure as a Service (IaaS)</h3>
                <p className="text-gray-300 mb-4">
                  Ressources cloud flexibles et évolutives pour remplacer votre infrastructure physique et réduire vos
                  coûts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Serveurs virtuels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Stockage cloud</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Réseaux virtuels</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Cloud hybride & multi-cloud</h3>
                <p className="text-gray-300 mb-4">
                  Solutions combinant cloud public, privé et on-premise pour une flexibilité et une sécurité optimales.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Orchestration multi-cloud</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Intégration cloud-on-premise</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Gestion unifiée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud Packs Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Choisissez votre pack CLoud avec Liadtech</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Des solutions cloud pensées pour s'adapter à vos besoins et à votre budget
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pack 1 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Cloud Starter</h3>
              <p className="text-gray-600 mb-6">
                Idéal pour les petites entreprises qui débutent leur transition vers le cloud.
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
                  <span>Migration de base</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Infrastructure évolutive</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Support technique</span>
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
              <h3 className="text-xl font-bold mb-4">Cloud Business</h3>
              <p className="text-gray-600 mb-6">
                Solution complète pour les entreprises en croissance avec des besoins avancés.
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
                  <span>Migration complète</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Haute disponibilité</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Support 24/7</span>
                </div>
              </div>

              <Button className="w-full bg-[#673de6] hover:bg-[#5f65f4] text-white">Sélectionner</Button>
            </CardContent>
          </Card>

          {/* Pack 3 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Cloud Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Solution sur mesure pour les grandes entreprises avec des besoins complexes.
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
                  <span>Architecture multi-cloud</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Sécurité avancée</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Support dédié</span>
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
          <h2 className="text-3xl font-bold text-center mb-4">Les avantages du cloud avec LIADTECH</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Découvrez comment notre expertise cloud peut transformer votre infrastructure IT
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Agilité et évolutivité</h3>
                  <p className="text-gray-600">
                    Adaptez rapidement vos ressources IT à vos besoins métier. Augmentez ou réduisez votre capacité en
                    quelques clics pour répondre aux pics d'activité ou optimiser vos coûts.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Scaling automatique des ressources</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Déploiement rapide de nouvelles applications</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Adaptation aux besoins changeants</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <BarChart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Réduction des coûts</h3>
                  <p className="text-gray-600">
                    Transformez vos dépenses d'investissement (CAPEX) en dépenses opérationnelles (OPEX) et ne payez que
                    pour ce que vous utilisez réellement, sans investissement matériel lourd.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Élimination des coûts d'infrastructure</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Paiement à l'usage</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Optimisation continue des ressources</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Sécurité et conformité</h3>
                  <p className="text-gray-600">
                    Bénéficiez des dernières technologies de sécurité et de conformité pour protéger vos données et
                    applications contre les menaces modernes.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Chiffrement des données</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Conformité RGPD et normes sectorielles</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Protection contre les attaques DDoS</p>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-6">
                <div className="flex-shrink-0 h-12 w-12 bg-[#673de6] rounded-full flex items-center justify-center mr-4">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Haute disponibilité</h3>
                  <p className="text-gray-600">
                    Assurez la continuité de vos services avec des infrastructures redondantes et résilientes qui
                    garantissent un accès permanent à vos applications critiques.
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">SLA garantissant 99,9% de disponibilité</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Réplication multi-zones</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Reprise après sinistre automatisée</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Notre processus de migration cloud</h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#673de6]/30 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Évaluation</h3>
              <p className="text-gray-600">
                Analyse de votre infrastructure existante et définition des objectifs de migration.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Planification</h3>
              <p className="text-gray-600">
                Élaboration d'une stratégie de migration adaptée à vos besoins spécifiques.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Migration</h3>
              <p className="text-gray-600">
                Transfert sécurisé de vos applications et données vers l'environnement cloud.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Optimisation</h3>
              <p className="text-gray-600">
                Ajustement et optimisation de votre infrastructure cloud pour maximiser les performances.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Support continu</h3>
              <p className="text-gray-600">
                Maintenance, surveillance et amélioration continue de votre environnement cloud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos réussites cloud</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Découvrez comment nos solutions cloud ont transformé les entreprises
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#2d1f67] border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-[#673de6]/20 relative">
                <Image
                  src="/ecommerce-cloud-migration.png"
                  alt="Étude de cas cloud 1"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white">Migration e-commerce</h3>
                <p className="text-gray-300 mb-4">
                  Comment nous avons migré une plateforme e-commerce vers le cloud pour supporter un trafic x10 pendant
                  les périodes de pointe.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Secteur: E-commerce</span>
                  <Link href="/etudes-de-cas/cloud-ecommerce">
                    <Button variant="link" className="text-[#ffa4f6] p-0">
                      Lire l'étude de cas
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-[#673de6]/20 relative">
                <Image
                  src="/hybrid-cloud-integration.png"
                  alt="Étude de cas cloud 2"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white">Infrastructure hybride</h3>
                <p className="text-gray-300 mb-4">
                  Mise en place d'une infrastructure hybride pour une entreprise industrielle avec des contraintes de
                  conformité spécifiques.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Secteur: Industrie</span>
                  <Link href="/etudes-de-cas/cloud-industrie">
                    <Button variant="link" className="text-[#ffa4f6] p-0">
                      Lire l'étude de cas
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-[#673de6]/20 relative">
                <Image
                  src="/abstract-cloud-cost-optimization.png"
                  alt="Étude de cas cloud 3"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white">Optimisation des coûts</h3>
                <p className="text-gray-300 mb-4">
                  Réduction de 40% des coûts d'infrastructure pour une startup en croissance grâce à notre expertise
                  cloud.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Secteur: Startup</span>
                  <Link href="/etudes-de-cas/cloud-startup">
                    <Button variant="link" className="text-[#ffa4f6] p-0">
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Questions fréquentes</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Trouvez les réponses à vos questions sur nos services d'infrastructure cloud
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Combien de temps dure une migration vers le cloud ?</h3>
              <p className="text-gray-600">
                La durée varie selon la complexité de votre infrastructure. Une migration simple peut prendre quelques
                semaines, tandis qu'une migration complète d'entreprise peut s'étendre sur plusieurs mois. Nous
                établissons un calendrier précis lors de la phase d'évaluation.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Quels fournisseurs cloud utilisez-vous ?</h3>
              <p className="text-gray-600">
                Nous travaillons avec les principaux fournisseurs cloud comme AWS, Microsoft Azure et Google Cloud. Nous
                vous conseillons sur la meilleure solution en fonction de vos besoins spécifiques et pouvons également
                mettre en place des architectures multi-cloud.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Comment assurez-vous la sécurité de nos données ?</h3>
              <p className="text-gray-600">
                Nous implémentons des mesures de sécurité avancées comme le chiffrement des données, l'authentification
                multi-facteurs, les contrôles d'accès stricts et la surveillance continue. Nous respectons également
                toutes les réglementations en matière de protection des données.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Pouvons-nous garder certaines applications on-premise ?</h3>
              <p className="text-gray-600">
                Absolument. Nous concevons des architectures hybrides qui permettent de conserver certaines applications
                ou données on-premise tout en bénéficiant des avantages du cloud pour d'autres charges de travail. Cette
                approche est souvent idéale pour une transition progressive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#673de6]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à migrer vers le cloud ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet de migration cloud et obtenir un audit gratuit
            de votre infrastructure actuelle.
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
