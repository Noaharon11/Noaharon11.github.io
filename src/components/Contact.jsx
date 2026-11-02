import { links } from '../data/profile.js'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container-page">
        <div className="card relative overflow-hidden px-6 py-16 text-center sm:px-12">
          <div
            className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-band/20 blur-[100px]"
            aria-hidden="true"
          />
          <p className="relative font-mono text-sm text-band">06 / Contact</p>
          <h2 className="relative mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Looking for someone who finds the pattern first? Let’s talk.
          </h2>
          <div className="relative mt-10 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${links.email}`} className="btn-primary">
              <MailIcon className="h-4 w-4" /> {links.email}
            </a>
            <a href={links.phone.href} className="btn-ghost">
              <PhoneIcon className="h-4 w-4" /> {links.phone.label}
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener" className="btn-ghost">
              <LinkedInIcon className="h-4 w-4" /> LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noopener" className="btn-ghost">
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
