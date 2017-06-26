import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import {HOC as FormsyElement} from 'formsy-react'

const cls = elem => `Input-${elem}`

class Input extends React.Component {
  static propTypes = {
    setValue: PropTypes.func,
    getValue: PropTypes.func,
    textArea: PropTypes.bool,
    placeHolder: PropTypes.node,
    name: PropTypes.string.isRequired,
  }

  state = {
    value: '',
  }

  _onChange (e) {
    this.props.setValue(e.currentTarget.value)
  }

  _getValue () {
    return this.props.getValue() || this.state.value
  }

  _getInput () {
    const element = this.props.textArea ? 'textarea' : 'input'
    return React.createElement(element, {
      className: cls('field'),
      value: this._getValue(),
      onChange: this._onChange.bind(this),
    })
  }

  _getPlaceHolder () {
    const length = this._getValue().length
    let display = 'block'
    if (length > 0) {
      display = 'none'
    }
    return (
      <div className={cls('placeholder')} style={{display}}>
        {this.props.placeHolder}
      </div>
    )
  }

  render () {
    const {name} = this.props
    const className = classnames('Input', {
      [`Input-${name}`]: name,
    }, this.props.className)
    return (
      <div className={className} >
        {this._getPlaceHolder()}
        {this._getInput()}
      </div>
    )
  }
}

export default FormsyElement(Input)
