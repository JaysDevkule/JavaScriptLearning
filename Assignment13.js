console.log("----------------------1.total no of vowels----------------->>>>>>>>>");
var str="Good Morning IT Champ";
var strlowercase=str.toLocaleLowerCase(),count=0;
for (let index = 0; index < str.length; index++) {
    var char=strlowercase.charAt(index);
    if (char=="a"|| char=="e"||char=="i"||char=="o"||char=="u") {
        console.log(char);
        count=count+1;
    }    
}
console.log("-----------------------2----------------->>>>>>>>>");
function getVowels(str){
    var strlowercase=str.toLocaleLowerCase();
    var count=0;
    const vowels=['a','e','i','o','u'];
for (let char of strlowercase) 
{
    if(vowels.includes(char))
    {
        count++
    }
}
return count;
}
console.log(`Total vowels   ${getVowels("I Love JavaScript")}`);
console.log("-------------------------3------------------>>>>>>>>>");
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  console.log(`sum of 1 to 10   ${sumTo(10)}`);
  console.log("----------------------------4-------------------->>>>>>>");
  function sumToSquare(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {

      sum += (i*i);
    }
    return sum;
  }
  console.log(`sum of square 1 to 10   ${sumToSquare(5)}`);
console.log("-----------------------------------5---------------------------->>>>>");
var string1="Hard work always pays back",string2="Soon I will be React IT Champ";
var removedSpacesText1 =string1.split(" ").join("");
var removedSpacesText2 =string2.split(" ").join("");
function evenPositionedChars(){
  
    for(let i=0;i<removedSpacesText1.length;i++){
         if(i%2==0){
             console.log(removedSpacesText1.charAt(i));
         }
     }
 }
console.log(removedSpacesText1);
evenPositionedChars();
function oddPositionedChars(){
  
    for(let i=0;i<removedSpacesText2.length;i++){
         if(i%2!=0){
             console.log(removedSpacesText2.charAt(i));
         }
     }
 }
 console.log(removedSpacesText2);
oddPositionedChars();