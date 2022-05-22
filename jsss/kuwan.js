// 发现精选

function showData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/play/new');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                // 接收响应数据  转为 对象
                var data = JSON.parse(ajax_.responseText);
                console.log(data);
                // render(data);
                // fn(data);
                gn(data);
            } else {
                console.log('请求失败');
            }
        }
    }
}
showData();

function gn(date_) {
    // console.log(date_);
    var str = '';
    // ${date_[i].img}
    for (var i = 13; i < 29; i++) {
        // console.log(date_[i]);
        str += `<li>
        <a href="use/detail.html">
            <img src="${date_[i].img}" width="220" height="130" />
            <div class="info">
                <p class="name">${date_[i].text}<span>可以测定食物成分及营养</span></p>
                <div class="tip fix">
                    <span class="price left">￥ ${date_[i].price}</span>
                    <div class="right icon">
                        <span class="xin">${date_[i].like}</span>
                        <span class="look">${date_[i].word}</span>
                    </div>
                </div>
            </div>
        </a>
    </li>`;
        var ul_ = document.getElementById('myDiv');
        ul_.innerHTML = str;
    }

}