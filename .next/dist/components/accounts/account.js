'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ = _underscore2.default;

var Account = function (_React$Component) {
  (0, _inherits3.default)(Account, _React$Component);

  function Account(props) {
    (0, _classCallCheck3.default)(this, Account);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Account.__proto__ || (0, _getPrototypeOf2.default)(Account)).call(this));

    _this.state = _.extend({}, props);
    return _this;
  }

  (0, _createClass3.default)(Account, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('li', { className: 'panel panel-primary' }, _react2.default.createElement('header', { className: 'panel-heading' }, _react2.default.createElement('h3', { className: 'panel-title' }, this.state.type), _react2.default.createElement('strong', null, 'Accoung number: ', this.state.number)), _react2.default.createElement('div', { className: 'panel-body' }, this.state.limit ? _react2.default.createElement('p', null, 'Credit Limit: ', this.state.limit) : '', _react2.default.createElement('p', null, 'Balance: ', this.state.balance), _react2.default.createElement('a', { href: '/me/transactions' }, 'See Transactions')));
    }
  }]);

  return Account;
}(_react2.default.Component);

exports.default = Account;