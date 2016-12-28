const BadRequestError = require('../lib/BadRequestError');

describe('BadRequestError', () => {
  it('should have a 400 status code', () => {
    expect(new BadRequestError().statusCode).toBe(400);
  });

  it('should have a default message', () => {
    expect(new BadRequestError().message).toBe('Bad request');
  });

  it('should handle a message that was passed', () => {
    expect(new BadRequestError('foobar').message).toBe('foobar');
  });
});
