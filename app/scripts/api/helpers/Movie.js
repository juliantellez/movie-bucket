import Movie from 'src/definitions/Movie'

export default {
  getFromData (data) {
    return new Movie({
      id: data.get('id'),
      title: data.get('title'),
      adult: data.get('adult'),
      video: data.get('video'),
      overview: data.get('overview'),
      popularity: data.get('popularity'),
      voteCount: data.get('vote_count'),
      releaseDate: data.get('release_date'),
      voteAverage: data.get('vote_average'),
      originalTitle: data.get('original_title'),
      posterPath: data.get('poster_path'),
      backdropPath: data.get('backdrop_path'),
      genreIds: data.get('genre_ids'),
      originalLanguage: data.get('original_language'),
    })
  },
}
