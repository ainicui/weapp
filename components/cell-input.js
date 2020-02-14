"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    valueClass: String,
    rightIcon: String,
    value: String,
    title: String,
    isLink: {
      type: Boolean,
      "default": false
    }
  },
  data: {},
  methods: {
    toTel: function toTel() {
      this.$emit('to-tel');
    }
  },
  onLoad: function onLoad() {}
}, {info: {"components":{"van-cell":{"path":"./lib/cell/index"}},"on":{}}, handlers: {'53-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toTel($event);
      })();
    
  }}}, models: {}, refs: undefined });