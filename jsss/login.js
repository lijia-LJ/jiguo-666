function login() {
    var name = document.getElementsByTagName('input')[0].value;
    var password = document.getElementsByTagName('input')[1].value;
    // console.log(name, password);
    if (name.length >= 2 && password.length >= 6) {
        localStorage.setItem('user', name);
        localStorage.setItem('pass', password);
        localStorage.setItem('islogin', true);
        window.location.href = 'file:///G:/%E5%89%8D%E7%AB%AFGit/%E6%9E%81%E6%9E%9C%E9%A1%B9%E7%9B%AE/jiguo-666/index.html'


    }
}

