import axios from 'axios';
import Utils from "@/js/utils.js"

export default {
  async loadLocalJson (file_path) {
    file_path = file_path + '?time=' + new Date().getTime();
    var rs = await axios.get(file_path,{       // 还可以直接把参数拼接在url后边
      params:{}
    });
    rs.data.data = Utils.decrypt(rs.data.data);
    // rs.data.data = eval(rs.data.data);

    return rs.data;
  },

  getUrlKey:function(name){
    return decodeURIComponent((new RegExp('[?|&]'+name+'='+'([^&;]+?)(&|#|;|$)').exec(location.href)||[,""])[1].replace(/\+/g,'%20'))||null;
  }
}
