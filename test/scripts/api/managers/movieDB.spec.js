import movieDBManager from 'src/api/managers/movieDB'

describe('movieDBManager', () => {
  it('movie search', done => {
    movieDBManager.movieSearch('the birds')
    .then(data => {
      expect(data).to.not.equal(null)
      expect(data).to.not.equal(undefined)
      done()
    })
  })
  it('multi search', done => {
    movieDBManager.multiSearch('liar liar')
    .then(data => {
      expect(data).to.not.equal(null)
      expect(data).to.not.equal(undefined)
      done()
    })
  })
  it('people search', done => {
    movieDBManager.personSearch('anthony hopkins')
    .then(data => {
      expect(data).to.not.equal(null)
      expect(data).to.not.equal(undefined)
      done()
    })
  })
})
