import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight, Star, Smartphone, Zap, Shield, BarChart2, Globe, Layers } from "lucide-react"

export default function ApplicationsMobilesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#2d1e69] text-white py-16">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Applications mobiles <span className="text-[#ff41ed]">performantes</span> et{" "}
              <span className="text-[#ff41ed]">intuitives</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transformez votre idée en application mobile native ou hybride qui captive vos utilisateurs et booste
              votre business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 rounded-md">
                Demander un devis gratuit
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-md"
              >
                Découvrir nos réalisations
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/mobile-app-development.png"
              alt="Développement d'applications mobiles"
              width={500}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Main Offer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-[#f5f5ff] rounded-xl overflow-hidden shadow-lg">
            <div className="bg-[#673de6] text-white py-3 px-6 text-center">
              <h3 className="font-medium">Notre offre phare</h3>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Application mobile sur mesure</h2>
                  <p className="text-gray-600 mb-6">
                    Atteignez vos objectifs business avec une application mobile native ou hybride conçue spécifiquement
                    pour vos besoins et votre audience.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Conception UX/UI intuitive et moderne",
                      "Développement natif iOS et Android",
                      "Intégration avec vos systèmes existants",
                      "Tests rigoureux et déploiement sur les stores",
                      "Support et maintenance continue",
                      "Analyse des performances et optimisations",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#673de6] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-bold text-[#673de6]">À partir de 4900€</span>
                    <Button className="bg-[#673de6] hover:bg-[#5f65f4]">
                      Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="md:w-1/3 flex items-center justify-center">
                  <Image
                    src="/mobile-app-showcase.png"
                    alt="Application mobile showcase"
                    width={250}
                    height={500}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Mobile Apps */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quel type d'application mobile vous convient ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous développons différents types d'applications mobiles selon vos besoins, votre budget et vos objectifs
              business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Applications natives",
                description:
                  "Performances optimales et expérience utilisateur fluide avec un développement spécifique pour iOS et Android.",
                features: [
                  "Performances maximales",
                  "Accès complet aux fonctionnalités de l'appareil",
                  "Expérience utilisateur optimale",
                  "Présence sur les App Stores",
                ],
                image: "/native-app.png",
                alt: "Application native",
              },
              {
                title: "Applications hybrides",
                description:
                  "Le meilleur des deux mondes avec un développement unique pour iOS et Android, idéal pour réduire les coûts.",
                features: [
                  "Développement plus rapide",
                  "Code unique pour iOS et Android",
                  "Coûts réduits",
                  "Mises à jour simplifiées",
                ],
                image: "/hybrid-app.png",
                alt: "Application hybride",
              },
              {
                title: "Progressive Web Apps",
                description:
                  "Applications web qui offrent une expérience similaire aux applications natives, accessibles directement depuis le navigateur.",
                features: [
                  "Pas d'installation requise",
                  "Fonctionnement hors ligne",
                  "Mises à jour automatiques",
                  "Coûts de développement réduits",
                ],
                image: "/pwa-app.png",
                alt: "Progressive Web App",
              },
            ].map((app, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={app.image || "/placeholder.svg"}
                    alt={app.alt}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <ul className="space-y-2 mb-6">
                    {app.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-[#673de6] mr-2 flex-shrink-0 mt-0.5" />
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Packs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choisissez votre pack Application Mobile</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les budgets et besoins, de la startup à la grande entreprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pack Essentiel",
                price: "4900€",
                description:
                  "Idéal pour lancer rapidement une application simple avec les fonctionnalités essentielles.",
                features: [
                  "Design UX/UI pour 5-7 écrans",
                  "Développement iOS ou Android",
                  "Fonctionnalités de base",
                  "Intégration d'API simples",
                  "Tests et déploiement",
                  "Support 30 jours",
                ],
                popular: false,
              },
              {
                title: "Pack Business",
                price: "9900€",
                description:
                  "La solution complète pour une application professionnelle avec des fonctionnalités avancées.",
                features: [
                  "Design UX/UI pour 10-15 écrans",
                  "Développement iOS et Android",
                  "Fonctionnalités avancées",
                  "Intégration d'API complexes",
                  "Système d'authentification",
                  "Tableau de bord admin",
                  "Tests approfondis",
                  "Support 90 jours",
                ],
                popular: true,
              },
              {
                title: "Pack Entreprise",
                price: "Sur mesure",
                description:
                  "Pour les projets complexes nécessitant des fonctionnalités sur mesure et une sécurité renforcée.",
                features: [
                  "Design UX/UI illimité",
                  "Développement multi-plateformes",
                  "Fonctionnalités personnalisées",
                  "Intégration systèmes complexes",
                  "Sécurité renforcée",
                  "Tableau de bord avancé",
                  "Tests exhaustifs",
                  "Support premium 12 mois",
                  "Évolutions continues",
                ],
                popular: false,
              },
            ].map((pack, i) => (
              <div
                key={i}
                className={`bg-white rounded-xl overflow-hidden border ${pack.popular ? "border-[#673de6]" : "border-gray-200"} shadow-lg relative`}
              >
                {pack.popular && (
                  <div className="absolute top-0 right-0 bg-[#673de6] text-white py-1 px-4 rounded-bl-lg font-medium">
                    Le plus populaire
                  </div>
                )}
                <div className={`p-6 ${pack.popular ? "bg-[#f5f5ff]" : "bg-white"}`}>
                  <h3 className="text-xl font-bold mb-2">{pack.title}</h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-3xl font-bold text-[#673de6]">{pack.price}</span>
                    {pack.price !== "Sur mesure" && <span className="text-gray-500 ml-1">HT</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{pack.description}</p>
                </div>
                <div className="p-6 border-t border-gray-100">
                  <ul className="space-y-3 mb-6">
                    {pack.features.map((feature, j) => (
                      <li key={j} className="flex items-start">
                        <CheckCircle2 className="h-4 w-4 text-[#673de6] mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pack.popular ? "bg-[#673de6] hover:bg-[#5f65f4] text-white" : "bg-white border border-[#673de6] text-[#673de6] hover:bg-[#673de6] hover:text-white"}`}
                  >
                    Sélectionner
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-[#f5f5ff]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pourquoi choisir LIADTECH pour votre application mobile ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre expertise en développement mobile nous permet de créer des applications performantes qui répondent
              parfaitement à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="h-10 w-10 text-[#673de6]" />,
                title: "Expertise multi-plateformes",
                description:
                  "Nos développeurs maîtrisent les technologies iOS, Android et cross-platform pour vous offrir la solution la plus adaptée.",
              },
              {
                icon: <Zap className="h-10 w-10 text-[#673de6]" />,
                title: "Performance optimale",
                description:
                  "Nous optimisons chaque ligne de code pour garantir des applications rapides, fluides et économes en batterie.",
              },
              {
                icon: <Shield className="h-10 w-10 text-[#673de6]" />,
                title: "Sécurité renforcée",
                description:
                  "La protection des données est notre priorité, avec des mesures de sécurité conformes aux standards les plus exigeants.",
              },
              {
                icon: <BarChart2 className="h-10 w-10 text-[#673de6]" />,
                title: "Analytics intégrés",
                description:
                  "Suivez le comportement des utilisateurs et améliorez continuellement votre application grâce à nos outils d'analyse.",
              },
              {
                icon: <Globe className="h-10 w-10 text-[#673de6]" />,
                title: "Compatibilité étendue",
                description:
                  "Nos applications fonctionnent sur tous les appareils et versions d'OS pour toucher un maximum d'utilisateurs.",
              },
              {
                icon: <Layers className="h-10 w-10 text-[#673de6]" />,
                title: "Évolutivité garantie",
                description:
                  "Nous concevons des applications modulaires qui peuvent évoluer facilement selon vos besoins futurs.",
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre processus de développement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une méthodologie éprouvée en 6 étapes pour transformer votre idée en application mobile performante.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Analyse & Stratégie",
                description:
                  "Nous définissons ensemble vos objectifs, votre audience cible et les fonctionnalités clés de votre application.",
              },
              {
                number: "02",
                title: "Design UX/UI",
                description:
                  "Nos designers créent des wireframes puis des maquettes détaillées pour une expérience utilisateur optimale.",
              },
              {
                number: "03",
                title: "Développement",
                description:
                  "Nos développeurs codent votre application en utilisant les technologies les plus adaptées à votre projet.",
              },
              {
                number: "04",
                title: "Tests & Assurance qualité",
                description:
                  "Nous testons rigoureusement votre application sur différents appareils pour garantir son bon fonctionnement.",
              },
              {
                number: "05",
                title: "Déploiement",
                description:
                  "Nous publions votre application sur l'App Store, Google Play ou en distribution privée selon vos besoins.",
              },
              {
                number: "06",
                title: "Maintenance & Évolution",
                description:
                  "Nous assurons le suivi, la maintenance et les évolutions de votre application pour garantir sa pérennité.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 transition-all hover:border-[#673de6] hover:shadow-md"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-bold text-[#673de6] mr-3">{step.number}</span>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos réalisations mobiles</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos applications mobiles qui ont transformé l'activité de nos clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "FitTrack Pro",
                category: "Application de fitness",
                description:
                  "Application de suivi d'entraînement avec plans personnalisés et analyse des performances.",
                image: "/mobile-case-study-1.png",
                alt: "FitTrack Pro App",
              },
              {
                title: "EcoScan",
                category: "Commerce responsable",
                description:
                  "Scanner de produits qui évalue l'impact environnemental et propose des alternatives durables.",
                image: "/mobile-case-study-2.png",
                alt: "EcoScan App",
              },
              {
                title: "DeliverEase",
                category: "Logistique & Livraison",
                description:
                  "Solution de gestion de livraison pour restaurants avec suivi en temps réel et paiements intégrés.",
                image: "/mobile-case-study-3.png",
                alt: "DeliverEase App",
              },
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-56 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.alt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#673de6] font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mt-1 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button
                    variant="outline"
                    className="border-[#673de6] text-[#673de6] hover:bg-[#673de6] hover:text-white"
                  >
                    Voir l'étude de cas
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4]">
              Voir toutes nos réalisations <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce que nos clients disent</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de clients satisfaits de nos applications mobiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Martin",
                position: "CEO, FitLife",
                quote:
                  "L'application mobile développée par LIADTECH a transformé notre business. Nos utilisateurs adorent l'interface intuitive et les fonctionnalités innovantes.",
                rating: 5,
              },
              {
                name: "Thomas Dubois",
                position: "Fondateur, EcoScan",
                quote:
                  "Travailler avec l'équipe de LIADTECH a été une expérience exceptionnelle. Ils ont su transformer notre vision en une application performante qui dépasse nos attentes.",
                rating: 5,
              },
              {
                name: "Julie Leroy",
                position: "Directrice Marketing, DeliverEase",
                quote:
                  "Grâce à notre application mobile, nous avons augmenté nos ventes de 40% en 6 mois. L'expertise de LIADTECH a été déterminante dans ce succès.",
                rating: 4,
              },
            ].map((testimonial, i) => (
              <div key={i} className="bg-[#f5f5ff] p-6 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`h-5 w-5 ${j < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-[#673de6] rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur le développement d'applications mobiles avec LIADTECH.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Combien coûte le développement d'une application mobile ?",
                  answer:
                    "Le coût dépend de la complexité, des fonctionnalités et des plateformes ciblées. Nos tarifs commencent à 4900€ pour une application simple. Nous proposons un devis personnalisé après analyse de votre projet.",
                },
                {
                  question: "Combien de temps faut-il pour développer une application mobile ?",
                  answer:
                    "Le délai varie selon la complexité du projet. En général, comptez 2 à 3 mois pour une application simple, 3 à 6 mois pour une application de complexité moyenne, et 6 mois ou plus pour une application complexe.",
                },
                {
                  question: "Quelle est la différence entre une application native et hybride ?",
                  answer:
                    "Une application native est développée spécifiquement pour iOS ou Android, offrant des performances optimales et un accès complet aux fonctionnalités de l'appareil. Une application hybride utilise un code unique pour les deux plateformes, réduisant les coûts et le temps de développement, mais parfois au détriment des performances.",
                },
                {
                  question: "Comment assurez-vous la sécurité des applications mobiles ?",
                  answer:
                    "Nous implémentons les meilleures pratiques de sécurité : chiffrement des données, authentification sécurisée, protection contre les injections SQL, tests de pénétration réguliers et conformité RGPD. La sécurité est intégrée dès la conception de l'application.",
                },
                {
                  question: "Proposez-vous un support après le lancement de l'application ?",
                  answer:
                    "Oui, nous offrons différentes formules de maintenance et support selon vos besoins : corrections de bugs, mises à jour de sécurité, optimisations de performances, et évolutions fonctionnelles. Nos contrats de support vont de 30 jours à 12 mois, renouvelables.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#2d1e69] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Prêt à lancer votre application mobile ?</h2>
            <p className="text-lg mb-8">
              Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#673de6] hover:bg-gray-100 px-8 py-6 rounded-md">
                Demander un devis gratuit
              </Button>
              <Button
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 rounded-md"
              >
                Planifier un appel
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
