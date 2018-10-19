//Statement Syntax :

// Arrow functions can be used without problems if we do not want to use this keyword and Arguments keywords.
// TO use this keyword and Arguments we may need to use regular ES 5 functions..
var square = (x) => { return x*x }

//Expression Syntax :

var square1 = (x) =>  x*x ;

// when one argument is there no need to use parentheses but if we have zero or more than 1 arguments then we would need to specify
// parentheses
console.log("Statement Syntax",square(9));
console.log("Expression Syntax",square1(9));


var user = { name: "raj" , sayHi:() => {console.log(`Hi i'm ${this.name}`)} , sayHiAlt ()  { console.log(`Hi i'm ${this.name}`) }};
user.sayHiAlt()



// Without arrow functions

// const myObj = {
//     greeting: "Hello",
//     people: ["Adam", "Mike", "Andrew"],
//     sayHello: function () {
//         const that = this // You need this line in order to access 'this' in the inner function.
//         this.people.forEach(function (person) {
//             console.log(that.greeting + " " + person)
//         })
//     }
// }


//With arrow functions

const myObj =
{
    greeting: "Hello",
    people: ["Adam", "Mike", "Andrew"],
    sayHello: function () {
        this.people.forEach(person => console.log(this.greeting + " " + person))
    }
  }

myObj.sayHello()
