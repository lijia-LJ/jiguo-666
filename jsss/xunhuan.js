//轮播图
// function showData() {
//     var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
//     ajax_.open('get', 'http://127.0.0.1:3000/useing/public');
//     ajax_.send();
//     ajax_.onreadystatechange = function () {
//         if (ajax_.readyState == 4) {
//             if (ajax_.status == 200) {
//                 // 接收响应数据  转为 对象
//                 var data = JSON.parse(ajax_.responseText);
//                 console.log(data);
//                 render(data);
//                 // fn(data);
//                 // gn(data)
//             } else {
//                 console.log('请求失败');
//             }
//         }
//     }
// }
// showData();
// function render(data_) {
//     // console.log(data_);${data_[i].img}
//     var str = '';
//     for (var i = 0; i < 4; i++) {
//         // console.log(data_[i]);

//         str += `<dt>
//     <a href="use/detail.html">
//         <span class="top-tip shoufa">${data_[i].info_ty}</span>
//         <img src="${data_[i].img}" width="220" height="130" />
//         <div class="hot-con">
//             <h2 class="name">${data_[i].text}</h2>
//             <p class="tabs red">
//                 <span>${data_[i].totalnum}</span>
//                 <span>${data_[i].num}台</span>
//             </p>
//             <p class="sq"><span>1392</span>申请</p>
//             <p class="current red">剩余时间2天</p>
//         </div>
//     </a>
// </dt>`;
//         var dl = document.getElementsByClassName('on')[0];
//         dl.innerHTML = str;
//     }

// }
