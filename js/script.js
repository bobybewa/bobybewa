const masuk = document.getElementById("login");
const daftar = document.getElementById("register");
const tombol = document.getElementById("btn")

// swipe
function register(){
    alert("Sorry, our website is in error! you can login with guest account.");
    alert(`username : guest@guest, password : guest`)
}

// function register(){
//     masuk.style.left = "40px"
//     daftar.style.left = "-400px"
//     tombol.style.left = "110px"
// }

function login(){
    masuk.style.left = "50px"
    daftar.style.left = "450px"
    tombol.style.left = "0"
}

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


    