import React from 'react'
import I from 'immutable'
import PropTypes from 'prop-types'

const DIRECTION = new I.Record({
  FORWARD: 'forward',
  BACK: 'back',
})()

export default class TypeWriter extends React.Component {
  static propTypes = {
    list: PropTypes.array,
    speed: PropTypes.number,
  }

  static defaultProps = {
    list: [
      'eg. Your favorite film',
      'eg. An actor',
      'or simply anything',
    ],
  }

  state = {
    text: this.props.list[0],
    direction: DIRECTION.FORWARD,
    arrayIndex: 0,
  }

  componentDidMount () {
    setTimeout(() => this._renderText(), 2000)
  }

  _updateText () {
    const {list} = this.props
    const {direction, arrayIndex} = this.state
    const currentElem = list[arrayIndex]

    this.setState(prevState => {
      let index = prevState.text.length
      index = direction === DIRECTION.FORWARD ? index + 1 : index - 1
      return {
        text: currentElem.substring(0, index),
      }
    })
  }

  _updateIndex () {
    const {list} = this.props
    this.setState(prevState => {
      const {arrayIndex} = prevState
      return {
        arrayIndex: arrayIndex < list.length - 1 ? arrayIndex + 1 : 0,
      }
    })
  }

  _renderText () {
    let {direction, text, arrayIndex} = this.state
    const currentElem = this.props.list[arrayIndex]
    const index = text.length

    let timeout
    let updateFunc = this._updateText.bind(this)
    if (direction === DIRECTION.BACK) {
      if (index <= 0) {
        direction = DIRECTION.FORWARD
        updateFunc = this._updateIndex.bind(this)
      }
    } else {
      if (index >= currentElem.length) {
        direction = DIRECTION.BACK
        timeout = 1000
        updateFunc = () => {}
      }
    }

    this.setState({direction}, () => {
      updateFunc()
      if (!timeout) {
        timeout = direction === DIRECTION.FORWARD ? 100 : 60
      }
      setTimeout(() => this._renderText(), timeout)
    })
  }

  render () {
    return (
      <span className='TypeWriter'>{this.state.text}</span>
    )
  }
}
