// IMPORTS
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

// TOP LEVEL MIDDLEWARE
app.use(express.json())

// ENDPOINTS
app.get('/api/house/:houseName', (req, res) => {
  // const {houseName} = req.params
  const db = req.app.get('db')
  db.getHouse({house_name: req.params.houseName}).then(result => {
    console.log(result)
    res.status(200).send(result[0])
  })
})

// CONNECT TO DATABASE
massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
  // START THE SERVER
  app.listen(SERVER_PORT, () => {
    console.log(`${SERVER_PORT} ducks marching on Rome`)
  })
})
