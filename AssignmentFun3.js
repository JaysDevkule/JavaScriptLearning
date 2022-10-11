console.log("*******************Assignment3.1********************");

function myFunction1() {
    console.log("This is first function");
}
myFunction1();

function myFunction2() {
    console.log("This is second function");
}
myFunction2();

function myFunction3() {
    console.log("This is third function");
}
myFunction3();

console.log("*******************Assignment3.2********************");
function concatName(firstName,lastName) {
    console.log("concated name is="+ firstName + lastName);
    
}
concatName("jays","dev");

console.log("*******************Assignment3.3********************");
function swap_values(data1,data2) {
    console.log("Before Swap");
    console.log(data1,data2);
    var temp;
    temp=data1;
    data1=data2;
    data2=temp;
    console.log("after Swap");
    console.log(data1,data2);  
}
swap_values("virat","anushka");
swap_values(1000,2000);
console.log("*******************Assignment3.4********************");

function add_three_numbers(a1,a2,a3) {
    
    return a1+a2+a3;

}
var x=add_three_numbers(10.12,600,40);
console.log(x);
var x=add_three_numbers("Hello","Good","Morning");
console.log(x);
