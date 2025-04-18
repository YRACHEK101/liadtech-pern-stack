import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Play, Film, Edit, Clock, Video, Sparkles, Zap, Target, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function VideosExplicatives() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 via-[#673de6]/10 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Vidéos explicatives 2D/3D</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Expliquez vos services avec clarté et impact pour captiver votre audience et booster vos conversions
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Créer votre vidéo
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
              Expliquez votre concept en 30 secondes chrono
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
              <div className="relative">
                <Image
                  src="/video-explicative.png"
                  alt="Vidéo explicative"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#673de6] rounded-full p-4 shadow-lg cursor-pointer hover:bg-[#5f65f4] transition-colors">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Types Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos types de vidéos explicatives</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions vidéo adaptées à vos besoins et à votre message
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Film className="h-10 w-10 text-[#673de6]" />,
                title: "Animation 2D",
                description:
                  "Vidéos animées en 2D idéales pour expliquer des concepts, services ou produits de manière claire et engageante.",
                features: [
                  "Style graphique personnalisé",
                  "Animations fluides",
                  "Idéal pour les concepts abstraits",
                  "Parfait pour les réseaux sociaux",
                ],
                image: "/animation-2d.png",
              },
              {
                icon: <Video className="h-10 w-10 text-[#673de6]" />,
                title: "Animation 3D",
                description:
                  "Vidéos en 3D pour présenter vos produits, processus ou services avec un rendu réaliste et immersif.",
                features: [
                  "Rendu réaliste et professionnel",
                  "Visualisation de produits",
                  "Démonstrations techniques",
                  "Impact visuel maximal",
                ],
                image: "/animation-3d.png",
              },
              {
                icon: <Sparkles className="h-10 w-10 text-[#673de6]" />,
                title: "Motion Design",
                description:
                  "Animations graphiques dynamiques qui combinent typographie, illustrations et effets visuels pour capter l'attention.",
                features: [
                  "Design moderne et tendance",
                  "Transitions dynamiques",
                  "Parfait pour le branding",
                  "Format court et impactant",
                ],
                image: "/motion-design.png",
              },
            ].map((type, i) => (
              <Card key={i} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={type.image || "/placeholder.svg"}
                    alt={type.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="mr-3">{type.icon}</div>
                    <h3 className="text-xl font-bold">{type.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <Check className="h-4 w-4 text-[#673de6] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full border-[#673de6] text-[#673de6] hover:bg-[#673de6] hover:text-white"
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Packs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choisissez votre pack vidéo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les budgets et besoins pour expliquer votre message
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pack Starter",
                price: "750€",
                description: "Idéal pour présenter un concept ou un service de façon claire et concise.",
                features: [
                  "Vidéo de 30 secondes",
                  "Animation 2D",
                  "1 style graphique",
                  "Voix off (1 langue)",
                  "Musique libre de droits",
                  "2 révisions incluses",
                ],
                popular: false,
              },
              {
                title: "Pack Business",
                price: "1490€",
                description: "Solution complète pour une communication professionnelle et impactante.",
                features: [
                  "Vidéo de 60-90 secondes",
                  "Animation 2D ou 3D",
                  "Style graphique personnalisé",
                  "Voix off (2 langues)",
                  "Musique et sound design",
                  "3 révisions incluses",
                  "Formats adaptés aux réseaux sociaux",
                ],
                popular: true,
              },
              {
                title: "Pack Premium",
                price: "2990€",
                description: "Pour une vidéo haut de gamme avec un impact maximal.",
                features: [
                  "Vidéo jusqu'à 2 minutes",
                  "Animation 3D avancée",
                  "Direction artistique sur mesure",
                  "Voix off (3 langues)",
                  "Musique et sound design premium",
                  "Révisions illimitées",
                  "Formats adaptés à tous supports",
                  "Droits d'utilisation commerciale",
                ],
                popular: false,
              },
            ].map((pack, i) => (
              <Card
                key={i}
                className={`border-2 ${pack.popular ? "border-[#673de6]" : "border-gray-200"} shadow-lg relative`}
              >
                {pack.popular && (
                  <div className="absolute top-0 right-0 bg-[#673de6] text-white py-1 px-4 rounded-bl-lg font-medium">
                    Le plus populaire
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{pack.title}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-[#673de6]">{pack.price}</span>
                    <span className="text-gray-500 ml-1">HT</span>
                  </div>
                  <p className="text-gray-600 mb-6">{pack.description}</p>
                  <ul className="space-y-3 mb-6">
                    {pack.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <Check className="h-4 w-4 text-[#673de6] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pack.popular ? "bg-[#673de6] hover:bg-[#5f65f4] text-white" : "bg-white border border-[#673de6] text-[#673de6] hover:bg-[#673de6] hover:text-white"}`}
                  >
                    Sélectionner
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#1f1d2c] text-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi utiliser une vidéo explicative ?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Les vidéos explicatives sont l'un des outils de communication les plus efficaces
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12 text-[#673de6]" />,
                title: "Message simplifié",
                description: "Expliquez des concepts complexes de manière simple et accessible à tous.",
              },
              {
                icon: <Target className="h-12 w-12 text-[#673de6]" />,
                title: "Taux de conversion +80%",
                description: "Les vidéos explicatives augmentent significativement les taux de conversion.",
              },
              {
                icon: <Users className="h-12 w-12 text-[#673de6]" />,
                title: "Engagement accru",
                description: "Captez l'attention de votre audience plus efficacement qu'avec du texte.",
              },
              {
                icon: <Sparkles className="h-12 w-12 text-[#673de6]" />,
                title: "Image de marque",
                description: "Renforcez votre image professionnelle et votre crédibilité.",
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-[#2d1e69] p-6 rounded-xl">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre processus de création</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée en 6 étapes pour créer votre vidéo explicative
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Edit className="h-10 w-10 text-[#673de6]" />,
                number: "01",
                title: "Briefing & Scénario",
                description:
                  "Nous définissons ensemble vos objectifs et élaborons un scénario qui transmet efficacement votre message.",
              },
              {
                icon: <Film className="h-10 w-10 text-[#673de6]" />,
                number: "02",
                title: "Storyboard",
                description:
                  "Nous créons un storyboard détaillé qui visualise chaque scène de votre vidéo pour validation.",
              },
              {
                icon: <Sparkles className="h-10 w-10 text-[#673de6]" />,
                number: "03",
                title: "Design graphique",
                description:
                  "Nos designers créent les éléments visuels et le style graphique adapté à votre identité de marque.",
              },
              {
                icon: <Video className="h-10 w-10 text-[#673de6]" />,
                number: "04",
                title: "Animation",
                description:
                  "Nos animateurs donnent vie à votre histoire avec des animations fluides et professionnelles.",
              },
              {
                icon: <Play className="h-10 w-10 text-[#673de6]" />,
                number: "05",
                title: "Voix & Son",
                description:
                  "Nous ajoutons une voix off professionnelle, de la musique et des effets sonores pour une expérience immersive.",
              },
              {
                icon: <Clock className="h-10 w-10 text-[#673de6]" />,
                number: "06",
                title: "Finalisation & Livraison",
                description:
                  "Après vos retours et ajustements, nous livrons votre vidéo dans les formats adaptés à vos besoins.",
              },
            ].map((step, i) => (
              <Card key={i} className="border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-3">{step.icon}</div>
                    <span className="text-2xl font-bold text-[#673de6]">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos réalisations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos vidéos explicatives récentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-xl overflow-hidden shadow-lg">
                <div className="relative h-56">
                  <Image
                    src={`/video-portfolio-${item}.png`}
                    alt={`Vidéo explicative ${item}`}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-[#673de6] rounded-full p-3 shadow-lg cursor-pointer hover:bg-[#5f65f4] transition-colors">
                      <Play className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Projet {item}</h3>
                  <p className="text-gray-600 mb-4">
                    {item === 1
                      ? "Vidéo explicative pour une application fintech qui simplifie les investissements."
                      : item === 2
                        ? "Animation 3D pour présenter un nouveau produit technologique innovant."
                        : "Motion design pour une campagne de sensibilisation environnementale."}
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#673de6] text-[#673de6] hover:bg-[#673de6] hover:text-white"
                  >
                    Voir le projet
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white">Voir plus de projets</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur nos vidéos explicatives
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Combien de temps faut-il pour créer une vidéo explicative ?",
                  answer:
                    "Le délai de production varie selon la complexité du projet. En général, comptez 3 à 4 semaines pour une vidéo standard. Pour les projets plus complexes ou les animations 3D avancées, le délai peut s'étendre jusqu'à 6-8 semaines.",
                },
                {
                  question: "Quelle est la durée idéale pour une vidéo explicative ?",
                  answer:
                    "La durée optimale se situe généralement entre 60 et 90 secondes. Cette durée permet de transmettre un message clair sans perdre l'attention du spectateur. Pour des sujets plus complexes, nous pouvons créer des vidéos plus longues, mais nous recommandons de ne pas dépasser 2-3 minutes.",
                },
                {
                  question: "Puis-je utiliser ma propre voix off ou musique ?",
                  answer:
                    "Absolument ! Vous pouvez fournir votre propre voix off ou musique si vous le souhaitez. Nous pouvons également vous proposer une sélection de voix professionnelles et de musiques adaptées à votre projet.",
                },
                {
                  question: "Quels formats de fichiers recevrai-je ?",
                  answer:
                    "Nous livrons votre vidéo dans les formats standards (MP4, MOV) adaptés à une diffusion sur le web, les réseaux sociaux ou en présentation. Si vous avez besoin de formats spécifiques, n'hésitez pas à nous le préciser.",
                },
                {
                  question: "Qui détient les droits sur la vidéo finale ?",
                  answer:
                    "Vous détenez les droits d'utilisation complets sur la vidéo finale. Nous conservons les droits sur les éléments créatifs (sauf mention contraire dans votre contrat). Nous pouvons également négocier des droits exclusifs sur demande.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-[#f8f5ff] rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#673de6]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à créer votre vidéo explicative ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
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
