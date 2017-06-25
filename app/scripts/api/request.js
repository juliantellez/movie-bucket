import _ from 'lodash'
import I from 'immutable'
import superagent from 'superagent'
import superagentPromise from 'superagent-promise'

export const makeRequest = superagentPromise(superagent, Promise)

export default (httpMethod, url, manager, method) => {
  return makeRequest[httpMethod](`${url}/${manager}/${method}/`)
}
