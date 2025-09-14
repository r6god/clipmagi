export default function Tokenomics(){
  const items=[
    {name:'Fair Launch / LP',value:60,color:'#00E5FF'},
    {name:'Rewards',value:20,color:'#7AD9FF'},
    {name:'Treasury',value:10,color:'#A9F7FF'},
    {name:'Contributors',value:7,color:'#E6FDFF'},
    {name:'MM',value:3,color:'#C4FBFF'},
  ]
  const total = items.reduce((a,b)=>a+b.value,0)
  let offset = 0
  const radius = 50, stroke = 24, C = 2*Math.PI*radius
  return (
    <section id="tokenomics" className="container pb-16">
      <div className="card p-6">
        <h2 className="text-2xl md:text-3xl font-bold">$MAGI — utility in motion</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-4 items-center">
          <svg viewBox="0 0 120 120" className="w-64 h-64 mx-auto">
            <circle cx="60" cy="60" r={radius} stroke="#0E141A" strokeWidth={stroke} fill="none"/>
            {items.map((seg,i)=>{
              const len = C * (seg.value/total)
              const circle = <circle key={i} cx="60" cy="60" r={radius} stroke={seg.color} strokeWidth={stroke} strokeDasharray={`${len} ${C-len}`} strokeDashoffset={-offset} fill="none" strokeLinecap="butt"/>
              offset += len
              return circle
            })}
          </svg>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Spend: generation, submits, boosts & tips (tiny burn).</li>
            <li>Stake: monthly AI credits, vote weight, fee rebates, cosmetics.</li>
            <li>Earn: performance rewards, royalties, partner bounties.</li>
            <li>30% weekly buy & burn from protocol revenue.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
