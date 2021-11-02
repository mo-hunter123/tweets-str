/// TODO : titles in a separated file for consts

const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
   res.render('../views/pages/home-page', {
       title: "Tweets streamer - Home"
   })
})

router.get('/user/:screen_name', (req, res) => {
    const username = req.params.screen_name;
    res.render('../views/pages/user-page', {
        title: `Tweets streamer - ${username}`,
        username
    })
 })

module.exports = router