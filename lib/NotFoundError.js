'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundError = function NotFoundError(err) {
  (0, _classCallCheck3.default)(this, NotFoundError);

  this.statusCode = 404;
  this.message = err || 'Not found';
  this.stack = new Error().stack;
};

NotFoundError.prototype = (0, _create2.default)(Error.prototype);
NotFoundError.prototype.constructor = NotFoundError;

module.exports = NotFoundError;