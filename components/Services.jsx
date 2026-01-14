'use client'
import { motion } from 'framer-motion'
import { Home, Building2, Paintbrush, Box } from 'lucide-react'

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-gray-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of services tailored to meet your
            specific needs and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">

          <ServiceCard
            icon={<Home size={28} />}
            title="Real Estate"
            description="Comprehensive real estate services including property development, sales, and investment opportunities for residential and commercial projects."
          />

          <ServiceCard
            icon={<Building2 size={28} />}
            title="Construction"
            description="End-to-end construction services for residential, commercial, and industrial projects with a focus on quality and timely delivery."
          />

          <ServiceCard
            icon={<Paintbrush size={28} />}
            title="Interior Design"
            description="Transform your spaces with our innovative interior design solutions that blend aesthetics with functionality."
          />

          <ServiceCard
            icon={<Box size={28} />}
            title="Civil Material Suppliers"
            description="Premium quality construction materials and civil supplies ensuring durability and excellence in every project."
          />

        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition"
    >
      <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  )
}
