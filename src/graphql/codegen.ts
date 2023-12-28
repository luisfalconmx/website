import { CodegenConfig } from '@graphql-codegen/cli'
import { hashnodeConfig } from '../config'

const config: CodegenConfig = {
  schema: [hashnodeConfig.endpoint],
  documents: ['../**/*.graphql'],
  generates: {
    './src/graphql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations']
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier --write']
  }
}

export default config
