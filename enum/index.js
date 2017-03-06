var Size;
(function (Size) {
    Size[Size["SS"] = 0] = "SS";
    Size[Size["S"] = 1] = "S";
    Size[Size["M"] = 2] = "M";
    Size[Size["L"] = 3] = "L";
    Size[Size["LL"] = 4] = "LL";
})(Size || (Size = {}));
;
var sizeStr;
var theSize = Size[Size.L];
switch (theSize) {
    case Size[Size.SS]:
        sizeStr = "とてもかわいい";
        break;
    case Size[Size.S]:
        sizeStr = "控えめですね";
        break;
    case Size[Size.M]:
        sizeStr = "汎用的ですね";
        break;
    case Size[Size.L]:
        sizeStr = "思い切りましたね";
        break;
    case Size[Size.LL]:
        sizeStr = "堂々としたものです";
        break;
    default:
        break;
}
console.log(sizeStr);
document.body.innerHTML = sizeStr;
