var count = 0;
const findVowelCount = (str, v) => {
  //   const lowerStr = toLowerCase(str);
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == v.toLowerCase()) {
      count++;
    }
  }
  return count;
};
console.log(findVowelCount('Ashritheeaa', 'E'));
