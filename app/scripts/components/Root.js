import React from 'react'
import PropTypes from 'prop-types'

import 'src/utils/Formsy'

export default class Root extends React.Component {
  static childContextTypes = {
    store: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  }

  getChildContext () {

  }

  render () {
    return (
      <div className='Root'>
        todo
      </div>
    )
  }
}
