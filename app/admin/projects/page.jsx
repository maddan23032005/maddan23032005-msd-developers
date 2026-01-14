'use client'

import { useState, useEffect } from 'react'
import { auth, db } from '../../../lib/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import { uploadToCloudinary } from '../../../lib/cloudinary'

export default function AdminProjects() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [projects, setProjects] = useState([])

  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) router.push('/admin/login')
      else {
        setLoading(false)
        fetchProjects()
      }
    })
    return () => unsub()
  }, [])

  const fetchProjects = async () => {
    const snapshot = await getDocs(collection(db, 'projects'))
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    setProjects(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!image) return alert('Please upload an image')

    try {
      // ✅ Upload image via helper (env-safe)
      const data = await uploadToCloudinary(image)

      if (!data.secure_url) {
        alert('Image upload failed')
        return
      }

      // ✅ Save to Firestore
      await addDoc(collection(db, 'projects'), {
        title,
        category,
        description,
        imageUrl: data.secure_url,
        createdAt: serverTimestamp(),
      })

      setTitle('')
      setCategory('')
      setDescription('')
      setImage(null)

      fetchProjects()
    } catch (err) {
      console.error(err)
      alert('Something went wrong')
    }
  }

  const deleteProject = async (id) => {
    await deleteDoc(doc(db, 'projects', id))
    fetchProjects()
  }

  if (loading) return <p className="p-8">Loading...</p>

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">Manage Projects</h1>

        <form onSubmit={handleSubmit} className="grid gap-4 mb-10">
          <input
            placeholder="Project Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />

          <input
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border px-4 py-2 rounded"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Add Project
          </button>
        </form>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.id} className="border rounded shadow-sm">
              <img
                src={p.imageUrl}
                alt={p.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.category}</p>
                <p className="text-sm mt-2">{p.description}</p>
                <button
                  onClick={() => deleteProject(p.id)}
                  className="mt-3 text-red-600 text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
