import I from 'immutable'

export default class Action extends I.Record({
  type: '',
  content: I.Map(),
}) {}
