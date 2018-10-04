var numA = 3.5;
var numB = 2;
var resultStr;
function add(x, y) {
    return x + y;
}
resultStr = numA + "\u3068" + numB + "\u3092\u8DB3\u3059\u3068" + add(numA, numB);
document.body.innerHTML = resultStr;
