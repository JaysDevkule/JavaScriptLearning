function stringTemplate() {
    console.log(`My dream company is "Infosys"`);
    var hobby1="Traveling",hobby2="Reading",hobby3="Gardening";

    console.log(`"My hobbies are:" ${hobby1},${hobby2},${hobby3}`);
    console.log(`"My hobbies are:" ${hobby1+hobby2+hobby3}`);
    
}stringTemplate();
console.log("--------------------------------------->");
var str="  Hey you are doing good, keep it up  "
var stringHandsOn=function () {
    console.log("-------------------------------------->");
    console.log(`1.string: ${str}`);
    console.log("-------------------------------------->");
    console.log(`2.Length of string: ${str.length}`);
    console.log("-------------------------------------->");
    var msgtrim=str.trim()
    console.log(`3.removing spaces:${msgtrim}`);
    console.log("-------------------------------------->");
    console.log(`4. count spaces:${str.split(" ").length-1}`);
    console.log("-------------------------------------->");
    console.log(`5.first char:${msgtrim.charAt(0)}`,`last char:${msgtrim.charAt(msgtrim.length-1)}`);
    console.log("-------------------------------------->");
    var stepSplit= msgtrim.split(" ");
    console.log(`6.total number of words:${stepSplit.length}`);
    console.log("-------------------------------------->");
    console.log(`7. index of:${msgtrim.indexOf("good")}`);
    console.log("-------------------------------------->");
    console.log(`8.substring of :${msgtrim.substring(22)}`);
    console.log("-------------------------------------->");
    console.log(`9.string ends with "up":${msgtrim.endsWith("up")}`);
    console.log("-------------------------------------->");
    console.log(`10. string starts with "Hey":${msgtrim.startsWith("Hey")}`);
    

    

}
stringHandsOn();
