"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">CONTACT ME</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg">Let's work together or just say hello</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="bg-black border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                />
                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 py-3 font-semibold transition-all duration-300 hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="text-white">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new opportunities and interesting projects. Feel free to reach out if
                you'd like to work together!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <Phone className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-400">(+233) 245 644 384</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <Mail className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">bbklartey@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-400">Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
