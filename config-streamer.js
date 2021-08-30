const Twitter = require('node-tweet-stream')

const dotenv = require('dotenv')
dotenv.config()


const twitter = new Twitter({
    consumer_key: process.env.API_KEY, 
    consumer_secret: process.env.API_SECRET_KEY, 
    token: process.env.ACCESS_TOKEN,
    token_secret: process.env.ACCESS_TOKEN_SECRET
})


// twitter.track('socket.io')
twitter.track('javascript')


twitter.on('error', err => {
    console.error(err);
});

module.exports = twitter