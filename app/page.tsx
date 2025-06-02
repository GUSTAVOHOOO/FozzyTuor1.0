"use client"

import { useState } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { MessageCircle, MapPin, Star, ChevronRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector"
import "@/utils/i18n"
import { useTranslation } from "react-i18next"
import { openWhatsApp } from "@/utils/whatsapp"

export default function FozzytourHomepage() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])

  const features = [
    {
      icon: MessageCircle,
      title: t("feature1_title"),
      description: t("feature1_desc"),
    },
    {
      icon: MapPin,
      title: t("feature2_title"),
      description: t("feature2_desc"),
    },
    {
      icon: Star,
      title: t("feature3_title"),
      description: t("feature3_desc"),
    },
  ]

  const benefits = [
    t("benefit1"),
    t("benefit2"),
    t("benefit3"),
    t("benefit4"),
    t("benefit5"),
  ]

  const routes = [
    {
      title: t("route1_title"),
      description: t("route1_desc"),
      icon: "🏞️",
    },
    {
      title: t("route2_title"),
      description: t("route2_desc"),
      icon: "🌎",
    },
    {
      title: t("route3_title"),
      description: t("route3_desc"),
      icon: "🛍️",
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-sm"
      >
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold text-blue-600 flex items-center">
            Fozzytour
          </motion.div>

          <div className="hidden md:flex items-center justify-center space-x-8 flex-1 max-w-2xl mx-8">
            <a href="#como-funciona" className="text-blue-700 hover:text-blue-600 transition-colors font-bold flex items-center">
              {t("how_it_works")}
            </a>
            <a href="#experiencias" className="text-blue-700 hover:text-blue-600 transition-colors font-bold flex items-center">
              {t("experiences")}
            </a>
            <a href="#roteiros" className="text-blue-700 hover:text-blue-600 transition-colors font-bold flex items-center">
              {t("routes")}
            </a>
          </div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="flex items-center gap-2">
              <LanguageSelector />
              <Button 
                className="hidden md:flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-0 shadow-lg text-white"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </div>
          </motion.div>

          <button className="md:hidden text-blue-600 flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-100"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <a href="#como-funciona" className="block text-blue-700 font-bold">
                  {t("how_it_works")}
                </a>
                <a href="#experiencias" className="block text-blue-700 font-bold">
                  {t("experiences")}
                </a>
                <a href="#roteiros" className="block text-blue-700 font-bold">
                  {t("routes")}
                </a>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 border-0 text-white"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image src="/cataratas2.webp" alt="Iguazu Falls" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/40 to-blue-900/60" />
        </motion.div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-64 h-64 mx-auto mb-8 relative">
              <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{
                  x: 0,
                  opacity: 1,
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  x: { duration: 1, ease: "easeOut" },
                  opacity: { duration: 1, ease: "easeOut" },
                  rotate: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
                className="w-full h-full flex items-center justify-center"
              >
                <Image
                  src="/fozzy.png"
                  alt="Fozzytour Mascot"
                  width={480}
                  height={480}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            {t("hero_title")} <span className="text-yellow-400">24h</span>
            <br />
            {t("hero_subtitle")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-blue-100"
          >
            {t("hero_desc")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 font-bold"
              onClick={openWhatsApp}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              {t("cta_whatsapp")}
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <ChevronRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t("how_it_works")}</h2>
            <p className="text-xl text-blue-700">{t("how_it_works_desc")}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="text-center group flex flex-col"
              >
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 flex-1 border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/90 flex flex-col justify-between">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg group-hover:shadow-xl"
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">{feature.title}</h3>
                  <p className="text-blue-700">{feature.description}</p>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section
        id="beneficios"
        className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("why_choose")}</h2>
            <p className="text-xl text-blue-100">{t("why_choose_desc")}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg"
                  >
                    <span className="text-blue-900 font-bold text-xl">✓</span>
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
                  <div className="w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiências Personalizadas */}
      <section id="experiencias" className="py-20 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t("personalized_experiences")}</h2>
            <p className="text-xl text-blue-700">{t("personalized_experiences_desc")}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/90">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/cataratas-new.webp"
                    alt="Cataratas do Iguaçu"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">{t("popular")}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{t("cataratas_title")}</h3>
                  <p className="text-blue-700 mb-4">{t("cataratas_price")}</p>
                  <motion.div whileHover={{ x: 5 }} className="text-blue-600 font-medium flex items-center">
                    {t("explore_experience")}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.div>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-4" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/90">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/itaipu.jpg"
                    alt="Usina de Itaipu"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">{t("original")}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{t("itaipu_title")}</h3>
                  <p className="text-blue-700 mb-4">{t("itaipu_price")}</p>
                  <motion.div whileHover={{ x: 5 }} className="text-blue-600 font-medium flex items-center">
                    {t("explore_experience")}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.div>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-4" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/90">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/mercado.webp"
                    alt="Mercado Municipal"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">{t("popular")}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{t("mercado_title")}</h3>
                  <p className="text-blue-700 mb-4">{t("mercado_price")}</p>
                  <motion.div whileHover={{ x: 5 }} className="text-blue-600 font-medium flex items-center">
                    {t("explore_experience")}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </motion.div>
                  <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-4" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roteiros Populares */}
      <section id="roteiros" className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t("popular_routes")}</h2>
            <p className="text-xl text-blue-700">{t("popular_routes_desc")}</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {routes.map((route, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="cursor-pointer group"
              >
                <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-blue-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:bg-white/90">
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-6xl">
                        {route.icon}
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{route.title}</h3>
                    <p className="text-blue-700 mb-4">{route.description}</p>
                    <motion.div whileHover={{ x: 5 }} className="text-blue-600 font-medium flex items-center">
                      {t("learn_more")}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </motion.div>
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 mt-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta_final_title")}</h2>
            <p className="text-xl mb-8 text-blue-100">{t("cta_final_desc")}</p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-0 font-bold"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("cta_whatsapp")}
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-blue-900 text-blue-100 text-center">
        <div className="container mx-auto px-4">
          <p>© 2024 Fozzytour. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="relative">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-green-500 rounded-full"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute inset-0 bg-green-400 rounded-full"
          />
          <Button
            size="lg"
            className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg border-0 relative z-10 text-white"
            onClick={openWhatsApp}
          >
            <MessageCircle className="w-6 h-6" />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
