import { useEffect, useState } from 'react'
import { navLinks } from '../data/navigation.js'
import { profile } from '../data/profile.js'
import { MenuIcon } from './Icons.jsx'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Highlight the link of the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <a href="#home" className="font-display text-xl font-extrabold tracking-tight text-white">
          {profile.name}
          <span className="text-signal">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                  active === id ? 'bg-white/[0.07] text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <MenuIcon open={open} className="h-6 w-6" />
        </button>
      </nav>

      {open && (
        <ul className="container-page flex flex-col gap-1 pb-4 md:hidden">
          {navLinks.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 font-medium text-slate-300 hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
