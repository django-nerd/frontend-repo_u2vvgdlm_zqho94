import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const communities = [
  {
    id: 'willow-creek',
    name: 'Willow Creek',
    description: 'Tree-lined streets, parks, and family-friendly vibes.',
    image: 'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'sunset-hills',
    name: 'Sunset Hills',
    description: 'Hillside views with golden hour magic every day.',
    image: 'https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdW5zZXQlMjBIaWxsc3xlbnwwfDB8fHwxNzYzNDExNzQ4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 'riverside',
    name: 'Riverside',
    description: 'Modern living by the water with cafes and trails.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'oak-meadow',
    name: 'Oak Meadow',
    description: 'Calm cul-de-sacs, great schools, and cozy homes.',
    image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Communities() {
  const navigate = useNavigate()

  const handleClick = (id) => {
    // Navigate to existing community page route provided by the app
    navigate(`/communities/${id}`)
  }

  return (
    <section id="communities" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Find Your Perfect Community</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Browse a curated selection of communities to start exploring homes and local life.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {communities.map((c, idx) => (
            <motion.button
              key={c.id}
              onClick={() => handleClick(c.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 text-left shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-400"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={c.image} alt={c.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-lg">{c.name}</h3>
                <p className="text-white/70 text-sm mt-1">{c.description}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
