"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-[#673de6]/20 to-white pt-20 pb-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#673de6] mb-4">Contactez-nous</h1>
          <p className="text-xl text-[#1f1d2c] max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>

            {submitted ? (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                      <svg
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <h3 className="mt-3 text-lg font-medium text-green-800">Message envoyé avec succès!</h3>
                    <p className="mt-2 text-sm text-green-700">
                      Merci de nous avoir contactés. Notre équipe vous répondra dans les plus brefs délais.
                    </p>
                    <div className="mt-4">
                      <Button onClick={() => setSubmitted(false)} className="bg-green-600 hover:bg-green-700">
                        Envoyer un autre message
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="name">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="email">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="phone">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium" htmlFor="subject">
                      Sujet
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium" htmlFor="message">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    rows={6}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-[#673de6] hover:bg-[#5f65f4] w-full md:w-auto px-8"
                  disabled={loading}
                >
                  {loading ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            )}
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Nos coordonnées</h2>

            <div className="space-y-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="bg-[#673de6]/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-[#673de6]" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">contact@techsaas.fr</p>
                      <p className="text-gray-600">support@techsaas.fr</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="bg-[#673de6]/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-[#673de6]" />
                    </div>
                    <div>
                      <h3 className="font-bold">Téléphone</h3>
                      <p className="text-gray-600">+33 1 23 45 67 89</p>
                      <p className="text-gray-600">Lun-Ven: 9h-18h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start">
                    <div className="bg-[#673de6]/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-[#673de6]" />
                    </div>
                    <div>
                      <h3 className="font-bold">Adresse</h3>
                      <p className="text-gray-600">123 Avenue de la Tech</p>
                      <p className="text-gray-600">75001 Paris, France</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 bg-[#1f1d2c] rounded-lg p-6 text-white">
              <h3 className="font-bold text-xl mb-4">Horaires d'ouverture</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi:</span>
                  <span>9h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi:</span>
                  <span>10h - 15h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche:</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8 container mx-auto">
        <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-[#673de6] mx-auto mb-4" />
            <p className="text-gray-600">Carte interactive (placeholder)</p>
          </div>
        </div>
      </section>
    </main>
  )
}
