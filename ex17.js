function abs(x) {
  return x < 0 ? -x : x;
}
let res = abs(-5);
console.log(res);

function sum(a, b) {
  return a + b; // как только встречается оператор return, все что псоле уже не работает, т.е тут лог писать после нет смысла
}
let res1 = sum(4, 5);
console.log(res1);

function div(c, d) {
  if (d == 0) return Infinity;
  return c / d;
}
let resDiv = div(8, 0);
console.log(resDiv);

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    console.log(i);
  }
}

showPrimes(10);
