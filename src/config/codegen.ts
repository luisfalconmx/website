import {
  GITHUB_TOKEN,
  HASHNODE_ENDPOINT,
  CONTENTFUL_ENDPOINT,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_TOKEN
} from '../config'
import { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  generates: {
    './src/generated/github.schema.ts': {
      schema: ['https://docs.github.com/public/schema.docs.graphql'],
      documents: ['src/graphql/github/**/*.graphql'],
      config: {
        Headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          'User-Agent': 'GraphQL Codegen'
        }
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    },
    './src/generated/hashnode.schema.ts': {
      schema: [HASHNODE_ENDPOINT],
      documents: ['src/graphql/hashnode/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    },
    './src/generated/contentful.schema.ts': {
      schema: `${CONTENTFUL_ENDPOINT}/${CONTENTFUL_SPACE_ID}?access_token=${CONTENTFUL_DELIVERY_TOKEN}`,
      documents: ['src/graphql/contentful/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier --write']
  }
}

export default config
