import { CodegenConfig } from '@graphql-codegen/cli'
import { githubConfig, hashnodeConfig } from '.'

const config: CodegenConfig = {
  schema: [
    {
      [githubConfig.endpoint]: {
        token: githubConfig.token
      }
    },
    hashnodeConfig.endpoint
  ],
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
