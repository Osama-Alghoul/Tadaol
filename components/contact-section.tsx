import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="font-arabic text-sm font-semibold text-primary uppercase tracking-wider">تواصل معنا</span>
          <h2 className="font-arabic text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">نسعد بالتواصل معكم</h2>
          <p className="font-arabic text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            لأي استفسار أو لمعرفة المزيد عن خدماتنا، يرجى التواصل معنا
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-arabic text-2xl font-bold text-foreground mb-6">معلومات الاتصال</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-arabic font-bold text-foreground mb-1">العنوان</h4>
                    <p className="font-arabic text-muted-foreground leading-relaxed">
                      طريق الملك عبدالله - مقابل مركز شرطة الروضة
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-arabic font-bold text-foreground mb-1">الهاتف</h4>
                    <p className="font-arabic text-muted-foreground" dir="ltr">
                      +966 XX XXX XXXX
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-arabic font-bold text-foreground mb-1">البريد الإلكتروني</h4>
                    <p className="text-muted-foreground" dir="ltr">
                      info@tadawul-re.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1987449899974!2d46.64416337594867!3d24.76338877799892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f035e2cc66917%3A0x9e6c2a7a6c8e6c5e!2sKing%20Abdullah%20Financial%20District!5e0!3m2!1sen!2ssa!4v1704312000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="King Abdullah Financial District Location"
              />
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="font-arabic text-2xl font-bold text-card-foreground mb-6">أرسل رسالة</h3>

            <form className="space-y-6">
              <div>
                <label className="font-arabic block text-sm font-medium text-card-foreground mb-2">الاسم الكامل</label>
                <Input placeholder="أدخل اسمك" className="font-arabic" />
              </div>

              <div>
                <label className="font-arabic block text-sm font-medium text-card-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <Input type="email" placeholder="example@email.com" dir="ltr" />
              </div>

              <div>
                <label className="font-arabic block text-sm font-medium text-card-foreground mb-2">رقم الهاتف</label>
                <Input type="tel" placeholder="+966 XX XXX XXXX" dir="ltr" />
              </div>

              <div>
                <label className="font-arabic block text-sm font-medium text-card-foreground mb-2">الرسالة</label>
                <Textarea placeholder="اكتب رسالتك هنا..." rows={5} className="font-arabic" />
              </div>

              <Button className="font-arabic w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                إرسال الرسالة
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
