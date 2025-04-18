"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate login
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <main className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gray-50 py-12">
      <div className="container max-w-md">
        <Card className="border-2 border-[#673de6]/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-[#673de6]">Connexion</CardTitle>
            <CardDescription>Accédez à votre espace client</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium" htmlFor="password">
                    Mot de passe
                  </label>
                  <Link href="/mot-de-passe-oublie" className="text-xs text-[#673de6] hover:underline">
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember"
                  className="h-4 w-4 rounded border-gray-300 text-[#673de6] focus:ring-[#673de6]"
                />
                <label htmlFor="remember" className="text-sm text-gray-600">
                  Se souvenir de moi
                </label>
              </div>

              <Button type="submit" className="w-full bg-[#673de6] hover:bg-[#5f65f4]" disabled={loading}>
                {loading ? "Connexion en cours..." : "Se connecter"}
              </Button>

              <div className="text-center text-sm text-gray-600">
                Vous n'avez pas de compte?{" "}
                <Link href="/inscription" className="text-[#673de6] hover:underline">
                  S'inscrire
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
