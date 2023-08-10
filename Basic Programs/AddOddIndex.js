const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
const AddOddIndex = () => {
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 == 1) {
      sum = sum + arr[i];
    }
  }
  return sum;
};

console.log(AddOddIndex());
