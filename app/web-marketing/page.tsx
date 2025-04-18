import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Megaphone, BarChart, Globe, Search, Mail } from "lucide-react"
import Link from "next/link"

export default function WebMarketing() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#ffa4f6]/20 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Web & Marketing</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Boostez votre présence en ligne avec nos solutions de marketing digital sur mesure
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff41ed] hover:bg-[#673de6] text-white px-8 py-6 text-lg rounded-lg">
              Demander un devis
            </Button>
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos services de marketing digital</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-[#1f1d2c]" />
              </div>
              <CardTitle>SEO</CardTitle>
              <CardDescription>Optimisation pour les moteurs de recherche</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Améliorez votre visibilité en ligne grâce à nos stratégies SEO avancées. Nous optimisons votre site pour
                les moteurs de recherche afin d'attirer un trafic qualifié.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Megaphone className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Social Media</CardTitle>
              <CardDescription>Gestion des réseaux sociaux</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Développez votre communauté et engagez votre audience sur les réseaux sociaux. Nous créons et gérons du
                contenu pertinent pour votre marque.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Analyse de données et reporting</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Prenez des décisions éclairées grâce à nos analyses détaillées. Nous suivons les performances de vos
                campagnes et optimisons en fonction des résultats.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Web Design</CardTitle>
              <CardDescription>Création de sites web performants</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Créez une présence en ligne impactante avec nos services de conception web. Nous développons des sites
                web modernes, rapides et optimisés pour la conversion.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-[#1f1d2c]" />
              </div>
              <CardTitle>Email Marketing</CardTitle>
              <CardDescription>Campagnes d'emailing efficaces</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Convertissez vos prospects en clients grâce à nos campagnes d'email marketing personnalisées. Nous
                concevons des emails qui génèrent des résultats.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1f1d2c] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à booster votre présence en ligne?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins en marketing digital et découvrir comment nous
            pouvons vous aider à atteindre vos objectifs.
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff41ed] hover:bg-[#ffa4f6] text-white px-8 py-3 rounded-lg">Contactez-nous</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
