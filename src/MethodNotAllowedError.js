class MethodNotAllowedError {
  constructor (err) {
    this.statusCode = 405;
    this.message = err || 'Method not allowed';
    this.stack = (new Error()).stack;
  }
}

MethodNotAllowedError.prototype = Object.create(Error.prototype);
MethodNotAllowedError.prototype.constructor = MethodNotAllowedError;

module.exports = MethodNotAllowedError;
