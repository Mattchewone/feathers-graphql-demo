
// Initializes the `posts` service on path `/posts`. (Can be re-generated.)
const createService = require('feathers-mongoose')
const createModel = require('../../models/posts.model')
const hooks = require('./posts.hooks')
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app) {
  let Model = createModel(app)
  let paginate = app.get('paginate')
  // !code: func_init // !end

  let options = {
    name: 'posts',
    Model,
    paginate,
    // !code: options_more // !end
  }
  // !code: options_change // !end

  // Initialize our service with any options it requires
  app.use('/posts', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('posts')

  service.hooks(hooks)
  // !code: func_return // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
