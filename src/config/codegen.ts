import { CodegenConfig } from '@graphql-codegen/cli'
import { HYGRAPH_CONTENT_API_URL } from './env'

const config: CodegenConfig = {
  generates: {
    './src/generated/hygraph.schema.ts': {
      schema: `${HYGRAPH_CONTENT_API_URL}`,
      documents: ['src/graphql/hygraph/**/*.graphql'],
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
