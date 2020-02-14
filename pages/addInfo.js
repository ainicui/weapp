"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    phone: '',
    // 手机号
    name: '',
    // 姓名
    smscode: '' // 验证码

  },
  computed: {
    notNull: function notNull() {
      if (this.phone && this.name && this.smscode) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    submit: function submit() {
      console.log(wx);
      if (!this.notNull) return;
      var params = {
        name: this.name,
        phone: this.phone,
        smscode: this.smscode
      };
      this.$app.$options.globalData.info = params;
      wx.navigateBack(-1);
    }
  },
  onLoad: function onLoad() {
    var info = this.$app.$options.globalData.info;

    if (info) {
      this.name = info.name;
      this.phone = info.phone;
    }
  }
}, {info: {"components":{"van-cell":{"path":"./../components/lib/cell/index"},"van-cell-group":{"path":"./../components/lib/cell-group/index"},"van-button":{"path":"./../components/lib/button/index"}},"on":{"12-0":["tap"]}}, handlers: {'12-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event);
      })();
    
  }}}, models: {'0': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'1': {
      type: "input",
      expr: "phone",
      handler: function set ($v) {
      var _vm=this;
        _vm.phone = $v;
      
    }
    },'2': {
      type: "input",
      expr: "smscode",
      handler: function set ($v) {
      var _vm=this;
        _vm.smscode = $v;
      
    }
    }}, refs: undefined });