const services = [
  {
    image: "/services/development.jpg",
    title: "التطوير والاستثمار العقاري",
    description: "تطوير مشاريع عقارية متكاملة تلبي أعلى معايير الجودة",
  },
  {
    image: "/services/ownership.jpg",
    title: "تملك وبيع وشراء العقارات",
    description: "حلول متكاملة للتملك والاستثمار العقاري الآمن",
  },
  {
    image: "/services/leasing.jpg",
    title: "تأجير وتسويق المكاتب",
    description: "خدمات احترافية لتسويق وتأجير المساحات التجارية",
  },
  {
    image: "/services/management.jpg",
    title: "إدارة وتشغيل الأبراج",
    description: "إدارة شاملة للمجمعات والأبراج التجارية",
  },
  {
    image: "/services/maintenance.jpg",
    title: "إدارة المرافق والصيانة",
    description: "صيانة دورية وإدارة احترافية للمرافق",
  },
  {
    image: "/services/consulting.jpg",
    title: "الاستشارات والتقييم العقاري",
    description: "استشارات متخصصة وتقييم دقيق للأصول العقارية",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-arabic text-sm font-semibold text-primary uppercase tracking-wider">خدماتنا</span>
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">حلول عقارية متكاملة</h2>
          <p className="font-arabic text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            نقدم مجموعة شاملة من الخدمات العقارية المتخصصة لتلبية احتياجات عملائنا
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" /> */}
              </div>
              <div className="p-8">
                <h3 className="font-arabic text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                <p className="font-arabic text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
