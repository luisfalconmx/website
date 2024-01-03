import { createYoga } from 'graphql-yoga'
import { stitchSchemas } from '@graphql-tools/stitch'
import { buildHTTPExecutor } from '@graphql-tools/executor-http'
import {
  schemaFromExecutor,
  RenameTypes,
  RenameRootFields
} from '@graphql-tools/wrap'

//dotenv
import dotenv from 'dotenv'
dotenv.config()

const hashnodeExecutor = buildHTTPExecutor({
  endpoint: 'https://gql.hashnode.com'
})

const githubExecutor = buildHTTPExecutor({
  endpoint: 'https://api.github.com/graphql',
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'user-agent': 'luisfalconmx'
  }
})

const gateway = async () => {
  return stitchSchemas({
    subschemas: [
      {
        schema: await schemaFromExecutor(hashnodeExecutor),
        executor: hashnodeExecutor,
        transforms: [
          new RenameTypes((name) => `hashnode_${name}`),
          new RenameRootFields((_operation, name) => `hashnode_${name}`)
        ]
      },
      {
        schema: await schemaFromExecutor(githubExecutor),
        executor: githubExecutor,
        transforms: [
          new RenameTypes((name) => `github_${name}`),
          new RenameRootFields((_operation, name) => `github_${name}`)
        ]
      }
    ]
  })
}

export default createYoga({
  schema: gateway,
  // Needed to be defined explicitly because our endpoint lives at a different path other than `/graphql`
  graphqlEndpoint: '/api/graphql',
  graphiql: true
})
