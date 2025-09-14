import Image from 'next/image'

const pics = [
  '/examples/ex1.png',
  '/examples/ex2.png',
  '/gallery_1.png',
  '/gallery_2.png',
  '/gallery_3.png',
  '/gallery_4.png',
]

export default function Showcase() {
  return (
    <section id="showcase" className="container py-16">
      <h2 className="text-2xl md:text-3xl font-bold">Recent magic</h2>
      <p className="text-white/70 text-sm mt-1">A peek at auto-generated shorts (sample images).</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 overflow-x-auto pb-2">
        {pics.map((src, i) => (
          <a key={i} href={src} target="_blank" rel="noreferrer"
             className="block relative rounded-xl overflow-hidden border border-white/10 hover:border-white/20">
            <Image src={src} alt={`clip ${i+1}`} width={270} height={480} className="w-full h-auto" />
          </a>
        ))}
      </div>
    </section>
  )
}
