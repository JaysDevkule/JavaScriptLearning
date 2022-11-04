// let person={name:"john",
//             age:30,
//             address:"Pune",
//             greet: function(){ console.log("hello")}
//             };
// console.log(person.name);
// person.greet();
// class Person{
//     name;
//     age;
//     constructor(name,age)
//     {
//         this.name=name;
//         this.age=age;
//     }
//     play(){
//         console.log("playing cricket");
//     }
//     eat()
//     {
//         console.log("eating mango");
//     }

// }
// let anilPerson= new Person("anil",25);
// let ritaPerson= new Person("rita",30);
// anilPerson.name;
// anilPerson.play();
// ritaPerson.eat();
// let date=new Date();
// console.log(date);
// console.log(date.getDate());
// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMonth());
const letter=new Set(["a","b","c"]);
console.log(letter.size);
let text = "";
letter.forEach (function(value) {
  text += value ;
})
console.log(text);