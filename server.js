const express = require("express")
const exphbs = require('express-handlebars')
const fetch = require('node-fetch')

const app = express()

// express-handlebars is the rendering engine
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

// For serving static files
app.use(express.static('public'))

const port = 3000
app.listen(port, () => {
    console.log("Started listening on http://127.0.0.1:3000")
})

app.get('/', (req, res) => {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(json => {
            console.log(json.data.memes[0])
            res.render('home', { 'memes': json.data.memes })
        })
})

