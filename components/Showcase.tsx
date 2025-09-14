import Image from 'next/image'

const pics = ['/gallery_1.png', '/gallery_2.png', '/gallery_3.png', '/gallery_4.png', '/gallery_5.png', '/gallery_6.png']

export default function Showcase() {
  return (
    <section id="showcase" className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Recent magic</h2>
      <p className="text-white/70 text-sm mt-1">A peek at auto-generated shorts (placeholders).</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {pics.map((src, i) => (
          <div key={i} className="relative rounded-xl overflow-hidden border border-white/10">
            <Image src={src} alt={`clip ${i}`} width={270} height={480} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </section>
  )
}
