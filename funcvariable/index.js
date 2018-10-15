//変数に関数を代入
var calc = function (numA, numB) {
    return numA + numB;
};
var numA = 3.5;
var numB = 2;
//変数に関数を代入しておくと別の関数に変更できる
if (numA > numB) {
    calc = function (a, b) {
        return a - b;
    };
}
//実装が変わっている
document.body.innerHTML = calc(numA, numB).toString();
