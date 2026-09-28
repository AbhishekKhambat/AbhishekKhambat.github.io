import { stats } from '../data/content.js'

export default function Stats() {
  return (
    <div className="stats">
      {stats.map((s) => (
        <div key={s.label}>
          {s.text ? <b>{s.text}</b> : <b data-n={s.n} data-d={s.d}>{s.n}</b>}
          <span>{s.label}</span>
        </div>
      ))}
    </div>
  )
}
