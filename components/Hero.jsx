'use client'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section
      id="home"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="scroll-mt-24 relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://virtualbackgrounds.site/wp-content/uploads/2020/11/construction-site-in-dubai.jpg')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex h-full items-center justify-center text-center text-white">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Innovate Your Life
          </h1>

          <p className="mt-6 text-lg md:text-xl">
            MSD Developers - Your trusted partner in Real Estate,
            Construction & Interior, and Civil Material Supplies
          </p>

          <p className="mt-4 text-base opacity-90">
            An upcoming construction company with experienced professionals and
            skilled architects
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() =>
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md font-semibold"
            >
              View Our Projects
            </button>

            <button
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="bg-white text-black hover:bg-gray-200 transition px-6 py-3 rounded-md font-semibold"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
