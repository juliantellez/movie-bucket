import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import Box from 'src/components/helpers/Box'
import Movie from 'src/components/helpers/Movie'

const cls = elem => elem ? `Body-${elem}` : 'Body'

export default class Body extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
    actions: PropTypes.object,
  }

  state = {}

  updateState = () => {
    const {store} = this.context
    const {movies} = store.getState()
    this.setState({movies})
  }

  componentWillMount () {
    const {store} = this.context
    store.subscribe(this.updateState)
  }

  componentWillUnMount () {
    const {store} = this.context
    store.unsubscribe(this.updateState)
  }

  _canRender () {
    const {movies} = this.state
    return !_.isNil(movies)
  }

  _getContent () {
    const {movies} = this.state
    return movies.get('results').map((movie, key) => <Movie data={movie} key={key}/>)
  }

  render () {
    if (!this._canRender()) {
      return null
    }
    const {movies} = this.state
    return (
      <Box className={cls()}>
        <div className={cls('title')}>Results: {movies.get('totalResults')}</div>
        <div className={cls('content')}>
          {this._getContent()}
        </div>
      </Box>
    )
  }
}
