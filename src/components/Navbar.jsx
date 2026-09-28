import { profile } from '../data/content.js'

const toggleTheme = () => {
  const r = document.documentElement
  const dark = r.dataset.theme ? r.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme:dark)').matches
  r.dataset.theme = dark ? 'light' : 'dark'
}

export default function Navbar() {
  return (
    <nav>
      <div className="wrap">
        <b>{profile.name}</b>
        <ul>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a className="hire" href="#contact">Hire me</a></li>
        </ul>
        <button id="theme" onClick={toggleTheme} aria-label="Toggle light and dark theme">Theme</button>
      </div>
    </nav>
  )
}
