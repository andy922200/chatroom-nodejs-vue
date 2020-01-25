const apis = require('./apis')

module.exports = (app) => {
  app.use('/api', apis)
  app.use('/', (req, res) => {
    return res.json({ status: 'error', message: 'no result' })
  })
}