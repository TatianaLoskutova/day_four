let f,
  k = 0.5,
  b = 2;
let x = 0;
for (;;) {
  if (x > 1) break;
  f = k * x + b;
  console.log(f);
  x += 0.1;
}
