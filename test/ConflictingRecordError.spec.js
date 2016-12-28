const ConflictingRecordError = require('../lib/ConflictingRecordError');

describe('ConflictingRecordError', () => {

  it('should have a 409 status code', () => {
    expect(new ConflictingRecordError().statusCode).toBe(409);
  });

  it('should have a default message', () => {
    expect(new ConflictingRecordError().message).toBe('Conflict');
  });

  it('should handle a message that was passed', () => {
    expect(new ConflictingRecordError('foobar').message).toBe('foobar');
  });
});
