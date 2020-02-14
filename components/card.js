"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    isHome: {
      type: Boolean,
      "default": false
    },
    detail: Object
  },
  methods: {
    getRoute: function getRoute(id) {
      wx.navigateTo({
        url: "/pages/doctorDetail?id=".concat(id)
      });
    }
  }
}, {info: {"components":{"van-button":{"path":"./lib/button/index"}},"on":{"51-0":["tap"]}}, handlers: {'51-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getRoute(_vm.detail.id);
      })();
    
  }}}, models: {}, refs: undefined });