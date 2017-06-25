const path = require('path')

const APP_PORT = 8080

const ENV = process.env.NODE_ENV || 'development'

const SRC = path.join(__dirname, 'app')
const DEST = path.join(__dirname, 'build')
const STATIC = path.join(DEST, '/static')

module.exports = {
  APP_PORT,
  ENV,
  SRC,
  DEST,
  STATIC,
}
