import Action from 'src/definitions/Action'
import {
  SET_MOVIES,
} from 'src/state/actions/movies'

const setMovies = action => {
  return action.get('content')
}

export default (state = {}, action = new Action()) => {
  switch (action.get('type')) {
    case SET_MOVIES: return setMovies(action)
    default: return state
  }
}
