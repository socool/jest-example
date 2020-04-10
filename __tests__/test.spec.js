'use strict';

const assert = require('assert');
const frisby = require('../src/frisby');
const mocks = require('./fixtures/http_mocks');

const testHost = 'http://localhost:4010';

describe('Frisby', function() {

  it('Test expectStatus works as... well, expected', function(doneFn) {
    mocks.use(['getUser1']);

    frisby.post(testHost + '/user')
      .expect('status', 400)      
      .done(doneFn);
  });

  it('test', () => {
    return frisby.setup({
      request: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }, true)
      .post(testHost + '/user', {
        body: { id: 123 }
      })
      .expect('status', 200);
  });

  it('test title', () => {
    return frisby.setup({
      request: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    }, true)
      .post(testHost + '/user')
      .expect('status', 400);
  });

  
});