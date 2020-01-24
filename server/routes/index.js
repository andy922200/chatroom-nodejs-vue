const apis = require('./apis')

module.exports = (app) => {
  app.use('/api', apis)
  app.use('/', (req, res) => {
    res.send('This is "/" page (temporary). === 404')
  })
}