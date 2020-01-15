import React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from 'gatsby'
import Seo from '../components/seo'

const renderTermNodes = (nodes, title) => (
  <div>
    {title}
    {` `}
    {nodes.map(term => (
      <div>{term.name}</div>
    ))}
  </div>
)

const renderTerms = (categoryNodes = [], tagNodes = []) => (
  <div>
    {categoryNodes ? renderTermNodes(categoryNodes, `Categorias`) : null}
    {tagNodes && tagNodes ? renderTermNodes(tagNodes, `Tags: `) : null}
  </div>
)

const Post = props => {
  const {
    location,
    data: {
      wpgraphql: { post }
    }
  } = props
  const { title, content } = post
  return (
    <div location={location}>
      <Seo title={`${post.title}`} />
      {}
    </div>)
}

export default Post

// export const pageQuery = graphql`
//   query GET_POST($id: ID!) {
//     wpgraphql {
//       post(id: $id) {
//         title
//         content
//         uri
//         author {
//           name
//           slug
//           avatar {
//             url
//           }
//         }
//         tags {
//           nodes {
//             name
//             link
//           }
//         }
//         categories {
//           nodes {
//             name
//             link
//           }
//         }
//       }
//     }
//   }
// `
