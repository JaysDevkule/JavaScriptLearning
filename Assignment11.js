console.log("---------------Assignment 0B------------------>>>>>>");
function check(value) {
    if (value/2==0) {
        console.log(`${value} is EVEN`);
    }
    console.log(`${value} is ODD`); 
}
check(45);
check(70);
check(67);
check(98);
console.log("------------------------------------>>>>>>>");
function check2(vote){
    if(vote>=18)
    {
        console.log(`${vote} you are eligible for vote`);
    }else{
    console.log(`${vote} you are NOT eligible for vote`);
    }
}
check2(18);
check2(20);
check2(17);
check2(40);
console.log("----------------------------------------->>>>>>.");

function check3(str) {
    var len=str.length;
    if(len>=10){
        console.log(`Having more than 10 characters`);
    }else{
    console.log(`Having more than 10 characters`);
    }
}
console.log("------------------------------------------>>>>>");
function check4(str){
    var char="Java";
    if(str.indexOf(char) == 0)
    {
        console.log(`"Yes This string is start with Char "Java""`);
    }
    else{
        console.log(`"Yes This string is start with Char "Java""`);
    }
}

check4("JavaScript Language");