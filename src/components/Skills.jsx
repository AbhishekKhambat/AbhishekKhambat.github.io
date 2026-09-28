import { skills } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((g) => (
          <div key={g.label}>
            <h3>{g.label}</h3>
            <ul className="chips">{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
