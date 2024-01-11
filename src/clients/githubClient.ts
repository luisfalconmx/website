import axios from 'axios'

const githubClient = axios.create({
  baseURL: 'https://api.github.com/users/'
})

export default githubClient
