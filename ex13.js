function out_log(msg) {
  console.log(msg);
}
out_log("Вызов функции"); // тут уже вводит что за параметр
out_log("Второй вызов");
out_log(1);
out_log(true);

function showMessage(from, text) {
  let msg = from + " " + email + ": " + text; // функция может обращаться к переменной вне зоны ее видемости во вне
  console.log(msg);
}
let email = "anna@m.ru";
showMessage("Аня", "Привет!");
showMessage("Аня", "Как дела?");
