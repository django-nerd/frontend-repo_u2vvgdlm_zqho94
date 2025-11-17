import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Communities from './components/Communities'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />
      <Hero />
      <main>
        <Communities />
        <section id="about" className="py-20 bg-slate-950">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">A place that feels like home</h3>
                <p className="text-white/70">We bring together community insights, beautiful listings, and the connections that make moving feel effortless. Explore neighborhoods, compare homes, and discover local highlights curated for you.</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxOZWlnaGJvcmhvb2R8ZW58MHwwfHx8MTc2MzQxMTc0OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Neighborhood" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
