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

// 加入 socket.io 監聽
const server = require('http').Server(app).listen(port, () => {
  console.log(`The app is listening on port ${port}`)
})
const io = require('socket.io')(server)
io.on('connection', socket => {
  console.log('連接成功，上線ID: ', socket.id);

  // 監聽訊息
  socket.on('getMessage', message => {
    console.log('服務端 接收 訊息: ', message);

    //回傳 message 給除自己外的客戶端
    socket.broadcast.emit('getMessage', message);
  });

  // 連接斷開
  socket.on('disconnect', () => {
    console.log('有人離開了！， 下線ID: ', socket.id);
  });
});
