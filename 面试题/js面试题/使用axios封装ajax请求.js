import axios from "axios";
import ajax from "../../校园外卖/gshop/src/api/ajax";
// 向外暴露一个ajax
export default ajax(function (url = "", data = {}, type = "GET") {
  return new Promise(function (resolve, reject) {
    // 声明一个promise对象
    let promise;
    if (type == "GET") {
      let dataStr;
      if (dataStr == "") {
        Object.keys(data).forEach((key) => {
          dataStr += key + "=" + data[key] + "&";
        });
      }
      if (dataStr !== "") {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf("&"));
        url = url + dataStr;
      }
      // 然后发送ajax请求
      promise = axios.get(url);
    } else {
      promise = axios.post(url, data);
    }
    
    promise.then(function(response){
        resolve(response.data)
    }).catch(function(err){
        reject(err)
    })
  });
});
