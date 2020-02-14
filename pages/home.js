"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _http = _interopRequireDefault(require('./../service/http.js'));

var _config = _interopRequireDefault(require('./../service/config.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  mixins: [],
  data: {
    address: '福建省龙海市海澄镇埭新村下仓2号',
    list: [],
    page: 1,
    limit: 10,
    NoData: false,
    date: ''
  },
  computed: {},
  methods: {
    homeList: function homeList(type) {
      var _this = this;

      if (this.page == 1 && !type) wx.showLoading({
        title: '加载中'
      });
      return _http["default"].request(_config["default"].url.homeList, {
        page: this.page,
        limit: this.limit
      }).then(function (res) {
        wx.hideLoading();

        if (res.code == 200) {
          if (res.data && res.data.length) {
            if (_this.page > 1) {
              _this.list = _this.list.concat(res.data);
            } else {
              _this.list = res.data;
            }

            if (res.data.length < _this.limit) {
              _this.NoData = false;
            } else {
              _this.NoData = true;
            }
          } else {
            _this.NoData = false;
          }
        } else {}

        if (type == 'down') {
          wx.hideNavigationBarLoading(); //完成停止加载

          wx.stopPullDownRefresh(); //停止下拉刷新
        }
      })["catch"](function (err) {
        wx.hideLoading();
        _this.NoData = false;

        if (type == 'down') {
          wx.hideNavigationBarLoading(); //完成停止加载

          wx.stopPullDownRefresh(); //停止下拉刷新
        }
      });
    }
  },
  onReachBottom: function onReachBottom() {
    // 上拉加载
    if (!this.NoData) return;
    this.page = this.page + 1;
    this.homeList();
  },
  onPullDownRefresh: function onPullDownRefresh() {
    // 下拉刷新
    this.page = 1;
    wx.showNavigationBarLoading(); //在标题栏中显示加载

    this.homeList('down');
  },
  onLoad: function onLoad() {
    this.homeList();
  }
}, {info: {"components":{"card":{"path":"./../components/card"},"card-list":{"path":"./../components/card-list"}},"on":{}}, handlers: {}, models: {}, refs: undefined });