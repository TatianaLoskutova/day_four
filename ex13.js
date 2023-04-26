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

function showMessage1(from, text) {
  emailA += "+"; // eсли внутри мы измеим переменную, то и в Глобальной зоне буде +, а не почта
  let msg1 = from + " " + email + ": " + text;
  console.log(msg1);
}
let emailA = "anna@m.ru";
showMessage1("Аня", "Привет!");
showMessage1("Аня", "Как дела?");
