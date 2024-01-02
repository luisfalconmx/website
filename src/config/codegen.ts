import { CodegenConfig } from '@graphql-codegen/cli'
import { hashnodeConfig } from '.'

const config: CodegenConfig = {
  schema: [hashnodeConfig.endpoint],
  documents: ['../**/*.graphql'],
  generates: {
    './src/generated/graphql.ts': {
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
