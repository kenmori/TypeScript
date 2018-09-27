enum Size {SS, S, M, L, LL};

let sizeStr: string;
let theSize = Size[Size.L];

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

