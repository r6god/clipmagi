'use client'
import { useState } from 'react'
const tabs=[
  {id:'creators',title:'Creators',desc:'Connect channels, approve clips, earn tips & share.'},
  {id:'hunters',title:'Hunters',desc:'Submit timestamps, earn bounties when clips perform.'},
  {id:'viewers',title:'Viewers',desc:'Vote via Blinks, tip creators, mint top clips as cNFTs.'},
  {id:'partners',title:'Partners',desc:'Sponsor theme weeks; holders get fee waivers & boosts.'},
]
export default function ProductTour(){
  const [active,setActive]=useState('creators')
  return (
    <section id="tour" className="container py-16">
      <div className="flex flex-wrap gap-3">
        {tabs.map(t=> <button key={t.id} onClick={()=>setActive(t.id)} className={`px-4 py-2 rounded-2xl border transition ${active===t.id? 'bg-white text-black border-white':'bg-white/5 border-white/10 hover:bg-white/10'}`}>{t.title}</button>)}
      </div>
      <p className="text-white/70 mt-4 max-w-2xl">{tabs.find(t=>t.id===active)?.desc}</p>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {[1,2,3].map(i=> (
          <div key={i} className="card p-5">
            <h3 className="font-semibold">Step {i}</h3>
            <p className="text-white/70 text-sm mt-1">Detailed explanation of step {i} for {tabs.find(t=>t.id===active)?.title} with screenshots/gifs in production.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
