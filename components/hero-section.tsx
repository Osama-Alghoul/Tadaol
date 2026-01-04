"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 cube-grid-bg opacity-30" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary/10 rounded-sm animate-float-cube"
            style={{
              width: `${40 + Math.random() * 60}px`,
              height: `${40 + Math.random() * 60}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <span className="font-arabic text-sm font-medium text-primary">منذ عام 2012</span>
          </div>

          <h1 className="font-arabic text-5xl md:text-7xl font-bold text-secondary-foreground leading-tight text-balance">
            نُدير الاستثمار… ونبني القيمة
          </h1>

          <p className="font-arabic text-lg md:text-xl text-secondary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            رواد الاستثمار العقاري في منطقة الملك عبدالله المالية، نقدم حلولاً عقارية متكاملة تجمع بين الخبرة والابتكار
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="font-arabic bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              تواصل معنا
              <ArrowLeft className="mr-2 h-5 w-5 rotate-180" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("projects")}
              className="font-arabic border-secondary-foreground/20 hover:text-secondary-foreground hover:bg-secondary-foreground/10 px-8 py-6 text-lg"
            >
              مشاريعنا
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-2 bg-secondary-foreground/30 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  )
}
