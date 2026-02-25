import { Link } from 'react-router-dom'
import { FileCheck, Shield, MapPin, CheckCircle2, MessageCircle } from 'lucide-react'
import { CtaButton } from '../components/CtaButton'
import { ContactForm } from '../components/ContactForm'

const ADVANTAGES = [
  'Таможенное оформление товаров',
  'Минимизация таможенных рисков',
  'Полное сопровождение ВЭД',
  'Соблюдение требований законодательства',
]

const SERVICES = [
  'Подготовка и подача таможенных деклараций',
  'Классификация товаров по ТН ВЭД',
  'Расчёт таможенных платежей и НДС',
  'Определение таможенной стоимости',
  'Получение разрешительной документации',
  'Сопровождение импортных, экспортных и транзитных операций',
]

const TRUST_REASONS = [
  'Контроль корректности подготовки деклараций',
  'Ответственность за допущенные ошибки',
  'Сопровождение при таможенных проверках',
  'Устранение замечаний без дополнительных затрат',
  'Возможность страхования профессиональной ответственности',
]

const GEOGRAPHY_POINTS = [
  { name: 'Хоргос', coords: [44.23, 80.42] },
  { name: 'Достык', coords: [45.25, 82.48] },
  { name: 'Калжат', coords: [45.0, 79.0] },
  { name: 'Бахты', coords: [44.8, 78.5] },
]

const WHATSAPP_NUMBER = '77011116120'
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl">
            Таможенно-брокерское сопровождение ВЭД под ключ
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl">
            Импорт • Экспорт • Транзит
          </p>
          <p className="mt-2 text-white/80">
            Работаем на ключевых пунктах пропуска Казахстана
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href="/contacts" variant="primary">
              Получить консультацию
            </CtaButton>
            <CtaButton href="/#form" variant="secondary">
              Оставить заявку
            </CtaButton>
          </div>
        </div>
      </section>

      {/* О компании */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            О компании
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
            Компания оказывает услуги по таможенному оформлению и комплексному
            сопровождению внешнеэкономической деятельности. Мы обеспечиваем
            полный цикл таможенных операций с соблюдением законодательства РК.
          </p>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12">
            Преимущества
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#1e3a5f]/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#1e3a5f]" />
                </div>
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaButton href="/services" variant="primary">
              Подробнее об услугах
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12">
            Услуги
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((item) => (
              <div
                key={item}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-[#1e3a5f]/30 hover:shadow-md transition-all"
              >
                <FileCheck className="w-8 h-8 text-[#1e3a5f] mb-4" />
                <p className="text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CtaButton href="/services" variant="primary">
              Все услуги
            </CtaButton>
          </div>
        </div>
      </section>

      {/* География */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12">
            География работы
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {GEOGRAPHY_POINTS.map((point) => (
              <div
                key={point.name}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <MapPin className="w-5 h-5 text-[#1e3a5f] flex-shrink-0" />
                <span className="font-medium text-gray-800">{point.name}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white h-80">
            <iframe
              title="Карта пунктов пропуска Казахстана"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76%2C42%2C88%2C48&layer=mapnik"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Почему нам доверяют */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12">
            Почему нам доверяют
          </h2>
          <ul className="space-y-4 max-w-2xl">
            {TRUST_REASONS.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#1e3a5f] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <CtaButton href="/contacts" variant="primary">
              Связаться с нами
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Контакты + форма */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-12">
            Контакты
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="font-semibold text-lg text-gray-900">
                ТОО «ЖАНА ТАЛАП БРОКЕР»
              </p>
              <p className="mt-2 text-gray-600">
                Контактное лицо: Жумашев Кайрат
              </p>
              <a
                href="tel:+77011116120"
                className="mt-2 block text-[#1e3a5f] font-medium hover:text-[#2d5a8a]"
              >
                +7 701 111 61 20
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] text-white font-medium hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
            <div id="form">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
