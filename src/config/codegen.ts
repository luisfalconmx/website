import { CodegenConfig } from '@graphql-codegen/cli'
import {
  HASHNODE_ENDPOINT,
  CONTENTFUL_ENDPOINT,
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_TOKEN
} from '../config'
import 'dotenv/config'

const config: CodegenConfig = {
  generates: {
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
