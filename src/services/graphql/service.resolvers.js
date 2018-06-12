
/* eslint-disable no-unused-vars, indent */
// Define GraphQL resolvers using only Feathers services. (Can be re-generated.)
// !code: imports // !end
// !code: init // !end

let moduleExports = function serviceResolvers (app, options) {
  const {convertArgsToFeathers, extractAllItems, extractFirstItem} = options
  // !<DEFAULT> code: extra_auth_props
  const convertArgs = convertArgsToFeathers([])
  // !end

  // !<DEFAULT> code: services
  let messages = app.service('/messages')
  // !end

  let returns = {

    // !code: resolver_field_more // !end

    Query: {
      // !code: resolver_query_more // !end
    }
  }

  // !code: func_return // !end
  return returns
}

// !code: more // !end

// !code: exports // !end
module.exports = moduleExports

function paginate (content) {
  return result => {
    content.pagination = !result.data ? undefined : {
      total: result.total,
      limit: result.limit,
      skip: result.skip
    }

    return result
  }
}

// !code: funcs // !end
// !code: end // !end
