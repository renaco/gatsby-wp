const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
        query GET_POSTS($first: Int $after: String) {
          wpgraphql {
            posts(
              first: $first
              after: $after
            ) {
              pageInfo {
                endCursor
                hasNextPage
              }
              nodes {
                id
                uri
                postId
                title
              }
            }
          }
        }
    `
}