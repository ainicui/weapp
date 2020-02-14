"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _x = _interopRequireDefault(require('./../vendor.js')(5));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = new _x["default"].Store({
  state: {
    counter: 0,
    userInfo: null,
    orderDetail: null
  },
  mutations: {
    getUser: function getUser(state, userInfo) {
      console.log('info', userInfo);
      state.userInfo = userInfo;
    },
    getOrder: function getOrder(state, detail) {
      state.orderDetail = detail;
    },
    increment: function increment(state) {
      state.counter++;
    },
    decrement: function decrement(state) {
      state.counter--;
    }
  },
  actions: {
    getUser: function getUser(_ref, userInfo) {
      var commit = _ref.commit;
      commit('getUser', userInfo);
    },
    getOrder: function getOrder(_ref2, detail) {
      var commit = _ref2.commit;
      commit('getOrder', detail);
    },
    increment: function increment(_ref3) {
      var commit = _ref3.commit;
      commit('increment');
    },
    decrement: function decrement(_ref4) {
      var commit = _ref4.commit;
      commit('decrement');
    },
    incrementAsync: function incrementAsync(_ref5) {
      var commit = _ref5.commit;
      setTimeout(function () {
        commit('increment');
      }, 1000);
    }
  }
});

exports["default"] = _default;