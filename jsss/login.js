function login() {
    var name = document.getElementsByTagName('input')[0].value;
    var password = document.getElementsByTagName('input')[1].value;
    // console.log(name, password);
    if (name.length >= 2 && password.length >= 6) {
        localStorage.setItem('user', name);
        localStorage.setItem('pass', password);
        localStorage.setItem('islogin', true);
        window.location.href = 'http://127.0.0.1:5500/jiguo-666/index.html'
        

    }
}

