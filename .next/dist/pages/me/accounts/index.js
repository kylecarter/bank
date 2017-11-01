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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactBootstrap = require('react-bootstrap');

var _account = require('../../../components/accounts/account');

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Accounts = function (_React$Component) {
  (0, _inherits3.default)(Accounts, _React$Component);

  function Accounts() {
    (0, _classCallCheck3.default)(this, Accounts);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Accounts.__proto__ || (0, _getPrototypeOf2.default)(Accounts)).call(this));

    _this.state = {
      user: {
        name: 'Client Tester',
        address: '123 Some Street City, ST 00000'
      },
      accounts: [{
        number: 'xxx xxxxx xxxxx xxx',
        balance: '$1,763.21',
        type: 'Checking'
      }, {
        number: 'xxx xxxxx xxxxx xxx',
        balance: '$1,763.21',
        type: 'Savings'
      }, {
        number: 'xxx xxxxx xxxxx xxx',
        balance: '$1,763.21',
        type: 'Credit Card',
        limit: '$2,500.00'
      }]
    };
    return _this;
  }

  (0, _createClass3.default)(Accounts, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-2431331159'
      }, _react2.default.createElement(_style2.default, {
        styleId: '2431331159',
        css: ['body{background-color:rgba( 0,255,0,0.06 );}', '#sidebar{background-color:#fff;padding:15px;}', '#content{padding-top:5%;}', '@media (min-width:992px ){#sidebar{padding-top:5%;padding-bottom:50%;}}']
      }), _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-2431331159'
      }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge', className: 'jsx-2431331159'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', className: 'jsx-2431331159'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css', className: 'jsx-2431331159'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', className: 'jsx-2431331159'
      }), _react2.default.createElement('title', {
        className: 'jsx-2431331159'
      }, 'My Accounts | DUF Online')), _react2.default.createElement('article', {
        className: 'jsx-2431331159' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-2431331159' + ' ' + 'row'
      }, _react2.default.createElement('aside', { id: 'sidebar', className: 'jsx-2431331159' + ' ' + 'col-md-3'
      }, _react2.default.createElement('h2', {
        className: 'jsx-2431331159'
      }, this.state.user.name), _react2.default.createElement('address', {
        className: 'jsx-2431331159'
      }, this.state.user.address), _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', href: '/me/edit' }, 'Edit')), _react2.default.createElement('section', { id: 'content', className: 'jsx-2431331159' + ' ' + 'col-md-9'
      }, _react2.default.createElement('ul', {
        className: 'jsx-2431331159' + ' ' + 'list-unstyled'
      }, this.state.accounts.map(function (account, index) {
        return _react2.default.createElement(_account2.default, { key: index, type: account.type, number: account.number, balance: account.balance, limit: account.limit ? account.limit : false });
      }))))));
    }
  }]);

  return Accounts;
}(_react2.default.Component);

exports.default = Accounts;