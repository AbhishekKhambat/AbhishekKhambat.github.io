import { projects } from '../data/content.js'

const Mock = ({ type }) =>
  type === 'blog' ? (
    <div className="mock b" aria-hidden="true">
      <div className="bar"><i /><i /><i /></div>
      <div className="body"><div className="main"><div className="card" /><div className="card" /><div className="card" /><div className="card" /></div></div>
    </div>
  ) : (
    <div className="mock" aria-hidden="true">
      <div className="bar"><i /><i /><i /></div>
      <div className="body">
        <div className="side" />
        <div className="main">
          <div className="row"><span /><span /><span /></div>
          <div className="line w80" /><div className="line w60" /><div className="line w70" />
        </div>
      </div>
    </div>
  )

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((p) => (
        <article className="proj" key={p.title}>
          <div>
            <Mock type={p.mock} />
            <h3>{p.title}</h3>
            <ul className="chips">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <ul className="pts">{p.points.map((t) => <li key={t}>{t}</li>)}</ul>
        </article>
      ))}
    </section>
  )
}
