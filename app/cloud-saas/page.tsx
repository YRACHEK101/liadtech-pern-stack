import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cloud, Server, Shield, Database, LifeBuoy } from "lucide-react"
import Link from "next/link"

export default function CloudSaaS() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#ffa4f6]/20 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Cloud, SaaS & Support</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Solutions cloud évolutives, logiciels SaaS performants et support technique expert
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff41ed] hover:bg-[#673de6] text-white px-8 py-6 text-lg rounded-lg">
              Découvrir nos solutions
            </Button>
          </Link>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos solutions cloud et SaaS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Cloud className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Cloud Computing</CardTitle>
              <CardDescription>Infrastructure cloud évolutive</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Profitez d'une infrastructure cloud flexible et évolutive. Nos solutions s'adaptent à vos besoins et
                vous permettent de vous concentrer sur votre cœur de métier sans vous soucier de l'infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Server className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Solutions SaaS</CardTitle>
              <CardDescription>Logiciels en tant que service</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Accédez à des logiciels performants sans investissement initial lourd. Nos solutions SaaS vous offrent
                des fonctionnalités avancées avec une tarification flexible basée sur l'usage.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Database className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Gestion de Données</CardTitle>
              <CardDescription>Stockage et analyse de données</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Exploitez pleinement vos données avec nos solutions de stockage et d'analyse. Nous vous aidons à
                transformer vos données en insights actionnables pour votre entreprise.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Sécurité Cloud</CardTitle>
              <CardDescription>Protection de vos données</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Protégez vos données et applications avec nos solutions de sécurité cloud avancées. Nous mettons en
                place des mesures de protection robustes pour garantir la sécurité de vos informations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <LifeBuoy className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Support Technique</CardTitle>
              <CardDescription>Assistance experte 24/7</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Bénéficiez d'un support technique expert disponible 24/7. Notre équipe est là pour résoudre rapidement
                vos problèmes et vous accompagner dans l'utilisation de nos solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos forfaits</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 border-[#ffa4f6]">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">29€</span>
                  <span className="text-sm text-gray-500">/mois</span>
                </div>
                <CardDescription>Pour les petites entreprises</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>5 Go de stockage cloud</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>2 utilisateurs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>Support par email</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>Mises à jour incluses</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#ffa4f6] hover:bg-[#ff41ed] text-[#1f1d2c]">
                  Choisir ce forfait
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#673de6] shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#673de6] text-white px-4 py-1 rounded-full text-sm">
                Populaire
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">79€</span>
                  <span className="text-sm text-gray-500">/mois</span>
                </div>
                <CardDescription>Pour les entreprises en croissance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#673de6]"></div>
                    <span>50 Go de stockage cloud</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#673de6]"></div>
                    <span>10 utilisateurs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#673de6]"></div>
                    <span>Support téléphonique</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#673de6]"></div>
                    <span>Analyse de données basique</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#673de6]"></div>
                    <span>Sécurité avancée</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#673de6] hover:bg-[#5f65f4]">Choisir ce forfait</Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#ffa4f6]">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">199€</span>
                  <span className="text-sm text-gray-500">/mois</span>
                </div>
                <CardDescription>Pour les grandes entreprises</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>Stockage illimité</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>Utilisateurs illimités</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>Support 24/7 dédié</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>Analyse de données avancée</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>Sécurité de niveau entreprise</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-4 w-4 rounded-full bg-[#ffa4f6]"></div>
                    <span>API personnalisée</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-[#ffa4f6] hover:bg-[#ff41ed] text-[#1f1d2c]">
                  Contacter les ventes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1f1d2c] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à migrer vers le cloud?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nos solutions cloud et SaaS
            peuvent transformer votre entreprise.
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff41ed] hover:bg-[#ffa4f6] text-white px-8 py-3 rounded-lg">
              Demander une démo
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
