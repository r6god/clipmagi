export default function SocialProof(){
  return (
    <section className="container py-6">
      <p className="text-white/60 text-sm">Built for creators across platforms</p>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center opacity-80">
        {['YouTube','Twitch','Kick','X Spaces','TikTok','Rumble'].map((n,i)=>(
          <div key={i} className="h-10 relative flex items-center text-white/60 text-xs">
            <div className="w-full h-px bg-white/10"/>
            <span className="absolute left-1/2 -translate-x-1/2 bg-bg px-2">{n}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
