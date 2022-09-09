let form = document.querySelector("#form");
let formInputs = document.querySelectorAll("input");

let email = document.getElementById("email");
let phone = document.getElementById("phone");
let checkbox = document.getElementById("checkbox");

let password = document.getElementById("password");
let passwordRepeat = document.getElementById("passwordRepeat");

let btn = document.getElementById("btn");
let errorMessage = document.getElementById("errorMessage");



function emailValidation(email) {
    let emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return emailFormat.test(String(email).toLowerCase());
}

function phoneValidation(phone) {
    let phoneFormat = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return phoneFormat.test(String(phone));
}


form.onsubmit = function (event) {
    event.preventDefault();//отменяет стандартное поведение при отправке формы;
    
    let emailVal = email.value;
    let phoneVal = phone.value;
    let passwordVal = password.value;
    let passwordRepeatVal = passwordRepeat.value;

    let emptyInputs = Array.from(formInputs).filter(input => input.value === '');
    errorMessage.innerHTML = "";

    formInputs.forEach(function(input){
        if(input.value == ''){
            input.classList.add('error');
            return false;
        }else{
            input.classList.remove('error');
        }
    });
    
    if (emptyInputs.length !== 0 ) {
        errorMessage.innerHTML = "fill out all the fields<br>";
        return false;
    }

    if (!emailValidation(emailVal)) {
        email.classList.add('error');
        errorMessage.innerHTML = "check your email<br>";
        return false;
    }else{
        email.classList.remove('error');
    }

    if (!phoneValidation(phoneVal)) {
        phone.classList.add('error');
        errorMessage.innerHTML = "check your phone number<br>";
        return false;
    } else {
        phone.classList.remove('error');
    }

    if (passwordVal.length < 7) {
        password.classList.add('error');
        errorMessage.innerHTML = "password should consist 7 or more symbols<br>";
        return false;
    } else {
        password.classList.remove('error');
    }


    if (passwordVal !== passwordRepeatVal) {
        password.classList.add('error');
        passwordRepeat.classList.add('error');
        errorMessage.innerHTML = "passwords don't match<br>";
        return false;
    } else {
        password.classList.remove('error');
        passwordRepeat.classList.remove('error');
    }

    if(!checkbox.checked) {
        console.log('checkbox not checked');
        checkbox.classList.add('error');
        return false;
    } else {
        checkbox.classList.remove('error');
    }

    let user = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        email: email.Val,
        phone: phoneVal,
        password: passwordVal,
        repeatPassword: passwordRepeatVal,
    }
    console.log(user);

    fetch("https://httpbin.org/post", 
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}