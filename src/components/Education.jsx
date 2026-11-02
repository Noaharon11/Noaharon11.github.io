import { education } from '../data/experience.js'
import SectionHeading from './SectionHeading.jsx'
import Timeline from './Timeline.jsx'

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container-page">
        <SectionHeading index={4} title="Education" />
        <Timeline items={education} />
      </div>
    </section>
  )
}
