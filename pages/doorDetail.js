"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _http = _interopRequireDefault(require('./../service/http.js'));

var _config = _interopRequireDefault(require('./../service/config.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].page({
  data: {
    addresVal: [],
    phone: '',
    // 手机号
    day_time: '',
    // 上门日期
    day_times: '',
    // 上门时间
    addres: '',
    // 上门地址
    address: '',
    // 上门详细地址
    name: '',
    // 就诊人姓名
    sex: '男',
    // 就诊人性别
    age: '',
    // 就诊人年龄
    near: '',
    // 就诊人近况
    nears: '',
    // 就诊人病史
    imgList: [],
    remark: '',
    // 备注
    checked: true
  },
  computed: {
    addres: function addres() {
      return this.addresVal.join(' ');
    },
    enclosure: function enclosure() {
      // 附件
      return this.imgList.join(',');
    }
  },
  methods: {
    toTel: function toTel() {
      console.log('拨打电话');
    },
    explain: function explain() {
      // 说明
      wx.showModal({
        title: '提示',
        content: '这里的费用仅为单项上门收取的费用，如果上门服务过程中发生其他额外费用将由上门医生或护士根据收费标准向您收取。',
        // confirmText: '拨打',
        confirmColor: '#28B9D1',
        success: function success(res) {}
      });
    },
    boxChange: function boxChange() {
      this.checked = !this.checked;
    },
    radioChange: function radioChange() {
      console.log(this.radioVal);
    },
    submit: function submit() {
      var _this = this;

      wx.showModal({
        title: '提示',
        content: '是否确定预约？',
        confirmColor: '#28B9D1',
        success: function success() {
          var params = {
            group_but: _this.id,
            phone: _this.phone,
            day_time: _this.day_time,
            day_times: _this.day_times,
            addres: _this.addres,
            address: _this.address,
            name: _this.name,
            sex: _this.sex,
            age: _this.age,
            near: _this.near,
            nears: _this.nears,
            enclosure: _this.enclosure,
            remark: _this.remark
          };

          _http["default"].request(_config["default"].url.identification, params).then(function (res) {});
        }
      });
    },
    updateImg: function updateImg() {
      var _this = this;

      wx.chooseImage({
        count: 9,
        sizeType: ['original'],
        //compressed
        sourceType: ['album', 'camera'],
        success: function success(res) {
          var tempFilePaths = res.tempFilePaths;
          console.log(tempFilePaths);

          _http["default"].uploadFile(_config["default"].url.upload, tempFilePaths[0]).then(function (res) {
            // const data = JSON.parse(res.data)
            _this.imgList.push("http://zensuo.winderinfo.com/".concat(res.data));
          });
        }
      });
    }
  },
  onLoad: function onLoad(option) {
    console.log(option);
    this.id = option.id; // console.log(cityArr)
  }
}, {info: {"components":{"van-cell":{"path":"./../components/lib/cell/index"},"van-cell-group":{"path":"./../components/lib/cell-group/index"},"van-checkbox":{"path":"./../components/lib/checkbox/index"},"van-button":{"path":"./../components/lib/button/index"},"cell-input":{"path":"./../components/cell-input"}},"on":{"15-1":["to-tel"],"15-4":["tap"],"15-5":["tap"]}}, handlers: {'15-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.explain($event);
      })();
    
  }},'15-1': {"to-tel": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.toTel($event);
      })();
    
  }},'15-2': {"change": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.radioChange($event);
      })();
    
  }},'15-3': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.updateImg($event);
      })();
    
  }},'15-4': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.boxChange($event);
      })();
    
  }},'15-5': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event);
      })();
    
  }}}, models: {'4': {
      type: "input",
      expr: "phone",
      handler: function set ($v) {
      var _vm=this;
        _vm.phone = $v;
      
    }
    },'5': {
      type: "change",
      expr: "day_time",
      handler: function set ($v) {
      var _vm=this;
        _vm.day_time = $v;
      
    }
    },'6': {
      type: "input",
      expr: "day_time",
      handler: function set ($v) {
      var _vm=this;
        _vm.day_time = $v;
      
    }
    },'7': {
      type: "change",
      expr: "day_times",
      handler: function set ($v) {
      var _vm=this;
        _vm.day_times = $v;
      
    }
    },'8': {
      type: "input",
      expr: "day_times",
      handler: function set ($v) {
      var _vm=this;
        _vm.day_times = $v;
      
    }
    },'9': {
      type: "change",
      expr: "addresVal",
      handler: function set ($v) {
      var _vm=this;
        _vm.addresVal = $v;
      
    }
    },'10': {
      type: "input",
      expr: "addres",
      handler: function set ($v) {
      var _vm=this;
        _vm.addres = $v;
      
    }
    },'11': {
      type: "input",
      expr: "address",
      handler: function set ($v) {
      var _vm=this;
        _vm.address = $v;
      
    }
    },'12': {
      type: "input",
      expr: "name",
      handler: function set ($v) {
      var _vm=this;
        _vm.name = $v;
      
    }
    },'13': {
      type: "change",
      expr: "sex",
      handler: function set ($v) {
      var _vm=this;
        _vm.sex = $v;
      
    }
    },'14': {
      type: "input",
      expr: "age",
      handler: function set ($v) {
      var _vm=this;
        _vm.age = $v;
      
    }
    },'15': {
      type: "input",
      expr: "near",
      handler: function set ($v) {
      var _vm=this;
        _vm.near = $v;
      
    }
    },'16': {
      type: "input",
      expr: "nears",
      handler: function set ($v) {
      var _vm=this;
        _vm.nears = $v;
      
    }
    },'17': {
      type: "input",
      expr: "remark",
      handler: function set ($v) {
      var _vm=this;
        _vm.remark = $v;
      
    }
    }}, refs: undefined });