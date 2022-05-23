//报告
function showData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/report/new');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                // 接收响应数据  转为 对象
                var data = JSON.parse(ajax_.responseText);
                // console.log(data);
                render(data);
                // fn(data);

            } else {
                console.log('请求失败');
            }
        }
    }
}
showData();
//报告最热
function render(data_) {
    // console.log(data_);${data_[i].img}
    var str = '';
    for (var i = 3; i < 7; i++) {
        // console.log(data_[i]);
        str += `<li>
        <a href="../guid/detail.html">
            <img src="${data_[i].img}" width="700" height="412" />
            <div class="info">
                <p class="title">空气净化器里面学问多得惊呆你，你选对了吗？</p>
                <div class="btm fix">
                    <div class="userInfo left">
                        <span class="avt"></span>
                        <span class="name">${data_[i].uName}</span>
                        <span class="time">${data_[i].endTime}</span>
                    </div>
                    <div class="right icon">
                        <span class="zan">3</span>
                        <span class="look">3</span>
                    </div>
                </div>
            </div>
        </a>
    </li>`;

        var ul_ = document.getElementById('myDiv');
        ul_.innerHTML = str;
    }
}
