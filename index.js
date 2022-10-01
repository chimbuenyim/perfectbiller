
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.use(express.static('pages'))
app.get('*', ((req, res) => {
  res.sendFile(path.join(process.cwd(), req.params["0"]))
}))
app.listen(port, () => {
  console.log(`App Listening at http://localhost:${port}`)
})
