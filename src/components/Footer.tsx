import { Link } from 'react-router-dom'

const FOOTER_LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/contacts', label: 'Контакты' },
]

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="font-semibold text-lg">ТОО «ЖАНА ТАЛАП БРОКЕР»</h3>
            <p className="text-white/80 text-sm mt-1">
              Таможенно-брокерское сопровождение ВЭД
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} ТОО «ЖАНА ТАЛАП БРОКЕР». Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
