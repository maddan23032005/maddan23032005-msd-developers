'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="scroll-mt-24 bg-gray-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About MSD Developers
          </h2>

          <p className="text-gray-600 mb-4">
            MSD Developers is an upcoming construction company powered by a team
            of experienced professionals and skilled architects dedicated to
            delivering exceptional results in every project we undertake.
          </p>

          <p className="text-gray-600 mb-6">
            Our team brings years of industry expertise combined with fresh
            perspectives and innovative approaches. We are committed to
            excellence, sustainability, and building lasting relationships
            with our clients through quality workmanship and professional
            service.
          </p>

          {/* BULLETS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              'Experienced Team',
              'Licensed & Insured',
              'Skilled Architects',
              'Quality Craftsmanship',
              'On-Time Delivery',
              'Competitive Pricing',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="text-green-600 text-lg">✔</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/about.jpg"
            alt="About MSD Developers"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

      </div>
    </motion.section>
  )
}
