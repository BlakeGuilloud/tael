class InternalError {
  constructor (err) {
    this.statusCode = 500;
    this.message = err || 'Internal server error';
    this.stack = (new Error()).stack;
  }
}

InternalError.prototype = Object.create(Error.prototype);
InternalError.prototype.constructor = InternalError;

module.exports = InternalError;
