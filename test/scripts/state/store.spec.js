import store from 'src/state/store'

describe('store', () => {
  it('creates a store', () => {
    expect(store).to.have.keys('dispatch', 'getState', 'subscribe', 'unsubscribe')
    expect(store.getState()).to.be.an('object')
  })
})
