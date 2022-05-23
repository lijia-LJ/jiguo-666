//创建cookies--setCookie(键 ,值 ,时间 )
function setCookie(key, value, time) {
    //存值
    var date = new Date();
    date.setDate(date.getDate() + time);
    document.cookie = `${key}=${value};expires=${date}`;
}
//获取cookie--getCookie(键key)
function getCookie(key) {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        if (newArry[0] == key) {
            return newArry[1];
        }
    }
}
//删除Cookie--removeCookie(键key)
function removeCookie(key) {
    // 调用当前的设置cookie
    this.setCookie(key, '', -1);
}
// 清空cookie
function clearCookie() {
    var arry = document.cookie.split('; ');
    for (var item of arry) {
        var newArry = item.split('=');
        console.log(newArry);
        this.setCookie(newArry[0], '', -1);
    }
}