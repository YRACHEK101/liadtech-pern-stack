import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Play, Film, Edit, Clock, Headphones } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import PricingPacksSection from "@/components/sections/PricingPacksSection"

export default function AnimationsNarratives() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Animations narratives & mini-séries</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Donnez vie à vos idées avec des animations captivantes et des mini-séries engageantes
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
                alt="Animation narrative exemple"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-[#673de6] rounded-full p-4 shadow-lg cursor-pointer hover:bg-[#5f65f4] transition-colors">
                  <Play className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Créatif Section */}
      <PricingPacksSection />

      {/* Brand Impact Section */}
      <section className="py-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Animation impact"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
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
        </div>
      </section>

      {/* Message Impact Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1f1d2c] mb-6">
                Donnez vie à votre message avec des animations percutantes
              </h2>
              <p className="text-gray-600 mb-8">
                Captivez votre audience avec des animations qui racontent votre histoire de manière mémorable.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    Vidéos animées captivantes pour présenter vos services ou produits.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    Formats adaptés aux réseaux sociaux (reels, stories, posts, bannières).
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    Motion design dynamique qui attire l'attention dès les premières secondes.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">Scénarisation et storytelling visuel pour marquer les esprits.</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    Des contenus pensés pour booster votre visibilité et vos conversions.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Animations percutantes"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Notre processus de création</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-[#673de6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Edit className="h-8 w-8 text-[#673de6]" />
            </div>
            <h3 className="font-bold text-lg mb-2">1. Scénarisation</h3>
            <p className="text-gray-600">Nous élaborons un script et un storyboard sur mesure pour votre message.</p>
          </div>

          <div className="text-center">
            <div className="bg-[#673de6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Film className="h-8 w-8 text-[#673de6]" />
            </div>
            <h3 className="font-bold text-lg mb-2">2. Animation</h3>
            <p className="text-gray-600">Nos designers donnent vie à votre histoire avec des animations fluides.</p>
          </div>

          <div className="text-center">
            <div className="bg-[#673de6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Headphones className="h-8 w-8 text-[#673de6]" />
            </div>
            <h3 className="font-bold text-lg mb-2">3. Sound Design</h3>
            <p className="text-gray-600">Ajout de voix off, musique et effets sonores pour une expérience immersive.</p>
          </div>

          <div className="text-center">
            <div className="bg-[#673de6]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-[#673de6]" />
            </div>
            <h3 className="font-bold text-lg mb-2">4. Livraison</h3>
            <p className="text-gray-600">Vous recevez votre animation prête à l'emploi dans les formats souhaités.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1f1d2c] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à donner vie à votre message?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet d'animation narrative ou de mini-série.
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
