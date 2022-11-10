<<<<<<< HEAD
=======
// test.js
>>>>>>> f9e48dd3a7f62865364a7cb81114f0f8cdaba3f5
const { spec } = require('pactum');

it('should get a response with status code 200', async () => {
  await spec()
    .get('http://httpbin.org/status/200')
    .expectStatus(200);
});
