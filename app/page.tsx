import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Shield, Zap, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1f1d2c] mb-4">
              Passez au niveau supérieur avec LIADTECH
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Transformez vos idées en succès digital. <br />
              Chez LIADTECH, nous sommes là pour vous créer des solutions — en simplifiant votre croissance.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Suivi axé vers vos performances</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">IA automatisation intelligente</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Sécurité et confidentialité</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">
                  Gagnez en visibilité, attirez plus de clients et faites décoller votre entreprise
                </p>
              </div>
            </div>
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-6 py-2">Commencer maintenant</Button>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="LIADTECH Robot"
                width={400}
                height={400}
                className="object-contain"
              />
              <div className="absolute -top-4 -right-4 h-8 w-8 bg-[#ff41ed] rounded-full"></div>
              <div className="absolute top-1/4 -left-4 h-6 w-6 bg-[#673de6] rounded-full"></div>
              <div className="absolute bottom-1/4 -right-4 h-5 w-5 bg-[#ff41ed] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="py-16 container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#673de6] mb-4">Votre succès en ligne commence ici</h2>
        <p className="text-xl text-[#1f1d2c] mb-12">Votre succès en ligne commence ici</p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/web-marketing">
            <Button className="rounded-full bg-[#673de6] hover:bg-[#5f65f4] text-white px-6">Web & Marketing</Button>
          </Link>
          <Link href="/studio-creatif">
            <Button className="rounded-full bg-[#ffa4f6] hover:bg-[#ff41ed] text-[#1f1d2c] px-6">Studio Créatif</Button>
          </Link>
          <Link href="/cloud-saas">
            <Button className="rounded-full bg-[#ffa4f6] hover:bg-[#ff41ed] text-[#1f1d2c] px-6">
              Cloud, SaaS & Support
            </Button>
          </Link>
          <Link href="/ia-cybersecurite">
            <Button className="rounded-full bg-[#ffa4f6] hover:bg-[#ff41ed] text-[#1f1d2c] px-6">
              IA & Cybersécurité
            </Button>
          </Link>
        </div>
      </section>

      {/* Transform Projects Section */}
      <section className="container mx-auto mt-8 mb-16">
        <div className="rounded-3xl bg-[#1f1d2c] p-8 md:p-12 flex flex-col lg:flex-row gap-8 overflow-hidden relative">
          {/* Left Column */}
          <div className="lg:w-1/2 z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à transformer
              <br />
              vos projets ?
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur adipiscing Quisque et imperdiet
              ipsum.
            </p>
            <Link href="/commencer">
              <Button className="bg-[#5f65f4] hover:bg-[#673de6] text-white px-8 py-3 rounded-lg">Commencer</Button>
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="lg:w-1/2 flex justify-center items-center z-10">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=350&width=500"
                alt="Dashboard Preview"
                width={500}
                height={350}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-white/90 p-3 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <div className="bg-[#673de6] p-1 rounded-md">
                    <Zap className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-sm">Ultra-rapide</span>
                </div>
              </div>
              <div className="absolute top-1/3 -right-8 bg-white/90 p-3 rounded-lg shadow-md">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff41ed] p-1 rounded-md">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium text-sm">99.99% stable</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full border-[1px] border-white/20 grid grid-cols-12 grid-rows-6">
              {Array(12 * 6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white/10"></div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Nos Offres de Service Packagé</h2>
        <div className="w-16 h-1 bg-[#673de6] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pack Booster */}
          <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#673de6] mb-4">Pack Booster</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">990€</span>
                <span className="text-gray-500 ml-2">/ mois</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Site Web (5 pages)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Service personnalisé (1 à 2 heures)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Design responsive</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Hébergement inclus</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">SEO basique</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <Button className="w-full bg-[#673de6] hover:bg-[#5f65f4]">Commander</Button>
            </div>
          </div>

          {/* Pack Premium */}
          <div className="border-2 border-[#673de6] rounded-xl overflow-hidden shadow-lg relative">
            <div className="absolute top-0 right-0 bg-[#673de6] text-white text-xs font-bold px-3 py-1">POPULAIRE</div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#673de6] mb-4">Pack Premium</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">1990€</span>
                <span className="text-gray-500 ml-2">/ mois</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Site Web (10 pages)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Service personnalisé (3 à 5 heures)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Design responsive premium</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">E-commerce (jusqu'à 100 produits)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">SEO avancé</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <Button className="w-full bg-[#673de6] hover:bg-[#5f65f4]">Commander</Button>
            </div>
          </div>

          {/* Pack Ultimate */}
          <div className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#673de6] mb-4">Pack Ultimate</h3>
              <div className="flex items-end mb-6">
                <span className="text-4xl font-bold">3390€</span>
                <span className="text-gray-500 ml-2">/ mois</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Site Web illimité</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Service personnel (+ conseiller dédié)</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">Design sur mesure</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">E-commerce illimité</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="ml-3 text-gray-700">SEO premium + consultations</span>
                </li>
              </ul>
            </div>
            <div className="px-6 pb-6">
              <Button className="w-full bg-[#673de6] hover:bg-[#5f65f4]">Commander</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-2">Pourquoi choisir LIADTECH ?</h2>
          <p className="text-center text-gray-600 mb-12">Une méthode simplifiée</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#673de6]/10 border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-[#673de6] mb-4">Formation par des experts</h3>
                <p className="text-gray-700">
                  Formés par des spécialistes en technologie, LIADTECH assure que vos spécialistes soient au courant des
                  dernières tendances et solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#673de6]/10 border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-[#673de6] mb-4">Processus industrialisé</h3>
                <p className="text-gray-700">
                  Nous construisons un processus rigoureux qui garantit l'efficacité et la qualité de chaque projet pour
                  vous assurer des résultats optimaux.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#673de6]/10 border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-[#673de6] mb-4">Équipe pluridisciplinaire</h3>
                <p className="text-gray-700">
                  Notre équipe diversifiée combine expertise technique, créativité et vision stratégique pour offrir des
                  solutions complètes adaptées à vos besoins spécifiques.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#673de6]/10 border-none">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold text-[#673de6] mb-4">Outils de suivi en temps réel</h3>
                <p className="text-gray-700">
                  Suivez l'avancement de votre projet en temps réel grâce à nos outils de suivi intuitifs qui vous
                  permettent de rester informé à chaque étape.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Processus rapide et efficace</h2>
        <p className="text-center text-gray-600 mb-12">Une méthode simplifiée</p>

        <div className="bg-[#1f1d2c] rounded-xl p-8 text-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                1
              </div>
              <p className="text-center text-sm">
                Prise de Contact
                <br />
                Signature du Contrat
              </p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#673de6]"></div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                2
              </div>
              <p className="text-center text-sm">
                Analyse
                <br />
                des Besoins
              </p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#673de6]"></div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                3
              </div>
              <p className="text-center text-sm">
                Suivi du Processus
                <br />
                avec API
              </p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#673de6]"></div>
            <div className="flex flex-col items-center mb-6 md:mb-0">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                4
              </div>
              <p className="text-center text-sm">
                Validation
                <br />
                et Audit
              </p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#673de6]"></div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#673de6] flex items-center justify-center text-xl font-bold mb-2">
                5
              </div>
              <p className="text-center text-sm">
                Livraison du Projet &<br />
                Documentation Complète
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-[#ffa4f6]/20 p-8 rounded-xl flex justify-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="LIADTECH Robot"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#1f1d2c] mb-6">Votre vision est notre mission.</h2>
              <p className="text-gray-700 mb-8">
                Nous allons ensemble et structurons pour vous proposer des solutions digitales vraiment innovantes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    Notre équipe expérimentée maîtrise parfaitement les dernières technologies et s'adapte rapidement
                    aux besoins de votre entreprise
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-700">
                    Travail d'équipe essentiel : notre équipe de support réactif vous accompagne à chaque étape du
                    processus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Support Disponible 24h/24, 7/7</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="ml-3 text-gray-700">
                Discutez par chat avec un agent ou par email avec notre équipe d'experts qui vous guide en toute
                sérénité
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="ml-3 text-gray-700">
                Support téléphonique disponible en français, anglais, allemand et espagnol, afin d'assurer une
                communication fluide
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="ml-3 text-gray-700">
                Temps d'attente minimal : tous les appels au support reçoivent une réponse généralement en moins de 2
                minutes
              </p>
            </div>

            <div className="mt-8">
              <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-6">Contacter le support</Button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Support Robot"
                width={300}
                height={300}
                className="object-contain"
              />
              <div className="absolute top-0 right-0 bg-white p-3 rounded-full shadow-lg">
                <MessageCircle className="h-6 w-6 text-[#673de6]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
