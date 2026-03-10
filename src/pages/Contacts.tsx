import { MessageCircle } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import {
  COMPANY_EMAIL,
  COMPANY_PHONE_DISPLAY,
  COMPANY_PHONE_TEL,
} from '../config/contacts'

const WHATSAPP_NUMBER = '77011116120'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

export function Contacts() {
  return (
    <>
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">
            Контакты
          </h1>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                ТОО «ЖАНА ТАЛАП БРОКЕР»
              </h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-500">Контактное лицо</dt>
                  <dd className="font-medium text-gray-900">Жумашев Кайрат</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Телефон</dt>
                  <dd>
                    <a
                      href={`tel:${COMPANY_PHONE_TEL}`}
                      className="text-[#1e3a5f] font-medium hover:text-[#2d5a8a]"
                    >
                      {COMPANY_PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Почта</dt>
                  <dd>
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-[#1e3a5f] font-medium hover:text-[#2d5a8a]"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={20} />
                Написать в WhatsApp
              </a>
            </div>

            <div id="form">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Оставить заявку
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Карта */}
          <div className="mt-16">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Расположение
            </h2>
            <div className="rounded-xl overflow-hidden border border-gray-200 h-80 bg-gray-100">
              <iframe
                title="Карта"
                src="https://www.openstreetmap.org/export/embed.html?bbox=76.8%2C43.2%2C77.0%2C43.3&layer=mapnik"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Казахстан. Точный адрес уточняйте по телефону.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
