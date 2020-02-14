"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _http = _interopRequireDefault(require('./../service/http.js'));

var _config = _interopRequireDefault(require('./../service/config.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    page: 1,
    limit: 10,
    list: [],
    tel: '400-8888-888',
    NoData: false
  },
  methods: {
    doorList: function doorList(type) {
      var _this2 = this;

      if (this.page == 1 && !type) wx.showLoading({
        title: '加载中'
      });

      _http["default"].request(_config["default"].url.doorList, {
        page: this.page,
        limit: this.limit
      }).then(function (res) {
        wx.hideLoading();

        if (res.data && res.data.length) {
          if (_this2.page > 1) {
            _this2.list = _this2.list.concat(res.data);
          } else {
            _this2.list = res.data;
          }

          if (res.data.length < _this2.limit) {
            _this2.NoData = false;
          } else {
            _this2.NoData = true;
          }
        } else {
          _this2.NoData = false;
        }

        if (type == 'down') {
          wx.hideNavigationBarLoading(); //完成停止加载

          wx.stopPullDownRefresh(); //停止下拉刷新
        }
      })["catch"](function (err) {
        wx.hideLoading();

        if (type == 'down') {
          wx.hideNavigationBarLoading(); //完成停止加载

          wx.stopPullDownRefresh(); //停止下拉刷新
        }
      });
    },
    getRoute: function getRoute(id) {
      wx.navigateTo({
        url: "/pages/doorDetail?id=".concat(id)
      });
    },
    showModal: function showModal(e) {
      var _this = this;

      wx.showModal({
        title: '提示',
        content: "\u76EE\u524D\u533B\u751F\u4E0A\u95E8\u670D\u52A1\u9700\u901A\u8FC7\u7535\u8BDD".concat(_this.tel, "\u7535\u8BDD\u9884\u7EA6"),
        confirmText: '拨打',
        confirmColor: '#28B9D1',
        success: function success(res) {
          if (res.confirm) {
            wx.makePhoneCall({
              phoneNumber: _this.tel
            });
          }
        }
      });
    }
  },
  onReachBottom: function onReachBottom() {
    // 上拉加载
    if (!this.NoData) return;
    this.page = this.page + 1;
    this.doorList();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    this.page = 1;
    wx.showNavigationBarLoading(); //在标题栏中显示加载

    this.doorList('down');
  },
  onLoad: function onLoad() {
    console.log(this);
    this.doorList();
  }
}, {info: {"components":{"van-tab":{"path":"./../components/lib/tab/index"},"van-tabs":{"path":"./../components/lib/tabs/index"},"card-list":{"path":"./../components/card-list"}},"on":{"16-0":["disabled"]}}, handlers: {'16-0': {"disabled": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.showModal($event);
      })();
    
  }},'16-1': {"tap": function proxy (item) {
    
    var _vm=this;
      return (function () {
        _vm.getRoute(item.id);
      })();
    
  }}}, models: {}, refs: undefined });