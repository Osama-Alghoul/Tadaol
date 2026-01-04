import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="تداول العقارية" width={40} height={40} className="object-contain" />
                <div className="font-arabic">
                  <div className="text-lg font-bold">تداول العقارية</div>
                  <div className="text-xs opacity-70">Tadawul Real Estate</div>
                </div>
              </div>
              <p className="font-arabic text-sm opacity-80 leading-relaxed">
                شركة ذات مسؤولية محدودة تأسست عام 2012، متخصصة في الاستثمار والتطوير العقاري
              </p>
            </div>

            <div>
              <h3 className="font-arabic text-lg font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="font-arabic text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    من نحن
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="font-arabic text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    خدماتنا
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="font-arabic text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    مشاريعنا
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="font-arabic text-sm opacity-80 hover:opacity-100 hover:text-primary transition-colors"
                  >
                    تواصل معنا
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-arabic text-lg font-bold mb-4">معلومات الشركة</h3>
              <ul className="space-y-2 font-arabic text-sm opacity-80">
                <li>شركة ذات مسؤولية محدودة</li>
                <li>تأسست عام 2012</li>
                <li>منطقة الملك عبدالله المالية</li>
                <li>الرياض، المملكة العربية السعودية</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8">
            <p className="font-arabic text-sm text-center opacity-70">
              © 2025 شركة تداول العقارية. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
