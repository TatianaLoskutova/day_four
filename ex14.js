function showMessage(from, text) {
  email += "+"; // eсли внутри мы измеим переменную, то и в Глобальной зоне буде +, а не почта
  let msg = from + " " + email + ": " + text;
  console.log(msg);
}
let email = "anna@m.ru";
showMessage("Аня", "Привет!");
showMessage("Аня", "Как дела?");
