function login() {
    var name = document.getElementsByTagName('input')[0].value;
    var password = document.getElementsByTagName('input')[1].value;
    // console.log(name, password);
    if (name.length >= 2 && password.length >= 6) {
        localStorage.setItem('user', name);
        localStorage.setItem('pass', password);
        localStorage.setItem('islogin', true);
<<<<<<< HEAD
        window.location.href = 'http://127.0.0.1:5500/index.html'

=======
        // window.location.href = 'https://lijia-lj.github.io/jiguo-666/'
        
>>>>>>> d07b43a0a9e87902b0a7983c8a345bc5196edee7

    }
}

