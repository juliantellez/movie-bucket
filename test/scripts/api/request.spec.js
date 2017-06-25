import superagent from 'superagent'
import superagentPromise from 'superagent-promise'

import request from 'src/api/request'
import config from 'src/config'

export const makeRequest = superagentPromise(superagent, Promise)

describe('API Request', () => {
  it('GET request', done => {
    request('get', 'https://api.themoviedb.org/3', 'search', 'multi')
    .query({ api_key: config.get('MOVIEDB_API_KEY') })
    .query({ query: 'test' })
    .then(data => {
      expect(data.status).to.equal(200)
      done()
    })
  })
})
