function BadRequestError(err) {
  this.statusCode = 400;
  this.message = err || 'Bad request';
  this.stack = (new Error()).stack;
}

BadRequestError.prototype = Object.create(Error.prototype);
BadRequestError.prototype.constructor = BadRequestError;

module.exports = BadRequestError;
