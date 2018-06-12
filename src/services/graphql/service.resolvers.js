
/* eslint-disable no-unused-vars, indent */
// Define GraphQL resolvers using only Feathers services. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = function serviceResolvers(app, options) {
  const {convertArgsToFeathers, extractAllItems, extractFirstItem} = options
  // !<DEFAULT> code: extra_auth_props
  const convertArgs = convertArgsToFeathers([])
  // !end

  // !<DEFAULT> code: services
  let posts = app.service('/posts')
  let users = app.service('/users')
  // !end

  let returns = {

    Post: {

      // user: User
      user:
        // !<DEFAULT> code: resolver-Post-user
        (parent, args, content, ast) => {
          const feathersParams = convertArgs(args, content, ast, {
            query: { _id: parent.userId }, paginate: false
          })
          return users.find(feathersParams).then(extractFirstItem)
        },
        // !end
    },

    User: {

      // posts: [Post!]
      posts:
        // !<DEFAULT> code: resolver-User-posts
        (parent, args, content, ast) => {
          const feathersParams = convertArgs(args, content, ast, {
            query: { userId: parent._id, $sort: undefined }, paginate: false
          })
          return posts.find(feathersParams).then(extractAllItems)
        },
        // !end
    },

    // !code: resolver_field_more // !end

    Query: {

      // !<DEFAULT> code: query-Post
      // getPost(query: JSON, params: JSON, key: JSON): Post
      getPost(parent, args, content, ast) {
        const feathersParams = convertArgs(args, content, ast)
        return posts.get(args.key, feathersParams).then(extractFirstItem)
      },

      // findPost(query: JSON, params: JSON): [Post!]
      findPost(parent, args, content, ast) {
        const feathersParams = convertArgs(args, content, ast, { query: { $sort: {   _id: 1 } } })
        return posts.find(feathersParams).then(paginate(content)).then(extractAllItems)
      },
      // !end

      // !<DEFAULT> code: query-User
      // getUser(query: JSON, params: JSON, key: JSON): User
      getUser(parent, args, content, ast) {
        const feathersParams = convertArgs(args, content, ast)
        return users.get(args.key, feathersParams).then(extractFirstItem)
      },

      // findUser(query: JSON, params: JSON): [User!]
      findUser(parent, args, content, ast) {
        const feathersParams = convertArgs(args, content, ast, { query: { $sort: {   _id: 1 } } })
        return users.find(feathersParams).then(paginate(content)).then(extractAllItems)
      },
      // !end
      // !code: resolver_query_more // !end
    },
  }

  // !code: func_return // !end
  return returns
}

// !code: more // !end

// !code: exports // !end
module.exports = moduleExports

function paginate(content) {
  return result => {
    content.pagination = !result.data ? undefined : {
      total: result.total,
      limit: result.limit,
      skip: result.skip,
    }

    return result
  }
}

// !code: funcs // !end
// !code: end // !end
