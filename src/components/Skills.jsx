import { skills } from '../data/skills.js'
import SectionHeading from './SectionHeading.jsx'

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container-page">
        <SectionHeading index={5} title="Skills" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map(({ group, items }) => (
            <div key={group} className="card p-6 hover:border-band/30">
              <h3 className="font-display text-lg font-bold text-white">{group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
