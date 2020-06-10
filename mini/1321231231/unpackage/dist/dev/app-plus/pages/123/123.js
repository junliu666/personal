"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************************************************!*\
  !*** G:/program/mini/1321231231/main.js?{"page":"pages%2F123%2F123"} ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 5);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_123_123_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/123/123.nvue?mpType=page */ 8);

        
        
        
        _pages_123_123_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_123_123_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/123/123'
        _pages_123_123_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_123_123_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _package = __webpack_require__(/*! ../package.json */ 2);function _createSuper(Derived) {return function () {var Super = _getPrototypeOf(Derived),result;if (_isNativeReflectConstruct()) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 3).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 4).default || __webpack_require__(/*! uni-stat-config */ 4);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);var _super = _createSuper(Stat);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _super.call(this);
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();

/***/ }),
/* 2 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-261120200409001","_inBundle":false,"_integrity":"sha512-iM1vsCzUEg80lCM7rSAkh+28ahjS9zQgiGsEoHxawCD9s7rTFnSRIaOuc7WHeQt6EclGUUIrMccYHXsLsNAXZg==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-261120200409001.tgz","_shasum":"e9daeef120f133bf3d4ca0505f5b2abed0e874a7","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"ff0877f516c1cc986cf2d7eae2bf5030c58050f9","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-261120200409001"};

/***/ }),
/* 3 */
/*!**************************************************************!*\
  !*** G:/program/mini/1321231231/pages.json?{"type":"style"} ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** G:/program/mini/1321231231/pages.json?{"type":"stat"} ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__4CBFDC9"});

/***/ }),
/* 5 */
/*!**************************************************************!*\
  !*** G:/program/mini/1321231231/main.js?{"type":"appStyle"} ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 6).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 6 */
/*!**************************************************************************!*\
  !*** G:/program/mini/1321231231/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 7);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 7 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!G:/program/mini/1321231231/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "round": {
    "borderRadius": "5000upx"
  },
  "radius": {
    "borderRadius": "6upx"
  },
  "response": {
    "width": 100
  },
  "switch-sex": {
    "content::after": "\"\\e71c\"",
    "content::before": "\"\\e71a\""
  },
  "solid": {
    "position": "relative",
    "content::after": "\" \"",
    "width::after": 200,
    "height::after": 200,
    "position::after": "absolute",
    "top::after": 0,
    "left::after": 0,
    "transform::after": "scale(0.5)",
    "transformOrigin::after": "0 0",
    "pointerEvents::after": "none",
    "boxSizing::after": "border-box",
    "border::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-top": {
    "position": "relative",
    "content::after::after": "\" \"",
    "width::after::after": 200,
    "height::after::after": 200,
    "position::after::after": "absolute",
    "top::after::after": 0,
    "left::after::after": 0,
    "transform::after::after": "scale(0.5)",
    "transformOrigin::after::after": "0 0",
    "pointerEvents::after::after": "none",
    "boxSizing::after::after": "border-box",
    "borderTop::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-right": {
    "position": "relative",
    "content::after::after::after": "\" \"",
    "width::after::after::after": 200,
    "height::after::after::after": 200,
    "position::after::after::after": "absolute",
    "top::after::after::after": 0,
    "left::after::after::after": 0,
    "transform::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after": "0 0",
    "pointerEvents::after::after::after": "none",
    "boxSizing::after::after::after": "border-box",
    "borderRight::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-bottom": {
    "position": "relative",
    "content::after::after::after::after": "\" \"",
    "width::after::after::after::after": 200,
    "height::after::after::after::after": 200,
    "position::after::after::after::after": "absolute",
    "top::after::after::after::after": 0,
    "left::after::after::after::after": 0,
    "transform::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after": "none",
    "boxSizing::after::after::after::after": "border-box",
    "borderBottom::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-left": {
    "position": "relative",
    "content::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after": 200,
    "height::after::after::after::after::after": 200,
    "position::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after": 0,
    "left::after::after::after::after::after": 0,
    "transform::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after": "border-box",
    "borderLeft::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solids": {
    "position": "relative",
    "content::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after": "border-box",
    "border::after": "8upx solid #eee"
  },
  "solids-top": {
    "position": "relative",
    "content::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after": "border-box",
    "borderTop::after": "8upx solid #eee"
  },
  "solids-right": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after": "border-box",
    "borderRight::after": "8upx solid #eee"
  },
  "solids-bottom": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after": "border-box",
    "borderBottom::after": "8upx solid #eee"
  },
  "solids-left": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderLeft::after": "8upx solid #eee"
  },
  "dashed": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "border::after": "1upx dashed #ddd"
  },
  "dashed-top": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderTop::after": "1upx dashed #ddd"
  },
  "dashed-right": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderRight::after": "1upx dashed #ddd"
  },
  "dashed-bottom": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderBottom::after": "1upx dashed #ddd"
  },
  "dashed-left": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderLeft::after": "1upx dashed #ddd"
  },
  "shadow-lg": {
    "--ShadowSize": "0upx 40upx 100upx 0upx"
  },
  "shadow-warp": {
    "position": "relative",
    "boxShadow": "0 0 10upx rgba(0, 0, 0, 0.1)",
    "position:before": "absolute",
    "content:before": "\"\"",
    "top:before": "20upx",
    "bottom:before": "30upx",
    "left:before": "20upx",
    "width:before": 50,
    "boxShadow:before": "0 30upx 20upx rgba(0, 0, 0, 0.2)",
    "transform:before": "rotate(-3deg)",
    "zIndex:before": -1,
    "position:before:after": "absolute",
    "content:before:after": "\"\"",
    "top:before:after": "20upx",
    "bottom:before:after": "30upx",
    "left:before:after": "20upx",
    "width:before:after": 50,
    "boxShadow:before:after": "0 30upx 20upx rgba(0, 0, 0, 0.2)",
    "transform:before:after": "rotate(-3deg)",
    "zIndex:before:after": -1,
    "right:after": "20upx",
    "transform:after": "rotate(3deg)"
  },
  "shadow-blur": {
    "position": "relative",
    "content::before": "\"\"",
    "display::before": "block",
    "background::before": "inherit",
    "filter::before": "blur(10upx)",
    "position::before": "absolute",
    "width::before": 100,
    "height::before": 100,
    "top::before": "10upx",
    "left::before": "10upx",
    "zIndex::before": -1,
    "opacity::before": 0.4,
    "transformOrigin::before": "0 0",
    "transform::before": "scale(1, 1)"
  },
  "cu-btn": {
    "position": "relative",
    "border": "0upx",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "boxSizing": "border-box",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx",
    "fontSize": "28upx",
    "height": "64upx",
    "lineHeight": 1,
    "textAlign": "center",
    "textDecoration": "none",
    "transform": "translate(0upx, 0upx)",
    "display::after": "none"
  },
  "block": {
    "display": "block"
  },
  "cu-tag": {
    "fontSize": "24upx",
    "verticalAlign": "middle",
    "position": "relative",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "boxSizing": "border-box",
    "paddingTop": "0upx",
    "paddingRight": "16upx",
    "paddingBottom": "0upx",
    "paddingLeft": "16upx",
    "height": "48upx",
    "fontFamily": "Helvetica Neue, Helvetica, sans-serif",
    "whiteSpace": "nowrap"
  },
  "cu-capsule": {
    "display": "inline-flex",
    "verticalAlign": "middle"
  },
  "cu-avatar": {
    "fontVariant": "small-caps",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "display": "inline-flex",
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#cccccc",
    "color": "#ffffff",
    "whiteSpace": "nowrap",
    "position": "relative",
    "width": "64upx",
    "height": "64upx",
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "verticalAlign": "middle",
    "fontSize": 1.5
  },
  "cu-avatar-group": {
    "direction": "rtl",
    "unicodeBidi": "bidi-override",
    "paddingTop": 0,
    "paddingRight": "10upx",
    "paddingBottom": 0,
    "paddingLeft": "40upx",
    "display": "inline-block"
  },
  "cu-progress": {
    "overflow": "hidden",
    "height": "28upx",
    "backgroundColor": "#ebeef5",
    "display": "inline-flex",
    "alignItems": "center",
    "width": 100
  },
  "cu-load": {
    "display": "block",
    "lineHeight": 3,
    "textAlign": "center",
    "fontFamily::before": "\"cuIcon\"",
    "display::before": "inline-block",
    "marginRight::before": "6upx"
  },
  "load-progress": {
    "pointerEvents": "none",
    "top": 0,
    "position": "fixed",
    "width": 100,
    "left": 0,
    "zIndex": 2000
  },
  "grayscale": {
    "filter": "grayscale(1)"
  },
  "cu-bar": {
    "display": "flex",
    "position": "relative",
    "alignItems": "center",
    "minHeight": "100upx",
    "justifyContent": "space-between"
  },
  "cu-tabbar-height": {
    "minHeight": "100upx"
  },
  "cu-custom": {
    "display": "block",
    "position": "relative"
  },
  "nav": {
    "whiteSpace": "nowrap"
  },
  "cu-timeline": {
    "display": "block",
    "backgroundColor": "#ffffff"
  },
  "cu-chat": {
    "display": "flex",
    "flexDirection": "column"
  },
  "cu-card": {
    "display": "block",
    "overflow": "hidden"
  },
  "cu-form-group": {
    "backgroundColor": "#ffffff",
    "paddingTop": "1upx",
    "paddingRight": "30upx",
    "paddingBottom": "1upx",
    "paddingLeft": "30upx",
    "display": "flex",
    "alignItems": "center",
    "minHeight": "100upx",
    "justifyContent": "space-between"
  },
  "cu-modal": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1110,
    "opacity": 0,
    "outline": 0,
    "textAlign": "center",
    "MsTransform": "scale(1.185)",
    "transform": "scale(1.185)",
    "backfaceVisibility": "hidden",
    "perspective": "2000upx",
    "background": "rgba(0, 0, 0, 0.6)",
    "transitionDuration": 300,
    "transitionTimingFunction": "ease-in-out",
    "transitionDelay": 0,
    "pointerEvents": "none",
    "content::before": "\"\\200B\"",
    "display::before": "inline-block",
    "height::before": 100,
    "verticalAlign::before": "middle"
  },
  "@TRANSITION": {
    "cu-modal": {
      "duration": 300,
      "timingFunction": "ease-in-out",
      "delay": 0
    }
  },
  "cu-dialog": {
    "position": "relative",
    "display": "inline-block",
    "verticalAlign": "middle",
    "width": "680upx",
    "maxWidth": 100,
    "backgroundColor": "#f8f8f8",
    "borderRadius": "10upx",
    "overflow": "hidden"
  },
  "screen-swiper": {
    "minHeight": "375upx"
  },
  "card-swiper": {
    "height": "420upx"
  },
  "tower-swiper": {
    "height": "420upx",
    "position": "relative",
    "maxWidth": "750upx",
    "overflow": "hidden"
  },
  "cu-steps": {
    "display": "flex"
  },
  "flex": {
    "display": "flex"
  },
  "basis-xs": {
    "flexBasis": 20
  },
  "basis-sm": {
    "flexBasis": 40
  },
  "basis-df": {
    "flexBasis": 50
  },
  "basis-lg": {
    "flexBasis": 60
  },
  "basis-xl": {
    "flexBasis": 80
  },
  "flex-sub": {
    "flex": 1
  },
  "flex-twice": {
    "flex": 2
  },
  "flex-treble": {
    "flex": 3
  },
  "flex-direction": {
    "flexDirection": "column"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "self-start": {
    "alignSelf": "flex-start"
  },
  "self-center": {
    "alignSelf": "flex-center"
  },
  "self-end": {
    "alignSelf": "flex-end"
  },
  "self-stretch": {
    "alignSelf": "stretch"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-around": {
    "justifyContent": "space-around"
  },
  "grid": {
    "display": "flex",
    "flexWrap": "wrap"
  },
  "margin-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "margin-xs": {
    "marginTop": "10upx",
    "marginRight": "10upx",
    "marginBottom": "10upx",
    "marginLeft": "10upx"
  },
  "margin-sm": {
    "marginTop": "20upx",
    "marginRight": "20upx",
    "marginBottom": "20upx",
    "marginLeft": "20upx"
  },
  "margin": {
    "marginTop": "30upx",
    "marginRight": "30upx",
    "marginBottom": "30upx",
    "marginLeft": "30upx"
  },
  "margin-lg": {
    "marginTop": "40upx",
    "marginRight": "40upx",
    "marginBottom": "40upx",
    "marginLeft": "40upx"
  },
  "margin-xl": {
    "marginTop": "50upx",
    "marginRight": "50upx",
    "marginBottom": "50upx",
    "marginLeft": "50upx"
  },
  "margin-top-xs": {
    "marginTop": "10upx"
  },
  "margin-top-sm": {
    "marginTop": "20upx"
  },
  "margin-top": {
    "marginTop": "30upx"
  },
  "margin-top-lg": {
    "marginTop": "40upx"
  },
  "margin-top-xl": {
    "marginTop": "50upx"
  },
  "margin-right-xs": {
    "marginRight": "10upx"
  },
  "margin-right-sm": {
    "marginRight": "20upx"
  },
  "margin-right": {
    "marginRight": "30upx"
  },
  "margin-right-lg": {
    "marginRight": "40upx"
  },
  "margin-right-xl": {
    "marginRight": "50upx"
  },
  "margin-bottom-xs": {
    "marginBottom": "10upx"
  },
  "margin-bottom-sm": {
    "marginBottom": "20upx"
  },
  "margin-bottom": {
    "marginBottom": "30upx"
  },
  "margin-bottom-lg": {
    "marginBottom": "40upx"
  },
  "margin-bottom-xl": {
    "marginBottom": "50upx"
  },
  "margin-left-xs": {
    "marginLeft": "10upx"
  },
  "margin-left-sm": {
    "marginLeft": "20upx"
  },
  "margin-left": {
    "marginLeft": "30upx"
  },
  "margin-left-lg": {
    "marginLeft": "40upx"
  },
  "margin-left-xl": {
    "marginLeft": "50upx"
  },
  "margin-lr-xs": {
    "marginLeft": "10upx",
    "marginRight": "10upx"
  },
  "margin-lr-sm": {
    "marginLeft": "20upx",
    "marginRight": "20upx"
  },
  "margin-lr": {
    "marginLeft": "30upx",
    "marginRight": "30upx"
  },
  "margin-lr-lg": {
    "marginLeft": "40upx",
    "marginRight": "40upx"
  },
  "margin-lr-xl": {
    "marginLeft": "50upx",
    "marginRight": "50upx"
  },
  "margin-tb-xs": {
    "marginTop": "10upx",
    "marginBottom": "10upx"
  },
  "margin-tb-sm": {
    "marginTop": "20upx",
    "marginBottom": "20upx"
  },
  "margin-tb": {
    "marginTop": "30upx",
    "marginBottom": "30upx"
  },
  "margin-tb-lg": {
    "marginTop": "40upx",
    "marginBottom": "40upx"
  },
  "margin-tb-xl": {
    "marginTop": "50upx",
    "marginBottom": "50upx"
  },
  "padding-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "padding-xs": {
    "paddingTop": "10upx",
    "paddingRight": "10upx",
    "paddingBottom": "10upx",
    "paddingLeft": "10upx"
  },
  "padding-sm": {
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx"
  },
  "padding": {
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx"
  },
  "padding-lg": {
    "paddingTop": "40upx",
    "paddingRight": "40upx",
    "paddingBottom": "40upx",
    "paddingLeft": "40upx"
  },
  "padding-xl": {
    "paddingTop": "50upx",
    "paddingRight": "50upx",
    "paddingBottom": "50upx",
    "paddingLeft": "50upx"
  },
  "padding-top-xs": {
    "paddingTop": "10upx"
  },
  "padding-top-sm": {
    "paddingTop": "20upx"
  },
  "padding-top": {
    "paddingTop": "30upx"
  },
  "padding-top-lg": {
    "paddingTop": "40upx"
  },
  "padding-top-xl": {
    "paddingTop": "50upx"
  },
  "padding-right-xs": {
    "paddingRight": "10upx"
  },
  "padding-right-sm": {
    "paddingRight": "20upx"
  },
  "padding-right": {
    "paddingRight": "30upx"
  },
  "padding-right-lg": {
    "paddingRight": "40upx"
  },
  "padding-right-xl": {
    "paddingRight": "50upx"
  },
  "padding-bottom-xs": {
    "paddingBottom": "10upx"
  },
  "padding-bottom-sm": {
    "paddingBottom": "20upx"
  },
  "padding-bottom": {
    "paddingBottom": "30upx"
  },
  "padding-bottom-lg": {
    "paddingBottom": "40upx"
  },
  "padding-bottom-xl": {
    "paddingBottom": "50upx"
  },
  "padding-left-xs": {
    "paddingLeft": "10upx"
  },
  "padding-left-sm": {
    "paddingLeft": "20upx"
  },
  "padding-left": {
    "paddingLeft": "30upx"
  },
  "padding-left-lg": {
    "paddingLeft": "40upx"
  },
  "padding-left-xl": {
    "paddingLeft": "50upx"
  },
  "padding-lr-xs": {
    "paddingLeft": "10upx",
    "paddingRight": "10upx"
  },
  "padding-lr-sm": {
    "paddingLeft": "20upx",
    "paddingRight": "20upx"
  },
  "padding-lr": {
    "paddingLeft": "30upx",
    "paddingRight": "30upx"
  },
  "padding-lr-lg": {
    "paddingLeft": "40upx",
    "paddingRight": "40upx"
  },
  "padding-lr-xl": {
    "paddingLeft": "50upx",
    "paddingRight": "50upx"
  },
  "padding-tb-xs": {
    "paddingTop": "10upx",
    "paddingBottom": "10upx"
  },
  "padding-tb-sm": {
    "paddingTop": "20upx",
    "paddingBottom": "20upx"
  },
  "padding-tb": {
    "paddingTop": "30upx",
    "paddingBottom": "30upx"
  },
  "padding-tb-lg": {
    "paddingTop": "40upx",
    "paddingBottom": "40upx"
  },
  "padding-tb-xl": {
    "paddingTop": "50upx",
    "paddingBottom": "50upx"
  },
  "cf": {
    "content::after": "\" \"",
    "display::after": "table",
    "content::after::before": "\" \"",
    "display::after::before": "table",
    "clear::after": "both"
  },
  "fl": {
    "float": "left"
  },
  "fr": {
    "float": "right"
  },
  "line-red": {
    "borderColor::after": "#e54d42",
    "color": "#e54d42"
  },
  "lines-red": {
    "borderColor::after::after": "#e54d42",
    "color": "#e54d42"
  },
  "line-orange": {
    "borderColor::after": "#f37b1d",
    "color": "#f37b1d"
  },
  "lines-orange": {
    "borderColor::after::after": "#f37b1d",
    "color": "#f37b1d"
  },
  "line-yellow": {
    "borderColor::after": "#fbbd08",
    "color": "#fbbd08"
  },
  "lines-yellow": {
    "borderColor::after::after": "#fbbd08",
    "color": "#fbbd08"
  },
  "line-olive": {
    "borderColor::after": "#8dc63f",
    "color": "#8dc63f"
  },
  "lines-olive": {
    "borderColor::after::after": "#8dc63f",
    "color": "#8dc63f"
  },
  "line-green": {
    "borderColor::after": "#39b54a",
    "color": "#39b54a"
  },
  "lines-green": {
    "borderColor::after::after": "#39b54a",
    "color": "#39b54a"
  },
  "line-cyan": {
    "borderColor::after": "#1cbbb4",
    "color": "#1cbbb4"
  },
  "lines-cyan": {
    "borderColor::after::after": "#1cbbb4",
    "color": "#1cbbb4"
  },
  "line-blue": {
    "borderColor::after": "#0081ff",
    "color": "#0081ff"
  },
  "lines-blue": {
    "borderColor::after::after": "#0081ff",
    "color": "#0081ff"
  },
  "line-purple": {
    "borderColor::after": "#6739b6",
    "color": "#6739b6"
  },
  "lines-purple": {
    "borderColor::after::after": "#6739b6",
    "color": "#6739b6"
  },
  "line-mauve": {
    "borderColor::after": "#9c26b0",
    "color": "#9c26b0"
  },
  "lines-mauve": {
    "borderColor::after::after": "#9c26b0",
    "color": "#9c26b0"
  },
  "line-pink": {
    "borderColor::after": "#e03997",
    "color": "#e03997"
  },
  "lines-pink": {
    "borderColor::after::after": "#e03997",
    "color": "#e03997"
  },
  "line-brown": {
    "borderColor::after": "#a5673f",
    "color": "#a5673f"
  },
  "lines-brown": {
    "borderColor::after::after": "#a5673f",
    "color": "#a5673f"
  },
  "line-grey": {
    "borderColor::after": "#8799a3",
    "color": "#8799a3"
  },
  "lines-grey": {
    "borderColor::after::after": "#8799a3",
    "color": "#8799a3"
  },
  "line-gray": {
    "borderColor::after": "#aaaaaa",
    "color": "#aaaaaa"
  },
  "lines-gray": {
    "borderColor::after::after": "#aaaaaa",
    "color": "#aaaaaa"
  },
  "line-black": {
    "borderColor::after": "#333333",
    "color": "#333333"
  },
  "lines-black": {
    "borderColor::after::after": "#333333",
    "color": "#333333"
  },
  "line-white": {
    "borderColor::after": "#ffffff",
    "color": "#ffffff"
  },
  "lines-white": {
    "borderColor::after::after": "#ffffff",
    "color": "#ffffff"
  },
  "bg-red": {
    "backgroundColor": "#e54d42",
    "color": "#ffffff"
  },
  "bg-orange": {
    "backgroundColor": "#f37b1d",
    "color": "#ffffff"
  },
  "bg-yellow": {
    "backgroundColor": "#fbbd08",
    "color": "#333333"
  },
  "bg-olive": {
    "backgroundColor": "#8dc63f",
    "color": "#ffffff"
  },
  "bg-green": {
    "backgroundColor": "#39b54a",
    "color": "#ffffff"
  },
  "bg-cyan": {
    "backgroundColor": "#1cbbb4",
    "color": "#ffffff"
  },
  "bg-blue": {
    "backgroundColor": "#0081ff",
    "color": "#ffffff"
  },
  "bg-purple": {
    "backgroundColor": "#6739b6",
    "color": "#ffffff"
  },
  "bg-mauve": {
    "backgroundColor": "#9c26b0",
    "color": "#ffffff"
  },
  "bg-pink": {
    "backgroundColor": "#e03997",
    "color": "#ffffff"
  },
  "bg-brown": {
    "backgroundColor": "#a5673f",
    "color": "#ffffff"
  },
  "bg-grey": {
    "backgroundColor": "#8799a3",
    "color": "#ffffff"
  },
  "bg-gray": {
    "backgroundColor": "#f0f0f0",
    "color": "#333333"
  },
  "bg-black": {
    "backgroundColor": "#333333",
    "color": "#ffffff"
  },
  "bg-white": {
    "backgroundColor": "#ffffff",
    "color": "#666666"
  },
  "bg-shadeTop": {
    "backgroundImage": "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01))",
    "color": "#ffffff"
  },
  "bg-shadeBottom": {
    "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1))",
    "color": "#ffffff"
  },
  "bg-gradual-red": {
    "backgroundImage": "linear-gradient(45deg, #f43f3b, #ec008c)",
    "color": "#ffffff"
  },
  "bg-gradual-orange": {
    "backgroundImage": "linear-gradient(45deg, #ff9700, #ed1c24)",
    "color": "#ffffff"
  },
  "bg-gradual-green": {
    "backgroundImage": "linear-gradient(45deg, #39b54a, #8dc63f)",
    "color": "#ffffff"
  },
  "bg-gradual-purple": {
    "backgroundImage": "linear-gradient(45deg, #9000ff, #5e00ff)",
    "color": "#ffffff"
  },
  "bg-gradual-pink": {
    "backgroundImage": "linear-gradient(45deg, #ec008c, #6739b6)",
    "color": "#ffffff"
  },
  "bg-gradual-blue": {
    "backgroundImage": "linear-gradient(45deg, #0081ff, #1cbbb4)",
    "color": "#ffffff"
  },
  "bg-img": {
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat"
  },
  "bg-mask": {
    "backgroundColor": "#333333",
    "position": "relative",
    "content::after": "\"\"",
    "width::after": 100,
    "height::after": 100,
    "display::after": "block",
    "backgroundColor::after": "rgba(0,0,0,0.4)",
    "position::after": "absolute",
    "left::after": 0,
    "right::after": 0,
    "bottom::after": 0,
    "top::after": 0
  },
  "bg-video": {
    "position": "relative"
  },
  "text-xs": {
    "fontSize": "20upx"
  },
  "text-sm": {
    "fontSize": "24upx"
  },
  "text-df": {
    "fontSize": "28upx"
  },
  "text-lg": {
    "fontSize": "32upx"
  },
  "text-xl": {
    "fontSize": "36upx"
  },
  "text-xxl": {
    "fontSize": "44upx"
  },
  "text-sl": {
    "fontSize": "80upx"
  },
  "text-xsl": {
    "fontSize": "120upx"
  },
  "text-Abc": {
    "textTransform": "Capitalize"
  },
  "text-ABC": {
    "textTransform": "Uppercase"
  },
  "text-abc": {
    "textTransform": "Lowercase"
  },
  "text-price": {
    "content::before": "\"¥\"",
    "fontSize::before": 80,
    "marginRight::before": "4upx"
  },
  "text-cut": {
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "overflow": "hidden"
  },
  "text-bold": {
    "fontWeight": "bold"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-content": {
    "lineHeight": 1.6
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-red": {
    "color": "#e54d42"
  },
  "text-orange": {
    "color": "#f37b1d"
  },
  "text-yellow": {
    "color": "#fbbd08"
  },
  "text-olive": {
    "color": "#8dc63f"
  },
  "text-green": {
    "color": "#39b54a"
  },
  "text-cyan": {
    "color": "#1cbbb4"
  },
  "text-blue": {
    "color": "#0081ff"
  },
  "text-purple": {
    "color": "#6739b6"
  },
  "text-mauve": {
    "color": "#9c26b0"
  },
  "text-pink": {
    "color": "#e03997"
  },
  "text-brown": {
    "color": "#a5673f"
  },
  "text-grey": {
    "color": "#8799a3"
  },
  "text-gray": {
    "color": "#aaaaaa"
  },
  "text-black": {
    "color": "#333333"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "cuIconfont-spin": {
    "WebkitAnimation": "cuIcon-spin 2s infinite linear",
    "animation": "cuIcon-spin 2s infinite linear",
    "display": "inline-block"
  },
  "cuIconfont-pulse": {
    "WebkitAnimation": "cuIcon-spin 1s infinite steps(8)",
    "animation": "cuIcon-spin 1s infinite steps(8)",
    "display": "inline-block"
  },
  "@FONT-FACE": [
    {
      "fontFamily": "cuIcon",
      "src": "url('//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831#iefix') format('embedded-opentype'),\n\t\t\n\t\turl('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),\n\t\turl('//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t=1545239985831') format('truetype'),\n\t\t\n\t\turl('//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t=1545239985831#cuIconfont') format('svg')"
    }
  ],
  "cuIcon-appreciate": {
    "content:before": "\"\\e644\""
  },
  "cuIcon-check": {
    "content:before": "\"\\e645\""
  },
  "cuIcon-close": {
    "content:before": "\"\\e646\""
  },
  "cuIcon-edit": {
    "content:before": "\"\\e649\""
  },
  "cuIcon-emoji": {
    "content:before": "\"\\e64a\""
  },
  "cuIcon-favorfill": {
    "content:before": "\"\\e64b\""
  },
  "cuIcon-favor": {
    "content:before": "\"\\e64c\""
  },
  "cuIcon-loading": {
    "content:before": "\"\\e64f\""
  },
  "cuIcon-locationfill": {
    "content:before": "\"\\e650\""
  },
  "cuIcon-location": {
    "content:before": "\"\\e651\""
  },
  "cuIcon-phone": {
    "content:before": "\"\\e652\""
  },
  "cuIcon-roundcheckfill": {
    "content:before": "\"\\e656\""
  },
  "cuIcon-roundcheck": {
    "content:before": "\"\\e657\""
  },
  "cuIcon-roundclosefill": {
    "content:before": "\"\\e658\""
  },
  "cuIcon-roundclose": {
    "content:before": "\"\\e659\""
  },
  "cuIcon-roundrightfill": {
    "content:before": "\"\\e65a\""
  },
  "cuIcon-roundright": {
    "content:before": "\"\\e65b\""
  },
  "cuIcon-search": {
    "content:before": "\"\\e65c\""
  },
  "cuIcon-taxi": {
    "content:before": "\"\\e65d\""
  },
  "cuIcon-timefill": {
    "content:before": "\"\\e65e\""
  },
  "cuIcon-time": {
    "content:before": "\"\\e65f\""
  },
  "cuIcon-unfold": {
    "content:before": "\"\\e661\""
  },
  "cuIcon-warnfill": {
    "content:before": "\"\\e662\""
  },
  "cuIcon-warn": {
    "content:before": "\"\\e663\""
  },
  "cuIcon-camerafill": {
    "content:before": "\"\\e664\""
  },
  "cuIcon-camera": {
    "content:before": "\"\\e665\""
  },
  "cuIcon-commentfill": {
    "content:before": "\"\\e666\""
  },
  "cuIcon-comment": {
    "content:before": "\"\\e667\""
  },
  "cuIcon-likefill": {
    "content:before": "\"\\e668\""
  },
  "cuIcon-like": {
    "content:before": "\"\\e669\""
  },
  "cuIcon-notificationfill": {
    "content:before": "\"\\e66a\""
  },
  "cuIcon-notification": {
    "content:before": "\"\\e66b\""
  },
  "cuIcon-order": {
    "content:before": "\"\\e66c\""
  },
  "cuIcon-samefill": {
    "content:before": "\"\\e66d\""
  },
  "cuIcon-same": {
    "content:before": "\"\\e66e\""
  },
  "cuIcon-deliver": {
    "content:before": "\"\\e671\""
  },
  "cuIcon-evaluate": {
    "content:before": "\"\\e672\""
  },
  "cuIcon-pay": {
    "content:before": "\"\\e673\""
  },
  "cuIcon-send": {
    "content:before": "\"\\e675\""
  },
  "cuIcon-shop": {
    "content:before": "\"\\e676\""
  },
  "cuIcon-ticket": {
    "content:before": "\"\\e677\""
  },
  "cuIcon-back": {
    "content:before": "\"\\e679\""
  },
  "cuIcon-cascades": {
    "content:before": "\"\\e67c\""
  },
  "cuIcon-discover": {
    "content:before": "\"\\e67e\""
  },
  "cuIcon-list": {
    "content:before": "\"\\e682\""
  },
  "cuIcon-more": {
    "content:before": "\"\\e684\""
  },
  "cuIcon-scan": {
    "content:before": "\"\\e689\""
  },
  "cuIcon-settings": {
    "content:before": "\"\\e68a\""
  },
  "cuIcon-questionfill": {
    "content:before": "\"\\e690\""
  },
  "cuIcon-question": {
    "content:before": "\"\\e691\""
  },
  "cuIcon-shopfill": {
    "content:before": "\"\\e697\""
  },
  "cuIcon-form": {
    "content:before": "\"\\e699\""
  },
  "cuIcon-pic": {
    "content:before": "\"\\e69b\""
  },
  "cuIcon-filter": {
    "content:before": "\"\\e69c\""
  },
  "cuIcon-footprint": {
    "content:before": "\"\\e69d\""
  },
  "cuIcon-top": {
    "content:before": "\"\\e69e\""
  },
  "cuIcon-pulldown": {
    "content:before": "\"\\e69f\""
  },
  "cuIcon-pullup": {
    "content:before": "\"\\e6a0\""
  },
  "cuIcon-right": {
    "content:before": "\"\\e6a3\""
  },
  "cuIcon-refresh": {
    "content:before": "\"\\e6a4\""
  },
  "cuIcon-moreandroid": {
    "content:before": "\"\\e6a5\""
  },
  "cuIcon-deletefill": {
    "content:before": "\"\\e6a6\""
  },
  "cuIcon-refund": {
    "content:before": "\"\\e6ac\""
  },
  "cuIcon-cart": {
    "content:before": "\"\\e6af\""
  },
  "cuIcon-qrcode": {
    "content:before": "\"\\e6b0\""
  },
  "cuIcon-remind": {
    "content:before": "\"\\e6b2\""
  },
  "cuIcon-delete": {
    "content:before": "\"\\e6b4\""
  },
  "cuIcon-profile": {
    "content:before": "\"\\e6b7\""
  },
  "cuIcon-home": {
    "content:before": "\"\\e6b8\""
  },
  "cuIcon-cartfill": {
    "content:before": "\"\\e6b9\""
  },
  "cuIcon-discoverfill": {
    "content:before": "\"\\e6ba\""
  },
  "cuIcon-homefill": {
    "content:before": "\"\\e6bb\""
  },
  "cuIcon-message": {
    "content:before": "\"\\e6bc\""
  },
  "cuIcon-addressbook": {
    "content:before": "\"\\e6bd\""
  },
  "cuIcon-link": {
    "content:before": "\"\\e6bf\""
  },
  "cuIcon-lock": {
    "content:before": "\"\\e6c0\""
  },
  "cuIcon-unlock": {
    "content:before": "\"\\e6c2\""
  },
  "cuIcon-vip": {
    "content:before": "\"\\e6c3\""
  },
  "cuIcon-weibo": {
    "content:before": "\"\\e6c4\""
  },
  "cuIcon-activity": {
    "content:before": "\"\\e6c5\""
  },
  "cuIcon-friendaddfill": {
    "content:before": "\"\\e6c9\""
  },
  "cuIcon-friendadd": {
    "content:before": "\"\\e6ca\""
  },
  "cuIcon-friendfamous": {
    "content:before": "\"\\e6cb\""
  },
  "cuIcon-friend": {
    "content:before": "\"\\e6cc\""
  },
  "cuIcon-goods": {
    "content:before": "\"\\e6cd\""
  },
  "cuIcon-selection": {
    "content:before": "\"\\e6ce\""
  },
  "cuIcon-explore": {
    "content:before": "\"\\e6d2\""
  },
  "cuIcon-present": {
    "content:before": "\"\\e6d3\""
  },
  "cuIcon-squarecheckfill": {
    "content:before": "\"\\e6d4\""
  },
  "cuIcon-square": {
    "content:before": "\"\\e6d5\""
  },
  "cuIcon-squarecheck": {
    "content:before": "\"\\e6d6\""
  },
  "cuIcon-round": {
    "content:before": "\"\\e6d7\""
  },
  "cuIcon-roundaddfill": {
    "content:before": "\"\\e6d8\""
  },
  "cuIcon-roundadd": {
    "content:before": "\"\\e6d9\""
  },
  "cuIcon-add": {
    "content:before": "\"\\e6da\""
  },
  "cuIcon-notificationforbidfill": {
    "content:before": "\"\\e6db\""
  },
  "cuIcon-explorefill": {
    "content:before": "\"\\e6dd\""
  },
  "cuIcon-fold": {
    "content:before": "\"\\e6de\""
  },
  "cuIcon-game": {
    "content:before": "\"\\e6df\""
  },
  "cuIcon-redpacket": {
    "content:before": "\"\\e6e0\""
  },
  "cuIcon-selectionfill": {
    "content:before": "\"\\e6e1\""
  },
  "cuIcon-similar": {
    "content:before": "\"\\e6e2\""
  },
  "cuIcon-appreciatefill": {
    "content:before": "\"\\e6e3\""
  },
  "cuIcon-infofill": {
    "content:before": "\"\\e6e4\""
  },
  "cuIcon-info": {
    "content:before": "\"\\e6e5\""
  },
  "cuIcon-forwardfill": {
    "content:before": "\"\\e6ea\""
  },
  "cuIcon-forward": {
    "content:before": "\"\\e6eb\""
  },
  "cuIcon-rechargefill": {
    "content:before": "\"\\e6ec\""
  },
  "cuIcon-recharge": {
    "content:before": "\"\\e6ed\""
  },
  "cuIcon-vipcard": {
    "content:before": "\"\\e6ee\""
  },
  "cuIcon-voice": {
    "content:before": "\"\\e6ef\""
  },
  "cuIcon-voicefill": {
    "content:before": "\"\\e6f0\""
  },
  "cuIcon-friendfavor": {
    "content:before": "\"\\e6f1\""
  },
  "cuIcon-wifi": {
    "content:before": "\"\\e6f2\""
  },
  "cuIcon-share": {
    "content:before": "\"\\e6f3\""
  },
  "cuIcon-wefill": {
    "content:before": "\"\\e6f4\""
  },
  "cuIcon-we": {
    "content:before": "\"\\e6f5\""
  },
  "cuIcon-lightauto": {
    "content:before": "\"\\e6f6\""
  },
  "cuIcon-lightforbid": {
    "content:before": "\"\\e6f7\""
  },
  "cuIcon-lightfill": {
    "content:before": "\"\\e6f8\""
  },
  "cuIcon-camerarotate": {
    "content:before": "\"\\e6f9\""
  },
  "cuIcon-light": {
    "content:before": "\"\\e6fa\""
  },
  "cuIcon-barcode": {
    "content:before": "\"\\e6fb\""
  },
  "cuIcon-flashlightclose": {
    "content:before": "\"\\e6fc\""
  },
  "cuIcon-flashlightopen": {
    "content:before": "\"\\e6fd\""
  },
  "cuIcon-searchlist": {
    "content:before": "\"\\e6fe\""
  },
  "cuIcon-service": {
    "content:before": "\"\\e6ff\""
  },
  "cuIcon-sort": {
    "content:before": "\"\\e700\""
  },
  "cuIcon-down": {
    "content:before": "\"\\e703\""
  },
  "cuIcon-mobile": {
    "content:before": "\"\\e704\""
  },
  "cuIcon-mobilefill": {
    "content:before": "\"\\e705\""
  },
  "cuIcon-copy": {
    "content:before": "\"\\e706\""
  },
  "cuIcon-countdownfill": {
    "content:before": "\"\\e707\""
  },
  "cuIcon-countdown": {
    "content:before": "\"\\e708\""
  },
  "cuIcon-noticefill": {
    "content:before": "\"\\e709\""
  },
  "cuIcon-notice": {
    "content:before": "\"\\e70a\""
  },
  "cuIcon-upstagefill": {
    "content:before": "\"\\e70e\""
  },
  "cuIcon-upstage": {
    "content:before": "\"\\e70f\""
  },
  "cuIcon-babyfill": {
    "content:before": "\"\\e710\""
  },
  "cuIcon-baby": {
    "content:before": "\"\\e711\""
  },
  "cuIcon-brandfill": {
    "content:before": "\"\\e712\""
  },
  "cuIcon-brand": {
    "content:before": "\"\\e713\""
  },
  "cuIcon-choicenessfill": {
    "content:before": "\"\\e714\""
  },
  "cuIcon-choiceness": {
    "content:before": "\"\\e715\""
  },
  "cuIcon-clothesfill": {
    "content:before": "\"\\e716\""
  },
  "cuIcon-clothes": {
    "content:before": "\"\\e717\""
  },
  "cuIcon-creativefill": {
    "content:before": "\"\\e718\""
  },
  "cuIcon-creative": {
    "content:before": "\"\\e719\""
  },
  "cuIcon-female": {
    "content:before": "\"\\e71a\""
  },
  "cuIcon-keyboard": {
    "content:before": "\"\\e71b\""
  },
  "cuIcon-male": {
    "content:before": "\"\\e71c\""
  },
  "cuIcon-newfill": {
    "content:before": "\"\\e71d\""
  },
  "cuIcon-new": {
    "content:before": "\"\\e71e\""
  },
  "cuIcon-pullleft": {
    "content:before": "\"\\e71f\""
  },
  "cuIcon-pullright": {
    "content:before": "\"\\e720\""
  },
  "cuIcon-rankfill": {
    "content:before": "\"\\e721\""
  },
  "cuIcon-rank": {
    "content:before": "\"\\e722\""
  },
  "cuIcon-bad": {
    "content:before": "\"\\e723\""
  },
  "cuIcon-cameraadd": {
    "content:before": "\"\\e724\""
  },
  "cuIcon-focus": {
    "content:before": "\"\\e725\""
  },
  "cuIcon-friendfill": {
    "content:before": "\"\\e726\""
  },
  "cuIcon-cameraaddfill": {
    "content:before": "\"\\e727\""
  },
  "cuIcon-apps": {
    "content:before": "\"\\e729\""
  },
  "cuIcon-paintfill": {
    "content:before": "\"\\e72a\""
  },
  "cuIcon-paint": {
    "content:before": "\"\\e72b\""
  },
  "cuIcon-picfill": {
    "content:before": "\"\\e72c\""
  },
  "cuIcon-refresharrow": {
    "content:before": "\"\\e72d\""
  },
  "cuIcon-colorlens": {
    "content:before": "\"\\e6e6\""
  },
  "cuIcon-markfill": {
    "content:before": "\"\\e730\""
  },
  "cuIcon-mark": {
    "content:before": "\"\\e731\""
  },
  "cuIcon-presentfill": {
    "content:before": "\"\\e732\""
  },
  "cuIcon-repeal": {
    "content:before": "\"\\e733\""
  },
  "cuIcon-album": {
    "content:before": "\"\\e734\""
  },
  "cuIcon-peoplefill": {
    "content:before": "\"\\e735\""
  },
  "cuIcon-people": {
    "content:before": "\"\\e736\""
  },
  "cuIcon-servicefill": {
    "content:before": "\"\\e737\""
  },
  "cuIcon-repair": {
    "content:before": "\"\\e738\""
  },
  "cuIcon-file": {
    "content:before": "\"\\e739\""
  },
  "cuIcon-repairfill": {
    "content:before": "\"\\e73a\""
  },
  "cuIcon-taoxiaopu": {
    "content:before": "\"\\e73b\""
  },
  "cuIcon-weixin": {
    "content:before": "\"\\e612\""
  },
  "cuIcon-attentionfill": {
    "content:before": "\"\\e73c\""
  },
  "cuIcon-attention": {
    "content:before": "\"\\e73d\""
  },
  "cuIcon-commandfill": {
    "content:before": "\"\\e73e\""
  },
  "cuIcon-command": {
    "content:before": "\"\\e73f\""
  },
  "cuIcon-communityfill": {
    "content:before": "\"\\e740\""
  },
  "cuIcon-community": {
    "content:before": "\"\\e741\""
  },
  "cuIcon-read": {
    "content:before": "\"\\e742\""
  },
  "cuIcon-calendar": {
    "content:before": "\"\\e74a\""
  },
  "cuIcon-cut": {
    "content:before": "\"\\e74b\""
  },
  "cuIcon-magic": {
    "content:before": "\"\\e74c\""
  },
  "cuIcon-backwardfill": {
    "content:before": "\"\\e74d\""
  },
  "cuIcon-playfill": {
    "content:before": "\"\\e74f\""
  },
  "cuIcon-stop": {
    "content:before": "\"\\e750\""
  },
  "cuIcon-tagfill": {
    "content:before": "\"\\e751\""
  },
  "cuIcon-tag": {
    "content:before": "\"\\e752\""
  },
  "cuIcon-group": {
    "content:before": "\"\\e753\""
  },
  "cuIcon-all": {
    "content:before": "\"\\e755\""
  },
  "cuIcon-backdelete": {
    "content:before": "\"\\e756\""
  },
  "cuIcon-hotfill": {
    "content:before": "\"\\e757\""
  },
  "cuIcon-hot": {
    "content:before": "\"\\e758\""
  },
  "cuIcon-post": {
    "content:before": "\"\\e759\""
  },
  "cuIcon-radiobox": {
    "content:before": "\"\\e75b\""
  },
  "cuIcon-rounddown": {
    "content:before": "\"\\e75c\""
  },
  "cuIcon-upload": {
    "content:before": "\"\\e75d\""
  },
  "cuIcon-writefill": {
    "content:before": "\"\\e760\""
  },
  "cuIcon-write": {
    "content:before": "\"\\e761\""
  },
  "cuIcon-radioboxfill": {
    "content:before": "\"\\e763\""
  },
  "cuIcon-punch": {
    "content:before": "\"\\e764\""
  },
  "cuIcon-shake": {
    "content:before": "\"\\e765\""
  },
  "cuIcon-move": {
    "content:before": "\"\\e768\""
  },
  "cuIcon-safe": {
    "content:before": "\"\\e769\""
  },
  "cuIcon-activityfill": {
    "content:before": "\"\\e775\""
  },
  "cuIcon-crownfill": {
    "content:before": "\"\\e776\""
  },
  "cuIcon-crown": {
    "content:before": "\"\\e777\""
  },
  "cuIcon-goodsfill": {
    "content:before": "\"\\e778\""
  },
  "cuIcon-messagefill": {
    "content:before": "\"\\e779\""
  },
  "cuIcon-profilefill": {
    "content:before": "\"\\e77a\""
  },
  "cuIcon-sound": {
    "content:before": "\"\\e77b\""
  },
  "cuIcon-sponsorfill": {
    "content:before": "\"\\e77c\""
  },
  "cuIcon-sponsor": {
    "content:before": "\"\\e77d\""
  },
  "cuIcon-upblock": {
    "content:before": "\"\\e77e\""
  },
  "cuIcon-weblock": {
    "content:before": "\"\\e77f\""
  },
  "cuIcon-weunblock": {
    "content:before": "\"\\e780\""
  },
  "cuIcon-my": {
    "content:before": "\"\\e78b\""
  },
  "cuIcon-myfill": {
    "content:before": "\"\\e78c\""
  },
  "cuIcon-emojifill": {
    "content:before": "\"\\e78d\""
  },
  "cuIcon-emojiflashfill": {
    "content:before": "\"\\e78e\""
  },
  "cuIcon-flashbuyfill": {
    "content:before": "\"\\e78f\""
  },
  "cuIcon-text": {
    "content:before": "\"\\e791\""
  },
  "cuIcon-goodsfavor": {
    "content:before": "\"\\e794\""
  },
  "cuIcon-musicfill": {
    "content:before": "\"\\e795\""
  },
  "cuIcon-musicforbidfill": {
    "content:before": "\"\\e796\""
  },
  "cuIcon-card": {
    "content:before": "\"\\e624\""
  },
  "cuIcon-triangledownfill": {
    "content:before": "\"\\e79b\""
  },
  "cuIcon-triangleupfill": {
    "content:before": "\"\\e79c\""
  },
  "cuIcon-roundleftfill-copy": {
    "content:before": "\"\\e79e\""
  },
  "cuIcon-font": {
    "content:before": "\"\\e76a\""
  },
  "cuIcon-title": {
    "content:before": "\"\\e82f\""
  },
  "cuIcon-recordfill": {
    "content:before": "\"\\e7a4\""
  },
  "cuIcon-record": {
    "content:before": "\"\\e7a6\""
  },
  "cuIcon-cardboardfill": {
    "content:before": "\"\\e7a9\""
  },
  "cuIcon-cardboard": {
    "content:before": "\"\\e7aa\""
  },
  "cuIcon-formfill": {
    "content:before": "\"\\e7ab\""
  },
  "cuIcon-coin": {
    "content:before": "\"\\e7ac\""
  },
  "cuIcon-cardboardforbid": {
    "content:before": "\"\\e7af\""
  },
  "cuIcon-circlefill": {
    "content:before": "\"\\e7b0\""
  },
  "cuIcon-circle": {
    "content:before": "\"\\e7b1\""
  },
  "cuIcon-attentionforbid": {
    "content:before": "\"\\e7b2\""
  },
  "cuIcon-attentionforbidfill": {
    "content:before": "\"\\e7b3\""
  },
  "cuIcon-attentionfavorfill": {
    "content:before": "\"\\e7b4\""
  },
  "cuIcon-attentionfavor": {
    "content:before": "\"\\e7b5\""
  },
  "cuIcon-titles": {
    "content:before": "\"\\e701\""
  },
  "cuIcon-icloading": {
    "content:before": "\"\\e67a\""
  },
  "cuIcon-full": {
    "content:before": "\"\\e7bc\""
  },
  "cuIcon-mail": {
    "content:before": "\"\\e7bd\""
  },
  "cuIcon-peoplelist": {
    "content:before": "\"\\e7be\""
  },
  "cuIcon-goodsnewfill": {
    "content:before": "\"\\e7bf\""
  },
  "cuIcon-goodsnew": {
    "content:before": "\"\\e7c0\""
  },
  "cuIcon-medalfill": {
    "content:before": "\"\\e7c1\""
  },
  "cuIcon-medal": {
    "content:before": "\"\\e7c2\""
  },
  "cuIcon-newsfill": {
    "content:before": "\"\\e7c3\""
  },
  "cuIcon-newshotfill": {
    "content:before": "\"\\e7c4\""
  },
  "cuIcon-newshot": {
    "content:before": "\"\\e7c5\""
  },
  "cuIcon-news": {
    "content:before": "\"\\e7c6\""
  },
  "cuIcon-videofill": {
    "content:before": "\"\\e7c7\""
  },
  "cuIcon-video": {
    "content:before": "\"\\e7c8\""
  },
  "cuIcon-exit": {
    "content:before": "\"\\e7cb\""
  },
  "cuIcon-skinfill": {
    "content:before": "\"\\e7cc\""
  },
  "cuIcon-skin": {
    "content:before": "\"\\e7cd\""
  },
  "cuIcon-moneybagfill": {
    "content:before": "\"\\e7ce\""
  },
  "cuIcon-usefullfill": {
    "content:before": "\"\\e7cf\""
  },
  "cuIcon-usefull": {
    "content:before": "\"\\e7d0\""
  },
  "cuIcon-moneybag": {
    "content:before": "\"\\e7d1\""
  },
  "cuIcon-redpacket_fill": {
    "content:before": "\"\\e7d3\""
  },
  "cuIcon-subscription": {
    "content:before": "\"\\e7d4\""
  },
  "cuIcon-loading1": {
    "content:before": "\"\\e633\""
  },
  "cuIcon-github": {
    "content:before": "\"\\e692\""
  },
  "cuIcon-global": {
    "content:before": "\"\\e7eb\""
  },
  "cuIcon-settingsfill": {
    "content:before": "\"\\e6ab\""
  },
  "cuIcon-back_android": {
    "content:before": "\"\\e7ed\""
  },
  "cuIcon-expressman": {
    "content:before": "\"\\e7ef\""
  },
  "cuIcon-evaluate_fill": {
    "content:before": "\"\\e7f0\""
  },
  "cuIcon-group_fill": {
    "content:before": "\"\\e7f5\""
  },
  "cuIcon-play_forward_fill": {
    "content:before": "\"\\e7f6\""
  },
  "cuIcon-deliver_fill": {
    "content:before": "\"\\e7f7\""
  },
  "cuIcon-notice_forbid_fill": {
    "content:before": "\"\\e7f8\""
  },
  "cuIcon-fork": {
    "content:before": "\"\\e60c\""
  },
  "cuIcon-pick": {
    "content:before": "\"\\e7fa\""
  },
  "cuIcon-wenzi": {
    "content:before": "\"\\e6a7\""
  },
  "cuIcon-ellipse": {
    "content:before": "\"\\e600\""
  },
  "cuIcon-qr_code": {
    "content:before": "\"\\e61b\""
  },
  "cuIcon-dianhua": {
    "content:before": "\"\\e64d\""
  },
  "cuIcon-cuIcon": {
    "content:before": "\"\\e602\""
  },
  "cuIcon-loading2": {
    "content:before": "\"\\e7f1\""
  },
  "cuIcon-btn": {
    "content:before": "\"\\e601\""
  },
  "nav-list": {
    "display": "flex",
    "flexWrap": "wrap",
    "paddingTop": "0",
    "paddingRight": "40upx",
    "paddingBottom": "0",
    "paddingLeft": "40upx",
    "justifyContent": "space-between"
  },
  "nav-li": {
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx",
    "borderRadius": "12upx",
    "width": 45,
    "marginTop": 0,
    "marginRight": 2.5,
    "marginBottom": "40upx",
    "marginLeft": 2.5,
    "backgroundImage": "url(https://cdn.nlark.com/yuque/0/2019/png/280374/1552996358352-assets/web-upload/cc3b1807-c684-4b83-8f80-80e5b8a6b975.png)",
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "position": "relative",
    "zIndex": 1,
    "content::after": "\"\"",
    "position::after": "absolute",
    "zIndex::after": -1,
    "width::after": 100,
    "height::after": 100,
    "left::after": 0,
    "bottom::after": -10,
    "borderRadius::after": "10upx",
    "opacity::after": 0.2,
    "transform::after": "scale(0.9, 0.9)"
  },
  "nav-title": {
    "fontSize": "32upx",
    "fontWeight": "300",
    "fontSize::first-letter": "40upx",
    "marginRight::first-letter": "4upx"
  },
  "nav-name": {
    "fontSize": "28upx",
    "textTransform": "Capitalize",
    "marginTop": "20upx",
    "position": "relative",
    "content::before": "\"\"",
    "position::before": "absolute",
    "display::before": "block",
    "width::before": "40upx",
    "height::before": "6upx",
    "background::before": "#fff",
    "bottom::before": 0,
    "right::before": 0,
    "opacity::before": 0.5,
    "content::after": "\"\"",
    "position::after": "absolute",
    "display::after": "block",
    "width::after": "100upx",
    "height::after": "1",
    "background::after": "#fff",
    "bottom::after": 0,
    "right::after": "40upx",
    "opacity::after": 0.3,
    "fontWeight::first-letter": "bold",
    "fontSize::first-letter": "36upx",
    "marginRight::first-letter": "1"
  },
  "text-light": {
    "fontWeight": "300"
  }
}

/***/ }),
/* 8 */
/*!*****************************************************************!*\
  !*** G:/program/mini/1321231231/pages/123/123.nvue?mpType=page ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./123.nvue?vue&type=template&id=fc13063a&mpType=page */ 9);
/* harmony import */ var _123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./123.nvue?vue&type=script&lang=js&mpType=page */ 11);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 13);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "e5a625c4",
  false,
  _123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "program/mini/1321231231/pages/123/123.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 9 */
/*!***********************************************************************************************!*\
  !*** G:/program/mini/1321231231/pages/123/123.nvue?vue&type=template&id=fc13063a&mpType=page ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./123.nvue?vue&type=template&id=fc13063a&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_template_id_fc13063a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!G:/program/mini/1321231231/pages/123/123.nvue?vue&type=template&id=fc13063a&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [_c("view", [_c("u-text", [_vm._v("\n\t123123123\n")])])]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/*!*****************************************************************************************!*\
  !*** G:/program/mini/1321231231/pages/123/123.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../uniapp/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./123.nvue?vue&type=script&lang=js&mpType=page */ 12);
/* harmony import */ var _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_uniapp_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_123_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!G:/program/mini/1321231231/pages/123/123.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
var _default =
{
  data: function data() {
    return {};


  },
  methods: {} };exports.default = _default;

/***/ }),
/* 13 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9HOi9wcm9ncmFtL21pbmkvMTMyMTIzMTIzMS9tYWluLmpzP2JmZDciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby91bmktc3RhdC9kaXN0L2luZGV4LmpzPzkyMWIiLCJ3ZWJwYWNrOi8vL0c6L3Byb2dyYW0vbWluaS8xMzIxMjMxMjMxL3BhZ2VzLmpzb24/OWZiNyIsIndlYnBhY2s6Ly8vRzovcHJvZ3JhbS9taW5pLzEzMjEyMzEyMzEvcGFnZXMuanNvbj82ODkxIiwid2VicGFjazovLy9HOi9wcm9ncmFtL21pbmkvMTMyMTIzMTIzMS9tYWluLmpzP2RkNjEiLCJ3ZWJwYWNrOi8vL0c6L3Byb2dyYW0vbWluaS8xMzIxMjMxMjMxL0FwcC52dWU/MmNiNyIsIndlYnBhY2s6Ly8vRzovcHJvZ3JhbS9taW5pLzEzMjEyMzEyMzEvQXBwLnZ1ZT9iYjlhIiwid2VicGFjazovLy9HOi9wcm9ncmFtL21pbmkvMTMyMTIzMTIzMS9wYWdlcy8xMjMvMTIzLm52dWU/ZjUyZSIsIndlYnBhY2s6Ly8vRzovcHJvZ3JhbS9taW5pLzEzMjEyMzEyMzEvcGFnZXMvMTIzLzEyMy5udnVlPzliMjQiLCJ3ZWJwYWNrOi8vL0c6L3Byb2dyYW0vbWluaS8xMzIxMjMxMjMxL3BhZ2VzLzEyMy8xMjMubnZ1ZT8zODExIiwid2VicGFjazovLy9HOi9wcm9ncmFtL21pbmkvMTMyMTIzMTIzMS9wYWdlcy8xMjMvMTIzLm52dWU/NDM4MiIsInVuaS1hcHA6Ly8vcGFnZXMvMTIzLzEyMy5udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Il0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZBLFFBQW9DO0FBQ3BDLFFBQThCO0FBQzlCLFFBQTBEO0FBQzFELFFBQVEsdUVBQUc7QUFDWCxRQUFRLHVFQUFHO0FBQ1gsUUFBUSx1RUFBRztBQUNYLGdCQUFnQix1RUFBRzs7Ozs7Ozs7Ozs7O0FDUG5CLDZEOztBQUVBLElBQU1BLFlBQVks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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxrS0FBa0ssY0FBYztBQUNoTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUM1bEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEg7QUFDNUg7QUFDbUU7QUFDTDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDNks7QUFDN0ssZ0JBQWdCLG9MQUFVO0FBQzFCLEVBQUUscUZBQU07QUFDUixFQUFFLDBGQUFNO0FBQ1IsRUFBRSxtR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSw4RkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGOzs7Ozs7Ozs7OztBQ2hDZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDLGNBQWM7QUFDZCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQTRjLENBQWdCLHdlQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDT2hlO0FBQ0EsTUFEQSxrQkFDQTtBQUNBOzs7QUFHQSxHQUxBO0FBTUEsYUFOQSxFOzs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicGFnZXMvMTIzLzEyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzLzEyMy8xMjMubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvMTIzLzEyMydcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fNENCRkRDOVwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vdW5pYXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vdW5pYXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi91bmlhcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi91bmlhcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vdW5pYXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi91bmlhcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vdW5pYXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwicm91bmRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNTAwMHVweFwiXG4gIH0sXG4gIFwicmFkaXVzXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjZ1cHhcIlxuICB9LFxuICBcInJlc3BvbnNlXCI6IHtcbiAgICBcIndpZHRoXCI6IDEwMFxuICB9LFxuICBcInN3aXRjaC1zZXhcIjoge1xuICAgIFwiY29udGVudDo6YWZ0ZXJcIjogXCJcXFwiXFxcXGU3MWNcXFwiXCIsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWFcXFwiXCJcbiAgfSxcbiAgXCJzb2xpZFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyOjphZnRlclwiOiBcIjF1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpXCJcbiAgfSxcbiAgXCJzb2xpZC10b3BcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJUb3A6OmFmdGVyXCI6IFwiMXVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcInNvbGlkLXJpZ2h0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlclJpZ2h0OjphZnRlclwiOiBcIjF1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpXCJcbiAgfSxcbiAgXCJzb2xpZC1ib3R0b21cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckJvdHRvbTo6YWZ0ZXJcIjogXCIxdXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKVwiXG4gIH0sXG4gIFwic29saWQtbGVmdFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckxlZnQ6OmFmdGVyXCI6IFwiMXVweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcInNvbGlkc1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXI6OmFmdGVyXCI6IFwiOHVweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJzb2xpZHMtdG9wXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJUb3A6OmFmdGVyXCI6IFwiOHVweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJzb2xpZHMtcmlnaHRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJSaWdodDo6YWZ0ZXJcIjogXCI4dXB4IHNvbGlkICNlZWVcIlxuICB9LFxuICBcInNvbGlkcy1ib3R0b21cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyQm90dG9tOjphZnRlclwiOiBcIjh1cHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwic29saWRzLWxlZnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckxlZnQ6OmFmdGVyXCI6IFwiOHVweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJkYXNoZWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXI6OmFmdGVyXCI6IFwiMXVweCBkYXNoZWQgI2RkZFwiXG4gIH0sXG4gIFwiZGFzaGVkLXRvcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJUb3A6OmFmdGVyXCI6IFwiMXVweCBkYXNoZWQgI2RkZFwiXG4gIH0sXG4gIFwiZGFzaGVkLXJpZ2h0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJSaWdodDo6YWZ0ZXJcIjogXCIxdXB4IGRhc2hlZCAjZGRkXCJcbiAgfSxcbiAgXCJkYXNoZWQtYm90dG9tXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyQm90dG9tOjphZnRlclwiOiBcIjF1cHggZGFzaGVkICNkZGRcIlxuICB9LFxuICBcImRhc2hlZC1sZWZ0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckxlZnQ6OmFmdGVyXCI6IFwiMXVweCBkYXNoZWQgI2RkZFwiXG4gIH0sXG4gIFwic2hhZG93LWxnXCI6IHtcbiAgICBcIi0tU2hhZG93U2l6ZVwiOiBcIjB1cHggNDB1cHggMTAwdXB4IDB1cHhcIlxuICB9LFxuICBcInNoYWRvdy13YXJwXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImJveFNoYWRvd1wiOiBcIjAgMCAxMHVweCByZ2JhKDAsIDAsIDAsIDAuMSlcIixcbiAgICBcInBvc2l0aW9uOmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFwiXCIsXG4gICAgXCJ0b3A6YmVmb3JlXCI6IFwiMjB1cHhcIixcbiAgICBcImJvdHRvbTpiZWZvcmVcIjogXCIzMHVweFwiLFxuICAgIFwibGVmdDpiZWZvcmVcIjogXCIyMHVweFwiLFxuICAgIFwid2lkdGg6YmVmb3JlXCI6IDUwLFxuICAgIFwiYm94U2hhZG93OmJlZm9yZVwiOiBcIjAgMzB1cHggMjB1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gICAgXCJ0cmFuc2Zvcm06YmVmb3JlXCI6IFwicm90YXRlKC0zZGVnKVwiLFxuICAgIFwiekluZGV4OmJlZm9yZVwiOiAtMSxcbiAgICBcInBvc2l0aW9uOmJlZm9yZTphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJjb250ZW50OmJlZm9yZTphZnRlclwiOiBcIlxcXCJcXFwiXCIsXG4gICAgXCJ0b3A6YmVmb3JlOmFmdGVyXCI6IFwiMjB1cHhcIixcbiAgICBcImJvdHRvbTpiZWZvcmU6YWZ0ZXJcIjogXCIzMHVweFwiLFxuICAgIFwibGVmdDpiZWZvcmU6YWZ0ZXJcIjogXCIyMHVweFwiLFxuICAgIFwid2lkdGg6YmVmb3JlOmFmdGVyXCI6IDUwLFxuICAgIFwiYm94U2hhZG93OmJlZm9yZTphZnRlclwiOiBcIjAgMzB1cHggMjB1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCIsXG4gICAgXCJ0cmFuc2Zvcm06YmVmb3JlOmFmdGVyXCI6IFwicm90YXRlKC0zZGVnKVwiLFxuICAgIFwiekluZGV4OmJlZm9yZTphZnRlclwiOiAtMSxcbiAgICBcInJpZ2h0OmFmdGVyXCI6IFwiMjB1cHhcIixcbiAgICBcInRyYW5zZm9ybTphZnRlclwiOiBcInJvdGF0ZSgzZGVnKVwiXG4gIH0sXG4gIFwic2hhZG93LWJsdXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YmVmb3JlXCI6IFwiXFxcIlxcXCJcIixcbiAgICBcImRpc3BsYXk6OmJlZm9yZVwiOiBcImJsb2NrXCIsXG4gICAgXCJiYWNrZ3JvdW5kOjpiZWZvcmVcIjogXCJpbmhlcml0XCIsXG4gICAgXCJmaWx0ZXI6OmJlZm9yZVwiOiBcImJsdXIoMTB1cHgpXCIsXG4gICAgXCJwb3NpdGlvbjo6YmVmb3JlXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcIndpZHRoOjpiZWZvcmVcIjogMTAwLFxuICAgIFwiaGVpZ2h0OjpiZWZvcmVcIjogMTAwLFxuICAgIFwidG9wOjpiZWZvcmVcIjogXCIxMHVweFwiLFxuICAgIFwibGVmdDo6YmVmb3JlXCI6IFwiMTB1cHhcIixcbiAgICBcInpJbmRleDo6YmVmb3JlXCI6IC0xLFxuICAgIFwib3BhY2l0eTo6YmVmb3JlXCI6IDAuNCxcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YmVmb3JlXCI6IFwiMCAwXCIsXG4gICAgXCJ0cmFuc2Zvcm06OmJlZm9yZVwiOiBcInNjYWxlKDEsIDEpXCJcbiAgfSxcbiAgXCJjdS1idG5cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYm9yZGVyXCI6IFwiMHVweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm94U2l6aW5nXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzB1cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjh1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0dXB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlKDB1cHgsIDB1cHgpXCIsXG4gICAgXCJkaXNwbGF5OjphZnRlclwiOiBcIm5vbmVcIlxuICB9LFxuICBcImJsb2NrXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiXG4gIH0sXG4gIFwiY3UtdGFnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjR1cHhcIixcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNnVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjB1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTZ1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQ4dXB4XCIsXG4gICAgXCJmb250RmFtaWx5XCI6IFwiSGVsdmV0aWNhIE5ldWUsIEhlbHZldGljYSwgc2Fucy1zZXJpZlwiLFxuICAgIFwid2hpdGVTcGFjZVwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwiY3UtY2Fwc3VsZVwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJtaWRkbGVcIlxuICB9LFxuICBcImN1LWF2YXRhclwiOiB7XG4gICAgXCJmb250VmFyaWFudFwiOiBcInNtYWxsLWNhcHNcIixcbiAgICBcIm1hcmdpblRvcFwiOiAwLFxuICAgIFwibWFyZ2luUmlnaHRcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjY2NjY2NjXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIndpZHRoXCI6IFwiNjR1cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0dXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kU2l6ZVwiOiBcImNvdmVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUG9zaXRpb25cIjogXCJjZW50ZXJcIixcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICBcImZvbnRTaXplXCI6IDEuNVxuICB9LFxuICBcImN1LWF2YXRhci1ncm91cFwiOiB7XG4gICAgXCJkaXJlY3Rpb25cIjogXCJydGxcIixcbiAgICBcInVuaWNvZGVCaWRpXCI6IFwiYmlkaS1vdmVycmlkZVwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDB1cHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIlxuICB9LFxuICBcImN1LXByb2dyZXNzXCI6IHtcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJoZWlnaHRcIjogXCIyOHVweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ViZWVmNVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJjdS1sb2FkXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwibGluZUhlaWdodFwiOiAzLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmb250RmFtaWx5OjpiZWZvcmVcIjogXCJcXFwiY3VJY29uXFxcIlwiLFxuICAgIFwiZGlzcGxheTo6YmVmb3JlXCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJtYXJnaW5SaWdodDo6YmVmb3JlXCI6IFwiNnVweFwiXG4gIH0sXG4gIFwibG9hZC1wcm9ncmVzc1wiOiB7XG4gICAgXCJwb2ludGVyRXZlbnRzXCI6IFwibm9uZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ3aWR0aFwiOiAxMDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMjAwMFxuICB9LFxuICBcImdyYXlzY2FsZVwiOiB7XG4gICAgXCJmaWx0ZXJcIjogXCJncmF5c2NhbGUoMSlcIlxuICB9LFxuICBcImN1LWJhclwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiMTAwdXB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImN1LXRhYmJhci1oZWlnaHRcIjoge1xuICAgIFwibWluSGVpZ2h0XCI6IFwiMTAwdXB4XCJcbiAgfSxcbiAgXCJjdS1jdXN0b21cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJuYXZcIjoge1xuICAgIFwid2hpdGVTcGFjZVwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwiY3UtdGltZWxpbmVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImJsb2NrXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJjdS1jaGF0XCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJjdS1jYXJkXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcImN1LWZvcm0tZ3JvdXBcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjF1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMXVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHVweFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjEwMHVweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJjdS1tb2RhbFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInpJbmRleFwiOiAxMTEwLFxuICAgIFwib3BhY2l0eVwiOiAwLFxuICAgIFwib3V0bGluZVwiOiAwLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJNc1RyYW5zZm9ybVwiOiBcInNjYWxlKDEuMTg1KVwiLFxuICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMS4xODUpXCIsXG4gICAgXCJiYWNrZmFjZVZpc2liaWxpdHlcIjogXCJoaWRkZW5cIixcbiAgICBcInBlcnNwZWN0aXZlXCI6IFwiMjAwMHVweFwiLFxuICAgIFwiYmFja2dyb3VuZFwiOiBcInJnYmEoMCwgMCwgMCwgMC42KVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDMwMCxcbiAgICBcInRyYW5zaXRpb25UaW1pbmdGdW5jdGlvblwiOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgXCJ0cmFuc2l0aW9uRGVsYXlcIjogMCxcbiAgICBcInBvaW50ZXJFdmVudHNcIjogXCJub25lXCIsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCJcXFwiXFxcXDIwMEJcXFwiXCIsXG4gICAgXCJkaXNwbGF5OjpiZWZvcmVcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcImhlaWdodDo6YmVmb3JlXCI6IDEwMCxcbiAgICBcInZlcnRpY2FsQWxpZ246OmJlZm9yZVwiOiBcIm1pZGRsZVwiXG4gIH0sXG4gIFwiQFRSQU5TSVRJT05cIjoge1xuICAgIFwiY3UtbW9kYWxcIjoge1xuICAgICAgXCJkdXJhdGlvblwiOiAzMDAsXG4gICAgICBcInRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZS1pbi1vdXRcIixcbiAgICAgIFwiZGVsYXlcIjogMFxuICAgIH1cbiAgfSxcbiAgXCJjdS1kaWFsb2dcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwidmVydGljYWxBbGlnblwiOiBcIm1pZGRsZVwiLFxuICAgIFwid2lkdGhcIjogXCI2ODB1cHhcIixcbiAgICBcIm1heFdpZHRoXCI6IDEwMCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmOGY4ZjhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwdXB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwic2NyZWVuLXN3aXBlclwiOiB7XG4gICAgXCJtaW5IZWlnaHRcIjogXCIzNzV1cHhcIlxuICB9LFxuICBcImNhcmQtc3dpcGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQyMHVweFwiXG4gIH0sXG4gIFwidG93ZXItc3dpcGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjQyMHVweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwibWF4V2lkdGhcIjogXCI3NTB1cHhcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJjdS1zdGVwc1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwiZmxleFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiXG4gIH0sXG4gIFwiYmFzaXMteHNcIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDIwXG4gIH0sXG4gIFwiYmFzaXMtc21cIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDQwXG4gIH0sXG4gIFwiYmFzaXMtZGZcIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDUwXG4gIH0sXG4gIFwiYmFzaXMtbGdcIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDYwXG4gIH0sXG4gIFwiYmFzaXMteGxcIjoge1xuICAgIFwiZmxleEJhc2lzXCI6IDgwXG4gIH0sXG4gIFwiZmxleC1zdWJcIjoge1xuICAgIFwiZmxleFwiOiAxXG4gIH0sXG4gIFwiZmxleC10d2ljZVwiOiB7XG4gICAgXCJmbGV4XCI6IDJcbiAgfSxcbiAgXCJmbGV4LXRyZWJsZVwiOiB7XG4gICAgXCJmbGV4XCI6IDNcbiAgfSxcbiAgXCJmbGV4LWRpcmVjdGlvblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJmbGV4LXdyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJhbGlnbi1zdGFydFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwiYWxpZ24tZW5kXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiYWxpZ24tY2VudGVyXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcImFsaWduLXN0cmV0Y2hcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcInN0cmV0Y2hcIlxuICB9LFxuICBcInNlbGYtc3RhcnRcIjoge1xuICAgIFwiYWxpZ25TZWxmXCI6IFwiZmxleC1zdGFydFwiXG4gIH0sXG4gIFwic2VsZi1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25TZWxmXCI6IFwiZmxleC1jZW50ZXJcIlxuICB9LFxuICBcInNlbGYtZW5kXCI6IHtcbiAgICBcImFsaWduU2VsZlwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJzZWxmLXN0cmV0Y2hcIjoge1xuICAgIFwiYWxpZ25TZWxmXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwianVzdGlmeS1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImp1c3RpZnktZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImp1c3RpZnktY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWJldHdlZW5cIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWFyb3VuZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWFyb3VuZFwiXG4gIH0sXG4gIFwiZ3JpZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJtYXJnaW4tMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1hcmdpbi14c1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTB1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHVweFwiXG4gIH0sXG4gIFwibWFyZ2luLXNtXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwdXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW5cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzB1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzB1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwdXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1sZ1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHVweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDB1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHVweFwiXG4gIH0sXG4gIFwibWFyZ2luLXhsXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwdXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wLXhzXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wLXNtXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wLWxnXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdG9wLXhsXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tcmlnaHQteHNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHVweFwiXG4gIH0sXG4gIFwibWFyZ2luLXJpZ2h0LXNtXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1yaWdodFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tcmlnaHQtbGdcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHVweFwiXG4gIH0sXG4gIFwibWFyZ2luLXJpZ2h0LXhsXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b20teHNcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b20tc21cIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b21cIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b20tbGdcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1ib3R0b20teGxcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1sZWZ0LXhzXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHVweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxlZnQtc21cIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbGVmdFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzB1cHhcIlxuICB9LFxuICBcIm1hcmdpbi1sZWZ0LWxnXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHVweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxlZnQteGxcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHIteHNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHItc21cIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHItbGdcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbHIteGxcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGIteHNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTB1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGItc21cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjB1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzB1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGItbGdcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDB1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwdXB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tdGIteGxcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTB1cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwdXB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicGFkZGluZy14c1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTB1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTB1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTB1cHhcIlxuICB9LFxuICBcInBhZGRpbmctc21cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwdXB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHVweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHVweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDB1cHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDB1cHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDB1cHhcIlxuICB9LFxuICBcInBhZGRpbmcteGxcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwdXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwdXB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLXRvcC14c1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTB1cHhcIlxuICB9LFxuICBcInBhZGRpbmctdG9wLXNtXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy10b3BcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwdXB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLXRvcC1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDB1cHhcIlxuICB9LFxuICBcInBhZGRpbmctdG9wLXhsXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodC14c1wiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodC1zbVwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodC1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1yaWdodC14bFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1ib3R0b20teHNcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwdXB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWJvdHRvbS1zbVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjB1cHhcIlxuICB9LFxuICBcInBhZGRpbmctYm90dG9tXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1ib3R0b20tbGdcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwdXB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWJvdHRvbS14bFwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTB1cHhcIlxuICB9LFxuICBcInBhZGRpbmctbGVmdC14c1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwdXB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWxlZnQtc21cIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sZWZ0XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzB1cHhcIlxuICB9LFxuICBcInBhZGRpbmctbGVmdC1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwdXB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWxlZnQteGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sci14c1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sci1zbVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sclwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sci1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sci14bFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy10Yi14c1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy10Yi1zbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy10YlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy10Yi1sZ1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHVweFwiXG4gIH0sXG4gIFwicGFkZGluZy10Yi14bFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTB1cHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHVweFwiXG4gIH0sXG4gIFwiY2ZcIjoge1xuICAgIFwiY29udGVudDo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcImRpc3BsYXk6OmFmdGVyXCI6IFwidGFibGVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjpiZWZvcmVcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcImRpc3BsYXk6OmFmdGVyOjpiZWZvcmVcIjogXCJ0YWJsZVwiLFxuICAgIFwiY2xlYXI6OmFmdGVyXCI6IFwiYm90aFwiXG4gIH0sXG4gIFwiZmxcIjoge1xuICAgIFwiZmxvYXRcIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJmclwiOiB7XG4gICAgXCJmbG9hdFwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJsaW5lLXJlZFwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjZTU0ZDQyXCIsXG4gICAgXCJjb2xvclwiOiBcIiNlNTRkNDJcIlxuICB9LFxuICBcImxpbmVzLXJlZFwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2U1NGQ0MlwiLFxuICAgIFwiY29sb3JcIjogXCIjZTU0ZDQyXCJcbiAgfSxcbiAgXCJsaW5lLW9yYW5nZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjZjM3YjFkXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmMzdiMWRcIlxuICB9LFxuICBcImxpbmVzLW9yYW5nZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2YzN2IxZFwiLFxuICAgIFwiY29sb3JcIjogXCIjZjM3YjFkXCJcbiAgfSxcbiAgXCJsaW5lLXllbGxvd1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjZmJiZDA4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmYmJkMDhcIlxuICB9LFxuICBcImxpbmVzLXllbGxvd1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2ZiYmQwOFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmJiZDA4XCJcbiAgfSxcbiAgXCJsaW5lLW9saXZlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiM4ZGM2M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiIzhkYzYzZlwiXG4gIH0sXG4gIFwibGluZXMtb2xpdmVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiM4ZGM2M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiIzhkYzYzZlwiXG4gIH0sXG4gIFwibGluZS1ncmVlblwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjMzliNTRhXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzOWI1NGFcIlxuICB9LFxuICBcImxpbmVzLWdyZWVuXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjMzliNTRhXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzOWI1NGFcIlxuICB9LFxuICBcImxpbmUtY3lhblwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjMWNiYmI0XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxY2JiYjRcIlxuICB9LFxuICBcImxpbmVzLWN5YW5cIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiMxY2JiYjRcIixcbiAgICBcImNvbG9yXCI6IFwiIzFjYmJiNFwiXG4gIH0sXG4gIFwibGluZS1ibHVlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiMwMDgxZmZcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwODFmZlwiXG4gIH0sXG4gIFwibGluZXMtYmx1ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzAwODFmZlwiLFxuICAgIFwiY29sb3JcIjogXCIjMDA4MWZmXCJcbiAgfSxcbiAgXCJsaW5lLXB1cnBsZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjNjczOWI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiM2NzM5YjZcIlxuICB9LFxuICBcImxpbmVzLXB1cnBsZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzY3MzliNlwiLFxuICAgIFwiY29sb3JcIjogXCIjNjczOWI2XCJcbiAgfSxcbiAgXCJsaW5lLW1hdXZlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiM5YzI2YjBcIixcbiAgICBcImNvbG9yXCI6IFwiIzljMjZiMFwiXG4gIH0sXG4gIFwibGluZXMtbWF1dmVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiM5YzI2YjBcIixcbiAgICBcImNvbG9yXCI6IFwiIzljMjZiMFwiXG4gIH0sXG4gIFwibGluZS1waW5rXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiNlMDM5OTdcIixcbiAgICBcImNvbG9yXCI6IFwiI2UwMzk5N1wiXG4gIH0sXG4gIFwibGluZXMtcGlua1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2UwMzk5N1wiLFxuICAgIFwiY29sb3JcIjogXCIjZTAzOTk3XCJcbiAgfSxcbiAgXCJsaW5lLWJyb3duXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiNhNTY3M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiI2E1NjczZlwiXG4gIH0sXG4gIFwibGluZXMtYnJvd25cIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiNhNTY3M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiI2E1NjczZlwiXG4gIH0sXG4gIFwibGluZS1ncmV5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiM4Nzk5YTNcIixcbiAgICBcImNvbG9yXCI6IFwiIzg3OTlhM1wiXG4gIH0sXG4gIFwibGluZXMtZ3JleVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzg3OTlhM1wiLFxuICAgIFwiY29sb3JcIjogXCIjODc5OWEzXCJcbiAgfSxcbiAgXCJsaW5lLWdyYXlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiI2FhYWFhYVwiLFxuICAgIFwiY29sb3JcIjogXCIjYWFhYWFhXCJcbiAgfSxcbiAgXCJsaW5lcy1ncmF5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjYWFhYWFhXCIsXG4gICAgXCJjb2xvclwiOiBcIiNhYWFhYWFcIlxuICB9LFxuICBcImxpbmUtYmxhY2tcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJsaW5lcy1ibGFja1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzMzMzMzM1wiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJsaW5lLXdoaXRlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwibGluZXMtd2hpdGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctcmVkXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlNTRkNDJcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctb3JhbmdlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMzdiMWRcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmcteWVsbG93XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmYmJkMDhcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwiYmctb2xpdmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzhkYzYzZlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmVlblwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzliNTRhXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWN5YW5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzFjYmJiNFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ibHVlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDgxZmZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctcHVycGxlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2NzM5YjZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctbWF1dmVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzljMjZiMFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1waW5rXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlMDM5OTdcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctYnJvd25cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2E1NjczZlwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmV5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4Nzk5YTNcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JheVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjBmMGYwXCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImJnLWJsYWNrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctd2hpdGVcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCJcbiAgfSxcbiAgXCJiZy1zaGFkZVRvcFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAxKSwgcmdiYSgwLCAwLCAwLCAwLjAxKSlcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctc2hhZGVCb3R0b21cIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC4wMSksIHJnYmEoMCwgMCwgMCwgMSkpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWdyYWR1YWwtcmVkXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2Y0M2YzYiwgI2VjMDA4YylcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JhZHVhbC1vcmFuZ2VcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmY5NzAwLCAjZWQxYzI0KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmFkdWFsLWdyZWVuXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzM5YjU0YSwgIzhkYzYzZilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JhZHVhbC1wdXJwbGVcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjOTAwMGZmLCAjNWUwMGZmKVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmFkdWFsLXBpbmtcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZWMwMDhjLCAjNjczOWI2KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmFkdWFsLWJsdWVcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjMDA4MWZmLCAjMWNiYmI0KVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1pbWdcIjoge1xuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJjb3ZlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kUmVwZWF0XCI6IFwibm8tcmVwZWF0XCJcbiAgfSxcbiAgXCJiZy1tYXNrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzMzMzMzNcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyXCI6IFwiXFxcIlxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlclwiOiAxMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyXCI6IDEwMCxcbiAgICBcImRpc3BsYXk6OmFmdGVyXCI6IFwiYmxvY2tcIixcbiAgICBcImJhY2tncm91bmRDb2xvcjo6YWZ0ZXJcIjogXCJyZ2JhKDAsMCwwLDAuNClcIixcbiAgICBcInBvc2l0aW9uOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0OjphZnRlclwiOiAwLFxuICAgIFwicmlnaHQ6OmFmdGVyXCI6IDAsXG4gICAgXCJib3R0b206OmFmdGVyXCI6IDAsXG4gICAgXCJ0b3A6OmFmdGVyXCI6IDBcbiAgfSxcbiAgXCJiZy12aWRlb1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJ0ZXh0LXhzXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjB1cHhcIlxuICB9LFxuICBcInRleHQtc21cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHVweFwiXG4gIH0sXG4gIFwidGV4dC1kZlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4dXB4XCJcbiAgfSxcbiAgXCJ0ZXh0LWxnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJ1cHhcIlxuICB9LFxuICBcInRleHQteGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNnVweFwiXG4gIH0sXG4gIFwidGV4dC14eGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0NHVweFwiXG4gIH0sXG4gIFwidGV4dC1zbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjgwdXB4XCJcbiAgfSxcbiAgXCJ0ZXh0LXhzbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjEyMHVweFwiXG4gIH0sXG4gIFwidGV4dC1BYmNcIjoge1xuICAgIFwidGV4dFRyYW5zZm9ybVwiOiBcIkNhcGl0YWxpemVcIlxuICB9LFxuICBcInRleHQtQUJDXCI6IHtcbiAgICBcInRleHRUcmFuc2Zvcm1cIjogXCJVcHBlcmNhc2VcIlxuICB9LFxuICBcInRleHQtYWJjXCI6IHtcbiAgICBcInRleHRUcmFuc2Zvcm1cIjogXCJMb3dlcmNhc2VcIlxuICB9LFxuICBcInRleHQtcHJpY2VcIjoge1xuICAgIFwiY29udGVudDo6YmVmb3JlXCI6IFwiXFxcIsKlXFxcIlwiLFxuICAgIFwiZm9udFNpemU6OmJlZm9yZVwiOiA4MCxcbiAgICBcIm1hcmdpblJpZ2h0OjpiZWZvcmVcIjogXCI0dXB4XCJcbiAgfSxcbiAgXCJ0ZXh0LWN1dFwiOiB7XG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgIFwid2hpdGVTcGFjZVwiOiBcIm5vd3JhcFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInRleHQtYm9sZFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwidGV4dC1jZW50ZXJcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ0ZXh0LWNvbnRlbnRcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiAxLjZcbiAgfSxcbiAgXCJ0ZXh0LWxlZnRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiXG4gIH0sXG4gIFwidGV4dC1yaWdodFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJyaWdodFwiXG4gIH0sXG4gIFwidGV4dC1yZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZTU0ZDQyXCJcbiAgfSxcbiAgXCJ0ZXh0LW9yYW5nZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmMzdiMWRcIlxuICB9LFxuICBcInRleHQteWVsbG93XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZiYmQwOFwiXG4gIH0sXG4gIFwidGV4dC1vbGl2ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4ZGM2M2ZcIlxuICB9LFxuICBcInRleHQtZ3JlZW5cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzliNTRhXCJcbiAgfSxcbiAgXCJ0ZXh0LWN5YW5cIjoge1xuICAgIFwiY29sb3JcIjogXCIjMWNiYmI0XCJcbiAgfSxcbiAgXCJ0ZXh0LWJsdWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDA4MWZmXCJcbiAgfSxcbiAgXCJ0ZXh0LXB1cnBsZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM2NzM5YjZcIlxuICB9LFxuICBcInRleHQtbWF1dmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOWMyNmIwXCJcbiAgfSxcbiAgXCJ0ZXh0LXBpbmtcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZTAzOTk3XCJcbiAgfSxcbiAgXCJ0ZXh0LWJyb3duXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2E1NjczZlwiXG4gIH0sXG4gIFwidGV4dC1ncmV5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzg3OTlhM1wiXG4gIH0sXG4gIFwidGV4dC1ncmF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwidGV4dC1ibGFja1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcInRleHQtd2hpdGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJjdUljb25mb250LXNwaW5cIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uXCI6IFwiY3VJY29uLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyXCIsXG4gICAgXCJhbmltYXRpb25cIjogXCJjdUljb24tc3BpbiAycyBpbmZpbml0ZSBsaW5lYXJcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIlxuICB9LFxuICBcImN1SWNvbmZvbnQtcHVsc2VcIjoge1xuICAgIFwiV2Via2l0QW5pbWF0aW9uXCI6IFwiY3VJY29uLXNwaW4gMXMgaW5maW5pdGUgc3RlcHMoOClcIixcbiAgICBcImFuaW1hdGlvblwiOiBcImN1SWNvbi1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJcbiAgfSxcbiAgXCJARk9OVC1GQUNFXCI6IFtcbiAgICB7XG4gICAgICBcImZvbnRGYW1pbHlcIjogXCJjdUljb25cIixcbiAgICAgIFwic3JjXCI6IFwidXJsKCcvL2F0LmFsaWNkbi5jb20vdC9mb250XzUzMzU2Nl95ZnEyZDl3ZGlqLmVvdD90PTE1NDUyMzk5ODU4MzEjaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksXFxuXFx0XFx0XFxuXFx0XFx0dXJsKCdkYXRhOmFwcGxpY2F0aW9uL3gtZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFLUWNBQXNBQUFBQk5LQUFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCSFUxVkNBQUFCQ0FBQUFETUFBQUJDc1A2ejdVOVRMeklBQUFFOEFBQUFSQUFBQUZZOGRrb2lZMjFoY0FBQUFZQUFBQWlhQUFBVGtpbFpQcTluYkhsbUFBQUtIQUFBanFvQUFRa1VPallsQ21obFlXUUFBSmpJQUFBQUx3QUFBRFlVTW9GZ2FHaGxZUUFBbVBnQUFBQWZBQUFBSkFod0JjcG9iWFI0QUFDWkdBQUFBQmtBQUFTY25TSUFBR3h2WTJFQUFKazBBQUFDVUFBQUFsQWhYMkMrYldGNGNBQUFtNFFBQUFBZkFBQUFJQUpBQU9wdVlXMWxBQUNicEFBQUFVVUFBQUp0UGxUK2ZYQnZjM1FBQUp6c0FBQUhMUUFBRE1ZaThLWEplSnhqWUdSZ1lPQmlrR1BRWVdCMGNmTUpZZUJnWUdHQUFKQU1ZMDVtZWlKUURNb0R5ckdBYVE0Z1pvT0lBZ0NLSXdOUEFIaWNZMkJrWVdTY3dNREt3TUhVeVhTR2dZR2hIMEl6dm1Zd1l1UmdZR0JpWUdWbXdBb0MwbHhUR0J5ZU1ielFaMjc0MzhBUXc5ekEwQUFVWmdUSkFRRGhIUXdWZUp6TjEvbmYxbU1heHZIUDlaUWlTVUtXYkNYWjErdzdRME5xSW1OSmhTU1NaU3lUbE1RWXM5aGxMR1BLTW9SQk15VTF0bElpSXJLVWZleWNaeU9wa0NWTGMxelBZYno4QnpQZHI3ZmI4L3lRMi8yOXp1TTZUbUE1b0lsc0lVMzE0NjBVNnIrTzFtOUw0KytiMEtMeDkwMmJucTZmTCtJQ210RTBHcUpsdElsMjBURTZSNWZvSGozam1EZ3R6b29oTVN5R3g0aTRNQzZLUytMcXVENXVpRnZpemhnYjQyTkNUSXdwTVMxbXhPeDRJeUpMdHNpTmM4dmNON3Zub2RrcisyYS9ISkNEOG9LOE1rZm1kVGs2YjhveGVVZU96VWs1TTEvSXVUay9GK1RpL0NxWHp0dDYyVElJZnZJcDlvc0RvMGNjSHYzaWpCZ2NRMy84RkJmSFZZMmZZbFRjRnZmRXVNWlBjWDlNamVueFZMd1liOFpIMlNSYjVhYTVUWGJOSG5sWTlzNWpzMzhPek1GNXFUN0ZOVG5xaDA5eFY0N0x5VGtyNXpSK2lvVzU1TCtmNG4vK3AraXAvUEVucjh1NGhyOHdsaWQ0bXRrOC8rUHJSVjV1ZkwzRFBEN2k0OGJYVnl3dGxCWmxuYkpWNlZNR2xkRmxUSmxaWnBlWHkxdmx2ZkpCbVZjK2JtaG9hS0ZYcTRiV1A3emFOblJvMkxXaFM4TUJqYTl1RFQwYmV1cER0QytkU3NleUhwTktCK2FWVmZXcEduUjJtdXFFTmFONTJaRGxXVUVuYVVWYXNoS3RXSm5XckVJYlZtVTFWcWN0YTdBbWE3RTI3VmlIZFZtUDlkbUE5blJnUXpxeUVaM1ltRTNZbE0zNGxzMTFKcmRrSzdabUc3Wmx1N0lhbmRtZUhkaVJuZGlaWGRpVjNkaWRQZGl6YkZEYXNoZDdzdy83OGpQMlkzKzY4SE1PNEVDNmNoRGQ2TTR2Nk1IQkhFSlBEdVdYSE1iaEhNR1I5T0lvZXRPSHZoek5NUnhMUDQ2alA4Y3pnQk00a1lHY3hOOFl4TW1jd3FtY3hxODRuVE00azdQNE5ZTTVteUdjdzFDR2NTN0RPWThSbksrSitZYmZjQ0cvMVhQNkhiL25EM3BHRjNNSmwrcEpYYzRWWE1sVmpPUnEvcVRuZGkzWGNUMS81Z1k5d1ZHTTVrWnU0bVp1NGEvY3ltMk00WGJ1NEU3dTRtN3UwUlArTy85Z0hPTzVsd25jeDBUK3lmMDh3SU04eE1OTVpncVBNSlZwUE1wMEh1TnhadWhFUE1sTW50SzVtTVV6UEt2VDhaek94UXM2R1hPWXE5UHdrazdISzd6S2E3ek9HL3lMTjNtTHQzVmV4dW0vOHk3djhUNGY4S0hHTHZtM1R0QjhQbUVoaTFqTXAzekc1eXpoQzc3VWlmcWFwWHpIOXl6VHlTcWxvVFFwVGN0eXBWbHBYcFl2Sytpc3JWaGFscFZLcTdKeWFWMVdLVzNLNm1XTnNtWlpxMnhVMWk3dGRCTFhMZXV6UUNlcTJmOTZzUDRQL3JTcy8xaHBrWDhvbTlUTXM5SmU3OFZLSjcwM1dPbW85NWFtYVNUYUdKUDAzczQwb1VSSFV4WVFuVTFUUyt4bk5mMWpmNlArM1YyczNoWnhvTlViSTdwYXZVbmlJTlBFRTkyTTVucnZia29Cb29jcEQ0aURUY2xBSEdMMXRvbWVwclFnRHJmNlRjUVJwZ1FoampSbENkSExsQ3JFVWFaOElYcWJrb2JvWTlUdm82OVIvMytQTnVVUWNZd3BrWWgrcG13aWpqT2xGTkhmbEZmRThhYmtJZ2FZTW93NHdhamY5NG1tWENNR21oS09PTW1vejJpUUtmV0lrMDM1UjV4aTFHZDlxbEdmM1dsRy9UN1BNT3J6UE5PVW1NUlpSajBiZzAwcFNweHQxTE0weEpTc3hGQlR4aExEVEdsTEREZmxMakhDYWx1SUMwMVpURnhrU21YaVlsTStFNWVZa3BxNHlwVFp4RWhqTzcxZmJhVisvOWNiOVR6ZVlNcDJZcFFwNVluUnByd25ialFsUDNHVDZRNGdiamJkQnNRdHBudUJ1TTEwUXhCalRIY0ZjYnZwMWlEdU1QYlUrNTFXNnJPNHgwbzlEMk5OdHdzeHpuVFBFT05OTnc0eHdYVDNFQk5OdHhCeHYxSG43QUdqenRtRFJwMnpoMHkzRmZHdzZkNGlKaHQxL3FZWWRmNm1HblgrcGhsMS9xWWJkZjRlTTkxNXhPTkduY1VaUnAzRnA0dzZpMDhiZFJabm1XNUo0aG5UZlVrOGE3bzVpZGxHbmRjWGpUcXZjNHc2cjNPTk9xOHZHWFZlWHpicXZMNWkxSGw5MWFqeitwcFI1L1Yxbzg3ckc2WjdtbmpUcUxQN2xsRm45MjJqenU0N1JwM2RkNDA2dSs4WmRYYmZOK3JzZm1EVTJmM1FxTE1icGk1QWZHVFVPWjV2MURuKzJLaHp2TUNvYy95SlVlZDRvYWxIRUl0TWpZSlliTlQ1L3RTbzgvMlpVZWY3YzFQeklKWVlkZGEvTU9xc2YyblVXZi9LMUZDSXI0MDY5MHVOT3ZmZm1Qb0w4YTFSTStBN1U2Y2h2amRxSGl3ejlSelZBbFBqSVl1cCs1Qk5UQzJJYkdycVErUnlwbVpFTmpOMUpMSzVxUzJSeTV0NkU3bUNxVUdSTFV4ZGlteGxhbFhreXFaK1JiWTJOUzF5RlZQbkl0dVkyaGU1cXFtSGthdVpHaG01dXFtYmtXMU5MWTFjdzlUWHlEVk56WTFjeTlUaHlMVk5iWTVzWitwMTVEcW1oa2V1YStwNjVIcW0xa2V1YitwLzVBYW1Ka2kyTjNWQ3NvT3BIWklibW5vaTJkSFVHTW1OVE4yUjdHUnFrZVRHcGo1SmJtcHFsdVJtcG81SmJtNXFtK1FXcHQ1SmJtbHFvT1EycGk1S2JtdHFwZVIycG41S2RqWTFWWEo3VTJjbGR6QzFTbkpIVThja2R6STFXbkpuVTdjbGR6RzFYSEpYVTk4bGR6TTFYM0ozVXdjbTl6QzFZWEpQVXk4bTl6STFaSEp2VTFjbTl6RzFabkpmVTM4bXU1cWFOSG1RcVZPVDNVenRtdXh1NnRsa0QxUGpKZzgyZFcveUVGTUxKM3VhK2poNXFLbVprNGVaT2pwNXVLbXRrMGVZZWp0NXBLbkJrNzFNWFo3c2JXcjFaQjlUdnlmN21wbytlYXlwODVQOVRPMmY3Ry9hQThqalRSc0JPY0MwRzVBRFRWc0NlWkpwWHlBSG1UWUhjckJwaHlEUE5tMFQ1QkRUWGtHZVk5b3d5S0dtWFlNY1p0bzZ5SE5OK3djNTNMU0prT2VaZGhKeWhHazdJYzgzN1Nua0JhYU5oYnpVR3MvVlpkWjQzaTQzN1RQa0ZhYk5ocnpTdE9PUUkwM2JEbm1OYWU4aHI3VmF3UE02cTRHWG8weGJFVG5hdEIrUk41azJKWEtNYVdjaTd6QnRUK1JkcGoyS3ZOdTBVWkgzbUhZcmNxeHB5eUxIbWZZdGNyeHA4eUx2TmUxZzVBVFROa2JlWjlyTHlJbW1EWTJjWk5yVnlNbW1yWTJjWXRyZnlFY001WHRPdFJycE9jMUt6ZmhIcldoSHlPbFdhdDQvWnFYbS9lTldhdDdQc0xyZDVSTldhdDQvYWFYbS9Vd3JOZTluV2FsNS80d1Y3UVg1ckJYdEJUbmJpdmFDZk01S3ZST2V0MUx2aEJlczFEdGhqcFY2Sjh5MVV1K0UrVlpxOWkrd1V2TitvWldhOTR1czFMeGZiS1ZtN1JJck5mdS9zRkt6LzBzck5mdS9zbEt6ZjZscDEyWGUxc2FDL3dCL0lERGNBQUI0bkx5OUNaZ2N4WGt3M0ZYVjkzVDNURS9QVE0reE16dkh6c3plMSt6TzdFcmFTN3U2N3dNSlNTQldpRk1nekdHREVTQ3R3SUNRQVFNTzJBNFlMUksySHgvZ0E0TWRiR0JCK0NBRTI1K2RMNG5qZkdGdDU3Sng4ajhoMzIvSENkUDY2K2llblYyMEFpZmYvNEcydTdxbnU3cnFyYXIzZnQvaUVNZWRlUlBOb0NZdXd5M25ObkVjeUEyRFlpY29Ga1RKQUg1QWpsSXVLNGJOVUtTVUtRZjdPd0hLNU16U01LZ01vOG93c0ZQQWpvaVNHTEVqZHFrM1lvc1FzSWQ3eS8xbVh3RWRlRUgxaTBKUE1kbHZXcmFpUzBwaXZYYWgzelQ5TUxmM0l0Qi90ek02dmlFMG1kVUNocW5Cc0Y5UGltSU9RY0Q3L1A4c1dFQThyenFBSDA2Wkpwak43aC9vSFBVclNpQzBvbGlLK3BzTDBQUTdvMzR6Q2k1b2FTODdFK0EydnEvZnFnd3Y4VUhJdzFUVHBwdVFiRXArRURTV083OERUN09IVFQrWThac2M3aWIrNDlBZDhDTE94aGU0czdqSFdURmtDNUZHRU9rZEFlVUtLUGVoRDZ0eHhUbnZWMnJjVWdGQVBCSTFrVWM4ZUZtQk94U2dPa3YrUVFuRjFDb0NDQ0lJRVhoVGpYRzF1c2ZnaTF5QzR4UmNUeUVyS1lCV3J3QVJnNmFpNEcrVSs0cXdBNmlLRlZlZDN6bS9WMk1oRlVqTzcxUjhEUlNnNEc4cTRBaVFGWHgyL2gyZnJaanEvTHZ6NzJvTTM1ZWQvNWU4aHovRDQvR2JRYWZSQ0pmanVybGwzR3FPRXpKNCtFdzhRSm5lU0VqTVpiekJveU5TN28yRVRRT2diS0VQOXhBL0lBR3hEZUNyOGxKQUhyY3pwRnlpcjZKMGRhYWxERUM1QmN3WXdhRGhqSklqSk1lR0lDai92WTViTWt6YTZieWlQa2lmSUlldk9WT2tDTWh4Rkw4THAzQWQrSVdnVWFVL1FJN1d4ZUc3WjBoZmh5a0VYbEhJSXczQkdYYmlCTnF2bDlBbzU4TWoxTTROY2l0eHozREhjTC93bE1NOXdQTVNGL0JsSitsTnNUQU1Jbmd5OXBieHBFd0JpWGF4MkQrTU8yV0hEWkNwdndCblhxd0tRdlZGZGp6MVU1Ny82U2w2UERueG9WWVpoZU55WnMrQkN6SnlQSXprMWh2L1BKUUFJTkZNRGtDYks0L1dLbml4aXBaNk5lQmo5Y2hndnk4ZVFHcHJlMGVyRHdYaXZ2SVNBQlBoMFZBaUVSb05KK1pLN2x3NTgyMDhmcU5jbXN6RFloNFZpajJpaEFRRE5BSWtSa2J3OGxwS2V0VlhSSlV5ZWtHMG5ILzlzR3FGbEVQT3YxcWEvbW9YVEp0dnZ5M0pRQThDMlBFZEhmd21pRm9CTWdFd0hhZUZiekwrMVBrbFhuaDMzc1VIRFZFQTltdkczRGZITUZRNUlkc0ZKTEZRc1lxRk1wNzJLU0Q2OFNmOW9GSnV4RXRpQlA5MUVXaDJnb3BWcnZSRWJFdElZYlJnUlNRUm5wR2x0OTgyMDdEclZWMExQcWFIZWNPNDZMTXFMSDdmSC9oZUFmcWUvTGtwWFhLSkdJMHF3dTFLeUZJL0RQeEJYZjlPSnd6SW8veGRkeXEyQlpKL2FqVHhjV2drd2lqd0JTM3cxald5Y3MxdkFyN1BaNUgvZi82NXBtaFJEUVJwVjZxdEtHKzhocnVpaVJ3SGFmdWZSMXN4L0xySUNzT0Qyd25MbFhJVHhVWUdCaU5CWUR4dU5ybHVxcmh6Z3VJeUVUM3FYTHI2MkxMVnUrSnQ1UnZCeFk4Tm4yY2hQUkZCZ1RYbE81My9jV2xYUHJKaCtFN1FkV2x2RUVYaUJnd3ZxWHhpVndiTVZLc2Q3WlZQUFBPRjFZLzBYdE4xZEwwZUVYVjk3QVBOZTl1bWhoLzYxTzFkZTl1bnhqY2J1aERSTDlxNGVyZk9rN0dGZEE1UDRyRU5jQTBZN1BqckVZNE81d2dJa21sYk41MGg5L0QzZUF0RVU0b0JET1hnWHdQK2V3OVA3SVp3OXdROW9sRjgvYWp6ZUV6MTNRYTBleC8rbnNON1ArRWpRVGUxYjVIMWdzY1ZMTDVXK2lwbDh2a2l2aHVLTUhoQjkxbVJ3K1BLYlRrSTRjRXQ3RmhlQThDYU1qdHFJV1g5ckErZE9uVG9GTHB5djRMQ01ZVTJsRFRkK2FlVUN0SzExN1ljQk1PMTk4cHJxdnVDY1hVajZMd0d2NG5mSDN6aFpsL2NSQ3J0Q3U5MWpYUDc4VzFNajRZd1BWckhYY2R4K2JCRUJuTVlWa3E5ZHFSTXBtT2gyRmV1bEJqaE1VQXhRb1lYajNqT0FHRjhNMHhJRWNVQUdDa1VhVGZ4M2U2ZVNxK2R4WmVZWkVWS0ZCTDEvZThFL1I2d3dIVm1lUlVFd1Z4SG5HL09kdTZKcXpKcWhDdkxmTWU0VDlkMzczNmtHSmphdnRHbmlobTdJUWRVVVJSNWFKazl1YkZ1bStkRlMwL21ZQzZCaEUvdTJhYXB2cWkyYW1NTndhU1NrbWpINUV6T1F4M0xBUUFyeTdHdVFnaEVBNGV5a29weUhlVzFDSlRiNDA4ZHZYNTBRdWkrOHJvSEF0RUcySlF3UWlMQUgrSURlMVoxcElBQ2tTQURtTy9QQXZEZG5CQ05LWHlxaG9JcWwzZHFNVVBRK204ZTlSQVVtNHN2WTN3Nmd1ZEhqczFGYjBaWUlJelh2SWp4QUlGdFh4bFR3RXE1TjRXbjVBdnZDTUk3TDlCai9BeUhLUittZjVnS0hpRlU3L0pmWTBvRTBMRDNBRDQ2RHpwVlFJZ2hvWWEzWThJQWxBTy93ZGlkcTgzUEdYZCtkaTJPeTYxQzFrOUdVd3hoUWp4SGl3dVFXd1JwOTZreDlkZVhZL0twSEptajBKd0tGa1hRem44cXltOE9LQUNUbmRzaEk5d0k4RXJjWGErc2pjWDVNRUtZSEZKRWlWY1B3WW1ZamxJb1JVSitNSzlsRXFGbTl4d25ITVB4NDNWbFZOK2M2cmNJdFQ5K0QvbjkyUEc2OGtJNGxjNUI4eXFFci9BenRxV1JUSGNDS3B2eEZZdkI2c2JqaEwzQUg4TkUrOWc5Q3NEamVKeTBUMWtjV0hjY0k3L2Zjdy9oUCs0NVJ0cDY3RjZYOTZpSFYrTUNlTTJIVk1UdWlZanpXdFU4VGNDQ0s4Uk5PTUVqL0Y5OUU1eU94OGtQeDJoRHAzbFJzZDQ5aDlyUEFadnVIaktWR1dBSXd6V0NsLzJpUU1GVCtnVHRGeGt2NVFrSkxRNk1qNG44TkhtSUFlSnh5YUswOUFWS1MwbDdjR3Y2R1dMQlRlbkZhS2tUZno5WGEyVUlNOHFoUmhUcEhRYm8rVTkxOWdwdmZlV3JiL0g4VzEvZHZWVlRmRkY5eGZwSHZzdnozMzBFNDhSU2w2SWkrRm44R2FDZEdyaDdMWHZ1SzI4SmVSR3ZkaUdOY1NaN2RzVnR2WGdCUVA2cmFwQXNORXdlejd4SVlTUnpKcGZrOW5KWGNDYzV6aHFtM0YyMmtDY2NJQ2xVNmhpOVNuOWZGK2dqdURLSEMrUkVXUDlRR1BQOWZpZ215Y0FTekZvS013RDN6eFhJb1JOZzZCTHVzUkhrUUlod2svUVZ3bkgxRmQ1MVZSZ0N1QW5sL2lLR1RpbVR3bHhPT0pTQzRWblFWRzdDLzhCTVU2VUovMHZYY1pGZnhYUWx1REtmQTViVWtYbzYxU0dHbXBwV0IwRWFZUHlMR2N3MG96TlQ3SlFtSEd1dStoOUFsWitXZlNEd1cvQ2ZRUU96cktSK1FEbFV0NFR2V1FrTE5DcDVDOHlZQlYrS01MVmNnbnk4cVlHZEhtUE02RElCenhBZTRYRkVhRGllQVNBZEcrRlJTNXN3alhqZTE1MCszZHdQSUtOMDBEdUQvdWJUNlc2d0FzcXlVS3Irclc0R2pTeXVOSkVsdmZKS3BuNGFOOEpvK0ZRb0RLTG1KNU9ZaHdzYTg5ZFZ3NEoxbFhNQkdFbUNFaG02ZWJPNjhTWGR3dTA5Z2I4eGZ6a0psbjZHZlBoTndsb3ZXRWZOQzc1UXY2WnllTXlZK0VCNDBMN0ZrVENhcGh6K3pNSXZ2L09kdXVVRGJwMGxqVGpEVVFIQ2s1TStBa2M0Y2pFbkpCRXNSc1d2UTNobU85OTB2azdscjMwUUMyTmdyd3I3RmNWNUZxd2hDTUk1Q1JVRlhJekZMdEtuV2J3T0crbXNMMkMrQWMvakxCYnJDUFhIczN3WUZBQVRmc2prNzdmSjVLY3l6cGVkTDVwZC9WMm04NlVBU3ZSbDRjbHNYd0k1R1RieWFjeXBOeWNTUitDK1ZDYVRxcDVJRFhiRllsMkQ0RTBxd3REZXpDWmFFdmdmNllwQVpXbldoaFRYaGpGQ1A1SEdzcDJFZ2xIaEE3Y0ZNeGk0VlZoZXptQ21CUlF3TytaSlpSZzc1THhsaXJaVTk1S0dCTUIyMmpwd0htbWRjMStRdERORVdoa0tPRjhNQkNra2cwWTNFVXJ3djB5OGMwbXExdGdsblhIRWdXVDE4U1JtRTdKSmVISFN5ZUlsbGZZYWYyMkl0RHhCWUlmSFlRYWw4V3pJRVR3R01nd0hTT1RQeEZNQnQ3Vmk0blZlTnplc1R1QkNjTktaeHF0d0ZLKzdTU1l0UWlZMU9qZlY4WkZ2TWtoQ1Q2QXN0MUFKa0R5Tno5V2Z6MmNjV1c4NGhzL2N0cEc1T3M1TmNCdTRDL0hvTG9MNWdTZjcwc1hSQnViSnZvV2NpL1B3MDBRR3JrRTdUeDh0OVBjd0tUaThLQWNNV3F1anJOV1RCSWowQUpsc1BFM1JGWVBBTG04OG5EZURCc1ZqK0RDOUdHL3NaRndvTUNuWjRXcFNNcEd5S1p4Z0Z3UGYzNUdmeUIrVisyZlJOQjY2TUo1clJTejc0MUZ6UjZ0a0U0cFhxbzBaR3lmN1hRVTBXcDFpdmZuSkRqV3U3dmdKdmFqK0kvdldsK2FkOEVSeWgyeW5vdXgwRyt3Y2Rmc0pGcHk1dXZiMWM4UGNLbTR6a3pROXhvbWdFM2RFUFBSQ3g4dlRYTEFSa25KWVhGdTgvWkRUMVVuQ2k2eFpvK3AwTVRJTkF4c2JkM2JOOWZDRnMvVXJyVXdTL21idFdtVk9NK0ZCSHJvejFPMDJtRjYwdDB5bW5rV3p1TCtZQ3VOcDUzY2xFakl6QVZWTEFEcEI0V3p2N3FidXJxWTl2UWNmUUtBN0FZYXN0dDQyQzR3azJ3RjZBSEZOMmU2dWJCNDljSEQ0Z2dibkpTc1NDWUhsMmEyakJ4OXd2L0VtL2NZQWhxWllkSmRqcjAyd1NyR1FZL0lNSU1pVENUaFp5dGNUUGd6VFdycFdNT2FCWEZ1Nzh6TDkzTUV0eTMxQ0lLYjFET0dKbVVxQ1pYYVREWWJDVFFCUDBxYnh4RjJFKzdvN3Y2dWJOTFdyd1RuZG5nYXRZSncyQjNYSnNRZ3Y1ZkNUN2N0eXpzdDJGSXlHVjNiaWV1TFJ1d2lUZVhjbTUvWmlwczNsM1g2SjEzRVN6OWR1UEIvb2JDQ2NFWkc3U3BVeTBSM2lFYThRRVkwMHQ0OHdjTU5FQXFEdHh2MndNUjZ0c0g2NXVoN1NIeEVhallYbnRyR0IydlpjUGgxc0JDRDFNVlh4OGJJV3o2V2pwc3hIWWtvZzBZcFhRa0x6WGVnTEFibDNOWVNyZTJVUWpxbjkyeUhjM3U5cnlIOER2MCtRMHpmeWlVeDFOSk40UlpSanZtQjZ4ZjZ4bE8yTEJYaGZPTE45Zkd4WDF0UVBtbkcxZk9mT25YZVcxWGdRcWtzZXZmenlSNWY0WEYyYzE4Y2l0NXpidFZndktVOUVKMzBqTkhIWGN1RC9UTGVkRTNUbTYrcU1vc3lvT25qZ3Z3OEcyRUNwdWpLandDZnh3Zm5zSHc0V3dzL2dDZkFFL0FWbmNTMVUyK29IakN1djZZa0JFV1ZNajluQUVqb1IrL3JBZXNXU1pxZ1VoVmVrRHk3SFdPcEtVbEpFVVZlbkZmaTNDRWt6WlAwZXIvNHp4WnFUYXNBWlVwUUQwS0xvWUZvTjhGREJvb2FMajU3QWRBUnhNZHlLSmJnZHBYQU96T2ZZeXhVcVFJRitSZ2lTakowdENLR2FqclNmMG1vd09UVUZLdysxZGRlNG0xV0hTdy9paGxTbkdCTkUrY3pKb0VHcHdoUnVNa3hQT1RjOVdEcThxc1kwZGJjOWhIc0dicWdwVHJkU3ZFTXhHRmZYWGorR1doUEJuOERsL2J5V0ZVdjlPWEt2MWl4eUUxQWtXNWt2aHhDdDNnSTV4S2I0cy9idHA2ZW1BRmRyTEdaRGRmVnppdExaalo0OWR1eFpoSTlMSzdxdHF2cnl1ZlozdGVQMmt6NTZsWXhPT2JOZUIzQlZ6cXp5T1R4ZW5UZU1zUnJ3TWN5cnNhZ1Fxd0Z0eFpFK0FqU1BkL3BiU3VjRFhDdVdlNWR4QjFpUDUvVk9JRFNoMWpHeXBqekNMM2hFb1Zhd0NEa00rekZxREpzcFJtNUdZSmtzc240czcxREp4N05UWUNvNXlTZ0g3ZnptcmhXK1czMHJ1Z2JXQXJCMm9ITkNPNnhOZE5JTFoyT3lVQmdzRk1EZUJuek81KzkwdXJNZDREU2ZTSUpnSXBqNE1ZOGdEeUZRSlBBamw0aUFVWHlhZEZtQVBXQ2d2WDJBVkVwcTYyOXI2MmZsN3dCUzZXQUJBRkxwWUFFVDI0N3NCUmZEMEdET2VaSHlGY3NMb1NzUmhBSVNrWEN0cEZoRzlRazYzeTlxcVhDdXJ2dzRHc2Q4WjQ1YnkxM09mWkJnSG94U3BCNEN3RXFaYXJsS0RKTmdEQklTY3owRlBDT0tPZkpRa2Q3R3M4ckdUMVo2eWtSY3A1T002ZGZ3WTBzSlBjSHNLbjZGNk5TbzFnMmZDREpxOUNRNnBsbC94RkJYUENEanB1bmFVOXNWRUhwZHM0Q3k0MHMrSFRkV2VtQ2x1dkl5Z2Q5NlowY3BrdVg5cXJwbjQrQXFuZy80K1ZVRG0vYXFxcC9QaHZzNjd0ektYN29iN2pnUWE3SEQ1Ni9TNG1MUDRKSnVNYTZ0UEM5c3Q4UU83T2pDdFNlQ0FBU2JmT01wUklwOGZwc2FONE14MzdZbW5vd0RTazJvcDRCdnovcmRyMjlYMU96bGZRaEtDbCs2c2tsVnRyKytaOTBlSHhqVnp1OWE5Y1FFS2txeXZyK25kMUpUcER5YWVHSlYxL25hbWFEeEVtNnQvcElSOU9ibGY2SVplTWJsNTFkd2Erb3RMRVRmU0RoSUl0eldXMXFHS0w5UEJGK1U4eVJ1K2xhLzk1WUI4dUZNUDJxc0huVVpsZHNKQTVnZ0VtRDFNQjNiSXhpRmtCdmxaeHFEQ2RQRUpkV1pTVFFCMEpRQW8vVHNmQWFNOHVUZDVheU92ZVE5ZXFqU2FYTXhQZURmanVJZXhZUEI2L0NyVTZ3R2ZIcHBhc3JqcjEvRzVObkhKYmdzeG96ZHhOTGlyVHpTOGhwZjZVb0JVampYandsWnZtUVdDMzVBRVJKR3BCa3N4NVRDSVlhNjdVaTUwbDh5UTZCeG1EU0JIT0RLYWp6ZERrQnpDcjZkYWdhZzNYcnp4NExzakp4Y3BXbmp6c3V5OFBZWitQdXFJWjB4WkZVVTkxL3Vid0J2Z2lrbWhtSFp2ajFkL1hpcUNFQXhCUSttMjlmZjhZQXNPNTlzNFBrR3NFZVFIM0FDUUFCZitINUFGVkZ6czJnRnZ1L3NFQmdPZlpQaWxBWnVGRXNPVjFET2pPQVJJZ2pnV1ZzZ1YyN0g4QUJhZUZKbktNOFV0cW0rbzR5UkpUVytrQk4rWmdnVThoazdJK1R3TW1BdjQ0VkFMcGlZVEM3SUVHZHdDVTM2VFUycWZsYlN6SlFKdXJOd2Q3WWJtQnNQS0tIcWxCcUEyM2tBdHcrMXJpbGFZeTB0TFdOV2FLQ3BkV2c3QkZVRDdoaXZkc05QdEFhSEVYNlRYeE5vTVZmendhUUplOUpGWEFWQkRTQmkrazlMbWlhZEpnYk4wL2d1L2dBdWc0NDMvRUJYZmlUSzJ1YmhiUkMwUjJ5TTVpTncyL0EyUXowNU5Rc2o3ZVFGUFc5QmFPVlZNakpOU1FDNmNwczNaTHRkL3VVMGVoRXQ1NXE1OVpoN3VjemoyYW1xRWE5OVdnWlVvVWMwV1NtaUFjVmxZa01zdWpKN0YrWm1zcDJ3MGxjaDZBY1FLeFlHSDVKQ1JjcUhNbzJwYU5kZmdLZHpzUWxGamJRTlJYd3hkY0tPZ1cvRkovQWRvSkJibUlUZ1c4NksyR1MzR0JEQnQwUUJBNktoMUJ3Q1lYTERtUkNBMkozQmQ0cGhrTk10OVd1RUhYaEczYWFUWXd3ZmxLSFlTbHhKZUxnOWpLdGNHVnNSQmMvWTBWVnFUSTBNdFlPd1FtN0ZuSTNSRC9lS0l2Z2FyckkzRkdudWJXak85T0thblkza2hnVkF1TG5VVVB4ZlZoelhaOFhVWjVSSnpKUjhUYVVIeXBmL1AvQkhLSUR4TDhHN29HWmJWUUFoczlPV0g0dUhXRGowRjVLRzh3b1lOcElCZXVVSGswYXk0SGRlY1Y3QlAzR3lLek1SbXQvSWRYRWozQ2J1SXU0RDNCR3lIajBta3VFT1ZPTWd5MlFlNTh6MytIM2grOFVGdi9mblBMblpsWTNudEQ1VVRBTlRydURPVHIveStBWmprZHRnNWc5OGZycDJrNTVHNXRpS0tyZm9UODZNcTNoZ3A1ZW9VbzhlcG9pT3dmM0ZJVy9oM3h6MnBWR0syR1ZYQjdhSjZrbmptRzQyY1IyWWJoNmxsck1zWVUvTFJROXpZM3BIcnZzS2txYzJFbXE2QThKUDlCV1l1MFNLVU1rU3BabzVRbllKcytHYWxucnR5REF4U0xsQ0duN0NqbFFvWmlGeU9tR0FpNVRHVmlMRUdKZ0c1YTFsL084SXczL1haanM2SmpvNnNwS2lHSW9DMW94Nnl0SktLdXNUVTN1YWZaSWUwL0pGRVR6MjVTKzlsWXMwUVFnbEtEUTBZQjVyMTJZdHFzbmFoVmU4V0JXU0NWQ0t4c3g0YWtQYndPRUpmQ1B2WEhyRitaYzhFWms0WE9vQy9FOGhGcHJKaDF1WVd1a2hRTDQ2MFhFUithcWhZTnBEUGd2K3BYTjl3b3lJc1VSVWlrWWxLYVNuZi9IbHo1MlFCeW9JeVhKSTZieTBIM04zUlZHSlJzVk9vZnJpNERXOVlNTytXQUJrR2dwRmZMMzhsdXBwVUZyejhjajQvZU03TGpuMVU2NXUzdnVvQm1wdTVuT2dUa3N0MWJzbUxITC92N3RPMEJUVDZzMHB5ZDZqWEgzN0Q1dm8wQ1ZwMCt4MGhwdDNDU2IvSzh2QXRZM2d3eFNZZGVjelp5MnVONWxsby95N2VTZmd6VG13NE14NG9GbFhCOWVJZWZQVlJBTlhQekxJNHhiS25tN2FBQUtGdE11NHUvb2RSS2h1dlhLTzBHS1hGSHNDRnVPbzBQUTd0SGVJTE9ocmFtSUs0YWlydjV2MlZHVkVZUGtYZzZocXBsMmhJd2pmbmpjQ1JBaWprSFdtYW04WTB3eUt0WGVJZE1idTFqM2pLWUdtR1h4NWFsZDVCZE5HQXQ4UGN0K2xlSUxCczhqUUJXWWdNTFVVaTR3N0p2SjhvY2dZWnVKWlVhQVVrYm9pRUpLSTcxVUlZNDdMTm1IS0NTL3R4NHczNWRVeDQrMG5aTlYyblJad3JSTDFzcExFUEhrRW80NHlxNFRVNFpYNmlMc0crU1Q1b2xlU1JQWXllZGNyaFloL0I2c0hYeEl0VjkyaXZ6S2dyZ21GMW9pVzJ0Y3BZdzdlcjkrcW1rTGNEMFg1VWdBdWxVWG9qd3VtZXF2dUR3RkY3dXhUTGJIMnZDSy85L09DOHhkaGU2WFBhbXkwZkN2dHNBV05tS1VGYjFMbGZSanZRV0RzazlXYmdwb1ZNNkQxUHA4REM3Q2xrOVl2aGZEc0xWVkQ2dG1iK3A0djFNTUM3S1RONFBsM045ZWY5cis3dmU5K1VBdmlCNFBhM0lNTDdac2hyckxBTHVPUkhvdUl0WVR5RERHcHJFTHRITlNxTWVkTVVtK21ZWXJPRlpFc21kNmdzeUhjU0pjMnVXSStKS0J0dm5WYVlDWU5zQ3JjR2lvVFdhaGNISW1IQ29HV1NuOEx1WnpZQmVHZWlkd1NUejVpYmVZNGhRdHpHU3doY2ZrYWRiUVhzOUIyZ3NXYkw3RWVRczVUbzNjdFluVTZaU3pTbndUcHJHdmVlSFJSUjYxZmdFVzYxalFZWjExblkrTGdkWi9tQ2x3dmR6NGVrNzUrWWlJbHdoNmVPR0dxck9xaGhKeFJjMkwxN2UrcnAwa1dwaXRacWNjQXpCa0ZDNHVZUGNDQ2VSY1dzdWJrRC9RbmNKM2FtNjMrYTZaYjNReVUzcmFtcnVZVnNkaUtUZml3c3JtN3FhMzd0TU9SSmxJdDlRMUJRK0NEcldaaEtORXd2bjZpSWJHaUVNbGlVa2dBa29PN01lNkZHQ3JDdDVLWmRQSkZJWkhvM1JxMU1xbFVPbzMvUXZiV25nYkJvejlHRUVvU2dKWnR4OE4yMUZZa0ZEUytpTjhIWFZreXZpckYvVk11VDlxR1orVUFOOFl0NTlaaENlRzhCWkl3MDJ6T003alUwMms3UXhDbVI2ZHJkdWphWEprcnpUa2VRc2JEVlQ5Ujh6dzBUakF0SjlpSGo1dWRNVnArU2Jjc1o2S2J6ZHN6ZU5yTUw2VHJEQUhFNUFIUDFKd1I4ZEU1WWlXQ3dZVDFFcEcyaWNEOU5KczQ0WGtuTnRlcExZcWpjNTFvRWM5ai9ySXVKN2dRRnZQRjVpSlY4bGJZSktlY0l2bEhYVFRabEJlcHR4SzdBS01landmWFZnLzBqQU13M2dNZm9lZnFZQ1FGUUNvQ0gySG42c09Db0drSTdyNGczaEZPOURYNmc2cTI2Z0xTdVVxSG9UUjN0RTQwV1BrUTZCcFJrUWs1eHNNNUNWSmZoTlZiL1hYUE9IeUoxUFJydCtZSVBsZGZBa0pFTng5WGdJclpUaDVtczczN2VRd29NRkRLVHlpaXBvb3lFUFpuZlJxelM4eWdPekJjQ2tUK0tSUk5MTnhsN0VqWXBKWUpMRFgybTRoNFh1R3hKNXBJWk9MRlBha0hnZktqNmhzL2xrc3FDc1o4dzlydlJTVDdWZmlLR3BDZzlQdmdLQjdYV1UxNTZ5MUZjOTVzVVdKaGhKLzBneVpnUzhHZ3FnYURrdk1ycDUxUVowS2JIME9uMFFiWFBuZ1J4a0FGbzZZcnp4YVlra3NpMEVkWUZzV2tNQVVvK2UxRUJpUyt5Mlg2TE9QRjhkU2ZtNUx1a0xrV0Z2d2l1dEVYTTZFdm1BR2cwaHB0TmZqUmh0NkR3djdyZldMWDVzbkxkZzdIUk1FdlNkR1lGQmJsek1hcmJydnhzbUZGdis4MmNWY3VPU1RZNDRVVmV5RG9ldWRmOE9oU040Y2ZtWWFmMTlHOWQ0WENjanEwKzBMby93dUZPS0FHaHFPdEZSQ3hwSjNwTGhORzd0cldNdEVkOUhldTJOVFMyS0JGRFVrcnRGV3UzRFVZakF6dnFSejhjZ1BRRzlNN3hGUUc3bG5SZkQ2WVlvUDhZWitSRDJnN0xUN2RIT0gxc2hTWTgwbWNvbmFxQXZHZExFaEZZaWFmcDQrblNuQ3Juc0ZiNHN5cU9wSTB3YWtTb2ZjSEdIWDhCZ3ZheWVwb3pRUUt6Z01aRmVNYzhrZ3NwUDZnK21mMHAvNS94aStBRDdsdXZRdDhEN3Jmd3cvTXRRaTRQazdVRjZ4dlVSK0VrR3NkdUpKb0FLYXhmRCt0THU3SmMwaFJyZ0FsZ2srZDE2OGlyZ1JQcU5ST01MOTl2ZWRvSDU0WmZyRFFra0VodDJnTHJjY2xTNEU4OHlHNmdqWTFGbHE4amM5UFM1aHpnTXc3NlhMbmh4VFZsUTZveEtPT3JMa3p4TzJjaStBTFBKVUxSVURudkFJTWFnSEVvSUsvQjBEa05lZUV2OWlBMnpya3ZHcUFaTUVQOXVJNndkVUFHaWtmMklpbDFvTGYrWis0OWtKS0Ixc2hFRnhiNXF1b2p4dHlyVFYxN3JTRXhMRzFBeWhEeXRlNTNoWkpDL0E0TFNVd3dnMG9vQzlxVVQ0V0dXOS95UG42QjNwYm90c25CcWVXWC95VmtZcUZqSGdFQmJyMk92OXd5NUpWb1Z6clhoQy90VzA0ZUkwZVZWVHRwQ2dDWGczd1MzZ2ZuT0o5K29xZTdabkx1ajQ2L3ZobjcrdHRiVGx2eTVyejlZaWdHMnVIUHRTOG8rMm0rKzRjeE9mMGViMXR2QnF6eFJFSWdFOTlRcmVaVEFRdlJwd25Fd0Z2WFV2dktvQ1RvTHlsVXRsQ2FNUzhNNXcrbTdUayt0MlRlUkttbk1Fd29RVEU1a0t0RGpraUVSQWkyRmVRTWoxa0NudDBBRXY2bE5kaFBoOVdYUmxOVDROeXMvTVNKbFBUTmRIbi91cU1ibEVIZkNLZE9BL05jNUtIMDU3dWcxMVBZY2swN2ZwWFlBbVZ1ZXVEeVhyM0JHcGNndFRXOGd1VXdmanl3MVNPOFlQeVBDdFltY29weEhtTnloOTFsaU1KVDNzRE5FSTJ6TDJWRWxWeTVJZHBKZTc0cys0dm5UdVR0VEZFNWcwUjgvcTlNL3ByT2FZTit2bmZmUFdyYnduQ1cxK3RYTmtsQ0lrb0psTnhueFZHcU9XQzdvZS96L1BmZi9pUjc2Tm9oeENOcWNKcW5oZWhJQXFJQnp6NmxJOTNicU51bkpzM1VXZlQzVXo3dzQ0WUh2V1hvTmZIeXkzbHdhLytobWNmYkVnQUZBaGhzZ0psdnc1QUxNWi83NUZIaUMveUkrTkRCelhWWit0UFNRTHhESVh3b0JMN3BZSS9vRzdZb09MUEtUdUprMVVhLzQyVHFzZmRDOFBGSGNTWHY0ZGJnbUdMMXc1aEU4bE1vQjdKaUNpZU1TZ1JwZlBrQnhJeTB3Z3NkM0pZNVFKMUZTQklUL0FLNktsWXNmcHZOR0pHVjBXODRMc0RxaFBIaExDY0ZFcjVBdm1ob0FaUXNpVDI1TUEvNUhyRUVsU3Fhekh6a00rWG04QTdIaGV4UDBuMDBBSlNaT2Nya2dhQ0tyamgwOWtPWU1Vc1lHaVBPZmZtdXdGb1NZTnRWcjc2UlVZK0V1eEVlUjJHRDRqdDFNSllzWWo1d0tYY2FzejlYSXo3YUdiTS9BSUxnYkRnSHJYd251VTVxOTc1eVY3MEFwdzZnM0hTR2M2MWZiQXorTTZDbS9tOEk1emx1Yy9nTVVxYTFnTTBqTWg2aEYzQldmSWtKc0tKK3FkSHpuYlRBV2U5KzRUcEJ4d0IvaGxPczhDaUY1eUVZZmMzNkFrMHdtbVlZeVIyelNGdWtydWFXQ0k4YnhpTWYvTDErbkNCT2ZZV3NwSkw5OFJ3aWtXQTFOU1BSVkR6WU1mUXBORlh4T3hDSHlORllxd0ROWEVLaTF0VHJxY01Qcnp6djNVTG56R05uRlRoR25KenltcTNxQmZNUHBVS1V1b09wZ3F3UUJldWlIOExMeGNlakF6MHlLSlBWa3kxdmYrMmU0LzBkYW9CVmZZSlVuV0NCUURRSS93MGM2Y2hCOGcrUnc0M2szdEhWWFVmdmJRaUdJZTJSS3cxbU9mR0RHWGErZHZCUHpydkt3UUZmR1hId3dOcnRaZ3NHT1BGdHZibWNZTTRHNENydk5yeHNVN2VKUERzNGdZSkQ1NnZueTI1ZVZQbnJEZzV6L2lhSk1nd250MTlla0dNRkp4a1lQZ0JPNEczejRLZnF3OWhyRHFtQjUwcE1PMk1laG9rRWk1RldPWHkxTm53THluRDlIelV6WkJVTmUyaWJvTEk2UXZNMFREVFV2Wms3WmVvbmpTR2FVNFo0NWlWTE02RFRRTWlRaENNUWxCM3BVU1JzanNCTVA0V01relR5WXlUbUN6bCtrdVNpNG16bUIxR0hEcDV5eTBuRWRnNGNjR1JNTlQ5U0ROUjlFczNpcmVjZEJBOFBEbDVHTUxiOWlwN0Q4SERaK2pzcG5POGEyWm1LazJ1OEFGWWtNTVY0R3EyM3BIUFAzeVpaaU5kdi80Qkh0OGdMeCtldlBDd0lCeitwZW1mSVM5Z3NqWXpOVWtpKzFLbXg1ZXlPTVFJOFE2eVJLSWd3eXVDdVV3V3lXb2dycFBVQmFJVGlrUS93THpGM0xHelMyNTRWeWxTTjRTVGZwK0NWSEJ6dy9JWXVGbEZvYWpxM0NOSFpPY3VRWUd2L3dpM3VhMnpHUVNOUDIzcUJBUTdQQVUzVG02Qlg1RmxqQ05RTzVnR2hwcVFRUm5MbG0vSWlSQ3VxSVBublQvam9UTnEraDhKeGtFczlBaXh1bVZCTittUzh5TS91TEZuNmRLZUc0Rm9nQTUycTZtTnE2TUxoQS9wNHJqTXU3QzhoU25GT2FnQ1dvalB2NFNKd24zMm9nUmdIZ2FIcTVQWG5oM1YxL1EzcDlGeXJvSExjNTNVVjQ4RGZWVFdJWHlmYTY4d3FNaGE1aXJsWUUzdFdmRUtlU2EvOXRSc0dUVUh3eWRRZENEaHk4ZEtIeUtoS0psVUxzTkRYYmdKckc4LzlzUHFKNWhWNHlwWC8vekp2b2MySjM1d1EvK3Q0L2pSblBOejFualU0c05vUnhlaS9uUVdzOGpETi9UMmI0b0xQREJCcE90T29EcGpybzNpVFlCNU5jeXhYYlh1OHhzYnZyazJWOEFQajk3b3RMcndjbjNudm92WFRwRktQVm5tR2J3VVVJZEp6MkJ2aHoyYkYyVnkwVFBPOGZoNDNMbGJGZVNBbWdhZFRXL2c4Vzd1Yk1OejVrZjV0alFHdXdqK0dwVHdCSGxOQ0ZtcTgvRjhCMGIvSHcvRzQ4R1ArODMySWppb0t5RTYvaS9SOFNjeXhkWUZWbzA2UzN1K3RwYXBzYWhPOHZBRGFtQ1N5a1NkVEliRVhlME0xK04vY0lxNlZSdUFITmVkSmtWeUFOY3g2UUxzMnFiRi9JSnZ4VHBRa3pBRUxjU0xmVTBhTC9nc0xJd0xLS2p4dktUb2twaStPZmV0MzROWmo2dWtwMG4yMHZtUERVcENKQ1ozVDYydXVmVUE2UE1aeFhCcld2QURFTlFWeVY5SktaYWtJSDFGbS9SWDlmWURqUnZBRXZwbTdsNjh3dWNjMlltTFFiMnhvTTVkbDFvSVhGV25wMWFwQXhpcUs5dlV6NW9GSlBUM2xWSk1qWmh5WlhlcUFjQ2ZJQStVOFlLemllS09WRTQxTDB6Ykg0UmZxOWFDVmVGVXphR1VPWU15L1ZHMU11ZjVXenRjNXpNRlhaZXVIT2p0blBuZ0pnUTNkRmV1a0hSRERCdmk0YkllQUhyTEtnaUdqZzJCWXJ0dTZ1VWpJZy9TYzNZR1lzVnNwbnFzTWQzOXNFOGtYaTVHRis2U3A3SWFjWlhicnFWb254R05JQmlSUXExMzdKdEJONjI4L0NOTklTa01TY2dpZ2pFZW12cFlRRTE4WU0vRTBOREUrUWN6U2dEWERmZ1lCTFdZWVVKREc3a1JiaDIzazNBalZDSEpYQThyUlRkNmgxbjZpUXVWbENWS1QrcEgya09RVXlSRTlEcVNYZkVNK290SXlUQUxkRnZKS3lBVVYvSlA5NjZtdnJaV2Y3QTNDSUpmVWV3ZnhFS2xJTENlVVd3ZFA5WksySU9XWjByckNIT3l6cnByRVNrYWNBRzF6VWY0OGVabkt1dUlLTDB1YVBXSFN0YWZLUDRicko1Z3YvVXROUkJRT3RRRWxnbGFudTJtUE00YTY0M0Y1R3dYSHRPVXAyamcyZ2tHek5mUHp2ZFFjcktnRnJaMDV4VHp6STdsdW5FSFFhL25hdTNObzUxR2JaTGhLY1RmdUhyTjlRZy95WC95NHNsUEMwU1U4MllYc1hGN252VU9NVks5T1orZHVIM2JsUkRzMzMwN0xYLzRUZ0NQWDMvN25NMks5R3ZNN2RlS1A2eGZ1ZnhjVjl3Z1NVeWVwUGZicXlybVkvanB5elo4SkNmSzBhaVV1SFRweHB2UnV6cm12dStROHhuY01mb3FpZnJCQzJUczVqc0IyRHloUlRWSjZ4dStkRGRlSXk0dWZkbkZwWlhGOVRNZ2l6R2xXY01QWWJQaWxWTTBBR05SSlkxVGxTUVRqTHFOL0NmaXpHYnNVMDFKbEowVGk4ZkpWVThpSlFTV013LytYN3lJejVwbFNjNmJNaDRIaWVxTnZ3Ly9pVXR5TGR3WWR6NTNDWGVRdTVIeWJvUlRwNmlkYUhCb0lWenJBYkVkTXVjOWtjamlQZFRCb0p5Q1VnL1ZYL2FVQzVpMVoyNEhQWE8zeXdXaHdCSXlrRElOM1NiUnp4V3ZBSCtxbXJ3UCtPejlFekNDZkVLZytPVE9rUlhpMzM3c0d6K0JjSm56ekhYVEtuL3Z0ZlFJOW5iZFBHSUVKTnZmdm5QTTFBVzlJU2FFWW5kSGxqWnF1aERTL2Nrd0ZzVjkwVEN2YXM3bkJpNlAyY1hLMG12aWthNXJ0V0tUWWhlYTFEenZONUJzR0R6NEdGUzBSTWxNS1EyUTkyZjd6TnpJOXBIRGd3Y1BBZUd4bmIxTG5COHEyOWFzdVZhblI5amZsZE5RcEFHL0dSdmYzbXpZc3M4WS9GRFdEb3FZZ2RNZ1V1d0dRd3RMcXRhdzlKVGUzdDF6dm1WMjlwVjJmc3pVQXBtTVptUmFKUUZqWS96bnJZRlpOSWxwVHc1TFhnelhkYUtpQWFtUXdMVHgxTm1hMElXSWJZWXd3UEx1TGN3Q21FVDVnY2pLeHV2RXlyaU1KU1hjbVRyYUEzL1lzemEwcmlXL05wMzBLY0pGbFlGZEFvSkxXbG9HUUNBTi9IQ044OTN5aFFJUGw3WEVXM1d6emU1ZGJhMXVTUTJGN01GcktUNm5uZ1RPMTBiSVZDTUh3TUdFendZZ2JGZ21JRDdNS0FsaENrRVFoZENHQ241MjBsUlIrakJNSWdpalVCZkJCYUxDWGpFazU1U2tPYmpEZEEybUdiV2dxbGMzYm40S0pia0V0NXhZNmZxWkU5dFoxRFFTY1FnaVVkYVlLRmZZQ3Bzblp4QTFZS1pZUUpPam1HK21lVFc4d3BmVEpMZ3RiZm94amwrK0diaFN4ZWJsRjB5RmVGVXdKTmdxOHBORHBIRkQrSTF4OHVvNEx0eVJvMkY1U2F0Qk1xTlM4KzJibVNpeDdYWWlTdmdKL3lXN3NlR2svVVQrV2Y2K1pSOXdqbzZpOUFLNVI5U0NrTWc5TnoreFFPNFpmbGRYUVpVMWNzdEhQSGxIdStGakFucnk1c25ieUt0N0QvUFNZZWZGZWEvUWdqY3ZuMGV2dWJMY2FtNnkxaHZLYlorck40VXVXTWo2SVhHdG84dDhoQ3BseWJOZEJKMUlZdGd1ZHRJUWxFb1ozK2t0RTMvTVJvQlUxdE5ORXhjZUNVSGRrS2lBOXlISjYraHRDTjEyb1hyaElmaThFTnBXVlBELzIwS3FieWlBWkNrUVdyT1dsd1JGbFdTb0QwbkNFVlZNWTA1UkV0S1M0RThXSllNUEJNUlE0ZjNJZjg3dmdyeSsyYkkyNjN4ZUg5cXRtb0lpdHJaQ1lqY3cxZDFEa3RtdldvVUF2b2FCZ3VGUGlwcVVUaHVDU0huSU01aUg1akM4OGxoSzJjSmQrdjdHSDR1K1dUSmRsOVppWWlUS0V4S1JocVc1RVYzakQza2k3Nm93YXpjd0pPR24wWU5Ya3hDWWlZRXRId3BCVFNPUWk1KzRIRjE5dnpOZUMrcmFlalZ3L0xqaGxvYTJISUR3eWsxR0VJR0FSb0s4MW41UmJrdHFNVm1TVkRNcElGTVQvYnJ6UlV1UEdid1dhaHZXeVIzZDRNMjFrTHY2UVlRL3R2SzZYUFlqdXlrQUx6c0swUU1INnNMUk5vWDhtaWxkdDNYTEI1U0FqcjhoYmlnUGJ2anI5UElRcmwyTFNiN09rR2FnOEoyNkpFUmpzcGJlMDYvcnlOWW1QdUQ2Rjd5RVhrVkxhQ1FkeWZYVFY2QWVxelRVcnlDR2tTdHlFdXQxMFNxRktUSEN6RUJmb2Q1bmF1NWV5U0wreld4UjBjWDBXVXUvSjN6SCtkYXUyOFBIL1daU1hOa0RqL2VzUUxkVkQwVXl5TDZNeHQ3bVRUKzhZb08xOFRMb1hlNlBnelJ6OXlHcUFUaXBCY0MyS3lDOFloc00rS3MvS1kwQU1OWlRTa1doZXBlY01nbDJNVlB5dlpzdXcwOXNlRUR5N2tqSHE3K05wdUNVcTFKZ3VwTHIwRWJ1U3U1NjdoVDNaZTViR09PVjZZb2drNlNmSkpLb2xHbWlFS0s0SnA0eTVFekZBYkt3L0lCSUNJM3VWUXFTUlVSQ0tUQlhUSW9sWEl0ZExMQTRMN0lVaVN4R2Z4bkcwck5BalVPVmlGMmhtcndpSnNRa2JRVmRva1JEUjJvaGsyd0V2NGJuWHlPZ1REWStTY1hGR09sL0ZFVWZRTDBCT1l5eHZONGFsOFhRY0l2dTc3RkUvLzZMQTZMVjQ5ZGJoa09pakNrTXdLMlFBcjBJK0xRZEl0QkR2azI5dmdEaVEyS0xLT1R6aWk0TTllTlpZc3NKUWJEalBpRXNoUkFLK0hvMys4SzY2Q3lKeWJZVzZram43bFNqYXVkNFB3Lzgra2dTOVBzRU1aUHFIOVlpUW5UNThxZ1EwWWI3VXhsUjhQV0Q1SWp1QjN6LytNUmVzc3ozc3VQNExnaDNqZFBqMDFqQTlKZGtwTGZzN2pRRFNySlQ5M2R1U2ltOHY5dlBOelRRazVMYTFPblhPNU5Ld096YzNhSWp1ZVQzS2ZlcVlWTkVrVUVOSTRmUVBWRElaaFhnUzYwUk1PWkpHN3BQdGZXbEZnK0FOaGhCWWpDc0NFbEY0b1UxUWUxaVJXbnp0NDNxRmxTSEovS3k3UnNjYXJkNG43WXNFRmltK1hpcmZXalFaOHY1aVdFVld2cG9tMzlUcmRGN0Q0TkRYcXZ4MGZQSklYSEZhZTRROXhIdVkzZ09vVTVpMFI1eXcrUWxsNWg0WVRrdTYyRGxpbDRZZmM0YXBvSlRwWC91R2R2VHZPRkZWS3VIQ1ZvSXp6V0NlRVpjUjdsRzl2Z3dGREMvTVFKS2hEK2gwVWhkb0dSSDBFd3JGdUVGQy9RM1o1b0hpT1JxR1JuZGhCMWgzb3lqOU91cU1OaDhXOE9RcEw0ZVFnbFRUeGRBU0U4Ykp1ak1Ya3ZXMjdVSVQ1YitsalIrTlJUUTB4MUNIR214Yk9oNGNZbGdJVnU4elIrQmxyQ2tlRjhvRy9OVjl4L1hEQWhmdzFJblhDMXA5eGsyUUsvellCdzhrVittQXI2ZEtqUTdzdDI2WmVuZGdpOW9qQzdyUWtCSW1jN3BTNHA5QUsrS1M4Q29WVlFrY3pSUG1aT2hWdHJnb0RuRVpJQjBNQ2VMNWxqZXVkQnFTdnBCWC9PTUhnWWgvMHh6SC9Bbm13SUJJNXMwd3JJY05wSk5tc3ZYdll4NnNWUnpIcmNiYzlUVUV3T3Y2Sm92N2dqTjlTSlI1WlNmYUExY053Q1JzaTgyZGI3QnVMOW1qeGdtK29GQ25ta0tDcFR2YmdRNUlaeVIrb2wrb3QvTW1FU2x0YzZ3UmFNUndnMG4yMzI4UCtaRGlRLzNLYnpVcExlMUI0VmRBSUtHN2Y1ZG4reERNR1dJdHJGVkR3SFZ4dWdHM2xYc0I3WUt6T3B6Wm51SGxwTjR1ZTl3WGdoM0hZYmhLcy9EMDlWRG1nbG5NUHFEemFIT0ZnUUhCbk55ekJaa2lBVXlqT2hUZkVBRmdJZng5YjZoWUR0RUxaMmhabWdaMDFpc2Q3N1h0Z1NBcGExZ0VBVDFhY01DQUhQNFNVdlhzOTBOZkxCdGRCTHNjemlDVUpZNDMvVkhHQi9vK1prWDYrS0dYYXNNV2lRZnpGeTRzQ3Z0UGJSSVRwaTBxN1B3SG5XK3VIaGVtUHEyTkw0UGY2S0ZiYWlYT00vdDV1T3Q1V2thNTE2ay9uV0w1SnF4M3FNVjhDOFh5VGt6ZVk3V2dkK2RQZTFNOWQvZW85bno4a0hZaTB1OGkwcTBpd3F0YnQydjRMcUh1UUNOL01lTW93RkRLWWdSRHFibk9WZWZNVDhPajdydm9xSFJVMTgvZFdSaTRnZzdQVWFNMG95SXV3WDRyZEh4OFNNbnYzN3lDRHM1ZnpmdloxcWdZL0t5Ky8wTThUY1FzcDJ3YnhqMnBtRElnR2l1TVozUU9nY2JEN25kZFcwNWNtcjN4bzhlWExMazRFY2Z2WmVlSG5wWDQ0YnJXM1prSEMxYmN2RDRIeDhuRDlPVGMvSXNiV1g1S2tiaERNbnJCekt1YzRwcjRYVWRRREpNcUtCKzNaNUdsaVlXSVdMZE5EMFpDMytzdDM5a3VDQ0pNTE84bEN2RVJSZXpEVU5Bb2FHcWZRWEtibUQ4aFVkR0twWXI5QVpGYUdGOGJkSklCRGNwa0UyVERNNjA5bU1VMzdydEc1bXNvdnBONXd2d3p3WWJtNFlHOGVSRmFuYzVFYjNRRDdJWk9hYkZySGdERUE2WmZxc2pjdUM0R2cycGNGWnVDTUpSaklsUDQwcGV5R0wwSThmTldiRFdpVlFxdDR6dFBEbUJLV2hNWFhML3V2NzliYnY2K3l0WGRHcThHb28xN1doUFJXOEFMYUdFSVBtakIrNVNRMUcxT29xUE5YcEs5UENydUczVVU0dlNVM0dPRUNZQkRhRDR3NGhqdms0WXJ4Zk0wZWtlQWROSDNvZGgwTnpVakVHQkpLRDZOdk9hUi9kc1N2Y1MwQmZQaHFZcDNRdndrNWkyaFREbFBCWEt4bjNWUDZZR09YS0F3VnJSSlh2QVRIdDBUMUFhVlNpRi9LTXRKUUJLbUpybGxmblV6QWpOVWJQdW1senVqaitiVzBmaEZJa2hVc2dBU3ZXcEl0Rk56Z21TLzhRNVNYeVZ3R3F3bnFCUkcreUZpdXFjb0RraDF6blB1VGlWeGZUOUEvdzdiajEzQmVWL2IrQnU1YmhLTnVjNXN6RjlYcUZZVXhSUjM3eEl6UzJ4UmlnOXIzeFhEZVc2S2VJaE9kZGluSFAvblV0bzhvWWdidDJqR2pkdnk1ZUNNbS9INUd5c2E1Y3VqM1UzcndvajB3ZmFmU2FLckc2Sk5CdW1UOHZFSWwxMnNsRU4wS0R1ditubzIzckVsUFJRZUx4MStQTEdkeG91R2lCcURjcERlQVh3WTg5ZmNzd3JaSHh2Zk9KVHovTjhaMXlMQlFTMUI4QkhqaDQ5S2FMZG0zMjY3dHV5aTRmdGhmWnJiajdRbk10QnZzUEFGUTBLd3A5OFl1SzIwdUFvTDE1NjBlNUx3T1B6dmtFTG84d3NkYW5uSE1HNy9uU2puTVdsdUNYY1FhSkxMK1pkOTJZM1BsUVM4a0xlaXhBOWw4a1pNYlp3Zm1xdmMzdlRRQjRoNXpHZjMzT1c5ZnVjSjUzbndBUllocWtJeGwxd2t2clNNcHZHcUd2TitCVnhmT3RicitMVnUyRU44UzViVzFyZ09rTWVHSVZwTUFwTnpWVStUMkwrWlBUUWtpVXJ5RVB2ekM0MFZidGxHcHJTRUNTMUttdldrR0M1dGE2RFRLM3l0S3YvZUFFZHhmTFpHTGVCbStRK2hPSDIva1V5R25oTTQweXBQY2VUNmVvcEkvWDhMTktzdEN3ZXRWek0wMmhuK2pZVjRhZzBoNmJldnpoVjJOTXI2RW8rci9sNzl4UThhY3g1WU4xK0NQZXZvOGN2RjNmM2lFS0RGQkt4UUxYWEZ4SjEzVG1FVU9uQzRsWk5seXpmaGE0azFnaCtLcngvVVNqYkxnTWxtL1VodVQxYkU2V2U4cjZKanc4MnRpcmdnQ1ZvUzJ3a3lSYW0wVXBiOXNhUUpVdklIdFFCSDc2Y1kzcm9NeStpejZCVUxjNXFLY2JDMXkrZUsvSVB2ajh2bTBLcGQ1NFJrNXJhOFBCQm1tR2h4SnErOWhJSUwxbmJqVVg4a2U2dVVRQkd3VUYyaS8zY05RTGhTQmY5MmVsWmR3a0FsOHgvZy93TWx5MFBoZDBmZHE3Z3RTQUs2TzJEZ0wwWENhdElGa1MwZ1NSU2U2RU9Za1ErNkdhMWRJODRQMS9zbDJwanJaSDBsOUV1cjYzT3oxYllTOUxzcDRsOXFqOGVodUp3RysxRFY2TERsT09xaUlSTk5DbmJuRzlEaHV0OFB4bVc4MzlJQ3VWMy91TDlaVWdHOHpJZ283cDhrRGJOUFZzZm5WSG5sbGljeTdaVGx3N3kwL1B5WTgzTEFsbTkzS2dGeWszV011UUk4NzRYWlpCWWpKT2RJeHZ6UE1UbXRlQ0ZrMy9GODM5MWtoMXJnU0xNTGxYZkhGU3BQWFh5cjc3QTJ1dE0xRWZ5dWY3ckw2UGxCQTRLSUF3V3pYbUhweXUxcUJDeGlDVWxvVm5KdnVsTVNaYmx1L2E1c2Q0aWdISXdKUE0vZnBha0pERVVNS1dBaDhBcG1aY0M2cytsNnk3YmZsUlVMY3dWS0xjRW5MOGp1VWhVOEdrbDZ1VUxJdDhjcGpZc2dwajZUY05OdEZ1ZzlOaUxES0JCQW5oQkE1Y1g3eU5aWUZqUU5VeUxvdUo3OXNkSXhrc2RnbUx2eXUvZVFucjExVzgwRG4zM0kwWVE5RGwvUnRLbFdKWUVwbVRGbVZKR0lSRWpHODFiRlFuaGxvbEh0MTl6SFg1Q2ZtMXZjU1VNR3Y4QzFvSk5iYVNLMjlRQWxsQ2RTVFdxT1B2VitUTEk2SUxad3FMNUZvZ0szcGxrcmVsMUpVZy9DTHVoZitGNXdzb1FvVGI3Y0RzdUlwKytpQjF2VkFFbUhsZGZTaGdkOWNaOTlKRUZXZTFxYnhEcWd2OUNOeEw3OHRWWDRWV24zdW9uTnhmNGM2OC9SNjQ3bDU0U3gyWkdlNGxDN2oxY1dSY1Z1V2lhdjMwM0VXbFB1ZXdxMW9XTFNCY3VZa2Rxd1NlUG5DdGJIbjdJZjZzYUQ2cFhYVTFNMkRlRzNHN085Wm5TVVJLVEFtZHI4VGxjL2oyazEvbnhzblc4OHA3cTJyWkJBQWJiNEhQMFhHME1oTU1CK0J3NUxxM08xRUp3bkdETjh5R05ud2EvWlc4NWF0c2dQQklPT0NwNUFmdzJFSGI5bEoyWk9UN1h5MU04d3VsWWlwcGdtZHhNTmdnbXd3SW1HeDZTbGFYZnk3SWdVZWNOTDE5RHZTOWZHd212aHR6V3F5RzhldXRaRXJiaDc3S0V4YVR3ekhIYUM1Yk9mT2I0TXkvaXA0SDc3aG1TOUkza1pUdkRsVWxpcERMZ3ltdWNVMVFRbjdybFNZU2V2SVdWNzNzMTREcGpqQVJlcmMvelRQcFV4ajF5NDMxWVYvTHZ2dzkxV243dzFUK28zYlB2MlVyZTFmMm5YZHZaenZmdk9aakZnbVhCZlRJY0tkRUlBSnBHaDdwODAvQjJvandwVXdmV2NFUkV5VG1UMmxTSW10U1lLMkdkcGVuV3ZjVFN0RFRVNU5jYjBoMTQrZ1JWQUM5WElxcHRYZVkzd2JMQS92MlNDT3dHSmFlR1pVdkpoNkcwaUhYcHladHIxaVhwMXRPNnJ2b0JHR2lOWnpRQUp4WFYydTl2Q3JVTzNEcUp5NUkvQkFSYlFoZzNoL3l5N3EyZFYrQTBGNklab1VhSVZ4SVZrVWp1RzR6T3FCbE5Fa25xaW5mZEJOUWp4cjFOOUdWRkcyT1UvMDN5M1N6OXhPY2VYa3BXYk0vaCs0NzBxaWQwUzluMWkvOTRjeGVKbk5uMDJ1enJtMVh3b0taTUtrQzJoMWVOMkRKVUwxYVdkdmZhV0RMRUdHOW9aR2dKUVdPOXBmNlNlZ3JmMkxYM2dwM0VJMmJqMXUyYkZlYys1WHdsNW9zbkc1TnFURGxQL25CSG16SG4wM01VNDdsT2pBTkdpUTRCY3hGU3Z0emZWOHg3Z1Uxa0VDTzJVRXRNVjY0SVlzM2RBS1dvcTFWZnVSWWxNZWZIQnhKZHB2T25maEgwbUcweGQzbXRoa0J5Zmh6c2pMUHJZaU1ZRThEcUNsMDdBd25pcmRoVS9abm5majdHYnN5RWdsK0tweTN6Qlgrd2xnQXhZbjNiRExsWG9XY0NRYmI0S3F2aG1QdXljOVFOV252VURacnlmR0hQb0ZtRU1DL1JnU1dJYTdoN1NOUVhDOWVpQ1JsWXNyUXdaVHN6V2NyR1VHOGxtc3lCaktSRWRPamtOdEg2c1JSWjdtOHNmWGlHK1VCNTlibTV3MnQxMHRTRUVqTUFTUWFrdW9pbGJCa1VFS2NxS2k4bGsvbU1pckRBM3RKUmFJSzZvK2xLZTA5WEp4SFhzODJGSmlVNEptaEM5NUxSc1dVUm42YkZMYVRhd2Y2QlNpbG9xMGlGT2h3MGdtclJsTnZhU3QxMmc0cndYTWhHSzh0SzNYcHJRTDdmMzJRMVIrUHgyUHFNMzRTYU5va25Pb28wK3llajhpbmNsWVNhMzk3WnZTZVB2NFhVenV1WERSeG9Fd1MxN1FNM1g5Tk9aTEw4emd0Mk5tR2UrQlFQdTFkOTdwdGZtTEExRWhFZFU0UDIwb2VtSHhpeWcycE1GZVJRVkcwT3FvTjNydDd3c1NVTlVUVWFRa295T1hGcTE5WkhscHZ0ZmhYOFd0T2dtRXluRytXNG5pdm16WnNDRmd5Wk4yVTIxNDNQRUxlRHU0cjdLUGNsNm4zVUJRcVZZV1JUblhLbHpLTGVEZXBhUmwwYnZjU0pXZUlJUTBPK3ZOVDl3di9kc1FWVmpKc21iUUFEU1FibmFMUFY1RS9LMFE0NWFnR3BWVUZLUUpWMHVIYWxZRWgrbnlBcGsycEJsYUlodkxEYXdmLy93ejhUTkc5S3RvZHlNVFlBU1JGcWVzUG1kTGVLeklSYTBodDhBcENGWGJzRVdlVkorMjQwREJYaVg3S1lzLzIvTkRrOGUvTU1Hc01VWnkxZW8wUzNDeXBXamlYRVpadVBZSDdRNzdwMHV0R2hRTXlUQUJrOFVYSkZpYXI5L0dRakRNSis0OUVzZWVFTkZSdU1La0dKdi9adHpLa2lDY3pTalVoMi9DUmdDWnZBUjM3Q1pCRDZVM1ZXaFFkdlExQkV2TUFqZk9TUkFPRWtyK3FDaUhueXdLMjJZc21pcGp5ZktvNzZ3ajdRN3d0aWZubVdia3V5TXhINEszQUg0YUh4dmVxczBnazQrallnLzlFcXozQzZMVUNmMnRZWlJGSjA3NlpOSHEwOVJmdmRpK25LOHZmZDgzcm1sTVJhbFlrYmExL0ZKcm43L29EdWd1OE1iWUZ3eTlEUVZnQzJXdUtWaHBudE9DRmNwaHZaanZmc0lVaDdMdzROYmJuZjlGOHBnWTZzb1Y4bWdJNDV1ZVYyTENzbEtBZEJsRlVrRXREMXBrWWlEWUhIcXdrZHhwTEd2MWVnYklWbEp5MFNpZWp0YTNrcHFPZ3FURXNJYW9ydjl6NUxSWktUbHF5Z3oza2ROMHlGalhLd3h0TmlYb1h3c3p0SU5qdmdhdG5kRUk4TUV3dVoxMEhiZ2tEcmZDMnNJUlN4cUphbndEQUVGYnY5dEtVMjVtRHd6OEFORTJhNkNZK3hZZkZ3V1BLZXJQZXpySG91Z1hPNVpWbVFldlViak9QQ2g3MnlIRlJGVWNzMU4rYzBVUlJENnVPR0lRUjlDQzF0R0FRQkxhYUxXbE5MYzg2SGZ6UHhnNDlxcWhyVjI0Skw0RXh3c2R5L1hvNWtOeVYxOVZVK29FWGw4TXF0SzhOeVZGTWxsRWFSbUE2QTF2UEIvV0MzS05reEtieHkyNHFJRk5Oa0ZZMklObDZyd1piT3BaZlV4bTZNeFdtL3Z4bjUvbWZkZTA0dE1xeDZuUzg0NFVSTG1GZlp3TzJtT1F1UGN2ZHpqM0tmSTF4WW5mNGpVMzlSV3ZCTEVyam1kL0xMM01XOFgvTHM1TWEvL0hjdjdNd2MzKzY2allPdnNmUGI3RlIxTDYvM25HVG4zNzUvM3VrSFo3dTVzUzc1RGNtd09aZTVhdkh5N0RrT00zTzVndjd3dzJoTmVHTTg1Z282ZG8xVWV6amZueGdVU0tSVkl3dXBJR3V4VXBiSWNMSGsybVpmRjhnVTY1MG1QUy9pVHNXcXpsaEI5UlkzdGRFdHlrc0MvYlJ3RVhqdHpscGpadWRjaDhFUEF3QmtBdDkwMXJyaHJsOS9QdkJsV1hHV015bEpsZTkzMC82NDh1WkhxRzkzRDRuU1hkQmlVVUwxVFN3aTVzMVQxNFdDVVA5R3JkR1grMkxLeXhKdG1maWlFb3NnNlp0dTg3OGxJNGVGRGRRM0dkb3k4cDNoRk5WcnBFOEduQThGWXI1L2Q5YTV2WGptZDc3NHgrWUNBN2hhem9uVGNJYUxjRm5NMjlPWXIvdzhQV3N0NUs4KzRxKzRXSlJFZlZULzgvZmtXOUVEQjVuVDJZcUI0ejYvcXZoUTFhSHViRXlldnIwRy9vMDFMUGZqT3JTNDlldE5leXNISDBDc0dwQitWaE9WR1Bod25UaitZeS9UQ0R2UHp1a0NlRGVlcllrTDRINWR5ZDFDSXRrN3FVTFVWYmRFeWhXV05NVlBkWEpzUlJPbXpWVXBrMkJqYjVuUEtSTWprcWUyTzd0SEpRV2U3V1dJcVBuNW9YRkJpVVlGZmRjRTBaS3FZN2RkM0txLytyRUhYL1ZaZ2t5aXd3U1p5Ylc2MG9vdmRlZmcraXNndUd6VGhzc2g0S0dlc0JGQ0FCMC9jT1ZINFZEcHZCdUNyaTlwK05Gck1YOXUvYjJhOEVNdE44NmMvZnd3c0JXVTlLaXFhTVFCeFFTNTd3ZnVmUjZoRnorbVkzYnRic00walE5cWdsOWhFcThhUUlHclNadnVrdjMvQTE2MkNYOFhYcmJSQ21tMm9QdTFoSGI1dlFnZVB6QjJJSnVjMnFYYnlOQXUrU0FBcHVFM2wwa3drcERqMjRkMUhZV05EVmV3V0Y0OG42YXh6TXRzQUNUclhhZWIxUVZUV1lMVldNeXlrS21QWVo4cnp5WEhzTTlTQWxOMVNkUmhQVDJyTDFkN1BTUGR5THNLME1VMzAvT21DNWhtTXVCMzVwMXEvaU1rUHczTlp3RVdabzBnOFlQRUwyOUJQb3VZR2xlSWF2VFhkTnU5UmtHVFRPV01NbHlmenVLUFZmVjEyRU1wL3h0dkVkSGRlVk1RZ09Hb01XZnozQndtKzYxTW8xRTBTZlZ2elZ3N3Q0em9SOS9UajZVV3lkdmRFNjY0N0l6SDN1UXpaZ2JPT3FQZTNudHNOd1Y3VGdNMDY4YjN6ZFJ0a3VJOEJFYWRHWkkvRHJsTVF4V2YwUkhjZkFwNGhJL3Z6RElCZWpROWhYdkpQTVF4ZVJnRnN5NXVUMk04Q2JrZzV1MGFNWmJwNzdFV3VnWjV6YTZRSm5LNGpXNUlOTXRMKzUrc1haOXhwc0JVT28wNC9FdlZEWnBHK1B6T3krenpNekJONGNic3BuNmFVODZOUTNvdjNXVnRFT3VNcG1CZWpxR3o1d1dFMCtjQTUxU2RCWk93WGM1ZjFzWFM5UzVDY0VmbnNoTzFFQXNyZkluWlc1bU85QjNHejBIR09VN2puNC9NbTliVDNneVNYRGlRM0hvWnZCWUh1UlhNTDZKZU0ydTdCdUdhNG9hR1dlWTltb1Juejd4OHZhNmRnQ2FZa01SY3RyYXpuMTFQZlVkcitQenZtd2k3bHVtN2UwTk5nOTNpM09PaGJXYjZKaXVpbDkzNm8ya0ZFd29acWRPK21JbHVyLzBPM2JYNmZJNXdpWm1ld1pveWUreURIL1VlTWp4bE1NdWh5QUIvOTVTa1lYSTZKYU53N0lINTlHRU9ObXVvenZJOW9lTHBqUEU4Y3VVQWZOc2xFc3pyanhBV0F5QnFqZlFZL3ZlQ3htdTRTUi84dEo0aUQ2WDBUMzl3L3FVOHJTSlo5ZnNVZkRaajU0S0RzMWdWN0JMODZaUVM4Mm5TRkVsM1JIbVhhWFFIWGlQRVZqdkFkT1ZFaVV3MWtHRTNhNVJMeER6UzVuSXFSUDZSckd5aEdPbXQ0TTRla3ErUTRONXhHdDQvdmhkS1Y4aXlxSXUzN3pOWFhiREtuTHdEbDUyOWhGRlhJNm92YmFaOHlTVkpYK29oK2JtTGJ6c2U5Wk53ZlgvMCtHMFhQeWRwRFpJd2FQY3VXOVpyRC9KU0E5eE54dytBS3JBQ0NBV3N1allUdS82T2Q3ZVp4aEV2Qlo0UHZzU29kcCtiVHlaOHRoNWxKZGZ4ak9MTnMvUklscEFRMFJPcHlNNUpnTlkzZG54Mjc0V2Y3VXl2UXpsUmpFYmx0clAxOWdiVlIvdnJPMXRuVGRGU2RSOVN3SzNYYlQvVkZlbURzRC9TZVdyNzNtVWs5Wkp2M1FmT0JnZ0lHU2lxbkFzSno5ZUo1QXNyNFhVOVFtWXZVY2V5NUhHNHJ5RXlHNG4rdFhJMmUwQ0Z6V2VoRkxFN2dWQ3VsSENucC9kakhpT29WYitqQndGQyt6RWpmT1VPb1hqdHhOUWNpcHFhdUxhWjMzRWxDTDd6NTZ0OW9kWXl2RC9rV3kyVjRXUW0yNURUQXdFOTE1RE5CSTFMYjRaZ3l5VytvMnlxSHZWZHNnWEFteS9GdEdCOHFieDg3ZEx4dmpFdmRzcHIvempSS2YvWGV3QUtzTmhYeWRnaXJQeVgrd0p1dXVvaEJJQUQwRU5mK3NONzVmeWJBT0FMdXIvaEJjZDVrZldRNlpGZlFHTjR2cklzUGl4Q3JGQXNWNmp2bVdlbWw1Z1htczNJSWVsanhTelVJNk5LWGJub0ZZaFFrWitYSjFWVzhSU3BOSDlBenZsOWphcWVGRy9BRk1RSXh3QlkxZ2FlYVYyR096ZFZNNjcxZW9KQThBZDFvczlVSGRHSFk3SVFhU0ErTnpBVjBvQWVUQ0xpU0oySUdCME5Ua2ZiTWx6cFQxcWQ0V0I5SUxjcnRENDloMmZuWUxDTVcwK2pFNjlkQ0lPc0J3T2E2TFM4MUJVMVNpenRmeTdqN1JUbFFnWXhIUTJoNUpTcEVlcFVNblpkd0loVUh6eFNEeHcxN1FHSDB0RWJ3c1dBMlJiNWdFN3kvdXZPbEJCdEc1Z0QyWWdkY0RhWUVZQnhFUGhHd0hZdXFrSHc2Um9FTjlidXpZT1pUdyttSUhCem40SkUwR3dBbENnQnNLUjlEb0FvWU5zQjhCTXpZZ2MreWNBMk9nK2tDM3gwSnhaWW1iMTB0OFNoR3VZOEV6aWJMNmJyVWt1MmZpbk9iVTlGb0QzUHVOeEJBOEpIUlFFS3ZIRGpwclJIcmFoVEdrbFIxZUx4TEd4VFdINStTczg3OFZNUVFGNzRtcGRTbjlZd09UOXhKcmN3UDl2bXhlM2xGc21yd2hZODFaOTVXOFhWalNqSjlkVG9KZ1JqMThYU09mWmhITUtOOERwQk9qVHQrZDJ4Zm02NkVmY2NDaUxGREYzbjhSTzd6MkU3L3h2Y0c4ckw0ZTdSa1hlOGJBWmZFM2dNQ0ZLQ3Uydnl3L2RRaHJPSTdSWXczT1luZ1FGazEwcWlHNU15Yk04NE04T0dqQm9MaVAyQzdwWE1uS0ZucnVBRGF2VnBTN2xUQUJKNFFnMzRWZkM0NzNOMW5yNnZUNnN3R1BPOThab3ZGb1RxcDc5UFpxTDlXMFVOL0p0c3lkVi8wd0RRb09MUE83UzFnUFQ5R0VsT3BUejl0QUxETWVWWUhVL2t0VGVDdWFMMnM3ZTVLQlVsMjhYSHBnSk1GeWxYN0VWYSt2TmYvR2psekE4WTdKM1BnMDh3UitYVFA5NTBsamIrN0xubjdNOFREdTUyOEdWbkpTQ000dWVmbi9QbG4wR0k0bExPUTUyZG50cVZjUElqb0NaTzJCRzI5VTg5Z3Z6OEw0MG8xTGFOVlBZRWhiQnZWdFZ0L3lFdlRQeVEzOWFkZjY1andlRkxvOGh2REs4RXd1VTVWY0ZDbU9rN3cva3RGSFUrNS9MNmcxRmsrVUhhWjFhZmRGZnFYQnRYMCt5ZGJodkpCdUt1UG9EUXJUQytYYWRvTHZoQmY0WHBoUmZ0aFVmNUNHVmszZkR0WEdZWFRTMW1pTDdJUUc3ZGRkRXY0UjZ3RVBlb2NlZzFYWk5zL2QwOXJONVhMMnl3TGk1ZEF3SStzbmV3WkdBc3QyMmkrK2VrWDY0V1pvcjArT1ZCM281cjV3YkJxd3p4TTVuMUZIb0N5NnhNQjBzNHRhdUkzK3JjRHVCaWhwcTNoMmswa3poUFp5WXhoRUFJdnFzazYvY1MrZFlybWl5U2lJbnVtT3Z1SHo3aXJocUNEMFEwYVZoQXpaQ2RvcFNNVXUzVDhCRUdNZHV0QWd1d2paQ0N4ckZuRVQ4azJXbGlKWjRpNXVHMExRM3g2Tm5WTlY1OW1TQ29KZ29zVmVQcTBnQ0dnSTlQaTFsOXpSbzlLNlpKN2tDOGNGSUtETVhVcEN3bnNhZ1A4V1VzUE9YS0hmZ1FRYzhlMjM0Wkg5K2VHMkIyNTRIYzlqaC8yZlpqejFZSFhVU1poWnJhdFV4UmxuWHBQdG5XSjAxWlc3dFdrODFKM1haOUtoa3M0MXcvbHR3bXVZUGNJZTR1VEZSempPdXREK2lqR1VscXJtNW5nNkIxRHBoSm92WCtSc2lhTCtiVlFlNVlIVWh2SkZxN2JyNnhCWGk3d3JRMDh0MElQV0NkQTZTNjhMUDNIcmplMnZoY1dBOVJWQTlySk1BSER5N2ZCSE1IdWdhWWhtQ2c2MEFPYmg0NytLRHp5VVVCamxIMzZIdU9xUmYwWHJmL2VoUGRIN0dtTVQycjEzb2JkZG1lNTVJNHlkS09vYS9mdzNvVWRIZTNtcnJuNjg0cHRwTTVQWUpabHFMc3ZsZjhWSDJWOWdqektQUy84bkh2S1h4a3VmUmVRUy9UdlpwSU5vaCt1dnAyY1plU3ZjNUJuVU05VTJyVzUwK3VqM0h3MkllRnJHZHBrVGdJYTdHWUlTeUZUOVpvckpzeGttQlk1KzJhWFA5MHJmVFFXVXJPMTJyRnJ5MUMyRWwyZmFxUEoxL3g1SCtYRHpuTGhXdm4raVh2ZU1UZFFjdnFvNWJtWXNZNjZFNzNoVDY2M1hNWDZPNXhlY3lsaE9yVWF3V0tuZ3FnRDlWa3poUkFKd0NKeEVLQ0tGRnR4RWMvMlhGZ1dTM2JYRy83NDdnZE0zWERoeVQ4T0RIL0l1S1ZkWGMyWDB0OXQrSlExMGR2cHBweTNsbFdOek5xdVhiR3FPMDBRWGFFelJjdDJySkdzQ0NIRTFuL0VtTVVxZHFtdHY2SkN3UzQ0OUpma0VSTzUyL2RpWUlhbWt2VTlPOFlSTW1qaWdrQzZnV3JWRXVTTkZuY3B6U3BrNWVTOE1IclcrQm5TTnFtUndkVytjdkp1YXhNVDV6NnFmUFV0dzNqL28rYVNJcHFMd1NnLytHSE5kNGY0N3k5NGw5Rnk3a2wzUGI2ZGVObXBhb2xhcS9QU2tWU3c3d3JLMVhlM1EyS091RVRDWjg0VmhMa0ZVR25hNG1wZkhHLzRGdTVickc4VkR3TTZ2WGRyWDVLa2l4MTFRVzB4MGNsRWt0eTZhU2FsL2VKTW5pRjFiRHIwVUY2djN0cTlkM1A4dnl6ZDVNa1ZVRFY5T1lRU1ZJVk5HU1Nva29OU2dvME1ERCtFaUh6M3ZzTllMemdpd1VFMzhOLzVJZUJiK3ZSOTc4WE93aVZhUGdnMmY0b1F6ajVYTWJWVFMzTXhWK2ZaK1lJVGUwYnQ1UXJBRlV6T3o4NFFMd3Z6cmtCK1llQklKd2d5dWpMU2JKeW11bjRoQlI4Rjk5K2pyWmFkWHVqdS96N2UyK1J2Z1NkSlFteE9pM3g3NzFWdXBmbW1PNldYdHVuQkovWUhrZEVvemR2cXlGaHdmWEMzMEc2UmwxQThHeEZPTW0wMmt6RFBWT2ZMSW5ZVXVkVS9HNmNGR3VMeGVWb1RPaFNqc3ZrYXQ0RlZCMWZMSmwwbjhYM2RXK3VkZGVNam9LcHhhOFdLT0Nycy9YcElVZEIycG4ydGhZbUxSNkZVNTQrOUVrM1ZuWUx5U0JVSVU1TkpSS2IxVXR0V0RUMVR3cVE1V2VUOEF0aUFTc3pCd2lTK2FLSGJTa2FGb1BVblliZVR0R056b2FwYkVaT1djWUpZMzZEQ1A0c2NwMEZqYmxPRW5oQ0hTR0p5b1RMaG1rczc4WTc0UDlTSHQxQkkxdFhISklNQzVvZG9mSHNzZ1pla0RmLy9iVjc3c2pMUVI5UUJlWGluNmcrL0t0NjBiV0pMVC9jelp0cU5NU0gxKzFDdWphVHphcW1naVFmSDV6OHlVakZBcndsNUQvWWYrSHAxY2xCZzljYXhtS2h5bEV5NDJIRHNCcU1xUnV6Z3BEY1NseWp4MjNlVEZodmRtNU90MCtvSVdsMEUxZ3lvT1RUUW5NckNqdlRyOG1SbUhMZVUrczJYNkVEbzdDMkVRU0JFRE1RVUN4TDFnYWFRb2QzYjFzTGZDMEtLT1VBR0M3MUplV01MelplUUtLN1A5U3N1eWRSaVZ1RjVZVXQzSVhjell0THhQWWlYaWxVdVRGdnQwa21PTS90SVZYdnNYS3VaRFZnZHBGOXFWdWRtbnJEYzA2aFNVbzNVa21DdVpKUW8xYXF0alAxUlhNTGhockwyYnR1QWFick5xdDJYcW5iclBxSmQ3bW5FTzNCcUx1ck81WGN5WjNOTE5EaVZaZVdUOCtyblJibTVhRWorNTBzb3pIODlWRWd0ZnlTdVRuUGFSWXJRd0JEUStzaUxITmpoWUhuZmFyK0lWY0h1cks3cTlXZHdQL25qK0YyUGZibkdHdVRuc3k3ZEs0bitzU3ZHRzZLcHE4Y25YOEp1VG9RdmVSYU1pODZlMVhlcFhOMGtjcllaVTJuOUFwcXhIekRLTEhIRFlOYVJLeElGVzlTS01LOG1qQzJaN0lHNW5BWUowRnpCYnRpUjVpZG9EVGFnTUExbDRpVGx3Q1VXWHZoTWY3Snovem9Ya0Y4Q093eWd2eE42N1NBMXRJUDBQWmVFcUt3OXdBQVM3clhQaVNDb1A2MjFQdmdTbVAvUVFDdXVyVHltYVdpdG1icDFpMEFYYkowZUNXbVEzcDRYQU5CYmR5dlptOGUzVnlCZEhmT0t5NVljMTlIekw5ajBEQ0JwMk44bks2bkZOM2ZkWVRiYzdaOTVqRk9Jc2dtd2pabG5hOXVtdHYrWmk1TzZCeng2YU8xM2VHOEZYSFNzQkIvOG5wLzdPeDcwemN3elJrOTh1K0tNRjI0YzMwNG9WOXpSNVMzQXFCdHNmM3JuYXBYSFQ1K2UxNXR0RURnSXJ2Ny9HYmUxNTUva2lzd0xyYVgyYnpmODJmZjYreGM3OC83SGR3eDAxd2hDbGwzRHpPbWZLVWthZEVmd0F2ejl6MGp5VURZRzJlL0RhWnIxYlNRU3NtdVpyWHFxdHc1ZnB6NnI3N0kxdFdyZUM1ZWpLRzlubXE2cWRzQWk1Z243R3JJVFgvQjRvRDhZRzd6Q1JKcDJtdjN1SzZDN0xvb2tpMGZNUzRuVVZsb0ZpU2NlNUliazhjYUdzQk5EWnVTdWJncVQ2b3g5ZmZKRFNsbFdJbXJqemMwWElmTGp5dktQcFhjTjVxQ2hZYkpob2JFUU9KV0xIUTdMOUljODJCY0FSOHRKc0ZOaWNReC9MUnpUeUxSbEZCajhsWlYvWDFEZ3pxc0tDZVNHNUxYTnpTY3dGWHVVL0JkdzBoc3hVL0dLdzEwajBCTW1sWG5HMnJNeGJNbmNYOUh1ZVYwZGwzMWZ2cmMzU010N0hiL3ZHN1RKMmdTYy94NlhxSkFvRGxEQ1JnQUNaOWlDUWlLQzBDeXVlRmRJSWtjT3h0TUxrb1NtRlEvT29IdlhLY294eDRILzNRM0FkQnhWU1ZuY0tQcVRORzAvR0E1NFlQQmxlY0VsMzNNZzFjQ2YwUlJ3WC9NQWN6NWwzRlZ2UTUvNXRpSk40L2huMjRpUlVWeGppbHhjQ1htZEJVU1doOVR1UnIvT2tONXhpamhzeGRtVHhGcVlSUWhNU2RrQysvZThDZHNvM1VMOS9SNTBrM1Z2QlN6ZTY4RUxCNmN2NmVoS3h3dnB3eEw5WkhkZkNEaTNLMTZnTHQxendrdlBHSU1vOWhZSVBCcHRYNm5ucUJ4eE0wcE1BWm42ZDRYWi9PTTZTM1RpTVlLQnVldk1FTDZGWVZqV3RBMFRRQnBCZHlrS0wrR05ESzgrc2F2cVV2bkxDOElQRWlyY1Erbi93UDZZeFRud2hpckY3bHVLbzE3K0prNDFyTndJaFl4dkNCcDlMdTNKWVRjMC84b0NQLzRkTEtZQmFDWTNMeHZDZ24vNkp5ZkxCYVhGQXBYSlF1RkpjWGk5K1pkb1RoK0hMK0VuMDdrRThrQ2dFZjMvZkVQbkFPQS9MaWs4S3g3QnU3NUcrNTVUbzlPZUk4QUYrT3lYSnZYY2pibDV6ZjZiRzNGVWc4NmZXSk1UYXRqSjA0am9lcGNmRFlQSlRTS3BhRjczMmpjbyt0N0d0KzRGOHRGRTk3ZW5Rdk9OVnBBMmtUMjhXNm44QnppVm5KcjJUNjg4OUpCaTY1TXh3SXA1amVYK0JRSjlSZFMvUVhrQW02VFgvVDZFTUJTRzNycVhsM3U2cEwxZTU5Q1dEaTl6WFV4QXU2dW53blA1eWp0ZG9UM09vYlM2TmxqTnoxbFE5L1ltQS9hVDkxMDdGbm5EcytySzUwK1M4bUxBL3c1N211Sm0rRE80L2E5Wi9ZbW1qK3RMbmtUY3djczFSYWU2K3JySm0wcTVOd3NUc3k0VUtFbUtqUzkzbStMZWdxaTlhZmFmRUxBVGQwa1NEbTl2UzBvbmcvUnloWTNjNU11MnY2dGxENzFGZUdkeldYQ3QxWGpwU041SWRSOUdLRmdlN3VXa3dRNDVhWHAwWW5ZcWFXRFhjMElEZ3cweWJHSUlNRklYMFkzcktSQThqWWhORmJ3TFNONW01cTdnbW1ONW1rSzByeE5jTEFOREFaSkhxZURHWnF1eWMzZVpEZ24yVGJuaWJyOElLTXNmemxWYmMzZkZZbXVicGVXMStRTXVFUzgrVk9RU2Q5a1B5UXFqOE1QWFNqdXVwcXk3UStnTkh6d0JtY2JrK1l4U2FFeVB2aml6b01RWEwzTEVTa0UvdU9ERDlSeWl0VHZmVFpFOTlPZWsyRVc3dTJCTCt1ZHVTbzFZK0ZjKzVEcnd0SUppeVRXbXNWNFZFamEwYnBjSk5RMFNuZmdZUDZCYWowU3hHZCs0YzVsNjZyUDBsRlpoOHRFVGhuLzJkNEJKUGowV0RUYzFIamhDdnhWblVlK0lHd3RRek9rbUozRnJrYkVOdzdnTWZRbSs4OXc3WTZMb1FIRzBOWGZzdXJCLzFmYmU4QkpWcFY1dy9lY2MzUGRXTGR5NmdwZFZaMVRkVlZONk9udW1lbEpQUkVHWjVoSXp3ekRCTWxSa05DQUtDQzRBeWlMQ05LRWxXVUJCVlNNU0NNS0tJdWlmdkl1L2tUSHNMdnZ1b3NKZFgrR3Vud24zRnRkUFVGNTkzcy82TG4zM0ZEMzNwT2U4OFQvNDZWYyt6MTViQ2JpWGtJYjZJT0R5OTFadEw0OWJrRmVOSEY5YmpDTU1BSkdRTm9oeW1KQUU5V0ZpYmE4MTVHQStyeGVpL3N4U2ZNUm5RQldOVUl4TU9ETmMraXBOSkNTVjVFbXcxbFREZkRoNjRCWWV0K20xbmhJVTVWRVlLam1XUi94NDI2dThXSTlGN3p6U00valhXTGZLVG9xZUpMQXkyc0xWdXN3U1AxYnphM3ZCQTMwQllwU1dUbzRTakFyamJWWCszcXNHWlRpZ3R4aTdnRHgxMlptRG9aU1E0TzM2b1RsTC9mNUx0Q1ljL0ZENDhlWVh3SXhpVkNBYThMZGlvV3lXUGFmVVBOeCs4Sk5BWW82RStMMjNwTUl4blVMaGZTbE40ZWtXRXdSMDlmLzNBaDJLeHJUNWVvazZZL3VxRisvN2UrK3B2VW9XdEQ5YlRpblJxSmJIVDJaRlR1UzlmMXhBQzdjSDlwL1BtcGJzZmRxNkJqd1lpTU9ManNLSVhTU0ZwQ0NXVjNXWWxvbGx3c2E1MXJJQ2pBMXNhMFlGNU5oZElPbDZrZSt6UE5mdU5Ya0xmVUdJM2hFdFFvUkhnRElkOVd6U0ZEVVNLVGp3RVVJWFh4ZythTWpxamxaTlVJaG96clo5S04rQ2Ezakl0dzUzSDNjNjM3ZWRvTGZYaS83V1diSW9qRXdXS3NPTEFSTVhVNytSQlA1UkNUS0ZKaVVBeHlEQkFaVXBBbk82TVJrc0IzNEtzVy9yTkc4VDdRQW1KNmFaYm9sWFJUMThRdG9iRiswQ1J4VXlKY2xXaWpUbnFUNVBmeHV4Yjh1REhxOFpKN2hoTkNRSWc4UjIwOHpqd1oxOVRYQ2ljM21uaVcwN0RWRjJhaitFcElrVFR4Q0NHNTljam1FRDZqcVhzempMWmdnek13T05hRXNxSDRRd3JiSkR0SFFRRG9zWVg1UmdUeGNTUzVQWUhiR2l1bDlJMUFRSU1uMkJOMy9wNmRzQ29IVGM2ZHJXU2tlN2k0ZEhQNmxGUytsVnBRN1M2WVkySmJicHVXa1JMZzd1YUxjbG5uVGpwVlRLM3FUUTZFVUZxQjVDUVFrUnkxdVRJY2N1RnJWZFhXRG9xeEtEQWJUaG8wdnVyL0RGOXMzcEIySHBLUEhsenFWMXdpOWZUYjNMT0hWdjQrL2RLT0NPdkVDUno0Rmp4cVFMeXpEMWNIODhWNkZWQWZUNkIyNFVMMFpMMUFGWGxBMW1HN0hLMG1udy9Ob0pXbVY1YXFpcEtOYVNRREUxUVB3L0YrK0dwU3oydW01clpwb0xyaTR1eFMzZmpWOG9KeE0yMUpPMjViYkhoQ05oWmYwWVBiNGw4TUhPNUxwY2VBNG1RMGx4WkZ4UFJCdkc2blFVSElOYm1MOEJhdWNZR1lkdVlScmdYZ0xYeHBJckZTVURiZ21Qay84SE9ZejA5d3dSWWZBYzZ5YkdpbnA0azFjY2ZGVTh4T2FsRDI3T21LT3ZIUTBZWHBmYkhFK1I4OWhBZTZMcEZONFhqY2xYclhkVXpwcGltcUdsRGZPRVBLeW1QcCtxdEF2cVlqL1J5emYvZVZ0bHBtSEtzTVlvaDZaUGxwZnhoQUNKRitqdTVmS2hHVm9CQjBUZk53STV0dEtSb0FKNDhFNWZBSXlsOVppL3I3T0hTTFdtdmtTSUNnTlVndEdjOUlzQnA1SXhLWUdyaUFGWGhkb2RIemRONDNnSVMyVlBBWHFXRE5sRXgzN2RhK0E3dncrWHFRM3FuaFlrUEhoM2dkT2YzTDV3NHF5Rng4dW1GQjBvQ3Q0MUV3Z1hwRDFVSFFrcDFvQ3I0QXpwVnhnT3g2Vm9sbnFLcTlJbG1PMGo3dkNNZHpIVzNPbjR6N3U2S2JuN1RjejJkTEtaSGRveDJ1czQ4anNVWkx3KzZCUVdQWUoxUnRsWkVZbDFPVnlRTmJ0V0RTSlFFRFJZeGNZWW1CNy9uUTg4dTEwc254ZytKZG12TlI5OFFLOEdteWw4OFJKSnpzT1Z0OVUwOG1lUzdpNXVQcWZlanFORlJ6bjJGNmNPY3VYSUFvdHg0UWNIM3ZzdENRRXlWWDluT0xqVE11bXE5L0V2VDN2WUNrTkdjY3Q5TEp1NzI1Z1hwWHlONlJmUVR0ODBUMHExMWNCc0tvT3VsWGQwTjJmS0xWVkVLNnFnUjdjcWtBLzdrUmpQV2hQTWswbDJ5YmJmVi8vWjlCbjRCT1l6aEpmZitJVHVSNlA5cUZvTTg1RVlpbUFpUktyelBpaTRWb3phOWZjTWt6U2RHRm12a2lOdTlSdTJ5ekJ1MDB6K3RqRjEzMEtMVjNVZG5acU9HV1lLcnFqRmd5SDI1UEpyd2RUcVVJNERHOUFmMy8yK1hkQWVNZjVzYjdvYWRHQnhlN0RtdU5vZGpoOGx4WU1hc0ZRQ0x3TTkxOEQwVDJYVFp6WHZYZWhxSUpjKzdtMzc0eVVJdmp2Vkxaei8zVG1CeUQ4d0puN1B3QlZjZkRVNHRTZVVEelUvR1A2Ujl5UFIvRzhMbktETENzUUh1WHRaWkduSzBORkNvV2pnOFR3eFZQMGZCTENQVmliWjNjNlNxSmtWN3pOZmVRamIzTXJ5R1FrcWJzQlhBSEltUldRbm5DekxYbzNNSzFBVVJBLy9Fa0lQM2tISm9KeUFDRVRJWjZldUIzeFFBYjgzN2RvMWJ5eHhyNXhBYzMrK2c2L3N4d2FERk5UY0Qvd3N3QVVUNlI4ZmtkMVdEcjY0K3V1K3pHSndHSjdkNnFsVGhOZWdxTjNVRFVKZ0dzL0N1RmQxL0U4MlgvMFd1SCtsc3E2WHA3ek9UcEY3TW95bGw2WFVkOEJMd245eVkzTFpFRDJBeWtTRGhtUWVEd05zM1hhUytJQ2ZwUW9sYkFNSlozQXpKei9NakV6eDRrT29GeTFuV0xmY0Yrd1ZBcjJKWXFaRzhsQzJnRytVS3FVaXRVaStJQm5iYmFxeDFpYlAwc3dMRHFHMC9sRVg5RnhuUEpaSFVISHVaSEFHWGJNcTg4aWJnZTFCTHdqcTNPWndBUWNhM1ZHRkhTYlVGMHhSUHpJUjJGMXVGejMySnQ2YlJpSjNveEVzM05HYUdMNWJURkNpNEVXSTdURFEyZWV5ZjNubUViZW1Da21XQ01NNHdyWjFUSnRodzdsKzg1d3FZUWJZdlovbWpBSmJGVFZHeDBuMkhGV0diZFRzUytSVHc5M0VIYW5vME9OdS84N1NCdDZ6dC91T2R4ME1acXp4c09kOFFXeENrbE9Yb21NQVpyZ2pka291d0ZMcVpRbXVIcWVRWVNZNTJzVVk1UTlBRkx0YnJXcjhRYmJGM1JGTlFQWGc1K1JIRzl4eDlHenBvMG1oY0NESkNUdDdvc1VWZVNScEJHWTBmcURSRUYrTC91WnU2KzhBTXlvdGdDTVQ0T2pkanBvbSs2RFpMVWxIaFJMRnZFazQ5cDJBVThmd1ZEUEFZTmxzS3VqN3Z2TXN6b3RvdXZ2eVdxRk85OEwybXdHVGtrNXFRdUlCUlBrdzFJVkM0My9WK3A5QitMRmNkMGhjR3RrNno2SUFBOFI3c05OT2p6bmY5NGtTeURBM011OTlKSDdOQWZRNk1HTGRta20rTWYvczdZaXNkUzJqNTFiOE9HVWhJeWZnNXpHVHdrc0NXZkJvZkhlUldaS3gxdzNQV0szU21BV1F2ZW5CQ01WZjNHZTd0Mm5EUnQvWlk1czd5ZkllZ2JBdkpOdE5QUVFzblNBQ0R0VjdjaG1ZYTBERWlzTEtkQm9wN2Z4c0c1Z1ppeUw5eVFJcXRGdUpVSWdUU0tpOEdxZEFsWVNINUhJcVptT0d2U3hDVmtPSmhhWHVNYnpwWnNYa3hodEtUc3ROdE9pN3pPRlpicGM5V1M0QU1qMzU4eVZXd082YzYwSHVJbXBIZk80d01WWG1wN2s0RjZXbXd1emxJM3hvTTRTZDNXMG9ENzMyWXc3aGJPZXE3MzdTYllISGlDVG43NTM2Wnd2dVcxU1RvTmFWVnN4cEJzNXFtSTRPbk5zeWpHeW1Wc0hua2ZMcVMrWjUzbGVkbWcwVFlCQzJVVWRxWVh2b01sQ2prZHhGQ2d5UzVQRW9tRHR0UERxMzRoU0xDNys4R1VzRGN2Q1QwNEp2MnNCdzBpc3ZTdHk4WDVuMjJKNjFQZ3d3enlrdUlqZ042bCt5eFNiaDFtd29QY0llRkdMYTVMbTdnWDNha1FDZGhmKy9jQml3REFlRi9hLzhVcDFHYUFnaSs1UGZVaEg4dXQ0cE0wSytrZWNaNDkvenN2N3lXSTFKcmt0M0htRS8vSTZrRmkvSExaanA1eW1hb3dNR0Y5ZFZoc3VBMS9VeFF1RTBPS3hMc3dmVkFTQ053UHFvQkptV0x5QVBwV09DcXFhNjlXWmdpNzRPVjNkVE5aR3ZNbVNaZUFNc21sOGorVlVqVHNLZkkyb0NIV2lMZnpMVTlRQmhRQ3N3dDZuZE5XOWs2Q3dncjAzdVA5RUlOVEJHUW9XWFR4L1BMeHB6T0o3NlErTUlQaXp1cGs4RFc5Qzd1Vms1VHlETEF2Z3UwVDRvN2xWLzUyTktFK2VtVkhjZTVtQlpOdjczWHZ3TDFWd2pxSi8yZ2pPNlJQaFB6SGJnRW1VS1pKbkRxclg2dFVvM2RrbDFHOWIzd0k1eTUwMkREQXRCeVVMZkl0dUFYeEFWbSs1d0FtcTdwL1Z2T0wrU1VDcWMrR3RaQXRWcC9uOC95Q0lEd3Bac1czaXBFTE5EWU11WjJVQnNDUmJocHdKUGdZbWxHQ3c4WjZneWd0Z1FzMHp2aFBPd21uYTEvT3p1K2JtWlhlZE11WkJMRXo3RVowdGpveTB6TmJLSDZJSFVCdTFWVFF6UUViRFlvUUdzd0NxWld3eWZUZTRmOHhzenJoZjZNd0FmdkxpOTQxczdRZDV3elFiVHpKZURrdlhYRExwenBaR3FrZjI3UUpMaGtDblVld3N1cGQ2V1NoOSs4SURtRGFUbko5bFFwMkxUUzE4azFVcmlLVjZkUzdSYVlncVBSelIvN0k2aGJ3QlpNQ1d3SEwyYWhhcUV0ejR2b3NuRVdqckJLc3ltOU5Bd3Q5bXVEL3FQMzJIcGJwZmFMY0I2dDc4dnRKNGZ4SklxdUwrRWE4WjdMdXVJWU0xR1hSL0IzYnZ1N1c2dUF6R0U0bTNPYU85cTZpN3J3OHV3V1JiY1dmejdZVmJOdzNCM29FRTBOUTJGZENZY2Nabi93ek9VbC9hMDJqZThHTzFsMDNGb20vdndsemJ2RVE4ZlQ1QUxGVUZaM3hNMkpDbmRDU1c1MkxONS9Vb3FUOUI5UDVRRFo1VEdRTk0rd2lXVkNkMkJUMk1PZWVLelp1dmNGRFkwRTFvNzNZL0JiZXRXRUZTZVpEdDFlcklRQ0tGeTJTRnhndHpSMTR6ZUVPclRxaEVZV2xhalNSdjZHMWxOTnhwMm82K1lndE14dnBHVmUvQjZrUlZNMEE2ZldDTTZTN0hEcVNUNTYyaG9mYW5FRkRhVS9BTFVkaGNjOTZQbXUrRDIyNGJtSXpFbHBaWDdZSWt3SDloVDdrcW80aXVXVUJkM0tkaEtUTjB1eEVSNUdxNVp5RlozY0hPTmVXbHNjamtBSDFxMzJMVlptUG9iZXFmNW1PbGNQT0dmNlgxb0g3eVdUTE5oc3hiYlBjZHRtdDRjNmJWeTR5VWlXbWVsR2U4RUxPV2xIeXN6TmFjTjlCUFVJRXpNUFVnZVJSRWpyRGFFYzV6aXNLeVY2M2Q4OXRvQWJMMi9Bem5HSEU0K2xuM3FaQWtoY0NHeno3NUpzKy8rZVRsN3EvV3JnWDI1WGVTeE84Rk5hNGVQa2c5SkE4UzdkY2g2dTk0K0xDQzhsSDNzWFk1b2hUY3g2TDRWMCsrMmVBQ2Y5aXo1dzhCL3FVNzczd0ovRXJCdnlCRUVmOHVIbElPVXIvS3c0ZVVCT2ZsZ1ozR2NzWWtsVEdZcXJFUCtMRDZ0QWlKSGh3ekV5RUtsYjZZSmQ4bXZqVWw0aTNITkpaMDlES1lDYUk5L3IyRUtTRkpjckh5YzZic1dBcEFZazVOV2FVendyYU1KSDRBQVhISE9sa0d4S0VWSWFoWU9UT1FsR084dk9vRENLckJrRlJkeUY4T1B5OGl4Vll6aTJJSDdsVUVvTmlLOW9zTFFrVXRZZ0lDb2JQL0VoNmRmbDhmSHpSa1VTL29mRzgya05KbFh1dTR0dGI3dmpWS2tIalFWYTVZL2NwTG5wM2g4K2doTk1WOWdOQjNwbE9OWWhwZk1tQTBJbm0ydEpZUVlwcnd0dVJoR21MU0g0b1FSanRTcHo1RUdlak5hL3liMnJ6ZmhqejRlTzl5T0JRbS82SmhQS25EV0NKckEwUGhTb1NKbi9BMU5TUkxFcS93cXo0V2tDd2RDMVh2VjZKeVVJa0RsSGJzakJ4Nzk2MkN4TXU2SUFrYXVua3lKTWROUjBXNkdqSWZVVHNQdFNQVnRrUW5CTHNub0hwTGZQZDVlUGt3QWFwbFU5MGl6WVNGQ3RGazFkbzZNSXlJTGhpejZCQTRndkRlNndYMEQvQnB2TFpKWWJ4a2Z2Z0FnTHhxU2RjK1hlcVNKU2pFMmxlMHR5MXZ2L0NwZFJESWdoYVgrQTIzYm1oYjJKWks0OGVyRnVLTmJ6NFluYjVjMWdSZXNIdGpsYnZlZGZPaGEvKzhnUWQ0a1Z1MnE1eGIwNnVGRUF6cWJRdFN1UzBMdC96dUVHSGpkUWpZTndDSTVRVEFMLy9VZ1gvNGQ5K2Y2M2thenozUWloRkJvWDV6ODZBT2ZHd0RBajNwd1RPSktOdnduWkJhVnJrbXFMdjdPZDFSd0FQVThXTzNPdTd6bzlUeDNqTlVldndzU1dGT2VJMlBVNXMrZ2ZjOUJnKzY4RmR3Y2x1akIwNEt5TnlpL3BnSER2MlhiN1NnTWNORXF5Ym5XQi9tM3IvaXcremwzYUw4SFBWSUlYemVTYjJYdzBSYXY1RlpRWFdSWkt1Wk9Ya2lUL2ZMS2xBK2VCUDFacDFSOFJqaUgxQVRyWGxxNHFUdkNFcDBnYXFCQ1VYekRKcVVzRGxFa01oVm05aFJubmlCNnU1UFBKUVJadzU2WkF3emVEU1VsTUp6Qk1IdlFjN0RHQW1wTHplb3J6V3NFUEFSOS91WUc1ejJSUkFQSElqaGl0K1BhVmtJeTMrY2x6UkNRaUxOVkZha3ZoM01xV2VZaEJGRVF1ak9QeEFIbXFvRWx5Qk4wUkVQMmxVUi9GQnhOVXhwbnlhb3lVK3JjTVZ2RmNYdGxCVDNzNVl1QTdBVWllQ1hhc0xOcWNxakNwYmhsTWNJR2ZYZS9RQjlkM2IrdXl2ZXUwdE51dStBS0xycnY1V2tRbDQ5aWpSVjR4RW9LaEorTlhEdDl4S2U5b0x2Vk1BbnY5SHljbHRUd0ZJbzRYZkgzWEhLN0o3WEQyendoYS83OFFuK1dEM3BTSjAvT2s4Mkloc1B6eHVFSXEzWGpPZjMyNGZsak0zY1R1YWxmcUtnWmVDSHUzdnBxcjM0VnlkbjUwaktWcGJPUFJKMmNnNGhrb3loUWN6UnNVN000OVY2TGhwcUFaK1kyN2hQamJOWm5tWExMdkVhUEpkQXZNQXNLRWVCWVZzNlREWW1rd0JwVnRCSUZiQ3MxWkdCWDR3WHdmTEdXaWdDK0JVQXArZEYxOUJnVko5eWtPSlJkd3FZUFNVc3dkaVFOOTBLK0RhbXlUYVdiSHJ5alorMTk0UE8zZ2hRSlVNem03NHBYL1Y4ejdNMGorMDI3aENUMEU4aVozdUtHVFNIRGtSZ09obkFVemprSyt6S1ZCTDFQY3RiRkhtWWVaeFBFMHVvWUZmZ0o5MkhDQnBpWHdIc3BIdGJsZDJIWkZXVndVNVpuVzM2TjM4cWs2SXhJTG4yUWtHMUZUa2dTcGtNYk1nSnpIUWxpUlUvalZjWkdhKzIrUUlBQmZlbkxaQXZmYk96S0l0ZjBEaVR2UWplVStock9PUVY4QjZ5YlR6QUhFWkJvV2Q3SjFVY0RweGJIYitpWmdweVBOQjNDS2pVdWFSemUwLzlVRjhnTGd0bTdZcng2cmtmYnhWTDNIRXc3Y2xJMDRCZ01jM0xDWSttR3N1SnZBaWYwU2tBbkdlZFF0VCtRSEFsSTE1RW0rVDdnTXdscnhvdWlTaGZFSGtweUVWcm5GTnFSeVVPc1NrQk9malNmOUNzVlZjMzgzWUJnT25SSzRLd3pmMk9aWUhCblR0QnpUYmNIMTR3NHY3SzRsLyswSkZ2Q2JiN256RDVYNGVKbEhvZFcxYnh1c2FUZkFvZ3BVMXRjLytYZTVHc2dOdEErMmw3L3ZKS0FPekYzT3o2UkhKOTJ2MlYrM0YvemR1THgwMDd5N2dsZVVwM0pqa1E5VlNHR3UwUjFjM2pYZ1k1dTQvQy9oak5tRnAwaW1YQkJaMmRpd0F2YktzdjJDMHFBWkRLVGhZNzF6bVRRL1hWeUhDUHVqTkVFTmZ0b0E3dUk5YS92OGdLakVJWXd5dHdCc0kwNHJGZ05HVTdSaGpBU0NBSllSWnpFMkFtMkdDRTEyaHdWSTV2NXVMQjMveGovTTJMai9HZHlKZU95WVJiYnMyTmk0ZTA0NGNRMStyT0tFQS9vaG9OQVBwTGhjbDRiSE4vdmdPQTFkWGFLZ2c2ODVVTlRuNWpHK2E0MkQzWlJBVHE4SE12dmZnNXpIMkdFbTF3S2NzMDBiRllXYkVQWGo5dExpblhpQTJyVmw1aTNuZ3hRUHRHbE1VZDdKWnN4WENYV1lxMGhPZEhSY1VHejVnVkwvL2xVWlRCZFpqZ1R1VjIwSmw2WEYycWZYTUlhZVUrTU8vTS9McVVtZXlhWjdCRFJITHJJZzdLZ20vbDhnRE9DWEViY29Ma1orakhnT1h1NkMvbDE4WmpwdzdrTzJubGNkMkhOZ2J6bTlwS0EreUdiRElDZFBqNUYvMnEzNWZzVE9JLzk0WkN0UURhNGtoRThUYjNXM2pPZFNZUzhQdUpoMjYvL2FHRW1kblF1MmYvd2YwZGt4azRUcHA0ckw5emtUcXhEMTAvYlMwcFY0azFyOW94WXQxNE1VUjdSOVRGSGV5V2JNVjBsOXVLT0lwYlNsSXM4QlZ6eUV0aGNWR3lVRWpHOGdqbFk0eUFORjQweXBENEpmWDFUZ0NndWY4RjRLcEJQMmJoTHRTTitZQUNWNk9ZS0JUcHdNOVVSY0tWL0R5cXdIZXV6dUdtSVptVVBVc21oUmtXamorRnJ0UGxhWDU2S25qR05KcVdkWnNmNllhYnUwYjR4aVB3NFByZytvUFFuUTRINDVxaU9ab2FpSUc3Z3JHQWlzdUtGb2Zkc3E1TVhZUFFOVk9LcGpUK3U0djRaM2ZCOG9ZREpFdXE4cDhnRmd5RWhKMXFJS0R1RkVLQllBd2NkNGJ6OGl2UG9pVTB4KzRnVzFrSnh0N3hwcVRXU085Nks4NFc0Y0cybjNZYWNnS0lsMVJ0TGtUeGl1ZkpQQ09iL2haU2k1WlFFOG1pNGVEU25CS1U1RGx6VVhrK3dnYjdOcFluTUVtUkozUHpHU3lwNVlzazZ0VmVQM2F5ZXY1VitPdW4zK1pvSmhTOGRXN05raUxlT0srQTltUUY1Y3Z6MGxaZkUrWURVSmZBQ3p4OGhpV29OVEg5dnBlbG1WMU9jTTlRekdqbXE1NXp4cEpNYnc3NnVlcDc4SXI1cnBQenRJaUJ6Qk0wYWp3aUdDYXRXR1p3OU94a3BIbVNwb1gzUUt2WnVaUHl2bWZxanRyVjA5TkZ5UGR3clRhc25FMFE2aE9wVkpKb0d3dWxZa0U1aDRKNWhZQkR3S3NDNFdnMHJDekZEM20yd2ZPTlozM3UrRjhFNFY5SW12c2JDSnoxZ1FzUGRKSmxaT2lhVzY4ZVVwWml2akc1YXVPcUpJMEdLKzQrdUt0ZFBaWGdlVmw5RnNHeGt1Mis0VDViOHZuNzUyZzg5bklTdlZiMDRYVUlvZkh6YzViejNva2NpME9nZ3pCYVlScWlTTFJjR29YVXR5aEthWlZFKzlzRFZabUxCK2tETEFrSjIzc3VVSjZkRXozVy9iODZuVnhBRVVRVU1RcG5Mb3JXRW9WVjdhbW9hWnB0VDV4RmdKeFVkK3M5ci9JSzdOdFVqbFNjc1NxdmlLbXVtQ1NIOWl4czcrQmY3YUVLV2FhV2RaSmVZaXU2clV6U2pGZnJpTEoxM2NlRHA2blF0SXkwSVdjY0k2SU9wVG9XZ1pCV0c5anlHWU40Z0tvVy9BVC82ajFkSFdDOEp6YWdSRVUxMU5zWnhYTXIwbmZoMkQydnVrVEpuQ1VibG8yTHJGQlpzcGtrYXBESlNkS0JrOXc4dWFuQ1hjYmRUZW44L094aDBVclkzelBkT0hXcUpQZ3NiRTlRdHZCS05MZVNSY21pWEM2MTJGeGJ1MHIwdTBxYzMxVlNUaUowa0l4T3I3OHlvRTY5cVNrRUdLR0U4QzRsb2E0ajBRbktHaHBuTkQ1WHVhV2t0SlJ1SzJzVjRnZGIzdEkvQkhBVDNmc3FaanRDU1F1ekg0OWRlKzJqUEJqc0I3bWhRRXNuTG96aFRseFpURVZNdzI3L3hrSHdJOXlKVlhjWjJQQllWZ0pBaEhZdG5obkxqMTlRemdhZG9CWUlsNlhJQTZmQU94V2dzaVJsYTVxTnpRdzZ6Y1plaldXZm9HVGxLOU1yN3YwMnozLzczbGhNTjFISWNFTFhQb2J3MTR4ZjBJTjBDeUxMMGpPNjNCWUVabGl0SkRzV2tVemd3NzA3dnlpem5yNDdtNVVlV0JzaTRjeVZSRzZSRWJNQWhIemVpQTlxUUJqTnZkdjNwMzhXODlpY1orR2d5T0dld1lKQjQ4OFRONHUrS1l5UXdGWlMwa1FPcnpIa2NLUVNlZEw5VjhVSldPalB2dnc1UHhoMjQzekVjTlBLOTgwQW5rS0dBd3FJQjlJVzBOUS9FZTNDeTQzdjBwOE52T3JadDR3VFFZWnIrd2xrdUV6cDlvL2duN2dSYmhOM2tKdm03dVVlNFo3aXZraTBoaGtxdUROOUVzdjRSZ2FVbjBpQitrNng5QnY5Skw2RzVudWtIZ3U0YWxGUkl0NmcwVnAxVG5kWHBEQlZWSnRNbEZuRFhsNkE0YUlIN3VMait6UGFVU3Q1Q1FJSXNJdVhIb0M4dWhLaEx6N0dHYVNNMnpJdjFzdFVIU2JDTFJJSXhhU3VtTmhtems4UDRLZGhrSUNxUm1YVmtXeGhTa0VoVTlMaHFwVkNRREt4U1BVd3lDdFdLQ2lsQWFiTEpHTkF2dWpxV0FMdjYrL3JFYkJ3TEtocXJsaHFWK0NpVkU1Tm1rQkp4UVlxcG0xRTVWaU1YOWdvVnVvTHFpVVZoV0pxTExab2ZIelJBSStmRzFDUUdvTkIxbzJqcHdCd3lpanVPaUFja016bGg0MGdLWU5OQlBCZkdjNXVTdW56MHdaY1pnZGh5TWFmSUFIRndQTFpwWG9xeE5JSGhGSzZ1SG9NRVMrWHNkVmpGL1hSakorZHU1NVFsTDd6TGordlQ4RC9xVEcxZVBxZTA5dlYrTDU4akNKelJGT0xQclMyZTJOSlM5aVZzeGRzZmFqeG55TzN6ZHkrdUVUUk9rTHhpVTk4L3VHSkFSNENRMDNLenBIbTl5NDU1VWVncDJDcVo2SEtZWUhrMVBTd2FtYlJ6L0djR01HcjV6bmNCN2gvNUw3TU5Kb25IQmgwanZ6VlVUWHFCNmMwRTZsUzVpWmFINjRWNlhBNWZoUUp6WUNXMXBFVXdlT0RNWEVzazRTdkZnMlRjVVJWcDJRWXRlaS8vZWdwdUZLTlNhb2pXOGNQalU0cEZKTTdZMExXS0RybGVDSWVMNGZ3c0pKaVUvaVlEQ3NML0RpVzdPMGthWmFsZlB0Q0dXcXFrcFVibjhXakJmZEx6MkRMQUlJdkNCSWZpWTdVeVNDeWtacUtEbFJBVG5NYWZkVUZDNm9PNXZ1UWduczhGaHRaaW9lUXJ0QVJGSVVmdytkdUpxdTdPaTVvZ3FITUtFQ2ZOeXEyYjZlam9vSy9BYXFWM0thVXBrTXhrODFtUktocnFVMjVTK2xZMHVMVnpxMERaTUNRQkJpbFhaV2RHOVNFTElLc0lINStrSXlWa05wejNuc3Y2S0VES0s2MmIvK0lvQWdEQjZ2Ykhwekl4ZkJ2a2pJZFJGdldDNEhEaTIvYnNPbjJ4YUdBaEc4MGtCeUtyWHhrOTA0OGd2QVlJU01JcjRmcVRaMGt5ZXc0ZnRhTUdwdkREbjIyNlU5UVAwWlBSUFAyaEEyU1pMYllVaGJvMXNzdk1zUTh6c0hiTGJ6VkxxSmZBSFRqSHAwcmc0ZTZMcjN4a2k0WlJlSktkc2ZoblRrNUVVYnpzNVU5aFFXTjBIZzRtUXlQTjB0ZnJTMWFXQTBrTElSNXRONnVBTElTeDM3N0FKYmVEczcvZGtBOEJVbVl4RkNFT0UxU3hnZGZqakpVR09yZ25pK2RxQ0wxdWJzb3NoL3pPV1JQaW5wUG1sZFpkN2tpcGZLNDh4WFFFWmRrV1lvVkJRSzJLY2w4SVNZcDRPY25xTFJJN2xGRWhDL1RtOWdUZEx5Y2x4T2lvc3h2a3dkRXRaQVdWVlZNNVNDNUIrWmpXR3BRSlQ2UkJjcC9IdGM0L3pMdnVxRVUwdlQ1OUxkTm5lUVZXRWFZcEFpNnd4N29LRWtIVTZaS0JTd3cwSDdHVTVsZHk3RFFBZi9ZQkNHS2V1RFJpeWh6MVJ3bFZJWEE2STZSUUdNOGd5TVU5ZzFkQ3JMZE9WelhBR0FGVFlHMEFJQWN3TVZjZHhhVHpVU3hhRHFGY25KaUlKTUxYN2htODhlNk05WVgzeThvaUErQTZETE12MXluWUxLOVRGWEEyRDMzSnBMSnhIZFVGWVNKWVRhUnVHcHdiUURQMDdXSEpzbUZqWi9Zb0NxcXVtcDZWVFFhaWZ6a3NzUGwwVFlOZ0VVZCsxZVcrdHJhd2VLSjJudVVaeVVnR3VjRTVhOEVWUDBjajM0eWZPd2dGK2JLSHRLeWh4blhxcmNiTGtjcHVqSlQyNFdKZ3BQWURsc2NJazZHQ0k0dW14VTAwY2RYcHBqSXN4ZGROTlh3QW55RHhreXc4VnNXQkV4MDNCdE9BcWdNdDg3eVFxdjdDNmVmZFJHQnhTQlowS25LekFoQ2JwNVUySkpYVHZDd01jYnhiSzlqNldJSHpScEM4cFA0SWVhNHQzMjVuQVltT1pVVytJQTVNSUdLWTRDNVdoTzVoTkJ2OGdSSzFZZHF4NlErbzRzUEN4bXNVTDBJdWhWemZyZEtsNTF1YmJ0TU9vS2xMVWRjMWdlMzlpMFRMMjg4RmtrajV4eGk3dDJ5M0JyZkNvTnAreHdMcGQwcEpsY1NiN0l2ZHhNbEJFMGttajgvRk5mQzJrVzZBOGJOODgvSE15b1pVbTBoZ1JmY2hCU1VRa2tnd1hIZFlUWnAyMnk4MmI4RWdDWDl2ZmcyOE9zcDhzUWprM3NnM0RONUJ5bFB1VTRrQWJOTWNKMU5JNVRHOTNibno0NERWVHZmS0tUNmw5eHl6am15TFlYaW9oUlIxWWdrWWduUDhQVmhiNkQzSVlIRWR4WXg1MWttUEpGQTVvZ1l0a3VGUEZYa1VSc2l0UjB1QWJXeVhUenVBcnFHZU5LR2RUZHJHSmo1elpSelN3YnRZRURXVnd4a3N6MGpBWkpXWjZhdG5CMmRPenV5OUNvSTRCUVNkQk51Z21HRDV3WDNWRE9VajhTcmlmWnUxYXpuSlVYUWRmREhGVzU0N25Ub1ZFWkQzOEN5cHNCcFhJSm1HZUdLelNRdjlWb2RWSXQyMUtzSUhoamhFOWVpQ21oVU00dHBGdUVoV2ZLL3pOVGRxOERNdUZjaFhSWXo4ejZjVlFkeW10cklFcnNLUEtvNi95REw3UHNFRVY2cHJIRGJSK0VTcjJhcSs1ZFhqNi9XdjdudlZlQXNFYlFiNDNqcjVZSjRDdjZjVXppSEkraFhpNmoyaWZwR2huUGhuQWZBV20xRkNpdlVXMElnQ3d3ZmpJeDNmSUNlYklzMlZGeGp0UGN2SHdlcE1IVEQ2Y2IzLzBVelRZMXU2dTV2eUE2WUFkTU12RklqNVZyQXNnTHc4V2diQUczUnMydnUybkE2SFQ3ZndxSnoxRHJIakpvQW1LVE05czI0UmZnMThEM2NENWhySXdLTHA2dUdzN3pzM2lYTDRxY0ZqZitNQ0Y2V0xlbTdQUDlkcWZtYnQ2bGVuTVZmUk1qRWhWOWg5OG95T0lqL2RYeFhFTDRya1hmTngxOXRPMmF0WjI3UGhGZGtPUXBENW55a0krcUVmQjlQakxiU0RCRndicG9QbnZvTThWeWU0WG1vT05MSHliMDNNbnZJNzlBdFNLTng0RG11eUMzRksvVU83dkR4OWhESlY1RVcvQUkxRHhYeXd6U2RWYWdiU0pVNjVXVUxKRndHVnVyUmdrRHNReFdTL0tLSzd5clFHQkpNb0VqT05FSmxDRHdZWHJUUWhzYVpDV0srU01CNzZINEM5MVRFTkU4TGtENHdiMmxjQ205dS9MY1FNK1B2a1ZCS2hPOUdncWtLZmVhZGp1d2dkTXJCK0RuQWlJL0VncE9JRDhsOFd5bWtDTVBid2huVkRLYTFXRUJmVXNUcnRZYWYzdnFXbGF5RDJSOStnZU5lYUViTDVXQkkwNENSK1BWYmFTeHVhNy81d0huRFhkdnc0b1JFelpyaHdkbmpzZmg3Q3VHRUlFN3NOb3lVSDFzQVg0TmJPWTZPakRMeEh4a2k3SFlwRCtHZG82TkxIMWsyT3Jyc0VYRGRuVjVwNlNqWGpFbVloYk5jQ3JlNTc3bFdibTN5cHU5YU13WWFmY3F5emlOTHkxRnZhU0hvditkVC93SFFXT3FGM2w4cEt5dTYySFYvTFNzdkUzZzFDR2FkVHplRHRGSHovVU5jaldKNmwweElzNVNGSlh1ZTRZdDZxcDdvczFDNVN0eHp5UTE1RVQxaFdUTUlRZUlzMElwYlJjckhmK3pZMUZTakdRaUxQM2dLMHhpQnBEVHpNSzVtbThnOHg5UWc2SjYxOEkyRjVXYmFqR2JNMW95SFFqZzNhaXRzaVJ2eUVocXlNVHpQVjdSVmczbDJnd0JFZy83Q2k0bE9kUkZ2aHl4K2tkb1pmN0Y5QUlDQnhvT3R2cUhudFdUemh2ZUIvblozZFhzL1NNVnVJenJvMjJJcGZBWjh2cjNmdmM3UEJkN2ZraGVjT0lHS0xkKzhFTk8rNVY2OHgxLzlja1FZWHVyWFFoVW9VcUhGTWptWFo3cllMUDMxR3BtYThtSkFXS1FOakF4b2l3VDlSVG1neXZCMVJmdlVKdEE3MGRjMzBlcytUa3E5K08rdlZMSHhleVVBQXJlbGNyblViUUdneWVEenNoWlF2cFFuUCt2TnN4M1h5cnVaZExUMzBUcWZ6TjdLNmxUMjRTZWFCUUt5MHpRcytxRkljNjRrWGc2TGY4UzgySDEwRE8weGdnK0VpZjBsK2FVUTNZR3Z1VlFuQnA3VkhTZk56cUhzTVk3SzdoUyttQXdHMzhMaVVDckZ4Q0t5ZDNPQStSeUNhMUxFcnBJNnpzL2pxci9pNTBITVZMajN5bElHWXBrYmMrS29IMkxCSFJKdmcwSVZ6NmF5QVVtUGxxTzF5aWlzVjhJRjBROWFyUmJDbFdxaFJpam1HSjZibGVvWTV1VXI5UnFUM1lldzlINXlwWG1BMXlVZXlXWUl5YkZzV01IY3ZCbFVTQ2d1UUh4bXdZQTlhUE1YVllZeUM4NjVjSkdWcU1aMTB3NFBMVWlMUWpFaks0NHNLSEJxaWpjamxwYktpY0lLMDlRMUxSQTNIUkVSZnlCNGNzK1ROQjVMVUczRDBqc2luSklRYWN0YmJicXNtSmtFRDJHN0lzaXI3YWlKZUZDaFlVZ1ZXVUVRWCtCQjE5RmJKRUhBNGp4NEM3ZzBJa2tpTm1oQkNSWU16N2YrYmR6ZWdNYnVxNWgzeUhsU3dBbkdQOGhGYVRSRmxFRXdTWDVtTEtKR1o5WmFOczl3MjR1STRZaFFEU1Y4MVIvNDdxZWFVK0FXRnk0SFgxTFV1Z0w2M01naVFYdEoxalJKcVFiRFlLRHdFcGxmZ3RZZitqUFJsbU1PaVRnbzN6RnZFb0QrY1UxeHQxV3RFSjQyQSs1VlI3UUFtU3o2VUtBWWRWY1g2TlRTaEY0VFBFK1U0WTF4c20zbEJjb2tMb1p3Nlo1VnM4QlFRVU5VM0E4ejZhN0NzdU1PbHdTcVM4eEwxUWc5TGxkb1pvT2hlcGk1b1ViUmRDWVBMejI5ZTIzNmMrbjFQYWRmQ3ZNWmVxSm5mZm96M2dsM3lDSjNGSXZkK01qYVk3Y2NnTktUNlhXOXVBU3lxV04vNWovbkcreldLZmFRY3MrMlM2QzFpeDM0OFlkK3ZaZ2M5Mjd1c25kZVArVDc0WkxJdzVaeUt6WnMvYSszUVZ2ck92QU8ydU9UbmxhWmJOMWR2b3E0ZVlvcGphOC9hWnZOdHR6N1R0b1AvSzVGRVMyMGxCdXc1V0QwNUswODNuTGJYSTVoNE9tUWxsS2NrcWpYUk1SWmxPWXBaVTBFV3VaQ2tVWVZFdW9FbWhHSU5QeHdpTXlhdWZoRUtVclU5TVF4VnZJakU4dUROYmhyVklEYko2TGhKZW5PYnZ4UFpJZnVQUVR2RUI1VmlIL2ZPVFRhc0c5ZFg5ZEVuTVVrQW9GRUpGYlBHaGlhQkxmNUlZdUg5d3hOYnB5N05jYWlGY0ZIRmp2T3hIWW9MUmJLTCtOL2FYWUlvM09UcUpQR0lPNlo2QzN0cXZteGlzWWRqOE40ZExBTlpQMUFSdEEzMEVhQ0ZCRzlzY3BpR0JsOVorMlc0QmJRNkY5Y2RWSnpnc295UEs5Vm9zVmpHaU1hYW0wSzFDcCtsVWdGRCsrZENVZnh4d3FmbjZzNWVuYXV2aCtQK0ZlOXlrNVRFY3lKVXhFTVRPRTZnUDZQU3JoQm5lQVRwWjNOeWdYbjZuUVh1Um9LUG9scnhDT0lhK1RlTkU4TTgzaW5uOENqWElqR29HQ1pHRlBNa01nUXRPZ01HY0tkU3ExblE3aFcrSjlmb1JPRnB0YUh3L1ZhWkRqS0dxbDFncTBKalhScXlsbWFyWjBsNndCMGpvUWk5N1RENVpYT3RteEhLaFlQZXQxNVhId3F6VTRMU0hOdFBmV1JGc2UzSHpvZGJYWTBjRURYRDBpSllGdUhFN21vM0ZlWkFMR1kxdDdKNmhvOFBrYVY1MGxZRkFDazZiTDN6M2ZacEhQa0tJMi9aZHpKRGhLUlV5eGhybWV3UEZ5dDUzRzEyK3NSbmlyRXFhck44L3pCSzNTRTl6SXp0OWE1YkFBV0d3R2FFVWswcFFGMXR5WnNObDd4MjFnZWFBYkhqMitDSEtrNlQ5MXRhVmd1NEZhUUZaUUc2ZmlSdWF1QWNMc2U1azI5dlhpQzJGekJDTXRudFlIRlBWMlp0czZleFNBWU9DaUh0OWdSb0pORTlORmNJS0lrbFdnZ0N6LzVZZFZFS0NCTGQ1QTIrakJ1TEtoZzVrZ1hXTHd1RW02L093ek5aQmlLc3llSTNIV2hyaHpJa1JlQVZBcmcxeVZ6MmlGRi94V0k1SXd6ejFRMEJiOFJ2d3FvRWRYVHU5d05MMEZua1JnYVA1ak5pMVhrQnBkQnVHeVFidEYrc0d5d2tSbGNCdkFlL25Sd1dUTytoOFFPSlBIOFk2MUxOWjF6c1dCRU9kQUhwaGtIVWxoVVFMZWR6VEpCcGd1RjlJT3ZnMm5HbUpBamRoNXY4VzM4Njc2TytzY1V0ekNGNS9pN0tIbzVsdXJKZ3dkeDU5U0pacVhzT1VvU3YzOWhrR2hmUFo5ZDJzbVZLTTBQUk9JMHlVK0dTYnBuOG1sWXpLME1FazBjZGFjdG05UW1QVWprcTZqRW1BL1BZbzBGeFd0MDlac2tndFlnVXdIdmYwSzY0cTV2NFlsdUdNRnZrQ243OVNONjBEWitCS0VlQk1IR0JEMzZNYUJIOUJZczJmZWU2QkhFL3hjY3BUOG5aNzBIcE9oRGp3YU52NmMzMEpjbjUzNElqczQvWnQrU1VOOCs0V05hWkZtVGVEc2Z4OWMzWlVrZ2tybGdBQ3JZRU13MkxHbWlIWTNKN29VQUxPeUdUN045WTlJS2h5MzR1UHZQZ1l6K2V6VmhRL1czWnFuY2ppWGtNSnpGTjdoZDdFYndXdmZDeHYxaEM3eG1oZDMvalFXUWI4c2t4Y2dycG1rYUlJNTVtTEJ2aTU3eE1JUjhyZkU3eEJHYVN3Q1RGMXZ6NWM1TDk0UG1RUXNaaHFqYk1QN29wZUpsRHg0RExmUWwyNXdoQ3N3WnpYbDJ6bS9ITmh0VVNqWnQ1eVJJUXc5ZDNrUWFrcTcrdWtuVW52Ylpkam9ZVE52VGJOZlVHOCtnQ2J6Q3QzRTltRi9jZkhLOU1haXdBbXJOdGlBUUZsbHNTZGhRcjFFQ1JYd2ZXakx4b1p1Qm94MldidDRmT3ZPRDBtR2lGdWFYOXNIVCtwYUo3cGJRbXJNa2QxbzY2MWI2a1E0NHNsMEk4YVo2L3JnWWpTdkNWbWhKam5yK2NpR21HOG9JMDkvQzVWVHZ5MTlEOUw2L0hpVElBNFB3VlJwNjVENWdtK09rZmNZMTU5eFpQQlB1dUZWVDFKaitqS1FnWU54NVJKTjVGSjJtTjVCTjA5NUVZbStKMTljR1ltK2lzUW1ZYlBqWkJ2d1dtUFA3aW1MaGJGNWlXYy8weEJKbDBYbzNGZXNpT2tIN1VGdXRoSG9iai9jdkUzRnphUFNicGh5VWljRE5rVFNLN0NQSDA3aWxJdno0SDVuOUFIYzJ5YVo2Y0YxbzNVRVNWb1Z1T1JBNmRET3kvOEhDalVXZ3BQaXR5SlJDeXZuTHhWaE1FYmFyNWpoWTBnOGp1b003M0xVaW1PWVMzVGhwUTlwc2NDOGVCZmpTZE5Ed1ZPVkh5SHVPN0g4L2hPL2ZmMFJ6M0MrejlndEVXOXBQamVxemVBelNzVE9EcHRBZXpCOTJjVFZ1R1c0N0R2akNLNTRwUlJKSk9WeXVsV2kydERUd2ZPa3lYbElDMUpMQXNUV1pZeXRERHFaYmtJWEJvYzBDVUxTdnU4c2tIYW9BN3VvYkJ2d0xkOTc1QWovMkhCc1g3bEZQdjk4Q2J3dGE0WTVmUFNLcWR4c2tZWjRnRzNmemt2Q0p2aXRYNGdmZ3gyeDZQLzVtWFB0blNMcy80N1czYmVMWk9JZHRTMlhKZTlCZVhPY001b2k3bTNHNEhLajdQa0FucUdzTmkvRGxha1VRcFdvbFRESzBFK2lOTWppSjJEL1BpZi9OelJEa1lvMHZDSm93cjhad0xMcytzdTl0YnRubzBkaUErOUlVbE5GbWtHV0VnR3dmdXB4OU04dEV6Sks3MEJhQTRoRkI0dStPcXFEWkJBUHZYZTAxd1UwL3VGNy90MWtRLzhFcmdqejdCeVRBSTQwQjc0RmtDOTQ0R1M2Mnh3dGhldjQxekFzUkgvbHVpa2R5UEQ0b216Q2txNmxrTGJSNFQ0S1RKbzdiMTFoQzBBU3FYZkI1dW0vVTV2b0o3bXJRam9Ka1BydmZ3WE9HVGh6VEJ0a1djZ21QZ25xSHkzbFA0VHJxRHpUNzJoc3pJTXRvNUhuczBNY1ZtNEtOWnU3cHVkb00xU3IxS0pNc3ZhWEsvOWJ5U2NxSWN4SFRGd2tLZlBQWGdpalFiN25acFI4UEtERTZTUmsyQ0N6RDlmaCtkTWNka0ZiZ3FxNnF5N01Qblo2M2EvcFJzZS91b2IydzZlUmZIaEtKRkZlZ2VVVExUY1hnU1V5ZDg4eWVKNjZQYW1oL3dHVlZmRXMxQ2NJRFhxQ20vOGRWYkxSck5yb1RBZjVPWkd2d0t0Smp1MDVjYVduZTJPdWZ5Nmo3dDZJemdKZmQza1BJaUJBbFdyRzF5bk1HNEVxckJmaTRJYWxpa3JxRWpzUG5UYnN4MWFRaWZWZGRCZE10QS9IdnZORkpEbHNHN25IanMzRS92VVovaU1rYW8wajRxYzljTmV2UnVIazc3cS9iZ0FUaUxWUXVsZTBhUVRJV2lLRjJudnFQcG1iSC9VYXNTVkpRd2w4S3hQbStDc1Y3aVFZUXM1YmpqaW9JRHl1T1BMZDJrbmM2M2l3aDhlcnpYeVFKb2hPdW55eUlEc3pNZjYwaXZjMkprUWYzblVRM09Ydk1OeUQ4V2VWLzN1Y3VQNWxhMFk5ZHU1L215RjdGTEdySFpmK0F3NVZhU1dJZ0thM2p3MCs2ZnF5TkJRK0FPMmZVV0VnOTVMNUMrN0p5U0EybTVCbUFKRUJOejQyanRQc1lUU0ZqKzZqWHRWbTh0d0grY1NpbUhzYlhEcE9uUEFpZ0hQMlZ4NUxBT2U1a25QMm9NYzMyK0p5bnozd09YWXVHT1lzYjRWYmdWWGNyZDRDN2d1UHFKS2hJTExEWWM2S3hLa3BpcVJvUkpWeUYrdUJRbFhwa1VZNDFVcXNUck9veFdLdldTSG9nVVNyNkN0QjZzK0JIUEJCbk1NelBrVGg5cWw4cmtuQm5ZdlVuUW4wUVA3UlFPb3Fseno0ZTdhalZoNWJuWTZWZXNENWI3ckdEV21uelpBRUJFNGw0SlZ1L09CSkl5MFNTaGdMbWZSWlZWcXh6ZDROVVR6cmRrem9EUkF1eFdDRjZreGt5OFovN2RLazl2a1ZYb2hBc2FWOVhldkExZUhuWi9WelUwcEpLYW9HbFZGOExDNXFtVGlsRnVkakJ4MUw1Q3dZY01IeEdwUjJneWxKTnhSd1MwR055TU5hMUFFdkVNUUpyQ0tHSlFIVnM0NDNWOTM5NFR3Uy9NWjIrSnhnbDc5eXRraGZpR2JiMGtvRWVCM1lzQXVBVGVPbjR3ZHU5N29xMjZLS2dhT3RwNXl4d1Y0OXA4MTdiRTdsZ09lWVVOM0hidUwzYzMzRjNjbzgwWTZuRElhbXBneFFsNmtEQllnYjhwdmZpaFluNzVTandZWjBnZzNqeUFrOW9NTExqVzhqcVRCK1F4endpalIzRHR6RFFBQzlYY0NoU3hjZFYwY3NiekREMWFtVUZYNnlXaVVhQnZaekZOZVBoZ2JiTHlSQXZMVW9ydHJKc0crVFJ3bEVzdVRsYTM1Wk9pZVIzZ3BqcEd1NXdIQzBpeDJJdzF4alJKTWx4K09kdUN4YmpVY0hVN2U3UVkvL0doMk9DSmZOU3R4ZHVkZ2J6UkhrRmRNcUJjcGZwWG9ISE13OVJicVVtcWlKQ3VvUEpqU1RIMTNlMUxVbVVaWmk1R2t5NWYrRGhKcFJabGNIVDM1SkVBVUd4MDlnR05IaVJ5cHRKOWRUM3JCNkZBRzVhckVhVU9BRVpBakFjUVFGQk1nVEh5ZllBSVBLeTFyTm5ZT1VWN3JRY1UwdVRwZHVmNHpHZE0rTlJBaVVrL092ai9WdDdKUVhURlJiZ2NxWG5xM3NxN0ExMXhnVEh0ZkJBMUpJYUZDRHM3TStWQS9oWHZLVmkrVnkxaFdBV0pGTERoeFgxYlBDOHEvSUFEcnlaQllhZ0NMR2lJa1VzTEdVT2hFY29YWGtDUFlUMmNpbnVGSVlIUVpCcnBVTEpRMmttVGpOOFBkSmU5NHpnM2NCUGZucE0zZ1ovUDk5UlB3eWZ5QXdDa01zZUdGc3lzanViQTdBLzllNXAzRC9aQ3k4RU9SMjg3MHVVUkRCQ2dibjRGai84OFcyRXZHemFSUHdNcCtEeXpDbDkxVnhHSnhYT0xSellsRjc0NGtVdmJWV1VyUzlkOHZWWHNBU1F4ZitXazZjc3gwL0o0bi9PRnZMRDlldUpzWCtuM3ZSalFEUHdEVXpudVNJb0ZRWUc4MUlBRUtScVRDWkh3VEM2MDUwSjVmT2h6enlpQWhNTGFHUlptb0haZE5wOTAzM0x6Sk0xS3QrMFg5OVBkWWRSR3NWQ0lKaVN4SHRvWUpDQ2dFaWlBbkpvcWpGTzVCdjE4VS9MS1RNZkFsTXFIdmZ1RmU0TW5NVVhNTGVpQThlMDA1aks1czA4UEtOeDFGdi9Qb2ZwNGtITWtWOXpvdjd3a05US2RFWkdLelN0b0lmQlFlZE9SQ3lMaE96VnFVdTBBY0tzOS9EQ3dGQjB2SVVqN0tlbU9XRVd2YXEvaDBkUy9aRDAzdmpJb2wyNDkvZ05tUUJSU25RT0FLQ2c0SnIrNVpYVGdnSVBCbnNrQWZIbXJ0dDUrTkJYdnZJUVhEcENuWXhYcnRkQmpuWDA5UjhqSFlGN0U2OFUyMXA3R2ZmYmVNc1lnSk5wM05INWpBNmhtc2t0WEhZZ3FxQlFVaXF1YTRzNTBCQUJrS3lBRWttdmJSY3R5UXprSDcvNjRuMEE3THQ0elkwMTZoZzlObk02R3hXWGZtMGZpVWxldjU0NDFXNTF2RUhCUm9nM1hQU21IWE1hci8xQnJyM0phNUhJVmlGU0x4SnhpSVNxUzBLUkpCTnQrdGtKNzJRbUVNL05sb2dWWnEwMUErQk1VUVE3QXlhbzlXaW0rd24zRTJiVU4rRzZSMXVpS1FpcTFMeWdGT0RFMURYcmFWUUtJc2dBVTVvTnh5SCtzN1dwenByN0F3V05qcEtVb2xrUFgrQ28rU3NQUjhocmFIWXdxY1ljbVFSTUpOUTFqUGR4OFZyQVVidGluc2dIOVlKUHRwMDhoWEd2MXlvODU0UWtDcFdCcFdISWdlWUZxdTFuRjZwOTRDM2Zhcmd6WDlCTjVPaHRiWGl0M0NwQllDY2RUS3NrOTMzdXo5b0x1aUdFakhUbXhzOWk0Y3hJaHBISXY3NkpHUXZoaHhCeUVqYm1RTnhIWExjamJEakkxaTBuQzlMZ1N2ZmZKUlJPR0ZCQW43MHhuZGJEZ21Ia0M0UTNZdlA2ZWNxL2NTeklKUlR4WmdQMW5FV3pnUi9jWlVVZG96NjhaQ29SNFVFNEhRSFBmZlIxRFlRelljQkhFbWVNVnVxR0UyM0dqZDZEbnpXT0Qyb0VuRkNpWHFaMFpZdm15UnlzRzE3WUtJbGR5aE9GSHF5SEl3YU01bXA5a0hybDBzQUhkSG8wenEvY2dpZUFkbUVPYkZuSngyUGlxSjM0NkVxWUFXQUpaaS94QnZIbGFDaTVmd3lJR1NTRGMyV1VFUUZxZ3lzL21yQ1h3SWVyVXp4ZjVRMUpNdkNPbjZwZWNzVUZteEhvS3NPd0hxeEFZY2lJT0lYc29qYmpFa0NTWWRETkMrVXVnRFpmY01VbFRiMFk0V3RqbUwvYXdYMkVlNEsxVDk1RC9tRFdSZXBsZ2RmYkVNc1dKdExRWGt4QXFFUHhLT29IYzRzLzhjV25mQms1aWZ1ZU5CQXU0Q2JBMUFreHU0QW5oaEZyQ2ZPcXI5V2pRNUZLbEtTYTl4Z3VFbjVoMG9qRUtLVlJ4ZUU2dzJUeEE0NUlVbFVDTjQyWmZnTHZPSExCUVB1QzBJTEZ1R2lrVFhGb1k5dFpsNC8xOWNTM1cxcDdCQy8zaHlBdnQybWlaUWRVSllhRWtYam5Za0ZzdzZSR25od1lWeFVraEM3VE0rYURyN3YvTFVGQnRnUTlWWGZLdVg4VmtKeXJKbFJKME0yaWFTZ2E0bUhXQ3NVeU5Ud3Nld3VXSkZ5c1JOUkpPeWtGd3FYZUNjemcyMFU3YWJqZlN4djlXUzJxR0IxR3Nod05MQ3RBeGRiQ0d0RzJZK2E5TGVrTXhrWS91cG5rWlVDNXlPSnZYcjN5NmlHOVN4RkVza3dma0N3WXN5VkJVTXgxV2FTWDlHaHZTaDFhSkNGcFU3WWcyR3BJakFzQy8zcmoxOW1GSVVFVzlVUXM1Z0RNcVdxMU1RSHkxcjd4RUo1V21CTk02THF1WkpIcXFKWmtDWk1TcjZ6WDRyS3FSV0xWQWlhemZDQzBjUDJHc2VvdVEwQ0N0akRXUFFoZ1NMZlE1aTRJbU82ZnJEUGZSZytnUWVvN1JFWUZpUWdyNE5WREVna0lER0dXSzZWYXRGNXJnajU1WXMvOWd5Rm8vTER2UnVIc0owWTFHRHg4NVpyQVA0L2VMSnozNk9JQXRQZTUzNXZZRHNEMmlRa0Nud1RUcHhaUlFMdlBmakovSU1TalIyOTZqdzRmdFovSW54bEUvQmVlSVhleGU3ZlBZWm5OVWl3emxucVJZcGxWYU1nRnpjcElSZFpzNDgzL0lIeUIrelBpWXBFbThRMUI1UmZRTW0wSHpQeUNyQzd1VVJWZlBpb0krSzVmRUttUzZSSkl6cjBzTjh4TmNLdHBSa3h2aWZ0YjZuQlB3dkswNHNjRnJGWXJVb3VqTWVLdUp3dk1UYkdQSG1xR25rSlRwNGo3ajE0c3Z2Y0JxaFpmZDFIVWZaeDY0K3lDVit6V2RsOEJyMjZScmZ0blo2ZjljRmJnUUE3WFlPK1ZzS2thTjhLdElQemc5Rlg0T3NYaC94bDFQc1liM1ptZG52SUZhcmErM1lqRzZQcTJFVk4zeXMvWG1pRUZmc0pCaXV3Mk9wZjBoVUZlNHltZEoxU08rT1JJUk1SaURMcnZkbzJiYVlaOHBTYmZOaUZvcWk1Z2p2MjBUOExQQmg3Ym9vQ0FrbFJXL3Ayc08zWi8xY2tyVG1WSDU4SUpBQ1ZEUmdLL2VzSG1QWTZTRDFmNnJqODFqYjgwZmVvTjF4TUdHYVdYay9RMGFsemRYRUI4KzJaY1VKVGxXUVJzUTdjZjIvSHlhWTdsSEJ3R3hOa09pTVA3ODRBUG52YnlqclU3VkdaZVVIYzAvZUorUnYwTHh5a083UWxqaUNNTTlxbjQveGVpR2E4S2hnUTVNOEJEZXpmby83OFBYbWFwZ293NWVsMWVjNTc4L3hXb2pNMi9hK0UvY1dFUDY0L2tUeWU2Z2pHeVRGRE12d3ZkYVNzSHZvWC9nUndGRkFUVEJyZ2JpR3JRdWVBV3ZHbjh3UWt5T0VFZ0tubmY5KzFyZU43MVlCbC9DYmZHMHpKVERvc05LWm9VZE5pUFVjVU5YL0dLbUxWaXprdWVpcFVzUUhpSVNrNmhSVGN2dEI2Z0tYY2cydzllSUlvM0VEVDJJUzhtRGU1akJjejZvVnJqYWFxM0VnNjNxeWJ1Wk9mOFZnL0Yvem9mNzluUndCaktndDc4OW4wQWx0ZTR6eGhCWGhLWUk0c2c4UllyV2JZSjkzWFUzV3RKanc2TTZ6d1VBcWE3eVgvQU1WdFB6M1FmWFk4emVDNHU0cFppMlFHdnRGNmVHeS9RUlpUS2MxNG96T3dFNkdLZFFmNlVyZU1USUZJWDgrVUllbm9ibGxJUHlIRDNjbEE5clFxNjg3c0lDWVJINVZUUUphVERmUU5mNVNHZWRkZFAyYXQycnJLTEs5S05CaDQzS0oyT1RjVFN0YTBBS2svdnVmcURVYXVyV3UyeWpQd1dRbDBiNDNnTFAwUDFkdC9iODdTQ2wwaFZYUkNwakl4VXBMQUtmaEdydVgyQXorZDUzNDU4SzFxSTFuaytOdXR4dllaeGJlaDhHNm81TFdXQmxXa0VjNTJoanhsMHRUY0FGYUpzRWc4L1JEd0tiQzhqRW8zZU90ZEtaVk1tQVBsS0RyUVVqNUN5UllwTFFEWXBQNzVsY2pGb3o0VEhObzlGMmdxRnRnZ3VoRFB0L1lOYnp3Q2xkTnVhMDJ1Q2xiTHdYenlmaC8vZUxOYnRwR1VsYlZ5SzUycldRMWVHdzEzZGRuak5wb0dCVFd2Q2tQTkw3amZEUm16OTd1akcwN3JNcFI0MjVEU21xOFBjS200dlJlWW96NW5MaWY5cWdUaXJGakNmVjZoVEk1d0haNHRsWWtwK1JnR0pJeVJhOTM3aVFzNXdJaXNTaVZ3Sis4bkRmVUEzbG9ZWVQ4TW95WmxFc291VzBWVVZ1WkxYU1EvcG1FTDAzaTBaUW0ybUZqRHY3a1cyeHM3bkszSnRBTjhGM3NLbExMekcxZkZDMUhVenZ1bDVjdmZOQ1dTN2c4dnB1ckZFdFFVb0tsK1VRdkx6bWlvNnIyeFI5R2xkQVYzL2tTOERMQ3NaMmd1eXNHbVRDVjdRREVKQnV2SnZhbThXTy9EKzExQjIvNGd2YnpLQUxHeCtSZEdoRndtaks1aWRtZWI1YVRIazZKY3VSSlk2TzR1L2xOR0YxOUhEcUl6NTBrRnVCYzNKZW9nZ0g5TjBUelQzSlVWUGlFWkNGTm9PNWVtT0lmbXh3STVoZXV1eHVTT3BEZFBEQzJCWUFuT1JFdEk4aElzdEc5ZGVrczNsc3BlczNmallobldzdUc3RGxyVVRTODlLcHRQSnM1Wk9mR1JpMmY1VU9wM2F2MnppZ3NWbXpGeHM0UDhleGY5KytZaG1XUnJacU0xUzByMkVGTUVIOGJaRUgvWFlzUzlBb1ZScS9tTS9nbCtXU24zM3E3WmxXMS9WUWhyK093VllNUXYvWFk3L0FWTCtFRHRtY3NudDZOZm9ZcHB2V1dUWWZjVHZobnJlbFB6LzY2VTZkWmNsSzNsVEJJcWdYd0dlVDRST1dkdy90R1BuMG1WOU8zcFhENVlzVFpUd0lncGtLZHh4UWFVMk5qMWVHVHB0NDRKVndhQVlBTmVOalczZFBISkt4SklNaUJkYnc0Z3M2Ri9VMmIxNGNYLy8rblhMeHkvc2RtU0Z4N3lrbElsc1dsQ3BuOEdaVFd3MWs5cmdGM0lyUGZUbnE3aGJ1WHU1eDdsbnVGZTROM0F2bnpoajVXSVA3cmNBV3UzeWxkYURjdXVCZE5LRCtZYjlBanZ5elhYTzMzaTdkTXo5Zit0cmo3MGZUTTlQa3VsSHpCayt6TzJGYkdldzNZZm03YnlUN25kOXNPRGcwRW1lTnQ2OEEvejJiOTZTYlY2bHV6SHZCaEtPZDNRT21IZ09rcnJsNVBnY21Obk1YQkZ3UVlNbFFLV25tOURHNHlkOVVRc0E4dlE3dWNuSGluNkt5dlFoUEo1Nk1SKzNuN3VTZUpwVC9SckJqNjh6NHBnbjBkejFES0w2ZkJLZWdhVnc3NnhEcklJUzlTOHY5NkZ5eVVNS0tQZkJRcjZKbXVrWkVtc3NucnlNYUJnWnZ0RHlRRmdHdnl0MlNieGpTVnJBNFBYMXF5UXpLZ2J0enE2SlBrdEJRVnZVOGVsQWVPbnVoWklaa1lJVzVqR1ViRkVOYWpJbWlxV1ZTd1pzS0VwTFl6a3pxcWt4SnhCSjJXZExmTmYyK3VXVHBjbkMwclZDZTByTGpmQXJlRVFlYTQwZlhoM1R2YWVpdGs4L0RINHVqNWVzRkE4azFWcDlzUTJDYlNsMHRkeS84cFJPTzRsUEt0YWk4L2FPYThET0pubjNYRlZzVjhLRU56cHQ5NzRoU1VkSnRmMlVOU25IRVRUK2pNT0o3OSsrK1QzZHNRanFsZkp0MFpLVzY0YndEUG84WTlXNVZ5MjFVZ2l6YzlZL0FiUHN5WWh2MGZnb215S1ZEV1ZndURVK3hsdlNNSi9XRW1HNkdOZ3NTM01GalZqcGlOYVRhOXpRM3RQZERoNnhUTk9xZ3dXV3Jscy90RFROd3IrM0RNTkNtaFpPMjQzMzUzdjdDL0E5YmYyTlhXYmNnZ2c4YTBVdC9PY3VGYXk0U2ZHTE9YUUlBVHdlaXBpYlhNL3Q0YzdtTHVGdTRtN0dYeGFpSzhNb0hDYTBNRThwWXlnRDZRbElEeDF5V0dOTEJ6N0ZxR2UwNVI1WUQzblpmR29NSThCQW50R0NwcnZ5TldMbCtYZlIvQlJoVUhLeTBmQkFUOTd5OXJMMHNKa3Vsb3NwMDB5Vnl1MXBTZGx1eEhMRnJDR3FTTlJqZVZxQzRtOEM0WFJiT2h5Z3U1RDJ6Nm9jU3VweHhWRVZ2SThGMWQzNS9ueSszMVprQ2NTSVpTbjJMcEl4U3RSNHhkL0REOGE2ODdJU3pIWDNzMzA0OXFkUTg3V0drWFlzOTgxZ0xxN3BXTVNRclBaOFREZEl5VDdiU2tVQ2VCamkxNVBtWHpmM1dqVUlnQnFNM1JQTDV3Znl3RkxDZHdTajBmWlk3SXpXOS9LQ1pESys3NC84N1NqbzhYMWtaU3BsSmRHaWJxR1E4SFMrNTVSRDFta0NsT3FYdmZQOHJ0Mk52cWxLWlFxK09qVU1HdThIVGpvVVNvV2ZTbmVuQWNDYjIwUDRPQjJDUDZwVVRtMzg3dFJoVU4wTU5mY1dramJ0ZGJKeGZ4OUpweU5nQ2RtNnZ6Y2R4M3lkYkxqL0Yxa255SXNBQUhpY1kyQmtZR0FBWXJ2N2RucngvRFpmR2JoWkdFRGdoc084alFqNmZ5L0xKT1lTSUplRGdRa2tDZ0FqUUFxckFIaWNZMkJrWUdCdStOL0FFTU9xeEFBRUxKTVlHQmxRQUtNNkFGVnhBMFlBZUp4allXQmdZQm5GbzNnVWorSkJoRm1WR0JnQXJsd0V3QUFBQUFBQUFBQUFmQUNxQU9BQlRBSEFBZm9DV2dLdUF1UURTQVAwQkRRRWhnVElCUjRGVmdXZ0JlZ0d5Z2I2Qno0SFpBZW1DQUlJVUFqY0NTd0pwQW5XQ2pRS3Bnc3lDM1FMekF4RURPSU5rQTRBRG00UEJnK2lEOFlRZkJGQ0VlUVNFaEtVRThZVUlCU1FGUkFWbGhZaUZtSVcrQmM0RjRnWDNCZ0tHRzRZbkJqNkdhWWFFaHF3RzFnYjFoeEVITElkQUIxMEhiSWVNaDc2SDRJZjdpQllJTEloY0NIMklsWWl2Q05VSS9Za2JDV1FKbHdtK2lkQUozWW4waWdBS0VBb2xpakVLVGdweENucUtxQXJQQ3YyTExJcy9DMDBMWUl0dkM0VUxuQXU0Qzg0TDZJdjlEQitNT1F4WERJc015NHpxalFZTkVvMDlqVTROaFkyY0RiUU56NDMrRGhnT0tBNUJEazhPY0E2VGpyT095ZzdyandPUElBOUFqMmtQZ2crZ0Q3WVB5WS9lRC82UUtCQmJrRzRRbHBDc0VNS1E0NUQ1RVE0Ukg1RTFrV01SajVHemtjMFI4Qklla2p5U1poSjdrb2VTbnhLeGtzOFM5Uk1GRXk0VE9wTlNFM2lUeUpQaUZBcVVKWlJEbEZnVWR4U1JGTGVVMGhUM2xSRVZPQlZWRlg4Vml4V1NsWjBWcXhYRkZmT1dCcFllRmpzV2JaYUJGcEdXcFJhM2xzY1cxcGJpRndVWEw1YzFsMHdYWXBkN0Y2WVh3WmZWRit1WURaZzRtSEdZakJqVUdSc1pNcGxabVh3Wm1SbkVtZHNaOVpvTUdoS2FHUm9uR2s4YVZocG1HbjhhbFpxem1zNmEvSnNhbXpXYlk1dUttNmFieUJ2em0vc2NCeHd2bkVNY1lCeUFuS2VjeGh6cG5RT2RHcDA1SFZtZGFCMThuWmFkeGg0SG5pVWVMaDQ1bm1lZWg1NmdIcW1ld3g4R254aWZKQjlEbjJJZmlKK1RIN1VmMEIvdW9CWWdQS0JRb0pxZ3l5RGNvUThoSXA0bkdOZ1pHQmdWR2U0eDhEUEFBSk1RTXdGaEF3TS84RjhCZ0FqaWdJc0FIaWNaWTlOVHNNd0VJVmYrZ2VrRXFxb1lJZmtCV0lCS1AwUnEyNVlWR3IzWFhUZnBrNmJLb2tqeDYzVUEzQWVqc0FKT0FMY2dEdndTQ2ViTnBiSDM3eDVZMDhBM09BSEhvN2ZMZmVSUFZ3eU8zSU5GN2dYcmxOL0VHNlFYNFNiYU9OVnVFWDlUZGpITTZiQ2JYUmhlWVBYdUdMMmhIZGhEeDE4Q05kd2pVL2hPdlV2NFFiNVc3aUpPL3dLdDlEeDZzSSs1bDVYdUkxSEwvYkhWaStjWHFubFFjV2h5U0tUT2IrQ21WN3Zrb1d0MHVxY2ExdkVKbE9Eb0Y5SlU1MXBXOTFUN05kRDV5SVZXWk9xQ2FzNlNZektyZG5xMEFVYjUvSlJyeGVKSG9RbTVWaGovcmJHQW81eEJZVWxEb3d4UWhoa2lNcm82RHRWWnZTdnNVUENYbnRXUGMzbmRGc1UxUDl6aFFFQzlNOWNVN3F5MG5rNlQ0RTlYeHRTZFhRcmJzdWVsRFNSWHMxSkVySkNYdGEyVkVMcUFUWmxWNDRSZWx6UmlUOG9aMGovQUFsYWJzZ0FBQUI0bkcxV0JaVHJ1QldkcXhpVHpNeUgzYi9NV05pMnUyVm1adVpPWlZ0SnRMRXRqeVFuTTF0bVptWm1abVptWm1abTVncnN5ZCtlemprVDNTZkowdE45OXoxcGphejV2K0hhLy8zRFdTQVlJRUNJQ0RFU3BCaGloREhXc1lGTjdNTitITUJCSElFamNRaEg0V2djZzJOeEhJN0hDVGdSSitGa25JSlRjUnBPeHhrNDA2eDFOaTZDaStKaXVEak93U1Z3U1Z3SzUrSThYQnFYd1dWeE9Wd2VWOEFWY1NWY0dWZkJWWEUxWEIzWHdEVnhMVndiMThGMWNUMWNIemZBRFhFajNCZzN3VTF4TTl3Y3Q4QXRjU3ZjR3JmQmJYRTczQjUzd0IxeEo5d1pkOEZkY1RkczRlNmd5SkNqQU1NRVU4ekFjVDdtS0ZHaGhrQ0RiVWdvYUxSWVlJa2Q3T0lDM0FQM3hMMXdiOXdIOThYOWNIODhBQS9FZy9CZ1BBUVB4Y1B3Y0R3Q2o4U2o4R2c4Qm8vRjQvQjRQQUZQeEpQd1pEd0ZUOFhUOEhROEE4L0VzL0JzUEFmUHhmUHdmTHdBTDhTTDhHSzhCQy9GeS9CeXZBS3Z4S3Z3YXJ3R3I4WHI4SHE4QVcvRW0vQm12QVZ2eGR2d2Ryd0Q3OFM3OEc2OEIrL0YrL0IrZkFBZnhJZndZWHdFSDhYSDhIRjhBcC9FcC9CcGZBYWZ4ZWZ3ZVh3Qlg4U1g4R1Y4QlYvRjEvQjFmQVBmeExmd2JYd0gzOFgzOEgzOEFEL0VqL0JqL0FRL3hjL3djL3dDdjhTdjhHdjhCci9GNy9CNy9BRi94Si93Wi93RmY4WGY4SGY4QS8vRXYvQnYvSWVzRVJCQ0JpUWdJWWxJVEJLU2tpRVprVEZaSnh0a2srd2orOGtCY3BBY1FZNGtoOGhSNUdoeUREbVdIRWVPSnllUUU4bEo1R1J5Q2ptVm5FWk9KMmVRTThsWjVPeTFJVzBheVhKT05RdnpHY3ZuWVY0S3hRSldjQjJ5U3B6UDB3bGRDRG5oWlJrNkZKZUNGcnllamt1UlU4MUZiWWVTM2dpYm1halpoaFJ0WGJqMTdPaHdaWFlqZG8vRFJxenBSeVNmenZScXhKbVJZbFRtczBEVEhaNW9Ycmt2QXd1aXRwNklza2lXVkRvM0FndUdPYTJZcE5hT1BCemxvcXBZN2RhTk81eVVmTzRYc21CZkxUU2Y4TldCeG9kM2hFSVdUQ2FLZGx0YkVCZXM1QXZUeXhhMGJBMTlnNGJ1Qm9yVlJhQm1vb2sweitkTUJ4bk41MGxPVlU0THBwS0NxMXlZajh5ZVNnZVZrQ3d3STNXaW1OYUdValhlYnBuYTQ3UTNFcnVnMjNnaVpEVm9lQjRaU3pPWlRvVFFqZVMxSG1qUkpFMWJsb1ZZMXBFRmJSTTY4bUxKSnBLcDJjanVSZzJqZ2hkRDR6dlQ3aXlSR1RZOEJ6bVZPdHFXdVNpWTZhcDRYVVIrVXR4SVlTYXlZQ1lxbHRocGpwNytKTTVSTytTNHJaaFNkTXBHdENqTW5pb1RZbTZPV3BzZmtjOU5zR3d6V1BBbVhES2VpWVRtbWkrNDNsMmZTRzZJTTEvWlZkSTlhK3pSaEZhaVZaRTN3cWtRaFVxVmNTNjM1TVJzcHluTjBZeWZ6TEN2TjlWMlM0MmllKzFGM2g0ZDFoMDZhWTNkYjdkbjBoc0Q4My9vUW1JUU11TnV6cWpicVl0RVdRUlRvNE5Vc3FLaE50YnJlejQ1TGhTdmVFbmx4aXJCM0ViY3JPaFdzR0JrVmplU2RjdkhIUjViTDZtYyt1bTlFUnZXRFBsRnVCQThaNm43ZFU3MUZKbk1ESmJHNjFDWitTeGF1bEd5WkdscFZVQmJMVVlPK2ZQNFhoZEpueUpTYUZzQ1hIZWNVU2VFelVsSjFjeDErUXhkMmFKaDlkQ25wWlZ5ckpoY0dJOENKYVFPbkFZcmtSblZESDNqRHB5TFpuYzlOenhyTzhGRmVzOGFXc3I5aVNJUFIyMmpOUFVzeEIxT01wcnR1clVzU0ROcDlPd0trME1iK2N5eVVodmh1UUt5TWtmR2ZUMWp5dWUveCtQY3BJT1JuNmU1TjZJSnEyakpram5iellTaE83QldYTE9sblRVd3JVc3ljeUNkV3VBeUxER2JPNmtGRmd3eVdxU2VVeU9sY0NMeVZnMjdJSms1NjN0RDdnc2pEcFUybFB2YUZEb1Vtd1Iza2VreWwwb3Bsb1lxbzcyUzFTcXBxUFRiV1REcVpOL2xjc05vR2RJeWE2dGh3MFRqbVk4OEhIVkI2cWRTTGdPYjJVT1BYVUEwRlR1Y2lxWTFBdUk3dkY2bldwdlZPMDJuZTVhcnFCMzdjWWZYYmR2V0pwKzcySFpXWUxndFRPVW9iVkxMUWQ3cXNLSlRubzl0YmV6Vm56UWw5YUZWUmx5eGliWmozTFRoMU9SbU02QW1vdmFEcmlyTmhEdnl3TFJCSTVRTlFzRkZKblpTbDhsT2dtMWpyNnAwS2JuUHZkQ2hjVC9UTTk3Vytjem16SnlaZXJ3d0NxWVROdTRMa3orSTdPUWFPcFM2QXVSeXJ5dDNEbmRsMHMxVDFvV1Jha1N0L00wWmQ5Z0lPYk0xTUY0eTE2WkwxdFlldWJ2V3p0M3d5S2FhVTRGRFdldkowV3hIRDcwRE51UFRxbFZlTEpzZTdSVXJXOUNMZlZweVdrOUwxaWZjUnQvUnV2dmtnT1BLcXRsYTU5Z0VOWVd0MXFIbTJ1a2lGejQ2a1lmcmRsR1hGNTZZM2tyc3ZkVGxPSzgzVjdPY084T2N5N3hUb29lYksxVzVHUWYveDNhK3JmcjY5OGZHaGJzaTU2VktlZDY5U0lKSjY3S0NsNTM0YldrYU83YTZERTU2STYxWVFVc1hMSWNTMCtkamFrRW5ycmpEZ1czVEJTK1lxOXloUXdIYjRUcFJjKzRmSGhhTUsvUDAyYzI4ZEVldGVlRVlmM3o5OGpqcEoyenNYUnBiTHNhcXpWUXVlZU51Kys0MDUwWlRybWR0RmsxTGtWRXpwM3NqdUE5c0ptejF0N201bCt4dGEzSnd2WCtNdUdXSExuTWMzRy9UYTZ1N1lmeWUzZnZGR1FkOHpkM3k5Ry8xYjQxNVlFclIzRnpXOVFVOFptWEpHOFhpYmJsbEw0ZTRNRXFhdFRUZytjcm44d2FacnRmVy9ndGhubUpUQUFBQScpIGZvcm1hdCgnd29mZicpLFxcblxcdFxcdHVybCgnLy9hdC5hbGljZG4uY29tL3QvZm9udF81MzM1NjZfeWZxMmQ5d2Rpai50dGY/dD0xNTQ1MjM5OTg1ODMxJykgZm9ybWF0KCd0cnVldHlwZScpLFxcblxcdFxcdFxcblxcdFxcdHVybCgnLy9hdC5hbGljZG4uY29tL3QvZm9udF81MzM1NjZfeWZxMmQ5d2Rpai5zdmc/dD0xNTQ1MjM5OTg1ODMxI2N1SWNvbmZvbnQnKSBmb3JtYXQoJ3N2ZycpXCJcbiAgICB9XG4gIF0sXG4gIFwiY3VJY29uLWFwcHJlY2lhdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2hlY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2xvc2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZWRpdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1lbW9qaVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0YVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mYXZvcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbG9hZGluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0ZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1sb2NhdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbG9jYXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGhvbmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRjaGVja2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRjaGVja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1N1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZGNsb3NlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1OFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZGNsb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kcmlnaHRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kcmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2VhcmNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRheGlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGltZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGltZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1ZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi11bmZvbGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2FybmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2FyblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2M1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYW1lcmFmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhbWVyYVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2NVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb21tZW50ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2NlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb21tZW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxpa2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxpa2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbm90aWZpY2F0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2YVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ub3RpZmljYXRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tb3JkZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2FtZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2FtZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2ZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1kZWxpdmVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjcxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWV2YWx1YXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjcyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBheVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3M1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNob3BcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGlja2V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJhY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FzY2FkZXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2NcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZGlzY292ZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2N2VcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbGlzdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4MlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjg0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNjYW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ODlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2V0dGluZ3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OGFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcXVlc3Rpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjkwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXF1ZXN0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjkxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNob3BmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjk3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvcm1cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGljXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjliXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZpbHRlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb290cHJpbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjllXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXB1bGxkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjlmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXB1bGx1cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWZyZXNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1vcmVhbmRyb2lkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWRlbGV0ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVmdW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmFjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhcnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YWZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcXJjb2RlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmIwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlbWluZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1kZWxldGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHJvZmlsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ob21lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhcnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWRpc2NvdmVyZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ob21lZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tZXNzYWdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWFkZHJlc3Nib29rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxpbmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi11bmxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdmlwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmMzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdlaWJvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWFjdGl2aXR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZyaWVuZGFkZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZnJpZW5kYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZyaWVuZGZhbW91c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mcmllbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2NcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ29vZHNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2RcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2VsZWN0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWV4cGxvcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHJlc2VudFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zcXVhcmVjaGVja2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc3F1YXJlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNxdWFyZWNoZWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kYWRkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkOFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZGFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbm90aWZpY2F0aW9uZm9yYmlkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1leHBsb3JlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb2xkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdhbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVkcGFja2V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNlbGVjdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2ltaWxhclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hcHByZWNpYXRlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1pbmZvZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1pbmZvXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvcndhcmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvcndhcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVjaGFyZ2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlY2hhcmdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXZpcGNhcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdm9pY2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZWZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdm9pY2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmYwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZyaWVuZGZhdm9yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmYxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdpZmlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2hhcmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxpZ2h0YXV0b1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1saWdodGZvcmJpZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1saWdodGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FtZXJhcm90YXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJhcmNvZGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZmxhc2hsaWdodGNsb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZsYXNobGlnaHRvcGVuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNlYXJjaGxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2VydmljZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zb3J0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzAwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbW9iaWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1vYmlsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb3VudGRvd25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvdW50ZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwOFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ub3RpY2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5vdGljZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi11cHN0YWdlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi11cHN0YWdlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzBmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJhYnlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzEwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJhYnlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYnJhbmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzEyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJyYW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzEzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNob2ljZW5lc3NmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNob2ljZW5lc3NcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2xvdGhlc2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2xvdGhlc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jcmVhdGl2ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MThcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY3JlYXRpdmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZmVtYWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWtleWJvYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1hbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbmV3ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1uZXdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHVsbGxlZnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHVsbHJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJhbmtmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJhbmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYmFkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhbWVyYWFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb2N1c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mcmllbmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhbWVyYWFkZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYXBwc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wYWludGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGFpbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGljZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWZyZXNoYXJyb3dcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29sb3JsZW5zXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmU2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1hcmtmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzMwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1hcmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHJlc2VudGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVwZWFsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzMzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWFsYnVtXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBlb3BsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGVvcGxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNlcnZpY2VmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlcGFpclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczOFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1maWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlcGFpcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2FcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGFveGlhb3B1XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdlaXhpblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYxMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hdHRlbnRpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWF0dGVudGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb21tYW5kZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb21tYW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvbW11bml0eWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29tbXVuaXR5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NDJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FsZW5kYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY3V0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1hZ2ljXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJhY2t3YXJkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0ZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wbGF5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0ZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zdG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRhZ2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGFnXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdyb3VwXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWFsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1NVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1iYWNrZGVsZXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWhvdGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24taG90XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBvc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmFkaW9ib3hcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRkb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzVjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXVwbG9hZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1ZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13cml0ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td3JpdGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmFkaW9ib3hmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXB1bmNoXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNoYWtlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1vdmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2FmZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hY3Rpdml0eWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY3Jvd25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNyb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdvb2RzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3OFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tZXNzYWdlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wcm9maWxlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3YVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zb3VuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zcG9uc29yZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zcG9uc29yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXVwYmxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2VcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2VibG9ja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3ZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13ZXVuYmxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ODBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbXlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbXlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWVtb2ppZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4ZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1lbW9qaWZsYXNoZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4ZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mbGFzaGJ1eWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGV4dFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5MVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1nb29kc2Zhdm9yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW11c2ljZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5NVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tdXNpY2ZvcmJpZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYyNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10cmlhbmdsZWRvd25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzliXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRyaWFuZ2xldXBmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzljXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kbGVmdGZpbGwtY29weVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5ZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb250XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzZhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRpdGxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlODJmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlY29yZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVjb3JkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhcmRib2FyZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YTlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FyZGJvYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvcm1maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvaW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YWNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FyZGJvYXJkZm9yYmlkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNpcmNsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2lyY2xlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2IxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWF0dGVudGlvbmZvcmJpZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hdHRlbnRpb25mb3JiaWRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2IzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWF0dGVudGlvbmZhdm9yZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hdHRlbnRpb25mYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10aXRsZXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24taWNsb2FkaW5nXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjdhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZ1bGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWFpbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wZW9wbGVsaXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdvb2RzbmV3ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1nb29kc25ld1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tZWRhbGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWVkYWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbmV3c2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbmV3c2hvdGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbmV3c2hvdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1uZXdzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXZpZGVvZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi12aWRlb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjOFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1leGl0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNraW5maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNraW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3Y2RcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbW9uZXliYWdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXVzZWZ1bGxmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXVzZWZ1bGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbW9uZXliYWdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVkcGFja2V0X2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZDNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc3Vic2NyaXB0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Q0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxvYWRpbmcxXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjMzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdpdGh1YlwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5MlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1nbG9iYWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2V0dGluZ3NmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmFiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJhY2tfYW5kcm9pZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1leHByZXNzbWFuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2VmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWV2YWx1YXRlX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ3JvdXBfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wbGF5X2ZvcndhcmRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1kZWxpdmVyX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbm90aWNlX2ZvcmJpZF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZvcmtcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MGNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGlja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13ZW56aVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1lbGxpcHNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXFyX2NvZGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MWJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZGlhbmh1YVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY0ZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jdUljb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MDJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbG9hZGluZzJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYnRuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAxXFxcIlwiXG4gIH0sXG4gIFwibmF2LWxpc3RcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwdXB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHVweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJuYXYtbGlcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwdXB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwdXB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwdXB4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMnVweFwiLFxuICAgIFwid2lkdGhcIjogNDUsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDIuNSxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwdXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDIuNSxcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcInVybChodHRwczovL2Nkbi5ubGFyay5jb20veXVxdWUvMC8yMDE5L3BuZy8yODAzNzQvMTU1Mjk5NjM1ODM1Mi1hc3NldHMvd2ViLXVwbG9hZC9jYzNiMTgwNy1jNjg0LTRiODMtOGY4MC04MGU1YjhhNmI5NzUucG5nKVwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJjb3ZlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ6SW5kZXhcIjogMSxcbiAgICBcImNvbnRlbnQ6OmFmdGVyXCI6IFwiXFxcIlxcXCJcIixcbiAgICBcInBvc2l0aW9uOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ6SW5kZXg6OmFmdGVyXCI6IC0xLFxuICAgIFwid2lkdGg6OmFmdGVyXCI6IDEwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXJcIjogMTAwLFxuICAgIFwibGVmdDo6YWZ0ZXJcIjogMCxcbiAgICBcImJvdHRvbTo6YWZ0ZXJcIjogLTEwLFxuICAgIFwiYm9yZGVyUmFkaXVzOjphZnRlclwiOiBcIjEwdXB4XCIsXG4gICAgXCJvcGFjaXR5OjphZnRlclwiOiAwLjIsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyXCI6IFwic2NhbGUoMC45LCAwLjkpXCJcbiAgfSxcbiAgXCJuYXYtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMnVweFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIjMwMFwiLFxuICAgIFwiZm9udFNpemU6OmZpcnN0LWxldHRlclwiOiBcIjQwdXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodDo6Zmlyc3QtbGV0dGVyXCI6IFwiNHVweFwiXG4gIH0sXG4gIFwibmF2LW5hbWVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHVweFwiLFxuICAgIFwidGV4dFRyYW5zZm9ybVwiOiBcIkNhcGl0YWxpemVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwdXB4XCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjpiZWZvcmVcIjogXCJcXFwiXFxcIlwiLFxuICAgIFwicG9zaXRpb246OmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJkaXNwbGF5OjpiZWZvcmVcIjogXCJibG9ja1wiLFxuICAgIFwid2lkdGg6OmJlZm9yZVwiOiBcIjQwdXB4XCIsXG4gICAgXCJoZWlnaHQ6OmJlZm9yZVwiOiBcIjZ1cHhcIixcbiAgICBcImJhY2tncm91bmQ6OmJlZm9yZVwiOiBcIiNmZmZcIixcbiAgICBcImJvdHRvbTo6YmVmb3JlXCI6IDAsXG4gICAgXCJyaWdodDo6YmVmb3JlXCI6IDAsXG4gICAgXCJvcGFjaXR5OjpiZWZvcmVcIjogMC41LFxuICAgIFwiY29udGVudDo6YWZ0ZXJcIjogXCJcXFwiXFxcIlwiLFxuICAgIFwicG9zaXRpb246OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImRpc3BsYXk6OmFmdGVyXCI6IFwiYmxvY2tcIixcbiAgICBcIndpZHRoOjphZnRlclwiOiBcIjEwMHVweFwiLFxuICAgIFwiaGVpZ2h0OjphZnRlclwiOiBcIjFcIixcbiAgICBcImJhY2tncm91bmQ6OmFmdGVyXCI6IFwiI2ZmZlwiLFxuICAgIFwiYm90dG9tOjphZnRlclwiOiAwLFxuICAgIFwicmlnaHQ6OmFmdGVyXCI6IFwiNDB1cHhcIixcbiAgICBcIm9wYWNpdHk6OmFmdGVyXCI6IDAuMyxcbiAgICBcImZvbnRXZWlnaHQ6OmZpcnN0LWxldHRlclwiOiBcImJvbGRcIixcbiAgICBcImZvbnRTaXplOjpmaXJzdC1sZXR0ZXJcIjogXCIzNnVweFwiLFxuICAgIFwibWFyZ2luUmlnaHQ6OmZpcnN0LWxldHRlclwiOiBcIjFcIlxuICB9LFxuICBcInRleHQtbGlnaHRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjMwMFwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuLzEyMy5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZjMTMwNjNhJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi8xMjMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi8xMjMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vdW5pYXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJlNWE2MjVjNFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwcm9ncmFtL21pbmkvMTMyMTIzMTIzMS9wYWdlcy8xMjMvMTIzLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi91bmlhcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vdW5pYXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi8xMjMubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYzEzMDYzYSZtcFR5cGU9cGFnZVwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbX2MoXCJ2aWV3XCIsIFtfYyhcInUtdGV4dFwiLCBbX3ZtLl92KFwiXFxuXFx0MTIzMTIzMTIzXFxuXCIpXSldKV1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vdW5pYXBwL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi8xMjMubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL3VuaWFwcC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi91bmlhcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi91bmlhcHAvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vMTIzLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiIsIjx0ZW1wbGF0ZT5cblx0PHZpZXc+XG5cdFx0MTIzMTIzMTIzXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==