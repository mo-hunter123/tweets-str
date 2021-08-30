const express = require('express')
const twitter = require('./config-streamer')
const path = require('path')
const indexRouter = require('./routes/index')


let tweets = []

const http = require('http')
const app = express()
const port = process.env.PORT || 9000
const server = http.createServer(app)

//setting a socket.io server 
const { Server } = require('socket.io')
const io = new Server(server)

// express deps
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

const MAX_TWEETS = 10

app.use('/', indexRouter); 


twitter.on('tweet', tweet => {
    io.emit('tweet', tweet);
    tweets.unshift(tweet);
    tweets = tweets.slice(0, MAX_TWEETS);
});
  

server.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})