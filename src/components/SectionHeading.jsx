export default function SectionHeading({ index, title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-band">
        {String(index).padStart(2, '0')} <span className="text-slate-500">/</span>
      </p>
      <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-3 max-w-2xl text-slate-400">{subtitle}</p>}
    </div>
  )
}
