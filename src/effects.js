// Scroll progress, typing text, reveal, cursor glow, photo tilt, particles, counters
export default function initEffects() {
if (window.__fx) return
window.__fx = true;
(()=>{
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches,fine=matchMedia("(pointer:fine)").matches;
const $=s=>document.querySelector(s),root=document.documentElement;
// scroll progress
const bar=$("#bar");
function prog(){const m=root.scrollHeight-innerHeight;bar.style.transform="scaleX("+(m>0?scrollY/m:0)+")"}
addEventListener("scroll",prog,{passive:true});prog();
// role typewriter
const tw=$("#tw"),W=["secure login systems","REST APIs","React interfaces","full-stack MERN apps"];
if(!RM){let w=0,c=W[0].length,del=true;const tick=()=>{const s=W[w];
 if(del){c--;if(c<=0){del=false;w=(w+1)%W.length}}else{c++;if(c>=W[w].length){del=true;tw.textContent=W[w];return setTimeout(tick,1700)}}
 tw.textContent=W[w].slice(0,c);setTimeout(tick,del?35:70)};setTimeout(tick,2200)}
// scroll reveal
if(!RM&&"IntersectionObserver" in window){
 const els=document.querySelectorAll("section h2,.proj,.role,.skills>div,.edu,.contact p,.contact .mail,.links");
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.12});
 els.forEach((el,i)=>{el.classList.add("rv");el.style.transitionDelay=(i%3)*90+"ms";io.observe(el)})}
// cursor glow + photo tilt
if(fine&&!RM){
 const g=$("#glow"),img=$(".photo");
 addEventListener("mousemove",e=>{g.style.opacity=1;g.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)";
  const r=img.getBoundingClientRect(),dx=(e.clientX-(r.left+r.width/2))/innerWidth,dy=(e.clientY-(r.top+r.height/2))/innerHeight;
  img.style.transform="rotateY("+dx*28+"deg) rotateX("+(-dy*28)+"deg)"},{passive:true});
 document.addEventListener("mouseleave",()=>{g.style.opacity=0;img.style.transform=""})}
// particle network
if(!RM){
 const cv=$("#fx"),x=cv.getContext("2d");let W_,H_,P=[],col="47,75,255",f=0;
 const setCol=()=>{const a=getComputedStyle(root).getPropertyValue("--accent").trim();if(a[0]=="#"&&a.length==7)col=[1,3,5].map(i=>parseInt(a.substr(i,2),16)).join(",")};
 function size(){const d=devicePixelRatio||1;W_=innerWidth;H_=innerHeight;cv.width=W_*d;cv.height=H_*d;x.setTransform(d,0,0,d,0,0);
  const n=Math.min(70,Math.round(W_*H_/24000));P=Array.from({length:n},()=>({x:Math.random()*W_,y:Math.random()*H_,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35}))}
 function draw(){if(document.hidden)return requestAnimationFrame(draw);if(f++%40==0)setCol();x.clearRect(0,0,W_,H_);
  for(const p of P){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>W_)p.vx*=-1;if(p.y<0||p.y>H_)p.vy*=-1;
   x.fillStyle="rgba("+col+",.55)";x.beginPath();x.arc(p.x,p.y,1.8,0,6.283);x.fill()}
  for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){const dx=P[i].x-P[j].x,dy=P[i].y-P[j].y,d=dx*dx+dy*dy;
   if(d<16900){x.strokeStyle="rgba("+col+","+(.22*(1-d/16900))+")";x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}
  requestAnimationFrame(draw)}
 size();addEventListener("resize",size);draw()}
})();

// stat counters
(()=>{const RM=matchMedia("(prefers-reduced-motion:reduce)").matches,nums=document.querySelectorAll("[data-n]");
const fmt=(el,v)=>{el.textContent=v.toFixed(+el.dataset.d||0)};
if(RM||!("IntersectionObserver" in window))return;
nums.forEach(el=>fmt(el,0));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);
 const el=e.target,t=+el.dataset.n,t0=performance.now();
 (function s(n){const k=Math.min((n-t0)/1200,1);fmt(el,t*(1-Math.pow(1-k,3)));if(k<1)requestAnimationFrame(s)})(t0)}),{threshold:.6});
nums.forEach(n=>io.observe(n))})();

}
