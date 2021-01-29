function guest () {
    let user = {
        email: 'guest@guest',
        password: "guest"
    }
    localStorage.setItem(`password`, user.password)
    localStorage.setItem(`username`, user.email)
    

    // const getUserLocal = localStorage.getItem("username")
    // const getPassLocal = localStorage.getItem("password") 
}
const idName = document.getElementById("userID")
let idValue = idName.value;

   
function save (e){ // input user
    
    const pass = document.getElementById("userPass")
    let passValue = pass.value;

    // console.log("a");
    // localStorage.setItem('idName',idName)
    // localStorage.setItem('pass', 30)
    

    console.log(idName, idValue);
    console.log(pass, passValue);
    // e.preventDefault()


    // let test = JSON.stringify(idName)
    // console.log(test);
    // console.log(localStorage.getItem("idName"));
}

