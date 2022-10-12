var funCheck=function(num1,num2) 
{  
   var result= num1>num2 ? num1 : num2;
   console.log(`The greatest number is : ${result}`);
}
funCheck(10,-10);
funCheck(800,899);
console.log("------------------------------------>>>>>>>");
var funCheck2=function(num){
    return num%2==0 ? true:false;  
}
console.log(`result of 29 : ${funCheck2(29)}`);
console.log(`result of 44 : ${funCheck2(44)}`);
console.log(`result of 101: ${funCheck2(101)}`);
console.log(`result of 0: ${funCheck2(0)}`);
console.log("------------------------------------>>>>>>>");

var isEvenOdd=function(word){
    var lenData=word.length;
    var data=lenData%2==0 ? "EVEN": "ODD";
    return data;
}
console.log(`JavaScript length is: ${isEvenOdd("JavaScript")}`);
console.log(`JavaScript length is: ${isEvenOdd("Developer")}`);
console.log(`JavaScript length is: ${isEvenOdd("google")}`);  