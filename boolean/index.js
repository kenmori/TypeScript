var switchOne = true;
var switchTwo = false;
var resultStr;
if (switchOne && switchTwo) {
    resultStr = "明るいです";
}
else if (!switchOne && !switchTwo) {
    resultStr = "真っ暗です";
}
else {
    resultStr = "ちょっと暗いです";
}
document.body.innerHTML = resultStr;
