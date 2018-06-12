
// Define the combined GraphQL schema. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = `
type Messages {
  title: String
  description: String
  info: String
}
 

type Query {
  getMessages(key: JSON, query: JSON, params: JSON): Messages
  findMessages(query: JSON, params: JSON): [Messages]!
}
`

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
