const express = require('express')
const app = express()
const color = require('color')

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).send('works')
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`)
})
