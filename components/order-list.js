"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    isdoor: {
      type: Boolean,
      "default": false
    },
    list: Array
  },
  data: {},
  methods: {
    getRoute: function getRoute(id) {
      this.$emit('getRoute', id);
    }
  },
  onLoad: function onLoad() {}
}, {info: {"components":{"van-cell":{"path":"./lib/cell/index"}},"on":{"54-0":["tap"]}}, handlers: {'54-0': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.getRoute(item);
      })();
    
  }}}, models: {}, refs: undefined });