import { assert } from 'chai'

import { createMongoDbUrl } from '../src'

describe('health-check module', () => {
  it('should export health-check as function with 1 param', () => {
    assert.strictEqual(typeof createMongoDbUrl, 'function')
    assert.strictEqual(createMongoDbUrl.length, 1)
  })

  it('should return the full url when i pass the config object', () => {
    const murl = createMongoDbUrl({
      username: 'imed',
      password: 'my-pwd',
      hostname: 'my-host.domain.xyz',
      port: 12345,
      database: 'my-db'
    })

    assert(murl === 'mongodb://imed:my-pwd@my-host.domain.xyz:12345/my-db')
  })

  it('should return the url with required field only when i pass the config object', () => {
    const murl = createMongoDbUrl({
      hostname: 'my-host.local.xyz',
      port: 12345,
      database: 'my-db'
    })
  
    assert(murl === 'mongodb://my-host.local.xyz:12345/my-db')
  })

  it('should stringify the options and add it to the url', () => {
    const murl = createMongoDbUrl({
      username: 'imed',
      password: 'my-pwd',
      hostname: 'my-host.domain.xyz',
      port: 12345,
      database: 'my-db',
      options: {
        retryWrites: true
      }
    })

    assert(murl === 'mongodb://imed:my-pwd@my-host.domain.xyz:12345/my-db?retryWrites=true')
  })
})
