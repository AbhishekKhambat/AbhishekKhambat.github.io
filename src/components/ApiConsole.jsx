import { useEffect, useState } from 'react'
import { api } from '../data/content.js'

const esc=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;");
function hl(o){return esc(JSON.stringify(o,null,2)).replace(/(&quot;|")([^"]+?)(&quot;|")(:)?|\b(true|false|null|\d+(?:\.\d+)?)\b/g,(m,a,b,c,colon,num)=>num?`<span class="n">${num}</span>`:colon?`<span class="k">"${b}"</span>:`:`<span class="s">"${b}"</span>`)}
const CARET = '<span class="caret"></span>'
const paths = Object.keys(api)

export default function ApiConsole() {
  const [path, setPath] = useState(paths[0])
  const [html, setHtml] = useState('')

  // types the JSON out line by line whenever a tab is clicked
  useEffect(() => {
    const full = hl(api[path])
    if (matchMedia('(prefers-reduced-motion:reduce)').matches) { setHtml(full); return }
    const lines = full.split('\n')
    let i = 0
    setHtml('')
    const t = setInterval(() => {
      i++
      setHtml(lines.slice(0, i).join('\n') + CARET)
      if (i >= lines.length) { clearInterval(t); setHtml(full + CARET) }
    }, 45)
    return () => clearInterval(t)
  }, [path])

  return (
    <div className="console in" style={{ '--i': 3 }} role="region" aria-label="Interactive API console about Abhishek">
      <div className="tabs" role="tablist">
        {paths.map((p) => (
          <button key={p} role="tab" aria-selected={p === path} onClick={() => setPath(p)}>GET {p}</button>
        ))}
      </div>
      <div className="req">GET <em>{path}</em>  &rarr; 200 OK</div>
      <pre aria-live="polite" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
