function UnauthorizedError(err) {
  this.statusCode = 401;
  this.message = err || 'Unauthorized';
  this.stack = (new Error()).stack;
}

UnauthorizedError.prototype = Object.create(Error.prototype);
UnauthorizedError.prototype.constructor = UnauthorizedError;

module.exports = UnauthorizedError;
