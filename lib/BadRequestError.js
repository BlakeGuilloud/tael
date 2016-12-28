'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BadRequestError = function BadRequestError(err) {
  (0, _classCallCheck3.default)(this, BadRequestError);

  this.statusCode = 400;
  this.message = err || 'Bad request';
  this.stack = new Error().stack;
};

BadRequestError.prototype = (0, _create2.default)(Error.prototype);
BadRequestError.prototype.constructor = BadRequestError;

module.exports = BadRequestError;