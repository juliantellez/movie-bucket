import Action from 'src/definitions/Action'

export const SET_MOVIES = 'SET_MOVIE'

export default {
  setMovies: content => new Action({type: SET_MOVIES, content}),
}
