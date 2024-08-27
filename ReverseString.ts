// Reverse the string 


// Basic solution
function reverseStr(data:string) {
    let reversedStr= '';
    for (let index = data.length - 1; index >= 0; index--) {
        reversedStr += data[index];
        
    }
    console.log(reversedStr);
}

let str = "Rahul";
reverseStr(str);


// Optimum solution

function reverseStr1(data:string) {
    let reversedStr2= data.split('').reverse().join('');
    console.log(reversedStr2);
}

let str1 = "Rahul";
reverseStr1(str1);
