let S = 0,
  M = 10,
  N = 5;
for (let i = 1; i <= N; ++i)
  for (let j = 1; j <= M; ++j) {
    if (j == 5) break; // прервет только второй цикл, не первый
    S += i * j;
  }

console.log("S= " + S);
