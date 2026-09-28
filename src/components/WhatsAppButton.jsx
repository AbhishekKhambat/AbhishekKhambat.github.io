import { profile } from '../data/content.js'
import { WhatsAppIcon } from './Icons.jsx'

export default function WhatsAppButton() {
  return (
    <a className="fab" href={profile.whatsapp} target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      <WhatsAppIcon />
    </a>
  )
}
