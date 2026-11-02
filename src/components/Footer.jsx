import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-page flex flex-wrap items-center justify-between gap-4 text-sm text-slate-500">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a href="#home" className="hover:text-white">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
