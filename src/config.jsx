// 下载地址
/*IOS*/export const  IOS_DOWNLOAD = 'itms-services://?action=download-manifest&url=https://www.coinmix.im/app/coinMIX.plist'
/*Android*/export const ANDROID_DOWNLOAD = 'http://13.230.106.93/coinMIX_1.0.0.apk'

export const isPC = function(){
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

