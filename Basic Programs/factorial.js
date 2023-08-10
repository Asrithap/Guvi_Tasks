function factorial(a) {
  var fact = 1;
  for (var i = a; i > 0; i--) {
    fact = fact * i;
  }
  return fact;
}

console.log(factorial(5));
