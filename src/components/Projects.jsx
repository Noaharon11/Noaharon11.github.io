import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'

const STEPS = [
  ['problem', 'Problem'],
  ['approach', 'Approach'],
  ['result', 'Result'],
]

function ProjectCard({ project }) {
  return (
    <article
      className={`card group relative flex flex-col overflow-hidden p-7 hover:border-band/40 ${
        project.featured ? 'md:col-span-2' : ''
      }`}
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-band/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <div className="flex flex-wrap items-center gap-3">
        <p className="font-mono text-xs uppercase tracking-wider text-slate-500">{project.where}</p>
        {project.tag && (
          <span className="rounded-full bg-signal/10 px-2.5 py-0.5 text-xs font-semibold text-signal">{project.tag}</span>
        )}
      </div>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-white">{project.title}</h3>

      <dl className={`mt-5 grid gap-4 ${project.featured ? 'md:grid-cols-3' : ''}`}>
        {STEPS.filter(([key]) => project[key]).map(([key, label]) => (
          <div key={key}>
            <dt className="text-sm font-semibold text-band">{label}</dt>
            <dd className="mt-1 text-[15px] text-slate-400">{project[key]}</dd>
          </div>
        ))}
      </dl>

      <ul className="mt-auto flex flex-wrap gap-2 pt-6">
        {project.stack.map((s) => (
          <li key={s} className="chip">
            {s}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container-page">
        <SectionHeading index={2} title="Selected work" subtitle="Models and products I built, framed as the problem, what I did, and what changed." />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
