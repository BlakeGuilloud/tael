class ForbiddenError {
  constructor (err) {
    this.statusCode = 403;
    this.message = err || 'Forbidden';
    this.stack = (new Error()).stack;
  }
}

ForbiddenError.prototype = Object.create(Error.prototype);
ForbiddenError.prototype.constructor = ForbiddenError;

module.exports = ForbiddenError;
