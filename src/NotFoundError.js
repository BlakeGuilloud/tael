class NotFoundError {
  constructor(err) {
    this.statusCode = 404;
    this.message = err || 'Not found';
    this.stack = (new Error()).stack;
  }
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

module.exports = NotFoundError;
