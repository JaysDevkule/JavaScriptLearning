console.log("--------------------1--------------->");
var wordLengthSquare=function(value1)
{
    var len=value1.length;
    var result=len*len;
    console.log(`square of length:`);
    return result;

}
console.log(`"JavaScript"`);
console.log(wordLengthSquare("JavaScript"));
console.log("----------------------------------->");
console.log(`"Google"`);
console.log(wordLengthSquare("Google"));
console.log("----------------------------------->");
console.log(`"Developer"`);
console.log(wordLengthSquare("Developer"));

console.log("--------------------2------------------>");
var str="I am React Developer";;
function reversestr(){
    console.log(`Before reverse: ${str}`);
    return str.split('').reverse().join('');
}
console.log(`After reverse: ${reversestr()}`);
console.log("--------------------------------------->");
function opt(){
var lenopt=str.length;
var strsplt=str.split(" ").length;
var resopt=lenopt/strsplt;
console.log(`Result of divide : ${resopt} `);
var resopt1=lenopt*strsplt;
console.log(`Result of multiplication : ${resopt1} `);


}
opt();


