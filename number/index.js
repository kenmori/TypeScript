var resultStr;
var numA = 3;
var numB = 11;
var add = "加算 : ";
var sub = "減算 : ";
var mul = "乗算 : ";
var div = "除算 : ";
var br = "<br>";
resultStr = add + (numA + numB) + br
    + sub + (numA - numB) + br
    + mul + (numA * numB) + br
    + div + (numA / numB) + br;
document.body.innerHTML = resultStr;
