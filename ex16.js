function showMessage(from, text = "Как дела?") {
  let email = "+"; // Она будет в приоритете
  let msg = from + " " + email + ": " + text;
  console.log(msg);
}
let email = "anna@m.ru";
showMessage("Аня");
showMessage("Аня");

function abs(x) {
  if (x < 0) x = -x;
  return x;
}
let res = abs(-5);
console.log(res);
