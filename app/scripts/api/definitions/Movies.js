import I from 'immutable'

export default class Movies extends I.Record({
  page: 0,
  results: I.List(),
  totalResults: 0,
  totalPages: 0,
}) {}
