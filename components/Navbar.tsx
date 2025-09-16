'use client'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '../lib/utils'
import { Twitter, Send } from 'lucide-react'

export default function Navbar(){
  return (
    <header className="container py-5 flex items-center justify-between sticky top-0 z-50 backdrop-blur bg-bg/80 border-b border-white/10">
      <Link href="#" className="flex items-center gap-3">
        <Image src="/clipmagi_icon.png" alt="ClipMagi" width={36} height={36} className="rounded-lg"/>
        <span className="font-bold tracking-tight">ClipMagi</span>
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
        <a href="#how" className="hover:text-white">How it works</a>
        <a href="#tour" className="hover:text-white">Product</a>
        <a href="#tokenomics" className="hover:text-white">$MAGI</a>
        <a href="#faq" className="hover:text-white">FAQ</a>
        <a href="#cta" className={cn('btn btn-ghost')}>Launch App</a>
      </nav>

      <div className="flex items-center gap-3 ml-4">
        <a href="https://x.com/ClipMagi" target="_blank" rel="noreferrer" aria-label="ClipMagi on X/Twitter"
           className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10">
          <Twitter className="w-4 h-4" />
        </a>
        <a href="https://t.me/clipmagi" target="_blank" rel="noreferrer" aria-label="ClipMagi on Telegram"
           className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10">
          <Send className="w-4 h-4" />
        </a>
      </div>
    </header>
  )
}
