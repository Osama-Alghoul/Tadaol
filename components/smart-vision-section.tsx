import { Cpu, Zap, Leaf, Eye } from "lucide-react"

export function SmartVisionSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <span className="font-arabic text-sm font-semibold text-primary uppercase tracking-wider">
                  رؤية مستقبلية
                </span>
                <h2 className="font-arabic text-4xl md:text-5xl font-bold mt-4 mb-6">المباني الذكية والمستدامة</h2>
                <p className="font-arabic text-lg leading-relaxed opacity-90">
                  نستثمر في التقنيات الحديثة لتوفير بيئات عمل ذكية ومستدامة تواكب رؤية المملكة 2030
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-arabic text-xl font-bold mb-2">مكاتب ذكية</h3>
                    <p className="font-arabic opacity-80 leading-relaxed">
                      تقنيات متقدمة للتحكم في الإضاءة، التكييف، والأمن
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-arabic text-xl font-bold mb-2">أنظمة إدارة المباني (BMS)</h3>
                    <p className="font-arabic opacity-80 leading-relaxed">مراقبة وتحكم مركزي لجميع أنظمة المبنى</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-arabic text-xl font-bold mb-2">الاستدامة والكفاءة</h3>
                    <p className="font-arabic opacity-80 leading-relaxed">تقليل استهلاك الطاقة والحفاظ على البيئة</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-arabic text-xl font-bold mb-2">رؤية طويلة الأمد</h3>
                    <p className="font-arabic opacity-80 leading-relaxed">
                      استثمار مستدام يحقق قيمة متنامية عبر السنوات
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src="/smart-building-technology-futuristic-office.jpg"
                alt="المباني الذكية"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
              <div className="absolute bottom-8 right-8 left-8">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 border border-border">
                  <p className="font-arabic text-lg font-bold text-card-foreground">"نبني المستقبل اليوم"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
