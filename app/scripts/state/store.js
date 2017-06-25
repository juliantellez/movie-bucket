import _ from 'lodash'
import reducers from 'src/state/reducers'

const createStore = (reducer, currentState) => {
  let state = currentState || {}
  let listeners = []

  const getState = () => _.cloneDeep(state)
  const subscribe = listener => listeners.push(listener)
  const unsubscribe = listener => listeners.filter(l => l !== listener)

  const dispatch = action => {
    var prevState = getState()
    state = reducer(getState(), action)
    listeners.forEach(listener => listener(state, prevState))
  }

  return {
    getState,
    dispatch,
    subscribe,
    unsubscribe,
  }
}

export default createStore(reducers)
