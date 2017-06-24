import express from 'express'

import config from 'src/config'

const port = config.get('APP_PORT')
const app = express()

app.use(express.static('build'))

app.get('/', function (req, res) {
  res.send('The Movie Bucket Club!')
})

app.listen(port, () => console.log(`Server running on port: ${port}`))
