const express = require('express'),
      path = require('path')

//loads MONGOLAB_URI into process.env read from file .env
require('dotenv').config()

app = express()

var todoApi = require('./routes')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

const url = "mongodb+srv://ubc:ubc@ubc-gpptt.mongodb.net/test?retryWrites=true&w=majority";

//mongoose.connect(process.env.MONGO_URI)
console.log("1");

mongoose.connect(url, {useNewUrlParser: true});
console.log("2");

let db = mongoose.connection;
db.once('open', () => console.log('connected to the database'));
console.log("3");

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next()
}

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)
app.use('/api', todoApi)

const sendHTMLpage = (req, res) => {
    bundle = ``

    //development mode gets bundle.js from webpack-dev-server at localhost:8080
    if (process.env.NODE_ENV == 'development') {
        //bundle = `<script src="http://192.168.1.5:8080/assets/bundle.js"></script>`
        bundle = `<script src="http://localhost:8080/assets/bundle.js"></script>`
    } else {
        bundle = `<script src="assets/bundle.js"></script>`
    }

    return_html = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Served</title>
            </head>
            <body>
                <div id="react-container"></div>
                ` + bundle + `
            </body>
        </html>`
    res.status(200).send(return_html)
}

app.get('/', (req, res) => {
    sendHTMLpage(req, res);
})

//Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(process.env.PORT || 3000, function () {
    console.log('Example app listening on port ' + (process.env.PORT || 3000))
})

module.exports = app
