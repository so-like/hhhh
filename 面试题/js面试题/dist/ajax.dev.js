"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _ajax = _interopRequireDefault(require("../../\u6821\u56ED\u5916\u5356/gshop/src/api/ajax"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 用axios封装ajax
var _default = (0, _ajax["default"])(function () {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
  return new Promise(function (resolve, reject) {
    // 定义一个promise对象用来发送ajax
    var promise; // 判断如果请求类型是get就要拼接字符串

    if (type == "GET") {
      // 定义一个dataStr为空
      var dataStr = ""; // 枚举属性将data中的数据遍历并将其拼接在字符串上

      Object.keys(data).forEach(function (key) {
        dataStr += "key" + "=" + data[key] + "&";
      }); // 如果字符串不等于空

      if (dataStr !== "") {
        // 对data从0开始遍历直到遇见最后一个&为止
        dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      } // 发送get请求


      promise = _axios["default"].get(url);
    } else {
      // 发送post请求
      promise = _axios["default"].post(url, data);
    }

    promise.then(function (response) {
      // 成功调用resolve方法
      resolve(response.data);
    })["catch"](function (err) {
      // 失败调用reject方法
      reject(err);
    });
  });
});

exports["default"] = _default;