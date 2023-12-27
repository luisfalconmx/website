import { useState, useEffect } from 'react'

const useDarkmode = () => {
  const [darkmode, setDarkmode] = useState(false)

  const toggleDarkmode = () => {
    const isDark = !darkmode
    setDarkmode(isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.setAttribute('data-theme', 'dark')
      setDarkmode(true)
    } else {
      document.documentElement.removeAttribute('data-theme')
      setDarkmode(false)
    }
  }, [])

  return { darkmode, toggleDarkmode }
}

export default useDarkmode
