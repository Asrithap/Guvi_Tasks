function SumofEven(a) {
  let sum = 0;
  for (let i = 1; i <= a; i++) {
    if (i % 2 == 0) {
      sum = sum + i;
    }
  }
  return sum;
}
var n = 6;
console.log(SumofEven(n));
