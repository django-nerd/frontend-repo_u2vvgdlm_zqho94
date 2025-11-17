import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-orange-400 text-white font-bold shadow-sm">
            RE
          </span>
          <span className="text-white/90 font-semibold tracking-tight">Real Estates</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#communities" className="text-white/70 hover:text-white transition-colors">Communities</a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#communities" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-orange-400 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition-shadow">
          Explore Now
        </a>
      </div>
    </header>
  )
}
