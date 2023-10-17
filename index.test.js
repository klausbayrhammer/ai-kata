//This file contains integration tests for the webserver

const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
    it('responds with Hello World!', (done) => {
        request(app(3003)).get('/').expect('Hello World!', done);
    });
});

//This test tests the create user route
describe('POST /users', () => {
    it('responds with Creating a new user', (done) => {
        request(app(3002)).post('/users').expect('Creating a new user', done);
    });
});

// A test that sets up the server on a different port and tests the root route
describe('GET /', () => {
    it('responds with Hello World!', (done) => {
        request(app(3001)).get('/').expect('Hello World!', done);
    });
}   );
