const express = require('express')
const app = express()
const port = process.env.SERVER_PORT || 80
const message = process.env.MESSAGE || 'Hello World'
app.get('/', (req, res) => {
  res.send(message)
})
app.listen(port, () => console.log(`Server running on port ${port}`))
