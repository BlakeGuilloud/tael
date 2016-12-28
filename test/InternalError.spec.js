const InternalError = require('../lib/InternalError');

describe('InternalError', () => {

  it('should have a 500 status code', () => {
    expect(new InternalError().statusCode).toBe(500);
  });

  it('should have a default message', () => {
    expect(new InternalError().message).toBe('Internal server error');
  });

  it('should handle a message that was passed', () => {
    expect(new InternalError('foobar').message).toBe('foobar');
  });
});
