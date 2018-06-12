
// users-model.js - A Mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
// !<DEFAULT> code: mongoose_schema
const mongooseSchema = require('../services/users/users.mongoose')
// !end
// !code: mongoose_imports // !end
// !code: mongoose_init // !end

let moduleExports = function (app) {
  let mongooseClient = app.get('mongooseClient')
  // !code: mongoose_func_init // !end

  // !<DEFAULT> code: mongoose_client
  const users = new mongooseClient.Schema(mongooseSchema, { timestamps: true })
  // !end

  let returns = mongooseClient.model('users', users)

  // !code: mongoose_func_return // !end
  return returns
}
// !code: mongoose_more // !end

// !code: mongoose_exports // !end
module.exports = moduleExports

// !code: mongoose_funcs // !end
// !code: mongoose_end // !end
