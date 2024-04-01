const fs = require('fs')
const path = require('path')
const fetch = require('node-fetch')
require('dotenv').config()

const getPosts = async () => {
  try {
    const API_KEY = process.env.DEVTO_API_KEY

    const response = await fetch(
      'https://dev.to/api/articles/me?page=1&per_page=1000',
      {
        headers: {
          'api-key': API_KEY,
          Accept: 'application/vnd.forem.api-v1+json'
        }
      }
    )

    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}

const main = async () => {
  const posts = await getPosts()
  const total = posts.length
  const filePath = path.join(
    process.cwd(),
    'src',
    'generated',
    'devto.stats.json'
  )
  fs.writeFileSync(filePath, JSON.stringify({ total }))
}

main()
