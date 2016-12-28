'use strict';

var _create = require('babel-runtime/core-js/object/create');

var _create2 = _interopRequireDefault(_create);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InternalError = function InternalError(err) {
  (0, _classCallCheck3.default)(this, InternalError);

  this.statusCode = 500;
  this.message = err || 'Internal server error';
  this.stack = new Error().stack;
};

InternalError.prototype = (0, _create2.default)(Error.prototype);
InternalError.prototype.constructor = InternalError;

module.exports = InternalError;