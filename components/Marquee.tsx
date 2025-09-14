'use client'
import { useEffect, useRef } from 'react'
export default function Marquee(){
  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=>{
    const el = ref.current; if(!el) return
    let x = 0, id:number
    const step = ()=>{ x = (x - 0.5) % el.scrollWidth; el.style.transform = `translateX(${x}px)`; id = requestAnimationFrame(step) }
    id = requestAnimationFrame(step); return ()=> cancelAnimationFrame(id)
  },[])
  const items = ['Auto-captions','Meme overlays','cNFT mints','Blinks voting','Tips & boosts','Rewards to $MAGI stakers']
  return (
    <div className="overflow-hidden border-y border-white/10 py-3 mt-4">
      <div className="whitespace-nowrap will-change-transform" ref={ref}>
        {Array.from({length:3}).map((_,k)=> (
          <span key={k} className="text-white/70 text-sm pr-10">
            {items.join('  •  ')}  •
          </span>
        ))}
      </div>
    </div>
  )
}
