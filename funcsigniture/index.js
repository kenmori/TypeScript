//「この変数は今はまだ空だが関数型」という意味
var calc;
var numA = 3;
var numB = 3;
if (numA > numB) {
    calc = function (a, b) {
        return a - b;
    };
}
else if (numA < numB) {
    calc = function (a, b) {
        return a + b;
    };
}
else {
    calc = function (a, b) {
        return a * b;
    };
}
document.body.innerHTML = calc(numA, numB).toString();
