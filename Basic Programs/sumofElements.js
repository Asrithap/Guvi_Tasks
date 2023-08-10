const arr = [2, 4, 6];

function add(arr) {
  var sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(add(arr));
