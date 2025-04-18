import Image from "next/image"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Search, BarChart2, FileText, Code, TrendingUp } from "lucide-react"

export default function ReferencementWebSEO() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Référencement Web & SEO</h1>
              <p className="text-xl md:text-2xl mb-8 text-purple-100">
                Améliorez votre visibilité en ligne et attirez un trafic qualifié grâce à nos stratégies SEO sur mesure
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
                  Demander un audit SEO gratuit
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Nos services SEO <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/seo-dashboard.png"
                alt="Dashboard d'analyse SEO"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos services de référencement web</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des solutions complètes pour améliorer votre positionnement sur les moteurs de recherche et augmenter
              votre trafic organique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Audit SEO complet</h3>
              <p className="text-gray-600 mb-6">
                Analyse approfondie de votre site web pour identifier les opportunités d'amélioration et les obstacles
                techniques au référencement
              </p>
              <Image src="/seo-audit.png" alt="Audit SEO" width={400} height={250} className="rounded-lg mb-6" />
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Analyse technique complète</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Étude des mots-clés concurrentiels</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Analyse de la structure du site</span>
                </li>
              </ul>
              <Link href="/contact" className="text-purple-700 font-medium flex items-center hover:text-purple-900">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO On-Page & Content</h3>
              <p className="text-gray-600 mb-6">
                Optimisation du contenu de votre site pour les moteurs de recherche et création de contenus pertinents
                pour votre audience
              </p>
              <Image src="/seo-content.png" alt="SEO Content" width={400} height={250} className="rounded-lg mb-6" />
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimisation des balises meta</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Création de contenus SEO</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimisation de la structure sémantique</span>
                </li>
              </ul>
              <Link href="/contact" className="text-purple-700 font-medium flex items-center hover:text-purple-900">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-purple-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Technique</h3>
              <p className="text-gray-600 mb-6">
                Optimisation des aspects techniques de votre site pour améliorer son indexation et son classement dans
                les résultats de recherche
              </p>
              <Image
                src="/seo-technical.png"
                alt="SEO Technique"
                width={400}
                height={250}
                className="rounded-lg mb-6"
              />
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimisation de la vitesse du site</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Amélioration du maillage interne</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Optimisation pour mobile</span>
                </li>
              </ul>
              <Link href="/contact" className="text-purple-700 font-medium flex items-center hover:text-purple-900">
                En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Notre méthodologie SEO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche structurée pour garantir des résultats durables et mesurables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Tabs defaultValue="audit" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="audit">Audit</TabsTrigger>
                  <TabsTrigger value="strategy">Stratégie</TabsTrigger>
                  <TabsTrigger value="implementation">Mise en œuvre</TabsTrigger>
                  <TabsTrigger value="monitoring">Suivi</TabsTrigger>
                </TabsList>
                <TabsContent value="audit" className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">1. Audit complet</h3>
                  <p className="text-gray-700 mb-4">
                    Nous commençons par une analyse approfondie de votre site web et de votre présence en ligne actuelle
                    pour identifier les opportunités et les obstacles.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Analyse technique du site</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Étude de la concurrence</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Recherche de mots-clés</span>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="strategy" className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">2. Élaboration de la stratégie</h3>
                  <p className="text-gray-700 mb-4">
                    Sur la base de l'audit, nous développons une stratégie SEO personnalisée adaptée à vos objectifs
                    commerciaux et à votre secteur d'activité.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Définition des objectifs mesurables</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Planification du contenu</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Stratégie de netlinking</span>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="implementation" className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">3. Mise en œuvre</h3>
                  <p className="text-gray-700 mb-4">
                    Nous mettons en œuvre les optimisations techniques et de contenu conformément à la stratégie
                    définie.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Optimisations techniques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Création et optimisation de contenu</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Acquisition de backlinks de qualité</span>
                    </li>
                  </ul>
                </TabsContent>
                <TabsContent value="monitoring" className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">4. Suivi et optimisation continue</h3>
                  <p className="text-gray-700 mb-4">
                    Nous surveillons en permanence les performances de votre site et ajustons notre stratégie en
                    fonction des résultats et des évolutions des algorithmes.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Rapports de performance mensuels</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Ajustements stratégiques</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Veille algorithmique</span>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <BarChart2 className="h-12 w-12 text-purple-700 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Des résultats mesurables</h3>
                <p className="text-gray-700 mb-6">
                  Notre approche axée sur les données vous permet de suivre l'évolution de vos performances SEO et de
                  mesurer le retour sur investissement.
                </p>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Trafic organique</span>
                      <span className="text-sm font-medium text-green-600">+145%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Positions moyennes</span>
                      <span className="text-sm font-medium text-green-600">+12 positions</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">Taux de conversion</span>
                      <span className="text-sm font-medium text-green-600">+68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nos réussites en SEO</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous avons aidé nos clients à améliorer leur visibilité en ligne et à augmenter leur
              trafic organique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <Image
                src="/seo-case-study-1.png"
                alt="Étude de cas SEO e-commerce"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-medium">+187% de trafic organique</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Site e-commerce de mode</h3>
                <p className="text-gray-700 mb-4">
                  Refonte complète de la stratégie SEO pour un site e-commerce de mode, avec une augmentation
                  significative du trafic et des ventes en ligne.
                </p>
                <Link href="/contact" className="text-purple-700 font-medium flex items-center hover:text-purple-900">
                  Voir l'étude de cas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <Image
                src="/seo-case-study-2.png"
                alt="Étude de cas SEO B2B"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-medium">+215% de leads qualifiés</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Entreprise de services B2B</h3>
                <p className="text-gray-700 mb-4">
                  Stratégie de contenu SEO pour une entreprise de services B2B, avec une augmentation significative des
                  leads qualifiés et des conversions.
                </p>
                <Link href="/contact" className="text-purple-700 font-medium flex items-center hover:text-purple-900">
                  Voir l'étude de cas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
              <Image
                src="/seo-case-study-3.png"
                alt="Étude de cas SEO local"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-green-600 font-medium">+320% de visibilité locale</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Réseau de restaurants locaux</h3>
                <p className="text-gray-700 mb-4">
                  Stratégie de SEO local pour un réseau de restaurants, avec une augmentation significative de la
                  visibilité dans les recherches locales et des visites en magasin.
                </p>
                <Link href="/contact" className="text-purple-700 font-medium flex items-center hover:text-purple-900">
                  Voir l'étude de cas <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Questions fréquentes sur le SEO</h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir sur le référencement web et nos services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Combien de temps faut-il pour voir des résultats en SEO ?
              </h3>
              <p className="text-gray-700">
                Le SEO est un investissement à moyen et long terme. Les premiers résultats peuvent être visibles après 3
                à 6 mois, mais une stratégie SEO complète déploie généralement son plein potentiel après 6 à 12 mois.
                Cela dépend également de la concurrence dans votre secteur et de l'état initial de votre site web.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quelle est la différence entre le SEO et le SEA ?
              </h3>
              <p className="text-gray-700">
                Le SEO (Search Engine Optimization) vise à améliorer votre visibilité dans les résultats de recherche
                organiques (non payants), tandis que le SEA (Search Engine Advertising) concerne les annonces payantes
                sur les moteurs de recherche. Le SEO offre des résultats durables à long terme, tandis que le SEA génère
                du trafic immédiat mais s'arrête dès que vous cessez de payer.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comment mesurez-vous les résultats de vos campagnes SEO ?
              </h3>
              <p className="text-gray-700">
                Nous utilisons plusieurs indicateurs clés de performance (KPI) pour mesurer l'efficacité de nos
                stratégies SEO, notamment : l'évolution du trafic organique, les positions moyennes sur les mots-clés
                ciblés, le taux de conversion, le taux de rebond, et le retour sur investissement (ROI). Nous
                fournissons des rapports mensuels détaillés avec ces métriques.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quelles sont les pratiques SEO à éviter ?</h3>
              <p className="text-gray-700">
                Il est important d'éviter les techniques de "black hat SEO" qui peuvent entraîner des pénalités de la
                part des moteurs de recherche, comme le bourrage de mots-clés, les textes cachés, les réseaux de liens
                artificiels, le contenu dupliqué ou de faible qualité. Nous appliquons uniquement des techniques "white
                hat" conformes aux recommandations de Google.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à améliorer votre visibilité en ligne ?</h2>
          <p className="text-xl mb-8 text-purple-100 max-w-3xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment notre expertise en SEO
            peut vous aider à atteindre vos objectifs commerciaux.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-100">
              Demander un devis gratuit
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
