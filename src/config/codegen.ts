import { CodegenConfig } from '@graphql-codegen/cli'
import { HYGRAPH_SCHEMA_URL, HASHNODE_GRAPHQL_ENDPOINT } from './env'

const config: CodegenConfig = {
  generates: {
    './src/generated/hygraph.schema.ts': {
      schema: HYGRAPH_SCHEMA_URL,
      documents: ['src/services/hygraph/**/*.graphql'],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    },
    './src/generated/hashnode.schema.ts': {
      schema: HASHNODE_GRAPHQL_ENDPOINT,
      documents: ['src/services/hashnode/**/*.graphql'],
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
