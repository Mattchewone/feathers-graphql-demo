
// Configure the Feathers services. (Can be re-generated.)
let messages = require('./messages/messages.service')

let graphql = require('./graphql/graphql.service')
// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(messages)

  app.configure(graphql)
  // !code: func_return // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
