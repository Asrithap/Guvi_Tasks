//display value

var obj = {
  menu: {
    id: 'file',
    value: 'File',
    popup: {
      menuitem: [
        { value: 'new', onClick: 'createDoc()' },
        { value: 'open', onClick: 'openDoc()' },
        { value: 'save', onClick: 'saveDoc()' },
      ],
    },
  },
};
const aa = obj.menu.popup.menuitem;
for (var i = 0; i < aa.length; i++) {
  console.log(aa[i].value);
}

const data = {
  name: 'john',
  age: 22,
  hobby: {
    reading: true,
    gaming: false,
    sport: 'football',
  },
  classes: ['javascript', 'html', 'css'],
};
console.log(data.hobby.sport);
for (let i = 0; i < data.classes.length; i++) console.log(data.classes[i]);

// to get age
console.log(data.age);
//new way of writing using destructuring concept
//Object Destructuring
const { age } = data;
console.log(age);

//print sport
const { sport } = data.hobby;
console.log(sport);

const { classes } = data;
console.log(classes[1]);

//Array Destructuring
var arr = [1,2,3,4,5,6,7];
// const [a,b,c,d,e,f,g] = arr or
const [,,,d,e]=arr
// console.log(a,b,c,d,e,f,g)
console.log(d,e)



