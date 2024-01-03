import { CodegenConfig } from '@graphql-codegen/cli'
import { githubConfig, hashnodeConfig } from '.'

const config: CodegenConfig = {
  generates: {
    './src/generated/hashnode.schema.ts': {
      schema: [hashnodeConfig.endpoint],
      documents: ['../**/*.graphql'],
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
