"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md text-black" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="تداول العقارية" width={50} height={50} className="object-contain" />
            <div className="font-arabic">
              <div className={`text-lg font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>تداول العقارية</div>
              <div className={`text-xs ${isScrolled ? "text-muted-foreground" : "text-white/80"}`}>
                Tadawul Real Estate
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className={`font-arabic text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`font-arabic text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              من نحن
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className={`font-arabic text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              خدماتنا
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`font-arabic text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              مشاريعنا
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`font-arabic text-sm font-medium hover:text-primary transition-colors ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              تواصل معنا
            </button>
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className="font-arabic bg-white hover:bg-primary text-black hover:text-white transition-colors"
            >
              تواصل معنا
            </Button>
          </div>

          <button
            className={isScrolled ? "md:hidden text-foreground" : "md:hidden text-white"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("hero")}
                className={`font-arabic text-sm font-medium hover:text-primary transition-colors text-right ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                الرئيسية
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`font-arabic text-sm font-medium hover:text-primary transition-colors text-right ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                من نحن
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className={`font-arabic text-sm font-medium hover:text-primary transition-colors text-right ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                خدماتنا
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`font-arabic text-sm font-medium hover:text-primary transition-colors text-right ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                مشاريعنا
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`font-arabic text-sm font-medium hover:text-primary transition-colors text-right ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                تواصل معنا
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
