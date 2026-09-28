import { education as e } from '../data/content.js'

export default function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="edu">
        <div><b>{e.degree}</b><p>{e.school}</p></div>
        <p>{e.when}</p>
      </div>
    </section>
  )
}
