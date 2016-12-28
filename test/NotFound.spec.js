const NotFoundError = require('../lib/NotFoundError');

describe('NotFoundError', () => {

  it('should have a 404 status code', () => {
    expect(new NotFoundError().statusCode).toBe(404);
  });

  it('should have a default message', () => {
    expect(new NotFoundError().message).toBe('Not found');
  });

  it('should handle a message that was passed', () => {
    expect(new NotFoundError('foobar').message).toBe('foobar');
  });
});
