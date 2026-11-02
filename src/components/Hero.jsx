import { profile, links } from '../data/profile.js'
import AnomalyChart from './AnomalyChart.jsx'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon } from './Icons.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 sm:pt-40">
      {/* background: grid + soft glows */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-band/20 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-signal/10 blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-300">
            <span className="h-2 w-2 rounded-full bg-band" />
            Open to Data &amp; Product roles
          </p>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-white sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 bg-gradient-to-r from-band to-signal bg-clip-text font-display text-2xl font-medium text-transparent sm:text-3xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-lg text-slate-400">{profile.intro}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              See my work <ArrowIcon className="h-4 w-4" />
            </a>
            <a href={profile.cv} download className="btn-ghost">
              <DownloadIcon className="h-4 w-4" /> Résumé
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener" className="btn-ghost !px-3" aria-label="LinkedIn">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href={links.github} target="_blank" rel="noopener" className="btn-ghost !px-3" aria-label="GitHub">
              <GitHubIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="animate-rise [animation-delay:150ms]">
          <AnomalyChart />
        </div>
      </div>
    </section>
  )
}
