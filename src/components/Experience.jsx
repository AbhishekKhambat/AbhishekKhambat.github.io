import { experience as e } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="role job">
        <h3>{e.role}</h3>
        <p className="meta">{e.meta}</p>
        <ul>{e.points.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </section>
  )
}
