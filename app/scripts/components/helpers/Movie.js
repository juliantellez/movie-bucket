import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'

import MovieDefinition from 'src/definitions/Movie'

import FlipCard from 'src/components/helpers/FlipCard'

const cls = elem => elem ? `Movie-${elem}` : 'Movie'

export default class Movie extends React.Component {
  static propTypes = {
    data: PropTypes.instanceOf(MovieDefinition).isRequired,
  }

  _getLogo () {
    const {data} = this.props
    const logo = data.get('posterPath') || data.get('backdropPath')
    if (!logo) {
      return null
    }
    const src = `https://image.tmdb.org/t/p/w500/${logo}`
    return (
      <div className={cls('logo-wrapper')}>
        <img
          src={src}
          className={cls('logo')}
          alt={data.get('title')}
        />
      </div>
    )
  }

  _getFront () {
    const {data} = this.props
    return (
      <div className={cls('front')}>
        {this._getLogo()}
        <div className={cls('title')}>{data.get('title')}</div>
      </div>
    )
  }

  _getBack () {
    const {data} = this.props
    return (
      <div className={cls('back')}>
        <div className={cls('overview')}>{data.get('overview')}</div>
      </div>
    )
  }

  render () {
    return (
      <FlipCard className={cls()}
        front={this._getFront()}
        back={this._getBack()}
      />
    )
  }
}
