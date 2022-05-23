
function showData() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    ajax_.open('get', 'http://127.0.0.1:3000/useing/master');
    ajax_.send();
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                // 接收响应数据  转为 对象
                var data = JSON.parse(ajax_.responseText);
                // console.log(data);
                render(data);
                fn(data);
                gn(data);
            } else {
                console.log('请求失败');
            }
        }
    }
}
//报告精选渲染
showData();
function render(data_) {
    // console.log(data_);
    var str = '';
    for (var i = 3; i < 11; i++) {
        // console.log(data_[i]);
        str += `<li>
        <a href="guid/detail.html">
            <img src="${data_[i].img}" width="220" height="130"/>
            <div class="info">
                <p class="name">${data_[i].text}</p>
                <div class="tip fix">
                    <span class="nick left">● ${data_[i].uName}</span>
                    <div class="right icon">
                        <span class="zan">3</span>
                        <span class="look">3</span>
                    </div>
                </div>
            </div>
        </a>
    </li>`;
        var ul = document.getElementsByClassName('baogao')[0];
        ul.innerHTML = str;
    }

}

// 导购精选渲染

function fn(date_) {
    console.log(date_);
    var str = '';
    // ${date_[i].img}
    for (var i = 13; i < 17; i++) {
        console.log(date_[i]);
        str += `<li>
        <a href="guid/detail.html">
            <img src="${date_[i].img}" width="220" height="130" /></a>
            <div class="info">
                <p class="name">${date_[i].text}</p>
                <div class="tip fix">
                    <div class="right icon">
                        <span class="xin">3</span>
                        <span class="look">3</span>
                    </div>
                </div>
            </div>
        
    </li>`;
        var ul_ = document.getElementsByClassName('daogou')[0];
        ul_.innerHTML = str;
    }

}
//发现酷玩渲染
function gn(ku) {
    // console.log(date_);
    var str = '';
    // ${date_[i].img}
    for (var i = 0; i < 16; i++) {
        // console.log(date_[i]);
        str += `<li>
        <a href="use/detail.html">
            <img src="${ku[i].img}" width="220" height="130" /></a>
            <div class="info">
                <p class="name">${ku[i].text}<span>可以测定食物成分及营养</span></p>
                <div class="tip fix">
                    <span class="price left">￥ ${ku[i].apply}</span>
                    <div class="right icon">
                        <span class="xin">3</span>
                        <span class="look">3</span>
                    </div>
                </div>
            </div>
        
    </li>`;
        var ul_ = document.getElementById('myDiv');
        ul_.innerHTML = str;
    }

}
//心变红
var xin = document.getElementsByClassName('xin');
xin.onclick = function () {
    this.style.backgrund = 'url(img/xinRedh.png) no-repeat left center'
};
//轮播
// var slide = document.getElementsByClassName('slideshow')[0];
// var num = 0;
// function ln() {
//     var timer = setInterval(function () {
//         num += -10;
//         slide.firstElementChild.style.marginLeft = num + 'px';
//         if (num == -1000) {
//             slide.firstElementChild.style.marginLeft = 0 + 'px';
//             slide.appendChild(slide.firstElementChild);
//             num = 0;
//             clearInterval(timer);
//             setInterval(function () {
//                 ln();

//             }, 1000)
//         }
//     }, 25)
// }
// ln();
//回显首页注册
window.onload = function () {
    // var p = document.getElementsByClassName('zc')[0];
    var a = document.getElementsByClassName('login right')[0];
    var name = localStorage.getItem('user');
    var islogin = localStorage.getItem('islogin');
    if (islogin) {
        var str = `hi~&nbsp;${name}`;
        a.innerHTML = str;
        a.style.width='100px';
        a.style.border='none';
    }
}


