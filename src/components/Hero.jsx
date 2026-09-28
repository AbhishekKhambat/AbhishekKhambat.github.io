import { profile, roles } from '../data/content.js'
import ApiConsole from './ApiConsole.jsx'

export default function Hero() {
  return (
    <header className="hero">
      <div>
        <div className="ph in" style={{ '--i': 0 }}>
          <img className="photo" src={import.meta.env.BASE_URL + 'photo.jpg'} alt={'Portrait of ' + profile.name} width="168" height="168" />
        </div>
        <p className="badge in" style={{ '--i': 0 }}><span className="dot" />Open to work</p>
        <h1 className="in" style={{ '--i': 1 }}>{profile.name}</h1>
        <p className="typed in" style={{ '--i': 2 }} aria-live="off">I build <span id="tw">{roles[0]}</span><i className="caret" /></p>
        <p className="lead in" style={{ '--i': 3 }}>{profile.tagline}</p>
        <div className="btns in" style={{ '--i': 4 }}>
          <a className="btn p" href="#projects">See my projects</a>
          <a className="btn" href={'mailto:' + profile.email}>Email me</a>
          <a className="btn" href={profile.github} rel="noopener">GitHub</a>
        </div>
      </div>
      <ApiConsole />
    </header>
  )
}
