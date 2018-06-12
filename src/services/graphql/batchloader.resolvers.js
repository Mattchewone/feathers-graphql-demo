
/* eslint-disable no-unused-vars */
// Define GraphQL resolvers using Feathers services and BatchLoaders. (Can be re-generated.)
const { getByDot, setByDot } = require('feathers-hooks-common')
// !code: imports // !end
// !code: init // !end

let moduleExports = function batchLoaderResolvers (app, options) {
  // eslint-disable-next-line
  let { convertArgsToParams, convertArgsToFeathers, extractAllItems, extractFirstItem,
    feathersBatchLoader: { feathersBatchLoader } } = options

  // !<DEFAULT> code: max-batch-size
  let defaultPaginate = app.get('paginate')
  let maxBatchSize = defaultPaginate && typeof defaultPaginate.max === 'number'
    ? defaultPaginate.max : undefined
  // !end

  // !<DEFAULT> code: extra_auth_props
  const convertArgs = convertArgsToFeathers([])
  // !end

  // !<DEFAULT> code: services
  let messages = app.service('/messages')
  // !end

  // !<DEFAULT> code: get-result
  // Given a fieldName in the parent record, return the result from a BatchLoader
  // The result will be an object (or null), or an array of objects (possibly empty).
  function getResult (batchLoaderName, fieldName, isArray) {
    const contentByDot = `batchLoaders.${batchLoaderName}`

    // `content.app = app` is the Feathers app object.
    // `content.batchLoaders = {}` is where the BatchLoaders for a request are stored.
    return (parent, args, content, ast) => {
      let batchLoader = getByDot(content, contentByDot)

      if (!batchLoader) {
        batchLoader = getBatchLoader(batchLoaderName, parent, args, content, ast)
        setByDot(content, contentByDot, batchLoader)
      }

      const returns1 = batchLoader.load(parent[fieldName])
      return !isArray ? returns1 : returns1.then(result => result || [])
    }
  }
  // !end

  // A transient BatchLoader can be created only when (one of) its resolver has been called,
  // as the BatchLoader loading function may require data from the 'args' passed to the resolver.
  // Note that each resolver's 'args' are static throughout a GraphQL call.
  function getBatchLoader (dataLoaderName, parent, args, content, ast) {
    let feathersParams

    switch (dataLoaderName) {
    /* Persistent BatchLoaders. Stored in `content.batchLoaders._persisted`. */
    // !<DEFAULT> code: bl-persisted
    // case '_persisted.user.one.id': // service user, returns one object, key is field id
    // !end

    /* Transient BatchLoaders shared among resolvers. Stored in `content.batchLoaders._shared`. */
    // !<DEFAULT> code: bl-shared
    // *.*: User
    // case '_shared.user.one.id': // service user, returns one object, key is field id
    // !end

    /* Transient BatchLoaders used by only one resolver. Stored in `content.batchLoaders`. */

    /* Throw on unknown BatchLoader name. */
      default:
      // !<DEFAULT> code: bl-default
        throw new Error(`GraphQL query requires BatchLoader named '${dataLoaderName}' but no definition exists for it.`)
      // !end
    }
  }

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
