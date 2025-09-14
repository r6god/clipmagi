export default function Tokenomics(){
  const items=[
    {name:'Fair Launch / LP',value:60,color:'#00E5FF'},
    {name:'Rewards',value:20,color:'#7AD9FF'},
    {name:'Treasury',value:10,color:'#A9F7FF'},
    {name:'Contributors',value:7,color:'#E6FDFF'},
    {name:'MM',value:3,color:'#C4FBFF'},
  ];

  const size = 220;
  const stroke = 26;
  const margin = 6;
  const r = size/2 - margin - stroke/2;
  const C = 2*Math.PI*r;
  const cx = size/2, cy = size/2;
  const total = items.reduce((a,b)=>a+b.value,0);

  let offset = 0;

  return (
    <section id="tokenomics" className="container pb-16">
      <div className="card p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold">$MAGI — utility in motion</h2>
        <div className="grid md:grid-cols-2 gap-8 mt-6 items-center">
          <svg viewBox={'0 0 ' + size + ' ' + size} className="w-60 h-60 mx-auto overflow-visible">
            <circle cx={cx} cy={cy} r={r} stroke="#0E141A" strokeWidth={stroke} fill="none"/>
            <g transform={`rotate(-90 ${cx} ${cy})`}>
              {items.map((seg,i)=>{
                const len = C * (seg.value/total);
                const el = (
                  <circle
                    key={i}
                    cx={cx} cy={cy} r={r}
                    stroke={seg.color}
                    strokeWidth={stroke}
                    strokeDasharray={`${len} ${C-len}`}
                    strokeDashoffset={-offset}
                    fill="none"
                    strokeLinecap="round"
                  />
                );
                offset += len;
                return el;
              })}
            </g>
          </svg>

          <ul className="space-y-2 text-sm text-white/80">
            <li><span className="font-semibold">Spend:</span> generation, submits, boosts & tips (tiny burn).</li>
            <li><span className="font-semibold">Stake:</span> monthly AI credits, vote weight, fee rebates, cosmetics.</li>
            <li><span className="font-semibold">Earn:</span> performance rewards, royalties, partner bounties.</li>
            <li>30% weekly buy & burn from protocol revenue.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
