import { experience } from '../data/experience.js'
import SectionHeading from './SectionHeading.jsx'
import Timeline from './Timeline.jsx'

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container-page">
        <SectionHeading index={3} title="Experience" />
        <Timeline items={experience} />
      </div>
    </section>
  )
}
