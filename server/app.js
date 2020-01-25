const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const methodOverride = require('method-override')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
// 開啟跨網域連線
app.use(cors())
// 非上線模式，存取 env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// 存取 database model
const db = require('./models')
// to set body-parser & methodOverride
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(methodOverride('_method'))
// initialize session
app.use(
  session({
    secret: 'chatroom',
    name: 'abcdefg',
    cookie: { maxAge: 86400000 },
    resave: false,
    saveUninitialized: true
  })
)
// setup passport
const passport = require('./config/passport')
app.use(passport.initialize())
app.use(passport.session())
// 連結後端 api 路由
require('./routes/')(app)

// production mode 前端路由
if (process.env.NODE_ENV === 'production') {
  // static folder
  app.use(express.static(__dirname + '/public/'))
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`)
})
