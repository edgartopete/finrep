'use strict'
const simple = require('./handlers/simple')
const configured = require('./handlers/configured')

module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/:sbu/:region/:period', simple)
  app.get('/configured', configured(opts))
}
