import { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv/config'

const config: CodegenConfig = {
  generates: {
    './src/generated/github.schema.ts': {
      schema: ['https://docs.github.com/public/schema.docs.graphql'],
      documents: ['src/graphql/github/**/*.graphql'],
      config: {
        Headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
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
      schema: ['https://gql.hashnode.com'],
      documents: ['src/graphql/hashnode/**/*.graphql'],
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
