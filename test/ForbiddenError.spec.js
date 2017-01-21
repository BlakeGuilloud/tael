const ForbiddenError = require('../lib/ForbiddenError');

describe('ForbiddenError', () => {

  it('should have a 403 status code', () => {
    expect(new ForbiddenError().statusCode).toBe(403);
  });

  it('should have a default message', () => {
    expect(new ForbiddenError().message).toBe('Forbidden');
  });

  it('should handle a message that was passed', () => {
    expect(new ForbiddenError('foobar').message).toBe('foobar');
  });
});
