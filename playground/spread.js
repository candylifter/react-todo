// function add (a, b) {
//   return a + b
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
//
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andre', 25];
var personTwo = ['Jen', 29];

//Hi Andre, yar 25

var name = ['Mike', 'Ben'];
var final = ['Martynas', ...name];

function greeter(name, age) {
  return 'Hi ' + name + ', you\'re ' + age;
}

console.log(greeter(...person));
console.log(greeter(...personTwo));

function greeterTwo(people) {
  people.forEach(function (person) {
    console.log('Hello ' + person);
  });
}

greeterTwo(final);
