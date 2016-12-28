class ConflictingRecordError {
  constructor (err) {
    this.statusCode = 409;
    this.message = err || 'Conflict';
    this.stack = (new Error()).stack;
  }
}

ConflictingRecordError.prototype = Object.create(Error.prototype);
ConflictingRecordError.prototype.constructor = ConflictingRecordError;

module.exports = ConflictingRecordError;
