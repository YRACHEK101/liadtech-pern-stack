import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Paintbrush, Camera, Video, Lightbulb, PenTool } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function StudioCreatif() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#ffa4f6]/20 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Studio Créatif</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Donnez vie à vos idées avec notre équipe créative et nos solutions de design innovantes
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff41ed] hover:bg-[#673de6] text-white px-8 py-6 text-lg rounded-lg">
              Démarrer un projet
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Notre portfolio</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="overflow-hidden rounded-lg group relative">
              <Image
                src={`/placeholder.svg?height=300&width=400`}
                alt={`Projet créatif ${item}`}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f1d2c]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <h3 className="font-bold text-lg">Projet {item}</h3>
                  <p className="text-sm">Design & Branding</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nos services créatifs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Paintbrush className="text-[#1f1d2c]" />
                </div>
                <CardTitle>Design Graphique</CardTitle>
                <CardDescription>Identité visuelle et branding</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Créez une identité visuelle forte et cohérente pour votre marque. Nous concevons des logos, chartes
                  graphiques et supports de communication qui vous démarquent.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <PenTool className="text-[#1f1d2c]" />
                </div>
                <CardTitle>UI/UX Design</CardTitle>
                <CardDescription>Interfaces utilisateur intuitives</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Offrez une expérience utilisateur exceptionnelle avec nos designs d'interface. Nous créons des
                  interfaces esthétiques, fonctionnelles et centrées sur l'utilisateur.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Camera className="text-[#1f1d2c]" />
                </div>
                <CardTitle>Photographie</CardTitle>
                <CardDescription>Photos professionnelles</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Mettez en valeur vos produits et services avec des photos professionnelles. Notre équipe capture
                  l'essence de votre marque à travers des images de qualité.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Video className="text-[#1f1d2c]" />
                </div>
                <CardTitle>Production Vidéo</CardTitle>
                <CardDescription>Contenu vidéo engageant</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Racontez votre histoire à travers des vidéos captivantes. Nous produisons des contenus vidéo de
                  qualité qui engagent votre audience et transmettent votre message.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-[#ffa4f6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="text-[#1f1d2c]" />
                </div>
                <CardTitle>Direction Artistique</CardTitle>
                <CardDescription>Vision créative cohérente</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Bénéficiez d'une vision créative globale pour vos projets. Notre équipe assure la cohérence visuelle
                  et conceptuelle de vos communications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1f1d2c] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à donner vie à vos idées?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contactez notre studio créatif dès aujourd'hui pour discuter de votre projet et découvrir comment nous
            pouvons transformer votre vision en réalité.
          </p>
          <Link href="/contact">
            <Button className="bg-[#ff41ed] hover:bg-[#ffa4f6] text-white px-8 py-3 rounded-lg">
              Démarrer un projet
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
