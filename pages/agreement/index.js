"use strict";

var _http = _interopRequireDefault(require('./../../service/http.js'));

var _config = _interopRequireDefault(require('./../../service/config.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// pages/lab/lab.js
var WxParse = require('./../../assets/wxParse/wxParse.js');

Page({
  data: {},
  onLoad: function onLoad(options) {
    var _this = this;

    var that = this;
    wx.showLoading({
      title: '加载中'
    });

    _http["default"].request(_config["default"].url.get_agreement, {}, 'GET').then(function (res) {
      wx.hideLoading();
      WxParse.wxParse('article', 'html', res.data.content, _this, 5);
    })["catch"](function (err) {
      wx.hideLoading();
    });
  },
  onReady: function onReady() {// 页面渲染完成
  },
  onShow: function onShow() {// 页面显示
  },
  onHide: function onHide() {// 页面隐藏
  },
  onUnload: function onUnload() {// 页面关闭
  }
});