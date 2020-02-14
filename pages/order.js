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
  data: {
    page: 1,
    limit: 10,
    index: "0",
    list: [],
    doorList: [],
    NoData: false
  },
  methods: _objectSpread({}, (0, _x.mapActions)(['getOrder']), {
    toPage: function toPage(item) {
      this.getOrder(item);
      wx.navigateTo({
        url: "/pages/orderDetail?index=".concat(this.index)
      });
    },
    getList: function getList(url) {
      var _this = this;

      if (this.page == 1) wx.showLoading({
        title: '加载中'
      });

      _http["default"].request(url, {
        page: this.page,
        limit: this.limit
      }).then(function (res) {
        console.log(res);
        wx.hideLoading();

        if (res.data && res.data.length) {
          if (_this.page > 1) {
            if (_this.index == 0) {
              _this.list = _this.list.concat(res.data);
            } else {
              _this.doorList = _this.doorList.concat(res.data);
            }
          } else {
            if (_this.index == 0) {
              _this.list = res.data;
            } else {
              _this.doorList = res.data;
            }
          }

          if (res.data.length < _this.limit) {
            _this.NoData = false;
          } else {
            _this.NoData = true;
          }
        } else {
          _this.NoData = false;
        }
      })["catch"](function (err) {
        wx.hideLoading();
      });
    },
    onChange: function onChange(event) {
      this.index = event.$wx.detail[1].index;
      this.page = 1;

      if (this.index == 0) {
        this.getList(_config["default"].url.shopDoctorList);
      } else {
        this.getList(_config["default"].url.doorServiceList);
      }
    }
  }),
  onReachBottom: function onReachBottom() {
    // 上拉加载
    if (!this.NoData) return;
    this.page = this.page + 1;

    if (this.index == 0) {
      this.getList(_config["default"].url.shopDoctorList);
    } else {
      this.getList(_config["default"].url.doorServiceList);
    }
  },
  onLoad: function onLoad() {
    this.getList(_config["default"].url.shopDoctorList);
  }
}, {info: {"components":{"van-tab":{"path":"./../components/lib/tab/index"},"van-tabs":{"path":"./../components/lib/tabs/index"},"card-list":{"path":"./../components/card-list"},"order-list":{"path":"./../components/order-list"}},"on":{"18-0":["onChange"],"18-1":["getRoute"],"18-2":["getRoute"]}}, handlers: {'18-0': {"onChange": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'18-1': {"getRoute": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toPage($event);
      })();
    
  }},'18-2': {"getRoute": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toPage($event);
      })();
    
  }}}, models: {}, refs: undefined });