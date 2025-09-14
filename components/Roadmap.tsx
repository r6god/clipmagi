export default function Roadmap(){
  const rows=[
    {q:'Q1',items:['MVP autoclips','Creator approvals','Raydium pool + LP lock']},
    {q:'Q2',items:['Blinks vote/tip/mint','Hunter bounties','Leaderboard & rewards']},
    {q:'Q3',items:['Staking credits','Partner themes','Mobile uploader']},
  ]
  return (
    <section id="roadmap" className="container pb-16">
      <h2 className="text-2xl md:text-3xl font-bold">Roadmap</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {rows.map((r,i)=> (
          <div key={i} className="card p-5">
            <h3 className="font-semibold">{r.q}</h3>
            <ul className="mt-2 list-disc list-inside text-white/70 text-sm">
              {r.items.map((it,ii)=><li key={ii}>{it}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
