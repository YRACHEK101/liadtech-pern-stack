import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, MessageSquare, Bot, Zap, Globe, Users, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Chatbots() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 via-[#673de6]/10 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Chatbots intelligents</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Automatisez vos échanges avec des bots intelligents pour améliorer votre service client et optimiser vos
            processus
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Créer votre chatbot
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
              Chatbot IA personnalisé pour votre entreprise
            </h2>
            <p className="text-gray-600 mb-8">
              Améliorez votre service client, automatisez les tâches répétitives et offrez une assistance 24/7 à vos
              utilisateurs grâce à un chatbot intelligent adapté à votre secteur d'activité.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">IA conversationnelle avancée</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Personnalisation selon votre marque</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Intégration à vos systèmes existants</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Apprentissage continu</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Multilingue et multicanal</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Analyses et rapports détaillés</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Support et maintenance continue</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <span className="text-5xl font-bold text-[#673de6]">À partir de 990€</span>
              <Link href="/contact" className="ml-6">
                <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-6">
                  Demander un devis <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#673de6]/10 p-6 rounded-xl">
              <Image
                src="/chatbot-interface.png"
                alt="Interface de chatbot"
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
                    <span className="block text-sm font-bold">-70%</span>
                    <span className="text-xs text-gray-500">de tickets support</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff41ed] p-1 rounded-md">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold">24/7</span>
                    <span className="text-xs text-gray-500">assistance disponible</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Types Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos types de chatbots</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins spécifiques et à votre secteur d'activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-10 w-10 text-[#673de6]" />,
                title: "Chatbot Service Client",
                description:
                  "Automatisez les réponses aux questions fréquentes, le suivi des commandes et l'assistance technique de premier niveau.",
                features: [
                  "Réponses instantanées 24/7",
                  "Escalade vers un agent humain",
                  "Base de connaissances évolutive",
                  "Suivi des demandes clients",
                ],
                image: "/customer-service-bot.png",
              },
              {
                icon: <Globe className="h-10 w-10 text-[#673de6]" />,
                title: "Chatbot Commercial",
                description:
                  "Générez et qualifiez des leads, guidez les clients dans leur parcours d'achat et augmentez vos conversions.",
                features: [
                  "Qualification de leads",
                  "Recommandations produits",
                  "Assistance à l'achat",
                  "Suivi post-achat",
                ],
                image: "/sales-bot.png",
              },
              {
                icon: <Users className="h-10 w-10 text-[#673de6]" />,
                title: "Chatbot RH & Interne",
                description: "Optimisez vos processus RH et facilitez l'accès à l'information pour vos collaborateurs.",
                features: [
                  "Onboarding des nouveaux collaborateurs",
                  "Réponses aux questions RH fréquentes",
                  "Accès aux documents internes",
                  "Gestion des congés et absences",
                ],
                image: "/hr-bot.png",
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

      {/* Chatbot Packs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choisissez votre pack Chatbot</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à tous les budgets et besoins pour automatiser vos échanges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Pack Essentiel",
                price: "990€",
                period: "+ 99€/mois",
                description: "Idéal pour les TPE et startups qui débutent avec l'automatisation",
                features: [
                  "Chatbot basique",
                  "Jusqu'à 50 questions/réponses",
                  "Intégration site web",
                  "1 langue",
                  "Support par email",
                  "Mises à jour mensuelles",
                ],
                popular: false,
              },
              {
                title: "Pack Business",
                price: "2490€",
                period: "+ 249€/mois",
                description: "Solution complète pour les PME souhaitant optimiser leur service client",
                features: [
                  "Chatbot IA avancé",
                  "Questions/réponses illimitées",
                  "Intégration multicanal",
                  "3 langues",
                  "Apprentissage continu",
                  "Intégration CRM",
                  "Tableau de bord analytique",
                  "Support prioritaire",
                ],
                popular: true,
              },
              {
                title: "Pack Enterprise",
                price: "Sur mesure",
                period: "",
                description: "Pour les grandes entreprises avec des besoins complexes",
                features: [
                  "Chatbot IA sur mesure",
                  "Intégration systèmes complexes",
                  "Multilingue illimité",
                  "Déploiement multicanal",
                  "Analyses avancées",
                  "Sécurité renforcée",
                  "SLA garanti",
                  "Support dédié 24/7",
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
                  <div className="flex items-baseline mb-1">
                    <span className="text-3xl font-bold text-[#673de6]">{pack.price}</span>
                    {pack.period && <span className="text-gray-500 ml-1 text-sm">{pack.period}</span>}
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
            <h2 className="text-3xl font-bold mb-4">Les avantages des chatbots</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Découvrez comment les chatbots peuvent transformer votre entreprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12 text-[#673de6]" />,
                title: "Disponibilité 24/7",
                description: "Offrez un service client disponible à tout moment, sans interruption ni temps d'attente.",
              },
              {
                icon: <BarChart className="h-12 w-12 text-[#673de6]" />,
                title: "Réduction des coûts",
                description: "Diminuez jusqu'à 70% vos coûts de service client en automatisant les tâches répétitives.",
              },
              {
                icon: <Users className="h-12 w-12 text-[#673de6]" />,
                title: "Expérience client améliorée",
                description: "Réponses instantanées et personnalisées pour une satisfaction client accrue.",
              },
              {
                icon: <Bot className="h-12 w-12 text-[#673de6]" />,
                title: "Évolutivité",
                description: "Gérez facilement les pics d'activité sans compromettre la qualité de service.",
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

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos technologies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous utilisons les technologies d'IA les plus avancées pour créer des chatbots intelligents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl font-bold mb-6">Plateformes et frameworks</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "OpenAI GPT-4",
                  "Google Dialogflow",
                  "Microsoft Bot Framework",
                  "Rasa",
                  "IBM Watson Assistant",
                  "Amazon Lex",
                  "TensorFlow",
                  "PyTorch",
                ].map((tech, i) => (
                  <div key={i} className="bg-[#f8f5ff] p-3 rounded-lg flex items-center">
                    <div className="w-2 h-2 bg-[#673de6] rounded-full mr-2"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Intégrations</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Site web",
                  "Facebook Messenger",
                  "WhatsApp",
                  "Slack",
                  "Microsoft Teams",
                  "Zendesk",
                  "Salesforce",
                  "HubSpot",
                ].map((tech, i) => (
                  <div key={i} className="bg-[#f8f5ff] p-3 rounded-lg flex items-center">
                    <div className="w-2 h-2 bg-[#673de6] rounded-full mr-2"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre processus de création</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une méthodologie en 5 étapes pour développer votre chatbot intelligent
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#673de6]/30 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  number: "01",
                  title: "Analyse des besoins",
                  description: "Identification de vos objectifs, cas d'usage et processus à automatiser.",
                },
                {
                  number: "02",
                  title: "Conception",
                  description: "Création des scénarios conversationnels et de l'arborescence du chatbot.",
                },
                {
                  number: "03",
                  title: "Développement",
                  description: "Programmation du chatbot et intégration avec vos systèmes existants.",
                },
                {
                  number: "04",
                  title: "Entraînement",
                  description: "Alimentation de la base de connaissances et entraînement de l'IA.",
                },
                {
                  number: "05",
                  title: "Déploiement & Optimisation",
                  description: "Mise en production, tests et amélioration continue.",
                },
              ].map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="bg-[#673de6] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos réussites</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos chatbots ont transformé l'activité de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Chatbot service client e-commerce",
                sector: "E-commerce",
                description:
                  "Chatbot pour un site e-commerce traitant les demandes de suivi de commande, retours et questions fréquentes.",
                results: [
                  "Réduction de 65% des tickets support",
                  "Taux de satisfaction client de 92%",
                  "ROI atteint en 4 mois",
                ],
                image: "/case-study-ecommerce-bot.png",
              },
              {
                title: "Assistant virtuel bancaire",
                sector: "Finance",
                description:
                  "Chatbot pour une banque en ligne aidant les clients dans leurs opérations quotidiennes et questions financières.",
                results: [
                  "Traitement de 10 000 conversations/jour",
                  "Réduction de 40% des appels au call center",
                  "Augmentation de 25% des ventes croisées",
                ],
                image: "/case-study-banking-bot.png",
              },
              {
                title: "Chatbot RH interne",
                sector: "Ressources Humaines",
                description:
                  "Assistant virtuel pour le département RH d'une grande entreprise, répondant aux questions des employés.",
                results: [
                  "Gain de 15h/semaine pour l'équipe RH",
                  "Accès à l'information 5x plus rapide",
                  "Satisfaction des employés améliorée de 30%",
                ],
                image: "/case-study-hr-bot.png",
              },
            ].map((study, i) => (
              <Card key={i} className="border-none shadow-lg overflow-hidden">
                <div className="h-48 bg-[#673de6]/10 relative">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-[#673de6] text-white py-1 px-3 text-sm font-medium">
                    {study.sector}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <h4 className="font-medium text-sm mb-2 text-[#673de6]">Résultats clés :</h4>
                  <ul className="space-y-1 mb-4">
                    {study.results.map((result, j) => (
                      <li key={j} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-[#673de6] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="border-[#673de6] text-[#673de6] hover:bg-[#673de6] hover:text-white"
                  >
                    Voir l'étude de cas
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">Tout ce que vous devez savoir sur les chatbots</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Qu'est-ce qu'un chatbot IA ?",
                  answer:
                    "Un chatbot IA est un programme informatique utilisant l'intelligence artificielle pour simuler une conversation humaine. Contrairement aux chatbots basiques qui suivent des scripts prédéfinis, les chatbots IA comprennent le langage naturel et peuvent apprendre de leurs interactions pour s'améliorer continuellement.",
                },
                {
                  question: "Combien de temps faut-il pour déployer un chatbot ?",
                  answer:
                    "Le délai de déploiement varie selon la complexité du projet. Un chatbot simple peut être mis en place en 2-4 semaines, tandis qu'un chatbot IA avancé avec des intégrations complexes peut nécessiter 2-3 mois de développement et d'entraînement.",
                },
                {
                  question: "Le chatbot peut-il s'intégrer à nos systèmes existants ?",
                  answer:
                    "Oui, nos chatbots sont conçus pour s'intégrer facilement avec vos systèmes existants comme votre CRM, votre ERP, votre base de connaissances ou votre système de ticketing. Nous développons des connecteurs personnalisés si nécessaire.",
                },
                {
                  question: "Comment le chatbot gère-t-il les questions auxquelles il ne peut pas répondre ?",
                  answer:
                    "Nos chatbots sont programmés pour reconnaître leurs limites. Lorsqu'ils ne peuvent pas répondre à une question, ils peuvent transférer la conversation à un agent humain, créer un ticket de support, ou proposer des alternatives comme laisser un message ou consulter des ressources spécifiques.",
                },
                {
                  question: "Comment assurez-vous la sécurité et la confidentialité des données ?",
                  answer:
                    "La sécurité est notre priorité. Nous implémentons le chiffrement des données, l'authentification sécurisée, et respectons les normes RGPD. Nos chatbots sont hébergés sur des infrastructures sécurisées et nous effectuons des audits de sécurité réguliers.",
                },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
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
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à automatiser vos échanges avec un chatbot ?</h2>
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
