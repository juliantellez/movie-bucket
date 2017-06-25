import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'

import Html from 'src/components/markup/Html'
import Root from 'src/components/Root'
import config from 'src/config'

const port = config.get('APP_PORT')
const app = express()

const toMarkup = node => ReactDomServer.renderToStaticMarkup(node)
const toString = node => ReactDomServer.renderToString(node)

app.use(express.static('build'))

const markup = body => (
  <Html
    title='The Movie Bucket Club'
    description='A space dedicated to celebrate films.'
  >
    {body}
  </Html>
)

app.get('/', (req, res) => {q
  const Content = Root // TODO
  const document = toMarkup(markup(toString(<Content />)))
  res.send(document)
})

app.listen(port, () => console.log(`Server running on port: ${port}`))
