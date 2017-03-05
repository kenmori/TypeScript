let resultStr:string;
let numA = 3;
let numB = 11;
const add = "加算 : ";
const sub = "減算 : ";
const mul = "乗算 : ";
const div = "除算 : ";
const br = "<br>";

resultStr =  add + (numA + numB) + br
            + sub + (numA - numB) + br
            + mul + (numA * numB) + br
            + div + (numA / numB) + br


document.body.innerHTML = resultStr;
