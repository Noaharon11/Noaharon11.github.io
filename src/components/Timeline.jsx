export default function Timeline({ items }) {
  return (
    <ol className="relative space-y-6 border-l border-white/10 pl-8">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span
            className="absolute -left-[39px] top-7 h-3.5 w-3.5 rounded-full border-[3px] border-band bg-ink-950 shadow-[0_0_12px] shadow-band/60"
            aria-hidden="true"
          />
          <div className="card p-6 hover:border-band/30">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500">{item.when}</p>
            <h3 className="mt-2 font-display text-xl font-bold text-white">
              {item.title} <span className="font-medium text-slate-400">· {item.org}</span>
            </h3>
            <p className="mt-2 max-w-3xl text-slate-400">{item.description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
