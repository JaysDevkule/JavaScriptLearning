console.log("-----------------Assignment 0A-------------------->>>>>");
console.log("Step1");
function maleMarriageEligibility(gender,age,boyName) {
    var msg= gender=="Male" && age>=21  ? `"Hey ${boyName} you are eligible for marriage" `: `"Hey ${boyName} Not eligible for marriage"`;
    return msg;
    
}
console.log(maleMarriageEligibility("Male",25,"Billgates"));
console.log(maleMarriageEligibility("Male",17,"Stew Jobs"));
console.log("step2");
function FemaleMarriageEligibility(gender,age,girlName) {
   if (gender=="Female" && age>=18)
    {
    console.log(`"Hey ${girlName} you are eligible for marriage"`);
    }
 else{
   console.log(`"Hey ${girlName} not eligible for marriage"`);  
    }
}
FemaleMarriageEligibility("Female",16,"Jennifer");
FemaleMarriageEligibility("Female",27,"Malinda Gates");
