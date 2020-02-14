"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _http = _interopRequireDefault(require('./../service/http.js'));

var _config = _interopRequireDefault(require('./../service/config.js'));

var _x = require('./../vendor.js')(5);

var _store = _interopRequireDefault(require('./../store/index.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  data: {},
  computed: {},
  methods: _objectSpread({}, (0, _x.mapActions)(['getUser']), {
    bindGetUserInfo: function bindGetUserInfo(e) {
      console.log(e);
      var userInfo = e.$wx.detail[1].userInfo;

      var _this = this;

      wx.login({
        success: function success(res) {
          if (res.code) {
            //发起网络请求
            wx.request({
              url: _config["default"].url.authorization,
              method: 'POST',
              header: {
                'content-type': 'application/json' // 默认值

              },
              data: {
                code: res.code,
                name: userInfo.nickName,
                avatar: userInfo.avatarUrl
              },
              success: function success(res) {
                console.log(res);
                var data = res.data;

                if (data.code == 200) {
                  _this.getUser(data.data);

                  wx.setStorage({
                    key: "user_info",
                    data: data.data,
                    success: function success() {
                      wx.switchTab({
                        url: '/pages/home'
                      });
                    }
                  });
                } else {
                  wx.showToast({
                    title: res.data.message,
                    icon: 'none',
                    duration: 2000
                  });
                }
              }
            });
          } else {
            console.log('登录失败！' + res.errMsg);
          }
        }
      });
    }
  }),
  onLoad: function onLoad() {
    console.log(this);
  }
}, {info: {"components":{"van-button":{"path":"./../components/lib/button/index"}},"on":{"23-0":["getuserinfo"]}}, handlers: {'23-0': {"getuserinfo": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.bindGetUserInfo($event);
      })();
    
  }}}, models: {}, refs: undefined });