
/* eslint-disable no-console */
// Start the server. (Can be re-generated.)
const logger = require('winston')
const app = require('./app')
// !code: imports // !end
// !code: init // !end

const port = app.get('port')
const server = app.listen(port)
// !code: init2 // !end

process.on('unhandledRejection', (reason, p) => {
  // !<DEFAULT> code: unhandled_rejection_log
  logger.error('Unhandled Rejection at: Promise ', p, reason)
  // !end
  // !code: unhandled_rejection // !end
})

server.on('listening', () => {
  // !<DEFAULT> code: listening_log
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
  // !end
  // !code: listening // !end
})

// !code: funcs // !end
// !code: end // !end
