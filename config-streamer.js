const Twitter = require('node-tweet-stream')

const dotenv = require('dotenv')
dotenv.config()


const twitter = new Twitter({
    consumer_key: process.env.API_KEY, 
    consumer_secret: process.env.API_SECRET_KEY, 
    token: process.env.ACCESS_TOKEN,
    token_secret: process.env.ACCESS_TOKEN_SECRET
})

// const twitter = new Twitter({
//     consumer_key: "FKoqQuXwhkSHLcyxQNTlvNqVr", 
//     consumer_secret: "KqQqYkFmLGhi2I9xm2IavPZ0UbFcWvCyjOsuz3bGjjZNkODdfx", 
//     token: "4856955591-IpR5KRtj0RmXoc0hxLeaYfgWfpHpssGwEWm0ITE",
//     token_secret: "S8TbXHevhZ4TCYo32HgABsx2qsRVOYHn4GIPnpaqzcSpV"
// })

// twitter.track('socket.io')
twitter.track('javascript')


twitter.on('error', err => {
    console.error(err);
});

module.exports = twitter