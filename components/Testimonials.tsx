export default function Testimonials(){
  const items=[
    {n:'Nova',r:'Twitch Partner',q:'ClipMagi trimmed 3 hours into 12 shorts that outperformed my edits.'},
    {n:'Kiko',r:'Crypto Creator',q:'The Blinks voting + cNFTs made my community actually participate.'},
    {n:'Zee', r:'Esports',       q:'Quality captions and timing — zero manual work. I’m hooked.'},
  ]
  return (
    <section className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-bold">What creators say</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {items.map((t,i)=> (
          <div key={i} className="card p-6">
            <div className="w-10 h-10 rounded-full bg-white/10 mb-3" />
            <p className="text-white/80">“{t.q}”</p>
            <div className="mt-3 text-white/60 text-sm">{t.n} — {t.r}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
