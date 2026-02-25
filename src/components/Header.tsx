import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/contacts', label: 'Контакты' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            to="/"
            className="text-lg font-semibold text-[#1e3a5f] hover:text-[#2d5a8a] transition-colors"
          >
            ТОО «ЖАНА ТАЛАП БРОКЕР»
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-[#1e3a5f]'
                    : 'text-gray-600 hover:text-[#1e3a5f]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contacts"
            className="hidden md:inline-flex items-center px-5 py-2.5 rounded-lg bg-[#1e3a5f] text-white text-sm font-medium hover:bg-[#2d5a8a] transition-colors"
          >
            Получить консультацию
          </Link>

          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-[#1e3a5f]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium ${
                    location.pathname === link.to
                      ? 'text-[#1e3a5f]'
                      : 'text-gray-600'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#1e3a5f] text-white text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Получить консультацию
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
