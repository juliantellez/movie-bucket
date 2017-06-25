import I from 'immutable'

export default class Movie extends I.Record({
  id: 0,
  title: '',
  adult: false,
  video: false,
  overview: '',
  popularity: 0,
  voteCount: 0.0,
  releaseDate: '',
  voteAverage: 0.0,
  originalTitle: '',
  posterPath: null,
  backdropPath: null,
  genreIds: I.List(),
  originalLanguage: '',
}) {}
