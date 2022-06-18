const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb://junseok:asdf1234@artistajuny-shard-00-00.bsgdc.mongodb.net:27017,artistajuny-shard-00-01.bsgdc.mongodb.net:27017,artistajuny-shard-00-02.bsgdc.mongodb.net:27017/?ssl=true&replicaSet=atlas-4el19u-shard-0&authSource=admin&retryWrites=true&w=majority',)
  .then(()=> console.log('MongoDB Conneted...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})