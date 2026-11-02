import { useLayoutEffect, useMemo, useRef, useState } from 'react'

const W = 520
const H = 260
const PAD = { l: 34, r: 12, t: 14, b: 26 }
const N = 48
const MAX = 150
const SPIKE = [38, 41]

const x = (i) => PAD.l + ((W - PAD.l - PAD.r) * i) / (N - 1)
const y = (v) => PAD.t + (H - PAD.t - PAD.b) * (1 - v / MAX)
const line = (vals, fn = (v) => v) =>
  vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(fn(v, i)).toFixed(1)}`).join('')

// Deterministic synthetic data: a daily-ish wave with small noise and a spike near the end
function buildSeries() {
  let seed = 7
  const rnd = () => {
    seed = (seed * 16807) % 2147483647
    return seed / 2147483647
  }
  const base = []
  const actual = []
  for (let i = 0; i < N; i++) {
    const b = 40 + 18 * Math.sin(i / 7.5)
    base.push(b)
    actual.push(i >= SPIKE[0] && i <= SPIKE[1] ? b * [1.9, 3.1, 3.4, 2.2][i - SPIKE[0]] : b + (rnd() - 0.5) * 12)
  }
  return { base, actual }
}

export default function AnomalyChart() {
  const { base, actual } = useMemo(buildSeries, [])
  const pathRef = useRef(null)
  const [len, setLen] = useState(0)

  useLayoutEffect(() => {
    setLen(Math.ceil(pathRef.current.getTotalLength()))
  }, [])

  const upper = line(base, (b) => b * 1.35 + 6)
  const lower = [...base]
    .map((b, i) => [i, Math.max(0, b * 0.65 - 6)])
    .reverse()
    .map(([i, v]) => `L${x(i).toFixed(1)} ${y(v).toFixed(1)}`)
    .join('')
  const flagX = x(40)
  const flagY = y(actual[40])

  return (
    <figure className="card relative p-6 shadow-2xl shadow-black/40" aria-labelledby="chart-title">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id="chart-title" className="font-display text-lg font-bold text-white">
            How my anomaly model sees a client
          </h2>
          <p className="mt-1 text-sm text-slate-400">
            API errors per 10 min vs. the expected range from the same hour over the past 1–3 weeks.
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-signal/10 px-2.5 py-1 text-xs font-semibold text-signal">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal" />
          Live
        </span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="mt-4 block h-auto w-full overflow-visible"
        role="img"
        aria-label="Line chart: error rate stays inside the expected band, then spikes well above it and is flagged."
      >
        {[0, 50, 100, 150].map((v) => (
          <g key={v}>
            <line x1={PAD.l} x2={W - PAD.r} y1={y(v)} y2={y(v)} stroke="rgb(255 255 255 / 0.06)" />
            <text x={PAD.l - 8} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#64748b">
              {v}
            </text>
          </g>
        ))}
        {['-8h', '-6h', '-4h', '-2h', 'now'].map((s, k) => (
          <text
            key={s}
            x={x((k * (N - 1)) / 4)}
            y={H - 6}
            textAnchor={k === 0 ? 'start' : k === 4 ? 'end' : 'middle'}
            fontSize="11"
            fill="#64748b"
          >
            {s}
          </text>
        ))}

        <path d={`${upper}${lower}Z`} fill="rgb(76 194 179 / 0.14)" />
        <path d={line(base)} fill="none" stroke="#4CC2B3" strokeWidth="1.5" strokeDasharray="4 4" />
        <path
          ref={pathRef}
          d={line(actual)}
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
          className={len ? 'animate-draw' : ''}
          style={len ? { strokeDasharray: len, strokeDashoffset: len } : undefined}
        />

        <g className="animate-pop opacity-0">
          <rect
            x={x(SPIKE[0]) - 6}
            y={PAD.t}
            width={x(SPIKE[1]) - x(SPIKE[0]) + 12}
            height={H - PAD.t - PAD.b}
            rx="6"
            fill="rgb(242 102 143 / 0.12)"
          />
          <circle cx={flagX} cy={flagY} r="10" fill="rgb(242 102 143 / 0.25)" />
          <circle cx={flagX} cy={flagY} r="5.5" fill="#F2668F" />
          <text x={flagX - 14} y={flagY + 4} textAnchor="end" fontSize="12" fontWeight="600" fill="#F2668F">
            Alert sent
          </text>
        </g>
      </svg>

      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-slate-400">
        <span className="flex items-center gap-2">
          <i className="h-2.5 w-3.5 rounded-sm border border-band bg-band/20" />
          Expected range
        </span>
        <span className="flex items-center gap-2">
          <i className="h-[3px] w-3.5 rounded bg-slate-200" />
          Actual errors
        </span>
        <span className="flex items-center gap-2">
          <i className="h-2.5 w-3.5 rounded-sm bg-signal" />
          Flagged and alerted
        </span>
      </div>
    </figure>
  )
}
