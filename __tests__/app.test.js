const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it.only('responds with hi', async() => {
    const response = await request(app)
      .get('/');
    expect(response.text).toEqual('hi');
  });


  
});
