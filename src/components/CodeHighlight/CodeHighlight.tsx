'use client'
// import Highlight.js and the languages you need
import { useEffect } from 'react'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)

export const CodeHighlight = () => {
  useEffect(() => {
    hljs.highlightAll()
  }, [])

  return null
}
