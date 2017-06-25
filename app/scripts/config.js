import I from 'immutable'
import appConfig from '../../app-config'

const {MOVIEDB_API_KEY} = process.env

export default I.Record({
  ...appConfig,
  MOVIEDB_API_KEY,
})()
