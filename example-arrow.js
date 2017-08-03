var names = ['Ricsi','Fruzskoka','Cica'];

// names.forEach(function (name) {  //anonymus funksön
//   console.log('forEach',name);
// });
//
// names.forEach((name) => {   //arrow funksön
//   console.log('arrowFunc',name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!'; // arrow funksön
// console.log(returnMe('Ricsi'));

// var person = {
//   name: 'Ricsi',
//   greet: function () {
//       names.forEach((name) => {
//         console.log(this.name + ' says hi to ' + name);
//       })
//   }
// }
//
// person.greet();

//Challenge are

function add (a, b) {
  return a + b;
}

var addStatement = (a, b) => a+b;

console.log(add(1,3));
console.log(add(9,0));
console.log(addStatement(2,3));
