// forms
const login = document.querySelector('#log-in')
const signup = document.querySelector('#sign-up')
const addpost = document.querySelector('#add-post-form')


// signup function
signup.addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('txt')
    var email1 = document.getElementById('email1')
    var pswd1 = document.getElementById('pswd1')

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

// login function
login.addEventListener('submit', function(e) {
    e.preventDefault();

    var email2 = document.getElementById('email2')
    var pswd2 = document.getElementById('pswd2')

    var emls = localStorage.getItem('Email')
    var psls = localStorage.getItem('Password')

    if (email2.value === emls && pswd2.value === psls) {
        // Home page - modification
        document.querySelector('#home').style.display = "none";
        document.querySelector('#myforms').style.display = "none";
        document.querySelector('#about').style.display = "block";

        // Navigation bar - modification
        document.querySelector('#navi').style.position = "sticky";
        var right = document.querySelector('#right-sub-container');
        right.querySelector('#log').innerHTML = 'Logout';
        log.addEventListener('click', () => {
            window.location.href = 'index.html';
        })

        // Fetching post from local storage
        const row = document.querySelector('#about')
        let img = row.getElementById('post-img')
        img.src = localStorage.getItem('Pic')
            // row.getElementById('post-tit').innerHTML = localStorage.getItem('Title')
            // row.getElementById('post-txt').innerHTML = localStorage.getItem('Text')
        document.getElementById('post-tit').innerHTML = ""
        document.getElementById('post-txt').innerHTML = ""

    } else {
        alert('Invalid username or password...');
        email2.innerHTML = "";
        pswd2.innerHTML = "";
    }
})

// add post fucntion
addpost.addEventListener('submit', function(e) {
    e.preventDefault();

    var pic = document.getElementById('post-pic').value
    var title = document.getElementById('post-title').value
    var text = document.getElementById('post-text').value

    if (pic === "" && title === "" && text === "") {
        addpost.reset()
        alert('Please fill all the fields')
    } else {
        localStorage.setItem('Pic', pic)
        localStorage.setItem('Title', title)
        localStorage.setItem('Text', text)
        addpost.reset()
    }
})