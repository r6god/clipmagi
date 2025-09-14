export default function FAQ(){
  const qa=[
    {q:'How do clips get chosen?',a:'AI detects highlights; hunters submit timestamps; creators approve what goes live.'},
    {q:'Where do rewards go?',a:'Split on-chain between creator, hunter, stakers, and treasury.'},
    {q:'Do I need $MAGI?',a:'It powers generation, boosts, and staking credits; viewers can still watch free.'},
  ]
  return (
    <section id="faq" className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {qa.map((t,i)=>(
          <div key={i} className="card p-5">
            <h3 className="font-semibold">{t.q}</h3>
            <p className="text-white/70 text-sm mt-1">{t.a}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
