const obj = {
  name: 'spiderman',
  power: 0,
  weapon: 'web',
  attack: () => {
    console.log(obj.name + ' i am attacking with my weapon :' + obj.weapon);
    obj.power = obj.power - 10;
    console.log('after attacking current power : ' + obj.power);
    return obj.power;
  },
  sleep: () => {
    console.log('i am sleeping');
    obj.power = obj.power + 20;
    console.log('after sleeping current power : ' + obj.power);
    return obj.power;
  },
};

const powerRangers = () => {
  if (obj.power > 0) {
    obj.attack();
  } else {
    obj.sleep();
  }
};
// console.log(obj.attack());
// console.log(obj.sleep());
console.log(powerRangers());
