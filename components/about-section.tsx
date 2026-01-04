import { Building2, Calendar, Shield } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-arabic text-sm font-semibold text-primary uppercase tracking-wider">من نحن</span>
            <h2 className="font-arabic text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              شركة تداول العقارية
            </h2>
            <p className="font-arabic text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              شركة ذات مسؤولية محدودة تأسست عام 2012، متخصصة في الاستثمار والتطوير والتشغيل العقاري. نركز على بناء
              القيمة طويلة الأمد من خلال الإدارة الاحترافية للأصول العقارية
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-arabic text-2xl font-bold text-card-foreground mb-2">2012</h3>
              <p className="font-arabic text-muted-foreground">سنة التأسيس</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-arabic text-lg font-bold text-card-foreground mb-2">شركة ذات مسؤولية محدودة</h3>
              <p className="font-arabic text-muted-foreground">الثقة والاستقرار</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-arabic text-lg font-bold text-card-foreground mb-2">منطقة الملك عبدالله المالية</h3>
              <p className="font-arabic text-muted-foreground">موقع استراتيجي</p>
            </div>
          </div>

          <div className="mt-16 bg-muted rounded-lg p-8 md:p-12">
            <h3 className="font-arabic text-2xl font-bold text-foreground mb-6 text-center">تخصصاتنا</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <p className="font-arabic text-foreground">تملك وبيع وشراء وتأجير العقارات</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <p className="font-arabic text-foreground">إدارة وتشغيل العقارات</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <p className="font-arabic text-foreground">التطوير العقاري التجاري والمالي</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                <p className="font-arabic text-foreground">إدارة العقارات داخل منطقة الملك عبدالله المالية</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
