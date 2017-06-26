import React from 'react'
import PropTypes from 'prop-types'

import classnames from 'classnames'

export default class Box extends React.Component {
  static propTypes = {
    inline: PropTypes.bool,
  }

  render () {
    const className = classnames('Box', this.props.className)
    const element = this.props.inline ? 'span' : 'div'
    return React.createElement(element, {
      className: className,
    }, this.props.children)
  }
}
