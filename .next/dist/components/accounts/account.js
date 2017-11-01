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

var _jsxFileName = '/mnt/d/Sites/bank/components/accounts/account.js';


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
      return _react2.default.createElement('li', { className: 'panel panel-primary', __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement('header', { className: 'panel-heading', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('h3', { className: 'panel-title', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, this.state.type), _react2.default.createElement('strong', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, 'Accoung number: ', this.state.number)), _react2.default.createElement('div', { className: 'panel-body', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, this.state.limit ? _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, 'Credit Limit: ', this.state.limit) : '', _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, 'Balance: ', this.state.balance), _react2.default.createElement('a', { href: '/me/transactions', __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, 'See Transactions')));
    }
  }]);

  return Account;
}(_react2.default.Component);

exports.default = Account;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3VudHMvYWNjb3VudC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJ1bmRlcnNjb3JlIiwiXyIsIkFjY291bnQiLCJwcm9wcyIsInN0YXRlIiwiZXh0ZW5kIiwidHlwZSIsIm51bWJlciIsImxpbWl0IiwiYmFsYW5jZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7OztBQUVQLElBQUEsQUFBTSxBQUFJOztJLEFBRVc7bUNBRW5COzttQkFBQSxBQUFhLE9BQVE7d0NBQUE7O2tJQUVuQjs7VUFBQSxBQUFLLFFBQVEsRUFBQSxBQUFFLE9BQUYsQUFBVSxJQUZKLEFBRW5CLEFBQWEsQUFBYztXQUM1Qjs7Ozs7NkJBRVEsQUFDUDs2QkFBUSxjQUFBLFFBQUksV0FBSixBQUFjO29CQUFkO3NCQUFBLEFBQ047QUFETTtPQUFBLGtCQUNOLGNBQUEsWUFBUSxXQUFSLEFBQWtCO29CQUFsQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxRQUFJLFdBQUosQUFBYztvQkFBZDtzQkFBQSxBQUE4QjtBQUE5QjtjQUE4QixBQUFLLE1BRHJDLEFBQ0UsQUFBeUMsQUFDekMsdUJBQUEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBQTBCLHlCQUFBLEFBQUssTUFIM0IsQUFDTixBQUVFLEFBQXFDLEFBRXZDLDBCQUFBLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDSTtBQURKO2NBQ0ksQUFBSyxNQUFMLEFBQVcsd0JBQVEsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLE9BQUEsRUFBbUIsdUJBQUEsQUFBSyxNQUEzQyxBQUFtQixBQUE4QixTQURyRCxBQUNtRSxBQUNqRSxvQkFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FBYyxrQkFBQSxBQUFLLE1BRnJCLEFBRUUsQUFBeUIsQUFDekIsMEJBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQTtBQUFBO1NBUkosQUFBUSxBQUtOLEFBR0UsQUFHTDs7Ozs7RUFuQmtDLGdCQUFNLEE7O2tCQUF0QixBIiwiZmlsZSI6ImFjY291bnQuanMiLCJzb3VyY2VSb290IjoiL21udC9kL1NpdGVzL2JhbmsifQ==