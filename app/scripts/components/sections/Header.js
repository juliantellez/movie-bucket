import _ from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Formsy from 'formsy-react'

import Input from '../helpers/Input'
import TypeWriter from '../helpers/TypeWriter'

import movieDBManager from 'src/api/managers/movieDB'

const cls = elem => elem ? `Header-${elem}` : 'Header'

export default class Header extends React.Component {
  static contextTypes = {
    store: PropTypes.object,
    actions: PropTypes.object,
  }

  _onChange = state => this.setState(state)

  _onSubmit (input) {
    const {store, actions} = this.context
    movieDBManager.movieSearch(input.wordsInput)
    .then(data => {
      store.dispatch(actions.movies.setMovies(data))
    })
  }

  render () {
    return (
      <div className={cls()}>
        <div className={cls('title')}>Movie Bucket</div>
        <Formsy.Form
          className={cls('form')}
          onChange={this._onChange}
          onSubmit={this._onSubmit.bind(this)}
        >
          <Input
            textArea
            name='wordsInput'
            className={cls('input')}
            placeHolder={<TypeWriter />}
          />
          <button className={cls('button')}>Show Me</button>
        </Formsy.Form>
      </div>
    )
  }
}
