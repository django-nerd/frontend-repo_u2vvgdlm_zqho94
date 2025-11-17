import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Real Estates. All rights reserved.</p>
        <div className="flex items-center gap-4 text-white/70 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="#communities" className="hover:text-white">Communities</a>
        </div>
      </div>
    </footer>
  )
}
