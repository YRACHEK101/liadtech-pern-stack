import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BloggingContenus() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Blogging & Création de Contenus</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Captivez votre audience avec des contenus de qualité qui convertissent et positionnent votre marque comme
              référence dans votre secteur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=600&query=content marketing dashboard with analytics and blog posts"
                alt="Blogging et création de contenus"
                width={600}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-purple-800">
                Transformez votre présence en ligne avec des contenus stratégiques
              </h2>
              <p className="text-gray-700">
                Dans un monde digital saturé d'informations, se démarquer par la qualité et la pertinence de vos
                contenus est essentiel. Notre équipe de rédacteurs et stratèges en contenu crée des articles, guides et
                publications qui résonnent avec votre audience cible et renforcent votre autorité.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="bg-purple-700 hover:bg-purple-800">
                  <Link href="/contact">Discuter de votre stratégie de contenu</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Nos services de création de contenus</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-48 relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=professional blog writing with SEO optimization"
                    alt="Rédaction de blogs"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-purple-800">Rédaction de blogs</CardTitle>
                <CardDescription>Articles optimisés pour le SEO et l'engagement</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Des articles de blog professionnels, optimisés pour les moteurs de recherche et conçus pour captiver
                  votre audience. Nous recherchons les sujets pertinents et créons des contenus qui génèrent du trafic
                  qualifié.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-purple-100 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-48 relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=content marketing strategy document with calendar"
                    alt="Stratégie de contenu"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-purple-800">Stratégie de contenu</CardTitle>
                <CardDescription>Planification et calendrier éditorial</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Développement d'une stratégie de contenu cohérente alignée avec vos objectifs commerciaux. Nous créons
                  un calendrier éditorial complet pour maintenir une présence régulière et pertinente.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-purple-100 hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-48 relative mb-4">
                  <Image
                    src="/placeholder.svg?height=200&width=400&query=social media content creation with graphics and posts"
                    alt="Contenus pour réseaux sociaux"
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle className="text-purple-800">Contenus réseaux sociaux</CardTitle>
                <CardDescription>Publications engageantes et visuels adaptés</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Création de contenus spécifiques pour chaque plateforme sociale, avec des visuels attrayants et des
                  textes percutants qui encouragent l'interaction et le partage.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50">
                  En savoir plus
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Types de contenus */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Types de contenus que nous créons</h2>

          <Tabs defaultValue="blogs" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="blogs">Articles de blog</TabsTrigger>
              <TabsTrigger value="whitepapers">Livres blancs</TabsTrigger>
              <TabsTrigger value="social">Réseaux sociaux</TabsTrigger>
              <TabsTrigger value="newsletters">Newsletters</TabsTrigger>
            </TabsList>

            <TabsContent value="blogs" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=500&query=professional blog article with graphics and statistics"
                    alt="Articles de blog"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-800">Articles de blog professionnels</h3>
                  <p className="text-gray-700">
                    Nos articles de blog sont rédigés par des experts dans leur domaine, optimisés pour le SEO et conçus
                    pour apporter une réelle valeur à vos lecteurs. Nous couvrons des sujets pertinents pour votre
                    industrie, avec une recherche approfondie et un style engageant.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Optimisation SEO complète</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Structure claire et attrayante</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Recherche approfondie et sources fiables</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Ton adapté à votre marque</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="whitepapers" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=500&query=professional whitepaper document with data visualization"
                    alt="Livres blancs"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-800">Livres blancs et études de cas</h3>
                  <p className="text-gray-700">
                    Nos livres blancs et études de cas démontrent votre expertise et positionnent votre entreprise comme
                    leader d'opinion. Ces documents approfondis présentent des analyses détaillées, des données
                    pertinentes et des solutions concrètes.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Recherche approfondie et analyse de données</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Design professionnel et mise en page soignée</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Infographies et visualisations de données</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Contenu téléchargeable pour la génération de leads</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="social" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=500&query=social media content calendar with posts for different platforms"
                    alt="Contenus réseaux sociaux"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-800">Contenus pour réseaux sociaux</h3>
                  <p className="text-gray-700">
                    Des publications engageantes adaptées à chaque plateforme sociale. Nous créons des contenus qui
                    suscitent l'interaction, augmentent votre visibilité et renforcent votre communauté en ligne.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Contenus adaptés à chaque plateforme (LinkedIn, Facebook, Instagram, Twitter)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Visuels attrayants et formats optimisés</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Calendrier de publication cohérent</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Hashtags stratégiques et call-to-action efficaces</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="newsletters" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=500&query=email newsletter template with sections and graphics"
                    alt="Newsletters"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-purple-800">Newsletters et emails</h3>
                  <p className="text-gray-700">
                    Des newsletters engageantes qui maintiennent le contact avec votre audience et génèrent des
                    conversions. Nous créons des emails qui sont ouverts, lus et qui incitent à l'action.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Objets d'emails optimisés pour le taux d'ouverture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Design responsive adapté à tous les appareils</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Contenu personnalisé et segmenté</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">✓</span>
                      <span>Call-to-action stratégiques pour maximiser les conversions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Notre processus */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
            Notre processus de création de contenus
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">1</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Analyse & Stratégie</h3>
              <p className="text-gray-700">
                Nous analysons votre audience, votre marché et vos objectifs pour définir une stratégie de contenu
                pertinente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">2</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Recherche & Planning</h3>
              <p className="text-gray-700">
                Recherche approfondie des sujets et création d'un calendrier éditorial adapté à vos besoins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">3</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Création & Optimisation</h3>
              <p className="text-gray-700">
                Rédaction de contenus de qualité, optimisés pour le SEO et adaptés à votre audience cible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-700">4</span>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">Publication & Analyse</h3>
              <p className="text-gray-700">
                Publication selon le calendrier établi et analyse des performances pour optimisation continue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">
            Nos réussites en création de contenus
          </h2>
        </div>
      </section>
    </main>
  )
}
