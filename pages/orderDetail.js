"use strict";

var _core = _interopRequireDefault(require('./../vendor.js')(0));

var _store = _interopRequireDefault(require('./../store/index.js'));

var _x = require('./../vendor.js')(5);

var _http = _interopRequireDefault(require('./../service/http.js'));

var _config = _interopRequireDefault(require('./../service/config.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_core["default"].page({
  store: _store["default"],
  data: {
    isOrder: true
  },
  computed: _objectSpread({}, (0, _x.mapState)(['orderDetail'])),
  methods: {
    submit: function submit() {
      console.log('取消预约');

      _http["default"].request(_config["default"].url.emplacement_clear, {
        id: this.orderDetail.id
      }).then(function (res) {
        console.log(res);
      });
    }
  },
  onLoad: function onLoad(option) {
    console.log(_store["default"]);
    this.orderDetail = _store["default"].state.orderDetail;
    this.id = option.id;
    option.index === "0" ? this.isOrder = true : this.isOrder = false;
  }
}, {info: {"components":{"van-cell":{"path":"./../components/lib/cell/index"},"van-cell-group":{"path":"./../components/lib/cell-group/index"},"van-button":{"path":"./../components/lib/button/index"}},"on":{}}, handlers: {'19-0': {"tap": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.submit($event);
      })();
    
  }}}, models: {}, refs: undefined });