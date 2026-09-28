import { profile } from '../data/content.js'
import { PhoneIcon, WhatsAppIcon } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="cta">
        <h2>Let's build something together</h2>
        <p>I'm looking for an entry-level Software Engineer or Full Stack Developer role. Call me or message me on WhatsApp and I'll reply as soon as I can.</p>
        <div className="cta-btns">
          <a className="cbtn call" href={profile.phoneLink}><PhoneIcon />Call {profile.phone}</a>
          <a className="cbtn wa" href={profile.whatsapp} target="_blank" rel="noopener"><WhatsAppIcon />Chat on WhatsApp</a>
        </div>
        <a className="mail" href={'mailto:' + profile.email}>{profile.email}</a>
        <div className="links">
          <a className="btn" href={profile.linkedin} rel="noopener">LinkedIn</a>
          <a className="btn" href={profile.github} rel="noopener">GitHub</a>
          <a className="btn" href={profile.leetcode} rel="noopener">LeetCode</a>
        </div>
      </div>
    </section>
  )
}
