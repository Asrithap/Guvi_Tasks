// filter out only the even elements
// arr = [2,4,3,1,5,6]

// store the adult age only
// arr = [32,33,12,40]

const arr = [2, 4, 3, 1, 5, 6, 12];
const filteredArr = arr.filter((item) => {
  if (item % 2 == 0) {
    return item;
  }
});
console.log(filteredArr);

const ages = [32, 33, 12, 40, 6, 2];
const filteredAges = ages.filter((item) => {
  if (item >= 18) {
    return item;
  }
});
console.log(filteredAges);
