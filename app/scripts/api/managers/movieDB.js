import _ from 'lodash'
import I from 'immutable'

import MoviesHelper from '../helpers/Movies'

import request from 'src/api/request'
import config from 'src/config'

const searchRequest = (method, query, page = 1) => {
  const onGoingRequests = {}
  const CACHE_DURATION = 60000
  const requestKey = JSON.stringify({method, query, page})

  if (!_.isNil(onGoingRequests[requestKey])) {
    return onGoingRequests[requestKey]
  }

  onGoingRequests[requestKey] = request('get', 'https://api.themoviedb.org/3', 'search', method)
  .query({api_key: config.get('MOVIEDB_API_KEY')})
  .query({query})
  .query({page})
  .catch(e => {
    delete onGoingRequests[requestKey]
    Promise.reject(e)
  })
  .then(res => {
    setTimeout(() => { delete onGoingRequests[requestKey] }, CACHE_DURATION)
    return I.fromJS(res.body)
  })

  return onGoingRequests[requestKey]
}

export default {
  movieSearch: (query, page) => searchRequest('movie', query, page).then(MoviesHelper.getFromData),
  multiSearch: (query, page) => searchRequest('multi', query, page),
  personSearch: (query, page) => searchRequest('person', query, page),
}
