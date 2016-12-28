const UnauthorizedError = require('../lib/UnauthorizedError');

describe('UnauthorizedError', () => {

  it('should have a 401 status code', () => {
    expect(new UnauthorizedError().statusCode).toBe(401);
  });

  it('should have a default message', () => {
    expect(new UnauthorizedError().message).toBe('Unauthorized');
  });

  it('should handle a message that was passed', () => {
    expect(new UnauthorizedError('foobar').message).toBe('foobar');
  });
});
