const masuk = document.getElementById("login");
const daftar = document.getElementById("register");
const tombol = document.getElementById("btn")

// swipe
// function register(){
//     alert("Sorry, our website is in error! you can login with guest account.");
//     alert(`username : guest@guest, password : guest`)
// }

const loginForm = document.getElementById("loginForm")
const regisForm = document.getElementById("regisForm")

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
// regisForm.style.display = "none"
function mode(str){

    if(str === 'login'){
        loginForm.style.display = "block"
        regisForm.style.display = "none"
        button1.style['background-image'] = "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
        button2.style['background-image'] = "none"
    }else if (str === 'register') {
        regisForm.style.display = "block"
        loginForm.style.display = "none"

        button1.style['background-image'] = "none"
        button2.style['background-image'] = "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"
        button2.style.width = '110px'
        button2.style.height = '100%'
        // button2.style.position = 'absolute'
    }
}


// function register(){
//     masuk.style.left = "40px"
//     daftar.style.left = "-400px"
//     tombol.style.left = "110px"
// }

// function login(){
//     masuk.style.left = "50px"
//     daftar.style.left = "450px"
//     tombol.style.left = "0"
// }

// data

let count = 0;

function guest () {
    let dataInput = add()
    let user = {
        email: 'guest@guest',
        password: "guest"
    }
    

    localStorage.setItem(`password`, user.password)
    localStorage.setItem(`username`, user.email)
    

    if (dataInput[0] === user.email && dataInput[1] === user.password){
        window.location.href = "welcome.html"
    }else{
        count++
        if (count < 2){
        alert(`Please sign up first!`)   
        }else if (count === 2){
            alert("Click 'Sign In' and you'll login as guest")
        }else if(count > 2){
            window.location.href = "welcome.html"
        }
    }
}

const idName = document.getElementById("userID")


function add(e){ // input user
    
    let idValue = idName.value;
    const pass = document.getElementById("userPass")
    let passValue = pass.value;
    

    return [idValue, passValue]
}


    