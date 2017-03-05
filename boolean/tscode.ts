let switchOne = true;
let switchTwo = false;
let resultStr: string;

if(switchOne && switchTwo){
    resultStr = "明るいです";
} else if (!switchOne && !switchTwo) {
    resultStr = "真っ暗です";
} else {
    resultStr = "ちょっと暗いです";
}
document.body.innerHTML = resultStr;
