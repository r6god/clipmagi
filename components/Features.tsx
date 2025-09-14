export default function Features(){
  const features=[
    {t:'Creator approvals',d:'You choose which clips go live to protect your brand.'},
    {t:'Hunters & bounties',d:'Community submits timestamps; bounties pay if they perform.'},
    {t:'Fair splits',d:'Creator / hunter / stakers / treasury — automatic & transparent.'},
    {t:'Blinks everywhere',d:'Vote, tip, and mint from a link — mobile-first.'},
    {t:'Cheap mints',d:'Compressed NFTs make collectibles affordable.'},
    {t:'Anti-spam',d:'Cooldowns, stake-weighted votes, and fraud-scored views.'},
  ]
  return (
    <section id="features" className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-bold">Why creators & degens love it</h2>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f,i)=> (
          <div key={i} className="card p-5">
            <h3 className="font-semibold">{f.t}</h3>
            <p className="text-white/70 text-sm mt-1">{f.d}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
