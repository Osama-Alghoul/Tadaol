import { MapPin, Square, Sparkles } from "lucide-react"

export function FeaturedProjectSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-arabic text-sm font-semibold text-primary uppercase tracking-wider">مشاريعنا</span>
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            البرج المكتبي في KAFD
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-muted">
              <img src="/modern-office-tower-building-in-financial-district.jpg" alt="البرج المكتبي" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 to-transparent" />
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-arabic text-3xl font-bold text-foreground mb-4">برج تداول المكتبي</h3>
                <p className="font-arabic text-lg text-muted-foreground leading-relaxed">
                  مشروع رائد في قلب منطقة الملك عبدالله المالية، يوفر بيئة عمل عصرية ومتطورة تلبي احتياجات الشركات
                  الرائدة في القطاع المالي والتجاري
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <MapPin className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-arabic font-bold text-card-foreground mb-1">موقع استراتيجي</h4>
                  <p className="font-arabic text-sm text-muted-foreground">في قلب KAFD</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <Square className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-arabic font-bold text-card-foreground mb-1">مساحات حديثة</h4>
                  <p className="font-arabic text-sm text-muted-foreground">مكاتب مرنة ومتنوعة</p>
                </div>

                <div className="bg-card border border-border rounded-lg p-6">
                  <Sparkles className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-arabic font-bold text-card-foreground mb-1">بيئة احترافية</h4>
                  <p className="font-arabic text-sm text-muted-foreground">أعلى معايير الجودة</p>
                </div>
              </div>

              <div className="bg-muted rounded-lg p-6">
                <h4 className="font-arabic text-xl font-bold text-foreground mb-4">مميزات المشروع</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="font-arabic text-foreground">أنظمة إدارة مباني ذكية (BMS)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="font-arabic text-foreground">كفاءة عالية في استهلاك الطاقة</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="font-arabic text-foreground">مواقف سيارات متعددة الطوابق</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                    <span className="font-arabic text-foreground">أنظمة أمان متطورة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
