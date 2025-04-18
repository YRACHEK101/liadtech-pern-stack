import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Code, Server, Database, Zap, Shield, Users, Layers, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ApplicationsSurMesure() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#673de6]/20 via-[#673de6]/10 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Applications sur mesure</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            MVP, dashboard, applications métier full stack adaptées à vos besoins spécifiques
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Démarrer votre projet
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
              Développement d'applications métier sur mesure
            </h2>
            <p className="text-gray-600 mb-8">
              Transformez vos processus métier avec une application entièrement personnalisée qui répond parfaitement à
              vos besoins spécifiques et s'intègre à votre écosystème existant.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Analyse approfondie de vos besoins</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Conception UX/UI intuitive</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Développement full stack</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Intégration avec vos systèmes existants</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Tests rigoureux et déploiement</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Formation et documentation</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-5 w-5 bg-[#673de6] rounded-full flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-700">Support et maintenance continue</p>
              </div>
            </div>

            <div className="flex items-center mb-8">
              <span className="text-5xl font-bold text-[#673de6]">Sur mesure</span>
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
                src="/custom-app-dashboard.png"
                alt="Application sur mesure"
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
                    <span className="block text-sm font-bold">+40%</span>
                    <span className="text-xs text-gray-500">de productivité</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-12 right-0 bg-white p-4 rounded-lg shadow-lg transform translate-x-1/4">
                <div className="flex items-center gap-2">
                  <div className="bg-[#ff41ed] p-1 rounded-md">
                    <Users className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-sm font-bold">100% adapté</span>
                    <span className="text-xs text-gray-500">à vos processus métier</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos types d'applications sur mesure</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Des solutions adaptées à vos besoins spécifiques et à votre secteur d'activité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Layers className="h-10 w-10 text-[#673de6]" />,
                title: "MVP (Minimum Viable Product)",
                description:
                  "Développement rapide d'une version minimale mais fonctionnelle de votre produit pour tester votre concept sur le marché.",
                features: [
                  "Développement rapide",
                  "Fonctionnalités essentielles",
                  "Validation de concept",
                  "Itérations basées sur les retours",
                ],
                image: "/mvp-app.png",
              },
              {
                icon: <BarChart className="h-10 w-10 text-[#673de6]" />,
                title: "Dashboards & Analytics",
                description:
                  "Tableaux de bord interactifs et outils d'analyse pour visualiser vos données et prendre des décisions éclairées.",
                features: [
                  "Visualisations personnalisées",
                  "Données en temps réel",
                  "Filtres avancés",
                  "Rapports automatisés",
                ],
                image: "/dashboard-app.png",
              },
              {
                icon: <Code className="h-10 w-10 text-[#673de6]" />,
                title: "Applications métier",
                description:
                  "Applications complètes conçues pour optimiser vos processus métier spécifiques et augmenter votre productivité.",
                features: [
                  "Automatisation des processus",
                  "Intégration avec vos systèmes",
                  "Interfaces sur mesure",
                  "Sécurité avancée",
                ],
                image: "/business-app.png",
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

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nos technologies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous utilisons les technologies les plus modernes et adaptées à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Code className="h-6 w-6 text-[#673de6] mr-2" /> Frontend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Vue.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS", "Material UI", "Redux"].map(
                  (tech, i) => (
                    <div key={i} className="bg-[#f8f5ff] p-3 rounded-lg flex items-center">
                      <div className="w-2 h-2 bg-[#673de6] rounded-full mr-2"></div>
                      <span>{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Server className="h-6 w-6 text-[#673de6] mr-2" /> Backend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["Node.js", "Python", "Java", "PHP", "Express", "Django", "Spring Boot", "Laravel"].map((tech, i) => (
                  <div key={i} className="bg-[#f8f5ff] p-3 rounded-lg flex items-center">
                    <div className="w-2 h-2 bg-[#673de6] rounded-full mr-2"></div>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Database className="h-6 w-6 text-[#673de6] mr-2" /> Bases de données
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis", "Elasticsearch", "SQL Server", "DynamoDB"].map(
                  (tech, i) => (
                    <div key={i} className="bg-[#f8f5ff] p-3 rounded-lg flex items-center">
                      <div className="w-2 h-2 bg-[#673de6] rounded-full mr-2"></div>
                      <span>{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Shield className="h-6 w-6 text-[#673de6] mr-2" /> DevOps & Cloud
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform"].map(
                  (tech, i) => (
                    <div key={i} className="bg-[#f8f5ff] p-3 rounded-lg flex items-center">
                      <div className="w-2 h-2 bg-[#673de6] rounded-full mr-2"></div>
                      <span>{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#f8f5ff]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre processus de développement</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une méthodologie agile en 6 étapes pour développer votre application sur mesure
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-[#673de6]/30 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
              {[
                {
                  number: "01",
                  title: "Découverte",
                  description: "Analyse approfondie de vos besoins, objectifs et processus métier.",
                },
                {
                  number: "02",
                  title: "Conception",
                  description: "Création des wireframes, maquettes et architecture technique.",
                },
                {
                  number: "03",
                  title: "Développement",
                  description: "Programmation agile avec des sprints et des démonstrations régulières.",
                },
                {
                  number: "04",
                  title: "Tests",
                  description: "Tests rigoureux pour garantir la qualité, la sécurité et les performances.",
                },
                {
                  number: "05",
                  title: "Déploiement",
                  description: "Mise en production et intégration dans votre environnement.",
                },
                {
                  number: "06",
                  title: "Support",
                  description: "Maintenance, évolutions et support technique continu.",
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
            <h2 className="text-3xl font-bold mb-4">Nos réalisations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nos applications sur mesure ont transformé l'activité de nos clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plateforme de gestion logistique",
                sector: "Transport & Logistique",
                description:
                  "Application sur mesure pour optimiser la gestion des livraisons et le suivi des colis en temps réel.",
                results: [
                  "Réduction de 30% des délais de livraison",
                  "Économie de 25% sur les coûts logistiques",
                  "Satisfaction client améliorée de 40%",
                ],
                image: "/case-study-logistics.png",
              },
              {
                title: "Dashboard RH & Analytics",
                sector: "Ressources Humaines",
                description:
                  "Tableau de bord analytique pour visualiser et optimiser les KPIs RH d'une entreprise de 500 employés.",
                results: [
                  "Réduction de 45% du temps de reporting",
                  "Amélioration de 20% du taux de rétention",
                  "Processus de recrutement optimisé",
                ],
                image: "/case-study-hr.png",
              },
              {
                title: "MVP pour startup fintech",
                sector: "Finance & Technologie",
                description:
                  "Développement rapide d'un MVP pour une startup fintech permettant de tester leur concept innovant.",
                results: [
                  "Levée de fonds de 2M€ après démonstration",
                  "Acquisition des 1000 premiers utilisateurs",
                  "Validation du concept en 3 mois",
                ],
                image: "/case-study-fintech.png",
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
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tout ce que vous devez savoir sur le développement d'applications sur mesure
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "Combien coûte le développement d'une application sur mesure ?",
                  answer:
                    "Le coût varie considérablement selon la complexité, les fonctionnalités et l'envergure du projet. Un MVP simple peut commencer à partir de 15 000€, tandis qu'une application métier complète peut nécessiter un investissement plus important. Nous proposons un devis détaillé après analyse de vos besoins spécifiques.",
                },
                {
                  question: "Combien de temps faut-il pour développer une application sur mesure ?",
                  answer:
                    "Le délai de développement dépend de la complexité du projet. Un MVP peut être développé en 2-3 mois, une application de complexité moyenne en 4-6 mois, et un système complexe peut prendre 6-12 mois. Notre approche agile permet de livrer des versions fonctionnelles progressivement.",
                },
                {
                  question: "Qui sera propriétaire du code source ?",
                  answer:
                    "Vous êtes entièrement propriétaire du code source de votre application. Nous vous fournissons tous les fichiers sources, la documentation et les droits d'utilisation complets à la fin du projet.",
                },
                {
                  question: "Comment assurez-vous la sécurité de mon application ?",
                  answer:
                    "La sécurité est intégrée à chaque étape du développement. Nous implémentons les meilleures pratiques comme le chiffrement des données, l'authentification sécurisée, la protection contre les injections SQL et les tests de pénétration. Nous respectons également les normes de sécurité spécifiques à votre secteur.",
                },
                {
                  question: "Proposez-vous un support après le lancement de l'application ?",
                  answer:
                    "Oui, nous offrons différentes formules de maintenance et support selon vos besoins : corrections de bugs, mises à jour de sécurité, optimisations de performances, et évolutions fonctionnelles. Nos contrats de support garantissent la pérennité et l'évolution de votre application.",
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
          <h2 className="text-3xl font-bold text-white mb-6">Prêt à développer votre application sur mesure ?</h2>
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
