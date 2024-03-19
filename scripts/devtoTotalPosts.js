const fs = require('fs')
const path = require('path')
const axios = require('axios')
require('dotenv').config()

const getPosts = async () => {
  try {
    const API_KEY = process.env.DEVTO_API_KEY
    const response = await axios.get(
      `https://dev.to/api/articles/me?page=1&per_page=1000`,
      {
        headers: {
          'api-key': API_KEY,
          Accept: 'application/vnd.forem.api-v1+json'
        }
      }
    )
    return response.data
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
    'devtoArticlesCount.json'
  )
  fs.writeFileSync(filePath, JSON.stringify({ total }))
}

main()
