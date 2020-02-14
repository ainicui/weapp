"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _http = _interopRequireDefault(require('./../service/http.js'));

var _config = _interopRequireDefault(require('./../service/config.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    content: ''
  },
  methods: {
    submit: function submit() {
      if (!this.content) return; // feedback

      _http["default"].request(_config["default"].url.feedback, {
        content: this.content
      }).then(function (res) {
        if (res.code == 200) {
          console.log(res);

          _core["default"].wx.showToast(res.data, 'success').then(function () {
            wx.navigateBack(-1);
          });
        } else {
          _core["default"].wx.showToast('系统异常，请稍后重试', 'none');
        }
      })["catch"](function (err) {
        _core["default"].wx.showToast('系统异常，请稍后重试', 'none');
      });
    }
  },
  onLoad: function onLoad(option) {
    _core["default"].wx.showToast('系统异常，请稍后重试', 'none');
  }
}, {info: {"components":{"van-button":{"path":"./../components/lib/button/index"}},"on":{"22-0":["tap"]}}, handlers: {'22-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event);
      })();
    
  }}}, models: {'3': {
      type: "input",
      expr: "content",
      handler: function set ($v) {
      var _vm=this;
        _vm.content = $v;
      
    }
    }}, refs: undefined });