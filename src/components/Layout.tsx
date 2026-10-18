import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, Scissors } from 'lucide-react'
import type { Language } from '../content'
import { copy } from '../content'
import { businessConfig } from '../config'
import WhatsAppButton from './WhatsAppButton'

type Props = {
  language: Language
  onToggleLanguage: () => void
}

export default function Layout({ language, onToggleLanguage }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = copy[language]
  const links = [
    { to: '/tailoring', label: t.navTailoring },
    { to: '/stitching-classes', label: t.navClasses },
    { to: '/gallery', label: t.navGallery },
    { to: '/about', label: t.navAbout },
    { to: '/contact', label: t.navContact },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen">
      <div className="border-b border-line bg-white/80">
        <div className="container-shell flex items-center justify-between py-2 text-xs text-muted">
          <span>{t.heroEyebrow}</span>
          <button onClick={onToggleLanguage} className="font-semibold text-ink hover:text-rose-dark" aria-label="Switch website language">
            {t.language}
          </button>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur">
        <div className="container-shell flex h-[76px] items-center justify-between gap-4">
          <Link to="/" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose text-white">
              <Scissors size={21} />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-lg font-semibold leading-tight">{businessConfig.name}</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[.18em] text-muted">Tailoring · Learning</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={({ isActive }) => `text-sm transition hover:text-rose-dark ${isActive ? 'font-semibold text-rose-dark' : 'text-muted'}`}>
                {link.label}
              </NavLink>
            ))}
          </nav>    
          <div className="hidden lg:block">
            <WhatsAppButton language={language} />
          </div>
          <button className="rounded-xl border border-line p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-line bg-paper px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={closeMenu} className={({ isActive }) => `text-sm ${isActive ? 'font-semibold text-rose-dark' : 'text-ink'}`}>
                  {link.label}
                </NavLink>
              ))}
              <WhatsAppButton language={language} />
            </div>
          </nav>
        )}
      </header>
      <main><Outlet /></main>
      <footer className="mt-20 border-t border-line bg-white">
        
        <div className="container-shell grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link to="/" className="font-display text-xl font-semibold">{businessConfig.name}</Link>
            <p className="mt-3 max-w-xs text-sm leading-6 text-muted">{t.footerLine}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">{t.navTailoring}</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-muted">
              <Link to="/tailoring" className="hover:text-rose-dark">{t.services}</Link>
              <Link to="/stitching-classes" className="hover:text-rose-dark">{t.navClasses}</Link>
              <Link to="/gallery" className="hover:text-rose-dark">{t.navGallery}</Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">{t.navContact}</p>
            <WhatsAppButton language={language} className="mt-3" />
          </div>
        </div>
        <div className="border-t border-line">
          <div className="container-shell flex flex-col gap-2 py-4 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} {businessConfig.name}</span>
            <span>Made with care.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}