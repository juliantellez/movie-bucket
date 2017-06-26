import React from 'react'
import PropTypes from 'prop-types'

import Header from './sections/Header'
import Body from './sections/Body'

import store from 'src/state/store'
import actions from 'src/state/actions'

export default class Root extends React.Component {
  static childContextTypes = {
    store: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  }

  getChildContext () {
    return {
      store,
      actions,
    }
  }

  render () {
    return (
      <div className='Root'>
        <Header />
        <Body />
      </div>
    )
  }
}
