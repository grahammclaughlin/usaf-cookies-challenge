const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    console.log('Cookies: ', req.cookies)
})

app.get('/login', function(req, res) {
    let name = req.query.name;
    res.cookie('name', name)
    res.send('Success!')
    res.end
})


app.get('/hello', function(req, res) {
    name = req.cookies.name;
    if (name){
        res.send(`Welcome ${name}`)
    }
    else{
        res.send(`You have yet to login. Please use /login`)
    }
    
})

const port = 3000
app.listen(port, () => console.log(`Cookie app listening at http://localhost:${port}`))
