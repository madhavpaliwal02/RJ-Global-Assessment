// console.log('Hello ! World')
// forms
const login = document.querySelector('#log-in')
const signup = document.querySelector('#sign-up')

signup.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('txt')
    var email1 = document.getElementById('email1')
    var pswd1 = document.getElementById('pswd1')

    // console.log(name.value, email1.value, pswd1.value);



    if (email1.value === localStorage.getItem('Email') ||
        (email1.value === localStorage.getItem('Email') &&
            pswd1 === localStorage.getItem('Password'))) {
        window.location.href = '#sign-up'
        login.reset()
        alert('User already exists !!!')
    } else {
        localStorage.setItem('Uname', name.value)
        localStorage.setItem('Email', email1.value)
        localStorage.setItem('Password', pswd1.value)
        window.location.href = '#log-in'
    }



})

login.addEventListener('submit', function(e) {
    e.preventDefault();

    var email2 = document.getElementById('email2')
    var pswd2 = document.getElementById('pswd2')

    var emls = localStorage.getItem('Email')
    var psls = localStorage.getItem('Password')

    if (email2.value === emls && pswd2.value === psls) {
        // Home page
        document.querySelector('#home').style.display = "none";
        document.querySelector('#myforms').style.display = "none";
        document.querySelector('#about').style.display = "block";

        // Navigation bar
        document.querySelector('#navi').style.position = "sticky";
        var right = document.querySelector('#right-sub-container');
        right.querySelector('#log').innerHTML = 'Logout';
        log.addEventListener('click', () => {
            window.location.href = 'index.html';
        })

    } else {
        alert('Invalid username or password...');
        email2.innerHTML = "";
        pswd2.innerHTML = "";
    }
})