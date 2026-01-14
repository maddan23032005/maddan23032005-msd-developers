'use client'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-3 py-1 rounded bg-primary text-white"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}
