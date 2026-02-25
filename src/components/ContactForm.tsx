import { useState } from 'react'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (submitted) {
    return (
      <div className="p-8 bg-white rounded-xl border border-gray-200 text-center">
        <p className="text-[#1e3a5f] font-medium">
          Заявка отправлена. Мы свяжемся с вами в ближайшее время.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Имя *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none"
            placeholder="Ваше имя"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Телефон *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none"
            placeholder="+7 7XX XXX XX XX"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none"
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Сообщение
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:border-[#1e3a5f] focus:ring-1 focus:ring-[#1e3a5f] outline-none resize-none"
            placeholder="Опишите ваш запрос"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-[#1e3a5f] text-white font-medium hover:bg-[#2d5a8a] transition-colors"
        >
          Отправить заявку
        </button>
      </div>
    </form>
  )
}
