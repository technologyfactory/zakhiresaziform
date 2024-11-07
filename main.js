console.log("run application test")
const express = require('express')
const fs = require('fs')

const app = express()
const port = 8083

app.get('/register', (req, res) => {
    console.log(req.query)
    res.send('Hello ba movafaghiyat anjam shod!')
    fs.appendFile("formdata.text", "\n" + req.query.name + " " + req.query.fname + " " + req.query.meli, (err, data) => { })
    fs.readFile("formdata.text", 'utf8', (err, data) => { console.log(data) })
})
app.get('/test', (req, res) => {
    res.send('app run mishavad!')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
