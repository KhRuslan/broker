import { Link } from 'react-router-dom'

interface CtaButtonProps {
  href: string
  variant: 'primary' | 'secondary'
  children: React.ReactNode
}

export function CtaButton({ href, variant, children }: CtaButtonProps) {
  const base =
    'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors'
  const styles =
    variant === 'primary'
      ? 'bg-[#1e3a5f] text-white hover:bg-[#2d5a8a]'
      : 'bg-white text-[#1e3a5f] border-2 border-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white'

  const isExternal = href.startsWith('http')

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${styles}`}
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      to={href}
      className={`${base} ${styles}`}
    >
      {children}
    </Link>
  )
}
