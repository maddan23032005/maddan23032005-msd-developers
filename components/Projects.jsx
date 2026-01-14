'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { db } from '../lib/firebase'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'

export default function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const q = query(
        collection(db, 'projects'),
        orderBy('createdAt', 'desc')
      )
      const snapshot = await getDocs(q)
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
      setProjects(data)
    }

    fetchProjects()
  }, [])

  return (
    <section
      id="projects"
      className="py-20 bg-white scroll-mt-24"
    >
      {/* ⚠️ FIXED TYPO: max -w-7xl → max-w-7xl */}
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Projects
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successfully completed projects that
            showcase our expertise and commitment to excellence.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              image={project.imageUrl}
              category={project.category}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects added yet.
          </p>
        )}

      </div>
    </section>
  )
}

function ProjectCard({ image, category, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative rounded-xl overflow-hidden shadow-lg group"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-72 object-cover"
      />

      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition"></div>

      <div className="absolute bottom-0 p-6 text-white z-10">
        <p className="text-green-400 text-sm font-semibold">
          {category}
        </p>
        <h3 className="text-xl font-bold">
          {title}
        </h3>

        {description && (
          <p className="text-sm mt-2 opacity-90">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}
