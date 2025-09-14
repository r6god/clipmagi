export default function Showcase() {
  const vids = [
    '/recent/clip1.mp4',
    '/recent/clip2.mp4',
    '/recent/clip3.mp4',
    '/recent/clip4.mp4',
    '/recent/clip5.mp4',
    '/recent/clip6.mp4',
  ]

  return (
    <section id="showcase" className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Recent magic</h2>
      <p className="text-white/70 text-sm mt-1">Real examples — autoplaying, muted, looping.</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {vids.map((src, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden border border-white/10">
            <div className="aspect-[9/16] w-full bg-black/40 relative">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover pointer-events-none select-none"
                onPause={(e) => e.currentTarget.play()}
                onEnded={(e) => e.currentTarget.play()}
                disableRemotePlayback
              />
              <div className="absolute inset-0" aria-hidden="true" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
