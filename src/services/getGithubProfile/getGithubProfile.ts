import axios from 'axios'

const getGithubProfile = async (username: string) => {
  const profileEndpoint = `https://api.github.com/users/${username}`
  const socialEndpoint = `https://api.github.com/users/${username}/social_accounts`

  const profileResponse = await axios.get(profileEndpoint)
  const socialResponse = await axios.get(socialEndpoint)

  const data = {
    ...profileResponse.data,
    social: [
      {
        provider: 'github',
        url: profileResponse.data.html_url
      },
      ...socialResponse.data
    ]
  }

  return data as IGithubProfile
}

export default getGithubProfile
