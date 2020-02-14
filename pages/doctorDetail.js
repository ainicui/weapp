"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _http = _interopRequireDefault(require('./../service/http.js'));

var _config = _interopRequireDefault(require('./../service/config.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    id: '',
    activeNames: [],
    info: Object,
    morning: Number,
    Afternoon: Number,
    selcetindex: 0,
    ymd: ''
  },
  methods: {
    getOrder: function getOrder(type) {
      if (type === 0 && !this.morning) return;
      if (type === 1 && !this.Afternoon) return;
      this.$app.$options.globalData.commentsDetail = this.info;
      wx.navigateTo({
        url: "/pages/doctorOrder?type=".concat(type, "&index=").concat(this.selcetindex)
      });
    },
    selectDate: function selectDate(item, index) {
      this.morning = item.morning;
      this.Afternoon = item.Afternoon;
      this.selcetindex = index;
    },
    onChange: function onChange(event) {
      this.activeNames = event.$wx.detail[1];
    }
  },
  onLoad: function onLoad(option) {
    var _this = this;

    this.$app.$options.globalData.info = null;

    _http["default"].request(_config["default"].url.appointment, {
      id: option.id
    }).then(function (res) {
      _this.info = res.data;
      _this.morning = _this.info.comments[0].morning;
      _this.Afternoon = _this.info.comments[0].Afternoon;
      _this.$app.$options.globalData.commentsDetail = _this.info.comments[0];
    });
  }
}, {info: {"components":{"van-cell":{"path":"./../components/lib/cell/index"},"van-collapse":{"path":"./../components/lib/collapse/index"},"van-popup":{"path":"./../components/lib/popup/index"},"van-collapse-item":{"path":"./../components/lib/collapse-item/index"},"van-button":{"path":"./../components/lib/button/index"},"card":{"path":"./../components/card"}},"on":{"13-0":["change"],"13-2":["tap"],"13-3":["tap"]}}, handlers: {'13-0': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onChange($event);
      })();
    
  }},'13-1': {"tap": function proxy (item, index) {
    
    var _vm=this;
      return (function () {
        _vm.selectDate(item, index);
      })();
    
  }},'13-2': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getOrder(0);
      })();
    
  }},'13-3': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.getOrder(1);
      })();
    
  }}}, models: {}, refs: undefined });