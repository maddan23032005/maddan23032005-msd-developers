'use client'
import { auth } from '../../lib/firebase'

export default function TestFirebase() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Firebase Connected</h1>
      <p>Auth object exists: {auth ? 'YES' : 'NO'}</p>
    </div>
  )
}
