const existedUserLogin ="the_best_user"
const existedUserPassword = "12345678"


const userLogin = prompt("Введите логин")
const userPassword = prompt("Введите пароль")

if(existedUserLogin === userLogin.trim()){
    if(existedUserPassword === userPassword.trim()){
        alert("Добро пожаловать " + existedUserLogin)
    }else{
        alert("Неверный пароль")
    }
} else{
    alert("Неверный Логин")
}


