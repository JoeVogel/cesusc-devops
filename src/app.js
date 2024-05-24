const { checkHTMLFile } = require('./util')
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {

  if (checkHTMLFile('/views/index.html')) {
    res.sendFile(__dirname + '/views/index.html')
  } else {
    res.status(500).send('Index not found')
  }
})

app.listen(port, () => {
  console.log('Example app listening on port: ' + port)
})