const apis = require('./apis')

module.exports = (app) => {
  app.use('/api', apis)
}