import { profile } from '../data/content.js'

export default function Footer() {
  return <footer><div className="wrap">{profile.fullName} &middot; English, Hindi, Marathi</div></footer>
}
