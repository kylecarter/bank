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

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = _jquery2.default;

var Login = function (_React$Component) {
  (0, _inherits3.default)(Login, _React$Component);

  function Login() {
    (0, _classCallCheck3.default)(this, Login);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Login.__proto__ || (0, _getPrototypeOf2.default)(Login)).call(this));

    _this.state = {
      first_name: 'Client',
      last_name: 'Tester',
      email: 'client.tester@email.com',
      phone: 'xxx-xxx-xxxx',
      address: '123 Some Street',
      address2: '',
      city: 'City',
      state: 'ST',
      postal_code: 'xxxxx'
    };
    return _this;
  }

  (0, _createClass3.default)(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        className: 'jsx-3532584555'
      }, _react2.default.createElement(_style2.default, {
        styleId: '3157647462',
        css: ['body{background-color:rgba( 0,255,0,0.06 );}']
      }), _react2.default.createElement(_style2.default, {
        styleId: '3208354404',
        css: ['.row.jsx-3532584555{margin-bottom:21px;}', '.panel.jsx-3532584555{max-width:600px;margin:5% auto 0;}']
      }), _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0', className: 'jsx-3532584555'
      }), _react2.default.createElement('meta', { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge', className: 'jsx-3532584555'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css', className: 'jsx-3532584555'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css', className: 'jsx-3532584555'
      }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', className: 'jsx-3532584555'
      }), _react2.default.createElement('title', {
        className: 'jsx-3532584555'
      }, 'Login | DUF Online')), _react2.default.createElement('form', { action: '/me/accounts', method: 'get', className: 'jsx-3532584555' + ' ' + 'container'
      }, _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'row'
      }, _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-xs-12'
      }, _react2.default.createElement('section', {
        className: 'jsx-3532584555' + ' ' + 'panel panel-default'
      }, _react2.default.createElement('header', {
        className: 'jsx-3532584555' + ' ' + 'panel-heading'
      }, _react2.default.createElement('h1', {
        className: 'jsx-3532584555' + ' ' + 'panel-title'
      }, 'Login')), _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'panel-body'
      }, _react2.default.createElement('fieldset', {
        className: 'jsx-3532584555' + ' ' + 'row'
      }, _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-6'
      }, _react2.default.createElement('label', { htmlFor: 'first_name', className: 'jsx-3532584555'
      }, 'First Name'), _react2.default.createElement('input', { type: 'text', id: 'first_name', name: 'first_name', defaultValue: this.state.first_name, className: 'jsx-3532584555' + ' ' + 'form-control'
      })), _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-6'
      }, _react2.default.createElement('label', { htmlFor: 'last_name', className: 'jsx-3532584555'
      }, 'Last Name'), _react2.default.createElement('input', { type: 'text', id: 'last_name', name: 'last_name', defaultValue: this.state.last_name, className: 'jsx-3532584555' + ' ' + 'form-control'
      }))), _react2.default.createElement('fieldset', {
        className: 'jsx-3532584555' + ' ' + 'row'
      }, _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-12'
      }, _react2.default.createElement('label', { htmlFor: 'address', className: 'jsx-3532584555'
      }, 'Street Address'), _react2.default.createElement('input', { type: 'text', id: 'address', name: 'address', defaultValue: this.state.address, className: 'jsx-3532584555' + ' ' + 'form-control'
      }))), _react2.default.createElement('fieldset', {
        className: 'jsx-3532584555' + ' ' + 'row'
      }, _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-12'
      }, _react2.default.createElement('label', { htmlFor: '', className: 'jsx-3532584555'
      }, 'Apartment, Suite, Building, etc.'), _react2.default.createElement('input', { type: 'text', id: 'address2', name: 'address2', defaultValue: this.state.address2, className: 'jsx-3532584555' + ' ' + 'form-control'
      }))), _react2.default.createElement('fieldset', {
        className: 'jsx-3532584555' + ' ' + 'row'
      }, _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-4'
      }, _react2.default.createElement('label', { htmlFor: 'city', className: 'jsx-3532584555'
      }, 'City'), _react2.default.createElement('input', { type: 'text', id: 'city', name: 'city', defaultValue: this.state.city, className: 'jsx-3532584555' + ' ' + 'form-control'
      })), _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-4'
      }, _react2.default.createElement('label', { htmlFor: 'state', className: 'jsx-3532584555'
      }, 'State'), _react2.default.createElement('input', { type: 'text', id: 'state', name: 'state', defaultValue: this.state.state, className: 'jsx-3532584555' + ' ' + 'form-control'
      })), _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-4'
      }, _react2.default.createElement('label', { htmlFor: 'postal_code', className: 'jsx-3532584555'
      }, 'Postal Code'), _react2.default.createElement('input', { type: 'text', id: 'postal_code', name: 'postal_code', defaultValue: this.state.postal_code, className: 'jsx-3532584555' + ' ' + 'form-control'
      }))), _react2.default.createElement('fieldset', {
        className: 'jsx-3532584555' + ' ' + 'row'
      }, _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-12'
      }, _react2.default.createElement('label', { htmlFor: 'phone', className: 'jsx-3532584555'
      }, 'Phone'), _react2.default.createElement('input', { type: 'text', id: 'phone', name: 'phone', defaultValue: this.state.phone, className: 'jsx-3532584555' + ' ' + 'form-control'
      }))), _react2.default.createElement('fieldset', {
        className: 'jsx-3532584555' + ' ' + 'row'
      }, _react2.default.createElement('div', {
        className: 'jsx-3532584555' + ' ' + 'col-md-12'
      }, _react2.default.createElement('label', { htmlFor: 'email', className: 'jsx-3532584555'
      }, 'Email'), _react2.default.createElement('input', { type: 'email', id: 'email', name: 'email', defaultValue: this.state.email, className: 'jsx-3532584555' + ' ' + 'form-control'
      }))), _react2.default.createElement(_reactBootstrap.Button, { bsStyle: 'primary', type: 'submit', role: 'button' }, 'Update')))))));
    }
  }]);

  return Login;
}(_react2.default.Component);

exports.default = Login;