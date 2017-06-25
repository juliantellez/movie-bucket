import Action from 'src/definitions/Action'

export const SET_MOVIE = 'SET_MOVIE'
export const SET_MOVIE_ERROR = 'SET_MOVIE_ERROR'

export default {
  setMovie: content => new Action({type: SET_MOVIE, content}),
  setMovieError: content => new Action({type: SET_MOVIE_ERROR, content}),
}
