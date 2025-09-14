'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero(){
  return (
    <section className="relative hero-gradient overflow-hidden">
      {/* decorative blobs if your project has them; harmless if not */}
      <img src="/blob1.png" alt="" className="pointer-events-none absolute -top-40 -left-20 w-[520px] opacity-40 blur-2xl" />
      <img src="/blob2.png" alt="" className="pointer-events-none absolute -bottom-40 -right-20 w-[620px] opacity-30 blur-2xl" />

      <div className="container pt-16 pb-20 grid lg:grid-cols-2 items-center gap-10">
        <div>
          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            AI Autoclips. <span className="gradient-text">On-chain</span> Rewards.
          </motion.h1>
          <p className="mt-4 text-white/80 max-w-xl">ClipMagi finds the best moments in streams and long videos, turns them into viral shorts, and routes tips & rewards to creators, hunters, and $MAGI stakers.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#cta" className="btn btn-primary"><Play className="w-4 h-4"/> Try the Demo <ArrowRight className="w-4 h-4"/></a>
            <a href="#tour" className="btn btn-ghost">Explore product</a>
          </div>
        </div>

        {/* RIGHT: your video inside the device frame */}
        <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} transition={{duration:0.6,delay:0.1}} className="relative card p-4 backdrop-blur-xl border-white/20">
          <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden bg-black/40">
            <video src="/demo.mp4" controls playsInline muted loop preload="metadata"
                   className="w-full h-full object-cover" poster="/clipmagi_icon.png" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white text-black px-4 py-2 rounded-xl text-sm font-semibold shadow-xl">30–45s Short • 1080×1920</div>
        </motion.div>
      </div>
    </section>
  )
}
