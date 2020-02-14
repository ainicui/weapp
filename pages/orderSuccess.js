"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    successInfo: null
  },
  methods: {},
  onLoad: function onLoad(option) {
    this.successInfo = this.$app.$options.globalData.successInfo;
    console.log(this.$app.$options.globalData.successInfo);
    console.log(this.successInfo);
  }
}, {info: {"components":{"van-cell":{"path":"./../components/lib/cell/index"}},"on":{}}, handlers: {}, models: {}, refs: undefined });