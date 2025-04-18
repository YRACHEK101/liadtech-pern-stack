import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Brain, Lock, Eye, FileCode } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IACybersecurite() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#673de6]/20 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">IA & Cybersécurité</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto mb-8">
            Solutions d'intelligence artificielle avancées et protection cybersécurité de pointe
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-6 text-lg rounded-lg">
              Sécuriser mon entreprise
            </Button>
          </Link>
        </div>
      </section>

      {/* AI Solutions */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Solutions d'Intelligence Artificielle</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Transformez votre entreprise grâce à nos solutions d'IA innovantes et personnalisées
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Brain className="text-white" />
              </div>
              <CardTitle>IA Prédictive</CardTitle>
              <CardDescription>Anticipez les tendances et comportements</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Exploitez la puissance de l'IA prédictive pour anticiper les tendances du marché et les comportements
                des clients. Prenez des décisions éclairées basées sur des prédictions précises.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <FileCode className="text-white" />
              </div>
              <CardTitle>Automatisation Intelligente</CardTitle>
              <CardDescription>Optimisez vos processus métier</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Automatisez vos processus métier grâce à l'IA pour gagner en efficacité et réduire les coûts. Nos
                solutions d'automatisation intelligente s'adaptent à vos besoins spécifiques.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Eye className="text-white" />
              </div>
              <CardTitle>Vision par Ordinateur</CardTitle>
              <CardDescription>Analyse d'images et de vidéos</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Analysez automatiquement les images et vidéos grâce à notre technologie de vision par ordinateur.
                Identifiez des objets, détectez des anomalies et extrayez des informations précieuses.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cybersecurity */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Cybersécurité</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Protégez votre entreprise contre les menaces numériques avec nos solutions de cybersécurité avancées
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-white" />
                </div>
                <CardTitle>Protection contre les Menaces</CardTitle>
                <CardDescription>Détection et prévention des cyberattaques</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Protégez votre infrastructure contre les cyberattaques avec nos solutions de détection et de
                  prévention des menaces. Notre système identifie et neutralise les menaces avant qu'elles ne causent
                  des dommages.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-[#673de6]"></div>
                    <span>Protection contre les malwares et ransomwares</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-[#673de6]"></div>
                    <span>Détection des intrusions</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-[#673de6]"></div>
                    <span>Analyse comportementale</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-[#673de6] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="text-white" />
                </div>
                <CardTitle>Sécurité des Données</CardTitle>
                <CardDescription>Protection et chiffrement des données sensibles</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Sécurisez vos données sensibles grâce à nos solutions de chiffrement et de protection avancées. Nous
                  vous aidons à protéger vos informations confidentielles contre les accès non autorisés.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-[#673de6]"></div>
                    <span>Chiffrement de bout en bout</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-[#673de6]"></div>
                    <span>Gestion des accès et des identités</span>
                  </li>
                  <li className="flex items-center">
                    <div className="mr-2 h-3 w-3 rounded-full bg-[#673de6]"></div>
                    <span>Protection contre les fuites de données</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-[#1f1d2c] rounded-xl p-8 text-white">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Audit de Sécurité Gratuit</h3>
                <p className="mb-6">
                  Découvrez les vulnérabilités de votre infrastructure informatique avec notre audit de sécurité
                  gratuit. Nos experts analyseront votre système et vous fourniront un rapport détaillé avec des
                  recommandations.
                </p>
                <Link href="/contact">
                  <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white">Demander un audit</Button>
                </Link>
              </div>
              <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
                <div className="bg-[#673de6]/20 p-4 rounded-full">
                  <Shield className="h-24 w-24 text-[#673de6]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IA + Cybersecurity */}
      <section className="py-16 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">IA au service de la Cybersécurité</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="IA Cybersécurité"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#673de6]">Détection intelligente des menaces</h3>
            <p className="mb-6 text-gray-700">
              Notre approche combine l'intelligence artificielle et la cybersécurité pour offrir une protection
              supérieure. L'IA analyse en continu les comportements et détecte les anomalies pour identifier les menaces
              avant qu'elles ne causent des dommages.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[#673de6] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-bold">Apprentissage automatique</h4>
                  <p className="text-sm text-gray-600">
                    Nos systèmes apprennent continuellement pour s'adapter aux nouvelles menaces et améliorer leur
                    efficacité.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[#673de6] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-bold">Analyse comportementale</h4>
                  <p className="text-sm text-gray-600">
                    Détection des comportements suspects basée sur l'analyse des modèles d'utilisation normaux.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 rounded-full bg-[#673de6] flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-bold">Réponse automatisée</h4>
                  <p className="text-sm text-gray-600">
                    Réaction immédiate aux menaces détectées pour minimiser les risques et les dommages potentiels.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1f1d2c] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Protégez votre avenir numérique</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Contactez-nous dès aujourd'hui pour découvrir comment nos solutions d'IA et de cybersécurité peuvent
            protéger et transformer votre entreprise.
          </p>
          <Link href="/contact">
            <Button className="bg-[#673de6] hover:bg-[#5f65f4] text-white px-8 py-3 rounded-lg">
              Prendre rendez-vous
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
