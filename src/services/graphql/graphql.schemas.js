
// Define the combined GraphQL schema. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = `
type Post {
  _id: ID
  text: String
  userId: ID
  user: User
}
 
type User {
  _id: ID
  firstName: String
  lastName: String
  fullName: String!
  posts: [Post!]
}
 

type Query {
  getPost(key: JSON, query: JSON, params: JSON): Post
  findPost(query: JSON, params: JSON): [Post]!
  getUser(key: JSON, query: JSON, params: JSON): User
  findUser(query: JSON, params: JSON): [User]!
}
`

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
