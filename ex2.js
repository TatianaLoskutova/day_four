let S = 0,
  i = 1;
while (i <= 1000 && S < 5) {
  S += 1 / i;
  ++i;
}

console.log(S);
