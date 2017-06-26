import I from 'immutable'
import appConfig from '../../app-config'

const {MOVIEDB_API_KEY} = process.env // TODO hide clientside

export default I.Record({
  ...appConfig,
  MOVIEDB_API_KEY: MOVIEDB_API_KEY || '02ea0cf7b472414ac03c6b24e21f2e53',
})()
