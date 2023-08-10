// arr = [2,5,6,8,9];
// 1) multiply each item by 10;
// 2) calculate the sum of only the even elements present in Array
// 3)calculate the multiplication of only the odd elements present in Array
// using Map()

var arr = [2, 5, 6, 8, 9];
// var arrowFunc = (item)=>{
//     return item*10
// }
// var newArr = arr.map(arrowFunc);
// console.log(newArr)

var sum=0;
var arrowFunc2 = (item)=>{
    if(item%2==0)
    {
        sum+= item
    }
    return sum
};
arr.map(arrowFunc2)
console.log(sum)

var mul =1;
var arrowFunc3 = (item) => {
  if (item % 2 == 1) 
  {
    mul*=item
  }
  return mul
};
arr.map(arrowFunc3);
console.log(mul)

