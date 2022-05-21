// var mySwiper = new Swiper('.swiper', {
//     direction: 'horizontal', 
//     loop: true, 

//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     autoplay: {
//         delay: 1000,
//         stopOnLastSlide: false,
//         disableOnInteraction: false,
//     },

// })

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
            } else {
                console.log('请求失败');
            }
        }
    }
}
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

// 导购精选

function fn(date_) {
    console.log(date_);
    var str = '';
    // ${date_[i].img}
    for (var i = 13; i < 17; i++) {
        console.log(date_[i]);
        str += `<li>
        <a href="guid/detail.html">
            <img src="${date_[i].img}" width="220" height="130" />
            <div class="info">
                <p class="name">${date_[i].text}</p>
                <div class="tip fix">
                    <div class="right icon">
                        <span class="xin">3</span>
                        <span class="look">3</span>
                    </div>
                </div>
            </div>
        </a>
    </li>`;
        var ul_ = document.getElementsByClassName('daogou')[0];
        ul_.innerHTML = str;
    }

}


