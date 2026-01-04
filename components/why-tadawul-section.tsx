import { Award, Target, TrendingUp, Users, Shield, Lightbulb } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "خبرة منذ 2012",
    description: "أكثر من عقد من الخبرة في السوق العقاري السعودي",
  },
  {
    icon: Target,
    title: "موقع استراتيجي في KAFD",
    description: "تواجد قوي في أهم المناطق المالية بالمملكة",
  },
  {
    icon: TrendingUp,
    title: "إدارة احترافية للأصول",
    description: "نموذج إدارة متقدم لتعظيم العوائد",
  },
  {
    icon: Users,
    title: "حلول عقارية مخصصة",
    description: "خدمات مصممة خصيصاً لتلبية احتياجات كل عميل",
  },
  {
    icon: Shield,
    title: "التزام بالحوكمة والجودة",
    description: "معايير عالية من الشفافية والمهنية",
  },
  {
    icon: Lightbulb,
    title: "رؤية مستقبلية",
    description: "استثمار طويل الأمد في التقنيات الحديثة",
  },
]

export function WhyTadawulSection() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-arabic text-sm font-semibold text-primary uppercase tracking-wider">لماذا تداول</span>
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            شريكك الموثوق في الاستثمار العقاري
          </h2>
          <p className="font-arabic text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            نجمع بين الخبرة العميقة والابتكار المستمر لنقدم قيمة استثنائية لعملائنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-5">
                <reason.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-arabic text-xl font-bold text-card-foreground mb-3">{reason.title}</h3>
              <p className="font-arabic text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
