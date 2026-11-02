import { about } from '../data/profile.js'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-page">
        <SectionHeading index={1} title="About" />
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-5 text-lg">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <dl className="grid gap-4 self-start">
            {about.facts.map(({ label, value }) => (
              <div key={label} className="card p-5 hover:border-band/30">
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">{label}</dt>
                <dd className="mt-1 font-semibold text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
