// 用axios封装ajax
import axios from "axios";
import ajax from "../../校园外卖/gshop/src/api/ajax";
export default ajax(function (url = "", data = {}, type = "GET") {
  return new Promise(function (resolve, reject) {
    // 定义一个promise对象用来发送ajax
    let promise;
    // 判断如果请求类型是get就要拼接字符串
    if (type == "GET") {
      // 定义一个dataStr为空
      let dataStr = "";
      // 枚举属性将data中的数据遍历并将其拼接在字符串上
      Object.keys(data).forEach((key) => {
        dataStr += "key" + "=" + data[key] + "&";
      });
      // 如果字符串不等于空
      if (dataStr !== "") {
        // 对data从0开始遍历直到遇见最后一个&为止
        dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
        url = url + "?" + dataStr;
      }
      // 发送get请求
      promise = axios.get(url);
    } else {
      // 发送post请求
      promise = axios.post(url, data);
    }
    promise.then(response =>{
        // 成功调用resolve方法
        resolve(response.data)
    }).catch(err =>{
        // 失败调用reject方法
        reject(err)
    })
  });
});
