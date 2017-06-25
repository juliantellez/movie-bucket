import Action from 'src/definitions/Action'
import {
  SET_MOVIE,
  SET_MOVIE_ERROR,
} from 'src/state/actions'

const setMovie = action => {
  return action.get('content')
}

const setMovieError = action => {
  return action.get('content')
}

export default (state = {}, action = new Action()) => {
  switch (action.get('type')) {
    case SET_MOVIE: return setMovie(action)
    case SET_MOVIE_ERROR: return setMovieError(action)
    default: return state
  }
}
