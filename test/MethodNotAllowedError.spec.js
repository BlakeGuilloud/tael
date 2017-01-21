const MethodNotAllowedError = require('../lib/MethodNotAllowedError');

describe('MethodNotAllowedError', () => {

  it('should have a 405 status code', () => {
    expect(new MethodNotAllowedError().statusCode).toBe(405);
  });

  it('should have a default message', () => {
    expect(new MethodNotAllowedError().message).toBe('Method not allowed');
  });

  it('should handle a message that was passed', () => {
    expect(new MethodNotAllowedError('foobar').message).toBe('foobar');
  });
});
