function showMessage(from, text) {
  let email = "+"; // Она будет в приоритете
  let msg = from + " " + email + ": " + text;
  console.log(msg);
}
let email = "anna@m.ru";
showMessage("Аня", "Привет!");
showMessage("Аня", "Как дела?");
