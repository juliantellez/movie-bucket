import I from 'immutable'

import MovieHelper from './Movie'
import Movies from 'src/definitions/Movies'

export default {
  getFromData (data) {
    return new Movies({
      page: data.get('page'),
      results: data.get('results', I.List()).map(MovieHelper.getFromData),
      totalResults: data.get('total_results'),
      totalPages: data.get('total_pages'),
    })
  },
}
