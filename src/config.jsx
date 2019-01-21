import axios from 'axios'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'https://www.coinmix.im/wallet/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.contentType = 'application/json';
axios.defaults.dataType = 'json';
// 下载地址
/*IOS*/export const  IOS_DOWNLOAD = 'itms-services://?action=download-manifest&url=https://www.coinmix.im/app/coinMIX.plist'
/*Android*/export const ANDROID_DOWNLOAD = 'http://13.230.106.93/coinMIX_1.0.0.apk'
/*建议反馈请求接口*/export const INTERFCE = 'my/add_pc_feedback'




// 判断用户端
export const isPC =()=>{
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
}
// 请求API地址

