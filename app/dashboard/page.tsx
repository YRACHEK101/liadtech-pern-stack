"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart, Activity, Users, Package, CreditCard, Settings, LogOut } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Dashboard() {
  const router = useRouter()

  const handleLogout = () => {
    // Simulate logout
    setTimeout(() => {
      router.push("/")
    }, 500)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex w-64 flex-col bg-[#1f1d2c] min-h-screen fixed">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white">Dashboard</h2>
          </div>
          <nav className="flex-1 px-4 space-y-1">
            <Link href="/dashboard" className="flex items-center px-2 py-3 text-white bg-[#673de6] rounded-md">
              <Activity className="mr-3 h-5 w-5" />
              <span>Vue d'ensemble</span>
            </Link>
            <Link
              href="/dashboard/projets"
              className="flex items-center px-2 py-3 text-gray-300 hover:bg-[#673de6]/20 rounded-md"
            >
              <Package className="mr-3 h-5 w-5" />
              <span>Mes projets</span>
            </Link>
            <Link
              href="/dashboard/utilisateurs"
              className="flex items-center px-2 py-3 text-gray-300 hover:bg-[#673de6]/20 rounded-md"
            >
              <Users className="mr-3 h-5 w-5" />
              <span>Utilisateurs</span>
            </Link>
            <Link
              href="/dashboard/facturation"
              className="flex items-center px-2 py-3 text-gray-300 hover:bg-[#673de6]/20 rounded-md"
            >
              <CreditCard className="mr-3 h-5 w-5" />
              <span>Facturation</span>
            </Link>
            <Link
              href="/dashboard/parametres"
              className="flex items-center px-2 py-3 text-gray-300 hover:bg-[#673de6]/20 rounded-md"
            >
              <Settings className="mr-3 h-5 w-5" />
              <span>Paramètres</span>
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center px-2 py-3 text-gray-300 hover:bg-[#673de6]/20 rounded-md w-full"
            >
              <LogOut className="mr-3 h-5 w-5" />
              <span>Déconnexion</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64">
          {/* Header */}
          <header className="bg-white shadow-sm p-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold text-[#1f1d2c]">Tableau de bord</h1>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-[#ff41ed]"></span>
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </div>
                <div className="h-8 w-8 rounded-full bg-[#673de6] flex items-center justify-center text-white font-bold">
                  U
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className="p-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Projets actifs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      8.2%
                    </span>
                    <span className="ml-1">depuis le mois dernier</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Utilisateurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3,427</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      12.5%
                    </span>
                    <span className="ml-1">depuis le mois dernier</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Revenus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">€24,780</div>
                  <p className="text-xs text-red-500 flex items-center mt-1">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      3.1%
                    </span>
                    <span className="ml-1">depuis le mois dernier</span>
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">Taux de conversion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.5%</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <span className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                      1.2%
                    </span>
                    <span className="ml-1">depuis le mois dernier</span>
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <Tabs defaultValue="overview" className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Analytiques</h2>
                <TabsList>
                  <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
                  <TabsTrigger value="sales">Ventes</TabsTrigger>
                  <TabsTrigger value="users">Utilisateurs</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>Performance</CardTitle>
                    <CardDescription>Vue d'ensemble de la performance du mois dernier</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <LineChart className="h-16 w-16 mx-auto mb-4 text-[#673de6]" />
                      <p>Graphique de performance (placeholder)</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="sales">
                <Card>
                  <CardHeader>
                    <CardTitle>Ventes</CardTitle>
                    <CardDescription>Analyse des ventes par période</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <BarChart className="h-16 w-16 mx-auto mb-4 text-[#673de6]" />
                      <p>Graphique des ventes (placeholder)</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="users">
                <Card>
                  <CardHeader>
                    <CardTitle>Utilisateurs</CardTitle>
                    <CardDescription>Répartition des utilisateurs par catégorie</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <PieChart className="h-16 w-16 mx-auto mb-4 text-[#673de6]" />
                      <p>Graphique des utilisateurs (placeholder)</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Activité récente</CardTitle>
                <CardDescription>Les dernières actions sur votre compte</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="flex items-start">
                      <div className="h-9 w-9 rounded-full bg-[#673de6]/10 flex items-center justify-center mr-3">
                        <Activity className="h-5 w-5 text-[#673de6]" />
                      </div>
                      <div>
                        <p className="font-medium">Projet mis à jour</p>
                        <p className="text-sm text-gray-500">Il y a {item * 2} heures</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Voir toutes les activités
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
