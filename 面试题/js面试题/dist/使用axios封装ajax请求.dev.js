"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _ajax = _interopRequireDefault(require("../../\u6821\u56ED\u5916\u5356/gshop/src/api/ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 向外暴露一个ajax
var _default = (0, _ajax["default"])(function () {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
  return new Promise(function (resolve, reject) {
    // 声明一个promise对象
    var promise;

    if (type == "GET") {
      var dataStr;

      if (dataStr == "") {
        Object.keys(data).forEach(function (key) {
          dataStr += key + "=" + data[key] + "&";
        });
      }

      if (dataStr !== "") {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
        url = url + dataStr;
      } // 然后发送ajax请求


      promise = _axios["default"].get(url);
    } else {
      promise = _axios["default"].post(url, data);
    }

    promise.then(function (response) {
      resolve(response.data);
    })["catch"](function (err) {
      reject(err);
    });
  });
});

exports["default"] = _default;