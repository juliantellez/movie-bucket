import chai from 'chai'
import sinon from 'sinon'
import React from 'react'
import chaiReact from 'chai-react'
import {mount, shallow, render} from 'enzyme'
import TestUtils from 'react-dom/test-utils'

import _ from 'lodash'

function defer (todo) {
  return new Promise((resolve, reject) => {
    _.defer(() => {
      todo()
      resolve()
    })
  })
}

global.React = React
global.TestUtils = TestUtils

global.sinon = sinon
global.chai = chai
global.chai.use((chai, utils) => chaiReact(chai, utils, React, TestUtils))
global.expect = global.chai.expect

global.mount = mount
global.render = render
global.shallow = shallow

global.defer = defer
