function check(){
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let passwordRepeat = document.getElementById("passwordRepeat");

    document.getElementById('errorMessage').innerHTML = "";
    if (name.value == ''){
        document.getElementById('errorMessage').innerHTML += "Type your name <br/>";
    }
    else if (surname.value == ''){
        document.getElementById('errorMessage').innerHTML += "Type your last name <br/>";
    }
    else if (email.value == ''){
        document.getElementById('errorMessage').innerHTML += "Type your email <br/>";
    }
    else if (password.value == ''){
        document.getElementById('errorMessage').innerHTML += "Type your password <br/>";
    }
    else if (passwordRepeat.value == ''){
        document.getElementById('errorMessage').innerHTML += "Repeat your password <br/>";
    }
    else if (password.value.length<=5){
        document.getElementById('errorMessage').innerHTML += "Password need to contain 6 and more symbols <br/>";
    }
    else if(password.value !== passwordRepeat.value){
        document.getElementById('errorMessage').innerHTML += "Password is not the same!";
    }
    else {
        alert(`Welcome, ${name.value} !`)
    }
}  