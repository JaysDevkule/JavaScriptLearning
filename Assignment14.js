var string1="Hard work always pays back",string2="Soon I will be React IT Champ";
function reverseString(str)
{
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    console.log(newString);
}
console.log(string1);
reverseString(string1);
console.log(string2);
reverseString(string2);