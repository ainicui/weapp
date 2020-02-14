"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    list: [{
      name: '王医生',
      state: 1,
      time: '08-08/星期一  上午08:30',
      money: '-30.00'
    }, {
      name: '王医生',
      postName: 0,
      time: '08-08/星期一  上午08:30',
      money: '-10.00'
    }]
  }
}, {info: {"components":{"van-cell":{"path":"./../components/lib/cell/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });