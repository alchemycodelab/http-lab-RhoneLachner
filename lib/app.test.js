const net = require('../lib/app');
const request = require('supertest');

describe('app routes', () => {
  it('responds with hi', async() => {
    const response = await request(net)
      .get('/');

    expect(response.text).toEqual('hi');
  });
});
