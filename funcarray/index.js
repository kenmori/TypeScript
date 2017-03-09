//シグネチャが同じで内容が異なる関数を変数に代入すると関数の配列を作ることができる
var numA = 3;
var numB = 2;
var add = function (a, b) {
    return a + b;
};
var sub = function (a, b) {
    return a - b;
};
var multi = function (a, b) {
    return a * b;
};
var div = function (a, b) {
    return a / b;
};
var br = "<br>";
var resultStr = "";
var calcs = [add, sub, multi, div];
for (var _i = 0, calcs_1 = calcs; _i < calcs_1.length; _i++) {
    var calc = calcs_1[_i];
    resultStr += calc(numA, numB) + br;
}
document.body.innerHTML = resultStr;
