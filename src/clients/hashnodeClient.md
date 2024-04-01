replace devto client with hashnode client

```graphql
query Pagination {
  user(username: "victoria") {
    posts(pageSize: 20, page: 1, sortBy: DATE_PUBLISHED_DESC) {
      edges {
        node {
          title
          content {
            markdown
          }
        }
      }
      totalDocuments
      pageInfo {
        hasNextPage
      }
    }
  }
}
```

```json
{
  "data": {
    "user": {
      "posts": {
        "edges": [],
        "totalDocuments": 212,
        "pageInfo": {
          "hasNextPage": true
        }
      }
    }
  }
}
```
