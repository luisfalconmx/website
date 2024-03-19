import type { AxiosResponse } from 'axios'

export interface getCommentsProps {
  id: number
}

export interface Comment {
  type_of: string
  id_code: string
  created_at: string
  body_html: string
  user: {
    name: string
    username: string
    twitter_username: string
    github_username: string
    user_id: number
    website_url: string
    profile_image: string
    profile_image_90: string
  }
  children: Comment[]
}

export interface getCommentsResponse extends AxiosResponse {
  data: Comment[]
}
