const PSW = "password";
let psw = null;
do {
  psw = prompt("Введите пароль", "");
} while (psw != PSW);
console.log("Вы вошли в систему!");
