"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _http = _interopRequireDefault(require('./../service/http.js'));

var _config = _interopRequireDefault(require('./../service/config.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    info: Object,
    timeContent: null,
    name: '请填写就诊信息',
    phone: '',
    smscode: '',
    list_t: '',
    commentsDetail: null,
    show: false,
    time_list: [],
    currentIndex: 0,
    selcetindex: Number
  },
  methods: {
    onClose: function onClose() {
      this.show = false;
    },
    popupShow: function popupShow() {
      this.selcetindex = this.currentIndex;
      this.show = true;
    },
    selectTime: function selectTime() {
      var _this2 = this;

      _http["default"].request(_config["default"].url.selection_number, {
        datetime: this.commentsDetail.ymd,
        list_t: this.list_t
      }).then(function (res) {
        console.log(res);
        _this2.time_list = res.data;
        _this2.timeContent = _this2.time_list[0];
      });
    },
    define: function define() {
      this.show = false;
      this.currentIndex = this.selcetindex;
      this.timeContent = this.time_list[this.selcetindex];
    },
    formatDay: function formatDay(dayInfo, time) {
      var ymd, week, times;
      ymd = dayInfo.ymd.split('-');
      ymd = "".concat(ymd[0], "\u5E74").concat(ymd[1], "\u6708").concat(ymd[2], "\u53F7");
      if (dayInfo.week == 0) week = '星期日';
      if (dayInfo.week == 1) week = '星期一';
      if (dayInfo.week == 2) week = '星期二';
      if (dayInfo.week == 3) week = '星期三';
      if (dayInfo.week == 4) week = '星期四';
      if (dayInfo.week == 5) week = '星期五';
      if (dayInfo.week == 6) week = '星期六';
      times = time.split(' ')[1].split(':');
      times.pop();
      times = "".concat(times[0], "\u65F6").concat(times[1], "\u5206");
      return ymd + week + times;
    },
    submit: function submit() {
      var _this = this;

      if (!this.name && !this.phone) return;
      wx.showModal({
        title: '提示',
        content: "\u60A8\u786E\u5B9A\u8981\u9884\u7EA6:".concat(this.formatDay(this.commentsDetail, this.timeContent.day_time), "-").concat(this.info.name, "\u7684\u95E8\u8BCA\u5417\uFF1F"),
        confirmColor: '#28B9D1',
        success: function success(res) {
          var _this3 = this;

          var params = {
            id: _this.timeContent.id,
            smscode: _this.smscode,
            name: _this.name,
            mobile: _this.phone
          };

          _http["default"].request(_config["default"].url.homeIdentification, params).then(function (res) {
            console.log(res);

            if (res.code == 200) {
              var info = {
                mode: _this.info.lable,
                day: "".concat(_this.formatDay(_this.commentsDetail, _this.timeContent.day_time))
              };
              _this.$app.$options.globalData.successInfo = _this3.info;
              wx.navigateTo({
                url: '/pages/orderSuccess'
              });
            } else {
              wx.showToast({
                title: '预约失败',
                icon: 'none',
                duration: 2000
              });
            }
          })["catch"](function (err) {
            wx.showToast({
              title: '预约失败',
              icon: 'none',
              duration: 2000
            });
          });
        }
      });
    }
  },
  onLoad: function onLoad(option) {
    if (option.type == 0) this.list_t = '上午';
    if (option.type == 1) this.list_t = '下午';
    this.info = this.$app.$options.globalData.commentsDetail;
    this.commentsDetail = this.$app.$options.globalData.commentsDetail.comments[option.index];
    this.selectTime();
  },
  onShow: function onShow() {
    var info = this.$app.$options.globalData.info;

    if (info) {
      this.name = info.name;
      this.phone = info.phone;
      this.smscode = info.smscode;
    }
  }
}, {info: {"components":{"van-cell":{"path":"./../components/lib/cell/index"},"van-popup":{"path":"./../components/lib/popup/index"},"van-icon":{"path":"./../components/lib/icon/index"},"van-button":{"path":"./../components/lib/button/index"},"card":{"path":"./../components/card"}},"on":{"14-0":["tap"],"14-1":["tap"],"14-2":["close"],"14-4":["tap"],"14-5":["tap"]}}, handlers: {'14-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.popupShow($event);
      })();
    
  }},'14-1': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event);
      })();
    
  }},'14-2': {"close": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.onClose($event);
      })();
    
  }},'14-3': {"tap": function proxy (index) {
    
    var _vm=this;
      return (function () {
        _vm.selcetindex = index;
      })();
    
  }},'14-4': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.show = false;
      })();
    
  }},'14-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.define($event);
      })();
    
  }}}, models: {}, refs: undefined });