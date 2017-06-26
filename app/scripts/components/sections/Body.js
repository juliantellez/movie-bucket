import React from 'react'
import PropTypes from 'prop-types'

const cls = elem => elem ? `Body-${elem}` : 'Body'

export default class Header extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
    actions: PropTypes.object,
  }

  updateState = () => {
    const {store} = this.context
    console.log(store.getState())
  }

  componentWillMount () {
    const {store} = this.context
    store.subscribe(this.updateState)
  }

  componentWillUnMount () {
    const {store} = this.context
    store.unsubscribe(this.updateState)
  }
  render () {
    return (
      <div className={cls()}>
        BODY
      </div>
    )
  }
}
