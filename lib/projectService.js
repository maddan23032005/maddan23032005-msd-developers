import { db } from './firebase'
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'

export const addProject = (data) =>
  addDoc(collection(db, 'projects'), data)

export const getProjects = async () => {
  const snap = await getDocs(collection(db, 'projects'))
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export const deleteProject = (id) =>
  deleteDoc(doc(db, 'projects', id))
