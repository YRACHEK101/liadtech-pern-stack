import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Code, Server, Database, Zap, Lock, Users, Layers, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DeveloppementSaaS() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 via-[#673de6]/10 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Développement SaaS</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Applications modulaires et connectées à vos outils pour optimiser vos processus métier
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Démarrer votre projet
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
                src="/saas-dashboard.png"
                alt="Application SaaS"
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
                    <span className="block text-sm font-bold">100%</span>
                    <span className="text-xs text-gray-500">Boostez votre productivité</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff41ed] p-1 rounded-md">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold">Des solutions SaaS prêtes à performer</span>
                    <span className="text-xs text-gray-500">Modulaires • Évolutives • Personnalisables</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SaaS Services Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos services de développement SaaS</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Des solutions logicielles en tant que service adaptées à vos besoins métier spécifiques
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Développement sur mesure</h3>
                <p className="text-gray-300 mb-4">
                  Création d'applications SaaS personnalisées répondant parfaitement à vos besoins métier spécifiques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Architecture évolutive</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Interfaces intuitives</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Intégrations API</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Migration vers le cloud</h3>
                <p className="text-gray-300 mb-4">
                  Transformation de vos applications existantes en solutions SaaS modernes hébergées dans le cloud.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Analyse de faisabilité</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Refactoring d'applications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Migration de données</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#2d1f67] border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Intégration & API</h3>
                <p className="text-gray-300 mb-4">
                  Connexion de vos applications SaaS avec vos outils existants pour un écosystème digital cohérent.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Développement d'API RESTful</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Webhooks personnalisés</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 bg-[#673de6]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="h-3 w-3 text-[#673de6]" />
                    </div>
                    <span className="ml-3 text-gray-300">Synchronisation de données</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SaaS Packs Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Choisissez votre pack SaaS avec Liadtech</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Des solutions SaaS adaptées à vos besoins et à votre budget
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pack 1 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">SaaS Starter</h3>
              <p className="text-gray-600 mb-6">
                Idéal pour les startups et petites entreprises qui débutent avec le SaaS.
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">4990</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix de base</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>MVP fonctionnel</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Jusqu'à 3 fonctionnalités clés</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Hébergement cloud inclus (1 an)</span>
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
              <h3 className="text-xl font-bold mb-4">SaaS Business</h3>
              <p className="text-gray-600 mb-6">
                Solution complète pour les entreprises en croissance avec des besoins avancés.
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">9990</span>
                  <span className="text-3xl">€</span>
                </div>
                <p className="text-sm text-gray-500">*Prix de base</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Application complète</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Jusqu'à 10 fonctionnalités</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Intégrations API & authentification</span>
                </div>
              </div>

              <Button className="w-full bg-[#673de6] hover:bg-[#5f65f4] text-white">Sélectionner</Button>
            </CardContent>
          </Card>

          {/* Pack 3 */}
          <Card className="border-2 border-gray-200 hover:border-[#673de6] transition-colors">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">SaaS Enterprise</h3>
              <p className="text-gray-600 mb-6">
                Solution sur mesure pour les grandes entreprises avec des besoins complexes.
              </p>

              <div className="mb-6">
                <div className="text-4xl font-bold mb-2">
                  <span className="text-[#673de6]">Sur mesure</span>
                </div>
                <p className="text-sm text-gray-500">*Contactez-nous pour un devis</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Fonctionnalités illimitées</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>Architecture multi-tenant</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-[#673de6] flex items-center justify-center mr-3">
                    <div className="w-3 h-3 rounded-full bg-[#673de6]"></div>
                  </div>
                  <span>SLA personnalisé & support dédié</span>
                </div>
              </div>

              <Button className="w-full bg-white hover:bg-gray-100 text-[#673de6] border border-[#673de6]">
                Demander un devis
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-8 text-sm text-gray-500">Conditions de paiement</div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Caractéristiques de nos solutions SaaS</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Des applications cloud modernes avec toutes les fonctionnalités essentielles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Layers className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Architecture multi-tenant</h3>
                <p className="text-gray-600">
                  Infrastructure partagée qui réduit les coûts tout en isolant les données de chaque client pour une
                  sécurité optimale.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Sécurité avancée</h3>
                <p className="text-gray-600">
                  Protection des données avec chiffrement, authentification multi-facteurs et audits de sécurité
                  réguliers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Haute performance</h3>
                <p className="text-gray-600">
                  Applications rapides et réactives grâce à une architecture optimisée et un scaling automatique.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Gestion des utilisateurs</h3>
                <p className="text-gray-600">
                  Contrôle d'accès basé sur les rôles, gestion des permissions et authentification sécurisée.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">Analytics intégrés</h3>
                <p className="text-gray-600">
                  Tableaux de bord et rapports personnalisés pour suivre les performances et prendre des décisions
                  éclairées.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-[#673de6]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-[#673de6]" />
                </div>
                <h3 className="text-lg font-bold mb-2">API ouvertes</h3>
                <p className="text-gray-600">
                  Intégration facile avec vos outils existants grâce à des API RESTful bien documentées.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Notre processus de développement SaaS</h2>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#673de6]/30 -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Découverte</h3>
              <p className="text-gray-600">
                Analyse de vos besoins, objectifs et processus métier pour définir la portée du projet.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Conception</h3>
              <p className="text-gray-600">
                Création de l'architecture, des wireframes et des maquettes pour visualiser la solution.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Développement</h3>
              <p className="text-gray-600">
                Programmation agile avec des sprints courts et des démonstrations régulières pour valider les
                fonctionnalités.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Tests</h3>
              <p className="text-gray-600">
                Tests rigoureux pour garantir la qualité, la sécurité et les performances de l'application.
              </p>
            </div>

            <div className="text-center relative">
              <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="text-white font-bold text-xl">5</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Déploiement & Support</h3>
              <p className="text-gray-600">
                Mise en production, formation des utilisateurs et support continu pour assurer le succès.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Nos réussites SaaS</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Découvrez comment nos solutions SaaS ont transformé les entreprises
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#2d1f67] border-none shadow-lg overflow-hidden">
              <div className="h-48 bg-[#673de6]/20 relative">
                <Image
                  src="/saas-case-study-1.png"
                  alt="Étude de cas SaaS 1"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white">Automatisation RH</h3>
                <p className="text-gray-300 mb-4">
                  Comment notre solution SaaS a permis à une entreprise de 500 employés de réduire de 70% le temps
                  consacré aux tâches administratives RH.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Secteur: RH</span>
                  <Link href="/etudes-de-cas/saas-rh">
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
                  src="/saas-case-study-2.png"
                  alt="Étude de cas SaaS 2"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white">Plateforme e-learning</h3>
                <p className="text-gray-300 mb-4">
                  Développement d'une solution SaaS de formation en ligne qui a permis à un organisme de formation
                  d'augmenter ses revenus de 200%.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Secteur: Éducation</span>
                  <Link href="/etudes-de-cas/saas-elearning">
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
                  src="/saas-case-study-3.png"
                  alt="Étude de cas SaaS 3"
                  width={400}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2 text-white">Gestion de projet agile</h3>
                <p className="text-gray-300 mb-4">
                  Une solution SaaS de gestion de projet qui a permis à une agence digitale d'améliorer sa productivité
                  de 35% et de réduire les délais de livraison.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Secteur: Agence</span>
                  <Link href="/etudes-de-cas/saas-gestion-projet">
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
            Trouvez les réponses à vos questions sur nos services de développement SaaS
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Combien de temps faut-il pour développer une application SaaS ?
              </h3>
              <p className="text-gray-600">
                Le délai varie selon la complexité du projet. Un MVP peut être développé en 2-3 mois, tandis qu'une
                solution complète peut nécessiter 4 à 8 mois. Nous travaillons de manière agile pour livrer des
                fonctionnalités progressivement.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Quelles technologies utilisez-vous pour le développement SaaS ?
              </h3>
              <p className="text-gray-600">
                Nous utilisons des technologies modernes comme React, Node.js, Python, et des services cloud comme AWS,
                Google Cloud ou Azure. Le choix des technologies dépend des besoins spécifiques de votre projet.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Comment gérez-vous la sécurité des données ?</h3>
              <p className="text-gray-600">
                La sécurité est notre priorité. Nous implémentons le chiffrement des données, l'authentification
                multi-facteurs, des contrôles d'accès stricts et effectuons des audits de sécurité réguliers pour
                protéger vos données.
              </p>
            </div>

            <div className="bg-[#f8f5ff] p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Proposez-vous un support après le lancement ?</h3>
              <p className="text-gray-600">
                Oui, nous offrons des contrats de maintenance et de support pour assurer le bon fonctionnement de votre
                application SaaS. Nous proposons également des évolutions et des mises à jour régulières.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#673de6]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à développer votre solution SaaS ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet SaaS et obtenir un devis personnalisé.
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
