const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('responds with hi', async() => {
    const response = await request(app)
      .get('/');
    expect(response.text).toEqual('hi');
  });

  it('posts status code 200, request body, and plain text type and prints echo of hi', async() => {
    const response = await request(app)
      .post('/echo')
      .send('hi');
    expect(response.text).toEqual('hi');
  });
  
  it('returns HTML with red', async() => {
    const response = await request(app)
      .get('/red');
    expect(response.text).toEqual('<h1>red</h1>');
  });

  it('returns HTML with green', async() => {
    const response = await request(app)
      .get('/green');
    expect(response.text).toEqual('<h1>green</h1>');
  });

  it('returns HTML with blue', async() => {
    const response = await request(app)
      .get('/blue');
    expect(response.text).toEqual('<h1>blue</h1>');
  });


});
