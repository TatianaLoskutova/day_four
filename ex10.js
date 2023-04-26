let S = 0,
  M = 10,
  N = 5;
all: for (
  // прервется весь цикл благодаря метке , что ниже
  let i = 1;
  i <= N;
  ++i
)
  for (let j = 1; j <= M; ++j) {
    if (j == 5) break all; // имя брейка произвольно берется
    S += i * j;
  }

console.log("S= " + S);
