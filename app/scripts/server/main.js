import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'

import Html from 'src/components/markup/Html'
import Root from 'src/components/Root'
import config from 'src/config'

import store from 'src/state/store'

const port = config.get('APP_PORT')
const app = express()

const toMarkup = node => ReactDomServer.renderToStaticMarkup(node)
const toString = node => ReactDomServer.renderToString(node)

app.use(express.static('build'))

const markup = (body, state) => (
  <Html
    title='The Movie Bucket Club'
    description='A space dedicated to celebrate films.'
    state={state}
  >
    {body}
  </Html>
)

app.get('/', (req, res) => {
  const state = store.getState() // TODO manage state server side
  const document = toMarkup(markup(toString(<Root />), state))
  res.send(document)
})

app.listen(port, () => console.log(`Server running on port: ${port}`))
