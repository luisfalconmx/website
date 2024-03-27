'use client'
// import Highlight.js and the languages you need
import { useEffect } from 'react'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import json from 'highlight.js/lib/languages/json'
import typescript from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('json', json)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('html', html)

const CodeHighlight = () => {
  useEffect(() => {
    setTimeout(() => {
      hljs.highlightAll()
      console.log('asd')
    }, 1000)
  }, [])

  return null
}

export default CodeHighlight
